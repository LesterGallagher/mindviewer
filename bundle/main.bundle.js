!function(e){function t(t){for(var o,i,c=t[0],l=t[1],s=t[2],u=0,m=[];u<c.length;u++)i=c[u],r[i]&&m.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(d&&d(t);m.length;)m.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={2:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/bundle/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=l;a.push([76,0]),n()}({17:function(e,t,n){"use strict";var o=function(e,t){for(var n,o={},r=(e=(e||window.location.href).split("?")[1]||"").split("&"),a=0;a<r.length;a++)n=r[a].split("="),(!t||n[0]&&n[1])&&(o[decodeURIComponent(n[0])]=decodeURIComponent(n[1]));return o}(null,!0),r=o.room,a=o.ispublic,i=o.name,c=o.id;e.exports={apiUrl:"https://api.esstudio.site/api/mindviewer-web",room:r,ispublic:a,name:i,id:c}},18:function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var r=n(6),a=n(2),i=n(5),c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.typetoclass={mmmain:0,mmheader:1,mmnote:2},window.StateSave=this}return o(e,[{key:"compileState",value:function(e){var t=a(document.getElementById("mainh")).val(),n=i.globalelems,o=i.globallines,c=[],l=[];console.log(n),console.log(o);for(var s=0;s<n.length;s++)n[s].save_id=s;for(var d=0;d<o.length;d++)o[d].save_id=d;for(var u=0;u<n.length;u++){for(var m=n[u].mmdata.connected_elems,p=[],f=0;f<m.length;f++)if(void 0!==m[f].elem.save_id&&void 0!==m[f].line.save_id){var h={lineid:parseInt(m[f].line.save_id).toString(),elemid:parseInt(m[f].elem.save_id).toString()};p.push(h)}else console.error("one of the connected elements is null or undefined"+m[f].elem);var g=n[u].attr("class").trim().split(/\s+/)[1],v={id:n[u].save_id,key:a(n[u]).attr("data-key"),type:this.typetoclass[g],leftpos:a(n[u]).css("left"),toppos:a(n[u]).css("top"),connected_elems:p,"font-size":a(n[u]).children(2==this.typetoclass[g]?"textarea":"input").css("font-size"),width:a(n[u]).children("textarea").css("width"),height:a(n[u]).children("textarea").css("height"),content:a(n[u]).children(2==this.typetoclass[g]?"textarea":"input").val()};c.push(v)}for(var w=0;w<o.length;w++){var b={id:o[w].save_id.toString(),key:a(n[w]).attr("data-key"),"stroke-width":a(o[w]).css("stroke-width"),"stroke-color":r.GetColorOrUndefined(a(o[w]).css("stroke-color")),elem1:o[w].connected_elems.elem1.save_id,elem2:o[w].connected_elems.elem2.save_id};l.push(b)}return{static:{name:t,id:e,timestamp:Date.now()},elems:c,lines:l}}}]),e}();e.exports=new c},19:function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var r=n(2),a=n(5),i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"readData",value:function(e){a.RemoveAll(),document.getElementById("mainh").value=e.static.name;for(var t=e.elems,n=e.lines,o=[],i=0;i<t.length;i++){var c=a.CreateElement(t[i]);o[t[i].id]=c}for(var l=0;l<n.length;l++){var s=o[n[l].elem1],d=o[n[l].elem2];a.CreateLine(n[l]["stroke-width"],n[l]["stroke-color"],s,d,n[l].key)}r("#mainh").val(e.static.name)}}]),e}();e.exports=new i},34:function(e,t,n){"use strict";var o=n(2),r=n(72),a=n(17),i=n(19),c=n(18),l=n(36),s=n(5),d=s.field,u=s.globalelemnsHashed,m=(s.globallinesHashed,s.CreateElement),p=s.CreateLine,f=s.removeLine,h=n(6),g=(h.debounce,h.throttle),v=o("#messages"),w=Math.random().toString(36),b=!0,y=a.apiUrl+"/no-persist-open-chat";t.gotHotData=!1,t.socketReadyPromise=new Promise(function(e,t){if("false"===a.ispublic)return e();var n=r.connect(y,{"connect timeout":5e3});n.on("connect",function(){n.emit("init",{room:a.room,nickname:w},function(t){if(!t)return console.error("Unable to connect");n.emit("msg",{type:"retrieve-mm"}),setTimeout(function(){return b=!1},4e3);var r=[],a=g(function(){0!==r.length&&(r.length>1?n.emit("msg",{type:"batched_updates",batched:r}):n.emit("msg",r[0]),r.splice(0,r.length))},40),i=function(e){r.push(e),a()};n.on("msg",function(e){"batched_updates"===e.type?e.batched.forEach(function(t){t.from=e.from,k(t,i)}):k(e,i),console.log(e)}),n.on("disconnected",function(e){console.log("disconnect",e),e.msg="User disconnected from the room.",E(e),o(_[e.from]).remove(),delete _[e.from]}),x(i),e()}),n.on("disconnect",function(){console.warn(" socket disconnect")})}),n.on("connect_error",function(){alert("connection failed")})});var k=function(e,n){if("chat"===e.type)E(e);else if("update"===e.type)S(e);else if("retrieve-mm"===e.type){if(!1===l.percistanceLoaded)return;n({type:"receive-mm",state:c.compileState(l.dataId)})}else if("receive-mm"===e.type){if(!b)return;b=!1;var o=e.state;i.readData(o),t.gotHotData=!0}},x=function(e){o("#mainh").on("input",function(t){e({type:"update",action:"staticupdate",patch:{name:t.target.value}})}),d.on("elem_modified",function(t){e({type:"update",action:"elem_modified",patch:t})}),d.on("elem_created",function(t){e({type:"update",action:"elem_created",patch:t})}),d.on("elem_removed",function(t){e({type:"update",action:"elem_removed",patch:t})}),d.on("line_created",function(t){e({type:"update",action:"line_created",patch:t})}),d.on("line_removed",function(t){e({type:"update",action:"line_removed",patch:t})}),o(document).on("mousemove",g(function(t){e({type:"update",action:"mouse",clientX:t.clientX,clientY:t.clientY})},40,!1))},_={},I=o("#mouses"),S=function(e){var t=e.patch;if("mouse"===e.action&&(_[e.from]||(console.log("disconnect",e),e.msg="User joined the room.",E(e),o(_[e.from]).remove(),delete _[e.from],_[e.from]=o('<div class="mouse-pos"></div>').appendTo(I)),_[e.from].css("top",e.clientY).css("left",e.clientX)),"elem_removed"===e.action){var n=t.key;u[n].RemoveThis()}else if("elem_modified"===e.action){var r=t.key;void 0!==t.content&&u[r].find("input, textarea").val(t.content),void 0!==t["font-size"]&&u[r].find("input, textarea").css("font-size",t["font-size"]),void 0!==t.leftpos&&(u[r].css("left",t.leftpos),u[r].UpdateAllConnectedLines()),void 0!==t.toppos&&(u[r].css("top",t.toppos),u[r].UpdateAllConnectedLines()),void 0!==t.width&&(u[r].find("textarea").outerWidth(t.width),u[r].UpdateAllConnectedLines()),void 0!==t.height&&(u[r].find("textarea").outerHeight(t.height),u[r].UpdateAllConnectedLines())}else"elem_created"===e.action?(m(t),console.log("created",e)):"line_created"===e.action?p(t.strokewidth,t.strokecolor,u[t.key1],u[t.key2],t.key):"line_removed"===e.action?f(t.key):"staticupdate"===e.action&&void 0!==t.name&&o("#mainh").val(t.name)};function E(e){var t=e.from,n=e.msg,o=(v.scrollTop(),v.innerHeight(),v[0].scrollHeight);o=v.scrollTop()+v.height();v.append('<div class="message other">    <div class="msg">'+n+'</div>    <div class="from">'+t+"</div>    </div>"),o>-1&&v.scrollTop(v[0].scrollHeight)}},36:function(e,t,n){"use strict";var o=n(2),r=n(35)(),a=n(18),i=n(17),c=n(19),l=n(34),s=(n(21),n(5)),d=n(11),u=new Date,m=o("#save-last"),p=o("#save-mm"),f=o("#save-to-storage");t.percistanceLoaded=!1;var h=function(){m.text(r.format(u))};setInterval(h,5e3),"false"===i.ispublic?(t.dataId=i.id||Math.random().toString(36),i.id?(d.getMindmaps().then(function(e){var t=e[i.id];t?c.readData(t):o("#fullscreen-loader").fadeOut()}),o("#fullscreen-loader").fadeOut()):(document.getElementById("mainh").value=i.name,o("#fullscreen-loader").fadeOut()),p.add(f).on("click",function(){var e=a.compileState(t.dataId);e.type="app_storage",d.putMindmap(e).then(function(){s.setSaved(),u=new Date,h(),i.id||(window.location.href=window.location.origin+"/mindmapper.html?ispublic=false&id="+t.dataId)})})):(o.get("https://api.myjson.com/bins/"+i.room,function(e,n,r){!1===l.gotHotData&&c.readData(e),t.percistanceLoaded=!0,t.dataId=e.static.id,l.socketReadyPromise.then(function(){o("#fullscreen-loader").fadeOut()})}),p.add(f).on("click",function(){g()}));var g=t.saveToJsonOnline=function(){d.putMindmap({type:"api_bin",room:i.room,static:{id:t.dataId,name:o("#mainh").val(),timestamp:Date.now()}}),o.ajax({type:"PUT",url:"https://api.myjson.com/bins/"+i.room,data:JSON.stringify(a.compileState(t.dataId)),async:!1,contentType:"application/json; charset=utf-8",dataType:"json",error:function(e,t,n){alert("unable to save mind map")},success:function(e,t,n){u=new Date,h(),s.setSaved()}})}},43:function(e,t,n){"use strict";t.rgb2hex=function(e){if(/^#[0-9A-F]{6}$/i.test(e))return e;function t(e){return("0"+parseInt(e).toString(16)).slice(-2)}return"#"+t((e=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))[1])+t(e[2])+t(e[3])}},44:function(e,t,n){"use strict";var o=n(2),r=n(43).rgb2hex,a=n(11),i=o("#background-color-modal"),c=a.constructor.getDB();function l(){var e=r(o(document.body).css("background-color")),t=localStorage.getItem("bg-color-v1");o("#backgroundColorInput").val(t||e),t&&(document.body.style.backgroundColor=t),c.get("bg-image-v1").then(function(e){if(e){var t=window.URL.createObjectURL(e);document.body.style.backgroundSize=document.body.style.backgroundSize||"initial",document.body.style.backgroundImage="url("+t+")"}}),void 0!==localStorage.getItem("bg-repeat-v1")&&(document.body.style.backgroundRepeat=localStorage.getItem("bg-repeat-v1")?"repeat":"no-repeat",o("#backgroundRepeatInput").get(0).checked=JSON.parse(localStorage.getItem("bg-repeat-v1"))),void 0!==localStorage.getItem("bg-size-v1")&&(document.body.style.backgroundSize=localStorage.getItem("bg-size-v1"),o("#backgroundSizeSelect").val(localStorage.getItem("bg-size-v1")))}l(),i.find(".form").on("submit",function(e){return e.preventDefault()}),o("#backgroundRepeatInput").on("change",function(e){document.body.style.backgroundRepeat=e.target.checked?"repeat":"no-repeat",localStorage.setItem("bg-repeat-v1",e.target.checked)}),o("#backgroundSizeSelect").on("change",function(e){document.body.style.backgroundSize=e.target.value,localStorage.setItem("bg-size-v1",e.target.value)}),o("#backgroundImage").on("change",function(e){document.body.style.backgroundSize=document.body.style.backgroundSize||"initial",document.body.style.backgroundImage="url("+window.URL.createObjectURL(e.target.files[0])+")",c.set("bg-image-v1",e.target.files[0])}),o("#backgroundColorInput").on("change",function(e){document.body.style.backgroundColor=e.target.value,localStorage.setItem("bg-color-v1",e.target.value)}),o("#backgroundResetButton").on("click",function(e){document.body.style.backgroundImage=null,document.body.style.backgroundColor=null,document.body.style.backgroundSize=null,document.body.style.backgroundRepeat=null,localStorage.removeItem("bg-color-v1"),localStorage.removeItem("bg-size-v1"),localStorage.removeItem("bg-repeat-v1"),c.delete("bg-image-v1"),l()})},47:function(e,t){},5:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=n(6),a=n(2),i=n(74).EventEmitter,c=t.globalelems=[],l=t.globallines=[],s=n(6).throttle,d={LARGE:0,MIDDLE:1,SMALL:2},u=!0;t.getSaved=function(){return u},t.setSaved=function(){return u=!0};var m=window.globalelemnsHashed=t.globalelemnsHashed={},p=window.globallinesHashed=t.globallinesHashed={},f=!1;a(window).on("mousedown",function(){return f=!0}),a(window).on("mouseup",function(){return f=!1});var h=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),n=a("#field"),o=function(e){var t=e.target.value,n=a(e.target).attr("data-key");v("elem_modified",{key:n,content:t})};n.on("input",".mmelem textarea",o),n.on("input",".mmelem input",o);var r=function(e){var t=a(e.target).outerWidth(),n=a(e.target).outerHeight(),o=c.map(function(e){return e[0]}).indexOf(a(e.target).closest(".mmelem")[0]),r=a(e.target).attr("data-key");v("elem_modified",{key:r,width:t,height:n}),c[o].UpdateAllConnectedLines()};return a(window).on("mousemove",function(e){f&&a(e.target).is(".mmelem textarea")&&r(e)}),n.on("mouseup",".mmelem textarea",r),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i),t}(),g=t.field=new h,v=s(function(e,t){return g.emit(e,t)},40);function w(){window.currdrag.diddrag=!1;var e=window.currdrag.line;a(e).remove(),window.currdrag=void 0}function b(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=void 0;switch(e){case 0:i='\n            <div class="mmelem mmmain">\n            <input class="mm_title" type="text" name="title" value="new title">\n            <button class="mmclose" type="submit"></button>            \n            </div>';break;case 1:i='\n            <div class="mmelem mmheader">\n            <input class="mm_title" type="text" name="title" value="new title">\n            <button class="mmclose" type="submit"></button>            \n            </div>';break;case 2:i='\n            <div class="mmelem mmnote">\n            <textarea name="textarea" style:"width:100px;height:60px;" class="mmcontent"></textarea>\n            <button class="mmclose" type="submit"></button>            \n            </div>';break;default:i='\n            <div class="mmelem">\n            <input class="mm_title" type="text" name="title" value="new title">\n            <button class="mmclose" type="submit"></button>\n            </div>'}var s=document.getElementById("field");s.insertAdjacentHTML("beforeend",i);var h=s.lastChild,g=a(h);h.jqeurydata=g,a(g).attr("data-key",t),a(g).find("textarea").on("click",function(e){return e.stopPropagation()}),c.push(g),m[t]=g,h.childNodes.forEach(function(e){e.onmousedown=function(e){f=!0,e.stopPropagation()},a(e).is("textarea")&&(e.onwheel=function(){return!1})},this),a(g).css("top",80+Math.floor(20*Math.random())+"px"),a(g).css("left",80+Math.floor(20*Math.random())+"px"),g.mmdata={name:"newelem",connected_elems:[],containsElem:function(e){for(var t=0;t<g.mmdata.connected_elems.length;t++)if(g.mmdata.connected_elems[t].elem==e)return!0;return!1}},g.mousedown(function(e){if(e.stopPropagation(),window.activeElem=g,void 0!==window.currdrag){if(window.currdrag,window.currdrag==g)return console.log("dragged a line to itself"),a(window).mouseup(),void w();if(window.currdrag.mmdata.containsElem(g)||g.mmdata.containsElem(window.currdrag))return console.log("already dragged a line between these nodes"),a(window).mouseup(),void w();var t=window.currdrag.line;t.setAttribute("class","genline");var n=r.GetMiddleOfElement(g);t.setAttribute("d",_(t,"x2",n.x,0,0)),t.setAttribute("d",_(t,"y2",n.y,0,0)),t.connected_elems={elem1:g,elem2:window.currdrag},window.currdrag.mmdata.connected_elems.push({elem:g,line:t}),g.mmdata.connected_elems.push({elem:window.currdrag,line:window.currdrag.line}),window.currdrag.mmdata.connected_elems.forEach(function(e){window.currdrag.UpdateConnectedLines(e)}),g.mmdata.connected_elems.forEach(function(e){g.UpdateConnectedLines(e)}),l.push(t);var o=Math.random().toString(36);return a(t).attr("data-key",o),p[o]=t,window.currdrag=void 0,void v("line_created",{strokewidth:a(t).css("strokeWidth"),strokecolor:a(t).css("strokeColor"),key1:a(g).attr("data-key"),key2:a(window.currdrag).attr("data-key"),key:o})}var i=g.css("left").replace("px","")-e.pageX,c=g.css("top").replace("px","")-e.pageY;g.diddrag=!1,a(document).on("mousemove.elem-move",function(t){var n=t.pageX+i,o=t.pageY+c;g.css("top",o),g.css("left",n),g.mmdata.connected_elems.forEach(function(e){g.UpdateConnectedLines(e)});var r=a(g).attr("data-key");v("elem_modified",{leftpos:n,toppos:o,key:r}),(Math.abs(e.pageX-t.pageX)>5||Math.abs(e.pageY-t.pageY)>5)&&(g.diddrag=!0)})}),g.UpdateAllConnectedLines=function(){g.mmdata.connected_elems.forEach(function(e){g.UpdateConnectedLines(e)})},g.UpdateConnectedLines=function(e){var t=e.line,n=e.line.connected_elems.elem1,o=e.line.connected_elems.elem2;if(n===g){var r=y(n,e.elem),a=k(n,e.elem,400);t.setAttribute("d",_(t,"x2",r.x,a.x,a.y)),t.setAttribute("d",_(t,"y2",r.y,a.x,a.y)),r=y(e.elem,n),a=k(e.elem,n,400),t.setAttribute("d",_(t,"x1",r.x,a.x,a.y)),t.setAttribute("d",_(t,"y1",r.y,a.x,a.y))}else{if(o!==g)throw Error("element contains a line which doesnt hold a reference to that line.");var i=y(o,e.elem),c=k(o,e.elem,400);t.setAttribute("d",_(t,"x1",i.x,c.x,c.y)),t.setAttribute("d",_(t,"y1",i.y,c.x,c.y)),i=y(e.elem,o),c=k(e.elem,o,400),t.setAttribute("d",_(t,"x2",i.x,c.x,c.y)),t.setAttribute("d",_(t,"y2",i.y,c.x,c.y))}},g.click(function(e){if(e.stopPropagation(),0==g.diddrag){var t=r.GetMiddleOfElement(g),n=a("#svg_wrapper"),o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","M282,143 C151,140 395,421 271,415"),o.setAttribute("d",_(o,"x1",t.x,0,0)),o.setAttribute("d",_(o,"y1",t.y,0,0)),o.setAttribute("d",_(o,"x2",t.x,0,0)),o.setAttribute("d",_(o,"y2",t.y,0,0)),o.setAttribute("class","pregenline"),o.ChangeWidth=function(e){var t=e.wheelDelta;t/=Math.abs(t);var n=parseInt(a(o).css("stroke-width").replace("px",""),10);n>=10&&t>0?t=0:n<=2&&t<0&&(t=0),a(o).css("stroke-width",n+t+"px")},a(o).mouseenter(function(){}),a(o).mouseleave(function(){}),a(o).click(function(){I(o,!0)}),a(o).mouseover(function(){window.activeElem=o}),n.append(o),g.line=o,window.currdrag=g,a(document).on("mousemove.elem-move",function(e){var t=e.pageX+s.scrollLeft,n=e.pageY+s.scrollTop;o.setAttribute("d",_(o,"x2",t,0,0)),o.setAttribute("d",_(o,"y2",n,0,0)),g.diddrag=!0})}}),g.RemoveThis=function(){for(var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];g.mmdata.connected_elems.length>0;)I(g.mmdata.connected_elems[g.mmdata.connected_elems.length-1].line);c.splice(c.indexOf(g),1);var t=a(g).attr("data-key");delete m[t],a(g).remove(),e&&v("elem_removed",{key:t})},a(g).children(".mmclose").click(function(){g.RemoveThis(!0)}),g.ChangeSize=function(t){var n,o=parseFloat(a(g).outerWidth()),r=parseFloat(a(g).outerHeight());switch(t=t/Math.abs(t)*8,e){case d.LARGE:(n=parseFloat(a(g).children(".mm_title").css("font-size").replace("em","")))<10&&t<0?t=0:n>200&&t>0&&(t=0),a(g).children(".mm_title").css("font-size",n+t/4);break;case d.MIDDLE:(n=parseFloat(a(g).children(".mm_title").css("font-size").replace("em","")))<10&&t<0?t=0:n>140&&t>0&&(t=0),a(g).children(".mm_title").css("font-size",n+t/4);break;case d.SMALL:var i=a(g).children("textarea").css("width"),l=a(g).children("textarea").css("height");(n=parseFloat(a(g).children("textarea").css("font-size").replace("em","")))<10&&t<0?t=0:n>80&&t>0&&(t=0),a(g).children("textarea").css("font-size",n+t/4),a(g).children("textarea").css("width",i),a(g).children("textarea").css("height",l);break;default:var s=parseInt(a(g).css("width").replace("px",""),10),u=parseInt(a(g).css("height").replace("px",""),10);a(g).css("width",s+t+"px"),a(g).css("height",u+t+"px")}var m=+a(g).css("left").replace("px",""),p=+a(g).css("top").replace("px",""),f=(o-parseFloat(a(g).outerWidth()))/2,h=(r-parseFloat(a(g).outerHeight()))/2;a(g).css("left",m+f+"px"),a(g).css("top",p+h+"px"),g.UpdateAllConnectedLines();c.map(function(e){return e[0]}).indexOf(g[0]);var w=a(g).attr("data-key");v("elem_modified",{key:w,"font-size":n,leftpos:m+f,toppos:p+h})},g.onElemScroll=function(e){g.ChangeSize(e.wheelDelta)},a(g).mouseenter(function(){window.addEventListener("mousewheel",g.onElemScroll)}),a(g).mouseleave(function(){window.removeEventListener("mousewheel",g.onElemScroll,!1)}),g.UpdateMMdata=function(e){e.mmdata.connected_elems.push({elem:window.currdrag,line:window.currdrag.line})};var b,x=+a(g).css("left").replace("px",""),S=+a(g).css("top").replace("px","");n&&v("elem_created",(o(b={key:t,leftpos:x,toppos:S,type:e},"key",t),o(b,"content",g.find("input, textarea").val()),b));return u=!1,{elem:g,updatemmdata:g.UpdateMMdata}}function y(e,t){var n=r.GetLeftMiddle(e),o=r.GetRightMidle(e),a=r.GetLeftMiddle(t),i=r.GetRightMidle(t);return n.x>i.x?n:o.x<a.x?o:r.GetMiddleOfElement(e)}function k(e,t,n){var o=r.GetMiddleOfElement(e),a=r.GetLeftMiddle(e),i=r.GetRightMidle(e),c=r.GetMiddleOfElement(t),l=r.GetLeftMiddle(t),s=r.GetRightMidle(t);return a.x>s.x?{x:-(x(a,s)<n?x(a,s):n)/3,y:0}:i.x<l.x?{x:(x(i,l)<n?x(i,l):n)/3,y:0}:a.y<l.y?{x:0,y:(x(o,c)<n?x(o,c):n)/3}:{x:0,y:-(x(c,o)<n?x(c,o):n)/3}}function x(e,t){return Math.sqrt(Math.pow(Math.abs(parseInt(e.x)-parseInt(t.x,10)),2)+Math.pow(Math.abs(parseInt(e.y)-parseInt(t.y,10)),2))}function _(e,t,n,o,r){var a,i=e.getAttribute("d").split(" ");if("x1"==t){var c=i[0].split(",");c[0]=parseInt(c[0].replace(/[MC]/i,""),10),c[1]=parseInt(c[1],10),i[0]="M"+n+","+c[1],i[1]="C"+(n+o)+","+(c[1]+r),a=i.join(" ")}else if("y1"==t){var l=i[0].split(",");l[0]=parseInt(l[0].replace(/[MC]/i,""),10),l[1]=parseInt(l[1],10),i[0]="M"+l[0]+","+n,i[1]="C"+(l[0]+o)+","+(n+r),a=i.join(" ")}else if("x2"==t){var s=i[3].split(",");s[0]=parseInt(s[0],10),s[1]=parseInt(s[1],10),i[3]=n+","+s[1],i[2]=n+o+","+(s[1]+r),a=i.join(" ")}else if("y2"==t){var d=i[3].split(",");d[0]=parseInt(d[0],10),d[1]=parseInt(d[1],10),i[3]=d[0]+","+n,i[2]=d[0]+o+","+(n+r),a=i.join(" ")}return a}function I(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null!=e.connected_elems||void 0!=e.connected_elems){for(var n=e.connected_elems.elem1.mmdata.connected_elems,o=0;o<n.length;o++)if(n[o].line===e){n.splice(o,1);break}for(var r=e.connected_elems.elem2.mmdata.connected_elems,i=0;i<r.length;i++)if(r[i].line===e){r.splice(i,1);break}}l.splice(l.indexOf(e),1),delete p[a(e).attr("data-key")],a(e).remove(),console.log("remove line",e),t&&v("line_removed",{key:a(e).attr("data-key")}),u=!1}t.RemoveAll=function(){for(var e in l.length=0,c.length=0,m)m.hasOwnProperty(e)&&delete m[e];for(var t in p)p.hasOwnProperty(t)&&delete p[t];a("svg").empty(),a("#field").children(".mmelem").remove(),u=!1},t.CreateElement=function(e){var t=e.type,n=e.leftpos,o=e.toppos,r=e.fontsize,i=e.backgroundcolor,c=e.content,l=(e.boxshadowcol,e.width),s=e.height,d=b(t,e.key).elem;return a(d).css("left",n),a(d).css("top",o),t===Element.SMALL?(a(d).children("textarea").css("font-size",r),a(d).children("textarea").css("width",l),a(d).children("textarea").css("height",s),a(d).children("textarea").val(c),a(d).children("textarea").on("click",function(e){return e.stopPropagation()})):(a(d).children("input").css("font-size",r),a(d).children("input").val(c)),void 0!==i&&a(d).css("background-color",i),u=!1,d},t.CreateLine=function(e,t,n,o,i){var c=n,s=r.GetMiddleOfElement(c),d=a("#svg_wrapper"),m=document.createElementNS("http://www.w3.org/2000/svg","path");m.setAttribute("d","M282,143 C151,140 395,421 271,415"),m.setAttribute("d",_(m,"x1",s.x,0,0)),m.setAttribute("d",_(m,"y1",s.y,0,0)),m.setAttribute("d",_(m,"x2",s.x,0,0)),m.setAttribute("d",_(m,"y2",s.y,0,0)),m.setAttribute("class","genline"),m.ChangeWidth=function(e){var t=e.wheelDelta;t/=Math.abs(t);var n=+(a(m)[0].style["stroke-width"]||"3").replace("px","");n>=10&&t>0?t=0:n<=2&&t<0&&(t=0),a(m).css("stroke-width",n+t+"px")},a(m).mouseenter(function(){}),a(m).mouseleave(function(){}),a(m).click(function(){I(m,!0)}),a(m).mouseover(function(){window.activeElem=m}),d.append(m),c=o;var f=r.GetMiddleOfElement(c);m.setAttribute("d",_(m,"x2",f.x,0,0)),m.setAttribute("d",_(m,"y2",f.y,0,0)),m.connected_elems={elem1:n,elem2:o},n.mmdata.connected_elems.push({elem:o,line:m}),o.mmdata.connected_elems.push({elem:n,line:m}),n.mmdata.connected_elems.forEach(function(e){n.UpdateConnectedLines(e)}),o.mmdata.connected_elems.forEach(function(e){o.UpdateConnectedLines(e)}),l.push(m),a(m).attr("data-key",i),p[i]=m,e&&a(m).css("stroke-width",e),t&&a(m).css("stroke-color","rgb( "+t.join()+")"),u=!1},a(document).ready(function(){b(0,Math.random().toString(36)),a(document).click(function(){a("#color-picker").css("display","none")}),a(document).mouseup(function(){void 0!==window.currdrag&&w(),a(document).unbind("mousemove.elem-move")}),a("#spawn_elem_btn0").click(function(){var e=Math.random().toString(36);b(d.LARGE,e,!0)}),a("#spawn_elem_btn1").click(function(){var e=Math.random().toString(36);b(d.MIDDLE,e,!0)}),a("#spawn_elem_btn2").click(function(){var e=Math.random().toString(36);b(d.SMALL,e,!0)}),a("#color-picker").click(function(e){e.stopPropagation()});var e=document.getElementById("color-picker");e.GetColor=function(e){return r.GetColor(a(e).css("background-color").toString())},e.GetColorHex=function(t){var n=e.GetColor(t);return r.rgbToHex(n)},e.AssignColorSlider=function(t){if(window.activeElem){var n=255,o=255,i=255;if(0==t.trim().startsWith("#"))n=parseInt(a("#color-picker").children("#red").val(),10),o=parseInt(a("#color-picker").children("#green").val(),10),i=parseInt(a("#color-picker").children("#blue").val(),10),a("#color-picker").children("#hex").val(r.rgbToHex([n,o,i]));else{if(1!=/^#([\da-z]{6})$/i.test(t.trim()))throw Error("the function is unclear about this argument: "+t);var c=t.trim().match(/^#([\da-z]{6})$/i)[1];n=parseInt(c.slice(0,2),16),o=parseInt(c.slice(2,4),16),i=parseInt(c.slice(4,6),16),a("#color-picker").children("#red").val(n),a("#color-picker").children("#green").val(o),a("#color-picker").children("#blue").val(i)}if("none"!=a(window.activeElem).css("box-shadow")){var l=a(window.activeElem).css("box-shadow");if(!window.activeElem.shadowOffset){var s=e.GetColor(window.activeElem),d=r.GetColor(l),u=[d[0]-s[0],d[1]-s[1],d[2]-s[2]];window.activeElem.shadowOffset=u}d=[n+(u=window.activeElem.shadowOffset)[0],o+u[1],i+u[2]],a(window.activeElem).css("box-shadow",l.replace(/\(.+\)/,"("+d.join()+")"))}a(window.activeElem).css("background-color","rgb("+[n,o,i].join()+")")}},e.childNodes.forEach(function(t){t.oninput=function(){window.activeElem&&e.AssignColorSlider(a(t).val())}})}),t.removeLine=function(e){I(p[e])}},6:function(e,t,n){"use strict";var o=n(2);t.ContainsItem=function(e,t){for(var n=0;n<e.length;n++){if(e[n]===t)return!0;for(var o in e[n])if(e[n].hasOwnProperty(o))return!0}return!1},t.GetMiddleOfElement=function(e){var t=o(e).outerWidth(),n=o(e).outerHeight(),r=o(e).get(0).offsetLeft,a=o(e).get(0).offsetTop;return console.log({x:r,y:a}),{x:parseInt(r+t/2),y:parseInt(a+n/2)}},t.GetLeftMiddle=function(e){o(e).outerWidth();var t=o(e).outerHeight(),n=o(e).get(0).offsetLeft,r=o(e).get(0).offsetTop;return{x:parseInt(n),y:parseInt(r+t/2)}},t.GetRightMidle=function(e){var t=o(e).outerWidth(),n=o(e).outerHeight(),r=o(e).get(0).offsetLeft,a=o(e).get(0).offsetTop;return{x:parseInt(r+t),y:parseInt(a+n/2)}},t.GetColor=function(e){var t=e.toString().match(/\((.+)\)/)[1];return[parseInt(t.split(",")[0].trim()),parseInt(t.split(",")[1].trim()),parseInt(t.split(",")[2].trim())]},t.rgbToHex=function(e){if("number"!=typeof e[0])throw Error("input of rgbToHex function must be an array of integers");return"#"+(e[0].toString(16)+e[1].toString(16)+e[2].toString(16)).toUpperCase()},t.GetColorOrUndefined=function(e){return e?(void 0).GetColor(e):void 0},t.debounce=function(e,t,n){var o;return function(){var r=this,a=arguments,i=n&&!o;clearTimeout(o),o=setTimeout(function(){o=null,n||e.apply(r,a)},t),i&&e.apply(r,a)}},t.throttle=function(e,t,n){var o;return function(){var r=this,a=arguments,i=n&&!o;o||(o=setTimeout(function(){o=null,n||e.apply(r,a)},t)),i&&e.apply(r,a)}}},73:function(e,t,n){"use strict";var o=n(2),r=o("#choose-color-theme"),a=o("#choose-color-theme-options"),i=o("#mmelem-style"),c=o("#mmwindow-style"),l=window.localStorage&&window.localStorage.theme||"dark",s={dark:"#30303b",indian:"#E09f3e",light:"#8aa29e",matriks:"#00ff00",monokai:"#a6e22e",raster:"#c2fcf7",russian:"#420039",space:"#55c1cf"},d=function(){a.empty();var e=1;for(var t in s)if(s.hasOwnProperty(t)&&t!==l){var n=s[t];a.append('\n                <button class="option" data-color="'+n+'" data-name="'+t+'"\n                    style="left: '+60*e+++"px; background-color: "+n+'"></button>\n            ')}a.css("width",60*e),r.css("background-color",s[l])};d(),a.on("click","button.option",function(e){console.log(e.target),u(o(e.target).attr("data-name"))});var u=t.setColorTheme=function(e){l=e,d(),i.attr("href","styles/mmelemsstyle-"+l+".css"),c.attr("href","styles/mmwindow-"+l+".css"),window.localStorage&&(localStorage.theme=e)}},75:function(e,t,n){},76:function(e,t,n){"use strict";n(38);var o=n(2);window.jQuery=o,n(37),n(75),n(6);var r=n(5),a=(n(19),n(18),n(73),n(36)),i=(n(34),n(17));n(44),window.onbeforeunload=function(){if("false"===i.ispublic){if(!r.getSaved())return"You have unsaved progress. Are you sure you want to go back to the homepage?"}else a.saveToJsonOnline()},o("#btn-back-home").on("click",function(){window.location.href=window.location.origin+"/index.html"})}});