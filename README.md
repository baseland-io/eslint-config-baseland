# eslint-config-baseland

Baseland.io [ESLint](http://eslint.org/) Rules and Standards.

## Installation within a project

Make sure you do not already have `eslint` globally installed in your system. There's an ESLint [bug report](https://github.com/eslint/eslint/issues/1877) with further details.

### Remove ESLint globally

```bash
npm uninstall eslint -g
rm ~/.eslintrc
```

Install the shareable config and the dependencies as a development dependency:

```bash
npm install --save-dev \
  @baseland-io/eslint-config-baseland \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  typescript
```

In the project root directory, create an empty file called `.eslintrc.json`:

```bash
touch .eslintrc.json
```

In the `.eslintrc.json` file, add the following:

```javascript
{
  "extends": "baseland-io@eslint-config-baseland"
}
```

## Further Reading

* [ESLint Shareable Configuration files](http://eslint.org/docs/developer-guide/shareable-configs)
* [ESLint Integrations](http://eslint.org/docs/user-guide/integrations)
