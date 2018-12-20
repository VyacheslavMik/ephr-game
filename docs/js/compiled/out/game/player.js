// Compiled by ClojureScript 1.10.439 {:optimize-constants true}
goog.provide('game.player');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('game.controls');
goog.require('game.utils');
goog.require('game.camera');
goog.require('game.animation_strip');
goog.require('game.game_object');
goog.require('game.world');
goog.require('game.tile_map');
game.player.texture_path = (function game$player$texture_path(name){
return ["textures/Sprites/Player/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
});
game.player.new_player = (function game$player$new_player(load_level,context){
var ob = game.game_object.new_game_object.call(null);
var animations = new cljs.core.PersistentArrayMap(null, 4, ["idle",game.animation_strip.update_animation_strip.call(null,cljs.core.assoc.call(null,game.animation_strip.new_animation_strip.call(null,game.player.texture_path.call(null,"Idle.png"),(48),"idle"),cljs.core.cst$kw$loop_DASH_animation_QMARK_,true)),"run",game.animation_strip.update_animation_strip.call(null,cljs.core.assoc.call(null,game.animation_strip.new_animation_strip.call(null,game.player.texture_path.call(null,"Run.png"),(48),"run"),cljs.core.cst$kw$loop_DASH_animation_QMARK_,true)),"jump",game.animation_strip.update_animation_strip.call(null,cljs.core.assoc.call(null,game.animation_strip.new_animation_strip.call(null,game.player.texture_path.call(null,"Jump.png"),(48),"jump"),cljs.core.cst$kw$loop_DASH_animation_QMARK_,false,cljs.core.cst$kw$frame_DASH_delay,0.2,cljs.core.cst$kw$next_DASH_animation,"idle")),"die",game.animation_strip.update_animation_strip.call(null,cljs.core.assoc.call(null,game.animation_strip.new_animation_strip.call(null,game.player.texture_path.call(null,"Die.png"),(48),"die"),cljs.core.cst$kw$loop_DASH_animation_QMARK_,false))], null);
return cljs.core.assoc.call(null,ob,cljs.core.cst$kw$animations,animations,cljs.core.cst$kw$world_DASH_location,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(-500),cljs.core.cst$kw$y,(-500)], null),cljs.core.cst$kw$fall_DASH_speed,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(20)], null),cljs.core.cst$kw$move_DASH_scale,(180),cljs.core.cst$kw$dead_QMARK_,false,cljs.core.cst$kw$score,(0),cljs.core.cst$kw$lives_DASH_remaining,(3),cljs.core.cst$kw$frame_DASH_width,(48),cljs.core.cst$kw$frame_DASH_height,(48),cljs.core.cst$kw$collision_DASH_rectangle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(9),cljs.core.cst$kw$y,(1),cljs.core.cst$kw$width,(30),cljs.core.cst$kw$height,(46)], null),cljs.core.cst$kw$draw_DASH_depth,(6),cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$load_DASH_level,load_level,cljs.core.cst$kw$context,context,cljs.core.cst$kw$code_DASH_based_DASH_blocks_QMARK_,false);
});
game.player.play_animation = (function game$player$play_animation(player,animation){
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$current_DASH_animation.cljs$core$IFn$_invoke$arity$1(player),animation)){
return player;
} else {
return game.game_object.play_animation.call(null,player,animation);
}
});
game.player.check_level_transition = (function game$player$check_level_transition(player){
if(cljs.core.truth_(game.controls.key_pressed_QMARK_.call(null,cljs.core.cst$kw$KeyW))){
var center_cell = game.tile_map.get_cell_by_pixel.call(null,game.game_object.world_center.call(null,player));
var code = game.tile_map.cell_code_value.call(null,center_cell);
if(cljs.core.truth_((function (){var and__4036__auto__ = code;
if(cljs.core.truth_(and__4036__auto__)){
return clojure.string.starts_with_QMARK_.call(null,code,"T_");
} else {
return and__4036__auto__;
}
})())){
var code__$1 = clojure.string.split.call(null,code,/_/);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,code__$1),(4))){
var loc = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,parseInt((cljs.core.nth.call(null,code__$1,(2)) * game.tile_map.tile_width)),cljs.core.cst$kw$y,parseInt((cljs.core.nth.call(null,code__$1,(3)) * game.tile_map.tile_height))], null);
cljs.core.cst$kw$load_DASH_level.cljs$core$IFn$_invoke$arity$1(player).call(null,parseInt(cljs.core.nth.call(null,code__$1,(1))));

