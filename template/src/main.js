// Highlight slected line based on anchor
(function() {
    var anchorHash = document.location.hash.substring(1);
    if (anchorHash && anchorHash.match(/^line\d+$/)) {
        var selectedLine = document.querySelector('.source.linenums #' + anchorHash);
        if (selectedLine && selectedLine.classList) {
            selectedLine.classList.add('selected')
        }
    }
})();

// Use highlight.js on prettify targets
// This can be removed when jsdoc has publish-time sytax highlighter support
(function() {
    var hljs = require('highlight.js');
    var arr = [];
    var forEach = arr.forEach;
    var filter = arr.filter;

    forEach.call(document.querySelectorAll('.source.prettyprint') || arr, function(source) {
        var code = source.querySelector('code');
        if (code) {
            var langClassNames = filter.call(source.classList, function(className) {
                return className.match(/^lang-/i);
            });
            if (langClassNames.length) {
                code.classList.add.apply(code.classList, langClassNames);
            }
            hljs.highlightBlock(code);
        }
    });
})();
