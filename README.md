# twigBoilerplate
A little handy boilerplate for setting up component-based development based on PHP respectively Twig. The component structure follows the Atomic Design approach but can be changed as will. SASS in collaboration with BEM is used for this example.

## Installation

Download the project and extract it into its folder. Keep in mind that a PHP server is needed to run the site.

__In upfront you need to install [npm](https://www.npmjs.com/), [Composer](https://getcomposer.org/) and [Gulp](https://gulpjs.com/).__

In your project folder, start with:

`$ composer install`

This will install Twig and all of its dependencies into the vendor folder. 

Install the gulp dependencies for compiling SASS and concatenating it:

`$ npm install`

## Workflow

Start Gulp with

`gulp`

The task manager should be active now and watches for your SCSS file to be changed and compiles them. 

