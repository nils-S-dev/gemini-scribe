<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h1 align="center">Gemini Scribe</h1>

  <p align="center">
    A minimalist yet powerful scribe companion for your VSCode experience which uses Google's Gemini LLM to document your code on demand.
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
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#calling-gemini">Calling Gemini</a></li>
      </ul>
    </li>
    <li>
      <a href="#local-development">Local Development</a>
      <ul>
        <li><a href="#install-dependencies">Install Dependencies</a></li>
        <li><a href="#start-and-debug">Start & Debug</a></li>
      </ul>
    </li>
    <li><a href="#adding-a-prodecure">Adding a Procedure</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

I was getting very tired using the power of AI trough web frontends and wanted to get in touch with an AI API to automate one of the most tedious yet important tasks in software engineering: documentation.

This repository encompasses a VSCode plugin which allows to add documentation to code written in any programming language using Google's Gemini.

An API Key is required to use this plugin. You can get yourself a free key for the Gemini API [here](https://aistudio.google.com/app/apikey)

<p>(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![TypeScript][TypeScript]][TypeScript-url]
* [![VSCode][VSCode]][VSCode-url]

<p>(<a href="#readme-top">back to top</a>)</p>

## Usage

### Prerequisites

Make sure to provide your Gemini API key `Settings` `>` `extensions` `>` `Gemini Scribe`. You can get yourself a free Gemini API key [here](https://aistudio.google.com/app/apikey).

### Calling Gemini

In order to add documentation to your code select the part you want to document and open the command palette. Then choose the command `Gemini Scribe: Add Dcoumentation`.

This will send an appropriate prompt to the Gemini API to make it document your selected code.

<!-- GETTING STARTED -->
## Local Development

Make sure Node.js and NPM are installed.

### Install Dependencies

Install dependencies with NPM using

```
npm install
```

### Start and Debug

When using VSCode you might just press F5 or `Run` `>` `Start Debugging` in the toolbar at the top in order to start the plugin development setup in debug mode. This will also open a sample VSCode window for you where you can test this plugin of any code you provide.

<!-- ROADMAP -->
## Roadmap

- [x] Add command to document existing code
- [ ] Add command to shorten code
- [ ] Add command to optimize time complexity
- [ ] Add command to write unit tests

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

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Thanks A LOT to othneildrew for [this amazing README.md template](https://github.com/othneildrew/Best-README-Template)!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[TypeScript]: https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square
[TypeScript-url]: https://www.typescriptlang.org/
[VSCode]: https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?logo=visualstudiocode&logoColor=fff&style=plastic
[VSCode-url]: https://code.visualstudio.com/