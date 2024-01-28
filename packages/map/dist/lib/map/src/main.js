'use strict';

var index = require('../../utils/dist/es/isArray/index.js');

var map = function (data, fn) {
    if (index.isArray(data)) {
        return data.map(function (i) { return fn(i); });
    }
};

exports.map = map;
