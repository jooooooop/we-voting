webpackJsonp([4],{9:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return React.createElement("div",{className:"container"},React.createElement("hr",null),React.createElement("footer",null,React.createElement("p",{style:{"font-size":"14px"}},"© ",React.createElement("br",null),React.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=elevenBeans&type=follow&count=true",frameborder:"0",scrolling:"0",width:"170px",height:"20px",style:{border:"0"}}))))};t.default=n},58:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),i=n(1),c=l(i),s=n(16),f=n(9),p=l(f),m=function(e){function t(e){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),u(t,[{key:"componentDidMount",value:function(){$("#globalTransition").hide()}},{key:"render",value:function(){return c.default.createElement("div",{className:"homepage"},c.default.createElement("div",{style:{"background-color":"#eee"}},c.default.createElement("div",{className:"jumbotron"},c.default.createElement("div",{className:"container"},c.default.createElement("h1",{style:{"font-size":"36px"}},"Let's voting! ",c.default.createElement("br",null),c.default.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=elevenBeans&repo=WeVoting&type=star&count=true",scrolling:"0",width:"110px",height:"30px",style:{border:"0",position:"absolute",left:"12px",top:"12px"}})),c.default.createElement("p",{className:"lead"},'This voting app is built by @elevenbeans, following the instructions of "Build a Voting App | Free Code Camp".',c.default.createElement("br",null),"Github Name: elevenBeans ",c.default.createElement("br",null)),!userInfo.name&&c.default.createElement("p",null,c.default.createElement("a",{style:{"font-weight":"100","font-size":"14px","border-radius":"3px"},className:"btn btn-lg btn-primary",href:"/login/github?currentPath="+location.pathname,role:"button",onClick:this.signIn},"Sign in with Github")),userInfo.name&&c.default.createElement("p",null,c.default.createElement(s.Link,{style:{"font-weight":"100","font-size":"14px","border-radius":"3px"},className:"btn btn-lg btn-primary",to:"/new",role:"button"},"Create a new poll >>"))))),c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-md-12"},c.default.createElement("h2",null,"View more polls?"),c.default.createElement("p",{className:"lead"},"You can select a poll to see the results and vote, or sign-in to make a new poll."),c.default.createElement("p",null,c.default.createElement(s.Link,{className:"btn btn-default",to:"/list",role:"button"},"View all polls »"))))),c.default.createElement(p.default,null))}}]),t}(i.Component);t.default=m}});