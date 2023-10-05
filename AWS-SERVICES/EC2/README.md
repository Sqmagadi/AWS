# Amazon EC2
Amazon Elastic Compute Cloud (Amazon EC2) provides on-demand, scalable computing capacity in the Amazon Web Services (AWS) Cloud. Using Amazon EC2 reduces hardware costs so you can develop and deploy applications faster. You can use Amazon EC2 to launch as many or as few virtual servers as you need, configure security and networking, and manage storage. You can add capacity (scale up) to handle compute-heavy tasks, such as monthly or yearly processes, or spikes in website traffic. When usage decreases, you can reduce capacity (scale down) again.

## Features of Amazon EC2
Amazon EC2 provides the following high-level features:

1. Instances
: Virtual servers.

2. Amazon Machine Images (AMIs)
: Preconfigured templates for your instances that package the components you need for your server (including the operating system and additional software).

3. Instance types
: Various configurations of CPU, memory, storage, networking capacity, and graphics hardware for your instances.

4. Key pairs
: Secure login information for your instances. AWS stores the public key and you store the private key in a secure place.

5. Instance store volumes
: Storage volumes for temporary data that is deleted when you stop, hibernate, or terminate your instance.

6. Amazon EBS volumes
: Persistent storage volumes for your data using Amazon Elastic Block Store (Amazon EBS).

7. Regions, Availability Zones, Local Zones, AWS Outposts, and Wavelength Zones
: Multiple physical locations for your resources, such as instances and Amazon EBS volumes.

8. Security groups
: A virtual firewall that allows you to specify the protocols, ports, and source IP ranges that can reach your instances, and the destination IP ranges to which your instances can connect.

9. Elastic IP addresses
: Static IPv4 addresses for dynamic cloud computing.

10. Tags
: Metadata that you can create and assign to your Amazon EC2 resources.

11. Virtual private clouds (VPCs)
: Virtual networks you can create that are logically isolated from the rest of the AWS Cloud. You can optionally connect these virtual networks to your own network.

# Access Amazon EC2
You can create and manage your Amazon EC2 instances using the following interfaces:

1. Amazon EC2 console
A simple web interface to create and manage Amazon EC2 instances and resources. If you've signed up for an AWS account, you can access the Amazon EC2 console by signing into the AWS Management Console and selecting EC2 from the console home page.

2. AWS Command Line Interface
Enables you to interact with AWS services using commands in your command-line shell. It is supported on Windows, Mac, and Linux.

3. AWS Tools for PowerShell
A set of PowerShell modules that are built on the functionality exposed by the AWS SDK for .NET. The Tools for PowerShell enable you to script operations on your AWS resources from the PowerShell command line. 

4. AWS CloudFormation
Amazon EC2 supports creating resources using AWS CloudFormation. You create a template, in JSON or YAML format, that describes your AWS resources, and AWS CloudFormation provisions and configures those resources for you. You can reuse your CloudFormation templates to provision the same resources multiple times, whether in the same Region and account or in multiple Regions and accounts. 

5. Query API
Amazon EC2 provides a Query API. These requests are HTTP or HTTPS requests that use the HTTP verbs GET or POST and a Query parameter named Action. 

6. AWS SDKs
If you prefer to build applications using language-specific APIs instead of submitting a request over HTTP or HTTPS, AWS provides libraries, sample code, tutorials, and other resources for software developers. These libraries provide basic functions that automate tasks such as cryptographically signing your requests, retrying requests, and handling error responses, making it easier for you to get started.

# Pricing for Amazon EC2

1. Free Tier
2. On-Demand Instances
Pay for the instances that you use by the second, with a minimum of 60 seconds, with no long-term commitments or upfront payments.
3. Savings Plans
You can reduce your Amazon EC2 costs by making a commitment to a consistent amount of usage, in USD per hour, for a term of 1 or 3 years.
4. Reserved Instances
You can reduce your Amazon EC2 costs by making a commitment to a specific instance configuration, including instance type and Region, for a term of 1 or 3 years.
5. Spot Instances
Request unused EC2 instances, which can reduce your Amazon EC2 costs significantly.
6. Dedicated Hosts
Reduce costs by using a physical EC2 server that is fully dedicated for your use, either On-Demand or as part of a Savings Plan. You can use your existing server-bound software licenses and get help meeting compliance requirements.
7. On-Demand Capacity Reservations
Reserve compute capacity for your EC2 instances in a specific Availability Zone for any duration of time.
8. Per-second billing
Removes the cost of unused minutes and seconds from your bill.



# Related services
You can provision Amazon EC2 resources, such as instances and volumes, directly using Amazon EC2. In addition, you can provision EC2 resources using other AWS services, such as the following:

A. Amazon EC2 Auto Scaling
Helps ensure you have the correct number of Amazon EC2 instances available to handle the load for your application.

B. AWS CloudFormation
Helps you model and set up your AWS resources using templates.

C. AWS Elastic Beanstalk
Deploy and manage applications in the AWS Cloud without having to understand the underlying infrastructure.

D. AWS OpsWorks
Automate how servers are configured, deployed, and managed across your Amazon EC2 instances using Chef and Puppet.

E. EC2 Image Builder
Automate the creation, management, and deployment of customized, secure, and up-to-date server images.

F. AWS Launch Wizard
Size, configure, and deploy AWS resources for third-party applications without having to manually identify and provision individual AWS resources.

## Additional related services
a. Amazon Lightsail
To build websites or web applications, you can deploy and manage basic cloud resources using Amazon Lightsail. To compare the features of Amazon EC2 and Lightsail for your use case, see Amazon Lightsail or Amazon EC2.

b. Elastic Load Balancing
Automatically distribute incoming application traffic across multiple instances.

c. Amazon Relational Database Service (Amazon RDS)
Set up, operate, and scale a managed relational database in the cloud. Although you can set up a database on an EC2 instance, Amazon RDS offers the advantage of handling your database management tasks, such as patching the software, backing up, and storing the backups.

d. Amazon Elastic Container Service (Amazon ECS)
Deploy, manage, and scale containerized applications on a cluster of EC2 instances.

e. Amazon CloudWatch
Monitor your instances and Amazon EBS volumes.

f. Amazon GuardDuty
Detect potentially unauthorized or malicious use of your EC2 instances.

g. AWS Backup
Automate backing up your Amazon EC2 instances and the Amazon EBS volumes attached to them.

