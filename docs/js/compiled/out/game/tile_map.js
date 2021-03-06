// Compiled by ClojureScript 1.10.439 {}
goog.provide('game.tile_map');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('game.utils');
goog.require('game.world');
goog.require('game.camera');
goog.require('clojure.string');
game.tile_map.tile_width = (48);
game.tile_map.tile_height = (48);
game.tile_map.map_width = (80);
game.tile_map.map_height = (80);
game.tile_map.tiles_per_row = cljs.core.atom.call(null,(0));
game.tile_map.tile_rows = cljs.core.atom.call(null,(0));
game.tile_map.sky_tile = (2);
game.tile_map.context = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editor-mode?","editor-mode?",-1857893371),false,new cljs.core.Keyword(null,"map-cells","map-cells",-432327458),[]], null));
game.tile_map.tile_textures = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
game.tile_map.load_tiles = (function game$tile_map$load_tiles(source){
var bt = PIXI.BaseTexture.from(source);
cljs.core.reset_BANG_.call(null,game.tile_map.tiles_per_row,Math.floor((bt.width / game.tile_map.tile_width)));

cljs.core.reset_BANG_.call(null,game.tile_map.tile_rows,Math.floor((bt.height / game.tile_map.tile_height)));

return cljs.core.reset_BANG_.call(null,game.tile_map.tile_textures,cljs.core.reduce.call(null,((function (bt){
return (function (acc,i){
return cljs.core.assoc.call(null,acc,i,(new PIXI.Texture(bt,(new PIXI.Rectangle((cljs.core.mod.call(null,i,cljs.core.deref.call(null,game.tile_map.tiles_per_row)) * game.tile_map.tile_width),(Math.floor((i / cljs.core.deref.call(null,game.tile_map.tiles_per_row))) * game.tile_map.tile_height),game.tile_map.tile_width,game.tile_map.tile_height)),(new PIXI.Rectangle((cljs.core.mod.call(null,i,cljs.core.deref.call(null,game.tile_map.tiles_per_row)) * game.tile_map.tile_width),(Math.floor((i / cljs.core.deref.call(null,game.tile_map.tiles_per_row))) * game.tile_map.tile_height),game.tile_map.tile_width,game.tile_map.tile_height)))));
});})(bt))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,(cljs.core.deref.call(null,game.tile_map.tiles_per_row) * cljs.core.deref.call(null,game.tile_map.tile_rows)))));
});
game.tile_map.tile_rect = (function game$tile_map$tile_rect(x,y){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"w","w",354169001),game.tile_map.tile_width,new cljs.core.Keyword(null,"h","h",1109658740),game.tile_map.tile_height], null);
});
game.tile_map.update_tile = (function game$tile_map$update_tile(x,y,tile){
var draw = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(tile);
var x__$1 = (x * game.tile_map.tile_width);
var y__$1 = (y * game.tile_map.tile_height);
if(cljs.core.truth_(draw.sprite)){
draw.sprite.background.texture = cljs.core.get.call(null,cljs.core.deref.call(null,game.tile_map.tile_textures),new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$1(tile));

draw.sprite.interactive.texture = cljs.core.get.call(null,cljs.core.deref.call(null,game.tile_map.tile_textures),new cljs.core.Keyword(null,"interactive","interactive",-2024078362).cljs$core$IFn$_invoke$arity$1(tile));

draw.sprite.foreground.texture = cljs.core.get.call(null,cljs.core.deref.call(null,game.tile_map.tile_textures),new cljs.core.Keyword(null,"foreground","foreground",499022036).cljs$core$IFn$_invoke$arity$1(tile));
} else {
var background_26024 = (new PIXI.Sprite(cljs.core.get.call(null,cljs.core.deref.call(null,game.tile_map.tile_textures),new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$1(tile))));
var interactive_26025 = (new PIXI.Sprite(cljs.core.get.call(null,cljs.core.deref.call(null,game.tile_map.tile_textures),new cljs.core.Keyword(null,"interactive","interactive",-2024078362).cljs$core$IFn$_invoke$arity$1(tile))));
var foreground_26026 = (new PIXI.Sprite(cljs.core.get.call(null,cljs.core.deref.call(null,game.tile_map.tile_textures),new cljs.core.Keyword(null,"foreground","foreground",499022036).cljs$core$IFn$_invoke$arity$1(tile))));
background_26024.position.set(x__$1,y__$1);

interactive_26025.position.set(x__$1,y__$1);

foreground_26026.position.set(x__$1,y__$1);

game.world.add_background_tile.call(null,background_26024);

game.world.add_interactive_tile.call(null,interactive_26025);

game.world.add_foreground_tile.call(null,foreground_26026);

draw.sprite = ({"background": background_26024, "interactive": interactive_26025, "foreground": foreground_26026});
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"editor-mode?","editor-mode?",-1857893371).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.tile_map.context)))){
if(cljs.core.truth_(draw.passable)){
draw.passable.visible = (!(cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"passable?","passable?",1012306625).cljs$core$IFn$_invoke$arity$1(tile))));
} else {
var sprite_26027 = (new PIXI.Sprite(cljs.core.get.call(null,cljs.core.deref.call(null,game.tile_map.tile_textures),(1))));
sprite_26027.tint = (16711680);

sprite_26027.visible = (!(cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"passable?","passable?",1012306625).cljs$core$IFn$_invoke$arity$1(tile))));

