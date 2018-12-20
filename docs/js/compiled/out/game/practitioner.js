// Compiled by ClojureScript 1.10.439 {}
goog.provide('game.practitioner');
goog.require('cljs.core');
goog.require('game.utils');
goog.require('game.tile_map');
goog.require('game.animation_strip');
goog.require('game.game_object');
game.practitioner.load_texture = (function game$practitioner$load_texture(name){
return ["textures/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
});
game.practitioner.new_practitioner = (function game$practitioner$new_practitioner(cell_x,cell_y){
var ob = game.game_object.new_game_object.call(null);
var animations = new cljs.core.PersistentArrayMap(null, 3, ["idle",game.animation_strip.update_animation_strip.call(null,cljs.core.assoc.call(null,game.animation_strip.new_animation_strip.call(null,game.practitioner.load_texture.call(null,"Idle.png"),(48),"idle"),new cljs.core.Keyword(null,"loop-animation?","loop-animation?",2121213524),true)),"run",game.animation_strip.update_animation_strip.call(null,cljs.core.assoc.call(null,game.animation_strip.new_animation_strip.call(null,game.practitioner.load_texture.call(null,"Run.png"),(48),"run"),new cljs.core.Keyword(null,"loop-animation?","loop-animation?",2121213524),true,new cljs.core.Keyword(null,"frame-delay","frame-delay",-1092400718),0.2)),"die",game.animation_strip.update_animation_strip.call(null,cljs.core.assoc.call(null,game.animation_strip.new_animation_strip.call(null,game.practitioner.load_texture.call(null,"Die.png"),(48),"die"),new cljs.core.Keyword(null,"loop-animation?","loop-animation?",2121213524),false))], null);
return game.game_object.play_animation.call(null,cljs.core.assoc.call(null,ob,new cljs.core.Keyword(null,"animations","animations",140711296),animations,new cljs.core.Keyword(null,"world-location","world-location",-1928727782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(cell_x * game.tile_map.tile_width),new cljs.core.Keyword(null,"y","y",-1757859776),(cell_y * game.tile_map.tile_height)], null),new cljs.core.Keyword(null,"fall-speed","fall-speed",-473862639),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null),new cljs.core.Keyword(null,"facing-left","facing-left",547502613),true,new cljs.core.Keyword(null,"dead?","dead?",990391228),false,new cljs.core.Keyword(null,"walk-speed","walk-speed",89958286),(60),new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082),(48),new cljs.core.Keyword(null,"frame-height","frame-height",1932367973),(48),new cljs.core.Keyword(null,"collision-rectangle","collision-rectangle",-850175329),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(9),new cljs.core.Keyword(null,"y","y",-1757859776),(1),new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"height","height",1025178622),(46)], null),new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"code-based-blocks?","code-based-blocks?",-1129736683),true),"run");
});
game.practitioner.update_velocity_and_flipped = (function game$practitioner$update_velocity_and_flipped(practitioner){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dead?","dead?",990391228).cljs$core$IFn$_invoke$arity$1(practitioner))){
return practitioner;
} else {
var velocity = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(practitioner),new cljs.core.Keyword(null,"x","x",2099068185),(0));
var world_location = new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(practitioner);
var direction = (cljs.core.truth_(new cljs.core.Keyword(null,"facing-left","facing-left",547502613).cljs$core$IFn$_invoke$arity$1(practitioner))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var flipped_QMARK_ = cljs.core.not.call(null,new cljs.core.Keyword(null,"facing-left","facing-left",547502613).cljs$core$IFn$_invoke$arity$1(practitioner));
var direction__$1 = game.utils.vector_mul.call(null,direction,new cljs.core.Keyword(null,"walk-speed","walk-speed",89958286).cljs$core$IFn$_invoke$arity$1(practitioner));
var velocity__$1 = game.utils.vector_add.call(null,velocity,direction__$1);
var velocity__$2 = game.utils.vector_add.call(null,velocity__$1,new cljs.core.Keyword(null,"fall-speed","fall-speed",-473862639).cljs$core$IFn$_invoke$arity$1(practitioner));
return cljs.core.assoc.call(null,practitioner,new cljs.core.Keyword(null,"velocity","velocity",-581524355),velocity__$2,new cljs.core.Keyword(null,"flipped?","flipped?",-1554284978),flipped_QMARK_);
}
});
game.practitioner.update_facing_and_enabled = (function game$practitioner$update_facing_and_enabled(practitioner,world_location){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dead?","dead?",990391228).cljs$core$IFn$_invoke$arity$1(practitioner))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"finished-playing?","finished-playing?",1278365337).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"animations","animations",140711296).cljs$core$IFn$_invoke$arity$1(practitioner).call(null,new cljs.core.Keyword(null,"current-animation","current-animation",90875932).cljs$core$IFn$_invoke$arity$1(practitioner))))){
return cljs.core.assoc.call(null,practitioner,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),false);
} else {
return practitioner;
}
} else {
if(cljs.core._EQ_.call(null,world_location,new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(practitioner))){
return cljs.core.update.call(null,practitioner,new cljs.core.Keyword(null,"facing-left","facing-left",547502613),cljs.core.not);
} else {
return practitioner;
}
}
});
game.practitioner.update_STAR_ = (function game$practitioner$update_STAR_(practitioner,elapsed){
return game.practitioner.update_facing_and_enabled.call(null,game.game_object.update_STAR_.call(null,game.practitioner.update_velocity_and_flipped.call(null,practitioner),elapsed),new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(practitioner));
});
