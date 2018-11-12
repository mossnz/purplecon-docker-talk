var q = (exports = function () {
    process.nextTick(function () {
        console.log("var q = (exports = " + exports.toString() + ")();");
    });
})();