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
            page.content += '\n\n<div class="gitbook-share"></div>\n\n';
            return page;
        },
        "page:after": function(page) {
            var config = this.options.pluginsConfig.share;
            if (!config) {
                throw "Need to configure at least one share option";
            }
            out = '\n\n<div class="gitbook-share">';
            count = 0;

            Object.getOwnPropertyNames(config).forEach(function(key) {
                var cfg = config[key];
                var lang, url;
                if (key == 'twitter') {
                    var via = cfg.via ? ' data-via="'+cfg.via+'"' : '';
                    lang = cfg.lang ? ' data-lang="'+cfg.lang+'"' : '';
                    url = cfg.url ? ' data-url="'+cfg.url+'"' : '';
                    out += '\n<span class="twitter">';
                    out +=
                        '\n<a href="https://twitter.com/share" class="twitter-share-button"'+url+via+lang+'>Tweet</a>'+
                        "\n<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>";
                    out += '\n</span>';
                    ++count;
                }

                if (key == 'reddit') {
                    //NOTE reddit plugin is inserted by plugin.js
                    out += '\n<span class="reddit"></span>';
                    ++count;
                }

                if (key == 'facebook') {
                    var loc =
                        'http://www.facebook.com/plugins/like.php?href='+
                        encodeURIComponent(cfg.url ? cfg.url : '') +
                        ('&width='+(cfg.width ? cfg.width : 120)+
                            '&layout='+(cfg.layout ? cfg.layout : 'button_count')+
                            '&action=like&show_faces=false&share=true&height=21'+
                            (cfg.appId ? '&appId='+cfg.appId : '')).replace( /&/g , '&amp;');
                    out += '\n<span class="facebook">';
                    out += '\n<iframe src="'+(loc)+'" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width: 150px; height:21px;" allowTransparency="true"></iframe>';
                    out += '\n</span>';
                    ++count;
                }
                if (key == 'googleplus') {
                    out += '\n<span class="googleplus">';
                    out +=
                        '\n<div class="g-plusone" data-size="'+(cfg.size ? cfg.size : 'medium')+
                        '" data-href="'+(cfg.url ? cfg.url : '')+'"></div>'+
                        '\n<script type="text/javascript"> (function() {'+
                            "\nvar po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;"+
                            "\npo.src = 'https://apis.google.com/js/platform.js';"+
                            "\nvar s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);"+
                        '\n})(); </script>';
                    out += '\n</span>';
                    ++count;
                }
                if (key == 'linkedin') {
                    out += '\n<span class="linkedin">';
                    lang = cfg.lang || 'en_US';
                    url = cfg.url ? ' data-url="'+cfg.url+'"' : '';
                    out +=
                        '\n<script src="//platform.linkedin.com/in.js" type="text/javascript">lang: '+
                            lang+'</script>' +
                        '\n<script type="IN/Share"'+url+' data-counter="right"></script>';
                    out += '\n</span>';
                }
            });

            if (count === 0) {
                console.log('WARNING: [gitbook-plugin-share] Zero share buttons were created');
            }
            out += '\n</div>\n\n';

            page.content = page.content.replace('<div class="gitbook-share"></div>', out);
            return page;
        }
    }
};
