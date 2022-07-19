[![HitCount](https://hits.dwyl.com/ElTupac/another-ds-template.svg?style=flat)](http://hits.dwyl.com/ElTupac/another-ds-template)
![GitHub Repo stars](https://img.shields.io/github/stars/ElTupac/another-ds-template?style=social)![GitHub forks](https://img.shields.io/github/forks/ElTupac/another-ds-template?style=social)

# Index
1. [Another design system](#another-design-system)
    1. [Tech stack](#tech-stack)
    2. [Other tools](#other-tools)
2. [How to start](#how-to-start)
    1. [Fork this template](#fork-the-template)
    2. [Requirements](#requirements)
    3. [Install dependencies](#install-dependencies)
    4. [Start developing](#start-developing)
    5. [How to develop](#how-to-develop)
        1. [Creating a Component](#creating-a-component)
        2. [Creating a Story](#creating-a-story)
3. [Publishing my package](#publishing-my-package)
    1. [Requirements](#requirements-1)
4. [Next steps](#next-steps)
5. [Credits](#credits)
6. [References](#references)


# Another design system

## Project description
This project aims to create a template/boilerplate that is easy to use, robust, and with a modern stack, for doing a Design System development. When my (ex)team and I started investigating for doing our own DS, we found that there is no actuals templates or boilerplates done that could help us in the beginning of this process. So we started developing our own Design System from scratch. So, this is a documentation of our development, and I am excited to see how this project will evolve.

## Why to have a Design System
1. Design (and development) work can be created and replicated quickly and at scale. 
2. It alleviates strain on design resources to focus on larger, more complex problems. The team will focus more in the bussiness logic and not in visual perks.
3. It creates a unified language within and between crossfunctional teams. It easy to communicate and work between Designers and Devs teams.
4. It creates visual consistency across products, channels, and (potentially siloed) departments. Example: The colors, buttons, text styling, etc etc, across every platform, that shares the same DS, will be the exactly same.
5. It can serve as an educational tool and reference for junior-level designers and content contributors. All the contributors will answer to the same UI styles.

In resume, a Design System is not only a benefit for the developers team, but also for the Designers since they will have a better system to develop theirs designs. And in a larger scale this is a development that could save tons of hours of work in both sides.

### Tech stack:
 - **Webpack@5**: This was a must since we wanted to approach the most light-weight final package in the moment of building our solution.
 - **Tailwind.css**: The development of each component must be focused in the scalibity of the component itself, and in most cases avoid of writing a single line of _css_. Also the framework itself cares a lot about the final css package, and gives a lot of features about configuration of theme that gives a lot of freedom and ease when setting some custom variables.
 - **StoryBook**: We need to test the components while being developed, and this a library that gives us a lot of options to display and change the variables that could receive our component.
 - **PropTypes**: At the moment we started this project not all of the Devs has experience with TypeScript and we needed a middle term solution for this part. Also PropTypes offers a really good compatibility with StoryBook when displaying our components.

### Other tools:
 - **Eslint**: We wanted to ensure the quality of our code, so this was a must to approach that. We used the **airbnb** template but we started modifying lot of rules that were no sense at the moment we started this.
 - **Prettier**: The proyect has Prettier installed and also a configuration that overrides whatever one you have in your code editor. This way all the devs will format the code the same way without adding useless code modifications to the commits.
 - **Husky**: This library helps to automatize tasks, like checking linter and formatting of the code before commiting, this way the devs avoid uploading code that is not approaching the code quality we are looking for.

<hr>

# How to start:
Now this will be a guide on how will start your journey to use this amazing template/boilerplate.

## Fork the template
You can start your own Design System just clicking in the link to use use the template: [Use this template](https://github.com/ElTupac/another-ds-template/generate). This will guide you through creating a new repository based on this boilerplate. Then obviously download your new repo to start coding.

## Requirements
For creating your own Design System you only need to have **Node** and **npm** installed in your computer.

## Install dependencies
This process is just to open the console inside your repository's folder and run the command `npm install` or `npm i`.

## Start developing
Now, inside your console, run `npm run storybook` to start a local server with the page that will display in real time your components.

## How to develop
The creation of the components and their stories is not really hard, but it needs more things to have in mind that will ensure us the quality of the final component in the package.

### Creating a Component
***(WIP)***

### Creating a Story
***(WIP)***

# Publishing my package

## Requirements
You will need an account at [**npm**](https://www.npmjs.com/signup "Create an npm account"), in order to publish your package.

**(WIP)**


# Next steps:
 - Updating the eslinter rules, if needed create our owns.
 - Clean, uninstalling, some of the libraries that are not being used.
 - See a way to PropTypes check types at build time, or at least throw errors.
 - Automatize the version changing to avoid doing manual.
 - Add an script at the moment of installing the first time to set some parameters, like package name, base version, etc.

<br>

# Credits
This is not a proyect done by myself, it was a proyect done between several people that contributed looking for a final scalable solution, in a short time. So my thanks to:
  - [fl0rchus](https://github.com/fl0rchus)
  - [drodrigomoura](https://github.com/drodrigomoura)
  - [dieguto](https://github.com/dieguto)
  - [ibarzabal-jm](https://github.com/ibarzabal-jm)
  - [MartinDCalderonP](https://github.com/MartinDCalderonP)
  - [MercadoFranco](https://github.com/MercadoFranco)

<br>

And I hope this list just will go longer and longer; so if you have any idea to help developing this template it will be welcome.

<br>

# References
 - [Benefits of developing a Design System](https://www.nngroup.com/articles/design-systems-101/)
