// Compiled by ClojureScript 1.10.439 {}
goog.provide('game.animation_strip');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('game.world');
game.animation_strip.texture = (function game$animation_strip$texture(var_args){
var G__25120 = arguments.length;
switch (G__25120) {
case 5:
return game.animation_strip.texture.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return game.animation_strip.texture.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

game.animation_strip.texture.cljs$core$IFn$_invoke$arity$5 = (function (base_texture,i,frame_width,p__25121,_){
var map__25122 = p__25121;
var map__25122__$1 = (((((!((map__25122 == null))))?(((((map__25122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25122):map__25122);
var x = cljs.core.get.call(null,map__25122__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__25122__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__25122__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__25122__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return (new PIXI.Texture(base_texture,(new PIXI.Rectangle(((i * frame_width) + x),y,width,height)),(new PIXI.Rectangle(((i * frame_width) + x),y,width,height))));
});

game.animation_strip.texture.cljs$core$IFn$_invoke$arity$4 = (function (base_texture,i,width,height){
return (new PIXI.Texture(base_texture,(new PIXI.Rectangle((i * width),(0),width,height)),(new PIXI.Rectangle((i * width),(0),width,height))));
});

game.animation_strip.texture.cljs$lang$maxFixedArity = 5;

game.animation_strip.load_animation = (function game$animation_strip$load_animation(path,width,opts){
var base_texture = PIXI.BaseTexture.fromImage(path,true,PIXI.SCALE_MODES.NEAREST);
var height = base_texture.height;
var frame_count = Math.floor((base_texture.width / width));
var frames = cljs.core.to_array.call(null,(function (){var iter__4434__auto__ = ((function (base_texture,height,frame_count){
return (function game$animation_strip$load_animation_$_iter__25125(s__25126){
return (new cljs.core.LazySeq(null,((function (base_texture,height,frame_count){
return (function (){
var s__25126__$1 = s__25126;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__25126__$1);
if(temp__5457__auto__){
var s__25126__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25126__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__25126__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__25128 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__25127 = (0);
while(true){
if((i__25127 < size__4433__auto__)){
var i = cljs.core._nth.call(null,c__4432__auto__,i__25127);
cljs.core.chunk_append.call(null,b__25128,(cljs.core.truth_(opts)?game.animation_strip.texture.call(null,base_texture,i,width,opts,null):game.animation_strip.texture.call(null,base_texture,i,width,height)));

var G__25129 = (i__25127 + (1));
i__25127 = G__25129;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25128),game$animation_strip$load_animation_$_iter__25125.call(null,cljs.core.chunk_rest.call(null,s__25126__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25128),null);
}
} else {
var i = cljs.core.first.call(null,s__25126__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(opts)?game.animation_strip.texture.call(null,base_texture,i,width,opts,null):game.animation_strip.texture.call(null,base_texture,i,width,height)),game$animation_strip$load_animation_$_iter__25125.call(null,cljs.core.rest.call(null,s__25126__$2)));
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
game.animation_strip.new_animation_strip = (function game$animation_strip$new_animation_strip(var_args){
var args__4647__auto__ = [];
var len__4641__auto___25138 = arguments.length;
var i__4642__auto___25139 = (0);
while(true){
if((i__4642__auto___25139 < len__4641__auto___25138)){
args__4647__auto__.push((arguments[i__4642__auto___25139]));

var G__25140 = (i__4642__auto___25139 + (1));
i__4642__auto___25139 = G__25140;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return game.animation_strip.new_animation_strip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

game.animation_strip.new_animation_strip.cljs$core$IFn$_invoke$arity$variadic = (function (path,frame_width,name,p__25134){
var vec__25135 = p__25134;
var opts = cljs.core.nth.call(null,vec__25135,(0),null);
var animation = game.animation_strip.load_animation.call(null,path,frame_width,opts);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082),new cljs.core.Keyword(null,"next-animation","next-animation",133966088),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"current-frame","current-frame",323239981),new cljs.core.Keyword(null,"frame-delay","frame-delay",-1092400718),new cljs.core.Keyword(null,"loop-animation?","loop-animation?",2121213524),new cljs.core.Keyword(null,"finished-playing?","finished-playing?",1278365337),new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Keyword(null,"texture","texture",-266291651),new cljs.core.Keyword(null,"frame-timer","frame-timer",2123490559)],[frame_width,null,name,(0),0.2,true,false,animation,path,(0)]);
});

game.animation_strip.new_animation_strip.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
game.animation_strip.new_animation_strip.cljs$lang$applyTo = (function (seq25130){
var G__25131 = cljs.core.first.call(null,seq25130);
var seq25130__$1 = cljs.core.next.call(null,seq25130);
var G__25132 = cljs.core.first.call(null,seq25130__$1);
var seq25130__$2 = cljs.core.next.call(null,seq25130__$1);
var G__25133 = cljs.core.first.call(null,seq25130__$2);
var seq25130__$3 = cljs.core.next.call(null,seq25130__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25131,G__25132,G__25133,seq25130__$3);
});

game.animation_strip.update_animation_strip = (function game$animation_strip$update_animation_strip(animation_strip){
var sprite = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(animation_strip);
sprite.loop = new cljs.core.Keyword(null,"loop-animation?","loop-animation?",2121213524).cljs$core$IFn$_invoke$arity$1(animation_strip);

sprite.animationSpeed = new cljs.core.Keyword(null,"frame-delay","frame-delay",-1092400718).cljs$core$IFn$_invoke$arity$1(animation_strip);

return animation_strip;
});
game.animation_strip.play = (function game$animation_strip$play(animation_strip){
var temp__5457__auto___25141 = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(animation_strip);
if(cljs.core.truth_(temp__5457__auto___25141)){
var sprite_25142 = temp__5457__auto___25141;
game.world.add_interactive.call(null,sprite_25142);

sprite_25142.gotoAndPlay((0));
} else {
}

return cljs.core.assoc.call(null,animation_strip,new cljs.core.Keyword(null,"current-frame","current-frame",323239981),(0),new cljs.core.Keyword(null,"finished-playing?","finished-playing?",1278365337),false);
});
game.animation_strip.stop = (function game$animation_strip$stop(animation_strip){
var temp__5457__auto___25143 = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(animation_strip);
if(cljs.core.truth_(temp__5457__auto___25143)){
var sprite_25144 = temp__5457__auto___25143;
game.world.remove_interactive.call(null,sprite_25144);

sprite_25144.stop();
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
