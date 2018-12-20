// Compiled by ClojureScript 1.10.439 {}
goog.provide('game.record');
goog.require('cljs.core');
goog.require('game.tile_map');
goog.require('game.animation_strip');
goog.require('game.game_object');
game.record.texture_path = (function game$record$texture_path(){
return "textures/";
});
game.record.new_record = (function game$record$new_record(cell_x,cell_y){
var ob = game.game_object.new_game_object.call(null);
var animations = new cljs.core.PersistentArrayMap(null, 1, ["idle",game.animation_strip.update_animation_strip.call(null,cljs.core.assoc.call(null,game.animation_strip.new_animation_strip.call(null,game.record.texture_path.call(null),(48),"idle"),new cljs.core.Keyword(null,"loop-animation?","loop-animation?",2121213524),true,new cljs.core.Keyword(null,"frame-delay","frame-delay",-1092400718),0.15))], null);
return game.game_object.play_animation.call(null,cljs.core.assoc.call(null,ob,new cljs.core.Keyword(null,"animations","animations",140711296),animations,new cljs.core.Keyword(null,"world-location","world-location",-1928727782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(cell_x * game.tile_map.tile_width),new cljs.core.Keyword(null,"y","y",-1757859776),(cell_y * game.tile_map.tile_height)], null),new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082),game.tile_map.tile_width,new cljs.core.Keyword(null,"frame-height","frame-height",1932367973),game.tile_map.tile_height,new cljs.core.Keyword(null,"collision-rectangle","collision-rectangle",-850175329),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(9),new cljs.core.Keyword(null,"y","y",-1757859776),(24),new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"height","height",1025178622),(24)], null),new cljs.core.Keyword(null,"draw-depth","draw-depth",-908165607),(6),new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true),"idle");
});
