// Compiled by ClojureScript 1.10.439 {}
goog.provide('game.core');
goog.require('cljs.core');
goog.require('game.level_manager');
goog.require('game.tile_map');
goog.require('game.game_object');
goog.require('game.pixi');
goog.require('game.controls');
goog.require('game.camera');
goog.require('game.editor');
if((typeof game !== 'undefined') && (typeof game.core !== 'undefined') && (typeof game.core.context !== 'undefined')){
} else {
game.core.context = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof game !== 'undefined') && (typeof game.core !== 'undefined') && (typeof game.core.background !== 'undefined')){
} else {
game.core.background = (function (){var text = (new PIXI.Text("Press space bar to play",({"fontFamily": "Arial", "fontSize": (48), "fill": "white"})));
text.position.set((400),(300));

text.anchor.set(0.5);

text.visible = true;

return text;
})();
}
if((typeof game !== 'undefined') && (typeof game.core !== 'undefined') && (typeof game.core.root !== 'undefined')){
} else {
game.core.root = (function (){var container = (new PIXI.Container());
container.width = (800);

container.height = (600);

return container;
})();
}
if((typeof game !== 'undefined') && (typeof game.core !== 'undefined') && (typeof game.core.docs_text !== 'undefined')){
} else {
game.core.docs_text = (function (){var text = (new PIXI.Text(["Documents Remaining: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0))].join(''),({"fontFamily": "Arial", "fontSize": (16), "fill": "white"})));
text.position.set((20),(580));

text.visible = false;

return text;
})();
}
if((typeof game !== 'undefined') && (typeof game.core !== 'undefined') && (typeof game.core.lives_text !== 'undefined')){
} else {
game.core.lives_text = (function (){var text = (new PIXI.Text(["Lives Remaining ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0))].join(''),({"fontFamily": "Arial", "fontSize": (16), "fill": "white"})));
text.position.set((600),(580));

text.visible = false;

return text;
})();
}
if((typeof game !== 'undefined') && (typeof game.core !== 'undefined') && (typeof game.core.game_over_text !== 'undefined')){
} else {
game.core.game_over_text = (function (){var text = (new PIXI.Text("G A M E  O V E R !",({"fontFamily": "Arial", "fontSize": (48), "fill": "white"})));
text.position.set((400),(300));

text.anchor.set(0.5);

text.visible = false;

return text;
})();
}
game.core.start_new_game = (function game$core$start_new_game(){
game.level_manager.init.call(null);

return game.level_manager.load_level.call(null,(0));
});
game.core.update_STAR_ = (function game$core$update_STAR_(delta){
var map__26268 = cljs.core.deref.call(null,game.core.context);
var map__26268__$1 = (((((!((map__26268 == null))))?(((((map__26268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26268):map__26268);
var state = cljs.core.get.call(null,map__26268__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var elapsed = (delta * 0.001);
var G__26270 = state;
var G__26270__$1 = (((G__26270 instanceof cljs.core.Keyword))?G__26270.fqn:null);
switch (G__26270__$1) {
case "title-screen":
if(cljs.core.truth_((function (){var or__4047__auto__ = game.controls.key_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"Space","Space",1500017025));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return game.controls.get_touch_state.call(null);
}
})())){
game.core.start_new_game.call(null);

cljs.core.swap_BANG_.call(null,game.core.context,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"playing","playing",70013335));

game.core.background.visible = false;

game.camera.container.visible = true;

game.core.docs_text.visible = true;

return game.core.lives_text.visible = true;
} else {
return null;
}

break;
case "playing":
game.level_manager.update_STAR_.call(null,elapsed);

var patient = new cljs.core.Keyword(null,"patient","patient",1178852672).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.level_manager.context));
if((new cljs.core.Keyword(null,"docs-remaining","docs-remaining",-1208169811).cljs$core$IFn$_invoke$arity$1(patient) === (0))){
game.core.game_over_text.text = "Y O U  W I N !";

game.core.game_over_text.visible = true;

cljs.core.swap_BANG_.call(null,game.core.context,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"game-over","game-over",-607322695));

cljs.core.swap_BANG_.call(null,game.core.context,cljs.core.assoc,new cljs.core.Keyword(null,"death-timer","death-timer",728926892),(0));
} else {
}

var s_26272 = ["Documents Remaining: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"docs-remaining","docs-remaining",-1208169811).cljs$core$IFn$_invoke$arity$1(patient))].join('');
if(cljs.core._EQ_.call(null,s_26272,game.core.docs_text.text)){
} else {
game.core.docs_text.text = s_26272;
}

var s_26273 = ["Lives Remaining: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lives-remaining","lives-remaining",-518036388).cljs$core$IFn$_invoke$arity$1(patient))].join('');
if(cljs.core._EQ_.call(null,s_26273,game.core.lives_text.text)){
} else {
game.core.lives_text.text = s_26273;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dead?","dead?",990391228).cljs$core$IFn$_invoke$arity$1(patient))){
if((new cljs.core.Keyword(null,"lives-remaining","lives-remaining",-518036388).cljs$core$IFn$_invoke$arity$1(patient) > (0))){
cljs.core.swap_BANG_.call(null,game.core.context,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"patient-dead","patient-dead",2121642873));

return cljs.core.swap_BANG_.call(null,game.core.context,cljs.core.assoc,new cljs.core.Keyword(null,"death-timer","death-timer",728926892),(0));
} else {
game.core.game_over_text.visible = true;

cljs.core.swap_BANG_.call(null,game.core.context,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"game-over","game-over",-607322695));

return cljs.core.swap_BANG_.call(null,game.core.context,cljs.core.assoc,new cljs.core.Keyword(null,"death-timer","death-timer",728926892),(0));
}
} else {
return null;
}

break;
case "patient-dead":
game.level_manager.update_STAR_.call(null,elapsed);

cljs.core.swap_BANG_.call(null,game.core.context,cljs.core.update,new cljs.core.Keyword(null,"death-timer","death-timer",728926892),cljs.core._PLUS_,elapsed);

if((new cljs.core.Keyword(null,"death-timer","death-timer",728926892).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.core.context)) > (5))){
cljs.core.swap_BANG_.call(null,game.core.context,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"playing","playing",70013335));

game.level_manager.revive_patient.call(null);

return game.level_manager.reload_level.call(null);
} else {
return null;
}

break;
case "winning":
cljs.core.swap_BANG_.call(null,game.core.context,cljs.core.update,new cljs.core.Keyword(null,"death-timer","death-timer",728926892),cljs.core._PLUS_,elapsed);

if((new cljs.core.Keyword(null,"death-timer","death-timer",728926892).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.core.context)) > (5))){
game.core.game_over_text.visible = false;

game.core.docs_text.visible = false;

game.core.lives_text.visible = false;

game.camera.container.visible = false;

game.core.background.visible = true;

return cljs.core.swap_BANG_.call(null,game.core.context,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"title-screen","title-screen",1262092294));
} else {
return null;
}

