# :zap: Node.js App Testing

* Code to practise testing of Node.js apps
* This is Section 30 of a [Udemy NodeJS - The Complete Guide (incl. MVC, REST APIs, GraphQL)](https://www.udemy.com/nodejs-the-complete-guide/)
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/nodejs-app-testing?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/nodejs-app-testing?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/nodejs-app-testing?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/nodejs-app-testing?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Node.js App Testing](#zap-nodejs-app-testing)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: App Status & To-do list](#clipboard-app-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Uses Chai assertion library and Mocha test framework to test Node.js code

## :camera: Screenshots

* No screenshots this time :-)

## :signal_strength: Technologies

* [Node.js v14](https://nodejs.org)
* [Express v4](https://www.npmjs.com/package/express) middleware for Node.js
* [Mocha v9](https://mochajs.org/) JavaScript test framework running on Node.js and in the browser
* [Chai v4](https://www.chaijs.com/) assertion library for Node.js and the browser
* [Sinon v11](https://www.npmjs.com/package/sinon) standalone and test framework agnostic JavaScript test spies, stubs and mocks

## :floppy_disk: Setup

* Run `npm i` to install dependencies
* Create a .env file and add MongoDB `ATLAS_URI` to .env file
* Run `npm run test` to run tests

## :computer: Code Examples

* extract from `test/auth-middleware.js` showing a Mocha test with Chai assertion

```javascript
it('should throw an error if no auth header is present', function () {
  const req = {
    get: function (headerName) {
      return null;
    },
  };
    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw(
      'Not authenticated.'
    );
  });
```

## :cool: Features

* Chai assertion tests are easy to understand

## :clipboard: App Status & To-do list

* Status: Working tests
* To-Do:  Try out new tests

## :clap: Inspiration

* [NodeJS - The Complete Guide (incl. MVC, REST APIs, GraphQL)](https://www.udemy.com/nodejs-the-complete-guide/)
* [Chai Assertion Library Test Suite](https://www.chaijs.com/api/test/)

## :file_folder: License

* N/A.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
