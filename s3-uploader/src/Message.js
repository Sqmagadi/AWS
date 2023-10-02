import React from 'react';
import {FaTimes} from "react-icons/fa";

const Message = ({children, type, onClose}) => {
    return (
        <div className={`message ${type === 'success' ? 'success' : 'error'} `}>
            <div className="top">
                <p>{type === 'success' ? 'Success' : 'Error'}</p>
                <FaTimes className="close-btn" onClick={() => onClose(type)}/>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default Message;
