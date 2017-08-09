This is a simple example project that uses the SASS files of the
[U.S. Web Design Standards][uswds].

It can be used to create simple static one-pagers that just need
access to the Standards' SASS for [customization and theming][].

It also includes built-in support for deployment on [Federalist][].

## Limitations

Because of this project's extremely limited scope, it has a number
of limitations:

* It doesn't use a module bundler like Browserify or Webpack, and
  therefore doesn't allow for any [js customization][] of the Standards.

* It doesn't use a templating system of any kind, so creating a site
  with multiple pages that share common elements isn't easy. See
  [uswds-jekyll][] for a better solution.

That said, the project's `gulpfile.js` is less than 50 lines of code.
It's designed to be easy to understand and extend, so feel free to
modify it to your project's particular needs.

## Requirements

You'll need [Node.js][] version 6. That's it!

## Quick start

Run the following at the terminal to get started:

```
npm install
npm start
```

At this point, you should be able to visit `http://localhost:8000` in
your browser and see the example page.

You can modify the example page's HTML at `index.html`, or you can
edit its SASS at `sass/main.scss`.

Whenever you make changes to the SASS, it will automatically be
compiled to CSS, and you can reload the page in your web browser to
see the changes.

## Building the site

Run `npm run build` to generate the site's CSS and vendored assets.

## Deploying the site

If you use Federalist, everything is taken care of for you; an
`federalist` npm script target is already included with this project.

Otherwise, you can deploy the site by copying all the files from the
root directory of the project to a static web server. You'll probably
want to exclude the `.git` and `node_modules` directory, though.

## Environment variables

* `PORT` defines the port for the development static file server to
  listen on. It defaults to `8000`.

[uswds]: https://standards.usa.gov/
[customization and theming]: https://standards.usa.gov/getting-started/developers/#customization-and-theming
[js customization]: https://standards.usa.gov/getting-started/developers/#js-customization
[uswds-jekyll]: https://github.com/18F/uswds-jekyll
[Node.js]: https://nodejs.org/
[Federalist]: https://federalist.18f.gov/
