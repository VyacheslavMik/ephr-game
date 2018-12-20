// Compiled by ClojureScript 1.10.439 {:optimize-constants true}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_jsload,(function() { 
var G__57543__delegate = function (x__23176__auto__){
if(cljs.core.truth_(game.core.on_js_reload)){
return cljs.core.apply.call(null,game.core.on_js_reload,x__23176__auto__);
} else {
return figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$on_DASH_jsload)," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("game.core/on-js-reload"),"' is missing"].join(''));
}
};
var G__57543 = function (var_args){
var x__23176__auto__ = null;
if (arguments.length > 0) {
var G__57544__i = 0, G__57544__a = new Array(arguments.length -  0);
while (G__57544__i < G__57544__a.length) {G__57544__a[G__57544__i] = arguments[G__57544__i + 0]; ++G__57544__i;}
  x__23176__auto__ = new cljs.core.IndexedSeq(G__57544__a,0,null);
} 
return G__57543__delegate.call(this,x__23176__auto__);};
G__57543.cljs$lang$maxFixedArity = 0;
G__57543.cljs$lang$applyTo = (function (arglist__57545){
var x__23176__auto__ = cljs.core.seq(arglist__57545);
return G__57543__delegate(x__23176__auto__);
});
G__57543.cljs$core$IFn$_invoke$arity$variadic = G__57543__delegate;
return G__57543;
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

//# sourceMappingURL=connect.js.map?rel=1545321278702