cljs.core.swap_BANG_.call(null,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(player),cljs.core.assoc,cljs.core.cst$kw$respawn_DASH_location,loc);

return cljs.core.assoc.call(null,player,cljs.core.cst$kw$world_DASH_location,loc,cljs.core.cst$kw$velocity,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null));
} else {
return player;
}
} else {
return player;
}
} else {
return player;
}
});
game.player.touch_right = (function game$player$touch_right(player){
var temp__5457__auto__ = game.controls.get_touch_state.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var touch = temp__5457__auto__;
return ((0) > (cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(game.camera.world_to_screen_v.call(null,cljs.core.cst$kw$world_DASH_location.cljs$core$IFn$_invoke$arity$1(player))) - cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,touch))));
} else {
return null;
}
});
game.player.touch_left = (function game$player$touch_left(player){
var temp__5457__auto__ = game.controls.get_touch_state.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var touch = temp__5457__auto__;
return ((0) < (cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(game.camera.world_to_screen_v.call(null,cljs.core.cst$kw$world_DASH_location.cljs$core$IFn$_invoke$arity$1(player))) - cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,touch))));
} else {
return null;
}
});
game.player.touch_top = (function game$player$touch_top(player){
var temp__5457__auto__ = game.controls.get_touch_state.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var touch = temp__5457__auto__;
return ((0) < (cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(game.camera.world_to_screen_v.call(null,cljs.core.cst$kw$world_DASH_location.cljs$core$IFn$_invoke$arity$1(player))) - cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,touch))));
} else {
return null;
}
});
game.player.not_dead_update = (function game$player$not_dead_update(player,elapsed){
if(cljs.core.truth_(cljs.core.cst$kw$dead_QMARK_.cljs$core$IFn$_invoke$arity$1(player))){
return player;
} else {
var new_animation = (cljs.core.truth_((function (){var or__4047__auto__ = game.controls.key_pressed_QMARK_.call(null,cljs.core.cst$kw$KeyA);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return game.player.touch_left.call(null,player);
}
})())?"run":(cljs.core.truth_((function (){var or__4047__auto__ = game.controls.key_pressed_QMARK_.call(null,cljs.core.cst$kw$KeyD);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return game.player.touch_right.call(null,player);
}
})())?"run":"idle"
));
var velocity = (cljs.core.truth_((function (){var or__4047__auto__ = game.controls.key_pressed_QMARK_.call(null,cljs.core.cst$kw$KeyA);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return game.player.touch_left.call(null,player);
}
})())?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(- cljs.core.cst$kw$move_DASH_scale.cljs$core$IFn$_invoke$arity$1(player)),cljs.core.cst$kw$y,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(player))], null):(cljs.core.truth_((function (){var or__4047__auto__ = game.controls.key_pressed_QMARK_.call(null,cljs.core.cst$kw$KeyD);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return game.player.touch_right.call(null,player);
}
})())?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,cljs.core.cst$kw$move_DASH_scale.cljs$core$IFn$_invoke$arity$1(player),cljs.core.cst$kw$y,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(player))], null):new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(player))], null)
));
var flipped_QMARK_ = (cljs.core.truth_((function (){var or__4047__auto__ = game.controls.key_pressed_QMARK_.call(null,cljs.core.cst$kw$KeyA);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return game.player.touch_left.call(null,player);
}
})())?false:(cljs.core.truth_((function (){var or__4047__auto__ = game.controls.key_pressed_QMARK_.call(null,cljs.core.cst$kw$KeyD);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return game.player.touch_right.call(null,player);
}
})())?true:cljs.core.cst$kw$flipped_QMARK_.cljs$core$IFn$_invoke$arity$1(player)
));
var velocity__$1 = (cljs.core.truth_((function (){var and__4036__auto__ = (function (){var or__4047__auto__ = game.controls.key_pressed_QMARK_.call(null,cljs.core.cst$kw$Space);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return game.player.touch_top.call(null,player);
}
})();
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.cst$kw$on_DASH_ground_QMARK_.cljs$core$IFn$_invoke$arity$1(player);
} else {
return and__4036__auto__;
}
})())?cljs.core.update.call(null,velocity,cljs.core.cst$kw$y,cljs.core._,(500)):velocity);
var new_animation__$1 = (cljs.core.truth_((function (){var and__4036__auto__ = (function (){var or__4047__auto__ = game.controls.key_pressed_QMARK_.call(null,cljs.core.cst$kw$Space);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return game.player.touch_top.call(null,player);
}
})();
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.cst$kw$on_DASH_ground_QMARK_.cljs$core$IFn$_invoke$arity$1(player);
} else {
return and__4036__auto__;
}
})())?"jump":new_animation);
var new_animation__$2 = ((cljs.core._EQ_.call(null,cljs.core.cst$kw$current_DASH_animation.cljs$core$IFn$_invoke$arity$1(player),"jump"))?"jump":new_animation__$1);
return game.player.play_animation.call(null,game.player.check_level_transition.call(null,cljs.core.assoc.call(null,player,cljs.core.cst$kw$flipped_QMARK_,flipped_QMARK_,cljs.core.cst$kw$velocity,velocity__$1)),new_animation__$2);
}
});
game.player.jump = (function game$player$jump(player){
return cljs.core.update_in.call(null,player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$velocity,cljs.core.cst$kw$y], null),cljs.core._,(500));
});
game.player.reposition_camera = (function game$player$reposition_camera(player){
var x = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(game.camera.world_to_screen_v.call(null,cljs.core.cst$kw$world_DASH_location.cljs$core$IFn$_invoke$arity$1(player)));
if((x > (500))){
game.camera.move.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(x - (500)),cljs.core.cst$kw$y,(0)], null));
} else {
}

