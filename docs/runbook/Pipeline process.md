| Runbook name       |             Automation and pipeline process    |
| :----:         |                        :-----:  |
| Runbook description|   This runbook Configures a CircleCI pipeline to automate the deployments and continuously checks the build/unit tests for each push instance to the GitHub repo until the status ```success``` is returned.   |                           
|On this page       |                 Table of contents :
|  |- [Architecture Diagram For An Overview Of Tthe Pipeline Process](#architecture-diagram-for-an-overview-of-the-pipeline-process)
|  |- [Steps to configuring CircleCI pipeline with AWS S3, RDS and Elastic Beanstalk](#configure-secrets-environment-variables-via-circleci)

 

# architecture diagram for an overview of the pipeline process
![circle-ci-diagram.png](https://github.com/Eng-Yasmina/react-aws-circle-ci…eenshots/CircleCi/CircleCi%20diagram.png?raw=true)

# Steps to configuring CircleCI pipeline with AWS S3, RDS and Elastic Beanstalk
## Configure secrets (Environment Variables) via CircleCI
1. AWS_BUCKET:S3 bucket used to host static front-end
2. AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY :are both AWS user credentials
3. 