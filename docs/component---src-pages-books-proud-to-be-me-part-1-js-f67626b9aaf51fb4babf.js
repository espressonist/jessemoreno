(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{274:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(111),i=n(269),s=n(284);t.default=function(){return a.a.createElement(i.a,{className:"white-bg",logo:"/logo.png"},a.a.createElement(r.Helmet,null,a.a.createElement("title",null,"Proud To Be Me: Rosalinda")),a.a.createElement("div",{className:"container",style:{backgroundColor:"#fff"}},a.a.createElement(s.a,{disqusConfig:{url:"http://localhost:8000/books/proud-to-be-me-part-1",title:"Proud To Be Me: Rosalinda"},cover:"/part1.jpg",title:"Proud To Be Me: Rosalinda"},a.a.createElement("p",null,"Rosalinda,"),a.a.createElement("p",null,"A beautiful Mexican girl, ventures out to Los Angeles at the age of twenty-five, not knowing what her future and career was going to entail. After being in Los Angeles for a few months, her life takes an unexpected turn that forces her to make a fast decision, after getting fired from her job in a restaurant, working as a waitress."),a.a.createElement("p",null,"She’s recommended to train as a boxer and follows that path with her heart and becomes passionate with the boxing world. Then, her career starts to blossom as a professional boxer."),a.a.createElement("p",null,"Along that path, she meets someone special and falls in love until one evening, they’re involved in a shooting that puts their lives at risk. They’re both sent to the hospital, which later, she finds out that her love might not live, as she fights for her life to stay alive."),a.a.createElement("p",null,"She deals with the absence of her love and continues what she loves doing: boxing. The adversities in her path, did not slow her down nor kept her from becoming what her heart desired for herself and her country."),a.a.createElement("p",null,"She was proud to be,",a.a.createElement("br",null),a.a.createElement("strong",null,a.a.createElement("em",null,'"The Rose."'))),a.a.createElement("p",null,a.a.createElement("strong",{style:{display:"inline-block",marginBottom:5}},"Buy now:"),a.a.createElement("ul",{className:"tags flex",style:{marginTop:0}},a.a.createElement("li",null,a.a.createElement("a",{href:"https://www.amazon.com/dp/1643456180/ref=sr_1_1?keywords=9781643456188&qid=1563204703&s=gateway&sr=8-1",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("span",{style:{backgroundColor:"#1180e1",color:"#fff"}},"Amazon"))),a.a.createElement("li",null,a.a.createElement("a",{href:"https://www.barnesandnoble.com/w/proud-to-be-me-rosalinda-jesse-moreno/1117301921?ean=9781643456188",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("span",{style:{backgroundColor:"#1180e1",color:"#fff"}},"Barnes and Noble"))),a.a.createElement("li",null,a.a.createElement("a",{href:"https://www.stratton-press.com/books/proud-to-be-me-rosalinda/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("span",{style:{backgroundColor:"#1180e1",color:"#fff"}},"Stratton Press"))))))))}},283:function(e,t,n){"use strict";n(49),n(37),n(14),n(6),n(4),n(2),n(67),n(85);var o=n(3);t.__esModule=!0,t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o;return function(){var a=this,r=arguments,i=function(){o=null,n||e.apply(a,r)},s=n&&!o;window.clearTimeout(o),o=setTimeout(i,t),s&&e.apply(a,r)}},t.isReactElement=r,t.shallowComparison=function(e,t){var n=new Set(Object.keys(e),Object.keys(t)),o=Array.isArray(n),a=0;for(n=o?n:n[Symbol.iterator]();;){var i;if(o){if(a>=n.length)break;i=n[a++]}else{if((a=n.next()).done)break;i=a.value}var s=i;if(e[s]!==t[s]&&!r(e[s]))return!0}return!1};var a=o(n(1));function r(e){return!!a.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return a.default.isValidElement(e)}))}},284:function(e,t,n){"use strict";var o=n(1),a=n.n(o),r=n(270),i=n.n(r),s=n(285);t.a=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:i.a["book-meta"]+" flex"},a.a.createElement("div",{className:i.a["book-cover"],style:{alignSelf:"center"}},a.a.createElement("img",{src:e.cover,alt:e.disqusConfig.title})),a.a.createElement("div",{className:i.a["book-details"]},a.a.createElement("h1",null,e.title),e.children)),a.a.createElement(s.Disqus,{config:e.disqusConfig}))}},285:function(e,t,n){"use strict";var o=n(3);t.__esModule=!0,t.default=void 0;var a=o(n(286));t.Disqus=a.default;var r=o(n(287));t.CommentCount=r.default;var i=a.default;t.default=i},286:function(e,t,n){"use strict";var o=n(3);t.__esModule=!0,t.default=void 0;var a=o(n(13)),r=o(n(26)),i=o(n(27)),s=o(n(1)),l=o(n(20)),d=n(283),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="jessemoreno",t.config?n.config=t.config:n.config={identifier:t.identifier,url:t.url,title:t.title},n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&window.document&&this.shortname&&this.cleanInstance(),this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,d.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){if("undefined"!=typeof window&&window.document&&this.shortname){var e=this.config;window.disqus_config=function(){this.page.identifier=e.identifier,this.page.title=e.title,this.page.url=e.url},(0,d.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body)}},n.cleanInstance=function(){(0,d.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(t){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)},n.render=function(){var e=this.props,t=(e.config,(0,r.default)(e,["config"]));return s.default.createElement("div",(0,a.default)({id:"disqus_thread"},t,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:73},__self:this}))},t}(s.default.Component);t.default=u,u.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),identifier:l.default.string,title:l.default.string,url:l.default.string}},287:function(e,t,n){"use strict";var o=n(3);t.__esModule=!0,t.default=void 0;var a=o(n(13)),r=o(n(26)),i=o(n(27)),s=o(n(1)),l=o(n(20)),d=n(283),u=(0,d.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="jessemoreno",n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,d.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?u():(0,d.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,d.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,o=(0,r.default)(e,["config","placeholder"]);return s.default.createElement("span",(0,a.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},o,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:49},__self:this}),n)},t}(s.default.Component);t.default=c,c.defaultProps={placeholder:"..."},c.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),placeholder:l.default.string}}}]);
//# sourceMappingURL=component---src-pages-books-proud-to-be-me-part-1-js-f67626b9aaf51fb4babf.js.map