sprite_26027.alpha = 0.5;

sprite_26027.position.set(x__$1,y__$1);

game.world.add_editor.call(null,sprite_26027);

draw.passable = sprite_26027;
}

if(clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(tile))){
if(cljs.core.truth_(draw.text)){
draw.text.destroy();

draw.text = null;
} else {
}
} else {
if(cljs.core.truth_(draw.text)){
draw.text.text = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(tile);
} else {
var text_26028 = (new PIXI.Text(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(tile),({"fontFamily": "Arial", "fontSize": (10), "fill": "white"})));
text_26028.position.set(x__$1,y__$1);

game.world.add_editor.call(null,text_26028);

draw.text = text_26028;
}
}
} else {
}

return tile;
});
game.tile_map.clear_map = (function game$tile_map$clear_map(){
game.world.clear.call(null);

var map_cells = new cljs.core.Keyword(null,"map-cells","map-cells",-432327458).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.tile_map.context));
var n__4518__auto__ = game.tile_map.map_width;
var x = (0);
while(true){
if((x < n__4518__auto__)){
var n__4518__auto___26029__$1 = game.tile_map.map_height;
var y_26030 = (0);
while(true){
if((y_26030 < n__4518__auto___26029__$1)){
var tile_26031 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),game.tile_map.sky_tile,new cljs.core.Keyword(null,"interactive","interactive",-2024078362),(0),new cljs.core.Keyword(null,"foreground","foreground",499022036),(0),new cljs.core.Keyword(null,"code","code",1586293142),null,new cljs.core.Keyword(null,"draw","draw",1358331674),({}),new cljs.core.Keyword(null,"passable?","passable?",1012306625),true], null);
(map_cells[x][y_26030] = tile_26031);

game.tile_map.update_tile.call(null,x,y_26030,tile_26031);

var G__26032 = (y_26030 + (1));
y_26030 = G__26032;
continue;
} else {
}
break;
}

var G__26033 = (x + (1));
x = G__26033;
continue;
} else {
return null;
}
break;
}
});
game.tile_map.initialize = (function game$tile_map$initialize(editor_mode_QMARK_){
cljs.core.swap_BANG_.call(null,game.tile_map.context,cljs.core.assoc,new cljs.core.Keyword(null,"editor-mode?","editor-mode?",-1857893371),editor_mode_QMARK_);

cljs.core.swap_BANG_.call(null,game.tile_map.context,cljs.core.assoc,new cljs.core.Keyword(null,"map-cells","map-cells",-432327458),cljs.core.clj__GT_js.call(null,cljs.core.mapv.call(null,(function (_){
return cljs.core.mapv.call(null,(function (___$1){
return null;
}),cljs.core.range.call(null,game.tile_map.map_height));
}),cljs.core.range.call(null,game.tile_map.map_width))));

return game.tile_map.clear_map.call(null);
});
game.tile_map.set_editor_mode = (function game$tile_map$set_editor_mode(b){
return cljs.core.swap_BANG_.call(null,game.tile_map.context,cljs.core.assoc,new cljs.core.Keyword(null,"editor-mode?","editor-mode?",-1857893371),b);
});
game.tile_map.get_cell_by_pixel_x = (function game$tile_map$get_cell_by_pixel_x(pixel_x){
return Math.floor((pixel_x / game.tile_map.tile_width));
});
game.tile_map.get_cell_by_pixel_y = (function game$tile_map$get_cell_by_pixel_y(pixel_y){
return Math.floor((pixel_y / game.tile_map.tile_height));
});
game.tile_map.get_cell_by_pixel = (function game$tile_map$get_cell_by_pixel(pixel_location){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),game.tile_map.get_cell_by_pixel_x.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pixel_location)),new cljs.core.Keyword(null,"y","y",-1757859776),game.tile_map.get_cell_by_pixel_y.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pixel_location))], null);
});
game.tile_map.get_cell_center = (function game$tile_map$get_cell_center(var_args){
var G__26035 = arguments.length;
switch (G__26035) {
case 1:
return game.tile_map.get_cell_center.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return game.tile_map.get_cell_center.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

game.tile_map.get_cell_center.cljs$core$IFn$_invoke$arity$1 = (function (cell){
return game.tile_map.get_cell_center.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
});

game.tile_map.get_cell_center.cljs$core$IFn$_invoke$arity$2 = (function (cell_x,cell_y){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((cell_x * game.tile_map.tile_width) + (game.tile_map.tile_width / (2))),new cljs.core.Keyword(null,"y","y",-1757859776),((cell_y * game.tile_map.tile_height) + (game.tile_map.tile_height / (2)))], null);
});

game.tile_map.get_cell_center.cljs$lang$maxFixedArity = 2;

game.tile_map.cell_world_rectangle = (function game$tile_map$cell_world_rectangle(var_args){
var G__26038 = arguments.length;
switch (G__26038) {
case 1:
return game.tile_map.cell_world_rectangle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return game.tile_map.cell_world_rectangle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

game.tile_map.cell_world_rectangle.cljs$core$IFn$_invoke$arity$1 = (function (cell){
return game.tile_map.cell_world_rectangle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
});

game.tile_map.cell_world_rectangle.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x * game.tile_map.tile_width),new cljs.core.Keyword(null,"y","y",-1757859776),(y * game.tile_map.tile_height),new cljs.core.Keyword(null,"width","width",-384071477),game.tile_map.tile_width,new cljs.core.Keyword(null,"height","height",1025178622),game.tile_map.tile_height], null);
});

