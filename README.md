# React boilerplate build with Vite

This is a React boilerplate with Vite, SWC, SSL, TailwindCSS, SASS, ESlint, Stylelint, Prettier, Husky and lint-staged.

## What's inside

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Vite plugin React SWC](https://www.npmjs.com/package/@vitejs/plugin-react-swc)
- [Vite plugin SSL](https://www.npmjs.com/package/@vitejs/plugin-basic-ssl)
- [TailwindCSS](https://tailwindcss.com)
- [SASS](https://sass-lang.com)
- [ESlint](https://eslint.org)
- [Stylelint](https://stylelint.io)
- [Prettier](https://prettier.io)
- [Husky](https://typicode.github.io/husky)
- [lint-staged](https://github.com/okonet/lint-staged)

## Installation

```bash
npx degit matteocastiglioni/react-boilerplate#main my-new-project
cd my-new-project
npm i
```

## Usage

### &bull; Development

Start the development server with hot reloading on localhost.

```bash
npm run dev
```

Start the development server with hot reloading on a custom domain.

> You need to map the domain.

```bash
npm run dev -- --host www.my-new-project.local
```

### &bull; Build

Create the build for production.

> The output folder is defined in the Vite configuration file.

```bash
npm run build
```

### &bull; Preview

Locally preview the production build on localhost.

```bash
npm run preview
```

Locally preview the production build on a custom domain.

> You need to map the domain.

```bash
npm run preview -- --host www.my-new-project.local
```

### &bull; Lint

> Every command is executed only on files in the "src" folder.

#### ESlint

```bash
# only to perform a file check and issue a report
npm run eslint
```
```bash
# to run a file check and fix errors
npm run eslint:fix
```

#### Prettier

```bash
# only to perform a file check and issue a report
npm run prettier
```
```bash
# to run a file check and fix errors
npm run prettier:fix
```

#### Stylelint

```bash
# only to perform a file check and issue a report
npm run stylelint
```
```bash
# to run a file check and fix errors
npm run stylelint:fix
```
