const casper = require('casper').create();

casper.start('https://en.wikipedia.org', function () {
  this.echo(this.getTitle());
});

casper.then(function () {
  this.echo(this.getCurrentUrl());
});

casper.run(function () {
  this.echo('Done').exit();
});