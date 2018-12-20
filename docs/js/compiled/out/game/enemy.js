// Compiled by ClojureScript 1.10.439 {:optimize-constants true}
goog.provide('game.enemy');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('game.utils');
goog.require('game.tile_map');
goog.require('game.animation_strip');
goog.require('game.game_object');
game.enemy.load_texture = (function game$enemy$load_texture(type,name){
return ["textures/Sprites/Monster",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
});
game.enemy.new_enemy = (function game$enemy$new_enemy(cell_x,cell_y,type){
var ob = game.game_object.new_game_object.call(null);
var animations = new cljs.core.PersistentArrayMap(null, 3, ["idle",game.animation_strip.update_animation_strip.call(null,cljs.core.assoc.call(null,game.animation_strip.new_animation_strip.call(null,game.enemy.load_texture.call(null,type,"Idle.png"),(48),"idle"),cljs.core.cst$kw$loop_DASH_animation_QMARK_,true)),"run",game.animation_strip.update_animation_strip.call(null,cljs.core.assoc.call(null,game.animation_strip.new_animation_strip.call(null,game.enemy.load_texture.call(null,type,"Run.png"),(48),"run"),cljs.core.cst$kw$loop_DASH_animation_QMARK_,true,cljs.core.cst$kw$frame_DASH_delay,0.2)),"die",game.animation_strip.update_animation_strip.call(null,cljs.core.assoc.call(null,game.animation_strip.new_animation_strip.call(null,game.enemy.load_texture.call(null,type,"Die.png"),(48),"die"),cljs.core.cst$kw$loop_DASH_animation_QMARK_,false))], null);
return game.game_object.play_animation.call(null,cljs.core.assoc.call(null,ob,cljs.core.cst$kw$animations,animations,cljs.core.cst$kw$world_DASH_location,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(cell_x * game.tile_map.tile_width),cljs.core.cst$kw$y,(cell_y * game.tile_map.tile_height)], null),cljs.core.cst$kw$fall_DASH_speed,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(20)], null),cljs.core.cst$kw$facing_DASH_left,true,cljs.core.cst$kw$dead_QMARK_,false,cljs.core.cst$kw$walk_DASH_speed,(60),cljs.core.cst$kw$frame_DASH_width,(48),cljs.core.cst$kw$frame_DASH_height,(48),cljs.core.cst$kw$collision_DASH_rectangle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(9),cljs.core.cst$kw$y,(1),cljs.core.cst$kw$width,(30),cljs.core.cst$kw$height,(46)], null),cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$code_DASH_based_DASH_blocks_QMARK_,true),"run");
});
game.enemy.update_velocity_and_flipped = (function game$enemy$update_velocity_and_flipped(enemy){
if(cljs.core.truth_(cljs.core.cst$kw$dead_QMARK_.cljs$core$IFn$_invoke$arity$1(enemy))){
return enemy;
} else {
var velocity = cljs.core.assoc.call(null,cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(enemy),cljs.core.cst$kw$x,(0));
var world_location = cljs.core.cst$kw$world_DASH_location.cljs$core$IFn$_invoke$arity$1(enemy);
var direction = (cljs.core.truth_(cljs.core.cst$kw$facing_DASH_left.cljs$core$IFn$_invoke$arity$1(enemy))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(-1),cljs.core.cst$kw$y,(0)], null):new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(1),cljs.core.cst$kw$y,(0)], null));
var flipped_QMARK_ = cljs.core.not.call(null,cljs.core.cst$kw$facing_DASH_left.cljs$core$IFn$_invoke$arity$1(enemy));
var direction__$1 = game.utils.vector_mul.call(null,direction,cljs.core.cst$kw$walk_DASH_speed.cljs$core$IFn$_invoke$arity$1(enemy));
var velocity__$1 = game.utils.vector_add.call(null,velocity,direction__$1);
var velocity__$2 = game.utils.vector_add.call(null,velocity__$1,cljs.core.cst$kw$fall_DASH_speed.cljs$core$IFn$_invoke$arity$1(enemy));
return cljs.core.assoc.call(null,enemy,cljs.core.cst$kw$velocity,velocity__$2,cljs.core.cst$kw$flipped_QMARK_,flipped_QMARK_);
}
});
game.enemy.update_facing_and_enabled = (function game$enemy$update_facing_and_enabled(enemy,world_location){
if(cljs.core.truth_(cljs.core.cst$kw$dead_QMARK_.cljs$core$IFn$_invoke$arity$1(enemy))){
if(cljs.core.truth_(cljs.core.cst$kw$finished_DASH_playing_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$animations.cljs$core$IFn$_invoke$arity$1(enemy).call(null,cljs.core.cst$kw$current_DASH_animation.cljs$core$IFn$_invoke$arity$1(enemy))))){
return cljs.core.assoc.call(null,enemy,cljs.core.cst$kw$enabled_QMARK_,false);
} else {
return enemy;
}
} else {
if(cljs.core._EQ_.call(null,world_location,cljs.core.cst$kw$world_DASH_location.cljs$core$IFn$_invoke$arity$1(enemy))){
return cljs.core.update.call(null,enemy,cljs.core.cst$kw$facing_DASH_left,cljs.core.not);
} else {
return enemy;
}
}
});
game.enemy.update_STAR_ = (function game$enemy$update_STAR_(enemy,elapsed){
return game.enemy.update_facing_and_enabled.call(null,game.game_object.update_STAR_.call(null,game.enemy.update_velocity_and_flipped.call(null,enemy),elapsed),cljs.core.cst$kw$world_DASH_location.cljs$core$IFn$_invoke$arity$1(enemy));
});

//# sourceMappingURL=enemy.js.map?rel=1545201364464
