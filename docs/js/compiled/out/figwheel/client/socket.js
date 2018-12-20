// Compiled by ClojureScript 1.10.439 {:optimize-constants true}
goog.provide('figwheel.client.socket');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('figwheel.client.utils');
goog.require('cljs.reader');
figwheel.client.socket.get_websocket_imp = (function figwheel$client$socket$get_websocket_imp(){
var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_WEBSOCKET_CLASS");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.object.get(goog.global,"WebSocket");
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
if(figwheel.client.utils.html_or_react_native_env_QMARK_.call(null)){
return goog.object.get(window,"WebSocket");
} else {
if(figwheel.client.utils.node_env_QMARK_.call(null)){
try{return require("ws");
}catch (e41619){if((e41619 instanceof Error)){
var e = e41619;
return null;
} else {
throw e41619;

}
}} else {
if(figwheel.client.utils.worker_env_QMARK_.call(null)){
return goog.object.get(self,"WebSocket");
} else {
return null;

}
}
}
}
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.socket !== 'undefined') && (typeof figwheel.client.socket.message_history_atom !== 'undefined')){
} else {
figwheel.client.socket.message_history_atom = cljs.core.atom.call(null,cljs.core.List.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.socket !== 'undefined') && (typeof figwheel.client.socket.socket_atom !== 'undefined')){
} else {
figwheel.client.socket.socket_atom = cljs.core.atom.call(null,false);
}
/**
 * Send a end message to the server.
 */