game.tile_map.cell_world_rectangle.cljs$lang$maxFixedArity = 2;

game.tile_map.cell_screen_rectangle = (function game$tile_map$cell_screen_rectangle(var_args){
var G__26041 = arguments.length;
switch (G__26041) {
case 1:
return game.tile_map.cell_screen_rectangle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return game.tile_map.cell_screen_rectangle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

game.tile_map.cell_screen_rectangle.cljs$core$IFn$_invoke$arity$1 = (function (cell){
return game.tile_map.cell_screen_rectangle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
});

game.tile_map.cell_screen_rectangle.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return game.camera.world_to_screen_r.call(null,game.tile_map.cell_world_rectangle.call(null,x,y));
});

game.tile_map.cell_screen_rectangle.cljs$lang$maxFixedArity = 2;

game.tile_map.get_map_square_at_cell = (function game$tile_map$get_map_square_at_cell(tile_x,tile_y){
if((((tile_x >= (0))) && ((tile_x < game.tile_map.map_width)) && ((tile_y >= (0))) && ((tile_y < game.tile_map.map_height)))){
return (new cljs.core.Keyword(null,"map-cells","map-cells",-432327458).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.tile_map.context))[tile_x][tile_y]);
} else {
return null;
}
});
game.tile_map.set_tile_at_cell = (function game$tile_map$set_tile_at_cell(tile_x,tile_y,layer,tile_index){
if((((tile_x >= (0))) && ((tile_x < game.tile_map.map_width)) && ((tile_y >= (0))) && ((tile_y < game.tile_map.map_height)))){
var tile = cljs.core.assoc.call(null,(new cljs.core.Keyword(null,"map-cells","map-cells",-432327458).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.tile_map.context))[tile_x][tile_y]),layer,tile_index);
(new cljs.core.Keyword(null,"map-cells","map-cells",-432327458).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.tile_map.context))[tile_x][tile_y] = tile);

