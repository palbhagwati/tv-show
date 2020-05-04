# tvshow

> A vue js project for showing the tv show list based on there ratings

## Framework selection

> A Vue.js project for fatching user data and showing user's post
> Advantages of using Vuejs.
* Small
* Easy to Understand
* Simple Integration
* Flexibility
* Two-Way Communication
* Great Tooling


## Build Setup

Using @vue/cli 4.3.1

## pre-requisite
* Node
* typeScript

### installation
NPM is the recommended installation method when building large scale applications with Vue. It pairs nicely with module bundlers such as Webpack or Browserify. Vue also provides accompanying tools for authoring Single File Components.

#### latest stable
``` bash
$ sudo npm i -g @vue/cli
```
## Clone repo
``` bash
# clone repository
$git clone https://github.com/palbhagwati/tv-show.git

# Navigate to tv-show folder
$cd tv-show

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## development

### style guide
* Component names should always be multi-word, except for root “App” components.
Use “UserCard” or “ProfileCard” instead of “Card” for example.
* Each component should be in its own file.
* Filenames of single-file components should either be always PascalCase or always kebab-case. Use “UserCard.vue” or “user-card.vue”.
* Components that are only used once per page should begin with the prefix “The”, to denote that there can be only one. For example for a navbar or a footer you should use “TheNavbar.vue” or “TheFooter.vue”.
* Child components should include their parent name as a prefix. For example if you would like a “Photo” component used in the “UserCard” you will name it “UserCardPhoto”. It’s for better readability since files in a folder are usually order alphabetically.
* Always use full name instead of abbreviation in the name of your components. For example don’t use “UDSettings”, use instead “UserDashboardSettings”.

## Writing tests
How do you name your test cases?

The outermost describe should be called the same as the class you're testing. Each method should have it's own describe block and should be the same as the name of the method, excluding the brackets. Lastly each test case should be humanly readable, no pseudocode and should adhere to the should ... when format as much as possible.

How do you structure your test case?

Use the AAA pattern:

Arrange - Setup the state of the application
Act - Invoke everything to change the state to what you want to test
Assert - Check that the application has responded as expected
How do you structure your unit test?

describe (name of code under test) | beforeEach (global test setup) | | afterEach (global test teardown) | | describe (name of method) | | it (name of test case) | Arrange | Act | Assert | ... | ...

### run unit tests
npm run unit
