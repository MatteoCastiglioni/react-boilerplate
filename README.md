# React boilerplate with Vite

This is a React boilerplate with Vite, SWC, SSL, TailwindCSS, SASS, ESlint, Stylelint, Prettier, Husky and lint-staged.

The project includes the necessary files to be run with Docker without having to install any package locally.

## Table of contents

- [What's inside](#whats-inside)
- Install and use without Docker
  - [Installation](#install-without-docker)
  - [Usage](#use-without-docker)
- Install and use with Docker
  - [Installation](#install-without-docker)
  - [Usage](#use-without-docker)

## What's inside

|                                                                                                            | version |
| :--------------------------------------------------------------------------------------------------------- | :-----: |
| <a href="https://react.dev" target="_blank">React</a>                                                      | 18.2.0  |
| <a href="https://vitejs.dev" target="_blank">Vite</a>                                                      |  4.4.0  |
| <a href="https://www.npmjs.com/package/@vitejs/plugin-react-swc" target="_blank">Vite plugin React SWC</a> |  3.3.2  |
| <a href="https://www.npmjs.com/package/@vitejs/plugin-basic-ssl" target="_blank">Vite plugin SSL</a>       |  1.0.1  |
| <a href="https://tailwindcss.com" target="_blank">TailwindCSS</a>                                          |  3.3.3  |
| <a href="https://sass-lang.com" target="_blank">SASS</a>                                                   | 1.64.0  |
| <a href="https://eslint.org" target="_blank">ESlint</a>                                                    | 8.44.0  |
| <a href="https://stylelint.io" target="_blank">Stylelint</a>                                               | 15.10.1 |
| <a href="https://prettier.io" target="_blank">Prettier</a>                                                 |  3.0.0  |
| <a href="https://typicode.github.io/husky" target="_blank">Husky</a>                                       |  8.0.0  |
| <a href="https://github.com/okonet/lint-staged" target="_blank">lint-staged</a>                            | 13.2.3  |

## Install without Docker

```bash
npx degit matteocastiglioni/react-boilerplate#main my-new-project && cd my-new-project && npm i
```

## Use without Docker

- ### Development

  Start the development server with hot reloading on localhost.

  ```bash
  npm run dev
  ```

  Start the development server with hot reloading on a custom domain.

  > [!NOTE]
  > You need to map the domain to the **_hosts_** file.

  ```bash
  npm run dev -- --host www.my-new-project.local
  ```

- ### Build

  Create the build for production.

  ```bash
  npm run build
  ```

- ### Preview

  Locally preview the production build on localhost.

  ```bash
  npm run preview
  ```

  Locally preview the production build on a custom domain.

  > [!NOTE]
  > You need to map the domain to the **_hosts_** file.

  ```bash
  npm run preview -- --host www.my-new-project.local
  ```

- ### Lint

  > [!NOTE]
  > Every command is executed only on files in the "src" folder. To run in a different folder, you need to change the references to the "src" folder in the scripts in the package.json file.

  - #### ESlint

  ```bash
  # only to perform a file check and issue a report
  npm run eslint
  ```

  ```bash
  # to run a file check and fix errors
  npm run eslint:fix
  ```

  - #### Prettier

  ```bash
  # only to perform a file check and issue a report
  npm run prettier
  ```

  ```bash
  # to run a file check and fix errors
  npm run prettier:fix
  ```

  - #### Stylelint

  ```bash
  # only to perform a file check and issue a report
  npm run stylelint
  ```

  ```bash
  # to run a file check and fix errors
  npm run stylelint:fix
  ```

## Install with Docker

Clone the repo and remove the **_.git_** folder

```bash
git clone --depth=1 git@github.com:matteocastiglioni/react-boilerplate.git my-new-project && cd my-new-project && rm -rf .git
```

Run the app container and install the dependencies.
> [!IMPORTANT]
> The container name used in the command is defined by the **_DOCKER_CONTAINER_NAME_** variable in the **_.env_** file.

```bash
docker compose up -d && docker exec -t reactapp npm i
```

## Use with Docker

> [!IMPORTANT]
> The container name used in the commands is defined by the **_DOCKER_CONTAINER_NAME_** variable in the **_.env_** file.

- ### Development

  Start the development server with hot reloading on localhost.

  ```bash
  docker exec -it reactapp npm run dev
  ```

  Start the development server with hot reloading on a custom domain.

  > [!NOTE]
  > The domain is composed using the **_DOCKER_CONTAINER_NAME_** variable in the **_.env_** file and is defined in the **_docker-compose.yml_** file. For example, if the DOCKER_CONTAINER_NAME variable is "reactapp", the domain will be "www.reactapp.local". You need to map the domain to the **_hosts_** file.

  ```bash
  docker exec -it reactapp npm run dev -- --host
  ```

- ### Build

  Create the build for production.

  ```bash
  docker exec -t reactapp npm run build
  ```

- ### Preview

  Locally preview the production build on localhost.

  ```bash
  docker exec -it reactapp npm run preview
  ```

  Locally preview the production build on a custom domain.

  > [!NOTE]
  > The domain is composed using the **_DOCKER_CONTAINER_NAME_** variable in the **_.env_** file and is defined in the **_docker-compose.yml_** file. For example, if the DOCKER_CONTAINER_NAME variable is "reactapp", the domain will be "www.reactapp.local". You need to map the domain to the **_hosts_** file.

  ```bash
  docker exec -it reactapp npm run preview -- --host
  ```

- ### Lint

  > [!NOTE]
  > Every command is executed only on files in the "src" folder. To run in a different folder, you need to change the references to the "src" folder in the scripts in the package.json file.

  - #### ESlint

  ```bash
  # only to perform a file check and issue a report
  docker exec -t reactapp npm run eslint
  ```

  ```bash
  # to run a file check and fix errors
  docker exec -t reactapp npm run eslint:fix
  ```

  - #### Prettier

  ```bash
  # only to perform a file check and issue a report
  docker exec -t reactapp npm run prettier
  ```

  ```bash
  # to run a file check and fix errors
  docker exec -t reactapp npm run prettier:fix
  ```

  - #### Stylelint

  ```bash
  # only to perform a file check and issue a report
  docker exec -t reactapp npm run stylelint
  ```

  ```bash
  # to run a file check and fix errors
  docker exec -t reactapp npm run stylelint:fix
  ```
