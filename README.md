# Base Node.js Serverless Project

Use this project to start a new Serverless for AWS.

## Requirements

* [Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
* [AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

## Installation

Create a new Serverless project:

```shell
$ sls install --url https://github.com/scenarex/base-serverless-package --name new-project-name
```

Move to the new folder and install the Node.js packages:

```shell
$ cd new-project-name
$ npm install
```

## Testing

Local unit tests:

```shell
$ npm test
```

Local Serverless function test:

```shell
sls invoke local -f hello -p mocks/hello-event.json
```

## Additional notes

Remember to cleanup any unused artifacts such as the example `hello.js` handler and mock/test files, environment file, etc. Also overwrite this `README.md` file with the appropriate information for the new project.
