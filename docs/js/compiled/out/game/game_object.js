// Compiled by ClojureScript 1.10.439 {}
goog.provide('game.game_object');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('game.utils');
goog.require('game.camera');
goog.require('game.tile_map');
goog.require('game.animation_strip');
game.game_object.world_center = (function game$game_object$world_center(game_object){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(game_object)) + (new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082).cljs$core$IFn$_invoke$arity$1(game_object) / (2))),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(game_object)) + (new cljs.core.Keyword(null,"frame-height","frame-height",1932367973).cljs$core$IFn$_invoke$arity$1(game_object) / (2)))], null);
});
game.game_object.world_rectangle = (function game$game_object$world_rectangle(game_object){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(game_object)),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(game_object)),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082).cljs$core$IFn$_invoke$arity$1(game_object),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"frame-height","frame-height",1932367973).cljs$core$IFn$_invoke$arity$1(game_object)], null);
});
game.game_object.collision_rectangle = (function game$game_object$collision_rectangle(game_object){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(game_object)) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"collision-rectangle","collision-rectangle",-850175329).cljs$core$IFn$_invoke$arity$1(game_object))),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(game_object)) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"collision-rectangle","collision-rectangle",-850175329).cljs$core$IFn$_invoke$arity$1(game_object))),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"collision-rectangle","collision-rectangle",-850175329).cljs$core$IFn$_invoke$arity$1(game_object)),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"collision-rectangle","collision-rectangle",-850175329).cljs$core$IFn$_invoke$arity$1(game_object))], null);
});
game.game_object.play_animation = (function game$game_object$play_animation(game_object,name){
if(clojure.string.blank_QMARK_.call(null,name)){
return game_object;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,new cljs.core.Keyword(null,"animations","animations",140711296).cljs$core$IFn$_invoke$arity$1(game_object),name))){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,game_object,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animations","animations",140711296),new cljs.core.Keyword(null,"current-animation","current-animation",90875932).cljs$core$IFn$_invoke$arity$1(game_object)], null),game.animation_strip.stop),new cljs.core.Keyword(null,"current-animation","current-animation",90875932),name),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animations","animations",140711296),name], null),game.animation_strip.play);
} else {
return game_object;
}
}
});
game.game_object.update_animation = (function game$game_object$update_animation(game_object,elapsed){
var cur = new cljs.core.Keyword(null,"current-animation","current-animation",90875932).cljs$core$IFn$_invoke$arity$1(game_object);
var animation = cljs.core.get.call(null,new cljs.core.Keyword(null,"animations","animations",140711296).cljs$core$IFn$_invoke$arity$1(game_object),cur);
if(cljs.core.truth_(new cljs.core.Keyword(null,"finished-playing?","finished-playing?",1278365337).cljs$core$IFn$_invoke$arity$1(animation))){
return game.game_object.play_animation.call(null,game_object,new cljs.core.Keyword(null,"next-animation","next-animation",133966088).cljs$core$IFn$_invoke$arity$1(animation));
} else {
return cljs.core.update_in.call(null,game_object,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animations","animations",140711296),cur], null),game.animation_strip.update_STAR_,elapsed);
}
});
game.game_object.horizontal_collision_test = (function game$game_object$horizontal_collision_test(move_amount,game_object){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(move_amount),(0))){
return move_amount;
} else {
var after_move_rect = cljs.core.update.call(null,game.game_object.collision_rectangle.call(null,game_object),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(move_amount));
var corner1 = (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(move_amount) < (0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),game.utils.rectangle_left.cljs$core$IFn$_invoke$arity$1(after_move_rect),new cljs.core.Keyword(null,"y","y",-1757859776),(game.utils.rectangle_top.cljs$core$IFn$_invoke$arity$1(after_move_rect) + (1))], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),game.utils.rectangle_right.call(null,after_move_rect),new cljs.core.Keyword(null,"y","y",-1757859776),(game.utils.rectangle_top.cljs$core$IFn$_invoke$arity$1(after_move_rect) + (1))], null));
var corner2 = (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(move_amount) < (0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),game.utils.rectangle_left.cljs$core$IFn$_invoke$arity$1(after_move_rect),new cljs.core.Keyword(null,"y","y",-1757859776),(game.utils.rectangle_bottom.call(null,after_move_rect) - (1))], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),game.utils.rectangle_right.call(null,after_move_rect),new cljs.core.Keyword(null,"y","y",-1757859776),(game.utils.rectangle_bottom.call(null,after_move_rect) - (1))], null));
var map_cell1 = game.tile_map.get_cell_by_pixel.call(null,corner1);
var map_cell2 = game.tile_map.get_cell_by_pixel.call(null,corner2);
if(((cljs.core.not.call(null,game.tile_map.cell_passable_QMARK_.call(null,map_cell1))) || (cljs.core.not.call(null,game.tile_map.cell_passable_QMARK_.call(null,map_cell2))))){
return cljs.core.assoc.call(null,move_amount,new cljs.core.Keyword(null,"x","x",2099068185),(0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"code-based-blocks?","code-based-blocks?",-1129736683).cljs$core$IFn$_invoke$arity$1(game_object))){
if(((cljs.core._EQ_.call(null,game.tile_map.cell_code_value.call(null,map_cell1),"BLOCK")) || (cljs.core._EQ_.call(null,game.tile_map.cell_code_value.call(null,map_cell2),"BLOCK")))){
return cljs.core.assoc.call(null,move_amount,new cljs.core.Keyword(null,"x","x",2099068185),(0));
} else {
return move_amount;
}
} else {
return move_amount;
}
}
}
});
game.game_object.on_ground_QMARK_ = cljs.core.atom.call(null,false);
game.game_object.vertical_collision_test = (function game$game_object$vertical_collision_test(move_amount,game_object){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(move_amount),(0))){
return move_amount;
} else {
var after_move_rect = cljs.core.update.call(null,cljs.core.update.call(null,game.game_object.collision_rectangle.call(null,game_object),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(move_amount)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(move_amount));
var corner1 = (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(move_amount) < (0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(game.utils.rectangle_left.cljs$core$IFn$_invoke$arity$1(after_move_rect) + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),game.utils.rectangle_top.cljs$core$IFn$_invoke$arity$1(after_move_rect)], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(game.utils.rectangle_left.cljs$core$IFn$_invoke$arity$1(after_move_rect) + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),game.utils.rectangle_bottom.call(null,after_move_rect)], null));
var corner2 = (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(move_amount) < (0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(game.utils.rectangle_right.call(null,after_move_rect) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),game.utils.rectangle_top.cljs$core$IFn$_invoke$arity$1(after_move_rect)], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(game.utils.rectangle_right.call(null,after_move_rect) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),game.utils.rectangle_bottom.call(null,after_move_rect)], null));
var map_cell1 = game.tile_map.get_cell_by_pixel.call(null,corner1);
var map_cell2 = game.tile_map.get_cell_by_pixel.call(null,corner2);
if(((cljs.core.not.call(null,game.tile_map.cell_passable_QMARK_.call(null,map_cell1))) || (cljs.core.not.call(null,game.tile_map.cell_passable_QMARK_.call(null,map_cell2))))){
if((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(move_amount) > (0))){
cljs.core.reset_BANG_.call(null,game.game_object.on_ground_QMARK_,true);
} else {
}

return cljs.core.assoc.call(null,move_amount,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"code-based-blocks?","code-based-blocks?",-1129736683).cljs$core$IFn$_invoke$arity$1(game_object))){
if(((cljs.core._EQ_.call(null,game.tile_map.cell_code_value.call(null,map_cell1),"BLOCK")) || (cljs.core._EQ_.call(null,game.tile_map.cell_code_value.call(null,map_cell2),"BLOCK")))){
if((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(move_amount) > (0))){
cljs.core.reset_BANG_.call(null,game.game_object.on_ground_QMARK_,true);
} else {
}

return cljs.core.assoc.call(null,move_amount,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
} else {
return move_amount;
}
} else {
return move_amount;
}
}
}
});
game.game_object.update_STAR_ = (function game$game_object$update_STAR_(game_object,elapsed){
if(cljs.core.truth_(new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057).cljs$core$IFn$_invoke$arity$1(game_object))){
var game_object__$1 = game.game_object.update_animation.call(null,game_object,elapsed);
var _ = cljs.core.reset_BANG_.call(null,game.game_object.on_ground_QMARK_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(game_object__$1)),(0)))?new cljs.core.Keyword(null,"on-ground?","on-ground?",2124868541).cljs$core$IFn$_invoke$arity$1(game_object__$1):false));
var game_object__$2 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(game_object__$1)),(0)))?game_object__$1:cljs.core.assoc.call(null,game_object__$1,new cljs.core.Keyword(null,"on-ground?","on-ground?",2124868541),false));
var move_amount = game.game_object.vertical_collision_test.call(null,game.game_object.horizontal_collision_test.call(null,game.utils.vector_mul.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(game_object__$2),elapsed),game_object__$2),game_object__$2);
var new_position = game.utils.vector_add.call(null,new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(game_object__$2),move_amount);
var new_position__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),game.utils.clamp.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new_position),(0),(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(game.camera.world_rectangle.call(null)) - new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082).cljs$core$IFn$_invoke$arity$1(game_object__$2))),new cljs.core.Keyword(null,"y","y",-1757859776),game.utils.clamp.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new_position),((2) * (- game.tile_map.tile_height)),(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(game.camera.world_rectangle.call(null)) - new cljs.core.Keyword(null,"frame-height","frame-height",1932367973).cljs$core$IFn$_invoke$arity$1(game_object__$2)))], null);
var velocity = new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(game_object__$2);
var velocity__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(move_amount),(0)))?cljs.core.assoc.call(null,velocity,new cljs.core.Keyword(null,"x","x",2099068185),(0)):velocity);
var velocity__$2 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(move_amount),(0)))?cljs.core.assoc.call(null,velocity__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0)):velocity__$1);
var temp__5457__auto___26045 = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"animations","animations",140711296).cljs$core$IFn$_invoke$arity$1(game_object__$2),new cljs.core.Keyword(null,"current-animation","current-animation",90875932).cljs$core$IFn$_invoke$arity$1(game_object__$2)));
if(cljs.core.truth_(temp__5457__auto___26045)){
var sprite_26046 = temp__5457__auto___26045;
var G__26044_26047 = new cljs.core.Keyword(null,"flipped?","flipped?",-1554284978).cljs$core$IFn$_invoke$arity$1(game_object__$2);
if(cljs.core._EQ_.call(null,true,G__26044_26047)){
sprite_26046.scale.x = (-1);
} else {
if(cljs.core._EQ_.call(null,false,G__26044_26047)){
sprite_26046.scale.x = (1);
} else {

}
}

sprite_26046.position.set((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new_position__$1) + (sprite_26046.width / (2))),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new_position__$1));
} else {
}

