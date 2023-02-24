# Vite React Redux Toolkit Saga Tailwind CSS Starter Kit

A web's boiler-tape front-end template for building web applications with React using JSON Server for API testing.

## Features

- Pre-configured with Redux Toolikit + Saga for centralized state handling and API fetching with Axios
- Pre-configured with Redux Ducks pattern
- Pre-configured with Vite
- Pre-configured with Tailwind CSS
- Pre-configured with code quality tools: ESLint, Prettier, etc.
- Pre-configured with VSCode code snippets

## Tech Stack

- Vite
- React, React Router 6, Redux Toolkit, Saga
- Tailwind CSS
- ESLint, Prettiter, npm

## Requirements

- Node.js v18+
- Recommended VS Code editor extensions:
  - Simple React Snippets
  - npm intellisense
  - JavasScript (ES6) code snippets
- Optionally React Developer Tools

## Getting started

1. Install project's dependencies:

```
$ npm install
```

2. Change `.env.example` to `.env` and add the following environment variables:

- `VITE_API_URL` - the URI for your API, ex: **"http://localhost:8000"** for JSON Server

3. Run it using **npm**:

```
$ npm run dev
```

4. If you want to use JSON Server for API mocking:

```
$ npm install -g json-server
$ npx json-server --watch data/db.json --port 8000
```

The JSON Server database is available in `./data/db.json`

## Contributing

Reviews and contributions are welcome! If you have a feature request or a bug to report, please create an issue in the Github repository. If you would like to contribute code, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License.
