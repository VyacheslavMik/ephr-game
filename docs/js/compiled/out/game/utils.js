// Compiled by ClojureScript 1.10.439 {}
goog.provide('game.utils');
goog.require('cljs.core');
game.utils.random_int = (function game$utils$random_int(min,max){
return (cljs.core.rand_int.call(null,(max - min)) + min);
});
game.utils.clamp = (function game$utils$clamp(v,min_v,max_v){
var x__4135__auto__ = min_v;
var y__4136__auto__ = (function (){var x__4138__auto__ = v;
var y__4139__auto__ = max_v;
return ((x__4138__auto__ < y__4139__auto__) ? x__4138__auto__ : y__4139__auto__);
})();
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
});
game.utils.vector_sub = (function game$utils$vector_sub(v1,v2){
return cljs.core.update.call(null,cljs.core.update.call(null,v1,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v2)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v2));
});
game.utils.vector_add = (function game$utils$vector_add(v1,v2){
return cljs.core.update.call(null,cljs.core.update.call(null,v1,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v2)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v2));
});
game.utils.vector_zero = (function game$utils$vector_zero(v){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v),(0));
});
game.utils.vector_mul = (function game$utils$vector_mul(v,f){
return cljs.core.update.call(null,cljs.core.update.call(null,v,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._STAR_,f),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._STAR_,f);
});
game.utils.vector_div = (function game$utils$vector_div(v,f){
return cljs.core.update.call(null,cljs.core.update.call(null,v,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._SLASH_,f),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._SLASH_,f);
});
game.utils.vector_distance = (function game$utils$vector_distance(p__25091,p__25092){
var map__25093 = p__25091;
var map__25093__$1 = (((((!((map__25093 == null))))?(((((map__25093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25093):map__25093);
var x1 = cljs.core.get.call(null,map__25093__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__25093__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__25094 = p__25092;
var map__25094__$1 = (((((!((map__25094 == null))))?(((((map__25094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25094):map__25094);
var x2 = cljs.core.get.call(null,map__25094__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__25094__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return Math.sqrt((((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1))));
});
game.utils.vector_length = (function game$utils$vector_length(p__25097){
var map__25098 = p__25097;
var map__25098__$1 = (((((!((map__25098 == null))))?(((((map__25098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25098):map__25098);
var x = cljs.core.get.call(null,map__25098__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__25098__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return Math.sqrt(((x * x) + (y * y)));
});
game.utils.vector_normalize = (function game$utils$vector_normalize(p__25100){
var map__25101 = p__25100;
var map__25101__$1 = (((((!((map__25101 == null))))?(((((map__25101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25101):map__25101);
var v = map__25101__$1;
var x = cljs.core.get.call(null,map__25101__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__25101__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
if(cljs.core._EQ_.call(null,x,y,(0))){
return v;
} else {
var norm = game.utils.vector_length.call(null,v);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x / norm),new cljs.core.Keyword(null,"y","y",-1757859776),(y / norm)], null);
}
});
game.utils.rectangle_intersects_QMARK_ = (function game$utils$rectangle_intersects_QMARK_(p__25103,p__25104){
var map__25105 = p__25103;
var map__25105__$1 = (((((!((map__25105 == null))))?(((((map__25105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25105):map__25105);
var x1 = cljs.core.get.call(null,map__25105__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__25105__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w1 = cljs.core.get.call(null,map__25105__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var h1 = cljs.core.get.call(null,map__25105__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var map__25106 = p__25104;
var map__25106__$1 = (((((!((map__25106 == null))))?(((((map__25106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25106):map__25106);
var x2 = cljs.core.get.call(null,map__25106__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__25106__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w2 = cljs.core.get.call(null,map__25106__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var h2 = cljs.core.get.call(null,map__25106__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return (!(((((x1 + w1) < x2)) || (((x2 + w2) < x1)) || (((y1 + h1) < y2)) || (((y2 + h2) < y1)))));
});
game.utils.rectangle_left = new cljs.core.Keyword(null,"x","x",2099068185);
game.utils.rectangle_top = new cljs.core.Keyword(null,"y","y",-1757859776);
game.utils.rectangle_right = (function game$utils$rectangle_right(rectangle){
return (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rectangle) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rectangle));
});
game.utils.rectangle_bottom = (function game$utils$rectangle_bottom(rectangle){
return (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rectangle) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rectangle));
});
game.utils.rectangle_offset = (function game$utils$rectangle_offset(rectangle,point){
return game.utils.vector_add.call(null,rectangle,point);
});
game.utils.rectangle_contains = (function game$utils$rectangle_contains(rect,x,y){
return (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect) <= x)) && ((x < (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect)))) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect) <= y)) && ((y < (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect)))));
});
game.utils.color_lerp = (function game$utils$color_lerp(a,b,t){
var ar = goog.object.get(a,"r");
var ag = goog.object.get(a,"g");
var ab = goog.object.get(a,"b");
var aa = goog.object.get(a,"a");
var br = goog.object.get(b,"r");
var bg = goog.object.get(b,"g");
var bb = goog.object.get(b,"b");
var ba = goog.object.get(b,"a");
var t__$1 = (function (){var x__4135__auto__ = (0);
var y__4136__auto__ = (function (){var x__4138__auto__ = t;
var y__4139__auto__ = (1);
return ((x__4138__auto__ < y__4139__auto__) ? x__4138__auto__ : y__4139__auto__);
})();
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})();
return ({"r": (ar + ((br - ar) * t__$1)), "g": (ag + ((bg - ag) * t__$1)), "b": (ab + ((bb - ab) * t__$1)), "a": (aa + ((ba - aa) * t__$1))});
});