return game.tile_map.update_tile.call(null,tile_x,tile_y,tile);
} else {
return null;
}
});
game.tile_map.cell_passable_QMARK_ = (function game$tile_map$cell_passable_QMARK_(var_args){
var G__26044 = arguments.length;
switch (G__26044) {
case 1:
return game.tile_map.cell_passable_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return game.tile_map.cell_passable_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

game.tile_map.cell_passable_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (cell){
return game.tile_map.cell_passable_QMARK_.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
});

game.tile_map.cell_passable_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (cell_x,cell_y){
var temp__5457__auto__ = game.tile_map.get_map_square_at_cell.call(null,cell_x,cell_y);
if(cljs.core.truth_(temp__5457__auto__)){
var square = temp__5457__auto__;
return new cljs.core.Keyword(null,"passable?","passable?",1012306625).cljs$core$IFn$_invoke$arity$1(square);
} else {
return null;
}
});

game.tile_map.cell_passable_QMARK_.cljs$lang$maxFixedArity = 2;

game.tile_map.cell_passable_by_pixel_QMARK_ = (function game$tile_map$cell_passable_by_pixel_QMARK_(pixel_location){
return game.tile_map.cell_passable_QMARK_.call(null,game.tile_map.get_cell_by_pixel_x.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pixel_location)),game.tile_map.get_cell_by_pixel_y.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pixel_location)));
});
game.tile_map.cell_code_value = (function game$tile_map$cell_code_value(var_args){
var G__26047 = arguments.length;
switch (G__26047) {
case 1:
return game.tile_map.cell_code_value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return game.tile_map.cell_code_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

game.tile_map.cell_code_value.cljs$core$IFn$_invoke$arity$1 = (function (cell){
return game.tile_map.cell_code_value.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
});

game.tile_map.cell_code_value.cljs$core$IFn$_invoke$arity$2 = (function (cell_x,cell_y){
var temp__5457__auto__ = game.tile_map.get_map_square_at_cell.call(null,cell_x,cell_y);
if(cljs.core.truth_(temp__5457__auto__)){
var square = temp__5457__auto__;
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(square);
} else {
return null;
}
});

game.tile_map.cell_code_value.cljs$lang$maxFixedArity = 2;

game.tile_map.get_map_square_at_pixel = (function game$tile_map$get_map_square_at_pixel(var_args){
var G__26050 = arguments.length;
switch (G__26050) {
case 1:
return game.tile_map.get_map_square_at_pixel.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return game.tile_map.get_map_square_at_pixel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

game.tile_map.get_map_square_at_pixel.cljs$core$IFn$_invoke$arity$1 = (function (pixel_location){
return game.tile_map.get_map_square_at_pixel.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pixel_location),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pixel_location));
});

game.tile_map.get_map_square_at_pixel.cljs$core$IFn$_invoke$arity$2 = (function (pixel_x,pixel_y){
return game.tile_map.get_map_square_at_cell.call(null,game.tile_map.get_cell_by_pixel_x.call(null,pixel_x),game.tile_map.get_cell_by_pixel_y.call(null,pixel_y));
});

game.tile_map.get_map_square_at_pixel.cljs$lang$maxFixedArity = 2;

game.tile_map.save_map = (function game$tile_map$save_map(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.call(null,(function (a){
return cljs.core.mapv.call(null,(function (v){
return cljs.core.dissoc.call(null,v,new cljs.core.Keyword(null,"draw","draw",1358331674));
}),a);
}),new cljs.core.Keyword(null,"map-cells","map-cells",-432327458).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.tile_map.context))));
});
game.tile_map.load_map = (function game$tile_map$load_map(cells){
var arr = cljs.core.to_array.call(null,cljs.core.map.call(null,(function (ys){
return cljs.core.to_array.call(null,cljs.core.map.call(null,(function (tile){
return cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"draw","draw",1358331674),({}));
}),ys));
}),cljs.reader.read_string.call(null,cells)));
var n__4518__auto___26052 = game.tile_map.map_width;
var x_26053 = (0);
while(true){
if((x_26053 < n__4518__auto___26052)){
var n__4518__auto___26054__$1 = game.tile_map.map_height;
var y_26055 = (0);
while(true){
if((y_26055 < n__4518__auto___26054__$1)){
var tile_26056 = (arr[x_26053][y_26055]);
game.tile_map.update_tile.call(null,x_26053,y_26055,tile_26056);

var G__26057 = (y_26055 + (1));
y_26055 = G__26057;
continue;
} else {
}
break;
}

var G__26058 = (x_26053 + (1));
x_26053 = G__26058;
continue;
} else {
}
break;
}

return cljs.core.swap_BANG_.call(null,game.tile_map.context,cljs.core.assoc,new cljs.core.Keyword(null,"map-cells","map-cells",-432327458),arr);
});
game.tile_map.toggle_passable = (function game$tile_map$toggle_passable(x,y){
var map_cells = new cljs.core.Keyword(null,"map-cells","map-cells",-432327458).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.tile_map.context));
(map_cells[x][y] = cljs.core.update.call(null,(map_cells[x][y]),new cljs.core.Keyword(null,"passable?","passable?",1012306625),cljs.core.not));

return game.tile_map.update_tile.call(null,x,y,(map_cells[x][y]));
});
game.tile_map.set_code = (function game$tile_map$set_code(x,y,code){
var map_cells = new cljs.core.Keyword(null,"map-cells","map-cells",-432327458).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.tile_map.context));
(map_cells[x][y] = cljs.core.assoc.call(null,(map_cells[x][y]),new cljs.core.Keyword(null,"code","code",1586293142),code));

return game.tile_map.update_tile.call(null,x,y,(map_cells[x][y]));
});
