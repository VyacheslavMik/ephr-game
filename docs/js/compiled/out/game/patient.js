// Compiled by ClojureScript 1.10.439 {}
goog.provide('game.patient');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('game.controls');
goog.require('game.utils');
goog.require('game.camera');
goog.require('game.animation_strip');
goog.require('game.game_object');
goog.require('game.world');
goog.require('game.tile_map');
game.patient.texture_path = (function game$patient$texture_path(name){
return ["textures/Sprites/Patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
});
game.patient.new_patient = (function game$patient$new_patient(load_level,context){
var ob = game.game_object.new_game_object.call(null);
var animations = new cljs.core.PersistentArrayMap(null, 4, ["idle",game.animation_strip.update_animation_strip.call(null,cljs.core.assoc.call(null,game.animation_strip.new_animation_strip.call(null,game.patient.texture_path.call(null,"Idle.png"),(48),"idle"),new cljs.core.Keyword(null,"loop-animation?","loop-animation?",2121213524),true)),"run",game.animation_strip.update_animation_strip.call(null,cljs.core.assoc.call(null,game.animation_strip.new_animation_strip.call(null,game.patient.texture_path.call(null,"Run.png"),(48),"run"),new cljs.core.Keyword(null,"loop-animation?","loop-animation?",2121213524),true)),"jump",game.animation_strip.update_animation_strip.call(null,cljs.core.assoc.call(null,game.animation_strip.new_animation_strip.call(null,game.patient.texture_path.call(null,"Jump.png"),(48),"jump"),new cljs.core.Keyword(null,"loop-animation?","loop-animation?",2121213524),false,new cljs.core.Keyword(null,"frame-delay","frame-delay",-1092400718),0.02,new cljs.core.Keyword(null,"next-animation","next-animation",133966088),"idle")),"die",game.animation_strip.update_animation_strip.call(null,cljs.core.assoc.call(null,game.animation_strip.new_animation_strip.call(null,game.patient.texture_path.call(null,"Die.png"),(48),"die"),new cljs.core.Keyword(null,"loop-animation?","loop-animation?",2121213524),false))], null);
return cljs.core.assoc.call(null,ob,new cljs.core.Keyword(null,"animations","animations",140711296),animations,new cljs.core.Keyword(null,"world-location","world-location",-1928727782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-500),new cljs.core.Keyword(null,"y","y",-1757859776),(-500)], null),new cljs.core.Keyword(null,"fall-speed","fall-speed",-473862639),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null),new cljs.core.Keyword(null,"move-scale","move-scale",354888646),(180),new cljs.core.Keyword(null,"dead?","dead?",990391228),false,new cljs.core.Keyword(null,"score","score",-1963588780),(0),new cljs.core.Keyword(null,"lives-remaining","lives-remaining",-518036388),(3),new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082),(48),new cljs.core.Keyword(null,"frame-height","frame-height",1932367973),(120),new cljs.core.Keyword(null,"collision-rectangle","collision-rectangle",-850175329),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(48),new cljs.core.Keyword(null,"height","height",1025178622),(119)], null),new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"load-level","load-level",868893349),load_level,new cljs.core.Keyword(null,"context","context",-830191113),context,new cljs.core.Keyword(null,"code-based-blocks?","code-based-blocks?",-1129736683),false);
});
game.patient.play_animation = (function game$patient$play_animation(patient,animation){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current-animation","current-animation",90875932).cljs$core$IFn$_invoke$arity$1(patient),animation)){
return patient;
} else {
return game.game_object.play_animation.call(null,patient,animation);
}
});
game.patient.check_level_transition = (function game$patient$check_level_transition(patient){
if(cljs.core.truth_(game.controls.key_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"KeyW","KeyW",-1083909461)))){
var center_cell = game.tile_map.get_cell_by_pixel.call(null,game.game_object.world_center.call(null,patient));
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
var loc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),parseInt((cljs.core.nth.call(null,code__$1,(2)) * game.tile_map.tile_width)),new cljs.core.Keyword(null,"y","y",-1757859776),parseInt((cljs.core.nth.call(null,code__$1,(3)) * game.tile_map.tile_height))], null);
new cljs.core.Keyword(null,"load-level","load-level",868893349).cljs$core$IFn$_invoke$arity$1(patient).call(null,parseInt(cljs.core.nth.call(null,code__$1,(1))));

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(patient),cljs.core.assoc,new cljs.core.Keyword(null,"respawn-location","respawn-location",541992207),loc);

