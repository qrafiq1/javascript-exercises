const fibonacci = function(a) {
    if (a < 0) {
        return "OOPS";
    } else if (a == 0) {
        return 1;
    } else {
        let previous = 1;
        let secondPrevious = 0;
        let current = 1;
        for (i = 1; i < a; i++) {
            current = previous + secondPrevious;
            secondPrevious = previous;
            previous = current;
        }
        return current;
    }

};

// Do not edit below this line
module.exports = fibonacci;
