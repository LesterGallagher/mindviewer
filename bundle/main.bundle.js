!function(e){function t(t){for(var o,i,s=t[0],c=t[1],l=t[2],m=0,u=[];m<s.length;m++)i=s[m],a[i]&&u.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(d&&d(t);u.length;)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={2:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/bundle/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;r.push([74,0]),n()}({15:function(e,t,n){"use strict";var o=function(e,t){for(var n,o={},a=(e=(e||window.location.href).split("?")[1]||"").split("&"),r=0;r<a.length;r++)n=a[r].split("="),(!t||n[0]&&n[1])&&(o[decodeURIComponent(n[0])]=decodeURIComponent(n[1]));return o}(null,!0),a=o.room,r=o.ispublic,i=o.name,s=o.id;e.exports={apiUrl:"https://api.esstudio.site/api/mindviewer-web",room:a,ispublic:r,name:i,id:s}},16:function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var a=n(5),r=n(1),i=n(4),s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.typetoclass={mmmain:0,mmheader:1,mmnote:2},window.StateSave=this}return o(e,[{key:"compileState",value:function(e){for(var t=r(document.getElementById("mainh")).val(),n=i.globalelems,o=i.globallines,s=[],c=[],l=0;l<n.length;l++)n[l].save_id=l;for(var d=0;d<o.length;d++)o[d].save_id=d;for(var m=0;m<n.length;m++){for(var u=n[m].mmdata.connected_elems,p=[],f=0;f<u.length;f++){if(void 0==u[f].elem.save_id||void 0==u[f].line.save_id)throw Error("one of the connected elements is null or undefined"+u[f].elem);var h={lineid:parseInt(u[f].line.save_id).toString(),elemid:parseInt(u[f].elem.save_id).toString()};p.push(h)}var v=n[m].attr("class").trim().split(/\s+/)[1],g={id:n[m].save_id,key:r(n[m]).attr("data-key"),type:this.typetoclass[v],leftpos:r(n[m]).css("left"),toppos:r(n[m]).css("top"),connected_elems:p,"font-size":r(n[m]).children(2==this.typetoclass[v]?"textarea":"input").css("font-size"),width:r(n[m]).children("textarea").css("width"),height:r(n[m]).children("textarea").css("height"),content:r(n[m]).children(2==this.typetoclass[v]?"textarea":"input").val()};s.push(g)}for(var w=0;w<o.length;w++){var y={id:o[w].save_id.toString(),key:r(n[w]).attr("data-key"),"stroke-width":r(o[w]).css("stroke-width"),"stroke-color":a.GetColorOrUndefined(r(o[w]).css("stroke-color")),elem1:o[w].connected_elems.elem1.save_id,elem2:o[w].connected_elems.elem2.save_id};c.push(y)}return{static:{name:t,id:e,timestamp:Date.now()},elems:s,lines:c}}}]),e}();e.exports=new s},17:function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var a=n(1),r=n(4),i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"readData",value:function(e){r.RemoveAll(),document.getElementById("mainh").value=e.static.name;for(var t=e.elems,n=e.lines,o=[],i=0;i<t.length;i++){var s=r.CreateElement(t[i]);o[t[i].id]=s}for(var c=0;c<n.length;c++){var l=o[n[c].elem1],d=o[n[c].elem2];r.CreateLine(n[c]["stroke-width"],n[c]["stroke-color"],l,d,n[c].key)}a("#mainh").val(e.static.name)}}]),e}();e.exports=new i},33:function(e,t,n){"use strict";var o=n(1),a=n(69),r=n(15),i=n(17),s=n(16),c=n(35),l=n(4),d=l.field,m=l.globalelemnsHashed,u=(l.globallinesHashed,l.CreateElement),p=l.CreateLine,f=l.removeLine,h=n(5),v=(h.debounce,h.throttle),g=o("#messages"),w=Math.random().toString(36),y=!0,b=r.apiUrl+"/no-persist-open-chat";t.gotHotData=!1,t.socketReadyPromise=new Promise(function(e,t){if("false"===r.ispublic)return e();var n=a.connect(b,{"connect timeout":5e3});n.on("connect",function(){n.emit("init",{room:r.room,nickname:w},function(t){if(!t)return console.error("Unable to connect");n.emit("msg",{type:"retrieve-mm"}),setTimeout(function(){return y=!1},4e3);var a=[],r=v(function(){0!==a.length&&(a.length>1?n.emit("msg",{type:"batched_updates",batched:a}):n.emit("msg",a[0]),a.splice(0,a.length))},40),i=function(e){a.push(e),r()};n.on("msg",function(e){"batched_updates"===e.type?e.batched.forEach(function(t){t.from=e.from,x(t,i)}):x(e,i),console.log(e)}),n.on("disconnected",function(e){console.log("disconnect",e),e.msg="User disconnected from the room.",C(e),o(_[e.from]).remove(),delete _[e.from]}),k(i),e()}),n.on("disconnect",function(){console.warn(" socket disconnect")})}),n.on("connect_error",function(){alert("connection failed")})});var x=function(e,n){if("chat"===e.type)C(e);else if("update"===e.type)M(e);else if("retrieve-mm"===e.type){if(!1===c.percistanceLoaded)return;n({type:"receive-mm",state:s.compileState(c.dataId)})}else if("receive-mm"===e.type){if(!y)return;y=!1;var o=e.state;i.readData(o),t.gotHotData=!0}},k=function(e){o("#mainh").on("input",function(t){e({type:"update",action:"staticupdate",patch:{name:t.target.value}})}),d.on("elem_modified",function(t){e({type:"update",action:"elem_modified",patch:t})}),d.on("elem_created",function(t){e({type:"update",action:"elem_created",patch:t})}),d.on("elem_removed",function(t){e({type:"update",action:"elem_removed",patch:t})}),d.on("line_created",function(t){e({type:"update",action:"line_created",patch:t})}),d.on("line_removed",function(t){e({type:"update",action:"line_removed",patch:t})}),o(document).on("mousemove",v(function(t){e({type:"update",action:"mouse",clientX:t.clientX,clientY:t.clientY})},40,!1))},_={},E=o("#mouses"),M=function(e){var t=e.patch;if("mouse"===e.action&&(_[e.from]||(console.log("disconnect",e),e.msg="User joined the room.",C(e),o(_[e.from]).remove(),delete _[e.from],_[e.from]=o('<div class="mouse-pos"></div>').appendTo(E)),_[e.from].css("top",e.clientY).css("left",e.clientX)),"elem_removed"===e.action){var n=t.key;m[n].RemoveThis()}else if("elem_modified"===e.action){var a=t.key;void 0!==t.content&&m[a].find("input, textarea").val(t.content),void 0!==t["font-size"]&&m[a].find("input, textarea").css("font-size",t["font-size"]),void 0!==t.leftpos&&(m[a].css("left",t.leftpos),m[a].UpdateAllConnectedLines()),void 0!==t.toppos&&(m[a].css("top",t.toppos),m[a].UpdateAllConnectedLines()),void 0!==t.width&&(m[a].find("textarea").outerWidth(t.width),m[a].UpdateAllConnectedLines()),void 0!==t.height&&(m[a].find("textarea").outerHeight(t.height),m[a].UpdateAllConnectedLines())}else"elem_created"===e.action?(u(t),console.log("created",e)):"line_created"===e.action?p(t.strokewidth,t.strokecolor,m[t.key1],m[t.key2],t.key):"line_removed"===e.action?f(t.key):"staticupdate"===e.action&&void 0!==t.name&&o("#mainh").val(t.name)};function C(e){var t=e.from,n=e.msg,o=(g.scrollTop(),g.innerHeight(),g[0].scrollHeight);o=g.scrollTop()+g.height();g.append('<div class="message other">    <div class="msg">'+n+'</div>    <div class="from">'+t+"</div>    </div>"),o>-1&&g.scrollTop(g[0].scrollHeight)}},35:function(e,t,n){"use strict";var o=n(1),a=n(34)(),r=n(16),i=n(15),s=n(17),c=n(33),l=(n(20),n(4)),d=n(19),m=new Date,u=o("#save-last"),p=o("#save-mm"),f=o("#save-to-storage");t.percistanceLoaded=!1;var h=function(){u.text(a.format(m))};setInterval(h,5e3),"false"===i.ispublic?(t.dataId=i.id||Math.random().toString(36),i.id?(d.getMindmaps().then(function(e){var t=e[i.id];t?s.readData(t):o("#fullscreen-loader").fadeOut()}),o("#fullscreen-loader").fadeOut()):(document.getElementById("mainh").value=i.name,o("#fullscreen-loader").fadeOut()),p.add(f).on("click",function(){var e=r.compileState(t.dataId);e.type="app_storage",d.putMindmap(e).then(function(){l.setSaved(),m=new Date,h(),i.id||(window.location.href=window.location.origin+"/mindmapper.html?ispublic=false&id="+t.dataId)})})):(o.get("https://api.myjson.com/bins/"+i.room,function(e,n,a){!1===c.gotHotData&&s.readData(e),t.percistanceLoaded=!0,t.dataId=e.static.id,c.socketReadyPromise.then(function(){o("#fullscreen-loader").fadeOut()})}),p.add(f).on("click",function(){v()}));var v=t.saveToJsonOnline=function(){d.putMindmap({type:"api_bin",room:i.room,static:{id:t.dataId,name:o("#mainh").val(),timestamp:Date.now()}}),o.ajax({type:"PUT",url:"https://api.myjson.com/bins/"+i.room,data:JSON.stringify(r.compileState(t.dataId)),async:!1,contentType:"application/json; charset=utf-8",dataType:"json",error:function(e,t,n){alert("unable to save mind map")},success:function(e,t,n){m=new Date,h(),l.setSaved()}})}},4:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=void 0,r=n(5),i=n(1),s=n(71).EventEmitter,c=t.globalelems=[],l=t.globallines=[],d=n(5).throttle,m={LARGE:0,MIDDLE:1,SMALL:2},u=!0;t.getSaved=function(){return u},t.setSaved=function(){return u=!0};var p=window.globalelemnsHashed=t.globalelemnsHashed={},f=window.globallinesHashed=t.globallinesHashed={},h=!1;i(window).on("mousedown",function(){return h=!0}),i(window).on("mouseup",function(){return h=!1});var v=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),n=i("#field"),o=function(e){var t=e.target.value,n=i(e.target).attr("data-key");w("elem_modified",{key:n,content:t})};n.on("input",".mmelem textarea",o),n.on("input",".mmelem input",o);var a=function(e){var t=i(e.target).outerWidth(),n=i(e.target).outerHeight(),o=c.map(function(e){return e[0]}).indexOf(i(e.target).closest(".mmelem")[0]),a=i(e.target).attr("data-key");w("elem_modified",{key:a,width:t,height:n}),c[o].UpdateAllConnectedLines()};return i(window).on("mousemove",function(e){h&&i(e.target).is(".mmelem textarea")&&a(e)}),n.on("mouseup",".mmelem textarea",a),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s),t}(),g=t.field=new v,w=d(function(e,t){return g.emit(e,t)},40);function y(){window.currdrag.diddrag=!1,M(window.currdrag.line),window.currdrag=void 0}function b(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=void 0;switch(e){case 0:s='\n            <div class="mmelem mmmain">\n            <input class="mm_title" type="text" name="title" value="new title">\n            <button class="mmclose" type="submit"></button>            \n            </div>';break;case 1:s='\n            <div class="mmelem mmheader">\n            <input class="mm_title" type="text" name="title" value="new title">\n            <button class="mmclose" type="submit"></button>            \n            </div>';break;case 2:s='\n            <div class="mmelem mmnote">\n            <textarea name="textarea" style:"width:100px;height:60px;" class="mmcontent"></textarea>\n            <button class="mmclose" type="submit"></button>            \n            </div>';break;default:s='\n            <div class="mmelem">\n            <input class="mm_title" type="text" name="title" value="new title">\n            <button class="mmclose" type="submit"></button>\n            </div>'}var d=document.getElementById("field");d.insertAdjacentHTML("beforeend",s);var v=d.lastChild,g=i(v);v.jqeurydata=g,i(g).attr("data-key",t),c.push(g),p[t]=g,v.childNodes.forEach(function(e){e.onmousedown=function(e){h=!0,e.stopPropagation()},i(e).is("textarea")&&(e.onwheel=function(){return!1})},this),i(g).css("top",80+Math.floor(20*Math.random())+"px"),i(g).css("left",80+Math.floor(20*Math.random())+"px"),g.mmdata={name:"newelem",connected_elems:[],containselem:function(e){for(var t=0;t<g.mmdata.connected_elems.length;t++)if(g.mmdata.connected_elems[t].elem==e)return!0;return!1}},g.mousedown(function(e){if(e.stopPropagation(),window.activeElem=g,void 0!==window.currdrag){var t=window.currdrag;if(window.currdrag==g)return y(),void i(window).mouseup();if(window.currdrag.mmdata.containselem(g)||g.mmdata.containselem(window.currdrag))return i(window).mouseup(),void y();var n=t.line;n.setAttribute("class","genline");var o=r.GetMiddleOfElement(g);n.setAttribute("d",E(n,"x2",o.x,0,0)),n.setAttribute("d",E(n,"y2",o.y,0,0)),n.connected_elems={elem1:g,elem2:t},t.mmdata.connected_elems.push({elem:g,line:n}),g.mmdata.connected_elems.push({elem:t,line:t.line}),window.currdrag.mmdata.connected_elems.forEach(function(e){window.currdrag.UpdateConnectedLines(e)}),g.mmdata.connected_elems.forEach(function(e){g.UpdateConnectedLines(e)}),l.push(n);var a=Math.random().toString(36);return i(n).attr("data-key",a),f[a]=n,window.currdrag=void 0,void w("line_created",{strokewidth:i(n).css("strokeWidth"),strokecolor:i(n).css("strokeColor"),key1:i(g).attr("data-key"),key2:i(t).attr("data-key"),key:a})}var s=g.css("left").replace("px","")-e.pageX,c=g.css("top").replace("px","")-e.pageY;g.diddrag=!1,i(document).on("mousemove.elem-move",function(t){var n=t.pageX+s,o=t.pageY+c;g.css("top",o),g.css("left",n),g.mmdata.connected_elems.forEach(function(e){g.UpdateConnectedLines(e)});var a=i(g).attr("data-key");w("elem_modified",{leftpos:n,toppos:o,key:a}),(Math.abs(e.pageX-t.pageX)>5||Math.abs(e.pageY-t.pageY)>5)&&(g.diddrag=!0)})}),g.UpdateAllConnectedLines=function(){g.mmdata.connected_elems.forEach(function(e){g.UpdateConnectedLines(e)})},g.UpdateConnectedLines=function(e){var t=e.line,n=e.line.connected_elems.elem1,o=e.line.connected_elems.elem2;if(n===g){var a=x(n,e.elem),r=k(n,e.elem,400);t.setAttribute("d",E(t,"x2",a.x,r.x,r.y)),t.setAttribute("d",E(t,"y2",a.y,r.x,r.y)),a=x(e.elem,n),r=k(e.elem,n,400),t.setAttribute("d",E(t,"x1",a.x,r.x,r.y)),t.setAttribute("d",E(t,"y1",a.y,r.x,r.y))}else{if(o!==g)throw Error("element contains a line which doesnt hold a reference to that line.");var i=x(o,e.elem),s=k(o,e.elem,400);t.setAttribute("d",E(t,"x1",i.x,s.x,s.y)),t.setAttribute("d",E(t,"y1",i.y,s.x,s.y)),i=x(e.elem,o),s=k(e.elem,o,400),t.setAttribute("d",E(t,"x2",i.x,s.x,s.y)),t.setAttribute("d",E(t,"y2",i.y,s.x,s.y))}},g.click(function(e){if(e.stopPropagation(),0==g.diddrag){var t=r.GetMiddleOfElement(g),n=i("#svg_wrapper"),o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","M282,143 C151,140 395,421 271,415"),o.setAttribute("d",E(o,"x1",t.x,0,0)),o.setAttribute("d",E(o,"y1",t.y,0,0)),o.setAttribute("d",E(o,"x2",t.x,0,0)),o.setAttribute("d",E(o,"y2",t.y,0,0)),o.setAttribute("class","pregenline"),o.ChangeWidth=function(e){var t=e.wheelDelta;t/=Math.abs(t);var n=parseInt(i(o).css("stroke-width").replace("px",""),10);n>=10&&t>0?t=0:n<=2&&t<0&&(t=0),i(o).css("stroke-width",n+t+"px")},i(o).mouseenter(function(){o.addEventListener("mousewheel",o.ChangeWidth)}),i(o).mouseleave(function(){o.removeEventListener("mousewheel",o.ChangeWidth,!1)}),i(o).click(function(){M(o,!0)}),i(o).mouseover(function(){window.activeElem=o}),n.append(o),g.line=o,window.currdrag=g,i(document).on("mousemove.elem-move",function(e){var t=e.pageX+d.scrollLeft,n=e.pageY+d.scrollTop;o.setAttribute("d",E(o,"x2",t,0,0)),o.setAttribute("d",E(o,"y2",n,0,0)),g.diddrag=!0})}}),g.RemoveThis=function(){for(var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];g.mmdata.connected_elems.length>0;)M(g.mmdata.connected_elems[g.mmdata.connected_elems.length-1].line);c.splice(c.indexOf(g),1);var t=i(g).attr("data-key");delete p[t],i(g).remove(),e&&w("elem_removed",{key:t})},i(g).children(".mmclose").click(function(){g.RemoveThis(!0)}),g.ChangeSize=function(t){var n,o=parseFloat(i(g).outerWidth()),a=parseFloat(i(g).outerHeight());switch(t=t/Math.abs(t)*8,e){case m.LARGE:(n=parseFloat(i(g).children(".mm_title").css("font-size").replace("em","")))<10&&t<0?t=0:n>200&&t>0&&(t=0),i(g).children(".mm_title").css("font-size",n+t/4);break;case m.MIDDLE:(n=parseFloat(i(g).children(".mm_title").css("font-size").replace("em","")))<10&&t<0?t=0:n>140&&t>0&&(t=0),i(g).children(".mm_title").css("font-size",n+t/4);break;case m.SMALL:var r=i(g).children("textarea").css("width"),s=i(g).children("textarea").css("height");(n=parseFloat(i(g).children("textarea").css("font-size").replace("em","")))<10&&t<0?t=0:n>80&&t>0&&(t=0),i(g).children("textarea").css("font-size",n+t/4),i(g).children("textarea").css("width",r),i(g).children("textarea").css("height",s);break;default:var l=parseInt(i(g).css("width").replace("px",""),10),d=parseInt(i(g).css("height").replace("px",""),10);i(g).css("width",l+t+"px"),i(g).css("height",d+t+"px")}var u=+i(g).css("left").replace("px",""),p=+i(g).css("top").replace("px",""),f=(o-parseFloat(i(g).outerWidth()))/2,h=(a-parseFloat(i(g).outerHeight()))/2;i(g).css("left",u+f+"px"),i(g).css("top",p+h+"px"),g.UpdateAllConnectedLines();c.map(function(e){return e[0]}).indexOf(g[0]);var v=i(g).attr("data-key");w("elem_modified",{key:v,"font-size":n,leftpos:u+f,toppos:p+h})},g.onElemScroll=function(e){g.ChangeSize(e.wheelDelta)},i(g).mouseenter(function(){window.addEventListener("mousewheel",g.onElemScroll)}),i(g).mouseleave(function(){window.removeEventListener("mousewheel",g.onElemScroll,!1)}),g.UpdateMMdata=function(e){e.mmdata.connected_elems.push({elem:a,line:a.line})};var b,_=+i(g).css("left").replace("px",""),C=+i(g).css("top").replace("px","");n&&w("elem_created",(o(b={key:t,leftpos:_,toppos:C,type:e},"key",t),o(b,"content",g.find("input, textarea").val()),b));return u=!1,{elem:g,updatemmdata:g.UpdateMMdata}}function x(e,t){var n=r.GetLeftMiddle(e),o=r.GetRightMidle(e),a=r.GetLeftMiddle(t),i=r.GetRightMidle(t);return n.x>i.x?n:o.x<a.x?o:r.GetMiddleOfElement(e)}function k(e,t,n){var o=r.GetMiddleOfElement(e),a=r.GetLeftMiddle(e),i=r.GetRightMidle(e),s=r.GetMiddleOfElement(t),c=r.GetLeftMiddle(t),l=r.GetRightMidle(t);return a.x>l.x?{x:-(_(a,l)<n?_(a,l):n)/3,y:0}:i.x<c.x?{x:(_(i,c)<n?_(i,c):n)/3,y:0}:a.y<c.y?{x:0,y:(_(o,s)<n?_(o,s):n)/3}:{x:0,y:-(_(s,o)<n?_(s,o):n)/3}}function _(e,t){return Math.sqrt(Math.pow(Math.abs(parseInt(e.x)-parseInt(t.x,10)),2)+Math.pow(Math.abs(parseInt(e.y)-parseInt(t.y,10)),2))}function E(e,t,n,o,a){var r,i=e.getAttribute("d").split(" ");if("x1"==t){var s=i[0].split(",");s[0]=parseInt(s[0].replace(/[MC]/i,""),10),s[1]=parseInt(s[1],10),i[0]="M"+n+","+s[1],i[1]="C"+(n+o)+","+(s[1]+a),r=i.join(" ")}else if("y1"==t){var c=i[0].split(",");c[0]=parseInt(c[0].replace(/[MC]/i,""),10),c[1]=parseInt(c[1],10),i[0]="M"+c[0]+","+n,i[1]="C"+(c[0]+o)+","+(n+a),r=i.join(" ")}else if("x2"==t){var l=i[3].split(",");l[0]=parseInt(l[0],10),l[1]=parseInt(l[1],10),i[3]=n+","+l[1],i[2]=n+o+","+(l[1]+a),r=i.join(" ")}else if("y2"==t){var d=i[3].split(",");d[0]=parseInt(d[0],10),d[1]=parseInt(d[1],10),i[3]=d[0]+","+n,i[2]=d[0]+o+","+(n+a),r=i.join(" ")}return r}function M(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null!=e.connected_elems||void 0!=e.connected_elems){for(var n=e.connected_elems.elem1.mmdata.connected_elems,o=0;o<n.length;o++)if(n[o].line===e){n.splice(o,1);break}for(var a=e.connected_elems.elem2.mmdata.connected_elems,r=0;r<a.length;r++)if(a[r].line===e){a.splice(r,1);break}}l.splice(l.indexOf(e),1),delete l[i(e).attr("data-key")],i(e).remove(),console.log("remove line",e),t&&w("line_removed",{key:i(e).attr("data-key")}),u=!1}t.RemoveAll=function(){for(var e in l.length=0,c.length=0,p)p.hasOwnProperty(e)&&delete p[e];for(var t in f)f.hasOwnProperty(t)&&delete f[t];i("svg").empty(),i("#field").children(".mmelem").remove(),u=!1},t.CreateElement=function(e){var t=e.type,n=e.leftpos,o=e.toppos,a=e.fontsize,r=e.backgroundcolor,s=e.content,c=(e.boxshadowcol,e.width),l=e.height,d=b(t,e.key).elem;return i(d).css("left",n),i(d).css("top",o),t===Element.SMALL?(i(d).children("textarea").css("font-size",a),i(d).children("textarea").css("width",c),i(d).children("textarea").css("height",l),i(d).children("textarea").val(s)):(i(d).children("input").css("font-size",a),i(d).children("input").val(s)),void 0!==r&&i(d).css("background-color",r),u=!1,d},t.CreateLine=function(e,t,n,o,a){var s=n,c=r.GetMiddleOfElement(s),d=i("#svg_wrapper"),m=document.createElementNS("http://www.w3.org/2000/svg","path");m.setAttribute("d","M282,143 C151,140 395,421 271,415"),m.setAttribute("d",E(m,"x1",c.x,0,0)),m.setAttribute("d",E(m,"y1",c.y,0,0)),m.setAttribute("d",E(m,"x2",c.x,0,0)),m.setAttribute("d",E(m,"y2",c.y,0,0)),m.setAttribute("class","genline"),m.ChangeWidth=function(e){var t=e.wheelDelta;t/=Math.abs(t);var n=+(i(m)[0].style["stroke-width"]||"3").replace("px","");n>=10&&t>0?t=0:n<=2&&t<0&&(t=0),i(m).css("stroke-width",n+t+"px")},i(m).mouseenter(function(){m.addEventListener("mousewheel",m.ChangeWidth)}),i(m).mouseleave(function(){m.removeEventListener("mousewheel",m.ChangeWidth,!1)}),i(m).click(function(){M(m,!0)}),i(m).mouseover(function(){window.activeElem=m}),d.append(m),s=o;var p=r.GetMiddleOfElement(s);m.setAttribute("d",E(m,"x2",p.x,0,0)),m.setAttribute("d",E(m,"y2",p.y,0,0)),m.connected_elems={elem1:n,elem2:o},n.mmdata.connected_elems.push({elem:o,line:m}),o.mmdata.connected_elems.push({elem:n,line:m}),n.mmdata.connected_elems.forEach(function(e){n.UpdateConnectedLines(e)}),o.mmdata.connected_elems.forEach(function(e){o.UpdateConnectedLines(e)}),l.push(m),i(m).attr("data-key",a),f[a]=m,e&&i(m).css("stroke-width",e),t&&i(m).css("stroke-color","rgb( "+t.join()+")"),u=!1},i(document).ready(function(){b(0,Math.random().toString(36)),i(document).click(function(){i("#color-picker").css("display","none")}),i(document).mouseup(function(){void 0!==window.currdrag&&y(),i(document).unbind("mousemove.elem-move")}),i("#spawn_elem_btn0").click(function(){var e=Math.random().toString(36);b(m.LARGE,e,!0)}),i("#spawn_elem_btn1").click(function(){var e=Math.random().toString(36);b(m.MIDDLE,e,!0)}),i("#spawn_elem_btn2").click(function(){var e=Math.random().toString(36);b(m.SMALL,e,!0)}),i("#color-picker").click(function(e){e.stopPropagation()});var e=document.getElementById("color-picker");e.GetColor=function(e){return r.GetColor(i(e).css("background-color").toString())},e.GetColorHex=function(t){var n=e.GetColor(t);return r.rgbToHex(n)},e.AssignColorSlider=function(t){if(window.activeElem){var n=255,o=255,a=255;if(0==t.trim().startsWith("#"))n=parseInt(i("#color-picker").children("#red").val(),10),o=parseInt(i("#color-picker").children("#green").val(),10),a=parseInt(i("#color-picker").children("#blue").val(),10),i("#color-picker").children("#hex").val(r.rgbToHex([n,o,a]));else{if(1!=/^#([\da-z]{6})$/i.test(t.trim()))throw Error("the function is unclear about this argument: "+t);var s=t.trim().match(/^#([\da-z]{6})$/i)[1];n=parseInt(s.slice(0,2),16),o=parseInt(s.slice(2,4),16),a=parseInt(s.slice(4,6),16),i("#color-picker").children("#red").val(n),i("#color-picker").children("#green").val(o),i("#color-picker").children("#blue").val(a)}if("none"!=i(window.activeElem).css("box-shadow")){var c=i(window.activeElem).css("box-shadow");if(!window.activeElem.shadowOffset){var l=e.GetColor(window.activeElem),d=r.GetColor(c),m=[d[0]-l[0],d[1]-l[1],d[2]-l[2]];window.activeElem.shadowOffset=m}d=[n+(m=window.activeElem.shadowOffset)[0],o+m[1],a+m[2]],i(window.activeElem).css("box-shadow",c.replace(/\(.+\)/,"("+d.join()+")"))}i(window.activeElem).css("background-color","rgb("+[n,o,a].join()+")")}},e.childNodes.forEach(function(t){t.oninput=function(){window.activeElem&&e.AssignColorSlider(i(t).val())}})}),t.removeLine=function(e){M(f[e])}},44:function(e,t){},5:function(e,t,n){"use strict";var o=n(1);t.ContainsItem=function(e,t){for(var n=0;n<e.length;n++){if(e[n]===t)return!0;for(var o in e[n])if(e[n].hasOwnProperty(o))return!0}return!1},t.GetMiddleOfElement=function(e){var t=o(e).outerWidth(),n=o(e).outerHeight(),a=o(e).get(0).offsetLeft,r=o(e).get(0).offsetTop;return console.log({x:a,y:r}),{x:parseInt(a+t/2),y:parseInt(r+n/2)}},t.GetLeftMiddle=function(e){o(e).outerWidth();var t=o(e).outerHeight(),n=o(e).get(0).offsetLeft,a=o(e).get(0).offsetTop;return{x:parseInt(n),y:parseInt(a+t/2)}},t.GetRightMidle=function(e){var t=o(e).outerWidth(),n=o(e).outerHeight(),a=o(e).get(0).offsetLeft,r=o(e).get(0).offsetTop;return{x:parseInt(a+t),y:parseInt(r+n/2)}},t.GetColor=function(e){var t=e.toString().match(/\((.+)\)/)[1];return[parseInt(t.split(",")[0].trim()),parseInt(t.split(",")[1].trim()),parseInt(t.split(",")[2].trim())]},t.rgbToHex=function(e){if("number"!=typeof e[0])throw Error("input of rgbToHex function must be an array of integers");return"#"+(e[0].toString(16)+e[1].toString(16)+e[2].toString(16)).toUpperCase()},t.GetColorOrUndefined=function(e){return e?(void 0).GetColor(e):void 0},t.debounce=function(e,t,n){var o;return function(){var a=this,r=arguments,i=n&&!o;clearTimeout(o),o=setTimeout(function(){o=null,n||e.apply(a,r)},t),i&&e.apply(a,r)}},t.throttle=function(e,t,n){var o;return function(){var a=this,r=arguments,i=n&&!o;o||(o=setTimeout(function(){o=null,n||e.apply(a,r)},t)),i&&e.apply(a,r)}}},70:function(e,t,n){"use strict";var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1));var a=o("#choose-color-theme"),r=o("#choose-color-theme-options"),i=o("#mmelem-style"),s=o("#mmwindow-style"),c=window.localStorage&&window.localStorage.theme||"dark",l={dark:"#30303b",indian:"#E09f3e",light:"#8aa29e",matriks:"#00ff00",monokai:"#a6e22e",raster:"#c2fcf7",russian:"#420039"},d=function(){r.empty();var e=1;for(var t in l)if(l.hasOwnProperty(t)&&t!==c){var n=l[t];r.append('\n                <button class="option" data-color="'+n+'" data-name="'+t+'"\n                    style="left: '+60*e+++"px; background-color: "+n+'"></button>\n            ')}r.css("width",60*e),a.css("background-color",l[c])};d(),r.on("click","button.option",function(e){console.log(e.target),m(o(e.target).attr("data-name"))});var m=t.setColorTheme=function(e){c=e,d(),i.attr("href","styles/mmelemsstyle-"+c+".css"),s.attr("href","styles/mmwindow-"+c+".css"),window.localStorage&&(localStorage.theme=e)}},72:function(e,t,n){},74:function(e,t,n){"use strict";n(38);var o=n(37);window.jQuery=o,n(36),n(72),n(5);var a=n(4),r=(n(17),n(16),n(70),n(35)),i=(n(33),n(15));window.onbeforeunload=function(){if("false"===i.ispublic){if(!a.getSaved())return"You have unsaved progress. Are you sure you want to go back to the homepage?"}else r.saveToJsonOnline()},o("#btn-back-home").on("click",function(){window.location.href=window.location.origin+"/index.html"})}});