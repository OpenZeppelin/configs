Configuration for tools used across OpenZeppelin projects.

## Prettier

We use [Prettier](https://prettier.io) as a code formatter to keep our code consistent and to reduce friction for reading and reviewing code.

For Solidity we use the [Prettier Solidity](https://github.com/prettier-solidity/prettier-plugin-solidity) plugin.

## JavaScript

To check for common errors in JavaScript or TypeScript, we use [ESLint](https://eslint.org/), with the rules in [.eslintrc](.eslintrc). Note that some additional packages are required.

ESLint should run with `--max-warnings 0` in CI.
