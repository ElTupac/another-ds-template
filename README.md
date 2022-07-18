# Another design system

## Project description
This project aims to create a template/boilerplate that is easy to use, robust, and with a modern stack, for doing a Design System development. When my (ex)team and I started investigating for doing our own DS, we found that there is no actuals templates or boilerplates done that could help us in the beginning of this process. So we started developing our own Design System from scratch. So, this is a documentation of our development, and I am excited to see how this project will evolve. 
<br>
### Tech stack:
 - **Webpack@5**: This was a must since we wanted to approach the most light-weight final package in the moment of building our solution.
 - **Tailwind.css**: The development of each component must be focused in the scalibity of the component itself, and in most cases avoid of writing a single line of _css_. Also the framework itself cares a lot about the final css package, and gives a lot of features about configuration of theme that gives a lot of freedom and ease when setting some custom variables.
 - **StoryBook**: We need to test the components while being developed, and this a library that gives us a lot of options to display and change the variables that could receive our component.
 - **PropTypes**: At the moment we started this project not all of the Devs has experience with TypeScript and we needed a middle term solution for this part. Also PropTypes offers a really good compatibility with StoryBook when displaying our components.
### Other tools:
 - **Eslint**: We wanted to ensure the quality of our code, so this was a must to approach that. We used the **airbnb** template but we started modifying lot of rules that were no sense at the moment we started this.
 - **Prettier**: The proyect has Prettier installed and also a configuration that overrides whatever one you have in your code editor. This way all the devs will format the code the same way without adding useless code modifications to the commits.
 - **Husky**: This library helps to automatize tasks, like checking linter and formatting of the code before commiting, this way the devs avoid uploading code that is not approaching the code quality we are looking for.
<br>
****
**_WIP_**
****
<br>
## Next steps:
 - Updating the eslinter rules, if needed create our owns.
 - Clean, uninstalling, some of the libraries that are not being used.
 - See a way to PropTypes check types at build time, or at least throw errors.
