// Compiled by ClojureScript 1.10.439 {:optimize-constants true}
goog.provide('game.record');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('game.tile_map');
goog.require('game.animation_strip');
goog.require('game.game_object');
game.record.texture_path = (function game$record$texture_path(){
return "textures/";
});
game.record.new_record = (function game$record$new_record(cell_x,cell_y){
var ob = game.game_object.new_game_object.call(null);
var animations = new cljs.core.PersistentArrayMap(null, 1, ["idle",game.animation_strip.update_animation_strip.call(null,cljs.core.assoc.call(null,game.animation_strip.new_animation_strip.call(null,game.record.texture_path.call(null),(48),"idle"),cljs.core.cst$kw$loop_DASH_animation_QMARK_,true,cljs.core.cst$kw$frame_DASH_delay,0.15))], null);
return game.game_object.play_animation.call(null,cljs.core.assoc.call(null,ob,cljs.core.cst$kw$animations,animations,cljs.core.cst$kw$world_DASH_location,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(cell_x * game.tile_map.tile_width),cljs.core.cst$kw$y,(cell_y * game.tile_map.tile_height)], null),cljs.core.cst$kw$frame_DASH_width,game.tile_map.tile_width,cljs.core.cst$kw$frame_DASH_height,game.tile_map.tile_height,cljs.core.cst$kw$collision_DASH_rectangle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(9),cljs.core.cst$kw$y,(24),cljs.core.cst$kw$width,(30),cljs.core.cst$kw$height,(24)], null),cljs.core.cst$kw$draw_DASH_depth,(6),cljs.core.cst$kw$enabled_QMARK_,true),"idle");
});

//# sourceMappingURL=record.js.map?rel=1545335805181
