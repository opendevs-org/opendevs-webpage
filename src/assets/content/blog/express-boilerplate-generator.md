---
title: express boilerplate generator, a generator for scaffolding express basic setup with ease
author: open devs
date: 2020-11-28T07:00:00Z
hero_image: "assets/static/src/assets/content/images/expressJS-logo.png?width=1680&key=9e01131"

---
hi everyone, 👋
today we’ll learn about how use a tool that generates new [express](https://expressjs.com/) applications in everyone's favourite language [typescript](https://github.com/microsoft/TypeScript) with various options to choose from based on your project needs


## install

```sh
$ npm i -g express-boilerplate-generator
```

## usage

Run anyone of following commands:

```sh
$ express-gen
# or
$ express-typescript-generator
# or
$ express-ts-gen
```

Or, to avoid installation and usage simply use the following command:

```sh
npx express-boilerplate-generator
```

## ❓ what is it

creates a new express application as a starter boilerplate similar to the express-gen module. except this new application is configured to use typeScript instead of plain javascript and provides various options such as, kind of project structure to use with focus on auth support along with documentaion to fasten the development process.

## 🤔 why express-boilerplate-generator

nodejs is great for the rapid development of web-projects, but is often neglected because of the lack of type safety. typescript solves this issue and (along with its linter file) can even make your code more robust than some other static languages like java.

there are some other tools out there to generate express apps with javascript such as Express application generator, but these either haven't been updated in a while or don't support typescript or don't have pre-added documentation support.

in this application you have two options to setup a project either with or without auth.

## 📜 different options available explained

<table>
<caption>description of various options available</caption>
<thead>
<tr>
<th>name</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://github.com/open-devs/express-boilerplate-generator/blob/master/lib/templates/express-server-boilerplate/README.md" target="_blank">express-server-boilerplate</a></td>
<td>this type of structure provides auth-less express server boilerplate codes to kickstart your backend development along with the support of typedoc & swagger.</td>
</tr>
<tr>
<td><a href="https://github.com/open-devs/express-boilerplate-generator/blob/master/lib/templates/express-server-boilerplate-auth/README.md" target="_blank">express-server-boilerplate-auth</a></td>
<td>this type of structure provides express server boilerplate codes to kickstart your backend development with authentication support. It uses passport-jwt and passport as dependency.</td>
</tr>
</tbody>
</table>
<br>

happy app-deving 😊