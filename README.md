<!--
title: 'AWS NodeJS Example'
description: 'This template demonstrates how to deploy a NodeJS function running on AWS Lambda using the traditional Serverless Framework.'
layout: Doc
framework: v2
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Ragini '
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Nodejs Project for building Scraping Rest API

Contains a set of Nodejs Lambda Functions
serverless.yml contains specification for lambdas

What is Serverless?

A method of providing backend services on an as-used basis
Write and deploy code without worrying about the underlying infrastructure
Physical servers are used but developers do not need to be aware of them
Charges are based on usage
Do not have to reserve and pay for a fixed amount of bandwidth or number of servers
Services auto-scale based on load

Prerequisites

    Ensure Node is installed and check version using: node -v
    Check npm version: npm -v
    Install serverless using: npm install serverless -g Check version: serverless -v
    Install npm i aws-serverless-express
    Setup AWS Account
    Setup AWS IAM User with Admin privileges
    Run aws configure to update AWS IAM User access_key, secret_key, region
    Check using: aws configure list
    Update AWS access_key, secret_key in OS PATH variables

Clone and Deploy

    git clone https://github.com/choudhurysr/serverless-nodejs-rest-api.git
    npm install
    serverless deploy

Run and Test

    Note endpoints from serverless deploy output.
    Run API from Postman.
    Check AWS CloudWatch Logs.
    Redeploy specific function: serverless deploy --function <function-name>.
    Check AWS CloudWatch Logs
