# Linting

We use linters to keep a consistent code style throughout our projects, and code formatters where possible to reduce
friction for reading and reviewing code.

If you dislike a rule, please [open an issue](https://github.com/OpenZeppelin/code-style/issues).

## Solidity

To check the code style of smart contracts written in Solidity, we use [solium](https://github.com/duaraghav8/Solium)
v1.1.7, with the rules in [.soliumrc.json](.soliumrc.json).

## JavaScript

We use Prettier as a code formatter, through ESLint so that it can easily be combined with project-specific rules.

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
