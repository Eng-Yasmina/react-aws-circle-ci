# Runbook name
Automation and pipeline process.

# Runbook description
This runbook configures a CircleCI pipeline to automate the deployments and continuously checks the build/unit tests for each push instance to the GitHub repo until the status ```success``` is returned.                          

# Steps to Configuring Continuous Integration Pipeline
### 1- I configured the orbs in a pipeline file using the config.yml format used by CircleCi to download AWS CLI and Elastic Beanstalk CLI at first:
```yml
orbs:
  aws-cli: circleci/aws-cli@2.0.3
  eb: circleci/aws-elastic-beanstalk@1.0.0
```
### 2- I configered the first job and called it build and made it begins with downloading Node.js version (18.12.1) at first then download the dependencies found in package.json file to form a node-modules folder, and then run the build scripts in both frontend and API:
```yml
jobs:
  build:
    docker:
      - image: cimg/node:18.12.1
    steps:     
      - checkout
      # Use root level package.json to install dependencies in the frontend app
      - run:
          name: Install Front-End Dependencies
          command: cd client && npm install
      # TODO: Install dependencies in the the backend API          
      - run:
          name: Install API Dependencies
          command: cd server && npm install
      # TODO: Build the frontend app
      - run:
          name: Front-End Build
          command: cd client && npm run build
      # TODO: Build the backend API      
      - run:
          name: API Build
          command: cd server && npm run build
```
### 3- I made the pipeline run the front-end unit tests:
```yml
jobs:
  build:
    docker:
      - image: cimg/node:18.12.1
    steps: 
    .
    .
    .
      # TODO: Test the frontend
      - run:
          name: Front-End test
          command: cd client && npm run test
      # TODO: Test the API
      - run:
          name: API test
          command: cd server && npm run test
```
# Steps to Configuring CircleCI with Github
### 1- I configured my CircleCI through config.yml so that only pushes to the main branch would trigger build by utilizing the job filters feature in the workflow to set that up:
```yml
workflows:
  circle-ci-pipeline:
    jobs:
      - build:
          filters:
            branches:
              only: main
```
### 2- I configured secrets (Environment Variables) via CircleCI to configure CircleCI pipeline with AWS S3 RDS and Elastic Beanstalk
1. ```AWS_BUCKET```: S3 bucket used to host static front-end
2. ```AWS_S3_ENDPOINT```: the url of S# hosted app
3. ```AWS_ACCESS_KEY_ID```, ```AWS_SECRET_ACCESS_KEY``` :are both AWS user credentials
4. ```AWS_DEFUALT_REGION```: the AWS region i used
5. ```POSTGRES_HOST```: RSD database url
6. ```POSTGRES_DB```: name of the database i've created on RDS
7. ```POSTGRES_USERNAME```: the username i entered while creating the database on RDS
8. ```POSTGRES_PASSWORD```: the password i entered while creating the database on RDS
9. ```DB_PORT```: port of the database i've created on RDS


### 3- I triggered a successful pipeline on each push to the main branch:
![circleci.jpg](../screenshots/CircleCi/screencapture-circleci-pipelines-github-Eng-Yasmina-react-aws-circle-ci-jobs-3-steps.png)


# Architecture diagram for an overview of the pipeline process
![circle-ci-diagram.png](../screenshots/CircleCi/CircleCi-diagram.jpg)