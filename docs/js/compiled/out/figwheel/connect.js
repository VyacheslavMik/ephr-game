// Compiled by ClojureScript 1.10.439 {:optimize-constants true}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_jsload,(function() { 
var G__58044__delegate = function (x__28755__auto__){
if(cljs.core.truth_(game.core.on_js_reload)){
return cljs.core.apply.call(null,game.core.on_js_reload,x__28755__auto__);
} else {
return figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$on_DASH_jsload)," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("game.core/on-js-reload"),"' is missing"].join(''));
}
};
var G__58044 = function (var_args){
var x__28755__auto__ = null;
if (arguments.length > 0) {
var G__58045__i = 0, G__58045__a = new Array(arguments.length -  0);
while (G__58045__i < G__58045__a.length) {G__58045__a[G__58045__i] = arguments[G__58045__i + 0]; ++G__58045__i;}
  x__28755__auto__ = new cljs.core.IndexedSeq(G__58045__a,0,null);
} 
return G__58044__delegate.call(this,x__28755__auto__);};
G__58044.cljs$lang$maxFixedArity = 0;
G__58044.cljs$lang$applyTo = (function (arglist__58046){
var x__28755__auto__ = cljs.core.seq(arglist__58046);
return G__58044__delegate(x__28755__auto__);
});
G__58044.cljs$core$IFn$_invoke$arity$variadic = G__58044__delegate;
return G__58044;
})()
,cljs.core.cst$kw$build_DASH_id,"dev",cljs.core.cst$kw$websocket_DASH_url,"ws://localhost:3450/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(cljs.core.cst$kw$devcards.cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1545301528344
