// Compiled by ClojureScript 1.10.439 {}
goog.provide('game.pixi');
goog.require('cljs.core');
goog.require('clojure.set');
if((typeof game !== 'undefined') && (typeof game.pixi !== 'undefined') && (typeof game.pixi.loader !== 'undefined')){
} else {
game.pixi.loader = (new PIXI.loaders.Loader());
}
if((typeof game !== 'undefined') && (typeof game.pixi !== 'undefined') && (typeof game.pixi.loaded_resources !== 'undefined')){
} else {
game.pixi.loaded_resources = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
}
game.pixi.init = (function game$pixi$init(var_args){
var G__26248 = arguments.length;
switch (G__26248) {
case 0:
return game.pixi.init.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return game.pixi.init.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

game.pixi.init.cljs$core$IFn$_invoke$arity$0 = (function (){
return game.pixi.init.call(null,cljs.core.PersistentVector.EMPTY,(function (){
return cljs.core.List.EMPTY;
}));
});

game.pixi.init.cljs$core$IFn$_invoke$arity$2 = (function (resources,onload){
var loading_resources = cljs.core.remove.call(null,cljs.core.deref.call(null,game.pixi.loaded_resources),resources);
var pixi_dom = document.querySelector("#pixi");
var app = (new PIXI.Application(({"width": (800), "height": (600), "backgroundColor": (0)})));
if((pixi_dom.children.length === (0))){
} else {
(pixi_dom.children[(0)]).remove();
}

if((cljs.core.count.call(null,loading_resources) === (0))){
pixi_dom.appendChild(app.view);
} else {
game.pixi.loader.add(cljs.core.to_array.call(null,loading_resources));

game.pixi.loader.load(((function (loading_resources,pixi_dom,app){
return (function (loader,resources__$1){
pixi_dom.appendChild(app.view);

return onload.call(null);
});})(loading_resources,pixi_dom,app))
);
}

cljs.core.swap_BANG_.call(null,game.pixi.loaded_resources,clojure.set.union,cljs.core.set.call(null,resources));

app.renderer.plugins.interaction.destroy();

return app;
});

game.pixi.init.cljs$lang$maxFixedArity = 2;

game.pixi.load_resources = (function game$pixi$load_resources(app,resources,onload){
var loading_resources = cljs.core.remove.call(null,cljs.core.deref.call(null,game.pixi.loaded_resources),resources);
if((cljs.core.count.call(null,loading_resources) === (0))){
} else {
game.pixi.loader.add(cljs.core.to_array.call(null,loading_resources));

game.pixi.loader.load(((function (loading_resources){
return (function (loader,resources__$1){
return onload.call(null);
});})(loading_resources))
);
}

return cljs.core.swap_BANG_.call(null,game.pixi.loaded_resources,clojure.set.union,cljs.core.set.call(null,resources));
});
