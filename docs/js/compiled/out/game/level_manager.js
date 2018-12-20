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
goog.require('game.beldam');
goog.require('game.nurse');
goog.require('game.world');
goog.require('game.animation_strip');
goog.require('game.tile_map');
game.level_manager.context = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
game.level_manager.remove_object = (function game$level_manager$remove_object(game_object){
var seq__26062 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"animations","animations",140711296).cljs$core$IFn$_invoke$arity$1(game_object));
var chunk__26063 = null;
var count__26064 = (0);
var i__26065 = (0);
while(true){
if((i__26065 < count__26064)){
var vec__26066 = cljs.core._nth.call(null,chunk__26063,i__26065);
var _ = cljs.core.nth.call(null,vec__26066,(0),null);
var animation = cljs.core.nth.call(null,vec__26066,(1),null);
game.animation_strip.stop.call(null,animation);


var G__26072 = seq__26062;
var G__26073 = chunk__26063;
var G__26074 = count__26064;
var G__26075 = (i__26065 + (1));
seq__26062 = G__26072;
chunk__26063 = G__26073;
count__26064 = G__26074;
i__26065 = G__26075;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26062);
if(temp__5457__auto__){
var seq__26062__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26062__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__26062__$1);
var G__26076 = cljs.core.chunk_rest.call(null,seq__26062__$1);
var G__26077 = c__4461__auto__;
var G__26078 = cljs.core.count.call(null,c__4461__auto__);
var G__26079 = (0);
seq__26062 = G__26076;
chunk__26063 = G__26077;
count__26064 = G__26078;
i__26065 = G__26079;
continue;
} else {
var vec__26069 = cljs.core.first.call(null,seq__26062__$1);
var _ = cljs.core.nth.call(null,vec__26069,(0),null);
var animation = cljs.core.nth.call(null,vec__26069,(1),null);
game.animation_strip.stop.call(null,animation);


var G__26080 = cljs.core.next.call(null,seq__26062__$1);
var G__26081 = null;
var G__26082 = (0);
var G__26083 = (0);
seq__26062 = G__26080;
chunk__26063 = G__26081;
count__26064 = G__26082;
i__26065 = G__26083;
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

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"beldams","beldams",371251070),cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"nurses","nurses",-1762810457),cljs.core.PersistentVector.EMPTY);

var n__4518__auto___26084 = game.tile_map.map_width;
var x_26085 = (0);
while(true){
if((x_26085 < n__4518__auto___26084)){
var n__4518__auto___26086__$1 = game.tile_map.map_height;
var y_26087 = (0);
while(true){
if((y_26087 < n__4518__auto___26086__$1)){
var code_26088 = game.tile_map.cell_code_value.call(null,x_26085,y_26087);
if(cljs.core._EQ_.call(null,code_26088,"START")){
cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.update,new cljs.core.Keyword(null,"patient","patient",1178852672),((function (y_26087,x_26085,code_26088,n__4518__auto___26086__$1,n__4518__auto___26084){
return (function (patient){
return game.patient.play_animation.call(null,cljs.core.assoc.call(null,patient,new cljs.core.Keyword(null,"world-location","world-location",-1928727782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x_26085 * game.tile_map.tile_width),new cljs.core.Keyword(null,"y","y",-1757859776),(y_26087 * game.tile_map.tile_height)], null)),"idle");
});})(y_26087,x_26085,code_26088,n__4518__auto___26086__$1,n__4518__auto___26084))
);
} else {
}

if(cljs.core._EQ_.call(null,code_26088,"NURSE")){
cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.update,new cljs.core.Keyword(null,"nurses","nurses",-1762810457),cljs.core.conj,game.nurse.new_nurse.call(null,x_26085,y_26087));
} else {
}

var G__26089 = (y_26087 + (1));
y_26087 = G__26089;
continue;
} else {
}
break;
}

