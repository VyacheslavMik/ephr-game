// Compiled by ClojureScript 1.10.439 {}
goog.provide('game.level_manager');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('game.utils');
goog.require('game.patient');
goog.require('game.record');
goog.require('game.practitioner');
goog.require('game.game_object');
goog.require('game.world');
goog.require('game.animation_strip');
goog.require('game.tile_map');
game.level_manager.context = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
game.level_manager.remove_object = (function game$level_manager$remove_object(game_object){
var seq__26058 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"animations","animations",140711296).cljs$core$IFn$_invoke$arity$1(game_object));
var chunk__26059 = null;
var count__26060 = (0);
var i__26061 = (0);
while(true){
if((i__26061 < count__26060)){
var vec__26062 = cljs.core._nth.call(null,chunk__26059,i__26061);
var _ = cljs.core.nth.call(null,vec__26062,(0),null);
var animation = cljs.core.nth.call(null,vec__26062,(1),null);
game.animation_strip.stop.call(null,animation);


var G__26068 = seq__26058;
var G__26069 = chunk__26059;
var G__26070 = count__26060;
var G__26071 = (i__26061 + (1));
seq__26058 = G__26068;
chunk__26059 = G__26069;
count__26060 = G__26070;
i__26061 = G__26071;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26058);
if(temp__5457__auto__){
var seq__26058__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26058__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__26058__$1);
var G__26072 = cljs.core.chunk_rest.call(null,seq__26058__$1);
var G__26073 = c__4461__auto__;
var G__26074 = cljs.core.count.call(null,c__4461__auto__);
var G__26075 = (0);
seq__26058 = G__26072;
chunk__26059 = G__26073;
count__26060 = G__26074;
i__26061 = G__26075;
continue;
} else {
var vec__26065 = cljs.core.first.call(null,seq__26058__$1);
var _ = cljs.core.nth.call(null,vec__26065,(0),null);
var animation = cljs.core.nth.call(null,vec__26065,(1),null);
game.animation_strip.stop.call(null,animation);


var G__26076 = cljs.core.next.call(null,seq__26058__$1);
var G__26077 = null;
var G__26078 = (0);
var G__26079 = (0);
seq__26058 = G__26076;
chunk__26059 = G__26077;
count__26060 = G__26078;
i__26061 = G__26079;
continue;
}
} else {
return null;
}
}
break;
}
});
game.level_manager.load_level = (function game$level_manager$load_level(level_number){
cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true);

return fetch(goog.string.format("maps/MAP%03d",level_number)).then((function (response){
return response.text();
})).then((function (s){
cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false);

game.world.clear.call(null);

game.tile_map.load_map.call(null,s);

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"records","records",1326822832),cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"practitioners","practitioners",-821312252),cljs.core.PersistentVector.EMPTY);

var n__4518__auto___26080 = game.tile_map.map_width;
var x_26081 = (0);
while(true){
if((x_26081 < n__4518__auto___26080)){
var n__4518__auto___26082__$1 = game.tile_map.map_height;
var y_26083 = (0);
while(true){
if((y_26083 < n__4518__auto___26082__$1)){
var code_26084 = game.tile_map.cell_code_value.call(null,x_26081,y_26083);
if(cljs.core._EQ_.call(null,code_26084,"START")){
cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.update,new cljs.core.Keyword(null,"patient","patient",1178852672),((function (y_26083,x_26081,code_26084,n__4518__auto___26082__$1,n__4518__auto___26080){
return (function (patient){
return game.patient.play_animation.call(null,cljs.core.assoc.call(null,patient,new cljs.core.Keyword(null,"world-location","world-location",-1928727782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x_26081 * game.tile_map.tile_width),new cljs.core.Keyword(null,"y","y",-1757859776),(y_26083 * game.tile_map.tile_height)], null)),"idle");
});})(y_26083,x_26081,code_26084,n__4518__auto___26082__$1,n__4518__auto___26080))
);
} else {
}

var G__26085 = (y_26083 + (1));
y_26083 = G__26085;
continue;
} else {
}
break;
}

var G__26086 = (x_26081 + (1));
x_26081 = G__26086;
continue;
} else {
}
break;
}

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"current-level","current-level",-11925890),level_number);

return cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"respawn-location","respawn-location",541992207),new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"patient","patient",1178852672).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.level_manager.context))));
}));
});
game.level_manager.init = (function game$level_manager$init(){
return cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"patient","patient",1178852672),game.patient.new_patient.call(null,game.level_manager.load_level,game.level_manager.context));
});
game.level_manager.check_current_cell_code = (function game$level_manager$check_current_cell_code(patient){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dead?","dead?",990391228).cljs$core$IFn$_invoke$arity$1(patient))){
return patient;
} else {
var code = game.tile_map.cell_code_value.call(null,game.tile_map.get_cell_by_pixel.call(null,new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(patient)));
if(cljs.core._EQ_.call(null,code,"DEAD")){
return game.patient.kill.call(null,patient);
} else {
return patient;
}
}
});
game.level_manager.update_records = (function game$level_manager$update_records(patient,records,elapsed){
var records__$1 = cljs.core.mapv.call(null,(function (record){
return game.game_object.update_STAR_.call(null,record,elapsed);
}),records);
var c = cljs.core.count.call(null,records__$1);
var records__$2 = cljs.core.filterv.call(null,((function (records__$1,c){
return (function (record){
var alive_QMARK_ = (!(game.utils.rectangle_intersects_QMARK_.call(null,game.game_object.collision_rectangle.call(null,patient),game.game_object.collision_rectangle.call(null,record))));
if(alive_QMARK_){
} else {
game.level_manager.remove_object.call(null,record);
}

return alive_QMARK_;
});})(records__$1,c))
,records__$1);
var score = (c - cljs.core.count.call(null,records__$2));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"records","records",1326822832),records__$2,new cljs.core.Keyword(null,"patient","patient",1178852672),cljs.core.update.call(null,patient,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core._PLUS_,(score * (10)))], null);
});
game.level_manager.update_practitioners = (function game$level_manager$update_practitioners(patient,practitioners,elapsed){
var practitioners__$1 = cljs.core.mapv.call(null,(function (practitioner){
return game.practitioner.update_STAR_.call(null,practitioner,elapsed);
}),practitioners);
return cljs.core.reduce.call(null,((function (practitioners__$1){
return (function (acc,practitioner){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dead?","dead?",990391228).cljs$core$IFn$_invoke$arity$1(practitioner))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057).cljs$core$IFn$_invoke$arity$1(practitioner))){
return cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"practitioners","practitioners",-821312252),cljs.core.conj,practitioner);
} else {
game.level_manager.remove_object.call(null,practitioner);

return acc;
}
} else {
if(game.utils.rectangle_intersects_QMARK_.call(null,game.game_object.collision_rectangle.call(null,patient),game.game_object.collision_rectangle.call(null,practitioner))){
if((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(game.game_object.world_center.call(null,new cljs.core.Keyword(null,"patient","patient",1178852672).cljs$core$IFn$_invoke$arity$1(acc))) < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(practitioner)))){
var patient__$1 = cljs.core.update.call(null,game.patient.jump.call(null,new cljs.core.Keyword(null,"patient","patient",1178852672).cljs$core$IFn$_invoke$arity$1(acc)),new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core._PLUS_,(5));
var practitioner__$1 = cljs.core.assoc.call(null,game.game_object.play_animation.call(null,practitioner,"die"),new cljs.core.Keyword(null,"dead?","dead?",990391228),true,new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
return cljs.core.update.call(null,cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"patient","patient",1178852672),patient__$1),new cljs.core.Keyword(null,"practitioners","practitioners",-821312252),cljs.core.conj,practitioner__$1);
} else {
return cljs.core.update.call(null,cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"patient","patient",1178852672),game.patient.kill.call(null,patient)),new cljs.core.Keyword(null,"practitioners","practitioners",-821312252),cljs.core.conj,practitioner);
}
} else {
return cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"practitioners","practitioners",-821312252),cljs.core.conj,practitioner);
}
}
});})(practitioners__$1))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patient","patient",1178852672),patient,new cljs.core.Keyword(null,"practitioners","practitioners",-821312252),cljs.core.PersistentVector.EMPTY], null),practitioners__$1);
});
game.level_manager.update_STAR_ = (function game$level_manager$update_STAR_(elapsed){
if(cljs.core.truth_(new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.level_manager.context)))){
return null;
} else {
var map__26087 = cljs.core.deref.call(null,game.level_manager.context);
var map__26087__$1 = (((((!((map__26087 == null))))?(((((map__26087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26087):map__26087);
var patient = cljs.core.get.call(null,map__26087__$1,new cljs.core.Keyword(null,"patient","patient",1178852672));
var records = cljs.core.get.call(null,map__26087__$1,new cljs.core.Keyword(null,"records","records",1326822832));
var practitioners = cljs.core.get.call(null,map__26087__$1,new cljs.core.Keyword(null,"practitioners","practitioners",-821312252));
var patient__$1 = game.level_manager.check_current_cell_code.call(null,game.patient.update_STAR_.call(null,patient,elapsed));
var map__26088 = game.level_manager.update_records.call(null,patient__$1,records,elapsed);
var map__26088__$1 = (((((!((map__26088 == null))))?(((((map__26088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26088):map__26088);
var patient__$2 = cljs.core.get.call(null,map__26088__$1,new cljs.core.Keyword(null,"patient","patient",1178852672));
var records__$1 = cljs.core.get.call(null,map__26088__$1,new cljs.core.Keyword(null,"records","records",1326822832));
var map__26089 = game.level_manager.update_practitioners.call(null,patient__$2,practitioners,elapsed);
var map__26089__$1 = (((((!((map__26089 == null))))?(((((map__26089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26089):map__26089);
var patient__$3 = cljs.core.get.call(null,map__26089__$1,new cljs.core.Keyword(null,"patient","patient",1178852672));
var practitioners__$1 = cljs.core.get.call(null,map__26089__$1,new cljs.core.Keyword(null,"practitioners","practitioners",-821312252));
cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"patient","patient",1178852672),patient__$3);

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"records","records",1326822832),records__$1);

return cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"practitioners","practitioners",-821312252),practitioners__$1);
}
});
game.level_manager.reload_level = (function game$level_manager$reload_level(){
var save_respawn = new cljs.core.Keyword(null,"respawn-location","respawn-location",541992207).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.level_manager.context));
game.level_manager.load_level.call(null,new cljs.core.Keyword(null,"current-level","current-level",-11925890).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.level_manager.context)));

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"respawn-location","respawn-location",541992207),save_respawn);

return cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"patient","patient",1178852672),new cljs.core.Keyword(null,"world-location","world-location",-1928727782)], null),save_respawn);
});
game.level_manager.revive_patient = (function game$level_manager$revive_patient(){
return cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.update,new cljs.core.Keyword(null,"patient","patient",1178852672),game.patient.revive);
});
