// Compiled by ClojureScript 1.10.439 {}
goog.provide('game.camera');
goog.require('cljs.core');
goog.require('game.utils');
game.camera.context = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"view-port-width","view-port-width",1189645642),(0),new cljs.core.Keyword(null,"view-port-height","view-port-height",670423990),(0),new cljs.core.Keyword(null,"world-rectangle","world-rectangle",1666211299),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0)], null)], null));
if((typeof game !== 'undefined') && (typeof game.camera !== 'undefined') && (typeof game.camera.container !== 'undefined')){
} else {
game.camera.container = (function (){var container = (new PIXI.Container());
container.width = (800);

container.height = (600);

return container;
})();
}
game.camera.initialize = (function game$camera$initialize(props){
return cljs.core.swap_BANG_.call(null,game.camera.context,cljs.core.merge,props);
});
game.camera.set_position = (function game$camera$set_position(pos){
game.camera.container.pivot.x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos);

game.camera.container.pivot.y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos);

return cljs.core.swap_BANG_.call(null,game.camera.context,cljs.core.assoc,new cljs.core.Keyword(null,"position","position",-2011731912),pos);
});
game.camera.transform_point = (function game$camera$transform_point(point){
return game.utils.vector_sub.call(null,point,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.camera.context)));
});
game.camera.transform_rectangle = (function game$camera$transform_rectangle(rectangle){
return cljs.core.update.call(null,cljs.core.update.call(null,rectangle,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.camera.context)))),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.camera.context))));
});
game.camera.view_port_width = (function game$camera$view_port_width(){
return new cljs.core.Keyword(null,"view-port-width","view-port-width",1189645642).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.camera.context));
});
game.camera.view_port_height = (function game$camera$view_port_height(){
return new cljs.core.Keyword(null,"view-port-height","view-port-height",670423990).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.camera.context));
});
game.camera.world_rectangle = (function game$camera$world_rectangle(){
return new cljs.core.Keyword(null,"world-rectangle","world-rectangle",1666211299).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.camera.context));
});
game.camera.view_port = (function game$camera$view_port(){
var map__25111 = cljs.core.deref.call(null,game.camera.context);
var map__25111__$1 = (((((!((map__25111 == null))))?(((((map__25111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25111):map__25111);
var position = cljs.core.get.call(null,map__25111__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var view_port_width = cljs.core.get.call(null,map__25111__$1,new cljs.core.Keyword(null,"view-port-width","view-port-width",1189645642));
var view_port_height = cljs.core.get.call(null,map__25111__$1,new cljs.core.Keyword(null,"view-port-height","view-port-height",670423990));
return cljs.core.assoc.call(null,position,new cljs.core.Keyword(null,"width","width",-384071477),view_port_width,new cljs.core.Keyword(null,"height","height",1025178622),view_port_height);
});
game.camera.move = (function game$camera$move(offset){
var map__25113 = cljs.core.deref.call(null,game.camera.context);
var map__25113__$1 = (((((!((map__25113 == null))))?(((((map__25113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25113):map__25113);
var position = cljs.core.get.call(null,map__25113__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var world_rectangle = cljs.core.get.call(null,map__25113__$1,new cljs.core.Keyword(null,"world-rectangle","world-rectangle",1666211299));
var view_port_width = cljs.core.get.call(null,map__25113__$1,new cljs.core.Keyword(null,"view-port-width","view-port-width",1189645642));
var view_port_height = cljs.core.get.call(null,map__25113__$1,new cljs.core.Keyword(null,"view-port-height","view-port-height",670423990));
var position__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),Math.floor(game.utils.clamp.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(offset)),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(world_rectangle),(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(world_rectangle) - view_port_width))),new cljs.core.Keyword(null,"y","y",-1757859776),Math.floor(game.utils.clamp.call(null,(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offset)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(world_rectangle),(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(world_rectangle) - view_port_height)))], null);
game.camera.container.pivot.x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position__$1);

game.camera.container.pivot.y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position__$1);

return cljs.core.swap_BANG_.call(null,game.camera.context,cljs.core.assoc,new cljs.core.Keyword(null,"position","position",-2011731912),position__$1);
});
game.camera.object_visible_QMARK_ = (function game$camera$object_visible_QMARK_(bounds){
return game.utils.rectangle_intersects_QMARK_.call(null,game.camera.view_port.call(null),bounds);
});
game.camera.world_to_screen_v = (function game$camera$world_to_screen_v(world_location){
return game.utils.vector_sub.call(null,world_location,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.camera.context)));
});
game.camera.world_to_screen_r = (function game$camera$world_to_screen_r(world_rectangle){
var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.camera.context));
return cljs.core.update.call(null,cljs.core.update.call(null,world_rectangle,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position));
});
game.camera.screen_to_world_v = (function game$camera$screen_to_world_v(screen_location){
return game.utils.vector_add.call(null,screen_location,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.camera.context)));
});
game.camera.screen_to_world_r = (function game$camera$screen_to_world_r(screen_rectangle){
var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.camera.context));
return cljs.core.update.call(null,cljs.core.update.call(null,screen_rectangle,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position));
});
