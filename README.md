<!-- Improved compatibility of back to top link: See: https://github.com/erayalkis/statsy/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the statsy. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/erayalkis/statsy">
    <img src="logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Statsy</h3>

  <p align="center">
    An Express.js app for tracking and exposing your host computers usage statistics!
    <br />
    <a href="https://github.com/erayalkis/statsy/issues">Report Bug</a>
    ·
    <a href="https://github.com/erayalkis/statsy/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

There are times when you want to remotely track how well your machine is doing when handling servers, and I didn't really find a pre-existing solution that suited my needs, so I created Statsy.
I wanted to create an easy-to-use and straightforward app that returns your statistics and logs them without any fuss, and I feel that Statsy is a nice solution for this use case.

Of course, Statsy is a new app and thus won't fit all use cases, so please feel free to suggest changes by forking this repo and creating a pull request or opening an issue. Thank you in advance, all contributions are appreciated!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![HTML][HTML5]][HTML5-url]
- [![CSS3][CSS3]][CSS3-url]
- [![JavaScript][JavaScript]][JavaScript-url]
- [![TypeScript][TypeScript]][TypeScript-url]
- [![Express][Express.js]][Express-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps:

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:erayalkis/statsy.git
   ```

#### With Docker:

1. Build Docker Image
   ```
   ./setup_docker.sh
   ```
2. Run Docker Container
   ```
   docker run -p 3000:3000 --name=statsy erayalkis/statsy
   ```
3. Done!

#### Without Docker:

1. Install npm packages
   ```
   npm install
   ```
2. Run server
   ```
   npm run dev
   ```
3. Done!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

To start up your server, simply run the `npm run dev` command, and you're all set!

You can visit these routes to get a JSON response:

- /stats: Returns all of the statistics for the host computer.
  - /memory: Returns the total and the available memory.
  - /memfree: Returns the available memory.
  - /memtotal: Returns the total memory.
  - /cpus: Returns an array of CPU objects.
  - /loadavg: Returns an array of load averages.
  - /uptime: Returns the uptime of the host computer.

Statsy's logging features are all toggleable through command line arguments:

- LOG_USAGE_TO_FILE: Enables logging host machine stats to logs/usage.txt.
- LOG_USAGE_TO_CONSOLE: Enables logging host machine stats to the console. (This will clutter up your console a lot, use with caution)
- LOG_REQUESTS_TO_FILE: Enables logging server requests to logs/requests.txt.
- LOG_REQUESTS_TO_CONSOLE: Enables logging server requests to the console.

### Command line arg examples:

To enable logging requests to the console, and logging usage stats to a file, you can run:

```
  LOG_REQUESTS_TO_CONSOLE=true LOG_USAGE_TO_FILE=tru npm run dev
```

And with Docker, you can run:

```
docker run -p 3000:3000 --name=statsy -e LOG_REQUEST_TO_CONSOLE=true -e LOG_USAGE_TO_FILE=true erayalkis/statsy
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@erayaIlkis](https://twitter.com/erayaaIkis) - erayalkis@hotmail.com

Project Link: [https://github.com/erayalkis/statsy](https://github.com/erayalkis/statsy)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/erayalkis/statsy.svg?style=for-the-badge
[contributors-url]: https://github.com/erayalkis/statsy/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/erayalkis/statsy.svg?style=for-the-badge
[forks-url]: https://github.com/erayalkis/statsy/network/members
[stars-shield]: https://img.shields.io/github/stars/erayalkis/statsy.svg?style=for-the-badge
[stars-url]: https://github.com/erayalkis/statsy/stargazers
[issues-shield]: https://img.shields.io/github/issues/erayalkis/statsy.svg?style=for-the-badge
[issues-url]: https://github.com/erayalkis/statsy/issues
[license-shield]: https://img.shields.io/github/license/erayalkis/statsy.svg?style=for-the-badge
[license-url]: https://github.com/erayalkis/statsy/blob/master/LICENSE
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com/
[product-screenshot]: images/screenshot.png
[JavaScript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[TypeScript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[HTML5]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[CSS3]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
