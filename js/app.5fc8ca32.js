(function(e){function t(t){for(var a,s,r=t[0],l=t[1],c=t[2],f=0,p=[];f<r.length;f++)s=r[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==o[l]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/picx/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"086a":function(e,t,n){},"2fe0":function(e,t,n){},"46d3":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app-container"}},[n("el-container",{staticClass:"container"},[n("el-header",[n("div",{staticClass:"header-container"},[n("Header")],1)]),n("el-container",[n("el-main",[n("div",{staticClass:"main-container"},[n("router-view")],1)])],1)],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("div",{staticClass:"logo",on:{click:function(t){return e.$router.push("/")}}},[n("i",{staticClass:"el-icon-picture-outline logo-icon"}),e._v(" PicX ")]),n("div",{staticClass:"user-info"},[n("span",{staticClass:"username"},[e._v(e._s(e.username))]),n("el-dropdown",{attrs:{trigger:"click"},on:{command:e.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[n("span",{staticClass:"avatar"},[n("img",{attrs:{src:e.avatarUrl}})])]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"upload"}},[e._v("图片上传")]),n("el-dropdown-item",{attrs:{command:"config"}},[e._v("图床配置")]),n("el-dropdown-item",{attrs:{command:"logout"}},[e._v("退出登录")])],1)],1)],1)])},r=[],l=n("5530"),c="PICX_INFO",u=n("2f62"),f={name:"Header",data:function(){return{username:"",defaultUsername:"未登录",avatarUrl:"",defaultAvatarUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"}},watch:{getUserAvatar:function(e){this.avatarUrl=e||this.defaultAvatarUrl},getUserNickname:function(e){this.username=e||this.defaultUsername}},computed:Object(l["a"])({},Object(u["b"])(["getUserAvatar","getUserNickname"])),mounted:function(){this.getUserInfo()},methods:{handleCommand:function(e){switch(e){case"upload":this.$router.push("/");break;case"config":this.$router.push("config");break;case"management":this.$router.push("management");break;case"logout":this.logout();break}},getUserInfo:function(){var e=localStorage.getItem(c);e?(e=JSON.parse(e),this.username=e.nickname?e.nickname:this.defaultUsername,this.avatarUrl=e.avatar_url?e.avatar_url:this.defaultAvatarUrl):(this.username=this.defaultUsername,this.avatarUrl=this.defaultAvatarUrl)},logout:function(){this.$store.dispatch("LOGOUT")}}},p=f,d=(n("7050"),n("2877")),g=Object(d["a"])(p,s,r,!1,null,"3f6dcb82",null),m=g.exports,h={components:{Header:m}},v=h,C=(n("5c0b"),Object(d["a"])(v,o,i,!1,null,null,null)),b=C.exports,I=n("8c4f"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"config-page-container"},[n("el-form",{staticClass:"config-form",attrs:{"label-width":"70px","label-position":"right"}},[n("el-form-item",{attrs:{label:"Token"}},[n("el-input",{model:{value:e.token,callback:function(t){e.token=t},expression:"token"}})],1),n("el-form-item",{staticClass:"operation-btns"},[n("el-button",{on:{click:function(t){return e.reset()}}},[e._v(" 重置 ")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getUserInfo()}}},[e._v(" 确认Token ")])],1),e.userConfigInfo.username?n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{attrs:{readonly:""},model:{value:e.userConfigInfo.username,callback:function(t){e.$set(e.userConfigInfo,"username",t)},expression:"userConfigInfo.username"}})],1):e._e(),e.userConfigInfo.email?n("el-form-item",{attrs:{label:"邮箱"}},[n("el-input",{attrs:{readonly:""},model:{value:e.userConfigInfo.email,callback:function(t){e.$set(e.userConfigInfo,"email",t)},expression:"userConfigInfo.email"}})],1):e._e(),e.userConfigInfo.reposList.length?n("el-form-item",{attrs:{label:"选择仓库"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"请选择图床仓库..."},on:{change:e.selectRepos},model:{value:e.userConfigInfo.selectedRepos,callback:function(t){e.$set(e.userConfigInfo,"selectedRepos",t)},expression:"userConfigInfo.selectedRepos"}},e._l(e.userConfigInfo.reposList,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),e.userConfigInfo.reposList.length?n("el-form-item",{attrs:{label:"目录方式"}},[n("el-radio-group",{on:{change:e.dirModeChange},model:{value:e.userConfigInfo.dirMode,callback:function(t){e.$set(e.userConfigInfo,"dirMode",t)},expression:"userConfigInfo.dirMode"}},[n("el-tooltip",{attrs:{content:"按照日期，自动创建格式 yyyyMM 的目录",placement:"top"}},[n("el-radio",{attrs:{label:"nonuseDir"}},[e._v("自动目录")])],1),n("el-tooltip",{attrs:{content:"手动输入一个新目录",placement:"top"}},[n("el-radio",{attrs:{label:"newDir"}},[e._v("新建目录")])],1),n("el-tooltip",{attrs:{content:"选择 "+e.userConfigInfo.selectedRepos+" 仓库下的一个目录",placement:"top"}},[n("el-radio",{attrs:{label:"autoDir"}},[e._v("选择 "+e._s(e.userConfigInfo.selectedRepos)+" 仓库目录")])],1)],1)],1):e._e(),e.userConfigInfo.dirList.length&&"autoDir"===e.userConfigInfo.dirMode?n("el-form-item",{attrs:{label:"选择目录"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"请选择目录...",clearable:!0},on:{change:e.persistUserConfigInfo},model:{value:e.userConfigInfo.selectedDir,callback:function(t){e.$set(e.userConfigInfo,"selectedDir",t)},expression:"userConfigInfo.selectedDir"}},e._l(e.userConfigInfo.dirList,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),"newDir"===e.userConfigInfo.dirMode?n("el-form-item",{attrs:{label:"新建目录"}},[n("el-input",{attrs:{clearable:"",placeholder:"请输入新建的目录..."},on:{input:function(t){return e.persistUserConfigInfo()}},model:{value:e.userConfigInfo.selectedDir,callback:function(t){e.$set(e.userConfigInfo,"selectedDir",t)},expression:"userConfigInfo.selectedDir"}})],1):e._e(),e.userConfigInfo.selectedRepos?n("el-form-item",{staticStyle:{float:"right"}},[n("el-button",{attrs:{type:"success"},on:{click:e.goUpload}},[e._v("上传图片 Go~")])],1):e._e()],1)],1)},k=[],x=(n("a4d3"),n("e01a"),n("99af"),n("b0c0"),n("b85c")),S=n("bc3a"),w=n.n(S),y={token:"",username:"",email:"",nickname:"",avatar_url:"",selectedRepos:"",reposList:[],dirMode:"",selectedDir:"",dirList:[]},U=(n("d3b7"),n("ac1f"),n("25f0"),n("1276"),function(e){var t=Object.prototype.toString.call(e).split(" ")[1];return t.substring(0,t.length-1).toLowerCase()}),O=U,D=function(e){for(var t in e)switch(O(e[t])){case"string":e[t]="";break;case"array":e[t]=[];break;case"number":e[t]=0;break}},L=D,N={name:"Config",data:function(){return{token:"",userConfigInfo:y}},mounted:function(){this.initUserConfigInfo()},watch:{logoutStatus:function(e){e&&this.resetUserConfigInfo()}},computed:Object(l["a"])({},Object(u["b"])({logoutStatus:"getLogoutStatus"})),methods:{initUserConfigInfo:function(){var e=localStorage.getItem(c);if(e)for(var t in e=JSON.parse(e),this.token=e.token,e)this.userConfigInfo[t]=e[t]},getUserInfo:function(){var e=this;this.token?w.a.get("https://api.github.com/user",{headers:{"Content-Type":"application/json",Authorization:"token ".concat(this.token)}}).then((function(t){200===t.status&&(e.saveUserInfo(t),e.getReposList(t.data["repos_url"]))})).catch((function(e){console.log("err",e)})):this.$message.warning("Token 不能为空！")},saveUserInfo:function(e){this.userConfigInfo.token=this.token,this.userConfigInfo.username=e.data["login"],this.userConfigInfo.nickname=e.data["name"],this.userConfigInfo.email=e.data["email"],this.userConfigInfo.avatar_url=e.data["avatar_url"],this.persistUserConfigInfo()},getReposList:function(e){var t=this;w.a.get(e).then((function(e){if(200===e.status){t.userConfigInfo.reposList=[];var n,a=Object(x["a"])(e.data);try{for(a.s();!(n=a.n()).done;){var o=n.value;o.fork||t.userConfigInfo.reposList.push({value:o.name,label:o.name,desc:o.description})}}catch(i){a.e(i)}finally{a.f()}t.persistUserConfigInfo()}})).catch((function(e){console.log("err",e)}))},selectRepos:function(e){this.persistUserConfigInfo(),this.getDirList(e)},getDirList:function(e){var t=this;w.a.get("https://api.github.com/repos/".concat(this.userConfigInfo.username,"/").concat(e,"/contents")).then((function(e){if(200===e.status){t.userConfigInfo.dirList=[];var n,a=Object(x["a"])(e.data);try{for(a.s();!(n=a.n()).done;){var o=n.value;"dir"===o.type&&t.userConfigInfo.dirList.push({value:o.name,label:o.name})}}catch(i){a.e(i)}finally{a.f()}t.persistUserConfigInfo()}})).catch((function(e){console.log("err",e)}))},dirModeChange:function(e){switch(e){case"nonuseDir":this.userConfigInfo.selectedDir="";break;case"newDir":this.userConfigInfo.selectedDir="";break;case"autoDir":break}this.persistUserConfigInfo()},persistUserConfigInfo:function(){this.$store.commit("PERSIST_USER_CONFIG_INFO",this.userConfigInfo)},reset:function(){this.resetUserConfigInfo(),this.persistUserConfigInfo()},resetUserConfigInfo:function(){this.token="",L(this.userConfigInfo)},goUpload:function(){""===this.userConfigInfo.selectedDir?"autoDir"===this.userConfigInfo.dirMode?this.$message.warning("请选择 ".concat(this.userConfigInfo.selectedRepos," 仓库下的一个目录！")):"newDir"===this.userConfigInfo.dirMode?this.$message.warning("请在输入框输入一个新目录！"):this.$router.push("/"):this.$router.push("/")}}},z=N,E=(n("df53"),Object(d["a"])(z,_,k,!1,null,"7ae313c1",null)),R=E.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"upload-page-container"},[n("el-row",{staticClass:"row-item"},[n("div",{staticClass:"upload-area",on:{dragover:function(e){e.preventDefault()},drop:function(t){return t.stopPropagation(),t.preventDefault(),e.onDrop(t)},paste:e.onPaste}},[n("label",{staticClass:"target",attrs:{for:"uploader"}}),n("input",{attrs:{id:"uploader",type:"file"},on:{change:e.onFileChange}}),e.previewImg?e._e():n("div",{staticClass:"tips"},[n("i",{staticClass:"icon el-icon-upload"}),n("div",{staticClass:"text"},[e._v("拖拽、粘贴、或点击此处上传")])]),e.previewImg?n("img",{staticClass:"target",attrs:{src:e.previewImg}}):e._e()])]),e.previewImg?n("el-row",{staticClass:"row-item"},[n("div",{staticClass:"upload-status"},[n("div",{staticClass:"file-status"},[n("div",{staticClass:"filename"},[e._v(e._s(e.fileName)+" ")]),e.uploading?e._e():n("div",{staticClass:"upload-tips wait-upload"},[e._v(" 等待上传 "),n("i",{staticClass:"el-icon-upload2"})]),e.uploading&&100!==e.uploadProgress?n("div",{staticClass:"upload-tips uploading"},[e._v(" 正在上传 "),n("i",{staticClass:"el-icon-loading"})]):e._e(),100===e.uploadProgress?n("div",{staticClass:"upload-tips uploaded"},[e._v(" 上传完成 "),n("i",{staticClass:"el-icon-circle-check"})]):e._e()])])]):e._e(),100===e.uploadProgress?n("el-row",{staticClass:"row-item"},[n("div",{staticClass:"external-link"},[n("el-input",{ref:"GitHubExternalLinkInput",staticClass:"external-link-input",attrs:{placeholder:"复制GitHub外链...",size:"mini",readonly:""},model:{value:e.GitHubExternalLink,callback:function(t){e.GitHubExternalLink=t},expression:"GitHubExternalLink"}},[n("template",{slot:"prepend"},[e._v("GitHub外链")]),n("el-button",{attrs:{slot:"append",icon:"el-icon-copy-document"},on:{click:function(t){return e.copyLink("GitHub")}},slot:"append"},[e._v("复制 ")])],2),n("el-input",{ref:"CDNExternalLinkInput",staticClass:"external-link-input",attrs:{placeholder:"复制CDN外链...",size:"mini",readonly:""},model:{value:e.CDNExternalLink,callback:function(t){e.CDNExternalLink=t},expression:"CDNExternalLink"}},[n("template",{slot:"prepend"},[e._v("CDN外链")]),n("el-button",{attrs:{slot:"append",icon:"el-icon-copy-document"},on:{click:function(t){return e.copyLink("CDN")}},slot:"append"},[e._v("复制 ")])],2)],1)]):e._e(),n("el-row",{staticClass:"row-item"},[n("div",{staticClass:"upload-tools"},[e.config.selectedRepos?n("div",{staticClass:"repos-dir-info"},[n("el-tag",{staticClass:"repos-dir-info-item"},[e._v("仓库："+e._s(e.config.selectedRepos))]),n("el-tag",{staticClass:"repos-dir-info-item"},[e._v("目录："+e._s(e.config.selectedDir?e.config.selectedDir:"无"))])],1):e._e(),n("UploadTools",{on:{"is-set-max-size":e.onSetMaxSizeChane,"is-rename":e.onRenameChange,"max-size":e.onMaxSizeChange,"upload-reset":e.uploadReset,"upload-file":e.uploadFile}})],1)])],1)},$=[],j=(n("96cf"),n("1da1")),F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"tool-item"},[n("el-switch",{staticStyle:{"margin-right":"20px"},attrs:{"inactive-text":"设置上传图片大小"},on:{change:e.setMaxSizeChange},model:{value:e.setMaxSize,callback:function(t){e.setMaxSize=t},expression:"setMaxSize"}}),n("el-input-number",{attrs:{disabled:!e.setMaxSize,size:"mini",min:100,max:1e3,step:50,label:"图片大小"},on:{change:e.maxSizeChange},model:{value:e.maxSize,callback:function(t){e.maxSize=t},expression:"maxSize"}})],1),n("div",{staticClass:"tool-item"},[n("el-switch",{attrs:{"inactive-text":"哈希命名"},on:{change:e.renameChange},model:{value:e.rename,callback:function(t){e.rename=t},expression:"rename"}})],1),n("div",{staticClass:"tool-item operation-btn"},[n("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:e.uploadReset}},[e._v("重置 ")]),n("el-button",{attrs:{type:"primary",icon:"el-icon-upload"},on:{click:e.uploadFile}},[e._v("上传 ")])],1)])},P=[],T={name:"UploadTools",data:function(){return{setMaxSize:!1,maxSize:200,rename:!0}},mounted:function(){this.setMaxSizeChange(this.setMaxSize),this.maxSizeChange(this.maxSize),this.renameChange(this.rename)},methods:{setMaxSizeChange:function(e){this.$emit("is-set-max-size",e)},renameChange:function(e){this.$emit("is-rename",e)},maxSizeChange:function(e){this.$emit("max-size",e)},uploadReset:function(){this.$emit("upload-reset")},uploadFile:function(){this.$emit("upload-file")}},props:{}},G=T,H=(n("dbac"),Object(d["a"])(G,F,P,!1,null,"4faa28e2",null)),A=H.exports;function J(e,t,n){n&&n(e,t)}function B(e,t,n){var a=document.createElement("canvas"),o=a.getContext("2d"),i=e.width/e.height,s=n,r=n/i;a.width=s,a.height=r,o.fillStyle="#fff",o.fillRect(0,0,a.width,a.height),o.drawImage(e,0,0,s,r);var l=a.toDataURL(t,.75);return a=o=null,l}function W(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(e&&/\/(?:jpeg|jpg|png|gif)/i.test(e.type)){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){var a=this.result;if(null===n||a.length<=n)J(a,e.name,t);else{var o=new Image;o.src=a,o.onload=function(){var a=B(o,e.type,n/1024);J(a,e.name,t),o=null}}}}}var X=W,Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:204800;if(e.clipboardData&&e.clipboardData.items)return new Promise((function(n){for(var a=0,o=e.clipboardData.items.length;a<o;a++){var i=e.clipboardData.items[a];if("file"===i.kind){var s=i.getAsFile();X(s,(function(e,t){n({url:e,fileName:t})}),t)}}}))},q=Y,K=(n("baa5"),function(e){var t=e.lastIndexOf("."),n=e.substr(0,t),a=e.substr(t,e.length),o=Math.random().toString(36).substr(2);return"".concat(n,".").concat(o).concat(a)}),Q=K,V=function(e,t){var n="https://api.github.com/repos",a=e.selectedDir;if(!e.selectedDir){var o=new Date,i=o.getFullYear(),s=o.getMonth()+1,r=o.getDate();a="".concat(i).concat(s<10?"0"+s:s).concat(r<10?"0"+r:r)}return"".concat(n,"/").concat(e.username,"/").concat(e.selectedRepos,"/contents/").concat(a,"/").concat(t)},Z=V,ee=function(e,t,n){switch(e){case"github":return t["download_url"];case"cdn":return"https://cdn.jsdelivr.net/gh/".concat(n.username,"/").concat(n.selectedRepos,"/").concat(t["path"])}},te=ee,ne={name:"Upload",components:{UploadTools:A},data:function(){return{previewImg:"",imgBase64:"",fileName:"",uploadProgress:0,uploading:!1,autoUpload:!1,compressSize:200,setMaxSize:!1,renameWithHash:!1,config:"",GitHubExternalLink:"",CDNExternalLink:"",selectedExternalLink:"",selectedExternalLinkType:""}},mounted:function(){this.getUserInfo()},methods:{getUserInfo:function(){var e=localStorage.getItem(c);e&&(this.config=JSON.parse(e))},onSetMaxSizeChane:function(e){this.setMaxSize=e},onRenameChange:function(e){this.renameWithHash=e},onMaxSizeChange:function(e){this.compressSize=e},uploadReset:function(){this.imgBase64="",this.previewImg="",this.fileName="",this.GitHubExternalLink="",this.CDNExternalLink="",this.uploadProgress=0,this.uploading=!1},uploadFile:function(){var e=this,t=localStorage.getItem(c);if(t)if(t=JSON.parse(t),this.imgBase64&&this.fileName){this.uploading=!0;var n={message:"upload from PicX",branch:"master",committer:{name:t.username,email:t.email},content:this.imgBase64};w.a.put(Z(t,this.fileName),n,{headers:{"Content-Type":"application/json",Authorization:"token ".concat(t.token)}}).then((function(n){console.log("res",n),201===n.status&&"Created"===n.statusText&&(e.uploadProgress=100,e.$message.success("上传成功！"),e.GitHubExternalLink=te("github",n.data.content,t),e.CDNExternalLink=te("cdn",n.data.content,t))})).catch((function(t){e.$message.error("上传失败！"),console.log("error",t)}))}else this.$message.error("内容不能为空！");else this.$message.info("请先进行图床配置！"),this.$router.push("config")},copyLink:function(e){switch(e){case"CDN":this.$refs.CDNExternalLinkInput.select();break;case"GitHub":this.$refs.GitHubExternalLinkInput.select();break}document.execCommand("copy"),this.$message.success("".concat(e,"外链复制成功！"))},getImage:function(e,t){this.previewImg=e,this.imgBase64=e.split(",")[1],this.fileName=this.renameWithHash?Q(t):t,this.autoUpload&&this.uploadFile()},onFileChange:function(e){var t=this,n=e.target.files[0];X(n,(function(e,n){t.getImage(e,n)}),this.setMaxSize?1024*this.compressSize:null)},onDrop:function(e){var t=this,n=e.dataTransfer.files[0];X(n,(function(e,n){t.getImage(e,n)}),this.setMaxSize?1024*this.compressSize:null)},onPaste:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function n(){var a,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,q(e,t.setMaxSize?1024*t.compressSize:null);case 2:a=n.sent,o=a.url,i=a.fileName,t.getImage(o,i);case 6:case"end":return n.stop()}}),n)})))()}}},ae=ne,oe=(n("7160"),Object(d["a"])(ae,M,$,!1,null,null,null)),ie=oe.exports,se=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},re=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("coming soon...")])])}],le={name:"Management",data:function(){return{userConfigInfo:null}},mounted:function(){this.getUserConfigInfo()},methods:{getUserConfigInfo:function(){var e=localStorage.getItem(c);e&&(this.userConfigInfo=JSON.parse(e))},getReposInfo:function(){var e,t;this.userConfigInfo&&w.a.get("https://api.github.com/repos/".concat(null===(e=this.userConfigInfo)||void 0===e?void 0:e.username,"/").concat(null===(t=this.userConfigInfo)||void 0===t?void 0:t.selectedRepos,"/contents")).then((function(e){console.log("res",e)}))}}},ce=le,ue=Object(d["a"])(ce,se,re,!1,null,"b04ff77a",null),fe=ue.exports,pe=I["a"].prototype.push;I["a"].prototype.push=function(e){return pe.call(this,e).catch((function(e){return e}))},a["default"].use(I["a"]);var de=[{path:"/",name:"Upload",component:ie},{path:"/config",name:"Config",component:R},{path:"/management",name:"Management",component:fe}],ge=new I["a"]({routes:de}),me=ge;a["default"].use(u["a"]);var he=function(){var e=localStorage.getItem(c);return e?JSON.parse(e):y},ve=new u["a"].Store({state:{userConfigInfo:he(),isLogout:!1},mutations:{SET_USER_CONFIG_INFO:function(e,t){for(var n in t)e.userConfigInfo.hasOwnProperty(n)&&(e.userConfigInfo[n]=t[n])},PERSIST_USER_CONFIG_INFO:function(e,t){this.commit("SET_USER_CONFIG_INFO",t),localStorage.setItem(c,JSON.stringify(e.userConfigInfo))},RESET_USER_CONFIG_INFO:function(e){L(e.userConfigInfo)}},getters:{getUserConfigInfo:function(e){return JSON.parse(JSON.stringify(e.userConfigInfo))},getUserAvatar:function(e){return e.userConfigInfo.avatar_url},getUserNickname:function(e){return e.userConfigInfo.nickname},getLogoutStatus:function(e){return e.isLogout}},actions:{LOGOUT:function(e){var t=e.commit,n=e.state;t("RESET_USER_CONFIG_INFO"),n.isLogout=!0,localStorage.removeItem(c)}},modules:{}}),Ce=n("5c96"),be=n.n(Ce);n("0fae");a["default"].use(be.a),a["default"].config.productionTip=!1,new a["default"]({router:me,store:ve,render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),o=n.n(a);o.a},7050:function(e,t,n){"use strict";var a=n("2fe0"),o=n.n(a);o.a},7160:function(e,t,n){"use strict";var a=n("086a"),o=n.n(a);o.a},"9c0c":function(e,t,n){},a262:function(e,t,n){},dbac:function(e,t,n){"use strict";var a=n("a262"),o=n.n(a);o.a},df53:function(e,t,n){"use strict";var a=n("46d3"),o=n.n(a);o.a}});
//# sourceMappingURL=app.5fc8ca32.js.map