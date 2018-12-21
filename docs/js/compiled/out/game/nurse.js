// Compiled by ClojureScript 1.10.439 {}
goog.provide('game.nurse');
goog.require('cljs.core');
goog.require('game.utils');
goog.require('game.tile_map');
goog.require('game.animation_strip');
goog.require('game.game_object');
game.nurse.load_texture = (function game$nurse$load_texture(name){
return ["textures/Sprites/Nurse/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
});
game.nurse.new_nurse = (function game$nurse$new_nurse(cell_x,cell_y){
var ob = game.game_object.new_game_object.call(null);
var animations = new cljs.core.PersistentArrayMap(null, 1, ["run",game.animation_strip.update_animation_strip.call(null,cljs.core.assoc.call(null,game.animation_strip.new_animation_strip.call(null,game.nurse.load_texture.call(null,"Run.png"),(134),"run",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(8),new cljs.core.Keyword(null,"y","y",-1757859776),(36),new cljs.core.Keyword(null,"width","width",-384071477),(68),new cljs.core.Keyword(null,"height","height",1025178622),(88)], null)),new cljs.core.Keyword(null,"loop-animation?","loop-animation?",2121213524),true,new cljs.core.Keyword(null,"frame-delay","frame-delay",-1092400718),0.2))], null);
return game.game_object.play_animation.call(null,cljs.core.assoc.call(null,ob,new cljs.core.Keyword(null,"animations","animations",140711296),animations,new cljs.core.Keyword(null,"world-location","world-location",-1928727782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(cell_x * game.tile_map.tile_width),new cljs.core.Keyword(null,"y","y",-1757859776),((cell_y * game.tile_map.tile_height) - (40))], null),new cljs.core.Keyword(null,"facing-left","facing-left",547502613),true,new cljs.core.Keyword(null,"flipped?","flipped?",-1554284978),false,new cljs.core.Keyword(null,"dead?","dead?",990391228),false,new cljs.core.Keyword(null,"walk-speed","walk-speed",89958286),(60),new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082),(134),new cljs.core.Keyword(null,"frame-height","frame-height",1932367973),(133),new cljs.core.Keyword(null,"collision-rectangle","collision-rectangle",-850175329),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(68),new cljs.core.Keyword(null,"height","height",1025178622),(88)], null),new cljs.core.Keyword(null,"code-based-blocks?","code-based-blocks?",-1129736683),false,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true),"run");
});
game.nurse.intersects = (function game$nurse$intersects(nurse,patient){
var patient_collision_rectangle = game.game_object.collision_rectangle.call(null,patient);
var nurse_collision_rectangle = game.game_object.collision_rectangle.call(null,nurse);
return game.utils.rectangle_intersects_QMARK_.call(null,patient_collision_rectangle,nurse_collision_rectangle);
});
game.nurse.update_velocity_and_flipped = (function game$nurse$update_velocity_and_flipped(nurse){
var velocity = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(nurse),new cljs.core.Keyword(null,"x","x",2099068185),(0));
var world_location = new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(nurse);
var direction = (cljs.core.truth_(new cljs.core.Keyword(null,"facing-left","facing-left",547502613).cljs$core$IFn$_invoke$arity$1(nurse))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var flipped_QMARK_ = new cljs.core.Keyword(null,"facing-left","facing-left",547502613).cljs$core$IFn$_invoke$arity$1(nurse);
var direction__$1 = game.utils.vector_mul.call(null,direction,new cljs.core.Keyword(null,"walk-speed","walk-speed",89958286).cljs$core$IFn$_invoke$arity$1(nurse));
var velocity__$1 = game.utils.vector_add.call(null,velocity,direction__$1);
return cljs.core.assoc.call(null,nurse,new cljs.core.Keyword(null,"velocity","velocity",-581524355),velocity__$1,new cljs.core.Keyword(null,"flipped?","flipped?",-1554284978),flipped_QMARK_);
});
game.nurse.update_facing_and_enabled = (function game$nurse$update_facing_and_enabled(nurse,world_location){
if(cljs.core._EQ_.call(null,world_location,new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(nurse))){
return cljs.core.update.call(null,nurse,new cljs.core.Keyword(null,"facing-left","facing-left",547502613),cljs.core.not);
} else {
return nurse;
}
});
game.nurse.update_STAR_ = (function game$nurse$update_STAR_(nurse,elapsed){
return game.nurse.update_facing_and_enabled.call(null,game.game_object.update_STAR_.call(null,game.nurse.update_velocity_and_flipped.call(null,nurse),elapsed),new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(nurse));
});
