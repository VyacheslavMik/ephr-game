// Compiled by ClojureScript 1.10.439 {}
goog.provide('game.level_manager');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('game.utils');
goog.require('game.patient');
goog.require('game.doc');
goog.require('game.practitioner');
goog.require('game.game_object');
goog.require('game.beldam');
goog.require('game.spike');
goog.require('game.pill');
goog.require('game.nurse');
goog.require('game.world');
goog.require('game.animation_strip');
goog.require('game.tile_map');
goog.require('clojure.string');
game.level_manager.context = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
game.level_manager.remove_object = (function game$level_manager$remove_object(game_object){
var seq__26084 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"animations","animations",140711296).cljs$core$IFn$_invoke$arity$1(game_object));
var chunk__26085 = null;
var count__26086 = (0);
var i__26087 = (0);
while(true){
if((i__26087 < count__26086)){
var vec__26088 = cljs.core._nth.call(null,chunk__26085,i__26087);
var _ = cljs.core.nth.call(null,vec__26088,(0),null);
var animation = cljs.core.nth.call(null,vec__26088,(1),null);
game.animation_strip.stop.call(null,animation);


var G__26094 = seq__26084;
var G__26095 = chunk__26085;
var G__26096 = count__26086;
var G__26097 = (i__26087 + (1));
seq__26084 = G__26094;
chunk__26085 = G__26095;
count__26086 = G__26096;
i__26087 = G__26097;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26084);
if(temp__5457__auto__){
var seq__26084__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26084__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__26084__$1);
var G__26098 = cljs.core.chunk_rest.call(null,seq__26084__$1);
var G__26099 = c__4461__auto__;
var G__26100 = cljs.core.count.call(null,c__4461__auto__);
var G__26101 = (0);
seq__26084 = G__26098;
chunk__26085 = G__26099;
count__26086 = G__26100;
i__26087 = G__26101;
continue;
} else {
var vec__26091 = cljs.core.first.call(null,seq__26084__$1);
var _ = cljs.core.nth.call(null,vec__26091,(0),null);
var animation = cljs.core.nth.call(null,vec__26091,(1),null);
game.animation_strip.stop.call(null,animation);


var G__26102 = cljs.core.next.call(null,seq__26084__$1);
var G__26103 = null;
var G__26104 = (0);
var G__26105 = (0);
seq__26084 = G__26102;
chunk__26085 = G__26103;
count__26086 = G__26104;
i__26087 = G__26105;
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

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"docs","docs",-1974280502),cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"practitioners","practitioners",-821312252),cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"beldams","beldams",371251070),cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"spikes","spikes",289662129),cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"pills","pills",-85353539),cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"nurses","nurses",-1762810457),cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"telepors","telepors",-1119717911),cljs.core.PersistentArrayMap.EMPTY);

