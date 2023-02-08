### Tedooo Task

## Tech

This monorepo uses a number of open source projects to work properly:

-   [Node.js] - Evented I/O for the backend
-   [React.js] - Library for building component-based frontend application
-   [Typescript] - Strongly typed code with Javascript
-   [Hygen] - Automate building components for React
-   [Commitlint] - Linting the git commit messages
-   [ESLint] - Linting the code and preventing bad code
-   [Git] - Version manager for the repository
-   [Prettier] - Styling your code
-   [Stylelint] - Linting CSS(SCSS) code
-   [Pnpm] - Package manager & Workspace
-   [i18n] - Cross-languages for the repository
-   [Inflint] - Scans and verifies files and folders name conventions
-   [Depcheck] - Dependency analyzer
-   [Cz-vinyl] - Commitizen adapter formatting commit messages

## Installation

Install the dependencies and devDependencies and start the server.

```sh
pnpm install
```

Frontend

```
cd apps/frontend
pnpm start:dev
```

Backend

```
cd apps/backend
pnpm start:dev
```

## Additional

In the first server process, a script will load from the scripts folder. It will load the XML into a json file.

Also, I've included the envs for convenience reasons.

It was a really fun task :)
