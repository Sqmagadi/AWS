import boto3
import json
import tempfile
import docx2txt

s3 = boto3.client('s3')
sns = boto3.client('sns')
db = boto3.client('dynamodb')

def calculate_word_count(file_path):
    try:
        text = docx2txt.process(file_path)
        word_count = len(text.split())
        return word_count
    except Exception as e:
        print(f"Error calculating word count: {str(e)}")
        return 0

def lambda_handler(event, context):
    for record in event['Records']:
        s3_bucket = record['s3']['bucket']['name']
        s3_key = record['s3']['object']['key']
        
        # Download the file from S3 to a temporary location
        with tempfile.TemporaryDirectory() as temp_dir:
            temp_file_path = f'{temp_dir}/uploaded_file.docx'
            s3.download_file(s3_bucket, s3_key, temp_file_path)
            
            # Calculate word count
            word_count = calculate_word_count(temp_file_path)
            
            # Store word count in DynamoDB or your preferred database
            db.put_item(
                TableName='WordCount',
                Item={'DocumentName': {'S': s3_key}, 'WordCount': {'N': str(word_count)}}
            )
            
            # Send a notification
            sns.publish(
                TopicArn='arn:aws:sns:us-west-2:593655094322:paul-test1-bucket-topic',
                Message=f'Document {s3_key} uploaded with word count {word_count}'
            )