return cljs.core.assoc.call(null,patient,new cljs.core.Keyword(null,"world-location","world-location",-1928727782),loc,new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
} else {
return patient;
}
} else {
return patient;
}
} else {
return patient;
}
});
game.patient.touch_right = (function game$patient$touch_right(patient){
var temp__5457__auto__ = game.controls.get_touch_state.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var touch = temp__5457__auto__;
return ((0) > (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(game.camera.world_to_screen_v.call(null,new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(patient))) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,touch))));
} else {
return null;
}
});
game.patient.touch_left = (function game$patient$touch_left(patient){
var temp__5457__auto__ = game.controls.get_touch_state.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var touch = temp__5457__auto__;
return ((0) < (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(game.camera.world_to_screen_v.call(null,new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(patient))) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,touch))));
} else {
return null;
}
});
game.patient.touch_top = (function game$patient$touch_top(patient){
var temp__5457__auto__ = game.controls.get_touch_state.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var touch = temp__5457__auto__;
return ((0) < (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(game.camera.world_to_screen_v.call(null,new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(patient))) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,touch))));
} else {
return null;
}
});
game.patient.not_dead_update = (function game$patient$not_dead_update(patient,elapsed){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dead?","dead?",990391228).cljs$core$IFn$_invoke$arity$1(patient))){
return patient;
} else {
var new_animation = (cljs.core.truth_((function (){var or__4047__auto__ = game.controls.key_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"KeyA","KeyA",656480366));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return game.patient.touch_left.call(null,patient);
}
})())?"run":(cljs.core.truth_((function (){var or__4047__auto__ = game.controls.key_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"KeyD","KeyD",-931763901));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return game.patient.touch_right.call(null,patient);
}
})())?"run":"idle"
));
var velocity = (cljs.core.truth_((function (){var or__4047__auto__ = game.controls.key_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"KeyA","KeyA",656480366));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return game.patient.touch_left.call(null,patient);
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(- new cljs.core.Keyword(null,"move-scale","move-scale",354888646).cljs$core$IFn$_invoke$arity$1(patient)),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(patient))], null):(cljs.core.truth_((function (){var or__4047__auto__ = game.controls.key_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"KeyD","KeyD",-931763901));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return game.patient.touch_right.call(null,patient);
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"move-scale","move-scale",354888646).cljs$core$IFn$_invoke$arity$1(patient),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(patient))], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(patient))], null)
));
var flipped_QMARK_ = (cljs.core.truth_((function (){var or__4047__auto__ = game.controls.key_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"KeyA","KeyA",656480366));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return game.patient.touch_left.call(null,patient);
}
})())?false:(cljs.core.truth_((function (){var or__4047__auto__ = game.controls.key_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"KeyD","KeyD",-931763901));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return game.patient.touch_right.call(null,patient);
}
})())?true:new cljs.core.Keyword(null,"flipped?","flipped?",-1554284978).cljs$core$IFn$_invoke$arity$1(patient)
));
var velocity__$1 = (cljs.core.truth_((function (){var and__4036__auto__ = (function (){var or__4047__auto__ = game.controls.key_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"Space","Space",1500017025));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return game.patient.touch_top.call(null,patient);
}
})();
if(cljs.core.truth_(and__4036__auto__)){
return new cljs.core.Keyword(null,"on-ground?","on-ground?",2124868541).cljs$core$IFn$_invoke$arity$1(patient);
} else {
return and__4036__auto__;
}
})())?cljs.core.update.call(null,velocity,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,(700)):velocity);
var new_animation__$1 = (cljs.core.truth_((function (){var and__4036__auto__ = (function (){var or__4047__auto__ = game.controls.key_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"Space","Space",1500017025));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return game.patient.touch_top.call(null,patient);
}
})();
if(cljs.core.truth_(and__4036__auto__)){
return new cljs.core.Keyword(null,"on-ground?","on-ground?",2124868541).cljs$core$IFn$_invoke$arity$1(patient);
} else {
return and__4036__auto__;
}
})())?"jump":new_animation);
var new_animation__$2 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current-animation","current-animation",90875932).cljs$core$IFn$_invoke$arity$1(patient),"jump"))?"jump":new_animation__$1);
return game.patient.play_animation.call(null,game.patient.check_level_transition.call(null,cljs.core.assoc.call(null,patient,new cljs.core.Keyword(null,"flipped?","flipped?",-1554284978),flipped_QMARK_,new cljs.core.Keyword(null,"velocity","velocity",-581524355),velocity__$1)),new_animation__$2);
}
});
game.patient.jump = (function game$patient$jump(patient){
return cljs.core.update_in.call(null,patient,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._,(500));
});
game.patient.reposition_camera = (function game$patient$reposition_camera(patient){
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(game.camera.world_to_screen_v.call(null,new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(patient)));
if((x > (500))){
game.camera.move.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x - (500)),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
} else {
}

if((x < (200))){
game.camera.move.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x - (200)),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
} else {
}

return patient;
});
game.patient.kill = (function game$patient$kill(patient){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dead?","dead?",990391228).cljs$core$IFn$_invoke$arity$1(patient))){
return patient;
} else {
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,cljs.core.update.call(null,game.patient.play_animation.call(null,patient,"die"),new cljs.core.Keyword(null,"lives-remaining","lives-remaining",-518036388),cljs.core.dec),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword(null,"x","x",2099068185)], null),(0)),new cljs.core.Keyword(null,"dead?","dead?",990391228),true);
}
});
game.patient.update_STAR_ = (function game$patient$update_STAR_(patient,elapsed){
return game.game_object.update_STAR_.call(null,game.patient.reposition_camera.call(null,cljs.core.update.call(null,game.patient.not_dead_update.call(null,patient,elapsed),new cljs.core.Keyword(null,"velocity","velocity",-581524355),game.utils.vector_add,new cljs.core.Keyword(null,"fall-speed","fall-speed",-473862639).cljs$core$IFn$_invoke$arity$1(patient))),elapsed);
});
game.patient.revive = (function game$patient$revive(patient){
return cljs.core.assoc.call(null,game.game_object.play_animation.call(null,patient,"idle"),new cljs.core.Keyword(null,"dead?","dead?",990391228),false,new cljs.core.Keyword(null,"world-location","world-location",-1928727782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-500),new cljs.core.Keyword(null,"y","y",-1757859776),(-500)], null));
});
