# d3-czip
[![BSD 3-Clause License][license-image]][license-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Coverage percentage][coveralls-image]][coveralls-url]

Generates a collection from multiple arrays

## Installing

If you use NPM, `npm install --save d3-czip`. If you use Bower, `bower install --save d3-czip`. Otherwise, download the [latest release](https://github.com/smartin85/d3-czip/releases/latest).

```html
<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="https://unpkg.com/d3-czip@latest"></script>
<script>

var w = 960,
    h = 500,
    svg = d3.select("#chart")
      .append("svg")
      .attr("width",w)
      .attr("height",h),
    data = {
      x: [100, 200, 300, 400, 500, 600, 700, 800],
      y: [50, 150, 80, 200, 300, 120, 350, 210],
      r: [50, 10, 30, 20, 60, 15, 40, 25],
      c: ['red', 'blue', 'green', 'yellow', 'cyan', 'coral', 'black', 'grey']
    };

svg.selectAll("circle")
    .data(d3.czip(data))
    .enter()
    .append("circle")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", function(d) { return d.r; })
    .attr("fill", function(d) { return d.c; });

</script>
```

## API Reference

<a href="#czip" name="czip">#</a> d3.<b>czip</b>(objWithArrays);

Creates a collection of the arrays.

[license-image]: https://img.shields.io/badge/License-BSD%203--Clause-blue.svg
[license-url]: LICENSE

[npm-image]: https://badge.fury.io/js/d3-czip.svg
[npm-url]: https://npmjs.org/package/d3-czip

[bower-image]: https://badge.fury.io/bo/d3-czip.svg
[bower-url]: https://badge.fury.io/bo/d3-czip

[travis-image]: https://travis-ci.org/smartin85/d3-czip.svg?branch=master
[travis-url]: https://travis-ci.org/smartin85/d3-czip

[daviddm-image]: https://david-dm.org/smartin85/d3-czip.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/smartin85/d3-czip

[coveralls-image]: https://coveralls.io/repos/smartin85/d3-czip/badge.svg
[coveralls-url]: https://coveralls.io/r/smartin85/d3-czip
