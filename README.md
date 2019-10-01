# code-style

Code style guidelines and rules for OpenZeppelin projects. Reusable linter and formatter configurations.

## Solidity

To check the code style of smart contracts written in Solidity, we use
[solium](https://github.com/duaraghav8/Solium) v1.1.7, with the rules in
[.soliumrc.json](.soliumrc.json).

## JavaScript

We use Prettier as a code formatter to keep our code consistent and to reduce friction for reading and reviewing code.

We use Prettier through ESLint.

```
npm install github:OpenZeppelin/code-style
```

#### `.eslintrc`

```
{
  "extends": ["./node_modules/code-style/.eslintrc"]
}
```

#### `.prettierrc`

```
"code-style/.prettierrc"
```

## Disputes

If you dislike a rule, please [open an issue](https://github.com/OpenZeppelin/code-style/issues).