figwheel.client.socket.send_BANG_ = (function figwheel$client$socket$send_BANG_(msg){
if(cljs.core.truth_(cljs.core.deref.call(null,figwheel.client.socket.socket_atom))){
return cljs.core.deref.call(null,figwheel.client.socket.socket_atom).send(cljs.core.pr_str.call(null,msg));
} else {
return null;
}
});
figwheel.client.socket.close_BANG_ = (function figwheel$client$socket$close_BANG_(){
cljs.core.deref.call(null,figwheel.client.socket.socket_atom).onclose = cljs.core.identity;

return cljs.core.deref.call(null,figwheel.client.socket.socket_atom).close();
});
figwheel.client.socket.handle_incoming_message = (function figwheel$client$socket$handle_incoming_message(msg){
figwheel.client.utils.debug_prn.call(null,msg);

var and__4036__auto__ = cljs.core.map_QMARK_.call(null,msg);
if(and__4036__auto__){
var and__4036__auto____$1 = cljs.core.cst$kw$msg_DASH_name.cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(and__4036__auto____$1)){
var and__4036__auto____$2 = cljs.core.not_EQ_.call(null,cljs.core.cst$kw$msg_DASH_name.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.cst$kw$ping);
if(and__4036__auto____$2){
return cljs.core.swap_BANG_.call(null,figwheel.client.socket.message_history_atom,cljs.core.conj,msg);
} else {
return and__4036__auto____$2;
}
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
});
figwheel.client.socket.open = (function figwheel$client$socket$open(p__41620){
var map__41621 = p__41620;
var map__41621__$1 = (((((!((map__41621 == null))))?(((((map__41621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41621):map__41621);
var opts = map__41621__$1;
var retry_count = cljs.core.get.call(null,map__41621__$1,cljs.core.cst$kw$retry_DASH_count);
var retried_count = cljs.core.get.call(null,map__41621__$1,cljs.core.cst$kw$retried_DASH_count);
var websocket_url = cljs.core.get.call(null,map__41621__$1,cljs.core.cst$kw$websocket_DASH_url);
var build_id = cljs.core.get.call(null,map__41621__$1,cljs.core.cst$kw$build_DASH_id);
var temp__5455__auto__ = figwheel.client.socket.get_websocket_imp.call(null);
if(cljs.core.truth_(temp__5455__auto__)){
var WebSocket = temp__5455__auto__;
figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: trying to open cljs reload socket");

var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(websocket_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(build_id)?["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(build_id)].join(''):""))].join('');
var socket = (new WebSocket(url));
socket.onmessage = ((function (url,socket,WebSocket,temp__5455__auto__,map__41621,map__41621__$1,opts,retry_count,retried_count,websocket_url,build_id){
return (function (msg_str){
var temp__5457__auto__ = cljs.reader.read_string.call(null,msg_str.data);
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
return new cljs.core.Var(function(){return figwheel.client.socket.handle_incoming_message;},cljs.core.cst$sym$figwheel$client$socket_SLASH_handle_DASH_incoming_DASH_message,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$figwheel$client$socket,cljs.core.cst$sym$handle_DASH_incoming_DASH_message,"resources/public/js/compiled/out/figwheel/client/socket.cljs",30,1,57,57,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$msg], null)),null,(cljs.core.truth_(figwheel.client.socket.handle_incoming_message)?figwheel.client.socket.handle_incoming_message.cljs$lang$test:null)])).call(null,msg);
} else {
return null;
}
});})(url,socket,WebSocket,temp__5455__auto__,map__41621,map__41621__$1,opts,retry_count,retried_count,websocket_url,build_id))
;

socket.onopen = ((function (url,socket,WebSocket,temp__5455__auto__,map__41621,map__41621__$1,opts,retry_count,retried_count,websocket_url,build_id){
return (function (x){
cljs.core.reset_BANG_.call(null,figwheel.client.socket.socket_atom,socket);

if(figwheel.client.utils.html_env_QMARK_.call(null)){
window.addEventListener("beforeunload",figwheel.client.socket.close_BANG_);
} else {
}

return figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: socket connection established");
});})(url,socket,WebSocket,temp__5455__auto__,map__41621,map__41621__$1,opts,retry_count,retried_count,websocket_url,build_id))
;

socket.onclose = ((function (url,socket,WebSocket,temp__5455__auto__,map__41621,map__41621__$1,opts,retry_count,retried_count,websocket_url,build_id){
return (function (x){
var retried_count__$1 = (function (){var or__4047__auto__ = retried_count;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})();
figwheel.client.utils.debug_prn.call(null,"Figwheel: socket closed or failed to open");

if((retry_count > retried_count__$1)){
return setTimeout(((function (retried_count__$1,url,socket,WebSocket,temp__5455__auto__,map__41621,map__41621__$1,opts,retry_count,retried_count,websocket_url,build_id){
return (function (){
return figwheel.client.socket.open.call(null,cljs.core.assoc.call(null,opts,cljs.core.cst$kw$retried_DASH_count,(retried_count__$1 + (1))));
});})(retried_count__$1,url,socket,WebSocket,temp__5455__auto__,map__41621,map__41621__$1,opts,retry_count,retried_count,websocket_url,build_id))
,(function (){var x__4138__auto__ = (10000);
var y__4139__auto__ = ((2000) + ((500) * retried_count__$1));
return ((x__4138__auto__ < y__4139__auto__) ? x__4138__auto__ : y__4139__auto__);
})());
} else {
return null;
}
});})(url,socket,WebSocket,temp__5455__auto__,map__41621,map__41621__$1,opts,retry_count,retried_count,websocket_url,build_id))
;

socket.onerror = ((function (url,socket,WebSocket,temp__5455__auto__,map__41621,map__41621__$1,opts,retry_count,retried_count,websocket_url,build_id){
return (function (x){
return figwheel.client.utils.debug_prn.call(null,"Figwheel: socket error ");
});})(url,socket,WebSocket,temp__5455__auto__,map__41621,map__41621__$1,opts,retry_count,retried_count,websocket_url,build_id))
;

return socket;
} else {
return figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,((figwheel.client.utils.node_env_QMARK_.call(null))?"Figwheel: Can't start Figwheel!! Please make sure ws is installed\n do -> 'npm install ws'":"Figwheel: Can't start Figwheel!! This browser doesn't support WebSockets"));
}
});

//# sourceMappingURL=socket.js.map?rel=1545307822607