var G__26090 = (x_26085 + (1));
x_26085 = G__26090;
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
game.level_manager.update_spikes = (function game$level_manager$update_spikes(patient,spikes,elapsed){
return null;
});
game.level_manager.update_beldams = (function game$level_manager$update_beldams(patient,beldams,elapsed){
var beldams__$1 = cljs.core.mapv.call(null,(function (beldam){
return game.beldam.update_STAR_.call(null,beldam,elapsed);
}),beldams);
return cljs.core.reduce.call(null,((function (beldams__$1){
return (function (acc,beldam){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dead?","dead?",990391228).cljs$core$IFn$_invoke$arity$1(beldam))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057).cljs$core$IFn$_invoke$arity$1(beldam))){
return cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"beldams","beldams",371251070),cljs.core.conj,beldam);
} else {
game.level_manager.remove_object.call(null,beldam);

return acc;
}
} else {
if(game.utils.rectangle_intersects_QMARK_.call(null,game.game_object.collision_rectangle.call(null,patient),game.game_object.collision_rectangle.call(null,beldam))){
if((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(game.game_object.world_center.call(null,new cljs.core.Keyword(null,"patient","patient",1178852672).cljs$core$IFn$_invoke$arity$1(acc))) < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(beldam)))){
var patient__$1 = cljs.core.update.call(null,game.patient.jump.call(null,new cljs.core.Keyword(null,"patient","patient",1178852672).cljs$core$IFn$_invoke$arity$1(acc)),new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core._PLUS_,(5));
var beldam__$1 = cljs.core.assoc.call(null,game.game_object.play_animation.call(null,beldam,"die"),new cljs.core.Keyword(null,"dead?","dead?",990391228),true,new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
return cljs.core.update.call(null,cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"patient","patient",1178852672),patient__$1),new cljs.core.Keyword(null,"beldams","beldams",371251070),cljs.core.conj,beldam__$1);
} else {
return cljs.core.update.call(null,cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"patient","patient",1178852672),game.patient.kill.call(null,patient)),new cljs.core.Keyword(null,"beldams","beldams",371251070),cljs.core.conj,beldam);
}
} else {
return cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"beldams","beldams",371251070),cljs.core.conj,beldam);
}
}
});})(beldams__$1))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patient","patient",1178852672),patient,new cljs.core.Keyword(null,"beldams","beldams",371251070),cljs.core.PersistentVector.EMPTY], null),beldams__$1);
});
game.level_manager.update_nurses = (function game$level_manager$update_nurses(patient,nurses,elapsed){
var nurses__$1 = cljs.core.mapv.call(null,(function (nurse){
return game.nurse.update_STAR_.call(null,nurse,elapsed);
}),nurses);
return cljs.core.reduce.call(null,((function (nurses__$1){
return (function (acc,nurse){
if(game.nurse.intersects.call(null,nurse,patient)){
return cljs.core.update.call(null,cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"patient","patient",1178852672),game.patient.kill.call(null,patient)),new cljs.core.Keyword(null,"nurses","nurses",-1762810457),cljs.core.conj,nurse);
} else {
return cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"nurses","nurses",-1762810457),cljs.core.conj,nurse);
}
});})(nurses__$1))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patient","patient",1178852672),patient,new cljs.core.Keyword(null,"nurses","nurses",-1762810457),cljs.core.PersistentVector.EMPTY], null),nurses__$1);
});
game.level_manager.update_pills = (function game$level_manager$update_pills(patient,pills,elapsed){
return null;
});
game.level_manager.update_STAR_ = (function game$level_manager$update_STAR_(elapsed){
if(cljs.core.truth_(new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.level_manager.context)))){
return null;
} else {
var map__26091 = cljs.core.deref.call(null,game.level_manager.context);
var map__26091__$1 = (((((!((map__26091 == null))))?(((((map__26091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26091):map__26091);
var patient = cljs.core.get.call(null,map__26091__$1,new cljs.core.Keyword(null,"patient","patient",1178852672));
var records = cljs.core.get.call(null,map__26091__$1,new cljs.core.Keyword(null,"records","records",1326822832));
var practitioners = cljs.core.get.call(null,map__26091__$1,new cljs.core.Keyword(null,"practitioners","practitioners",-821312252));
var beldams = cljs.core.get.call(null,map__26091__$1,new cljs.core.Keyword(null,"beldams","beldams",371251070));
var nurses = cljs.core.get.call(null,map__26091__$1,new cljs.core.Keyword(null,"nurses","nurses",-1762810457));
var patient__$1 = game.level_manager.check_current_cell_code.call(null,game.patient.update_STAR_.call(null,patient,elapsed));
var map__26092 = game.level_manager.update_records.call(null,patient__$1,records,elapsed);
var map__26092__$1 = (((((!((map__26092 == null))))?(((((map__26092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26092):map__26092);
var patient__$2 = cljs.core.get.call(null,map__26092__$1,new cljs.core.Keyword(null,"patient","patient",1178852672));
var records__$1 = cljs.core.get.call(null,map__26092__$1,new cljs.core.Keyword(null,"records","records",1326822832));
var map__26093 = game.level_manager.update_practitioners.call(null,patient__$2,practitioners,elapsed);
var map__26093__$1 = (((((!((map__26093 == null))))?(((((map__26093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26093):map__26093);
var patient__$3 = cljs.core.get.call(null,map__26093__$1,new cljs.core.Keyword(null,"patient","patient",1178852672));
var practitioners__$1 = cljs.core.get.call(null,map__26093__$1,new cljs.core.Keyword(null,"practitioners","practitioners",-821312252));
var map__26094 = game.level_manager.update_beldams.call(null,patient__$3,beldams,elapsed);
var map__26094__$1 = (((((!((map__26094 == null))))?(((((map__26094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26094):map__26094);
var patient__$4 = cljs.core.get.call(null,map__26094__$1,new cljs.core.Keyword(null,"patient","patient",1178852672));
var beldams__$1 = cljs.core.get.call(null,map__26094__$1,new cljs.core.Keyword(null,"beldams","beldams",371251070));
var map__26095 = game.level_manager.update_nurses.call(null,patient__$4,nurses,elapsed);
var map__26095__$1 = (((((!((map__26095 == null))))?(((((map__26095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26095):map__26095);
var patient__$5 = cljs.core.get.call(null,map__26095__$1,new cljs.core.Keyword(null,"patient","patient",1178852672));
var nurses__$1 = cljs.core.get.call(null,map__26095__$1,new cljs.core.Keyword(null,"nurses","nurses",-1762810457));
cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"patient","patient",1178852672),patient__$5);

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"records","records",1326822832),records__$1);

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"beldams","beldams",371251070),beldams__$1);

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"nurses","nurses",-1762810457),nurses__$1);

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
