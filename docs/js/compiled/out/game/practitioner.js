// Compiled by ClojureScript 1.10.439 {}
goog.provide('game.practitioner');
goog.require('cljs.core');
goog.require('game.utils');
goog.require('game.tile_map');
goog.require('game.animation_strip');
goog.require('game.game_object');
game.practitioner.load_texture = (function game$practitioner$load_texture(name){
return ["textures/Sprites/Practitioner/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
});
game.practitioner.new_practitioner = (function game$practitioner$new_practitioner(cell_x,cell_y){
var ob = game.game_object.new_game_object.call(null);
var animations = new cljs.core.PersistentArrayMap(null, 2, ["attack",game.animation_strip.update_animation_strip.call(null,cljs.core.assoc.call(null,game.animation_strip.new_animation_strip.call(null,game.practitioner.load_texture.call(null,"Attack.png"),(48),"attack"),new cljs.core.Keyword(null,"loop-animation?","loop-animation?",2121213524),true)),"surrender",game.animation_strip.update_animation_strip.call(null,cljs.core.assoc.call(null,game.animation_strip.new_animation_strip.call(null,game.practitioner.load_texture.call(null,"Surrender.png"),(48),"surrender"),new cljs.core.Keyword(null,"loop-animation?","loop-animation?",2121213524),true,new cljs.core.Keyword(null,"frame-delay","frame-delay",-1092400718),0.2))], null);
return game.game_object.play_animation.call(null,cljs.core.assoc.call(null,ob,new cljs.core.Keyword(null,"animations","animations",140711296),animations,new cljs.core.Keyword(null,"world-location","world-location",-1928727782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(cell_x * game.tile_map.tile_width),new cljs.core.Keyword(null,"y","y",-1757859776),(((cell_y + (1)) * game.tile_map.tile_height) - (120))], null),new cljs.core.Keyword(null,"facing-left","facing-left",547502613),true,new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082),(48),new cljs.core.Keyword(null,"frame-height","frame-height",1932367973),(120),new cljs.core.Keyword(null,"collision-rectangle","collision-rectangle",-850175329),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1),new cljs.core.Keyword(null,"width","width",-384071477),(48),new cljs.core.Keyword(null,"height","height",1025178622),(119)], null),new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"surrendered?","surrendered?",-1235061840),false),"attack");
});