break;
case "game-over":
cljs.core.swap_BANG_.call(null,game.core.context,cljs.core.update,new cljs.core.Keyword(null,"death-timer","death-timer",728926892),cljs.core._PLUS_,elapsed);

if((new cljs.core.Keyword(null,"death-timer","death-timer",728926892).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.core.context)) > (5))){
game.core.game_over_text.visible = false;

game.core.docs_text.visible = false;

game.core.lives_text.visible = false;

game.camera.container.visible = false;

game.core.background.visible = true;

return cljs.core.swap_BANG_.call(null,game.core.context,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"title-screen","title-screen",1262092294));
} else {
return null;
}

break;
default:
return null;

}
});
game.core.run = (function game$core$run(app,update_STAR_,root){
app.stage.addChild(root);

game.controls.register_events.call(null,app.view);

return app.ticker.add((function (_){
return update_STAR_.call(null,app.ticker.elapsedMS);
}));
});
game.core.init = (function game$core$init(){
cljs.core.swap_BANG_.call(null,game.core.context,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"title-screen","title-screen",1262092294));

cljs.core.swap_BANG_.call(null,game.core.context,cljs.core.assoc,new cljs.core.Keyword(null,"death-timer","death-timer",728926892),(0));

game.camera.initialize.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view-port-width","view-port-width",1189645642),(800),new cljs.core.Keyword(null,"view-port-height","view-port-height",670423990),(600),new cljs.core.Keyword(null,"world-rectangle","world-rectangle",1666211299),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(game.tile_map.tile_width * game.tile_map.map_width),new cljs.core.Keyword(null,"height","height",1025178622),(game.tile_map.tile_height * game.tile_map.map_height)], null)], null));

game.camera.set_position.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),((game.tile_map.tile_height * game.tile_map.map_height) - game.camera.view_port_height.call(null))], null));

game.camera.container.visible = false;

if(cljs.core.truth_(new cljs.core.Keyword(null,"initialized?","initialized?",1707939066).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.core.context)))){
return null;
} else {
game.core.root.addChild(game.camera.container);

game.core.root.addChild(game.core.background);

game.core.root.addChild(game.core.docs_text);

game.core.root.addChild(game.core.lives_text);

game.core.root.addChild(game.core.game_over_text);

game.core.run.call(null,game.pixi.init.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, ["textures/PlatformTiles.png","textures/Spike.png","textures/Pill.png","textures/Doc.png","textures/Sprites/Patient/Idle.png","textures/Sprites/Patient/Die.png","textures/Sprites/Patient/Jump.png","textures/Sprites/Patient/Run.png","textures/Sprites/Beldam/Idle.png","textures/Sprites/Beldam/Die.png","textures/Sprites/Beldam/Run.png","textures/Sprites/Nurse/Run.png","textures/Sprites/Practitioner/Attack.png","textures/Sprites/Practitioner/Idle.png"], null),(function (){
game.tile_map.load_tiles.call(null,"textures/PlatformTiles.png");

return game.tile_map.initialize.call(null,false);
})),game.core.update_STAR_,game.core.root);

return cljs.core.swap_BANG_.call(null,game.core.context,cljs.core.assoc,new cljs.core.Keyword(null,"initialized?","initialized?",1707939066),true);
}
});
goog.exportSymbol('game.core.init', game.core.init);
