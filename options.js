const casper = require('casper').create({
  verbose: true,              // log messages will be printed out to the console
  logLevel: "info",          // debug, info, warning, error
  pageSettings: {
    loadImages: false,        // The WebPage instance used by Casper will
    loadPlugins: false,       // use these settings
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X)',
  },
  clientScripts: [
    './bower_components/jquery/dist/jquery.min.js',
  ],
});

function getLinks() {
  const links = document.querySelectorAll('.supercategories > a');
  return Array.prototype.map.call(links, function(e) {
    return e.getAttribute('href');
  });
}

casper.start('https://rademacher.zendesk.com/hc/de/categories/115000872505', function () {
  this.echo(this.evaluate(getLinks));
});

casper.then(function () {
  this.echo(this.getCurrentUrl());
});

casper.run(function () {
  this.echo('Done').exit();
});