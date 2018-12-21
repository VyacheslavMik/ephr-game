// Compiled by ClojureScript 1.10.439 {}
goog.provide('game.editor');
goog.require('cljs.core');
goog.require('game.controls');
goog.require('game.pixi');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('game.camera');
goog.require('game.utils');
goog.require('game.tile_map');
goog.require('clojure.string');
if((typeof game !== 'undefined') && (typeof game.editor !== 'undefined') && (typeof game.editor.context !== 'undefined')){
} else {
game.editor.context = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"toggle-passable","toggle-passable",-795091825),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"code","code",1586293142),"CUSTOM",new cljs.core.Keyword(null,"tile-index","tile-index",-1401655679),(0),new cljs.core.Keyword(null,"map-number","map-number",-638346777),"000",new cljs.core.Keyword(null,"last-mouse-state","last-mouse-state",-367054181),null,new cljs.core.Keyword(null,"code-value","code-value",-1147505513),null], null));
}
game.editor.set_disable_code_inputs = (function game$editor$set_disable_code_inputs(){
var code_value = document.querySelector("#code-value");
var codes = document.querySelector("#codes");
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.editor.context)),"CUSTOM")) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.editor.context)),new cljs.core.Keyword(null,"code","code",1586293142))))){
code_value.disabled = false;
} else {
code_value.disabled = true;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.editor.context)),new cljs.core.Keyword(null,"toggle-passable","toggle-passable",-795091825))){
return codes.disabled = true;
} else {
return codes.disabled = false;
}
});
game.editor.set_code_input_value = (function game$editor$set_code_input_value(){
var code_value = document.querySelector("#code-value");
return code_value.value = new cljs.core.Keyword(null,"code-value","code-value",-1147505513).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.editor.context));
});
game.editor.change_layer = (function game$editor$change_layer(ev){
return cljs.core.swap_BANG_.call(null,game.editor.context,cljs.core.assoc,new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.keyword.call(null,ev.target.value));
});
goog.exportSymbol('game.editor.change_layer', game.editor.change_layer);
game.editor.change_mode = (function game$editor$change_mode(ev){
var mode = cljs.core.keyword.call(null,ev.target.value);
cljs.core.swap_BANG_.call(null,game.editor.context,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode);

return game.editor.set_disable_code_inputs.call(null);
});
goog.exportSymbol('game.editor.change_mode', game.editor.change_mode);
game.editor.change_code = (function game$editor$change_code(ev){
var code = ev.target.value;
cljs.core.swap_BANG_.call(null,game.editor.context,cljs.core.assoc,new cljs.core.Keyword(null,"code","code",1586293142),code);

if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["CUSTOM",null,"CLEAR",null], null), null).call(null,code))){
cljs.core.swap_BANG_.call(null,game.editor.context,cljs.core.assoc,new cljs.core.Keyword(null,"code-value","code-value",-1147505513),null);
} else {
cljs.core.swap_BANG_.call(null,game.editor.context,cljs.core.assoc,new cljs.core.Keyword(null,"code-value","code-value",-1147505513),code);
}

game.editor.set_code_input_value.call(null);