var n__4518__auto___26106 = game.tile_map.map_width;
var x_26107 = (0);
while(true){
if((x_26107 < n__4518__auto___26106)){
var n__4518__auto___26108__$1 = game.tile_map.map_height;
var y_26109 = (0);
while(true){
if((y_26109 < n__4518__auto___26108__$1)){
var code_26110 = game.tile_map.cell_code_value.call(null,x_26107,y_26109);
if(cljs.core._EQ_.call(null,code_26110,"START")){
cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.update,new cljs.core.Keyword(null,"patient","patient",1178852672),((function (y_26109,x_26107,code_26110,n__4518__auto___26108__$1,n__4518__auto___26106){
return (function (patient){
return game.patient.play_animation.call(null,cljs.core.assoc.call(null,patient,new cljs.core.Keyword(null,"world-location","world-location",-1928727782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x_26107 * game.tile_map.tile_width),new cljs.core.Keyword(null,"y","y",-1757859776),((y_26109 * game.tile_map.tile_height) - (51))], null)),"idle");
});})(y_26109,x_26107,code_26110,n__4518__auto___26108__$1,n__4518__auto___26106))
);
} else {
}

if(cljs.core.truth_((function (){var and__4036__auto__ = code_26110;
if(cljs.core.truth_(and__4036__auto__)){
return clojure.string.starts_with_QMARK_.call(null,code_26110,"P");
} else {
return and__4036__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teleports","teleports",1782328857),code_26110], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x_26107,new cljs.core.Keyword(null,"y","y",-1757859776),y_26109], null));
} else {
}

if(cljs.core._EQ_.call(null,code_26110,"BELDAM")){
cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.update,new cljs.core.Keyword(null,"beldams","beldams",371251070),cljs.core.conj,game.beldam.new_beldam.call(null,x_26107,y_26109));
} else {
}

if(cljs.core._EQ_.call(null,code_26110,"NURSE")){
cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.update,new cljs.core.Keyword(null,"nurses","nurses",-1762810457),cljs.core.conj,game.nurse.new_nurse.call(null,x_26107,y_26109));
} else {
}

if(cljs.core._EQ_.call(null,code_26110,"DOC")){
cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.update,new cljs.core.Keyword(null,"docs","docs",-1974280502),cljs.core.conj,game.doc.new_doc.call(null,x_26107,y_26109));
} else {
}

if(cljs.core._EQ_.call(null,code_26110,"PRACT")){
cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.update,new cljs.core.Keyword(null,"practitioners","practitioners",-821312252),cljs.core.conj,game.practitioner.new_practitioner.call(null,x_26107,y_26109));
} else {
}

var G__26111 = (y_26109 + (1));
y_26109 = G__26111;
continue;
} else {
}
break;
}

