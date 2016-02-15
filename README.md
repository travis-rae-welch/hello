# Hello Project

## Install Dependencies

```
npm install
```

## Running Tests

```
npm test
```

This test command is defined in `package.json` under `scripts` and simply runs `mocha` out of `./node_modules/.bin/`.

## Install New Dependency

If it's a runtime dependency, such as lodash or moment, use `--save`:

```
npm install --save lodash
```

If it's a test or build dependency, such as mocha or webpack, use `--save-dev`:

```
npm install --save-dev mocha
```

## Git Workflow

1. Make changes in Sublime.
2. Add changes for next commit: `git add -p` or `git add <filename>`
3. Commit: `git commit`
4. Type message in vim: hit "i", then type message, hit "Esc", then ":x"
5. Push to Github: `git push`

## Preview HTML File

1. `explorer .`
2. Double click file