return game.editor.set_disable_code_inputs.call(null);
});
goog.exportSymbol('game.editor.change_code', game.editor.change_code);
game.editor.custom_code = (function game$editor$custom_code(ev){
return cljs.core.swap_BANG_.call(null,game.editor.context,cljs.core.assoc,new cljs.core.Keyword(null,"code-value","code-value",-1147505513),ev.target.value);
});
goog.exportSymbol('game.editor.custom_code', game.editor.custom_code);
game.editor.change_map_number = (function game$editor$change_map_number(ev){
return cljs.core.swap_BANG_.call(null,game.editor.context,cljs.core.assoc,new cljs.core.Keyword(null,"map-number","map-number",-638346777),ev.target.value);
});
goog.exportSymbol('game.editor.change_map_number', game.editor.change_map_number);
game.editor.save_map = (function game$editor$save_map(){
var element = document.createElement("a");
element.setAttribute("href",["data:application/octet-stream;charset=utf-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(game.tile_map.save_map.call(null)))].join(''));

element.setAttribute("download",["MAP",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map-number","map-number",-638346777).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.editor.context)))].join(''));

element.style.display = "none";

document.body.appendChild(element);

element.click();

return document.body.removeChild(element);
});
goog.exportSymbol('game.editor.save_map', game.editor.save_map);
game.editor.load_map = (function game$editor$load_map(ev){
var fr_26252 = (new FileReader());
(fr_26252["onload"] = ((function (fr_26252){
return (function (e){
return game.tile_map.load_map.call(null,e.target.result);
});})(fr_26252))
);

fr_26252.readAsText((ev.target.files[(0)]));

return ev.target.value = "";
});
goog.exportSymbol('game.editor.load_map', game.editor.load_map);
game.editor.change_position = (function game$editor$change_position(ev){
var v = parseInt(ev.target.value);
if(cljs.core._EQ_.call(null,ev.target.id,"right-range")){
return cljs.core.swap_BANG_.call(null,game.editor.context,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"y","y",-1757859776)], null),((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(game.camera.world_rectangle.call(null)) - game.camera.view_port_height.call(null)) - v));
} else {
return cljs.core.swap_BANG_.call(null,game.editor.context,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"x","x",2099068185)], null),v);
}
});
goog.exportSymbol('game.editor.change_position', game.editor.change_position);
game.editor.clear_map = (function game$editor$clear_map(){
return game.tile_map.clear_map.call(null);
});
goog.exportSymbol('game.editor.clear_map', game.editor.clear_map);
game.editor.tile_url = (function game$editor$tile_url(path){
return ["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),")"].join('');
});
game.editor.fill_tiles = (function game$editor$fill_tiles(path){
var tiles = document.querySelector("#tiles");
tiles.innerHTML = "";

var y = (0);
while(true){
if((y < cljs.core.deref.call(null,game.tile_map.tile_rows))){
var x_26253 = (0);
while(true){
if((x_26253 < cljs.core.deref.call(null,game.tile_map.tiles_per_row))){
var tile_26254 = document.createElement("div");
var tile_text_26255 = document.createElement("div");
var index_26256 = ((y * cljs.core.deref.call(null,game.tile_map.tiles_per_row)) + x_26253);
tile_text_26255.classList.add("tile-text");

tile_text_26255.textContent = ((((cljs.core._EQ_.call(null,y,(0))) && (cljs.core._EQ_.call(null,x_26253,(0)))))?"empty":((((cljs.core._EQ_.call(null,y,(0))) && (cljs.core._EQ_.call(null,x_26253,(1)))))?"white":""
));

tiles.appendChild(tile_text_26255);

tile_26254.classList.add("tile");

tile_26254.tabIndex = index_26256;

tile_26254.onclick = ((function (x_26253,y,tile_26254,tile_text_26255,index_26256,tiles){
return (function (ev){
return cljs.core.swap_BANG_.call(null,game.editor.context,cljs.core.assoc,new cljs.core.Keyword(null,"tile-index","tile-index",-1401655679),index_26256);
});})(x_26253,y,tile_26254,tile_text_26255,index_26256,tiles))
;

tile_26254.style.background = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(game.editor.tile_url.call(null,path))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((- (x_26253 * game.tile_map.tile_width))),"px"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((- (y * game.tile_map.tile_height))),"px"].join('');

tiles.appendChild(tile_26254);

var G__26257 = (x_26253 + (1));
x_26253 = G__26257;
continue;
} else {
}
break;
}

var G__26258 = (y + (1));
y = G__26258;
continue;
} else {
return null;
}
break;
}
});
game.editor.load_tiles = (function game$editor$load_tiles(ev){
var fr_26259 = (new FileReader());
var file_26260 = (ev["target"]["files"][(0)]);
(fr_26259["onload"] = ((function (fr_26259,file_26260){
return (function (e){
var img = (new Image());
img.onload = ((function (img,fr_26259,file_26260){
return (function (_){
game.tile_map.load_tiles.call(null,img);

game.tile_map.initialize.call(null,true);

return game.editor.fill_tiles.call(null,e.target.result);
});})(img,fr_26259,file_26260))
;

return img.src = e.target.result;
});})(fr_26259,file_26260))
);

fr_26259.readAsDataURL(file_26260);

return ev.target.value = "";
});
goog.exportSymbol('game.editor.load_tiles', game.editor.load_tiles);
game.editor.fill_map_numbers = (function game$editor$fill_map_numbers(){
var map_numbers = document.querySelector("#map-numbers");
var n__4518__auto__ = (100);
var i = (0);
while(true){
if((i < n__4518__auto__)){
var map_number_26261 = document.createElement("option");
if(cljs.core._EQ_.call(null,i,(0))){
map_number_26261.setAttribute("checked",true);
} else {
}

map_number_26261.textContent = goog.string.format("%03d",i);

map_number_26261.value = goog.string.format("%03d",i);

map_numbers.appendChild(map_number_26261);

var G__26262 = (i + (1));
i = G__26262;
continue;
} else {
return null;
}
break;
}
});
game.editor.tile_position = document.querySelector("#tile-position");
game.editor.update_STAR_ = (function game$editor$update_STAR_(delta){
game.camera.set_position.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.editor.context)));

