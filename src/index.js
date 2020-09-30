exports.min = function min(array) {
    if (array && array.length > 0) {
        return array.reduce((acc, item) => acc < item ? acc : item, array[0]);
    }
    return 0;
}

exports.max = function max(array) {
    if (array && array.length > 0) {
        return array.reduce((acc, item) => acc > item ? acc : item, array[0]);
    }
    return 0;
}

exports.avg = function avg(array) {
    if (array && array.length > 0) {
        return array.reduce((acc, item) => acc += item) / array.length;
    }
    return 0;
}
