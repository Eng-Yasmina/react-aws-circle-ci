| Runbook name       |             Automation and pipeline process    |
| :----:         |                        :-----:  |
| Runbook description|   This runbook Configures a CircleCI pipeline to automate the deployments and continuously checks the build/unit tests for each push instance to the GitHub repo until the status ```success``` is returned.   |                           
|On this page       |                 Table of contents :
|  |- [Architecture Diagrams For An Overview Of Tthe Pipeline Process](#architecture-diagrams-for-an-overview-of-the-pipeline-process)
|  |- [Configure Secrets (Environment Variables) Via CircleCI](#configure-secrets-environment-variables-via-circleci)

 

# architecture diagrams for an overview of the pipeline process
![circle-ci-diagram.png]()

# Steps to configuring CircleCI pipeline with AWS S3, RDS and Elastic Beanstalk
## Configure secrets (Environment Variables) via CircleCI
1. AWS_BUCKET:S3 bucket used to host static front-end
2. AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY :are both AWS user credentials
3. 