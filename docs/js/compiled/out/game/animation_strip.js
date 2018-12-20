// Compiled by ClojureScript 1.10.439 {}
goog.provide('game.animation_strip');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('game.world');
game.animation_strip.load_animation = (function game$animation_strip$load_animation(path,width){
var base_texture = PIXI.BaseTexture.fromImage(path,true,PIXI.SCALE_MODES.NEAREST);
var height = base_texture.height;
var frame_count = Math.floor((base_texture.width / width));
var frames = cljs.core.to_array.call(null,(function (){var iter__4434__auto__ = ((function (base_texture,height,frame_count){
return (function game$animation_strip$load_animation_$_iter__25119(s__25120){
return (new cljs.core.LazySeq(null,((function (base_texture,height,frame_count){
return (function (){
var s__25120__$1 = s__25120;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__25120__$1);
if(temp__5457__auto__){
var s__25120__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25120__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__25120__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__25122 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__25121 = (0);
while(true){
if((i__25121 < size__4433__auto__)){
var i = cljs.core._nth.call(null,c__4432__auto__,i__25121);
cljs.core.chunk_append.call(null,b__25122,(new PIXI.Texture(base_texture,(new PIXI.Rectangle((i * width),(0),width,height)),(new PIXI.Rectangle((i * width),(0),width,height)))));

var G__25123 = (i__25121 + (1));
i__25121 = G__25123;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25122),game$animation_strip$load_animation_$_iter__25119.call(null,cljs.core.chunk_rest.call(null,s__25120__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25122),null);
}
} else {
var i = cljs.core.first.call(null,s__25120__$2);
return cljs.core.cons.call(null,(new PIXI.Texture(base_texture,(new PIXI.Rectangle((i * width),(0),width,height)),(new PIXI.Rectangle((i * width),(0),width,height)))),game$animation_strip$load_animation_$_iter__25119.call(null,cljs.core.rest.call(null,s__25120__$2)));
}
} else {
return null;
}
break;
}
});})(base_texture,height,frame_count))
,null,null));
});})(base_texture,height,frame_count))
;
return iter__4434__auto__.call(null,cljs.core.range.call(null,frame_count));
})());
var animation = (new PIXI.extras.AnimatedSprite(frames));
animation.position.set((-500),(-500));

animation.anchor.x = 0.5;

return animation;
});
game.animation_strip.new_animation_strip = (function game$animation_strip$new_animation_strip(path,frame_width,name){
var animation = game.animation_strip.load_animation.call(null,path,frame_width);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082),new cljs.core.Keyword(null,"next-animation","next-animation",133966088),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"current-frame","current-frame",323239981),new cljs.core.Keyword(null,"frame-delay","frame-delay",-1092400718),new cljs.core.Keyword(null,"loop-animation?","loop-animation?",2121213524),new cljs.core.Keyword(null,"finished-playing?","finished-playing?",1278365337),new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Keyword(null,"texture","texture",-266291651),new cljs.core.Keyword(null,"frame-timer","frame-timer",2123490559)],[frame_width,null,name,(0),0.2,true,false,animation,path,(0)]);
});
game.animation_strip.update_animation_strip = (function game$animation_strip$update_animation_strip(animation_strip){
var sprite = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(animation_strip);
sprite.loop = new cljs.core.Keyword(null,"loop-animation?","loop-animation?",2121213524).cljs$core$IFn$_invoke$arity$1(animation_strip);

sprite.animationSpeed = new cljs.core.Keyword(null,"frame-delay","frame-delay",-1092400718).cljs$core$IFn$_invoke$arity$1(animation_strip);

return animation_strip;
});
game.animation_strip.play = (function game$animation_strip$play(animation_strip){
var temp__5457__auto___25124 = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(animation_strip);
if(cljs.core.truth_(temp__5457__auto___25124)){
var sprite_25125 = temp__5457__auto___25124;
game.world.add_interactive.call(null,sprite_25125);

sprite_25125.gotoAndPlay((0));
} else {
}

return cljs.core.assoc.call(null,animation_strip,new cljs.core.Keyword(null,"current-frame","current-frame",323239981),(0),new cljs.core.Keyword(null,"finished-playing?","finished-playing?",1278365337),false);
});
game.animation_strip.stop = (function game$animation_strip$stop(animation_strip){
var temp__5457__auto___25126 = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(animation_strip);
if(cljs.core.truth_(temp__5457__auto___25126)){
var sprite_25127 = temp__5457__auto___25126;
game.world.remove_interactive.call(null,sprite_25127);

sprite_25127.stop();
} else {
}

return animation_strip;
});
game.animation_strip.update_STAR_ = (function game$animation_strip$update_STAR_(animation_strip,elapsed){
if(cljs.core.truth_(new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(animation_strip).playing)){
return animation_strip;
} else {
return cljs.core.assoc.call(null,animation_strip,new cljs.core.Keyword(null,"finished-playing?","finished-playing?",1278365337),true);
}
});