return cljs.core.assoc.call(null,game_object__$2,new cljs.core.Keyword(null,"on-ground?","on-ground?",2124868541),cljs.core.deref.call(null,game.game_object.on_ground_QMARK_),new cljs.core.Keyword(null,"world-location","world-location",-1928727782),new_position__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355),velocity__$2);
} else {
return game_object;
}
});
game.game_object.new_game_object = (function game$game_object$new_game_object(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"animations","animations",140711296),new cljs.core.Keyword(null,"frame-height","frame-height",1932367973),new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082),new cljs.core.Keyword(null,"flipped?","flipped?",-1554284978),new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),new cljs.core.Keyword(null,"collide-height","collide-height",-692080304),new cljs.core.Keyword(null,"collide-width","collide-width",-1058649232),new cljs.core.Keyword(null,"code-based-blocks?","code-based-blocks?",-1129736683),new cljs.core.Keyword(null,"draw-depth","draw-depth",-908165607),new cljs.core.Keyword(null,"world-location","world-location",-1928727782),new cljs.core.Keyword(null,"current-animation","current-animation",90875932),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword(null,"on-ground?","on-ground?",2124868541),new cljs.core.Keyword(null,"collision-rectangle","collision-rectangle",-850175329)],[cljs.core.PersistentArrayMap.EMPTY,(0),(0),false,false,(0),(0),true,(5),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),false,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0)], null)]);
});