var ms = game.controls.get_mouse_state.call(null);
if((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ms) > (0))) && ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ms) < game.camera.view_port_width.call(null))) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ms) > (0))) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ms) < game.camera.view_port_height.call(null))))){
var mouse_loc_26263 = game.camera.screen_to_world_v.call(null,ms);
var x_26264 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(mouse_loc_26263);
var y_26265 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(mouse_loc_26263);
game.editor.tile_position.textContent = ["x: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(game.tile_map.get_cell_by_pixel_x.call(null,x_26264))," y: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(game.tile_map.get_cell_by_pixel_y.call(null,y_26265))].join('');

if(game.utils.rectangle_contains.call(null,game.camera.world_rectangle.call(null),x_26264,y_26265)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"button","button",1456579943).cljs$core$IFn$_invoke$arity$1(ms),new cljs.core.Keyword(null,"left","left",-399115937))){
game.tile_map.set_tile_at_cell.call(null,game.tile_map.get_cell_by_pixel_x.call(null,x_26264),game.tile_map.get_cell_by_pixel_y.call(null,y_26265),new cljs.core.Keyword(null,"layer","layer",-1601820589).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.editor.context)),new cljs.core.Keyword(null,"tile-index","tile-index",-1401655679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.editor.context)));
} else {
}

if(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"button","button",1456579943).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"last-mouse-state","last-mouse-state",-367054181).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.editor.context))),new cljs.core.Keyword(null,"right","right",-452581833))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"button","button",1456579943).cljs$core$IFn$_invoke$arity$1(ms),new cljs.core.Keyword(null,"right","right",-452581833))))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.editor.context)),new cljs.core.Keyword(null,"toggle-passable","toggle-passable",-795091825))){
game.tile_map.toggle_passable.call(null,game.tile_map.get_cell_by_pixel_x.call(null,x_26264),game.tile_map.get_cell_by_pixel_y.call(null,y_26265));
} else {
game.tile_map.set_code.call(null,game.tile_map.get_cell_by_pixel_x.call(null,x_26264),game.tile_map.get_cell_by_pixel_y.call(null,y_26265),new cljs.core.Keyword(null,"code-value","code-value",-1147505513).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.editor.context)));
}
} else {
}
} else {
}
} else {
}

return cljs.core.swap_BANG_.call(null,game.editor.context,cljs.core.assoc,new cljs.core.Keyword(null,"last-mouse-state","last-mouse-state",-367054181),ms);
});
game.editor.setup_scroll_bar = (function game$editor$setup_scroll_bar(){
var bottom_range = document.querySelector("#bottom-range");
var right_range = document.querySelector("#right-range");
bottom_range.max = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(game.camera.world_rectangle.call(null)) - game.camera.view_port_width.call(null));

return right_range.max = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(game.camera.world_rectangle.call(null)) - game.camera.view_port_height.call(null));
});
game.editor.run = (function game$editor$run(app,update_STAR_,root){
cljs.core.swap_BANG_.call(null,game.editor.context,cljs.core.assoc,new cljs.core.Keyword(null,"app","app",-560961707),app);

app.stage.addChild(root);

game.controls.register_events.call(null,app.view);

return app.ticker.add((function (_){
return update_STAR_.call(null,app.ticker.elapsedMS);
}));
});
game.editor.init = (function game$editor$init(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"initialized?","initialized?",1707939066).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.editor.context)))){
return null;
} else {
cljs.core.swap_BANG_.call(null,game.editor.context,cljs.core.assoc,new cljs.core.Keyword(null,"initialized?","initialized?",1707939066),true);

game.editor.fill_map_numbers.call(null);

game.editor.set_disable_code_inputs.call(null);

game.camera.initialize.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view-port-width","view-port-width",1189645642),(800),new cljs.core.Keyword(null,"view-port-height","view-port-height",670423990),(600),new cljs.core.Keyword(null,"world-rectangle","world-rectangle",1666211299),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(game.tile_map.tile_width * game.tile_map.map_width),new cljs.core.Keyword(null,"height","height",1025178622),(game.tile_map.tile_height * game.tile_map.map_height)], null)], null));

cljs.core.swap_BANG_.call(null,game.editor.context,cljs.core.assoc,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(game.camera.world_rectangle.call(null)) - game.camera.view_port_height.call(null))], null));

game.editor.setup_scroll_bar.call(null);

return game.editor.run.call(null,game.pixi.init.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["textures/PlatformTiles.png"], null),(function (){
game.tile_map.load_tiles.call(null,"textures/PlatformTiles.png");

game.editor.fill_tiles.call(null,"textures/PlatformTiles.png");

return game.tile_map.initialize.call(null,true);
})),game.editor.update_STAR_,game.camera.container);
}
});
goog.exportSymbol('game.editor.init', game.editor.init);
