'use strict'

function activate(context) {
    return {
        extendMarkdownIt(md) {
            // https://github.com/markdown-it/markdown-it-container/issues/23#issuecomment-389160929
            return md.use(
                require('markdown-it-container'),
                'dynamic',{
                    validate: function() { return true; },
                    render: function(tokens, idx) {
                        var token = tokens[idx];
                
                        if (token.nesting === 1) {
                            return '<div class="' + token.info.trim() + '">';
                        } else {
                            return '</div>';
                        }
                    },
                }
            );
        }
    };
}
exports.activate = activate;
