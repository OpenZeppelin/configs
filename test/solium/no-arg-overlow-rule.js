const fs = require('fs');
const dedent = require('dedent');
const Solium = require('solium');

const userConfig = JSON.parse(fs.readFileSync('.soliumrc.json', 'utf8'));

describe('[RULE] arg-overflow', function () {
  afterEach(function (done) {
    Solium.reset();
    done();
  });

  it('should ignore more than 3 arguments in the same line', function (done) {
    const code = dedent`
                pragma solidity ^0.4.3;


                contract Dummy {
                  function testFunc(uint arg1, uint arg2, uint arg3, uint arg4) public {
                  }
                }`;
    const errors = Solium.lint(code, userConfig);

    errors.should.deepEqual([]);

    done();
  });
});