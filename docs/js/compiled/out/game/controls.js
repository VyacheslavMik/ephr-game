// Compiled by ClojureScript 1.10.439 {}
goog.provide('game.controls');
goog.require('cljs.core');
game.controls.context = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mouse-state","mouse-state",-597308776),null,new cljs.core.Keyword(null,"touch-state","touch-state",1454426880),null,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.PersistentHashSet.EMPTY], null));
game.controls.handle_key_down = (function game$controls$handle_key_down(ev){
return cljs.core.swap_BANG_.call(null,game.controls.context,cljs.core.update,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.conj,cljs.core.keyword.call(null,ev.code));
});
game.controls.handle_key_up = (function game$controls$handle_key_up(ev){
return cljs.core.swap_BANG_.call(null,game.controls.context,cljs.core.update,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.disj,cljs.core.keyword.call(null,ev.code));
});
game.controls.handle_context_menu = (function game$controls$handle_context_menu(ev){
return ev.preventDefault();
});
game.controls.handle_mouse_down = (function game$controls$handle_mouse_down(ev){
var button = new cljs.core.PersistentArrayMap(null, 2, [(0),new cljs.core.Keyword(null,"left","left",-399115937),(2),new cljs.core.Keyword(null,"right","right",-452581833)], null).call(null,ev.button);
return cljs.core.swap_BANG_.call(null,game.controls.context,cljs.core.assoc,new cljs.core.Keyword(null,"mouse-state","mouse-state",-597308776),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"button","button",1456579943),button,new cljs.core.Keyword(null,"x","x",2099068185),ev.offsetX,new cljs.core.Keyword(null,"y","y",-1757859776),ev.offsetY], null));
});
game.controls.handle_mouse_up = (function game$controls$handle_mouse_up(ev){
return cljs.core.swap_BANG_.call(null,game.controls.context,cljs.core.assoc,new cljs.core.Keyword(null,"mouse-state","mouse-state",-597308776),null);
});
game.controls.handle_mouse_move = (function game$controls$handle_mouse_move(ev){
var temp__5457__auto__ = new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"left","left",-399115937),(2),new cljs.core.Keyword(null,"right","right",-452581833),(3),new cljs.core.Keyword(null,"left","left",-399115937)], null).call(null,ev.buttons);
if(cljs.core.truth_(temp__5457__auto__)){
var button = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,game.controls.context,cljs.core.assoc,new cljs.core.Keyword(null,"mouse-state","mouse-state",-597308776),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"button","button",1456579943),button,new cljs.core.Keyword(null,"x","x",2099068185),ev.offsetX,new cljs.core.Keyword(null,"y","y",-1757859776),ev.offsetY], null));
} else {
return null;
}
});
game.controls.handle_touch_start = (function game$controls$handle_touch_start(ev){
var rect = new cljs.core.Keyword(null,"text-canvas","text-canvas",-525048046).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.controls.context)).getBoundingClientRect();
var touches = cljs.core.mapv.call(null,((function (rect){
return (function (i){
var touch = ev.touches.item(i);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(touch.clientX - rect.left),new cljs.core.Keyword(null,"y","y",-1757859776),(touch.clientY - rect.top)], null);
});})(rect))
,cljs.core.range.call(null,ev.touches.length));
return cljs.core.swap_BANG_.call(null,game.controls.context,cljs.core.assoc,new cljs.core.Keyword(null,"touch-state","touch-state",1454426880),touches);
});
game.controls.handle_touch_end = (function game$controls$handle_touch_end(ev){
return cljs.core.swap_BANG_.call(null,game.controls.context,cljs.core.assoc,new cljs.core.Keyword(null,"touch-state","touch-state",1454426880),null);
});
game.controls.key_pressed_QMARK_ = (function game$controls$key_pressed_QMARK_(k){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.controls.context)),k);
});
game.controls.get_mouse_state = (function game$controls$get_mouse_state(){
return new cljs.core.Keyword(null,"mouse-state","mouse-state",-597308776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.controls.context));
});
game.controls.get_touch_state = (function game$controls$get_touch_state(){
return new cljs.core.Keyword(null,"touch-state","touch-state",1454426880).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.controls.context));
});
game.controls.register_events = (function game$controls$register_events(renderer){
renderer.removeEventListener("contextmenu",game.controls.handle_context_menu);

document.body.removeEventListener("keydown",game.controls.handle_key_down);

document.body.removeEventListener("keyup",game.controls.handle_key_up);

renderer.removeEventListener("mousedown",game.controls.handle_mouse_down);

renderer.removeEventListener("mouseup",game.controls.handle_mouse_up);

renderer.removeEventListener("mousemove",game.controls.handle_mouse_move);

renderer.removeEventListener("touchstart",game.controls.handle_touch_start);

renderer.removeEventListener("touchend",game.controls.handle_touch_end);

renderer.addEventListener("contextmenu",game.controls.handle_context_menu);

document.body.addEventListener("keydown",game.controls.handle_key_down);

document.body.addEventListener("keyup",game.controls.handle_key_up);

renderer.addEventListener("mousedown",game.controls.handle_mouse_down);

renderer.addEventListener("mouseup",game.controls.handle_mouse_up);

renderer.addEventListener("mousemove",game.controls.handle_mouse_move);

renderer.addEventListener("touchstart",game.controls.handle_touch_start);

return renderer.addEventListener("touchend",game.controls.handle_touch_end);
});
