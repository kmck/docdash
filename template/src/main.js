var arr = [];
var forEach = arr.forEach;
var filter = arr.filter;

// Highlight selected line based on anchor
(function() {
    var anchorHash = document.location.hash.substring(1);
    if (anchorHash && anchorHash.match(/^line\d+$/)) {
        var selectedLine = document.querySelector('.source.linenums #' + anchorHash);
        if (selectedLine && selectedLine.classList) {
            selectedLine.classList.add('selected')
        }
    }
})();

// Close other nav items
(function() {
    forEach.call(document.querySelectorAll('.nav details'), function(details) {
        var anchor = details.querySelector('a');
        if (anchor && anchor.pathname === document.location.pathname) {
            details.open = true;
        }
    });
})();

// Use highlight.js on prettify targets
// This can be removed when jsdoc has publish-time sytax highlighter support
(function() {
    var hljs = require('highlight.js');
    forEach.call(document.querySelectorAll('.prettyprint') || arr, function(source) {
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
