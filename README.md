# Base Node.js Serverless Project

Use this project to start a new Serverless for AWS.

## Requirements

* [Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
* [AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

## Installation

Create a new Serverless project:

```
$ sls install --url https://github.com/scenarex/base-serverless-package --name new-project-name
```

Move to the new folder and install the Node.js packages:

```
$ cd new-project-name
$ npm install
```

## Testing

Local unit tests:

```
$ npm test
```

Local Serverless function test:

```
sls invoke local -f hello -p mocks/handler-event.json
```
