<p align="center">
  <a href="https://codely.com">
    <img src="https://user-images.githubusercontent.com/10558907/170513882-a09eee57-7765-4ca4-b2dd-3c2e061fdad0.png" width="300px" height="92px" alt="Codely logo"/>
  </a>
</p>

<h1 align="center">
  <🌱⚛️> Create React App Codely template
</h1>

<p align="center">
    <a href="https://github.com/CodelyTV/cra-template-codely/actions/workflows/ci.yml"><img src="https://github.com/CodelyTV/cra-template-codely/actions/workflows/ci.yml/badge.svg" alt="Build status"/></a>
    <a href="https://github.com/CodelyTV"><img src="https://img.shields.io/badge/CodelyTV-OS-green.svg?style=flat-square" alt="Codely Open Source"/></a>
    <a href="https://pro.codely.com"><img src="https://img.shields.io/badge/CodelyTV-PRO-black.svg?style=flat-square" alt="CodelyTV Courses"/></a>
</p>

<p align="center">
  Template for creating your React apps with TypeScript following best practices: Unit and end-to-end tests, Continuous Integration, and linting. 
  <br />
  <br />
  <a href="https://github.com/CodelyTV/cra-template-codely/stargazers">Stars are welcome 😊</a>
</p>

## 🚀 Using this CRA template

### 🤔 CRA introduction

React officially support to create your custom templates for the Create React App (CRA) utility.

This Codely template is just a way to optimize even more the default CRA template adding the bare minimum [features we consider necessary on every React project](https://github.com/CodelyTV/cra-template-codely#-template-features).

### ⚡ How to create your React app

Create your React app with TypeScript and taking advantage of the scaffolding provided by this template executing this `npx` command in your terminal:

```bash
npx create-react-app my-app --template @codelytv/cra-template-codely
```

Or, if you prefer to use Yarn instead of npm: 

```bash
yarn create react-app --template @codelytv/cra-template-codely my-app
```

It will create a `my-app` folder inside the directory where you execute the command. You will find a `README.md` in the root of your generated project with the instructions on how to build, test, and run your application 🤟

### 🌩️ What does CRA do while creating the project

The `my-app` created with the `npx` command will contain a ready-to-use application thanks to the magic CRA does behind the scenes:

- Copy everything inside [this CRA `template` folder](template) into your project root directory
- Create the project `package.json` based on the dependencies that CRA needs such as React itself _in the latest version possible_, plus the dependencies added by Codely in the [`template.json`](template.json)
- Create the project `.gitignore` file based on the [`template/gitignore`](template/gitignore)
- Depending on if you have used Yarn or npm while creating the project, it will have available the corresponding commands and config files in order to run the generated app
- Install all the dependencies

## 🌈 Template Features

- [TypeScript](https://www.typescriptlang.org)
- [ESLint](https://eslint.org) and [Prettier](https://prettier.io) already configured with the [🤏 Codely's configuration](https://github.com/CodelyTV/eslint-config-codely)
- [Jest](https://jestjs.io) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for the unit tests
- [Cypress](https://www.cypress.io) with [Testing Library](https://testing-library.com/docs/cypress-testing-library) for the end-to-end tests
- [GitHub Action Workflows](https://github.com/features/actions) set up to run tests and linting on push
- [Makefile](https://github.com/CodelyTV/cra-template-codely/blob/main/template/Makefile) for standardize how to run projects
- [Sass](https://sass-lang.com) to supercharge CSS with nested classes and more fun
- [.editorconfig](https://editorconfig.org) for sharing the IDE config


## 💻 Improving this CRA template

You can improve this CRA and make Pull Requests to this repository. In order to locally test how your improvements generate a new project, you can specify a local template file with the following command:

```bash
npx create-react-app my-app --template file:../path/to/cra-template-codely
```

## 👌 Codely Code Quality Standards

Publishing this package we are committing ourselves to the following code quality standards:

- 🤝 Respect **Semantic Versioning**: No breaking changes in patch or minor versions
- 🤏 No surprises in transitive dependencies: Use the **bare minimum dependencies** needed to meet the purpose
- 🎯 **One specific purpose** to meet without having to carry a bunch of unnecessary other utilities
- ✅ **Tests** as documentation and usage examples
- 📖 **Well documented ReadMe** showing how to install and use
- ⚖️ **License favoring Open Source** and collaboration

## 🔀 Related templates

Opinionated TypeScript skeletons ready for different purposes:

- [🔷🌱 TypeScript Basic Skeleton](https://github.com/CodelyTV/typescript-basic-skeleton)
- [🔷🕸️ TypeScript Web Skeleton](https://github.com/CodelyTV/typescript-web-skeleton)
- [🔷🌍 TypeScript API Skeleton](https://github.com/CodelyTV/typescript-api-skeleton)
- [🔷✨ TypeScript DDD Skeleton](https://github.com/CodelyTV/typescript-ddd-skeleton)

This same skeleton philosophy implemented in other programming languages:

- [✨ JavaScript Basic Skeleton](https://github.com/CodelyTV/javascript-basic-skeleton)
- [☕ Java Basic Skeleton](https://github.com/CodelyTV/java-basic-skeleton)
- [📍 Kotlin Basic Skeleton](https://github.com/CodelyTV/kotlin-basic-skeleton)
- [🧬 Scala Basic Skeleton](https://github.com/CodelyTV/scala-basic-skeleton)
- [🦈 C# Basic Skeleton](https://github.com/CodelyTV/csharp-basic-skeleton)
- [🐘 PHP Basic Skeleton](https://github.com/CodelyTV/php-basic-skeleton)
