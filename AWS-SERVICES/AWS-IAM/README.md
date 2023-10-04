# AWS IDENTITY AND ACCESS MANAGEMENT (IAM)
<p>AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources. With IAM, you can centrally manage permissions that control which AWS resources users can access. You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources.</p>

# IAM features
<p>IAM gives you the following features:</p>

1. Shared access to your AWS account
<p>You can grant other people permission to administer and use resources in your AWS account without having to share your password or access key.</p  >

2. Granular permissions
<p>You can grant different permissions to different people for different resources. For example, you might allow some users complete access to Amazon Elastic Compute Cloud (Amazon EC2), Amazon Simple Storage Service (Amazon S3), Amazon DynamoDB, Amazon Redshift, and other AWS services. For other users, you can allow read-only access to just some S3 buckets, or permission to administer just some EC2 instances, or to access your billing information but nothing else.</p>

3. Secure access to AWS resources for applications that run on Amazon EC2
4. Multi-factor authentication (MFA)
5. Identity federation:
   `You can allow users who already have passwords elsewhere—for example, in your corporate network or with an internet identity provider—to get temporary access to your AWS account`

6. Identity information for assurance
7. PCI DSS Compliance
<p>IAM supports the processing, storage, and transmission of credit card data by a merchant or service provider, and has been validated as being compliant with Payment Card Industry (PCI) Data Security Standard (DSS)</p>
``` json
{
"myname" : "john"'
"age" : 23
}
```

8. Integrated with many AWS services
9. Eventually Consistent
    

# When do I use IAM?
1. When you are performing different job functions
2. When you are authorized to access AWS resources
3. When you sign-in as an IAM user
4. When you assume an IAM role
5. When you create policies and permissions
