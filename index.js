module.exports = {
    book: {
        assets: "./book",
        js: [
            "plugin.js"
        ],
        html: {
        }        
    },
    hooks: {
        "page:before": function(page) {
            console.log('Running share plugin', page.path);
            page.content += '\n\n<div class="gitbook-share"></div>\n\n';
            return page;
        },
        "page:after": function(page) {      
            var config = this.options.pluginsConfig.share || {};
            if (!config) throw "Need to configure at least one share option";
            out = '\n\n<div class="gitbook-share">';
            count = 0;

            //TODO twitter button not yet working properly
            if (config.twitter) {
                console.log('Running share plugin twitter');
                var via = config.twitter.via ? ' data-via="'+config.twitter.via+'"' : '';
                var lang = config.twitter.lang ? ' data-lang="'+config.twitter.lang+'"' : '';
                out += '\n<a href="https://twitter.com/share" class="twitter-share-button"'+via+lang+'>Tweet</a>'+
                    "\n<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>";
                ++count;
            }

            if (config.reddit) {
                ++count;
            }

            if (count === 0) {
                console.log('WARNING: [gitbook-plugin-share] Zero share buttons were created');
            }
            out += '\n</div>\n\n'

            page.content = page.content.replace('<div class="gitbook-share"></div>', out);
            return page;
        }
    }
};