var G__26112 = (x_26107 + (1));
x_26107 = G__26112;
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
game.level_manager.update_docs = (function game$level_manager$update_docs(patient,docs,elapsed){
var docs__$1 = cljs.core.mapv.call(null,(function (doc){
return game.game_object.update_STAR_.call(null,doc,elapsed);
}),docs);
var c = cljs.core.count.call(null,docs__$1);
var docs__$2 = cljs.core.filterv.call(null,((function (docs__$1,c){
return (function (doc){
var alive_QMARK_ = (!(game.utils.rectangle_intersects_QMARK_.call(null,game.game_object.collision_rectangle.call(null,patient),game.game_object.collision_rectangle.call(null,doc))));
if(alive_QMARK_){
} else {
game.level_manager.remove_object.call(null,doc);
}

return alive_QMARK_;
});})(docs__$1,c))
,docs__$1);
var docs_found = (c - cljs.core.count.call(null,docs__$2));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"docs","docs",-1974280502),docs__$2,new cljs.core.Keyword(null,"patient","patient",1178852672),cljs.core.update.call(null,patient,new cljs.core.Keyword(null,"docs-remaining","docs-remaining",-1208169811),cljs.core._,docs_found)], null);
});
game.level_manager.throw_pill = (function game$level_manager$throw_pill(practitioner,patient){
if((new cljs.core.Keyword(null,"last-throw-time","last-throw-time",1051004820).cljs$core$IFn$_invoke$arity$1(practitioner) > (2))){
return game.pill.new_pill.call(null,cljs.core.update.call(null,new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(practitioner),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,cljs.core.rand_int.call(null,(new cljs.core.Keyword(null,"frame-height","frame-height",1932367973).cljs$core$IFn$_invoke$arity$1(practitioner) - (40)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
} else {
return null;
}
});
game.level_manager.practitioner_attack = (function game$level_manager$practitioner_attack(practitioner){
if((((new cljs.core.Keyword(null,"last-throw-time","last-throw-time",1051004820).cljs$core$IFn$_invoke$arity$1(practitioner) > 1.5)) && ((new cljs.core.Keyword(null,"last-throw-time","last-throw-time",1051004820).cljs$core$IFn$_invoke$arity$1(practitioner) < 1.7)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"surrendered?","surrendered?",-1235061840).cljs$core$IFn$_invoke$arity$1(practitioner))))){
return game.game_object.play_animation.call(null,practitioner,"attack");
} else {
return practitioner;
}
});
game.level_manager.check_current_cell_code = (function game$level_manager$check_current_cell_code(patient){
return patient;
});
game.level_manager.update_practitioners = (function game$level_manager$update_practitioners(patient,practitioners,elapsed){
var practitioners__$1 = cljs.core.mapv.call(null,(function (practitioner){
return game.game_object.update_STAR_.call(null,practitioner,elapsed);
}),practitioners);
return cljs.core.reduce.call(null,((function (practitioners__$1){
return (function (acc,practitioner){
var practitioner__$1 = cljs.core.update.call(null,practitioner,new cljs.core.Keyword(null,"last-throw-time","last-throw-time",1051004820),cljs.core._PLUS_,elapsed);
var practitioner__$2 = game.level_manager.practitioner_attack.call(null,practitioner__$1);
var pill = game.level_manager.throw_pill.call(null,practitioner__$2,patient);
var practitioner__$3 = (cljs.core.truth_(pill)?cljs.core.assoc.call(null,practitioner__$2,new cljs.core.Keyword(null,"last-throw-time","last-throw-time",1051004820),(0)):practitioner__$2);
if(cljs.core.truth_(new cljs.core.Keyword(null,"surrendered?","surrendered?",-1235061840).cljs$core$IFn$_invoke$arity$1(practitioner__$3))){
return cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"practitioners","practitioners",-821312252),cljs.core.conj,practitioner__$3);
} else {
if(game.utils.rectangle_intersects_QMARK_.call(null,game.game_object.collision_rectangle.call(null,patient),game.game_object.collision_rectangle.call(null,practitioner__$3))){
if((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(game.game_object.world_center.call(null,new cljs.core.Keyword(null,"patient","patient",1178852672).cljs$core$IFn$_invoke$arity$1(acc))) < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(practitioner__$3)))){
var patient__$1 = cljs.core.update.call(null,new cljs.core.Keyword(null,"patient","patient",1178852672).cljs$core$IFn$_invoke$arity$1(acc),new cljs.core.Keyword(null,"docs-remaining","docs-remaining",-1208169811),cljs.core.dec);
var practitioner__$4 = cljs.core.assoc.call(null,game.game_object.play_animation.call(null,practitioner__$3,"idle"),new cljs.core.Keyword(null,"surrendered?","surrendered?",-1235061840),true);
return cljs.core.update.call(null,cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"patient","patient",1178852672),patient__$1),new cljs.core.Keyword(null,"practitioners","practitioners",-821312252),cljs.core.conj,practitioner__$4);
} else {
return cljs.core.update.call(null,cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"patient","patient",1178852672),game.patient.kill.call(null,patient)),new cljs.core.Keyword(null,"practitioners","practitioners",-821312252),cljs.core.conj,practitioner__$3);
}
} else {
var G__26113 = acc;
var G__26113__$1 = cljs.core.update.call(null,G__26113,new cljs.core.Keyword(null,"practitioners","practitioners",-821312252),cljs.core.conj,practitioner__$3)
;
if(cljs.core.truth_(pill)){
return cljs.core.update.call(null,G__26113__$1,new cljs.core.Keyword(null,"new-pills","new-pills",702272086),cljs.core.conj,pill);
} else {
return G__26113__$1;
}
}
}
});})(practitioners__$1))
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"patient","patient",1178852672),patient,new cljs.core.Keyword(null,"practitioners","practitioners",-821312252),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"new-pills","new-pills",702272086),cljs.core.PersistentVector.EMPTY], null),practitioners__$1);
});
game.level_manager.update_spikes = (function game$level_manager$update_spikes(patient,spikes,elapsed){
var spikes__$1 = cljs.core.mapv.call(null,(function (spike){
return game.spike.update_STAR_.call(null,spike,elapsed);
}),spikes);
return cljs.core.reduce.call(null,((function (spikes__$1){
return (function (acc,spike){
if(cljs.core.truth_(new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057).cljs$core$IFn$_invoke$arity$1(spike))){
if(((cljs.core.not.call(null,new cljs.core.Keyword(null,"dead?","dead?",990391228).cljs$core$IFn$_invoke$arity$1(patient))) && (game.utils.rectangle_intersects_QMARK_.call(null,game.game_object.collision_rectangle.call(null,spike),game.game_object.collision_rectangle.call(null,patient))))){
game.level_manager.remove_object.call(null,spike);

return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"patient","patient",1178852672),game.patient.kill.call(null,patient));
} else {
return cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"spikes","spikes",289662129),cljs.core.conj,spike);
}
} else {
game.level_manager.remove_object.call(null,spike);

return acc;
}
});})(spikes__$1))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patient","patient",1178852672),patient,new cljs.core.Keyword(null,"spikes","spikes",289662129),cljs.core.PersistentVector.EMPTY], null),spikes__$1);
});
game.level_manager.throw_spike = (function game$level_manager$throw_spike(beldam,patient){
if((new cljs.core.Keyword(null,"last-throw-time","last-throw-time",1051004820).cljs$core$IFn$_invoke$arity$1(beldam) > (2))){
var distance = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(patient)) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(beldam)));
if((Math.abs(distance) < (200))){
return game.spike.new_spike.call(null,cljs.core.update.call(null,new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(beldam),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"frame-height","frame-height",1932367973).cljs$core$IFn$_invoke$arity$1(beldam))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((distance < (0)))?(-1):(1)),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
} else {
return null;
}
} else {
return null;
}
});
game.level_manager.update_beldams = (function game$level_manager$update_beldams(patient,beldams,elapsed){
var beldams__$1 = cljs.core.mapv.call(null,(function (beldam){
return game.beldam.update_STAR_.call(null,beldam,elapsed);
}),beldams);
return cljs.core.reduce.call(null,((function (beldams__$1){
return (function (acc,beldam){
var beldam__$1 = cljs.core.update.call(null,beldam,new cljs.core.Keyword(null,"last-throw-time","last-throw-time",1051004820),cljs.core._PLUS_,elapsed);
var spike = game.level_manager.throw_spike.call(null,beldam__$1,patient);
var beldam__$2 = (cljs.core.truth_(spike)?cljs.core.assoc.call(null,beldam__$1,new cljs.core.Keyword(null,"last-throw-time","last-throw-time",1051004820),(0)):beldam__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dead?","dead?",990391228).cljs$core$IFn$_invoke$arity$1(beldam__$2))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057).cljs$core$IFn$_invoke$arity$1(beldam__$2))){
return cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"beldams","beldams",371251070),cljs.core.conj,beldam__$2);
} else {
game.level_manager.remove_object.call(null,beldam__$2);

return acc;
}
} else {
if(game.utils.rectangle_intersects_QMARK_.call(null,game.game_object.collision_rectangle.call(null,patient),game.game_object.collision_rectangle.call(null,beldam__$2))){
if((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(game.game_object.world_center.call(null,new cljs.core.Keyword(null,"patient","patient",1178852672).cljs$core$IFn$_invoke$arity$1(acc))) < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"world-location","world-location",-1928727782).cljs$core$IFn$_invoke$arity$1(beldam__$2)))){
var patient__$1 = cljs.core.update.call(null,game.patient.jump.call(null,new cljs.core.Keyword(null,"patient","patient",1178852672).cljs$core$IFn$_invoke$arity$1(acc)),new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core._PLUS_,(5));
var beldam__$3 = cljs.core.assoc.call(null,game.game_object.play_animation.call(null,beldam__$2,"die"),new cljs.core.Keyword(null,"dead?","dead?",990391228),true,new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
return cljs.core.update.call(null,cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"patient","patient",1178852672),patient__$1),new cljs.core.Keyword(null,"beldams","beldams",371251070),cljs.core.conj,beldam__$3);
} else {
return cljs.core.update.call(null,cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"patient","patient",1178852672),game.patient.kill.call(null,patient)),new cljs.core.Keyword(null,"beldams","beldams",371251070),cljs.core.conj,beldam__$2);
}
} else {
var G__26114 = acc;
var G__26114__$1 = cljs.core.update.call(null,G__26114,new cljs.core.Keyword(null,"beldams","beldams",371251070),cljs.core.conj,beldam__$2)
;
if(cljs.core.truth_(spike)){
return cljs.core.update.call(null,G__26114__$1,new cljs.core.Keyword(null,"new-spikes","new-spikes",-1733374039),cljs.core.conj,spike);
} else {
return G__26114__$1;
}
}
}
});})(beldams__$1))
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"patient","patient",1178852672),patient,new cljs.core.Keyword(null,"beldams","beldams",371251070),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"new-spikes","new-spikes",-1733374039),cljs.core.PersistentVector.EMPTY], null),beldams__$1);
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
var pills__$1 = cljs.core.mapv.call(null,(function (pill){
return game.pill.update_STAR_.call(null,pill,elapsed);
}),pills);
return cljs.core.reduce.call(null,((function (pills__$1){
return (function (acc,pill){
if(cljs.core.truth_(new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057).cljs$core$IFn$_invoke$arity$1(pill))){
if(((cljs.core.not.call(null,new cljs.core.Keyword(null,"dead?","dead?",990391228).cljs$core$IFn$_invoke$arity$1(patient))) && (game.utils.rectangle_intersects_QMARK_.call(null,game.game_object.collision_rectangle.call(null,pill),game.game_object.collision_rectangle.call(null,patient))))){
game.level_manager.remove_object.call(null,pill);

return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"patient","patient",1178852672),game.patient.kill.call(null,patient));
} else {
return cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"pills","pills",-85353539),cljs.core.conj,pill);
}
} else {
game.level_manager.remove_object.call(null,pill);

return acc;
}
});})(pills__$1))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patient","patient",1178852672),patient,new cljs.core.Keyword(null,"pills","pills",-85353539),cljs.core.PersistentVector.EMPTY], null),pills__$1);
});
game.level_manager.update_STAR_ = (function game$level_manager$update_STAR_(elapsed){
if(cljs.core.truth_(new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.level_manager.context)))){
return null;
} else {
var map__26115 = cljs.core.deref.call(null,game.level_manager.context);
var map__26115__$1 = (((((!((map__26115 == null))))?(((((map__26115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26115):map__26115);
var patient = cljs.core.get.call(null,map__26115__$1,new cljs.core.Keyword(null,"patient","patient",1178852672));
var docs = cljs.core.get.call(null,map__26115__$1,new cljs.core.Keyword(null,"docs","docs",-1974280502));
var practitioners = cljs.core.get.call(null,map__26115__$1,new cljs.core.Keyword(null,"practitioners","practitioners",-821312252));
var beldams = cljs.core.get.call(null,map__26115__$1,new cljs.core.Keyword(null,"beldams","beldams",371251070));
var nurses = cljs.core.get.call(null,map__26115__$1,new cljs.core.Keyword(null,"nurses","nurses",-1762810457));
var spikes = cljs.core.get.call(null,map__26115__$1,new cljs.core.Keyword(null,"spikes","spikes",289662129));
var pills = cljs.core.get.call(null,map__26115__$1,new cljs.core.Keyword(null,"pills","pills",-85353539));
var patient__$1 = game.level_manager.check_current_cell_code.call(null,game.patient.update_STAR_.call(null,patient,elapsed));
var map__26116 = game.level_manager.update_docs.call(null,patient__$1,docs,elapsed);
var map__26116__$1 = (((((!((map__26116 == null))))?(((((map__26116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26116):map__26116);
var patient__$2 = cljs.core.get.call(null,map__26116__$1,new cljs.core.Keyword(null,"patient","patient",1178852672));
var docs__$1 = cljs.core.get.call(null,map__26116__$1,new cljs.core.Keyword(null,"docs","docs",-1974280502));
var map__26117 = game.level_manager.update_practitioners.call(null,patient__$2,practitioners,elapsed);
var map__26117__$1 = (((((!((map__26117 == null))))?(((((map__26117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26117):map__26117);
var patient__$3 = cljs.core.get.call(null,map__26117__$1,new cljs.core.Keyword(null,"patient","patient",1178852672));
var practitioners__$1 = cljs.core.get.call(null,map__26117__$1,new cljs.core.Keyword(null,"practitioners","practitioners",-821312252));
var new_pills = cljs.core.get.call(null,map__26117__$1,new cljs.core.Keyword(null,"new-pills","new-pills",702272086));
var map__26118 = game.level_manager.update_spikes.call(null,patient__$3,spikes,elapsed);
var map__26118__$1 = (((((!((map__26118 == null))))?(((((map__26118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26118):map__26118);
var patient__$4 = cljs.core.get.call(null,map__26118__$1,new cljs.core.Keyword(null,"patient","patient",1178852672));
var spikes__$1 = cljs.core.get.call(null,map__26118__$1,new cljs.core.Keyword(null,"spikes","spikes",289662129));
var map__26119 = game.level_manager.update_beldams.call(null,patient__$4,beldams,elapsed);
var map__26119__$1 = (((((!((map__26119 == null))))?(((((map__26119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26119):map__26119);
var patient__$5 = cljs.core.get.call(null,map__26119__$1,new cljs.core.Keyword(null,"patient","patient",1178852672));
var beldams__$1 = cljs.core.get.call(null,map__26119__$1,new cljs.core.Keyword(null,"beldams","beldams",371251070));
var new_spikes = cljs.core.get.call(null,map__26119__$1,new cljs.core.Keyword(null,"new-spikes","new-spikes",-1733374039));
var map__26120 = game.level_manager.update_nurses.call(null,patient__$5,nurses,elapsed);
var map__26120__$1 = (((((!((map__26120 == null))))?(((((map__26120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26120):map__26120);
var patient__$6 = cljs.core.get.call(null,map__26120__$1,new cljs.core.Keyword(null,"patient","patient",1178852672));
var nurses__$1 = cljs.core.get.call(null,map__26120__$1,new cljs.core.Keyword(null,"nurses","nurses",-1762810457));
var map__26121 = game.level_manager.update_pills.call(null,patient__$6,pills,elapsed);
var map__26121__$1 = (((((!((map__26121 == null))))?(((((map__26121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26121):map__26121);
var patient__$7 = cljs.core.get.call(null,map__26121__$1,new cljs.core.Keyword(null,"patient","patient",1178852672));
var pills__$1 = cljs.core.get.call(null,map__26121__$1,new cljs.core.Keyword(null,"pills","pills",-85353539));
cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"patient","patient",1178852672),patient__$7);

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"docs","docs",-1974280502),docs__$1);

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"beldams","beldams",371251070),beldams__$1);

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"nurses","nurses",-1762810457),nurses__$1);

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"practitioners","practitioners",-821312252),practitioners__$1);

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"spikes","spikes",289662129),cljs.core.into.call(null,spikes__$1,new_spikes));

return cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"pills","pills",-85353539),cljs.core.into.call(null,pills__$1,new_pills));
}
});
game.level_manager.reload_level = (function game$level_manager$reload_level(){
var save_respawn = new cljs.core.Keyword(null,"respawn-location","respawn-location",541992207).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.level_manager.context));
game.level_manager.load_level.call(null,new cljs.core.Keyword(null,"current-level","current-level",-11925890).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.level_manager.context)));

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc,new cljs.core.Keyword(null,"respawn-location","respawn-location",541992207),save_respawn);

cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"patient","patient",1178852672),new cljs.core.Keyword(null,"world-location","world-location",-1928727782)], null),save_respawn);

return cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"patient","patient",1178852672),new cljs.core.Keyword(null,"docs-remaining","docs-remaining",-1208169811)], null),(7));
});
game.level_manager.revive_patient = (function game$level_manager$revive_patient(){
return cljs.core.swap_BANG_.call(null,game.level_manager.context,cljs.core.update,new cljs.core.Keyword(null,"patient","patient",1178852672),game.patient.revive);
});
