const casper = require('casper').create();

casper.start('http://docs.casperjs.org/en/latest/quickstart.html', function () {
  this.echo(this.getTitle());
});

casper.thenOpen('https://en.wikipedia.org/wiki/PhantomJS', function () {
  this.echo(this.getTitle());
});

casper.run();