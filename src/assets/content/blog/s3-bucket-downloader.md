---
title: s3 bucket downloader, a easy way to download files from AWS s3
author: open devs
date: 2020-10-28T07:00:00Z
hero_image: "https://cdn.mindmajix.com/blog/images/aws-s3-230819.png"

---
hi everyone, 👋
today we’ll have a look at great tool that enables us to download aws s3 data smartly. 👨‍💻

## so what is this tool?

this project enables downloading data from s3 a breeze, it has 3 modes _(CLI mode, Interactive mode & Download All mode)_ using which you can download _aws s3 bucket_ files into default or custom path.<br/>
If you choose the same directory as previous time, it'll `sync` those changes.

> It now supports setting of aws config like AWS Access key ID, AWS Secret key, AWS region & Output format in interactive mode

### 🏠 [Homepage](https://github.com/MiKr13/S3-Bucket-Download/#README)

<!--### ✨ [Demo](https://github.com/MiKr13/S3-Bucket-Download/#README) -->

## Install

```sh
npm i -g s3-bucket-downloader
```

## Usage

_Run anyone of following commands (only interactive mode available currently):_

> Interactive mode now supports setting of aws config like AWS **Access key ID**, **Secret key**, **Region** & **Output format** in interactive mode if none present in the system.

```sh
s3
# or
s3-downloader
# or
s3-bucket-downloader
```

## Usage (advanced user)

> Advanced users have to set AWS config themselves for now

### _Interactive mode:_

```sh
node download
```

> It'll display list of all buckets in an array & ask for options like:

![Interactive mode options](../images/interactive-mode.png)

### _CLI mode:_

```sh
node download --bucketName=[comma,seperated,bucketnames] --path=[path to save to for ex: ../data]
```

> Without brackets ofcourse.

### _Download All mode:_

```sh
node download --all
```

> Just downloads all of the files in all of the buckets.

## Logs:

>It shows logs too, like these:

![Interactive mode options](../images/logs.png)

## who are we?

we are **open devs** an organization of two motivated developers ([@alok722](https://github.com/alok722), [@mikr13](https://github.com/mikr13)) building open source tools & software to contribute to the community. we are very welcoming towards collaboration & new people joining us in any capacity with a vision to profit community in terms of great tools and education.
you can join us in various places:
[npm](https://www.npmjs.com/package/s3-bucket-downloader)
[github](https://github.com/open-devs)
[twitter](https://twitter.com/opendevs_2020)
[website](https://opendevs.in)
