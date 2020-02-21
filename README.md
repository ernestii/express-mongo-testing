## Use jest and mongo-memory-server for testing a controller in a express.js + mongoose app

Test file: `components/user.test.js`.

```
npm install
npm test

> api@1.0.0 test C:\Users\Ernest\boilerplate\api
> jest --runInBand

 PASS  components/user.test.js
  User Controller Test
    √ createUser() adds new user (27ms)
    √ createUser() does not add duplicate users (5ms)
    √ getUser() returns the correct user (2ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.731s, estimated 2s
Ran all test suites.
```
