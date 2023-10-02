import './App.css';
import AWS from 'aws-sdk'
import {useRef, useState} from "react";
import {FaFileUpload, FaTimes} from "react-icons/fa";
import Message from "./Message";

function App() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadUrl, setUploadUrl] = useState(null);
    const [error, setError] = useState(null)
    const [isUploading, setIsUploading] = useState(false)
    const fileInput = useRef();

    const s3 = new AWS.S3({
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
        region: process.env.REACT_APP_AWS_REGION,
    });

    const onFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    }

    const removeFile = () => {
        setSelectedFile(null)
    }

    const closeMessage = (type) => {
        if (type === 'error') {
            setError(null)
            return;
        }
        setUploadUrl(null)
    }

    const fileUploadClick = () => {
        fileInput.current.click()
    }

    const onFileUpload = async () => {
        console.log("hhf")

        if (!setSelectedFile) return;
        setError(null);
        const params = {
            Bucket: process.env.REACT_APP_AWS_BUCKET_NAME,
            Key: selectedFile.name,
            Body: selectedFile,
        };

        try {
            setIsUploading(true)
            const data = await s3.upload(params).promise();
            setUploadUrl(data.Location);
            setSelectedFile(null)
        } catch (error) {
            setError("Error uploading file")
        }

        setIsUploading(false)

    }

    return (
        <div className="main">
            <header>
                <div className="container">
                    <FaFileUpload className="logo"/>
                    <h1>AWS S3 Document Uploader</h1>
                </div>
            </header>
            <div className="content">
                <div className="container">
                    <h2>Document Upload</h2>
                    <input type="file"
                           ref={fileInput}
                           onChange={onFileChange}
                           hidden
                           accept=".pdf, .doc, .docx, .txt"/>
                    <div className="file-input" onClick={fileUploadClick}>
                        <FaFileUpload className="file-icon"/>
                        <p>Browse files</p>
                    </div>
                    {selectedFile && (
                        <div className="file-display">
                            <p>{selectedFile.name}</p>
                            <FaTimes className="delete-btn" onClick={removeFile}/>
                        </div>
                    )}
                    {selectedFile && (
                        <button
                            onClick={onFileUpload}
                            className={`btn ${isUploading ? ' disabled' : ''}`}
                            disabled={isUploading}>
                            {isUploading ? 'Please wait...' : 'Upload'}
                        </button>
                    )}
                    {uploadUrl && (
                        <Message type="success" onClose={closeMessage}>
                            <p>File uploaded:</p>
                            <a href={uploadUrl} target="_blank" rel="noopener noreferrer">
                                view file
                            </a>
                        </Message>
                    )}
                    {
                        error && (
                            <Message type="error" onClose={closeMessage}>
                                {error}
                            </Message>
                        )
                    }
                </div>
            </div>
            <footer>
                <div className="container">
                    <p>&copy; <span>{new Date().getFullYear()}</span> All rights reserved</p>
                    <p>Built by <span>SQCODES</span></p>
                </div>
            </footer>
        </div>
    );
}

export default App;