if((x < (200))){
game.camera.move.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(x - (200)),cljs.core.cst$kw$y,(0)], null));
} else {
}

return player;
});
game.player.kill = (function game$player$kill(player){
if(cljs.core.truth_(cljs.core.cst$kw$dead_QMARK_.cljs$core$IFn$_invoke$arity$1(player))){
return player;
} else {
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,cljs.core.update.call(null,game.player.play_animation.call(null,player,"die"),cljs.core.cst$kw$lives_DASH_remaining,cljs.core.dec),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$velocity,cljs.core.cst$kw$x], null),(0)),cljs.core.cst$kw$dead_QMARK_,true);
}
});
game.player.update_STAR_ = (function game$player$update_STAR_(player,elapsed){
return game.game_object.update_STAR_.call(null,game.player.reposition_camera.call(null,cljs.core.update.call(null,game.player.not_dead_update.call(null,player,elapsed),cljs.core.cst$kw$velocity,game.utils.vector_add,cljs.core.cst$kw$fall_DASH_speed.cljs$core$IFn$_invoke$arity$1(player))),elapsed);
});
game.player.revive = (function game$player$revive(player){
return cljs.core.assoc.call(null,game.game_object.play_animation.call(null,player,"idle"),cljs.core.cst$kw$dead_QMARK_,false,cljs.core.cst$kw$world_DASH_location,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(-500),cljs.core.cst$kw$y,(-500)], null));
});

//# sourceMappingURL=player.js.map?rel=1545201364431
