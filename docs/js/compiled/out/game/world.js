// Compiled by ClojureScript 1.10.439 {}
goog.provide('game.world');
goog.require('cljs.core');
goog.require('game.camera');
game.world.new_container = (function game$world$new_container(){
var container = (new PIXI.Container());
container.width = (800);

container.height = (600);

return container;
});
if((typeof game !== 'undefined') && (typeof game.world !== 'undefined') && (typeof game.world.background_tile !== 'undefined')){
} else {
game.world.background_tile = (function (){var c = game.world.new_container.call(null);
game.camera.container.addChild(c);

return c;
})();
}
if((typeof game !== 'undefined') && (typeof game.world !== 'undefined') && (typeof game.world.interactive_tile !== 'undefined')){
} else {
game.world.interactive_tile = (function (){var c = game.world.new_container.call(null);
game.camera.container.addChild(c);

return c;
})();
}
if((typeof game !== 'undefined') && (typeof game.world !== 'undefined') && (typeof game.world.interactive !== 'undefined')){
} else {
game.world.interactive = (function (){var c = game.world.new_container.call(null);
game.camera.container.addChild(c);

return c;
})();
}
if((typeof game !== 'undefined') && (typeof game.world !== 'undefined') && (typeof game.world.foreground_tile !== 'undefined')){
} else {
game.world.foreground_tile = (function (){var c = game.world.new_container.call(null);
game.camera.container.addChild(c);

return c;
})();
}
if((typeof game !== 'undefined') && (typeof game.world !== 'undefined') && (typeof game.world.editor !== 'undefined')){
} else {
game.world.editor = (function (){var c = game.world.new_container.call(null);
game.camera.container.addChild(c);

return c;
})();
}
game.world.background_tile.removeChildren();
game.world.interactive_tile.removeChildren();
game.world.foreground_tile.removeChildren();
game.world.interactive.removeChildren();
game.world.editor.removeChildren();
game.world.add_background_tile = (function game$world$add_background_tile(sprite){
return game.world.background_tile.addChild(sprite);
});
game.world.add_interactive_tile = (function game$world$add_interactive_tile(sprite){
return game.world.interactive_tile.addChild(sprite);
});
game.world.add_interactive = (function game$world$add_interactive(sprite){
return game.world.interactive.addChild(sprite);
});
game.world.remove_interactive = (function game$world$remove_interactive(sprite){
return game.world.interactive.removeChild(sprite);
});
game.world.add_foreground_tile = (function game$world$add_foreground_tile(sprite){
return game.world.foreground_tile.addChild(sprite);
});
game.world.add_editor = (function game$world$add_editor(sprite){
return game.world.editor.addChild(sprite);
});
game.world.clear = (function game$world$clear(){
game.world.background_tile.removeChildren();

game.world.interactive_tile.removeChildren();

game.world.foreground_tile.removeChildren();

game.world.interactive.removeChildren();

return game.world.editor.removeChildren();
});
