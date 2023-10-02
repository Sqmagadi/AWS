# Challenge


Design and implement a solution that can help an organization improve its document management system.

 The goal is to enable writers to upload documents directly to an S3 bucket, which will make it easier for the team leader to keep track of all documents and their word count. 
 
 Your team should create a simple solution to allow writers to upload documents in an S3 bucket, and send a notification to the team leader with the word count every time a document is uploaded to the bucket. 

 ***
# Solution steps

## Design the Solution
![image](/project1AWSwordCount/projectimages/Design.png)


### 1. Create an Amazon S3 Bucket
- Search for "S3" in the AWS Management Console.
- Click the "Create bucket" button.
- Enter a unique and meaningful name for your bucket.
- Choose a region for your bucket (select one geographically close to your users for better performance).
- Configure other settings as needed (e.g., versioning, logging, and access control). Ensure that you set up appropriate permissions to allow writers to upload documents.
- Click "Create bucket."
![image](/project1AWSwordCount/projectimages/BucketCreate.png)

### Cross Origin Resource Sharing (CORS) Configuration
This step is required if you want to allow users to upload documents directly to your S3 bucket from a web browser.

- Click the name of your bucket.
- Click the "Permissions" tab.
- Click the "CORS configuration" button.
- Paste the following configuration into the editor and click "Save."
```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["PUT"],
    "AllowedOrigins": ["http://localhost:3000"], //change this to your website
    "ExposeHeaders": []
  }
]

```

### 2. Create an Amazon Simple Notification Service (SNS) Topic
- Search for "SNS" in the AWS Management Console.
- Click the "Create topic" button.
- Give your topic a name and display name.
- Click "Create topic."
- Click the name of your topic.
- Click "Create subscription."
- Select "Email" as the protocol.
- Enter your email address.
- Click "Create subscription."
- Check your email and click the link to confirm your subscription.


### 3. Create an IAM Role
- Search for "IAM" in the AWS Management Console.
- Click "Roles" in the left navigation bar.
- Click the "Create role" button.
- Select "Lambda" as the trusted entity.
- Click "Next: Permissions."
- Search for "S3" in the search bar.
- Select the "AmazonS3FullAccess" policy.
- Search for "SNS" in the search bar.
- Select the "AmazonSNSFullAccess" policy.
- Enter a name for your role.
- Click "Create role."

(If you do not want to use the AmazonS3FullAccess and AmazonSNSFullAccess policies, you can give AdminstratratorAccess to the role.) 

Note: This is not recommended for production environments.


### 4. Create an AWS Lambda Function
- Search for "Lambda" in the AWS Management Console.
- Click the "Create function" button.
- Select "Author from scratch."
- Enter a name for your function.
- Select a runtime (e.g., Python 3.11).
![image](/project1AWSwordCount/projectimages/functioncreate.png)
- Select the IAM role you created in the previous step.
- Click "Create function."
- In the "Function code" section, paste the code and deploy the function.
```python
import boto3
import json
import re

s3 = boto3.client('s3')
sns = boto3.client('sns')

def lambda_handler(event, context):
    # Get the S3 bucket and object key from the Lambda event
    bucket = event['Records'][0]['s3']['bucket']['name']
    key = event['Records'][0]['s3']['object']['key']

    # Download the file from S3
    response = s3.get_object(Bucket=bucket, Key=key)
    content = response['Body'].read().decode('utf-8')

    # Count words using a simple regex
    word_count = len(re.findall(r'\b\w+\b', content))

    # Publish the word count to SNS
    sns.publish(
        TopicArn='YOUR_SNS_TOPIC_ARN',
        Message=f'Word count for {key}: {word_count}'
    )

    return {
        'statusCode': 200,
        'body': json.dumps('Word count processed and notification sent.')
    }
```
- Replace `YOUR_SNS_TOPIC_ARN` with the ARN of the SNS topic you created in the previous step.

### 5. Create an Amazon S3 Event Notification
- Search for "S3" in the AWS Management Console.
- Click the name of your bucket.
- Click the "Properties" tab.
- Click the "Events notifications" tab.
- Click "Create event notification."
- Enter a name for your event notification.
- Select "All object create events."
- Select "Lambda function" as the destination.
- Select the Lambda function you created in the previous step.
- Click "Save changes."


### 6. Test the Solution
- Upload a document to your S3 bucket.
- Check your email for the word count notification.

![image](/project1AWSwordCount/projectimages/Email.png)

***

Congratulations! You have successfully implemented a solution that can help an organization improve its document management system.

