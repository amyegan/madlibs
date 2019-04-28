# Madlibs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

## Outline of steps to create a similar app

### Create a new app with routing
- Install Angular CLI `npm install -g @angular/cli`
- Create a new app with routing module `ng new madlibs --routing=true`

### Add Angular Material
- Open the new my-app directory in your code editor
- Follow the [Angular Material Getting Started Guide](https://material.angular.io/guide/getting-started) to add Angular Material for - styling.
- Create a new module for angular material. `ng generate module material --module=app.module.ts`, copying from [Google's Material module example](https://stackblitz.com/angular/pxgqmndgdemv?file=material-module.ts)

### Set up your first page
- Create a new component for the madlib page `ng generate component madlib-page`
- Add Angular Material components and `<app-madlib-page>` component to app.component.html
- Import FormsModule into app.module.ts
- Add `story` as empty string and `madlibTemplate` as placeholder JSON to madlib-page/madlib-page.component.ts
- Add word blanks `<form>`, story `<p>`, and other components to madlib-page/madlib-page.component.html

### Add a service to get different stories from Madlibz API
- Create a service to get story templates from [Madlibz API](https://madlibz.herokuapp.com/api) or other API
- Replace the 'madlibTemplate' placeholder in madlib-page with new template from API.
- Add a "new" button so we can get a new story.

### Add an instructions page and routes
- Create an instructions-page component `ng g c instructions-page`
- Add routes for your two pages to app-routing.module.ts
- Replace `<app-madlib-page>` with `<router-outlet></router-outlet>` in app.component.html
- Update sidenav links to point at Instructions and Madlib pages using `routerLink` and `routerLinkActive`

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
