# code-style

Code style guidelines and rules for OpenZeppelin projects.

## Solidity

To check the code style of smart contracts written in Solidity, we use
[solium](https://github.com/duaraghav8/Solium) v1.1.7, with the rules in
[.soliumrc.json](.soliumrc.json).

## Javascript

To check the code style of code written in Javascript, we use
[eslint](https://eslint.org/), with the rules in
[.eslintrc](.eslintrc) and the plugins:

- eslint-config-standard
- eslint-plugin-standard
- eslint-plugin-import
- eslint-plugin-node
- eslint-plugin-promise
- eslint-plugin-react (only for react projects)

## Prettier

We use `Prettier` as a code formatter to keep our code consistent and to reduce friction for reading and reviewing code.

## Disputes

If you dislike a rule, please
[open an issue](https://github.com/OpenZeppelin/code-style/issues).
