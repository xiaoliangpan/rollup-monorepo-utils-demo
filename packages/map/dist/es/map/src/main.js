import { isArray } from '../../utils/dist/es/isArray/index.js';

var map = function (data, fn) {
    if (isArray(data)) {
        return data.map(function (i) { return fn(i); });
    }
};

export { map };
