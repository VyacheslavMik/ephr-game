// Compiled by ClojureScript 1.10.439 {:optimize-constants true}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__4647__auto__ = [];
var len__4641__auto___52152 = arguments.length;
var i__4642__auto___52153 = (0);
while(true){
if((i__4642__auto___52153 < len__4641__auto___52152)){
args__4647__auto__.push((arguments[i__4642__auto___52153]));

var G__52154 = (i__4642__auto___52153 + (1));
i__4642__auto___52153 = G__52154;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.print.cljs$lang$applyTo = (function (seq52151){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52151));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__4647__auto__ = [];
var len__4641__auto___52156 = arguments.length;
var i__4642__auto___52157 = (0);
while(true){
if((i__4642__auto___52157 < len__4641__auto___52156)){
args__4647__auto__.push((arguments[i__4642__auto___52157]));

var G__52158 = (i__4642__auto___52157 + (1));
i__4642__auto___52157 = G__52158;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.print,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.println.cljs$lang$applyTo = (function (seq52155){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52155));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,(function (){var pred__52159 = cljs.core._EQ_;
var expr__52160 = c;
if(cljs.core.truth_(pred__52159.call(null,"\b",expr__52160))){
return "\\backspace";
} else {
if(cljs.core.truth_(pred__52159.call(null,"\t",expr__52160))){
return "\\tab";
} else {
if(cljs.core.truth_(pred__52159.call(null,"\n",expr__52160))){
return "\\newline";
} else {
if(cljs.core.truth_(pred__52159.call(null,"\f",expr__52160))){
return "\\formfeed";
} else {
if(cljs.core.truth_(pred__52159.call(null,"\r",expr__52160))){
return "\\return";
} else {
if(cljs.core.truth_(pred__52159.call(null,"\"",expr__52160))){
return "\\\"";
} else {
if(cljs.core.truth_(pred__52159.call(null,"\\",expr__52160))){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__4647__auto__ = [];
var len__4641__auto___52163 = arguments.length;
var i__4642__auto___52164 = (0);
while(true){
if((i__4642__auto___52164 < len__4641__auto___52163)){
args__4647__auto__.push((arguments[i__4642__auto___52164]));

var G__52165 = (i__4642__auto___52164 + (1));
i__4642__auto___52164 = G__52165;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.pr.cljs$lang$applyTo = (function (seq52162){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52162));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___52167 = arguments.length;
var i__4642__auto___52168 = (0);
while(true){
if((i__4642__auto___52168 < len__4641__auto___52167)){
args__4647__auto__.push((arguments[i__4642__auto___52168]));

var G__52169 = (i__4642__auto___52168 + (1));
i__4642__auto___52168 = G__52169;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.pr,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.prn.cljs$lang$applyTo = (function (seq52166){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52166));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return ((typeof n === 'number') && ((!(isNaN(n)))) && ((!((n === Infinity)))) && ((!((parseFloat(n) === parseInt(n,(10)))))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if(((typeof c === 'string') && ((c.length === (1))))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first.call(null,lis__$1);
var remainder = cljs.core.next.call(null,lis__$1);
var vec__52170 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.call(null,vec__52170,(0),null);
var new_context = cljs.core.nth.call(null,vec__52170,(1),null);
var G__52173 = new_context;
var G__52174 = remainder;
var G__52175 = cljs.core.conj.call(null,acc,result);
context = G__52173;
lis__$1 = G__52174;
acc = G__52175;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__52176 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__52176,(0),null);
var new_context = cljs.core.nth.call(null,vec__52176,(1),null);
if(cljs.core.not.call(null,result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__52179 = new_context;
var G__52180 = cljs.core.conj.call(null,acc,result);
context = G__52179;
acc = G__52180;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__52181 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__52181,(0),null);
var continue$ = cljs.core.nth.call(null,vec__52181,(1),null);
var new_context = cljs.core.nth.call(null,vec__52181,(2),null);
if(cljs.core.not.call(null,continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__52184 = new_context;
var G__52185 = cljs.core.conj.call(null,acc,result);
context = G__52184;
acc = G__52185;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4434__auto__ = (function cljs$pprint$unzip_map_$_iter__52186(s__52187){
return (new cljs.core.LazySeq(null,(function (){
var s__52187__$1 = s__52187;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52187__$1);
if(temp__5457__auto__){
var s__52187__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52187__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__52187__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__52189 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__52188 = (0);
while(true){
if((i__52188 < size__4433__auto__)){
var vec__52190 = cljs.core._nth.call(null,c__4432__auto__,i__52188);
var k = cljs.core.nth.call(null,vec__52190,(0),null);
var vec__52193 = cljs.core.nth.call(null,vec__52190,(1),null);
var v1 = cljs.core.nth.call(null,vec__52193,(0),null);
var v2 = cljs.core.nth.call(null,vec__52193,(1),null);
cljs.core.chunk_append.call(null,b__52189,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__52218 = (i__52188 + (1));
i__52188 = G__52218;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52189),cljs$pprint$unzip_map_$_iter__52186.call(null,cljs.core.chunk_rest.call(null,s__52187__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52189),null);
}
} else {
var vec__52196 = cljs.core.first.call(null,s__52187__$2);
var k = cljs.core.nth.call(null,vec__52196,(0),null);
var vec__52199 = cljs.core.nth.call(null,vec__52196,(1),null);
var v1 = cljs.core.nth.call(null,vec__52199,(0),null);
var v2 = cljs.core.nth.call(null,vec__52199,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__52186.call(null,cljs.core.rest.call(null,s__52187__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,m);
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4434__auto__ = (function cljs$pprint$unzip_map_$_iter__52202(s__52203){
return (new cljs.core.LazySeq(null,(function (){
var s__52203__$1 = s__52203;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52203__$1);
if(temp__5457__auto__){
var s__52203__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52203__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__52203__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__52205 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__52204 = (0);
while(true){
if((i__52204 < size__4433__auto__)){
var vec__52206 = cljs.core._nth.call(null,c__4432__auto__,i__52204);
var k = cljs.core.nth.call(null,vec__52206,(0),null);
var vec__52209 = cljs.core.nth.call(null,vec__52206,(1),null);
var v1 = cljs.core.nth.call(null,vec__52209,(0),null);
var v2 = cljs.core.nth.call(null,vec__52209,(1),null);
cljs.core.chunk_append.call(null,b__52205,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__52219 = (i__52204 + (1));
i__52204 = G__52219;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52205),cljs$pprint$unzip_map_$_iter__52202.call(null,cljs.core.chunk_rest.call(null,s__52203__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52205),null);
}
} else {
var vec__52212 = cljs.core.first.call(null,s__52203__$2);
var k = cljs.core.nth.call(null,vec__52212,(0),null);
var vec__52215 = cljs.core.nth.call(null,vec__52212,(1),null);
var v1 = cljs.core.nth.call(null,vec__52215,(0),null);
var v2 = cljs.core.nth.call(null,vec__52215,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__52202.call(null,cljs.core.rest.call(null,s__52203__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4434__auto__ = (function cljs$pprint$tuple_map_$_iter__52220(s__52221){
return (new cljs.core.LazySeq(null,(function (){
var s__52221__$1 = s__52221;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52221__$1);
if(temp__5457__auto__){
var s__52221__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52221__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__52221__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__52223 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__52222 = (0);
while(true){
if((i__52222 < size__4433__auto__)){
var vec__52224 = cljs.core._nth.call(null,c__4432__auto__,i__52222);
var k = cljs.core.nth.call(null,vec__52224,(0),null);
var v = cljs.core.nth.call(null,vec__52224,(1),null);
cljs.core.chunk_append.call(null,b__52223,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__52230 = (i__52222 + (1));
i__52222 = G__52230;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52223),cljs$pprint$tuple_map_$_iter__52220.call(null,cljs.core.chunk_rest.call(null,s__52221__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52223),null);
}
} else {
var vec__52227 = cljs.core.first.call(null,s__52221__$2);
var k = cljs.core.nth.call(null,vec__52227,(0),null);
var v = cljs.core.nth.call(null,vec__52227,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__52220.call(null,cljs.core.rest.call(null,s__52221__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count.call(null,s);
if((((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1))),c)))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if((!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c)))){
return cljs.core.subs.call(null,s,(0),(n + (1)));
} else {
var G__52231 = (n - (1));
n = G__52231;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count.call(null,s);
if((((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(0)),c)))){
var n = (0);
while(true){
if(((cljs.core._EQ_.call(null,n,len)) || ((!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c)))))){
return cljs.core.subs.call(null,s,n);
} else {
var G__52232 = (n + (1));
n = G__52232;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_.call(null,val))?cljs.core.set.call(null,val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if(((cljs.core._EQ_.call(null,pos,cljs.core.count.call(null,aseq))) || (cljs.core.not.call(null,test.call(null,cljs.core.nth.call(null,aseq,pos)))))){
return pos;
} else {
var G__52233 = (pos + (1));
pos = G__52233;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((((!((pp == null)))) && ((!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__4347__auto__ = (((pp == null))?null:pp);
var m__4348__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,pp);
} else {
var m__4348__auto____$1 = (cljs.pprint._ppflush["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,pp);
} else {
throw cljs.core.missing_protocol.call(null,"IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
return sym.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field.call(null,this$,cljs.core.cst$kw$cur);
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field.call(null,this$,cljs.core.cst$kw$line);
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field.call(null,this$,cljs.core.cst$kw$max);
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field.call(null,this$,cljs.core.cst$kw$max,new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field.call(null,this$,cljs.core.cst$kw$base);
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.call(null,c,"\n")){
cljs.pprint.set_field.call(null,this$,cljs.core.cst$kw$cur,(0));

cljs.pprint.set_field.call(null,this$,cljs.core.cst$kw$line,(cljs.pprint.get_field.call(null,this$,cljs.core.cst$kw$line) + (1)));
} else {
cljs.pprint.set_field.call(null,this$,cljs.core.cst$kw$cur,(cljs.pprint.get_field.call(null,this$,cljs.core.cst$kw$cur) + (1)));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$,cljs.core.cst$kw$base),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__52236 = arguments.length;
switch (G__52236) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.call(null,writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max,max_columns,cljs.core.cst$kw$cur,(0),cljs.core.cst$kw$line,(0),cljs.core.cst$kw$base,writer], null));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint52237 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint52237 = (function (writer,max_columns,fields,meta52238){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta52238 = meta52238;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint52237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_52239,meta52238__$1){
var self__ = this;
var _52239__$1 = this;
return (new cljs.pprint.t_cljs$pprint52237(self__.writer,self__.max_columns,self__.fields,meta52238__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint52237.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_52239){
var self__ = this;
var _52239__$1 = this;
return self__.meta52238;
});})(fields))
;

cljs.pprint.t_cljs$pprint52237.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint52237.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint52237.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__52240 = cljs.core._EQ_;
var expr__52241 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__52240.call(null,String,expr__52241))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field.call(null,this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field.call(null,this$__$1,cljs.core.cst$kw$cur) + cljs.core.count.call(null,s)));
} else {
cljs.pprint.set_field.call(null,this$__$1,cljs.core.cst$kw$cur,((cljs.core.count.call(null,s) - nl) - (1)));

cljs.pprint.set_field.call(null,this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field.call(null,this$__$1,cljs.core.cst$kw$line) + cljs.core.count.call(null,cljs.core.filter.call(null,((function (s,nl,pred__52240,expr__52241,this$__$1,fields){
return (function (p1__52234_SHARP_){
return cljs.core._EQ_.call(null,p1__52234_SHARP_,"\n");
});})(s,nl,pred__52240,expr__52241,this$__$1,fields))
,s))));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_(pred__52240.call(null,Number,expr__52241))){
return cljs.pprint.c_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__52241)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint52237.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta52238], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint52237.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint52237.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint52237";

cljs.pprint.t_cljs$pprint52237.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.pprint/t_cljs$pprint52237");
});})(fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint52237.
 */
cljs.pprint.__GT_t_cljs$pprint52237 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint52237(writer__$1,max_columns__$1,fields__$1,meta52238){
return (new cljs.pprint.t_cljs$pprint52237(writer__$1,max_columns__$1,fields__$1,meta52238));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint52237(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k52245,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__52249 = k52245;
var G__52249__$1 = (((G__52249 instanceof cljs.core.Keyword))?G__52249.fqn:null);
switch (G__52249__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52245,else__4304__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__52250){
var vec__52251 = p__52250;
var k__4324__auto__ = cljs.core.nth.call(null,vec__52251,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__52251,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#cljs.pprint.logical-block{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52244){
var self__ = this;
var G__52244__$1 = this;
return (new cljs.core.RecordIter((0),G__52244__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52246,other52247){
var self__ = this;
var this52246__$1 = this;
return (((!((other52247 == null)))) && ((this52246__$1.constructor === other52247.constructor)) && (cljs.core._EQ_.call(null,this52246__$1.parent,other52247.parent)) && (cljs.core._EQ_.call(null,this52246__$1.section,other52247.section)) && (cljs.core._EQ_.call(null,this52246__$1.start_col,other52247.start_col)) && (cljs.core._EQ_.call(null,this52246__$1.indent,other52247.indent)) && (cljs.core._EQ_.call(null,this52246__$1.done_nl,other52247.done_nl)) && (cljs.core._EQ_.call(null,this52246__$1.intra_block_nl,other52247.intra_block_nl)) && (cljs.core._EQ_.call(null,this52246__$1.prefix,other52247.prefix)) && (cljs.core._EQ_.call(null,this52246__$1.per_line_prefix,other52247.per_line_prefix)) && (cljs.core._EQ_.call(null,this52246__$1.suffix,other52247.suffix)) && (cljs.core._EQ_.call(null,this52246__$1.logical_block_callback,other52247.logical_block_callback)) && (cljs.core._EQ_.call(null,this52246__$1.__extmap,other52247.__extmap)));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$suffix,null,cljs.core.cst$kw$indent,null,cljs.core.cst$kw$parent,null,cljs.core.cst$kw$section,null,cljs.core.cst$kw$done_DASH_nl,null,cljs.core.cst$kw$start_DASH_col,null,cljs.core.cst$kw$prefix,null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,null], null), null),k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__52244){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__52254 = cljs.core.keyword_identical_QMARK_;
var expr__52255 = k__4309__auto__;
if(cljs.core.truth_(pred__52254.call(null,cljs.core.cst$kw$parent,expr__52255))){
return (new cljs.pprint.logical_block(G__52244,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52254.call(null,cljs.core.cst$kw$section,expr__52255))){
return (new cljs.pprint.logical_block(self__.parent,G__52244,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52254.call(null,cljs.core.cst$kw$start_DASH_col,expr__52255))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__52244,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52254.call(null,cljs.core.cst$kw$indent,expr__52255))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__52244,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52254.call(null,cljs.core.cst$kw$done_DASH_nl,expr__52255))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__52244,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52254.call(null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,expr__52255))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__52244,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52254.call(null,cljs.core.cst$kw$prefix,expr__52255))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__52244,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52254.call(null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,expr__52255))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__52244,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52254.call(null,cljs.core.cst$kw$suffix,expr__52255))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__52244,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52254.call(null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,expr__52255))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__52244,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__52244),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$parent,self__.parent,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$section,self__.section,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_col,self__.start_col,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$indent,self__.indent,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$done_DASH_nl,self__.done_nl,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$prefix,self__.prefix,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$suffix,self__.suffix,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback,null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__52244){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__52244,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$section,cljs.core.cst$sym$start_DASH_col,cljs.core.cst$sym$indent,cljs.core.cst$sym$done_DASH_nl,cljs.core.cst$sym$intra_DASH_block_DASH_nl,cljs.core.cst$sym$prefix,cljs.core.cst$sym$per_DASH_line_DASH_prefix,cljs.core.cst$sym$suffix,cljs.core.cst$sym$logical_DASH_block_DASH_callback], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"cljs.pprint/logical-block");
});

/**
 * Positional factory function for cljs.pprint/logical-block.
 */
cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

/**
 * Factory function for cljs.pprint/logical-block, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__52248){
var extmap__4340__auto__ = (function (){var G__52257 = cljs.core.dissoc.call(null,G__52248,cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback);
if(cljs.core.record_QMARK_.call(null,G__52248)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__52257);
} else {
return G__52257;
}
})();
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__52248),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__52248),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__52248),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__52248),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__52248),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__52248),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__52248),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__52248),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__52248),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__52248),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__52259 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__52259;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq.call(null,l);
if(l__$1){
return (cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,l__$1)) - cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k52261,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__52265 = k52261;
var G__52265__$1 = (((G__52265 instanceof cljs.core.Keyword))?G__52265.fqn:null);
switch (G__52265__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52261,else__4304__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__52266){
var vec__52267 = p__52266;
var k__4324__auto__ = cljs.core.nth.call(null,vec__52267,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__52267,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52260){
var self__ = this;
var G__52260__$1 = this;
return (new cljs.core.RecordIter((0),G__52260__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52262,other52263){
var self__ = this;
var this52262__$1 = this;
return (((!((other52263 == null)))) && ((this52262__$1.constructor === other52263.constructor)) && (cljs.core._EQ_.call(null,this52262__$1.type_tag,other52263.type_tag)) && (cljs.core._EQ_.call(null,this52262__$1.data,other52263.data)) && (cljs.core._EQ_.call(null,this52262__$1.trailing_white_space,other52263.trailing_white_space)) && (cljs.core._EQ_.call(null,this52262__$1.start_pos,other52263.start_pos)) && (cljs.core._EQ_.call(null,this52262__$1.end_pos,other52263.end_pos)) && (cljs.core._EQ_.call(null,this52262__$1.__extmap,other52263.__extmap)));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$data,null], null), null),k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__52260){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__52270 = cljs.core.keyword_identical_QMARK_;
var expr__52271 = k__4309__auto__;
if(cljs.core.truth_(pred__52270.call(null,cljs.core.cst$kw$type_DASH_tag,expr__52271))){
return (new cljs.pprint.buffer_blob(G__52260,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52270.call(null,cljs.core.cst$kw$data,expr__52271))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__52260,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52270.call(null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,expr__52271))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__52260,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52270.call(null,cljs.core.cst$kw$start_DASH_pos,expr__52271))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__52260,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52270.call(null,cljs.core.cst$kw$end_DASH_pos,expr__52271))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__52260,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__52260),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$data,self__.data,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__52260){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__52260,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$data,cljs.core.cst$sym$trailing_DASH_white_DASH_space,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"cljs.pprint/buffer-blob");
});

/**
 * Positional factory function for cljs.pprint/buffer-blob.
 */
cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/buffer-blob, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__52264){
var extmap__4340__auto__ = (function (){var G__52273 = cljs.core.dissoc.call(null,G__52264,cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos);
if(cljs.core.record_QMARK_.call(null,G__52264)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__52273);
} else {
return G__52273;
}
})();
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__52264),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__52264),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__52264),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__52264),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__52264),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__23045__auto__){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__23045__auto__),cljs.core.cst$kw$buffer_DASH_blob);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k52276,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__52280 = k52276;
var G__52280__$1 = (((G__52280 instanceof cljs.core.Keyword))?G__52280.fqn:null);
switch (G__52280__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52276,else__4304__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__52281){
var vec__52282 = p__52281;
var k__4324__auto__ = cljs.core.nth.call(null,vec__52282,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__52282,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#cljs.pprint.nl-t{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52275){
var self__ = this;
var G__52275__$1 = this;
return (new cljs.core.RecordIter((0),G__52275__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52277,other52278){
var self__ = this;
var this52277__$1 = this;
return (((!((other52278 == null)))) && ((this52277__$1.constructor === other52278.constructor)) && (cljs.core._EQ_.call(null,this52277__$1.type_tag,other52278.type_tag)) && (cljs.core._EQ_.call(null,this52277__$1.type,other52278.type)) && (cljs.core._EQ_.call(null,this52277__$1.logical_block,other52278.logical_block)) && (cljs.core._EQ_.call(null,this52277__$1.start_pos,other52278.start_pos)) && (cljs.core._EQ_.call(null,this52277__$1.end_pos,other52278.end_pos)) && (cljs.core._EQ_.call(null,this52277__$1.__extmap,other52278.__extmap)));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__52275){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__52285 = cljs.core.keyword_identical_QMARK_;
var expr__52286 = k__4309__auto__;
if(cljs.core.truth_(pred__52285.call(null,cljs.core.cst$kw$type_DASH_tag,expr__52286))){
return (new cljs.pprint.nl_t(G__52275,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52285.call(null,cljs.core.cst$kw$type,expr__52286))){
return (new cljs.pprint.nl_t(self__.type_tag,G__52275,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52285.call(null,cljs.core.cst$kw$logical_DASH_block,expr__52286))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__52275,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52285.call(null,cljs.core.cst$kw$start_DASH_pos,expr__52286))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__52275,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52285.call(null,cljs.core.cst$kw$end_DASH_pos,expr__52286))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__52275,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__52275),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$type,self__.type,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__52275){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__52275,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$type,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"cljs.pprint/nl-t");
});

/**
 * Positional factory function for cljs.pprint/nl-t.
 */
cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/nl-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__52279){
var extmap__4340__auto__ = (function (){var G__52288 = cljs.core.dissoc.call(null,G__52279,cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos);
if(cljs.core.record_QMARK_.call(null,G__52279)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__52288);
} else {
return G__52288;
}
})();
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__52279),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__52279),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__52279),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__52279),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__52279),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__23045__auto__){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__23045__auto__),cljs.core.cst$kw$nl_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k52291,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__52295 = k52291;
var G__52295__$1 = (((G__52295 instanceof cljs.core.Keyword))?G__52295.fqn:null);
switch (G__52295__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52291,else__4304__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__52296){
var vec__52297 = p__52296;
var k__4324__auto__ = cljs.core.nth.call(null,vec__52297,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__52297,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52290){
var self__ = this;
var G__52290__$1 = this;
return (new cljs.core.RecordIter((0),G__52290__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52292,other52293){
var self__ = this;
var this52292__$1 = this;
return (((!((other52293 == null)))) && ((this52292__$1.constructor === other52293.constructor)) && (cljs.core._EQ_.call(null,this52292__$1.type_tag,other52293.type_tag)) && (cljs.core._EQ_.call(null,this52292__$1.logical_block,other52293.logical_block)) && (cljs.core._EQ_.call(null,this52292__$1.start_pos,other52293.start_pos)) && (cljs.core._EQ_.call(null,this52292__$1.end_pos,other52293.end_pos)) && (cljs.core._EQ_.call(null,this52292__$1.__extmap,other52293.__extmap)));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__52290){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__52300 = cljs.core.keyword_identical_QMARK_;
var expr__52301 = k__4309__auto__;
if(cljs.core.truth_(pred__52300.call(null,cljs.core.cst$kw$type_DASH_tag,expr__52301))){
return (new cljs.pprint.start_block_t(G__52290,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52300.call(null,cljs.core.cst$kw$logical_DASH_block,expr__52301))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__52290,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52300.call(null,cljs.core.cst$kw$start_DASH_pos,expr__52301))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__52290,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52300.call(null,cljs.core.cst$kw$end_DASH_pos,expr__52301))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__52290,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__52290),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__52290){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__52290,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"cljs.pprint/start-block-t");
});

/**
 * Positional factory function for cljs.pprint/start-block-t.
 */
cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/start-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__52294){
var extmap__4340__auto__ = (function (){var G__52303 = cljs.core.dissoc.call(null,G__52294,cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos);
if(cljs.core.record_QMARK_.call(null,G__52294)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__52303);
} else {
return G__52303;
}
})();
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__52294),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__52294),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__52294),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__52294),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__23045__auto__){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__23045__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k52306,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__52310 = k52306;
var G__52310__$1 = (((G__52310 instanceof cljs.core.Keyword))?G__52310.fqn:null);
switch (G__52310__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52306,else__4304__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__52311){
var vec__52312 = p__52311;
var k__4324__auto__ = cljs.core.nth.call(null,vec__52312,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__52312,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52305){
var self__ = this;
var G__52305__$1 = this;
return (new cljs.core.RecordIter((0),G__52305__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52307,other52308){
var self__ = this;
var this52307__$1 = this;
return (((!((other52308 == null)))) && ((this52307__$1.constructor === other52308.constructor)) && (cljs.core._EQ_.call(null,this52307__$1.type_tag,other52308.type_tag)) && (cljs.core._EQ_.call(null,this52307__$1.logical_block,other52308.logical_block)) && (cljs.core._EQ_.call(null,this52307__$1.start_pos,other52308.start_pos)) && (cljs.core._EQ_.call(null,this52307__$1.end_pos,other52308.end_pos)) && (cljs.core._EQ_.call(null,this52307__$1.__extmap,other52308.__extmap)));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__52305){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__52315 = cljs.core.keyword_identical_QMARK_;
var expr__52316 = k__4309__auto__;
if(cljs.core.truth_(pred__52315.call(null,cljs.core.cst$kw$type_DASH_tag,expr__52316))){
return (new cljs.pprint.end_block_t(G__52305,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52315.call(null,cljs.core.cst$kw$logical_DASH_block,expr__52316))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__52305,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52315.call(null,cljs.core.cst$kw$start_DASH_pos,expr__52316))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__52305,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52315.call(null,cljs.core.cst$kw$end_DASH_pos,expr__52316))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__52305,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__52305),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__52305){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__52305,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"cljs.pprint/end-block-t");
});

/**
 * Positional factory function for cljs.pprint/end-block-t.
 */
cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/end-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__52309){
var extmap__4340__auto__ = (function (){var G__52318 = cljs.core.dissoc.call(null,G__52309,cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos);
if(cljs.core.record_QMARK_.call(null,G__52309)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__52318);
} else {
return G__52318;
}
})();
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__52309),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__52309),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__52309),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__52309),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__23045__auto__){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__23045__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k52321,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__52325 = k52321;
var G__52325__$1 = (((G__52325 instanceof cljs.core.Keyword))?G__52325.fqn:null);
switch (G__52325__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52321,else__4304__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__52326){
var vec__52327 = p__52326;
var k__4324__auto__ = cljs.core.nth.call(null,vec__52327,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__52327,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#cljs.pprint.indent-t{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52320){
var self__ = this;
var G__52320__$1 = this;
return (new cljs.core.RecordIter((0),G__52320__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52322,other52323){
var self__ = this;
var this52322__$1 = this;
return (((!((other52323 == null)))) && ((this52322__$1.constructor === other52323.constructor)) && (cljs.core._EQ_.call(null,this52322__$1.type_tag,other52323.type_tag)) && (cljs.core._EQ_.call(null,this52322__$1.logical_block,other52323.logical_block)) && (cljs.core._EQ_.call(null,this52322__$1.relative_to,other52323.relative_to)) && (cljs.core._EQ_.call(null,this52322__$1.offset,other52323.offset)) && (cljs.core._EQ_.call(null,this52322__$1.start_pos,other52323.start_pos)) && (cljs.core._EQ_.call(null,this52322__$1.end_pos,other52323.end_pos)) && (cljs.core._EQ_.call(null,this52322__$1.__extmap,other52323.__extmap)));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$relative_DASH_to,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__52320){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__52330 = cljs.core.keyword_identical_QMARK_;
var expr__52331 = k__4309__auto__;
if(cljs.core.truth_(pred__52330.call(null,cljs.core.cst$kw$type_DASH_tag,expr__52331))){
return (new cljs.pprint.indent_t(G__52320,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52330.call(null,cljs.core.cst$kw$logical_DASH_block,expr__52331))){
return (new cljs.pprint.indent_t(self__.type_tag,G__52320,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52330.call(null,cljs.core.cst$kw$relative_DASH_to,expr__52331))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__52320,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52330.call(null,cljs.core.cst$kw$offset,expr__52331))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__52320,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52330.call(null,cljs.core.cst$kw$start_DASH_pos,expr__52331))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__52320,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52330.call(null,cljs.core.cst$kw$end_DASH_pos,expr__52331))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__52320,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__52320),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$relative_DASH_to,self__.relative_to,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$offset,self__.offset,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__52320){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__52320,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$relative_DASH_to,cljs.core.cst$sym$offset,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"cljs.pprint/indent-t");
});

/**
 * Positional factory function for cljs.pprint/indent-t.
 */
cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/indent-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__52324){
var extmap__4340__auto__ = (function (){var G__52333 = cljs.core.dissoc.call(null,G__52324,cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos);
if(cljs.core.record_QMARK_.call(null,G__52324)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__52333);
} else {
return G__52333;
}
})();
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__52324),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__52324),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__52324),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__52324),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__52324),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__52324),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__23045__auto__){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__23045__auto__),cljs.core.cst$kw$indent_DASH_t);
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.write_token !== 'undefined')){
} else {
cljs.pprint.write_token = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","write-token"),((function (method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__){
return (function (p1__52336_SHARP_,p2__52335_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__52335_SHARP_);
});})(method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__))
,cljs.core.cst$kw$default,hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.write_token,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__5457__auto___52337 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5457__auto___52337)){
var cb_52338 = temp__5457__auto___52337;
cb_52338.call(null,cljs.core.cst$kw$start);
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__5457__auto___52339 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5457__auto___52339)){
var prefix_52340 = temp__5457__auto___52339;
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix_52340);
} else {
}

var col = cljs.pprint.get_column.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__5457__auto___52341 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5457__auto___52341)){
var cb_52342 = temp__5457__auto___52341;
cb_52342.call(null,cljs.core.cst$kw$end);
} else {
}

var temp__5457__auto__ = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5457__auto__)){
var suffix = temp__5457__auto__;
return cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,cljs.core.cst$kw$indent_DASH_t,(function (this$,token){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_.call(null,cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__52343 = cljs.core._EQ_;
var expr__52344 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(pred__52343.call(null,cljs.core.cst$kw$block,expr__52344))){
return cljs.core.deref.call(null,cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__52343.call(null,cljs.core.cst$kw$current,expr__52344))){
return cljs.pprint.get_column.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__52344)].join('')));
}
}
})()));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,cljs.core.cst$kw$buffer_DASH_blob,(function (this$,token){
return cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,cljs.core.cst$kw$nl_DASH_t,(function (this$,token){
if(cljs.core.truth_((function (){var or__4047__auto__ = cljs.core._EQ_.call(null,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$mandatory);
if(or__4047__auto__){
return or__4047__auto__;
} else {
var and__4036__auto__ = (!(cljs.core._EQ_.call(null,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$fill)));
if(and__4036__auto__){
return cljs.core.deref.call(null,cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__4036__auto__;
}
}
})())){
cljs.pprint.emit_nl.call(null,this$,token);
} else {
var temp__5455__auto___52346 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5455__auto___52346)){
var tws_52347 = temp__5455__auto___52346;
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_52347);
} else {
}
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__52348 = cljs.core.seq.call(null,tokens);
var chunk__52349 = null;
var count__52350 = (0);
var i__52351 = (0);
while(true){
if((i__52351 < count__52350)){
var token = cljs.core._nth.call(null,chunk__52349,i__52351);
if((!(cljs.core._EQ_.call(null,cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t)))){
var temp__5455__auto___52352 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5455__auto___52352)){
var tws_52353 = temp__5455__auto___52352;
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_52353);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_52354 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__4036__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4036__auto__)){
return tws_52354;
} else {
return and__4036__auto__;
}
})())){
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_52354);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}


var G__52355 = seq__52348;
var G__52356 = chunk__52349;
var G__52357 = count__52350;
var G__52358 = (i__52351 + (1));
seq__52348 = G__52355;
chunk__52349 = G__52356;
count__52350 = G__52357;
i__52351 = G__52358;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__52348);
if(temp__5457__auto__){
var seq__52348__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52348__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__52348__$1);
var G__52359 = cljs.core.chunk_rest.call(null,seq__52348__$1);
var G__52360 = c__4461__auto__;
var G__52361 = cljs.core.count.call(null,c__4461__auto__);
var G__52362 = (0);
seq__52348 = G__52359;
chunk__52349 = G__52360;
count__52350 = G__52361;
i__52351 = G__52362;
continue;
} else {
var token = cljs.core.first.call(null,seq__52348__$1);
if((!(cljs.core._EQ_.call(null,cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t)))){
var temp__5455__auto___52363 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5455__auto___52363)){
var tws_52364 = temp__5455__auto___52363;
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_52364);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_52365 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__4036__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4036__auto__)){
return tws_52365;
} else {
return and__4036__auto__;
}
})())){
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_52365);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}


var G__52366 = cljs.core.next.call(null,seq__52348__$1);
var G__52367 = null;
var G__52368 = (0);
var G__52369 = (0);
seq__52348 = G__52366;
chunk__52349 = G__52367;
count__52350 = G__52368;
i__52351 = G__52369;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
return (((maxcol == null)) || (((cljs.pprint.get_column.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))) + cljs.pprint.buffer_length.call(null,tokens)) < maxcol)));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__4047__auto__ = cljs.core.deref.call(null,cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,section)));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width.call(null,this$);
var maxcol = cljs.pprint.get_max_column.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
var and__4036__auto__ = miser_width;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = maxcol;
if(cljs.core.truth_(and__4036__auto____$1)){
var and__4036__auto____$2 = (cljs.core.deref.call(null,cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__4036__auto____$2){
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
} else {
return and__4036__auto____$2;
}
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined')){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","emit-nl?"),((function (method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__){
return (function (t,_,___$1,___$2){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__))
,cljs.core.cst$kw$default,hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,cljs.core.cst$kw$linear,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,cljs.core.cst$kw$miser,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,cljs.core.cst$kw$fill,(function (newl,this$,section,subsection){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
var or__4047__auto__ = cljs.core.deref.call(null,cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,subsection)));
if(or__4047__auto____$1){
return or__4047__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}
}
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,cljs.core.cst$kw$mandatory,(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__52370_SHARP_){
return (!(((cljs.pprint.nl_t_QMARK_.call(null,p1__52370_SHARP_)) && (cljs.pprint.ancestor_QMARK_.call(null,cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__52370_SHARP_),lb)))));
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq.call(null,cljs.core.drop.call(null,(cljs.core.count.call(null,section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__52371_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__52371_SHARP_);
return (!(((cljs.pprint.nl_t_QMARK_.call(null,p1__52371_SHARP_)) && (((cljs.core._EQ_.call(null,nl_lb,lb)) || (cljs.pprint.ancestor_QMARK_.call(null,nl_lb,lb)))))));
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_.call(null,cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_.call(null,cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_.call(null,cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_.call(null,cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__52372 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__52372;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var istr_52373 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.deref.call(null,cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count.call(null,prefix))," "));
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),istr_52373);

return cljs.pprint.update_nl_state.call(null,lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__52374_SHARP_){
return (!(cljs.pprint.nl_t_QMARK_.call(null,p1__52374_SHARP_)));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__52375 = cljs.pprint.split_at_newline.call(null,tokens);
var a = cljs.core.nth.call(null,vec__52375,(0),null);
var b = cljs.core.nth.call(null,vec__52375,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens.call(null,this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__52378 = cljs.pprint.get_section.call(null,b);
var section = cljs.core.nth.call(null,vec__52378,(0),null);
var remainder = cljs.core.nth.call(null,vec__52378,(1),null);
var newl = cljs.core.first.call(null,b);
var do_nl = cljs.pprint.emit_nl_QMARK_.call(null,newl,this$,section,cljs.pprint.get_sub_section.call(null,b));
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl.call(null,this$,newl);

return cljs.core.next.call(null,b);
})()
:b);
var long_section = (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,result)));
var result__$1 = ((long_section)?(function (){var rem2 = cljs.pprint.write_token_string.call(null,this$,section);
if(cljs.core._EQ_.call(null,rem2,section)){
cljs.pprint.write_tokens.call(null,this$,section,false);

return remainder;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
while(true){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,buffer));

if((!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,buffer)))){
var new_buffer = cljs.pprint.write_token_string.call(null,this$,buffer);
if((!((buffer === new_buffer)))){
var G__52381 = new_buffer;
buffer = G__52381;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.conj.call(null,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),token));

if((!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))))))){
return cljs.pprint.write_line.call(null,this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line.call(null,this$);

var temp__5455__auto__ = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5455__auto__)){
var buf = temp__5455__auto__;
cljs.pprint.write_tokens.call(null,this$,buf,true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5457__auto__ = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5457__auto__)){
var tws = temp__5457__auto__;
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.call(null,s,"\n",(-1));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,lines),(1))){
return s;
} else {
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))));
var l = cljs.core.first.call(null,lines);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$buffering,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))))){
var oldpos_52386 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_52387 = (oldpos_52386 + cljs.core.count.call(null,l));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_52387);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,l,null,oldpos_52386,newpos_52387));

cljs.pprint.write_buffered_output.call(null,this$);
} else {
cljs.pprint.write_white_space.call(null,this$);

cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l);
}

cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),"\n");

var seq__52382_52388 = cljs.core.seq.call(null,cljs.core.next.call(null,cljs.core.butlast.call(null,lines)));
var chunk__52383_52389 = null;
var count__52384_52390 = (0);
var i__52385_52391 = (0);
while(true){
if((i__52385_52391 < count__52384_52390)){
var l_52392__$1 = cljs.core._nth.call(null,chunk__52383_52389,i__52385_52391);
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_52392__$1);

cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}


var G__52393 = seq__52382_52388;
var G__52394 = chunk__52383_52389;
var G__52395 = count__52384_52390;
var G__52396 = (i__52385_52391 + (1));
seq__52382_52388 = G__52393;
chunk__52383_52389 = G__52394;
count__52384_52390 = G__52395;
i__52385_52391 = G__52396;
continue;
} else {
var temp__5457__auto___52397 = cljs.core.seq.call(null,seq__52382_52388);
if(temp__5457__auto___52397){
var seq__52382_52398__$1 = temp__5457__auto___52397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52382_52398__$1)){
var c__4461__auto___52399 = cljs.core.chunk_first.call(null,seq__52382_52398__$1);
var G__52400 = cljs.core.chunk_rest.call(null,seq__52382_52398__$1);
var G__52401 = c__4461__auto___52399;
var G__52402 = cljs.core.count.call(null,c__4461__auto___52399);
var G__52403 = (0);
seq__52382_52388 = G__52400;
chunk__52383_52389 = G__52401;
count__52384_52390 = G__52402;
i__52385_52391 = G__52403;
continue;
} else {
var l_52404__$1 = cljs.core.first.call(null,seq__52382_52398__$1);
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_52404__$1);

cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}


var G__52405 = cljs.core.next.call(null,seq__52382_52398__$1);
var G__52406 = null;
var G__52407 = (0);
var G__52408 = (0);
seq__52382_52388 = G__52405;
chunk__52383_52389 = G__52406;
count__52384_52390 = G__52407;
i__52385_52391 = G__52408;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$buffering,cljs.core.cst$kw$writing);

return cljs.core.last.call(null,lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),c);
} else {
if(cljs.core._EQ_.call(null,c,"\n")){
return cljs.pprint.write_initial_lines.call(null,this$,"\n");
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,cljs.core.char$.call(null,c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$buffer_DASH_block,cljs.core.cst$kw$pretty_DASH_writer,cljs.core.cst$kw$sections,cljs.core.cst$kw$mode,cljs.core.cst$kw$pos,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$base,cljs.core.cst$kw$buffer_DASH_level,cljs.core.cst$kw$buffer],[lb,miser_width,lb,true,null,cljs.core.cst$kw$writing,(0),null,cljs.pprint.column_writer.call(null,writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint52409 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint52409 = (function (writer,max_columns,miser_width,lb,fields,meta52410){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta52410 = meta52410;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint52409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_52411,meta52410__$1){
var self__ = this;
var _52411__$1 = this;
return (new cljs.pprint.t_cljs$pprint52409(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta52410__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint52409.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_52411){
var self__ = this;
var _52411__$1 = this;
return self__.meta52410;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint52409.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint52409.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__52412 = cljs.core._EQ_;
var expr__52413 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__52412.call(null,String,expr__52413))){
var s0 = cljs.pprint.write_initial_lines.call(null,this$__$1,x);
var s = clojure.string.replace_first.call(null,s0,/\s+$/,"");
var white_space = cljs.core.subs.call(null,s0,cljs.core.count.call(null,s));
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
if(cljs.core._EQ_.call(null,mode,cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space.call(null,this$__$1);

cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),s);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,white_space);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
var newpos = (oldpos + cljs.core.count.call(null,s0));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer.call(null,this$__$1,cljs.pprint.make_buffer_blob.call(null,s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_(pred__52412.call(null,Number,expr__52413))){
return cljs.pprint.p_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__52413)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint52409.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush.call(null,this$__$1);

return cljs.core._flush.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint52409.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint52409.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),cljs.core.cst$kw$buffering)){
cljs.pprint.write_tokens.call(null,this$__$1,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space.call(null,this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint52409.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta52410], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint52409.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint52409.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint52409";

cljs.pprint.t_cljs$pprint52409.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.pprint/t_cljs$pprint52409");
});})(lb,fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint52409.
 */
cljs.pprint.__GT_t_cljs$pprint52409 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint52409(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta52410){
return (new cljs.pprint.t_cljs$pprint52409(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta52410));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint52409(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.call(null,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space.call(null,this$);

var temp__5457__auto___52415 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5457__auto___52415)){
var cb_52416 = temp__5457__auto___52415;
cb_52416.call(null,cljs.core.cst$kw$start);
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var col = cljs.pprint.get_column.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count.call(null,prefix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_start_block_t.call(null,lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var suffix = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space.call(null,this$);

if(cljs.core.truth_(suffix)){
cljs.core._write.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
}

var temp__5457__auto___52417 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5457__auto___52417)){
var cb_52418 = temp__5457__auto___52417;
cb_52418.call(null,cljs.core.cst$kw$end);
} else {
}
} else {
var oldpos_52419 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_52420 = (oldpos_52419 + (cljs.core.truth_(suffix)?cljs.core.count.call(null,suffix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_52420);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_end_block_t.call(null,lb,oldpos_52419,newpos_52420));
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$buffering);

var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_nl_t.call(null,type,cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core.reset_BANG_.call(null,cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__52421 = cljs.core._EQ_;
var expr__52422 = relative_to;
if(cljs.core.truth_(pred__52421.call(null,cljs.core.cst$kw$block,expr__52422))){
return cljs.core.deref.call(null,cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__52421.call(null,cljs.core.cst$kw$current,expr__52422))){
return cljs.pprint.get_column.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__52422)].join('')));
}
}
})()));
} else {
var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_indent_t.call(null,lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined')){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__52424_SHARP_){
var temp__5457__auto__ = cljs.core.get.call(null,t,cljs.core.key.call(null,p1__52424_SHARP_));
if(cljs.core.truth_(temp__5457__auto__)){
var v = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val.call(null,p1__52424_SHARP_)], null);
} else {
return null;
}
}),m));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__4036__auto__ = (((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x));
if(and__4036__auto__){
return cljs.core.cst$kw$pretty_DASH_writer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,x)));
} else {
return and__4036__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer.call(null,base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__4036__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__4036__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})();
if((!(cljs.pprint._STAR_print_pretty_STAR_))){
cljs.pprint.pr.call(null,object);
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object);
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__4647__auto__ = [];
var len__4641__auto___52457 = arguments.length;
var i__4642__auto___52458 = (0);
while(true){
if((i__4642__auto___52458 < len__4641__auto___52457)){
args__4647__auto__.push((arguments[i__4642__auto___52458]));

var G__52459 = (i__4642__auto___52458 + (1));
i__4642__auto___52458 = G__52459;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stream,true], null),cljs.core.apply.call(null,cljs.core.hash_map,kw_args));
var _STAR_print_base_STAR__orig_val__52429 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR__orig_val__52430 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR__orig_val__52431 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__52432 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR__orig_val__52433 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR__orig_val__52434 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR__orig_val__52435 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR__orig_val__52436 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR__orig_val__52437 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR__orig_val__52438 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR__orig_val__52439 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR__orig_val__52440 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
var _STAR_print_base_STAR__temp_val__52441 = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);
var _STAR_print_circle_STAR__temp_val__52442 = cljs.core.cst$kw$circle.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);
var _STAR_print_length_STAR__temp_val__52443 = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);
var _STAR_print_level_STAR__temp_val__52444 = cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);
var _STAR_print_lines_STAR__temp_val__52445 = cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);
var _STAR_print_miser_width_STAR__temp_val__52446 = cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);
var _STAR_print_pprint_dispatch_STAR__temp_val__52447 = cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);
var _STAR_print_pretty_STAR__temp_val__52448 = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);
var _STAR_print_radix_STAR__temp_val__52449 = cljs.core.cst$kw$radix.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);
var _STAR_print_readably_STAR__temp_val__52450 = cljs.core.cst$kw$readably.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);
var _STAR_print_right_margin_STAR__temp_val__52451 = cljs.core.cst$kw$right_DASH_margin.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);
var _STAR_print_suppress_namespaces_STAR__temp_val__52452 = cljs.core.cst$kw$suppress_DASH_namespaces.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);
cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__temp_val__52441;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__temp_val__52442;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__52443;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__52444;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__temp_val__52445;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__temp_val__52446;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__52447;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__52448;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__temp_val__52449;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__52450;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__52451;

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__temp_val__52452;

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_.call(null,options,cljs.core.cst$kw$stream))?cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__23028__auto___52460 = base_writer;
var new_writer__23029__auto___52461 = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__23028__auto___52460));
var _STAR_out_STAR__orig_val__52453_52462 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__52454_52463 = ((new_writer__23029__auto___52461)?cljs.pprint.make_pretty_writer.call(null,base_writer__23028__auto___52460,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__23028__auto___52460);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__52454_52463;

try{cljs.pprint.write_out.call(null,object);

cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__52453_52462;
}} else {
var _STAR_out_STAR__orig_val__52455_52464 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__52456_52465 = base_writer;
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__52456_52465;

try{cljs.pprint.pr.call(null,object);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__52455_52464;
}}

if(optval === true){
cljs.core.string_print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
}

if((optval == null)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__orig_val__52440;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__52439;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__52438;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__orig_val__52437;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__52436;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__52435;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__orig_val__52434;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__orig_val__52433;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__52432;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__52431;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__orig_val__52430;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__orig_val__52429;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.pprint.write.cljs$lang$applyTo = (function (seq52427){
var G__52428 = cljs.core.first.call(null,seq52427);
var seq52427__$1 = cljs.core.next.call(null,seq52427);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52428,seq52427__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__52467 = arguments.length;
switch (G__52467) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__52468 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__52469 = (new cljs.core.StringBufferWriter(sb));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__52469;

try{cljs.pprint.pprint.call(null,object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__52468;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__23028__auto__ = writer;
var new_writer__23029__auto__ = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__23028__auto__));
var _STAR_out_STAR__orig_val__52470 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__52471 = ((new_writer__23029__auto__)?cljs.pprint.make_pretty_writer.call(null,base_writer__23028__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__23028__auto__);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__52471;

try{var _STAR_print_pretty_STAR__orig_val__52472_52475 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_pretty_STAR__temp_val__52473_52476 = true;
cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__52473_52476;

try{cljs.pprint.write_out.call(null,object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__52472_52475;
}
if((!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,cljs.core._STAR_out_STAR_))))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__52470;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not.call(null,choices.call(null,arg))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__4036__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__4036__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__4036__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mandatory,null,cljs.core.cst$kw$miser,null,cljs.core.cst$kw$fill,null,cljs.core.cst$kw$linear,null], null), null));

return cljs.pprint.nl.call(null,cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg.call(null,relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$current,null], null), null));

return cljs.pprint.indent.call(null,cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$section,null,cljs.core.cst$kw$line,null,cljs.core.cst$kw$line_DASH_relative,null,cljs.core.cst$kw$section_DASH_relative,null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__4647__auto__ = [];
var len__4641__auto___52480 = arguments.length;
var i__4642__auto___52481 = (0);
while(true){
if((i__4642__auto___52481 < len__4641__auto___52480)){
args__4647__auto__.push((arguments[i__4642__auto___52481]));

var G__52482 = (i__4642__auto___52481 + (1));
i__4642__auto___52481 = G__52482;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format.call(null,format_in):format_in);
var navigator = cljs.pprint.init_navigator.call(null,args);
return cljs.pprint.execute_format.call(null,writer,compiled_format,navigator);
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq52477){
var G__52478 = cljs.core.first.call(null,seq52477);
var seq52477__$1 = cljs.core.next.call(null,seq52477);
var G__52479 = cljs.core.first.call(null,seq52477__$1);
var seq52477__$2 = cljs.core.next.call(null,seq52477__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52478,G__52479,seq52477__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,offset," "))),"^",cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k52484,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__52488 = k52484;
var G__52488__$1 = (((G__52488 instanceof cljs.core.Keyword))?G__52488.fqn:null);
switch (G__52488__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52484,else__4304__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__52489){
var vec__52490 = p__52489;
var k__4324__auto__ = cljs.core.nth.call(null,vec__52490,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__52490,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52483){
var self__ = this;
var G__52483__$1 = this;
return (new cljs.core.RecordIter((0),G__52483__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52485,other52486){
var self__ = this;
var this52485__$1 = this;
return (((!((other52486 == null)))) && ((this52485__$1.constructor === other52486.constructor)) && (cljs.core._EQ_.call(null,this52485__$1.seq,other52486.seq)) && (cljs.core._EQ_.call(null,this52485__$1.rest,other52486.rest)) && (cljs.core._EQ_.call(null,this52485__$1.pos,other52486.pos)) && (cljs.core._EQ_.call(null,this52485__$1.__extmap,other52486.__extmap)));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pos,null,cljs.core.cst$kw$seq,null,cljs.core.cst$kw$rest,null], null), null),k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__52483){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__52493 = cljs.core.keyword_identical_QMARK_;
var expr__52494 = k__4309__auto__;
if(cljs.core.truth_(pred__52493.call(null,cljs.core.cst$kw$seq,expr__52494))){
return (new cljs.pprint.arg_navigator(G__52483,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52493.call(null,cljs.core.cst$kw$rest,expr__52494))){
return (new cljs.pprint.arg_navigator(self__.seq,G__52483,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52493.call(null,cljs.core.cst$kw$pos,expr__52494))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__52483,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__52483),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$seq,self__.seq,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$rest,self__.rest,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$pos,self__.pos,null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__52483){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__52483,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$seq,cljs.core.cst$sym$rest,cljs.core.cst$sym$pos], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"cljs.pprint/arg-navigator");
});

/**
 * Positional factory function for cljs.pprint/arg-navigator.
 */
cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/arg-navigator, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__52487){
var extmap__4340__auto__ = (function (){var G__52496 = cljs.core.dissoc.call(null,G__52487,cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos);
if(cljs.core.record_QMARK_.call(null,G__52487)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__52496);
} else {
return G__52496;
}
})();
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__52487),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__52487),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__52487),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq.call(null,s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__52498 = cljs.pprint.next_arg.call(null,navigator);
var raw_format = cljs.core.nth.call(null,vec__52498,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52498,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format.call(null,raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
return cljs.pprint.relative_reposition.call(null,navigator,(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position));
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition.call(null,navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k52502,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__52506 = k52502;
var G__52506__$1 = (((G__52506 instanceof cljs.core.Keyword))?G__52506.fqn:null);
switch (G__52506__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52502,else__4304__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__52507){
var vec__52508 = p__52507;
var k__4324__auto__ = cljs.core.nth.call(null,vec__52508,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__52508,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52501){
var self__ = this;
var G__52501__$1 = this;
return (new cljs.core.RecordIter((0),G__52501__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52503,other52504){
var self__ = this;
var this52503__$1 = this;
return (((!((other52504 == null)))) && ((this52503__$1.constructor === other52504.constructor)) && (cljs.core._EQ_.call(null,this52503__$1.func,other52504.func)) && (cljs.core._EQ_.call(null,this52503__$1.def,other52504.def)) && (cljs.core._EQ_.call(null,this52503__$1.params,other52504.params)) && (cljs.core._EQ_.call(null,this52503__$1.offset,other52504.offset)) && (cljs.core._EQ_.call(null,this52503__$1.__extmap,other52504.__extmap)));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$func,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$def,null], null), null),k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__52501){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__52511 = cljs.core.keyword_identical_QMARK_;
var expr__52512 = k__4309__auto__;
if(cljs.core.truth_(pred__52511.call(null,cljs.core.cst$kw$func,expr__52512))){
return (new cljs.pprint.compiled_directive(G__52501,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52511.call(null,cljs.core.cst$kw$def,expr__52512))){
return (new cljs.pprint.compiled_directive(self__.func,G__52501,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52511.call(null,cljs.core.cst$kw$params,expr__52512))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__52501,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52511.call(null,cljs.core.cst$kw$offset,expr__52512))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__52501,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__52501),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$func,self__.func,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$def,self__.def,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$params,self__.params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$offset,self__.offset,null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__52501){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__52501,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$func,cljs.core.cst$sym$def,cljs.core.cst$sym$params,cljs.core.cst$sym$offset], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"cljs.pprint/compiled-directive");
});

/**
 * Positional factory function for cljs.pprint/compiled-directive.
 */
cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

/**
 * Factory function for cljs.pprint/compiled-directive, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__52505){
var extmap__4340__auto__ = (function (){var G__52514 = cljs.core.dissoc.call(null,G__52505,cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset);
if(cljs.core.record_QMARK_.call(null,G__52505)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__52514);
} else {
return G__52514;
}
})();
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__52505),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__52505),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__52505),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__52505),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__52516,navigator){
var vec__52517 = p__52516;
var param = cljs.core.nth.call(null,vec__52517,(0),null);
var vec__52520 = cljs.core.nth.call(null,vec__52517,(1),null);
var raw_val = cljs.core.nth.call(null,vec__52520,(0),null);
var offset = cljs.core.nth.call(null,vec__52520,(1),null);
var vec__52523 = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.call(null,raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg.call(null,navigator):((cljs.core._EQ_.call(null,raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.call(null,vec__52523,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__52523,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__52526 = cljs.pprint.map_passing_context.call(null,cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.call(null,vec__52526,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__52526,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if(cljs.core._EQ_.call(null,cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__4047__auto__ = cljs.core.get.call(null,cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__52529 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__52529,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__52529,(1),null);
var base_output = (function (){var or__4047__auto__ = cljs.pprint.format_simple_number.call(null,arg);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return print_func.call(null,arg);
}
})();
var base_width = base_output.length;
var min_width = (base_width + cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot.call(null,((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params)) + (1)) * cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(width - base_width),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join(''));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join(''));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_.call(null,x)){
return true;
} else {
if(cljs.pprint.float_QMARK_.call(null,x)){
return cljs.core._EQ_.call(null,x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (p1__52532_SHARP_){
if((p1__52532_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem.call(null,p1__52532_SHARP_,base),cljs.core.quot.call(null,p1__52532_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (xlated_val){
return (function (p1__52533_SHARP_){
if((p1__52533_SHARP_ < (10))){
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"0") + p1__52533_SHARP_));
} else {
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"a") + (p1__52533_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders.call(null,base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str.call(null,base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.reverse.call(null,cljs.core.take.call(null,unit,x))),cljs.core.seq.call(null,cljs.core.drop.call(null,unit,x))], null);
}),cljs.core.reverse.call(null,lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__52535 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__52535,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__52535,(1),null);
if(cljs.pprint.integral_QMARK_.call(null,arg)){
var neg_52538 = (arg < (0));
var pos_arg_52539 = ((neg_52538)?(- arg):arg);
var raw_str_52540 = cljs.pprint.opt_base_str.call(null,base,pos_arg_52539);
var group_str_52541 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.call(null,((function (neg_52538,pos_arg_52539,raw_str_52540,vec__52535,arg,arg_navigator__$1){
return (function (p1__52534_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__52534_SHARP_);
});})(neg_52538,pos_arg_52539,raw_str_52540,vec__52535,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_.call(null,cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_52540));
var commas = cljs.core.repeat.call(null,cljs.core.count.call(null,groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.next.call(null,cljs.core.interleave.call(null,commas,groups)));
})():raw_str_52540);
var signed_str_52542 = ((neg_52538)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_52541)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_52541)].join(''):group_str_52541
));
var padded_str_52543 = (((signed_str_52542.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_52542.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_52542)].join(''):signed_str_52542);
cljs.pprint.print.call(null,padded_str_52543);
} else {
cljs.pprint.format_ascii.call(null,cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$colinc,(1),cljs.core.cst$kw$minpad,(0),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((hundreds > (0))) && ((tens > (0)))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count.call(null,parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first.call(null,parts);
var remainder = cljs.core.next.call(null,parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((!(cljs.core.empty_QMARK_.call(null,this$)))) && ((!(cljs.core.empty_QMARK_.call(null,acc))))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((!(cljs.core.empty_QMARK_.call(null,this$)))) && (((pos + offset) > (0)))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__52544 = ((cljs.core.empty_QMARK_.call(null,this$))?acc:cljs.core.conj.call(null,acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__52545 = (pos - (1));
var G__52546 = cljs.core.first.call(null,remainder);
var G__52547 = cljs.core.next.call(null,remainder);
acc = G__52544;
pos = G__52545;
this$ = G__52546;
remainder = G__52547;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__52548 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__52548,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52548,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zero");
} else {
var abs_arg_52551 = (((arg < (0)))?(- arg):arg);
var parts_52552 = cljs.pprint.remainders.call(null,(1000),abs_arg_52551);
if((cljs.core.count.call(null,parts_52552) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_52553 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,parts_52552);
var full_str_52554 = cljs.pprint.add_english_scales.call(null,parts_strs_52553,(0));
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_52554)].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((hundreds > (0))) && ((tens > (0)))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
if((((ten_digit > (0))) && ((!((unit_digit > (0))))))){
return cljs.core.nth.call(null,cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__52555 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__52555,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52555,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zeroth");
} else {
var abs_arg_52558 = (((arg < (0)))?(- arg):arg);
var parts_52559 = cljs.pprint.remainders.call(null,(1000),abs_arg_52558);
if((cljs.core.count.call(null,parts_52559) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_52560 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,cljs.core.drop_last.call(null,parts_52559));
var head_str_52561 = cljs.pprint.add_english_scales.call(null,parts_strs_52560,(1));
var tail_str_52562 = cljs.pprint.format_simple_ordinal.call(null,cljs.core.last.call(null,parts_52559));
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((!(cljs.core.empty_QMARK_.call(null,head_str_52561)))) && ((!(cljs.core.empty_QMARK_.call(null,tail_str_52562))))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_52561),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_52562)].join(''):(((!(cljs.core.empty_QMARK_.call(null,head_str_52561))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_52561),"th"].join(''):tail_str_52562
)))].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_52563 = cljs.core.rem.call(null,arg,(100));
var not_teens_52564 = ((((11) < low_two_digits_52563)) || (((19) > low_two_digits_52563)));
var low_digit_52565 = cljs.core.rem.call(null,low_two_digits_52563,(10));
cljs.pprint.print.call(null,(((((low_digit_52565 === (1))) && (not_teens_52564)))?"st":(((((low_digit_52565 === (2))) && (not_teens_52564)))?"nd":(((((low_digit_52565 === (3))) && (not_teens_52564)))?"rd":"th"
))));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__52566 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__52566,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52566,(1),null);
if(((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000))))){
var digits_52569 = cljs.pprint.remainders.call(null,(10),arg);
var acc_52570 = cljs.core.PersistentVector.EMPTY;
var pos_52571 = (cljs.core.count.call(null,digits_52569) - (1));
var digits_52572__$1 = digits_52569;
while(true){
if(cljs.core.empty_QMARK_.call(null,digits_52572__$1)){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,acc_52570));
} else {
var digit_52573 = cljs.core.first.call(null,digits_52572__$1);
var G__52574 = ((cljs.core._EQ_.call(null,(0),digit_52573))?acc_52570:cljs.core.conj.call(null,acc_52570,cljs.core.nth.call(null,cljs.core.nth.call(null,table,pos_52571),(digit_52573 - (1)))));
var G__52575 = (pos_52571 - (1));
var G__52576 = cljs.core.next.call(null,digits_52572__$1);
acc_52570 = G__52574;
pos_52571 = G__52575;
digits_52572__$1 = G__52576;
continue;
}
break;
}
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__52577 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__52577,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52577,(1),null);
var as_int = cljs.pprint.char_code.call(null,c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.call(null,cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.call(null,"Meta-");
} else {
}

cljs.pprint.print.call(null,(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(base_char + (64))))].join(''):((cljs.core._EQ_.call(null,base_char,(127)))?"Control-?":cljs.core.char$.call(null,base_char)
))));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__52580 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__52580,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52580,(1),null);
var pred__52583_52586 = cljs.core._EQ_;
var expr__52584_52587 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(pred__52583_52586.call(null,"o",expr__52584_52587))){
cljs.pprint.cl_format.call(null,true,"\\o~3, '0o",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__52583_52586.call(null,"u",expr__52584_52587))){
cljs.pprint.cl_format.call(null,true,"\\u~4, '0x",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__52583_52586.call(null,null,expr__52584_52587))){
cljs.pprint.print_char.call(null,c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__52584_52587)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__52588 = cljs.pprint.next_arg.call(null,navigator);
var char$ = cljs.core.nth.call(null,vec__52588,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52588,(1),null);
cljs.pprint.print.call(null,char$);

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first.call(null,context);
return ((cljs.core._EQ_.call(null,cljs.core.cst$kw$up_DASH_arrow,token)) || (cljs.core._EQ_.call(null,cljs.core.cst$kw$colon_DASH_up_DASH_arrow,token)));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second.call(null,cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.pprint.abort_QMARK_.call(null,context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__52591 = cljs.pprint.realize_parameter_list.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__52591,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__52591,(1),null);
var vec__52594 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__52594,(0),null);
var offsets = cljs.core.nth.call(null,vec__52594,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,cljs.core.cst$kw$base_DASH_args,base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(f));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count.call(null,s) - (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(dotloc + (1))))].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,(0),exploc),cljs.core.subs.call(null,s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(2),exploc))].join(''),cljs.core.subs.call(null,s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__52597 = cljs.pprint.float_parts_base.call(null,f);
var m = cljs.core.nth.call(null,vec__52597,(0),null);
var e = cljs.core.nth.call(null,vec__52597,(1),null);
var m1 = cljs.pprint.rtrim.call(null,m,"0");
var m2 = cljs.pprint.ltrim.call(null,m1,"0");
var delta = (cljs.core.count.call(null,m1) - cljs.core.count.call(null,m2));
var e__$1 = (((((cljs.core.count.call(null,e) > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,e,(0)),"+"))))?cljs.core.subs.call(null,e,(1)):e);
if(cljs.core.empty_QMARK_.call(null,m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count.call(null,s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.call(null,cljs.core.str,"1",cljs.core.repeat.call(null,(len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.call(null,"9",s.charAt(i))){
var G__52600 = (i - (1));
i = G__52600;
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.subs.call(null,s,(0),i),cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,s.charAt(i)) + (1))),cljs.core.repeat.call(null,(len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__4047__auto__ = d;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count.call(null,m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__4135__auto__ = (2);
var y__4136__auto__ = w;
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__4135__auto__ = (e + (1));
var y__4136__auto__ = (w__$1 - (1));
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})():(w__$1 + e)
));
var vec__52601 = ((cljs.core._EQ_.call(null,round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.call(null,vec__52601,(0),null);
var e1 = cljs.core.nth.call(null,vec__52601,(1),null);
var round_pos__$1 = cljs.core.nth.call(null,vec__52601,(2),null);
var len__$1 = cljs.core.nth.call(null,vec__52601,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.call(null,m1,round_pos__$1);
var result = cljs.core.subs.call(null,m1,(0),round_pos__$1);
if((cljs.pprint.char_code.call(null,round_char) >= cljs.pprint.char_code.call(null,"5"))){
var round_up_result = cljs.pprint.inc_s.call(null,result);
var expanded = (cljs.core.count.call(null,round_up_result) > cljs.core.count.call(null,result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.call(null,round_up_result,(0),(cljs.core.count.call(null,round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__52604 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.call(null,vec__52604,(0),null);
var e1 = cljs.core.nth.call(null,vec__52604,(1),null);
var len = cljs.core.count.call(null,m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal.call(null,cljs.pprint.expand_fixed.call(null,m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var vec__52607 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__52607,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52607,(1),null);
var vec__52610 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.call(null,vec__52610,(0),null);
var abs = cljs.core.nth.call(null,vec__52610,(1),null);
var abs__$1 = cljs.pprint.convert_ratio.call(null,abs);
var vec__52613 = cljs.pprint.float_parts.call(null,abs__$1);
var mantissa = cljs.core.nth.call(null,vec__52613,(0),null);
var exp = cljs.core.nth.call(null,vec__52613,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__4047__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not.call(null,d)) && (((cljs.core.count.call(null,mantissa) - (1)) <= scaled_exp)));
var vec__52616 = cljs.pprint.round_str.call(null,mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.call(null,vec__52616,(0),null);
var scaled_exp__$1 = cljs.core.nth.call(null,vec__52616,(1),null);
var expanded = cljs.core.nth.call(null,vec__52616,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__4036__auto__ = w;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = d;
if(cljs.core.truth_(and__4036__auto____$1)){
return (((d >= (1))) && (cljs.core._EQ_.call(null,fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.call(null,fixed_repr.charAt((1)),".")) && ((cljs.core.count.call(null,fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0))))));
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())?cljs.core.subs.call(null,fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.call(null,cljs.core.first.call(null,fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_52619 = cljs.core.count.call(null,fixed_repr__$1);
var signed_len_52620 = (cljs.core.truth_(add_sign)?(len_52619 + (1)):len_52619);
var prepend_zero_52621__$1 = ((prepend_zero) && ((!((signed_len_52620 >= w)))));
var append_zero_52622__$1 = ((append_zero) && ((!((signed_len_52620 >= w)))));
var full_len_52623 = ((((prepend_zero_52621__$1) || (append_zero_52622__$1)))?(signed_len_52620 + (1)):signed_len_52620);
if(cljs.core.truth_((function (){var and__4036__auto__ = (full_len_52623 > w);
if(and__4036__auto__){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4036__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len_52623),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_52621__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_52622__$1)?"0":null))].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join(''));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__52624 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__52624,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52624,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var G__52630_52640 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__52631_52641 = G__52630_52640;
var mantissa_52642 = cljs.core.nth.call(null,vec__52631_52641,(0),null);
var exp_52643 = cljs.core.nth.call(null,vec__52631_52641,(1),null);
var G__52630_52644__$1 = G__52630_52640;
while(true){
var vec__52634_52645 = G__52630_52644__$1;
var mantissa_52646__$1 = cljs.core.nth.call(null,vec__52634_52645,(0),null);
var exp_52647__$1 = cljs.core.nth.call(null,vec__52634_52645,(1),null);
var w_52648 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_52649 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_52650 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_52651 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_52652 = (function (){var or__4047__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "E";
}
})();
var add_sign_52653 = (function (){var or__4047__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_52654 = (k_52651 <= (0));
var scaled_exp_52655 = (exp_52647__$1 - (k_52651 - (1)));
var scaled_exp_str_52656 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_52655));
var scaled_exp_str_52657__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_52652),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_52655 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_52650)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(e_52650 - cljs.core.count.call(null,scaled_exp_str_52656)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_52656)].join('');
var exp_width_52658 = cljs.core.count.call(null,scaled_exp_str_52657__$1);
var base_mantissa_width_52659 = cljs.core.count.call(null,mantissa_52646__$1);
var scaled_mantissa_52660 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(- k_52651),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_52646__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_52649)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((d_52649 - (base_mantissa_width_52659 - (1))) - (((k_52651 < (0)))?(- k_52651):(0))),"0")):null))].join('');
var w_mantissa_52661 = (cljs.core.truth_(w_52648)?(w_52648 - exp_width_52658):null);
var vec__52637_52662 = cljs.pprint.round_str.call(null,scaled_mantissa_52660,(0),((cljs.core._EQ_.call(null,k_52651,(0)))?(d_52649 - (1)):(((k_52651 > (0)))?d_52649:(((k_52651 < (0)))?(d_52649 - (1)):null))),(cljs.core.truth_(w_mantissa_52661)?(w_mantissa_52661 - (cljs.core.truth_(add_sign_52653)?(1):(0))):null));
var rounded_mantissa_52663 = cljs.core.nth.call(null,vec__52637_52662,(0),null);
var __52664 = cljs.core.nth.call(null,vec__52637_52662,(1),null);
var incr_exp_52665 = cljs.core.nth.call(null,vec__52637_52662,(2),null);
var full_mantissa_52666 = cljs.pprint.insert_scaled_decimal.call(null,rounded_mantissa_52663,k_52651);
var append_zero_52667 = ((cljs.core._EQ_.call(null,k_52651,cljs.core.count.call(null,rounded_mantissa_52663))) && ((d_52649 == null)));
if(cljs.core.not.call(null,incr_exp_52665)){
if(cljs.core.truth_(w_52648)){
var len_52668 = (cljs.core.count.call(null,full_mantissa_52666) + exp_width_52658);
var signed_len_52669 = (cljs.core.truth_(add_sign_52653)?(len_52668 + (1)):len_52668);
var prepend_zero_52670__$1 = ((prepend_zero_52654) && ((!(cljs.core._EQ_.call(null,signed_len_52669,w_52648)))));
var full_len_52671 = ((prepend_zero_52670__$1)?(signed_len_52669 + (1)):signed_len_52669);
var append_zero_52672__$1 = ((append_zero_52667) && ((full_len_52671 < w_52648)));
if(cljs.core.truth_((function (){var and__4036__auto__ = (function (){var or__4047__auto__ = (full_len_52671 > w_52648);
if(or__4047__auto__){
return or__4047__auto__;
} else {
var and__4036__auto__ = e_52650;
if(cljs.core.truth_(and__4036__auto__)){
return ((exp_width_52658 - (2)) > e_52650);
} else {
return and__4036__auto__;
}
}
})();
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4036__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w_52648,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((w_52648 - full_len_52671) - ((append_zero_52672__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_52653)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_52670__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_52666),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_52672__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_52657__$1)].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_52653)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_52654)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_52666),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_52667)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_52657__$1)].join(''));
}
} else {
var G__52673 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_52663,(exp_52647__$1 + (1))], null);
G__52630_52644__$1 = G__52673;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__52674 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__52674,(0),null);
var _ = cljs.core.nth.call(null,vec__52674,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var vec__52677 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.call(null,vec__52677,(0),null);
var exp = cljs.core.nth.call(null,vec__52677,(1),null);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.call(null,arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__4135__auto__ = cljs.core.count.call(null,mantissa);
var y__4136__auto__ = (function (){var x__4138__auto__ = n;
var y__4139__auto__ = (7);
return ((x__4138__auto__ < y__4139__auto__) ? x__4138__auto__ : y__4139__auto__);
})();
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})());
var dd = (d__$1 - n);
if(((((0) <= dd)) && ((dd <= d__$1)))){
var navigator__$1 = cljs.pprint.fixed_float.call(null,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$w,ww,cljs.core.cst$kw$d,dd,cljs.core.cst$kw$k,(0),cljs.core.cst$kw$overflowchar,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,ee," ")));

return navigator__$1;
} else {
return cljs.pprint.exponential_float.call(null,params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__52680 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__52680,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52680,(1),null);
var vec__52683 = cljs.pprint.float_parts.call(null,Math.abs(arg));
var mantissa = cljs.core.nth.call(null,vec__52683,(0),null);
var exp = cljs.core.nth.call(null,vec__52683,(1),null);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__4047__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (arg < (0));
}
})();
var vec__52686 = cljs.pprint.round_str.call(null,mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.call(null,vec__52686,(0),null);
var scaled_exp = cljs.core.nth.call(null,vec__52686,(1),null);
var expanded = cljs.core.nth.call(null,vec__52686,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count.call(null,full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4036__auto__)){
return add_sign;
} else {
return and__4036__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.not.call(null,cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params));
if(and__4036__auto__){
return add_sign;
} else {
return and__4036__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join(''));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(params);
var vec__52689 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg.call(null,arg_navigator));
var arg__$1 = cljs.core.nth.call(null,vec__52689,(0),null);
var navigator = cljs.core.nth.call(null,vec__52689,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count.call(null,clauses)))))?cljs.core.first.call(null,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.call(null,clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__52692 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__52692,(0),null);
var navigator = cljs.core.nth.call(null,vec__52692,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second.call(null,clauses):cljs.core.first.call(null,clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__52695 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__52695,(0),null);
var navigator = cljs.core.nth.call(null,vec__52695,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first.call(null,clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,arg_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__52698 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__52698,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52698,(1),null);
var vec__52701 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__52701,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__52701,(1),null);
var args = cljs.pprint.init_navigator.call(null,arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1))))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4047__auto__ = ((cljs.core.empty_QMARK_.call(null,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(args__$1))) && (((cljs.core.not.call(null,cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
var and__4036__auto__ = max_count;
if(cljs.core.truth_(and__4036__auto__)){
return (count >= max_count);
} else {
return and__4036__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,args__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$up_DASH_arrow,cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__52704 = (count + (1));
var G__52705 = iter_result;
var G__52706 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__52704;
args__$1 = G__52705;
last_pos = G__52706;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__52707 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__52707,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52707,(1),null);
var vec__52710 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__52710,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__52710,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__4047__auto__ = ((cljs.core.empty_QMARK_.call(null,arg_list__$1)) && (((cljs.core.not.call(null,cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
var and__4036__auto__ = max_count;
if(cljs.core.truth_(and__4036__auto__)){
return (count >= max_count);
} else {
return and__4036__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,cljs.core.first.call(null,arg_list__$1)),cljs.pprint.init_navigator.call(null,cljs.core.next.call(null,arg_list__$1)));
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__52713 = (count + (1));
var G__52714 = cljs.core.next.call(null,arg_list__$1);
count = G__52713;
arg_list__$1 = G__52714;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__52715 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__52715,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52715,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1))))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4047__auto__ = ((cljs.core.empty_QMARK_.call(null,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not.call(null,cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
var and__4036__auto__ = max_count;
if(cljs.core.truth_(and__4036__auto__)){
return (count >= max_count);
} else {
return and__4036__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$up_DASH_arrow,cljs.core.first.call(null,iter_result))){
return cljs.core.second.call(null,iter_result);
} else {
var G__52718 = (count + (1));
var G__52719 = iter_result;
var G__52720 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__52718;
navigator__$2 = G__52719;
last_pos = G__52720;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__52721 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__52721,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52721,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__4047__auto__ = ((cljs.core.empty_QMARK_.call(null,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not.call(null,cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
var and__4036__auto__ = max_count;
if(cljs.core.truth_(and__4036__auto__)){
return (count >= max_count);
} else {
return and__4036__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__52724 = cljs.pprint.next_arg_or_nil.call(null,navigator__$2);
var sublist = cljs.core.nth.call(null,vec__52724,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__52724,(1),null);
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,sublist),navigator__$3);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first.call(null,iter_result))){
return navigator__$3;
} else {
var G__52727 = (count + (1));
var G__52728 = navigator__$3;
count = G__52727;
navigator__$2 = G__52728;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block.call(null,params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses.call(null,params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_.call(null,clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first.call(null,clauses__$1);
var vec__52729 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__52732 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__52733 = (new cljs.core.StringBufferWriter(sb));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__52733;

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format.call(null,clause,navigator__$1,base_navigator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__52732;
}})();
var iter_result = cljs.core.nth.call(null,vec__52729,(0),null);
var result_str = cljs.core.nth.call(null,vec__52729,(1),null);
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$up_DASH_arrow,cljs.core.first.call(null,iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second.call(null,iter_result)], null);
} else {
var G__52734 = cljs.core.next.call(null,clauses__$1);
var G__52735 = cljs.core.conj.call(null,acc,result_str);
var G__52736 = iter_result;
clauses__$1 = G__52734;
acc = G__52735;
navigator__$1 = G__52736;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__52737 = (function (){var temp__5457__auto__ = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5457__auto__)){
var else$ = temp__5457__auto__;
return cljs.pprint.render_clauses.call(null,else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__52740 = cljs.core.nth.call(null,vec__52737,(0),null);
var eol_str = cljs.core.nth.call(null,vec__52740,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__52737,(1),null);
var navigator__$1 = (function (){var or__4047__auto__ = new_navigator;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return navigator;
}
})();
var vec__52743 = (function (){var temp__5457__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5457__auto__)){
var p = temp__5457__auto__;
return cljs.pprint.realize_parameter_list.call(null,p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.call(null,vec__52743,(0),null);
var new_navigator__$1 = cljs.core.nth.call(null,vec__52743,(1),null);
var navigator__$2 = (function (){var or__4047__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__4047__auto__ = cljs.core.first.call(null,cljs.core.cst$kw$min_DASH_remaining.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__4047__auto__ = cljs.core.first.call(null,cljs.core.cst$kw$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.pprint.get_max_column.call(null,cljs.core._STAR_out_STAR_);
}
})();
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var vec__52746 = cljs.pprint.render_clauses.call(null,clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.call(null,vec__52746,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__52746,(1),null);
var slots = (function (){var x__4135__auto__ = (1);
var y__4136__auto__ = (((cljs.core.count.call(null,strs) - (1)) + (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})();
var chars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,strs));
var mincol = cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params);
var minpad = cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params);
var colinc = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot.call(null,((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__4135__auto__ = minpad;
var y__4136__auto__ = cljs.core.quot.call(null,total_pad,slots);
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,pad,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__4036__auto__ = eol_str;
if(cljs.core.truth_(and__4036__auto__)){
return (((cljs.pprint.get_column.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__4036__auto__;
}
})())){
cljs.pprint.print.call(null,eol_str);
} else {
}

var slots_52749__$1 = slots;
var extra_pad_52750__$1 = extra_pad;
var strs_52751__$1 = strs;
var pad_only_52752 = (function (){var or__4047__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,strs_52751__$1),(1))) && (cljs.core.not.call(null,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq.call(null,strs_52751__$1)){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,pad_only_52752))?cljs.core.first.call(null,strs_52751__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__4047__auto__ = pad_only_52752;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = cljs.core.next.call(null,strs_52751__$1);
if(or__4047__auto____$1){
return or__4047__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_52750__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join(''));

var G__52753 = (slots_52749__$1 - (1));
var G__52754 = (extra_pad_52750__$1 - (1));
var G__52755 = (cljs.core.truth_(pad_only_52752)?strs_52751__$1:cljs.core.next.call(null,strs_52751__$1));
var G__52756 = false;
slots_52749__$1 = G__52753;
extra_pad_52750__$1 = G__52754;
strs_52751__$1 = G__52755;
pad_only_52752 = G__52756;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint52757 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint52757 = (function (writer,meta52758){
this.writer = writer;
this.meta52758 = meta52758;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint52757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52759,meta52758__$1){
var self__ = this;
var _52759__$1 = this;
return (new cljs.pprint.t_cljs$pprint52757(self__.writer,meta52758__$1));
});

cljs.pprint.t_cljs$pprint52757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52759){
var self__ = this;
var _52759__$1 = this;
return self__.meta52758;
});

cljs.pprint.t_cljs$pprint52757.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint52757.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__52760 = cljs.core._EQ_;
var expr__52761 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__52760.call(null,String,expr__52761))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
} else {
if(cljs.core.truth_(pred__52760.call(null,Number,expr__52761))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__52761)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint52757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta52758], null);
});

cljs.pprint.t_cljs$pprint52757.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint52757.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint52757";

cljs.pprint.t_cljs$pprint52757.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.pprint/t_cljs$pprint52757");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint52757.
 */
cljs.pprint.__GT_t_cljs$pprint52757 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint52757(writer__$1,meta52758){
return (new cljs.pprint.t_cljs$pprint52757(writer__$1,meta52758));
});

}

return (new cljs.pprint.t_cljs$pprint52757(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint52763 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint52763 = (function (writer,meta52764){
this.writer = writer;
this.meta52764 = meta52764;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint52763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52765,meta52764__$1){
var self__ = this;
var _52765__$1 = this;
return (new cljs.pprint.t_cljs$pprint52763(self__.writer,meta52764__$1));
});

cljs.pprint.t_cljs$pprint52763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52765){
var self__ = this;
var _52765__$1 = this;
return self__.meta52764;
});

cljs.pprint.t_cljs$pprint52763.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint52763.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__52766 = cljs.core._EQ_;
var expr__52767 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__52766.call(null,String,expr__52767))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,s));
} else {
if(cljs.core.truth_(pred__52766.call(null,Number,expr__52767))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__52767)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint52763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta52764], null);
});

cljs.pprint.t_cljs$pprint52763.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint52763.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint52763";

cljs.pprint.t_cljs$pprint52763.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.pprint/t_cljs$pprint52763");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint52763.
 */
cljs.pprint.__GT_t_cljs$pprint52763 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint52763(writer__$1,meta52764){
return (new cljs.pprint.t_cljs$pprint52763(writer__$1,meta52764));
});

}

return (new cljs.pprint.t_cljs$pprint52763(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first.call(null,s);
var s__$1 = (cljs.core.truth_((function (){var and__4036__auto__ = first_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = f;
if(cljs.core.truth_(and__4036__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(1)))].join(''):s);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_.call(null,s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__4036__auto__ = m;
if(cljs.core.truth_(and__4036__auto__)){
return (m.index + (1));
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s__$2,offset)))].join(''),cljs.core.subs.call(null,s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint52769 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint52769 = (function (writer,last_was_whitespace_QMARK_,meta52770){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta52770 = meta52770;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint52769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_52771,meta52770__$1){
var self__ = this;
var _52771__$1 = this;
return (new cljs.pprint.t_cljs$pprint52769(self__.writer,self__.last_was_whitespace_QMARK_,meta52770__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint52769.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_52771){
var self__ = this;
var _52771__$1 = this;
return self__.meta52770;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint52769.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint52769.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__52772 = cljs.core._EQ_;
var expr__52773 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__52772.call(null,String,expr__52773))){
var s = x;
cljs.core._write.call(null,self__.writer,cljs.pprint.capitalize_string.call(null,s.toLowerCase(),cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1)))));
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__52772.call(null,Number,expr__52773))){
var c = cljs.core.char$.call(null,x);
var mod_c = (cljs.core.truth_(cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))?clojure.string.upper_case.call(null,c):c);
cljs.core._write.call(null,self__.writer,mod_c);

return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__52773)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint52769.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta52770], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint52769.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint52769.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint52769";

cljs.pprint.t_cljs$pprint52769.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.pprint/t_cljs$pprint52769");
});})(last_was_whitespace_QMARK_))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint52769.
 */
cljs.pprint.__GT_t_cljs$pprint52769 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint52769(writer__$1,last_was_whitespace_QMARK___$1,meta52770){
return (new cljs.pprint.t_cljs$pprint52769(writer__$1,last_was_whitespace_QMARK___$1,meta52770));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint52769(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.call(null,false);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint52775 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint52775 = (function (writer,capped,meta52776){
this.writer = writer;
this.capped = capped;
this.meta52776 = meta52776;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint52775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_52777,meta52776__$1){
var self__ = this;
var _52777__$1 = this;
return (new cljs.pprint.t_cljs$pprint52775(self__.writer,self__.capped,meta52776__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint52775.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_52777){
var self__ = this;
var _52777__$1 = this;
return self__.meta52776;
});})(capped))
;

cljs.pprint.t_cljs$pprint52775.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint52775.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__52778 = cljs.core._EQ_;
var expr__52779 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__52778.call(null,String,expr__52779))){
var s = clojure.string.lower_case.call(null,x);
if(cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__4036__auto__ = m;
if(cljs.core.truth_(and__4036__auto__)){
return m.index;
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write.call(null,self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_.call(null,self__.capped,true);
} else {
return cljs.core._write.call(null,self__.writer,s);
}
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
}
} else {
if(cljs.core.truth_(pred__52778.call(null,Number,expr__52779))){
var c = cljs.core.char$.call(null,x);
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped));
if(and__4036__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__4036__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,self__.capped,true);

return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,c));
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__52779)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint52775.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta52776], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint52775.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint52775.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint52775";

cljs.pprint.t_cljs$pprint52775.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.pprint/t_cljs$pprint52775");
});})(capped))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint52775.
 */
cljs.pprint.__GT_t_cljs$pprint52775 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint52775(writer__$1,capped__$1,meta52776){
return (new cljs.pprint.t_cljs$pprint52775(writer__$1,capped__$1,meta52776));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint52775(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first.call(null,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR__orig_val__52781 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__52782 = make_writer.call(null,cljs.core._STAR_out_STAR_);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__52782;

try{return cljs.pprint.execute_sub_format.call(null,clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__52781;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_.call(null,writer))){
return writer;
} else {
return cljs.pprint.pretty_writer.call(null,writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if((((!((cljs.core._STAR_out_STAR_ == null))))?(((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$))))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if((!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))))))){
return cljs.pprint.prn.call(null);
} else {
return null;
}
} else {
return cljs.pprint.prn.call(null);
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_52784 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_52785 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_52786 = cljs.pprint.get_column.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))));
var space_count_52787 = (((current_52786 < colnum_52784))?(colnum_52784 - current_52786):((cljs.core._EQ_.call(null,colinc_52785,(0)))?(0):(colinc_52785 - cljs.core.rem.call(null,(current_52786 - colnum_52784),colinc_52785))
));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_52787," ")));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_52788 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_52789 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_52790 = (colrel_52788 + cljs.pprint.get_column.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))));
var offset_52791 = (((colinc_52789 > (0)))?cljs.core.rem.call(null,start_col_52790,colinc_52789):(0));
var space_count_52792 = (colrel_52788 + ((cljs.core._EQ_.call(null,(0),offset_52791))?(0):(colinc_52789 - offset_52791)));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_52792," ")));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count.call(null,clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.call(null,clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__52793 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__52793,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52793,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__52796_52800 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__52797_52801 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__52798_52802 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__52799_52803 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__52798_52802;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__52799_52803;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format.call(null,body,cljs.pprint.init_navigator.call(null,arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__52797_52801;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__52796_52800;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$current:cljs.core.cst$kw$block);
cljs.pprint.pprint_indent.call(null,relative_to,cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$mandatory:cljs.core.cst$kw$fill):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$miser:cljs.core.cst$kw$linear));
cljs.pprint.pprint_newline.call(null,kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"A",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__52804_SHARP_,p2__52805_SHARP_,p3__52806_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.print_str,p1__52804_SHARP_,p2__52805_SHARP_,p3__52806_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__52807_SHARP_,p2__52808_SHARP_,p3__52809_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.pr_str,p1__52807_SHARP_,p2__52808_SHARP_,p3__52809_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__52810_SHARP_,p2__52811_SHARP_,p3__52812_SHARP_){
return cljs.pprint.format_integer.call(null,(10),p1__52810_SHARP_,p2__52811_SHARP_,p3__52812_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__52813_SHARP_,p2__52814_SHARP_,p3__52815_SHARP_){
return cljs.pprint.format_integer.call(null,(2),p1__52813_SHARP_,p2__52814_SHARP_,p3__52815_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__52816_SHARP_,p2__52817_SHARP_,p3__52818_SHARP_){
return cljs.pprint.format_integer.call(null,(8),p1__52816_SHARP_,p2__52817_SHARP_,p3__52818_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__52819_SHARP_,p2__52820_SHARP_,p3__52821_SHARP_){
return cljs.pprint.format_integer.call(null,(16),p1__52819_SHARP_,p2__52820_SHARP_,p3__52821_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__52822_SHARP_,p2__52823_SHARP_,p3__52824_SHARP_){
return cljs.pprint.format_integer.call(null,cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__52822_SHARP_),p1__52822_SHARP_,p2__52823_SHARP_,p3__52824_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4036__auto__;
}
})())){
return (function (p1__52825_SHARP_,p2__52826_SHARP_,p3__52827_SHARP_){
return cljs.pprint.format_old_roman.call(null,p1__52825_SHARP_,p2__52826_SHARP_,p3__52827_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__52828_SHARP_,p2__52829_SHARP_,p3__52830_SHARP_){
return cljs.pprint.format_new_roman.call(null,p1__52828_SHARP_,p2__52829_SHARP_,p3__52830_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__52831_SHARP_,p2__52832_SHARP_,p3__52833_SHARP_){
return cljs.pprint.format_ordinal_english.call(null,p1__52831_SHARP_,p2__52832_SHARP_,p3__52833_SHARP_);
});
} else {
return (function (p1__52834_SHARP_,p2__52835_SHARP_,p3__52836_SHARP_){
return cljs.pprint.format_cardinal_english.call(null,p1__52834_SHARP_,p2__52835_SHARP_,p3__52836_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition.call(null,navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__52846 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg = cljs.core.nth.call(null,vec__52846,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__52846,(1),null);
cljs.pprint.print.call(null,((cljs.core._EQ_.call(null,arg,(1)))?cljs.core.first.call(null,strs):cljs.core.second.call(null,strs)));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"C",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$char_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"F",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"E",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"G",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"$",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"%",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4518__auto___52864 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_52865 = (0);
while(true){
if((i_52865 < n__4518__auto___52864)){
cljs.pprint.prn.call(null);

var G__52866 = (i_52865 + (1));
i_52865 = G__52866;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_52867 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_52867 > (0))){
cljs.pprint.fresh_line.call(null);
} else {
}

var n__4518__auto___52868 = (cnt_52867 - (1));
var i_52869 = (0);
while(true){
if((i_52869 < n__4518__auto___52868)){
cljs.pprint.prn.call(null);

var G__52870 = (i_52869 + (1));
i_52869 = G__52870;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4518__auto___52871 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_52872 = (0);
while(true){
if((i_52872 < n__4518__auto___52871)){
cljs.pprint.print.call(null,"\f");

var G__52873 = (i_52872 + (1));
i_52872 = G__52873;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"~",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"~")));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"\n",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn.call(null);
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"T",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$colnum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__52837_SHARP_,p2__52838_SHARP_,p3__52839_SHARP_){
return cljs.pprint.relative_tabulation.call(null,p1__52837_SHARP_,p2__52838_SHARP_,p3__52839_SHARP_);
});
} else {
return (function (p1__52840_SHARP_,p2__52841_SHARP_,p3__52842_SHARP_){
return cljs.pprint.absolute_tabulation.call(null,p1__52840_SHARP_,p2__52841_SHARP_,p3__52842_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"*",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition.call(null,navigator,n);
} else {
return cljs.pprint.relative_reposition.call(null,navigator,(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"?",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__52849 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__52849,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52849,(1),null);
return cljs.pprint.execute_sub_format.call(null,subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__52852 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__52852,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52852,(1),null);
var vec__52855 = cljs.pprint.next_arg.call(null,navigator__$1);
var subargs = cljs.core.nth.call(null,vec__52855,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__52855,(1),null);
var sub_navigator = cljs.pprint.init_navigator.call(null,subargs);
cljs.pprint.execute_sub_format.call(null,subformat,sub_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"(",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,")",cljs.core.cst$kw$allows_DASH_separator,null,cljs.core.cst$kw$else,null], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4036__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__52843_SHARP_,p2__52844_SHARP_,p3__52845_SHARP_){
return cljs.pprint.modify_case.call(null,mod_case_writer,p1__52843_SHARP_,p2__52844_SHARP_,p3__52845_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,")",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"[",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,"]",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$last], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,";",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$min_DASH_remaining,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$max_DASH_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$separator,true], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"]",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"{",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$max_DASH_iterations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$right,"}",cljs.core.cst$kw$allows_DASH_separator,false], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4036__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"}",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"<",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,">",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$first], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,">",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"^",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(3),[cljs.core.cst$kw$arg1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.cst$kw$colon_DASH_up_DASH_arrow:cljs.core.cst$kw$up_DASH_arrow);
if(cljs.core.truth_((function (){var and__4036__auto__ = arg1;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = arg2;
if(cljs.core.truth_(and__4036__auto____$1)){
return arg3;
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())){
if((((arg1 <= arg2)) && ((arg2 <= arg3)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = arg1;
if(cljs.core.truth_(and__4036__auto__)){
return arg2;
} else {
return and__4036__auto__;
}
})())){
if(cljs.core._EQ_.call(null,arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.call(null,arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_.call(null,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_.call(null,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"W",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var or__4047__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.call(null,(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,null,cljs.core.cst$kw$length,null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pretty,true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__52858 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__52858,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52858,(1),null);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__52861 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__52861,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52861,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out.call(null,arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"_",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"I",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remaining_DASH_arg_DASH_count,null,cljs.core.cst$kw$parameter_DASH_from_DASH_args,null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__52874){
var vec__52875 = p__52874;
var s = cljs.core.nth.call(null,vec__52875,(0),null);
var offset = cljs.core.nth.call(null,vec__52875,(1),null);
var saw_comma = cljs.core.nth.call(null,vec__52875,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first.call(null,param);
var remainder = cljs.core.subs.call(null,s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if((!(cljs.core._EQ_.call(null,",",cljs.core.nth.call(null,remainder,(0)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error.call(null,"Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume.call(null,cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__52878){
var vec__52879 = p__52878;
var p = cljs.core.nth.call(null,vec__52879,(0),null);
var offset = cljs.core.nth.call(null,vec__52879,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,p.length,(0)))?null:((((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.call(null,p,(0))))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:((((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core._EQ_.call(null,"#",cljs.core.nth.call(null,p,(0))))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:((((cljs.core._EQ_.call(null,p.length,(2))) && (cljs.core._EQ_.call(null,"'",cljs.core.nth.call(null,p,(0))))))?cljs.core.nth.call(null,p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume.call(null,(function (p__52882){
var vec__52883 = p__52882;
var s__$1 = cljs.core.nth.call(null,vec__52883,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__52883,(1),null);
var flags = cljs.core.nth.call(null,vec__52883,(2),null);
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.call(null,cljs.pprint.flag_defs,cljs.core.first.call(null,s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_.call(null,flags,flag)){
return cljs.pprint.format_error.call(null,["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.call(null,flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.not.call(null,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4036__auto__){
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4036__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.not.call(null,cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4036__auto__){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4036__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.not.call(null,cljs.core.cst$kw$both.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4036__auto__){
var and__4036__auto____$1 = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__4036__auto____$1)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())){
return cljs.pprint.format_error.call(null,["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__4138__auto__ = cljs.core.nth.call(null,cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__4139__auto__ = cljs.core.nth.call(null,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__4138__auto__ < y__4139__auto__) ? x__4138__auto__ : y__4139__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags.call(null,def,flags);

if((cljs.core.count.call(null,params) > cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error.call(null,cljs.pprint.cl_format.call(null,null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def),cljs.core.count.call(null,params),cljs.core.count.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def))),cljs.core.second.call(null,cljs.core.first.call(null,params)));
} else {
}

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__52886_SHARP_,p2__52887_SHARP_){
var val = cljs.core.first.call(null,p1__52886_SHARP_);
if((!((((val == null)) || (cljs.core.contains_QMARK_.call(null,cljs.pprint.special_params,val)) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,cljs.core.second.call(null,p2__52887_SHARP_)),cljs.core.type.call(null,val))))))){
return cljs.pprint.format_error.call(null,["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.first.call(null,p2__52887_SHARP_)))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,val))].join(''),cljs.core.second.call(null,p1__52886_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,(function (){var iter__4434__auto__ = (function cljs$pprint$map_params_$_iter__52891(s__52892){
return (new cljs.core.LazySeq(null,(function (){
var s__52892__$1 = s__52892;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52892__$1);
if(temp__5457__auto__){
var s__52892__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52892__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__52892__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__52894 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__52893 = (0);
while(true){
if((i__52893 < size__4433__auto__)){
var vec__52895 = cljs.core._nth.call(null,c__4432__auto__,i__52893);
var name = cljs.core.nth.call(null,vec__52895,(0),null);
var vec__52898 = cljs.core.nth.call(null,vec__52895,(1),null);
var default$ = cljs.core.nth.call(null,vec__52898,(0),null);
cljs.core.chunk_append.call(null,b__52894,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__52907 = (i__52893 + (1));
i__52893 = G__52907;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52894),cljs$pprint$map_params_$_iter__52891.call(null,cljs.core.chunk_rest.call(null,s__52892__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52894),null);
}
} else {
var vec__52901 = cljs.core.first.call(null,s__52892__$2);
var name = cljs.core.nth.call(null,vec__52901,(0),null);
var vec__52904 = cljs.core.nth.call(null,vec__52901,(1),null);
var default$ = cljs.core.nth.call(null,vec__52904,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__52891.call(null,cljs.core.rest.call(null,s__52892__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.call(null,(function (p1__52888_SHARP_,p2__52889_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__52888_SHARP_,p2__52889_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__52890_SHARP_){
return cljs.core.first.call(null,cljs.core.nth.call(null,p1__52890_SHARP_,(1)));
}),cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags);
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__52908 = cljs.pprint.extract_params.call(null,s,offset);
var raw_params = cljs.core.nth.call(null,vec__52908,(0),null);
var vec__52911 = cljs.core.nth.call(null,vec__52908,(1),null);
var rest = cljs.core.nth.call(null,vec__52911,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__52911,(1),null);
var vec__52914 = cljs.pprint.extract_flags.call(null,rest,offset__$1);
var _ = cljs.core.nth.call(null,vec__52914,(0),null);
var vec__52917 = cljs.core.nth.call(null,vec__52914,(1),null);
var rest__$1 = cljs.core.nth.call(null,vec__52917,(0),null);
var offset__$2 = cljs.core.nth.call(null,vec__52917,(1),null);
var flags = cljs.core.nth.call(null,vec__52917,(2),null);
var directive = cljs.core.first.call(null,rest__$1);
var def = cljs.core.get.call(null,cljs.pprint.directive_table,clojure.string.upper_case.call(null,directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params.call(null,def,cljs.core.map.call(null,cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not.call(null,directive)){
cljs.pprint.format_error.call(null,"Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not.call(null,def)){
cljs.pprint.format_error.call(null,["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def).call(null,params,offset__$2),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.call(null,rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = ((cljs.core._EQ_.call(null,"\n",cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not.call(null,cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count.call(null,remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.call(null,remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.call(null,s);

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__4036__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__4036__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__52920 = cljs.pprint.collect_clauses.call(null,cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.call(null,vec__52920,(0),null);
var remainder__$1 = cljs.core.nth.call(null,vec__52920,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map.call(null,subex,cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$))),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume.call(null,(function (remainder__$1){
if(cljs.core.empty_QMARK_.call(null,remainder__$1)){
return cljs.pprint.format_error.call(null,"No closing bracket found.",offset);
} else {
var this$ = cljs.core.first.call(null,remainder__$1);
var remainder__$2 = cljs.core.next.call(null,remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket.call(null,this$))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$2);
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket_info),cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_bracket,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$separator,null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second.call(null,cljs.pprint.consume.call(null,(function (p__52923){
var vec__52924 = p__52923;
var clause_map = cljs.core.nth.call(null,vec__52924,(0),null);
var saw_else = cljs.core.nth.call(null,vec__52924,(1),null);
var remainder__$1 = cljs.core.nth.call(null,vec__52924,(2),null);
var vec__52927 = cljs.pprint.process_clause.call(null,bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.call(null,vec__52927,(0),null);
var vec__52930 = cljs.core.nth.call(null,vec__52927,(1),null);
var type = cljs.core.nth.call(null,vec__52930,(0),null);
var right_params = cljs.core.nth.call(null,vec__52930,(1),null);
var else_params = cljs.core.nth.call(null,vec__52930,(2),null);
var remainder__$2 = cljs.core.nth.call(null,vec__52930,(3),null);
if(cljs.core._EQ_.call(null,type,cljs.core.cst$kw$right_DASH_bracket)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?cljs.core.cst$kw$else:cljs.core.cst$kw$clauses),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$right_DASH_params,right_params])),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.call(null,type,cljs.core.cst$kw$else)){
if(cljs.core.truth_(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error.call(null,"Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if(((cljs.core._EQ_.call(null,cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq.call(null,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause_map))))){
return cljs.pprint.format_error.call(null,"The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$else_DASH_params,else_params], null)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.call(null,type,cljs.core.cst$kw$separator)){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error.call(null,"A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,cljs.core.cst$kw$allows_DASH_separator.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (remainder){
var this$ = cljs.core.first.call(null,remainder);
var remainder__$1 = cljs.core.next.call(null,remainder);
var bracket = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR__orig_val__52933 = cljs.pprint._STAR_format_str_STAR_;
var _STAR_format_str_STAR__temp_val__52934 = format_str;
cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__temp_val__52934;

try{return cljs.pprint.process_nesting.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (_STAR_format_str_STAR__orig_val__52933,_STAR_format_str_STAR__temp_val__52934){
return (function (p__52935){
var vec__52936 = p__52935;
var s = cljs.core.nth.call(null,vec__52936,(0),null);
var offset = cljs.core.nth.call(null,vec__52936,(1),null);
if(cljs.core.empty_QMARK_.call(null,s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive.call(null,cljs.core.subs.call(null,s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,cljs.core.subs.call(null,s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR__orig_val__52933,_STAR_format_str_STAR__temp_val__52934))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__orig_val__52933;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_.call(null,format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1))));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
}
}
})())){
return true;
} else {
var G__52939 = cljs.core.next.call(null,format__$1);
format__$1 = G__52939;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__52941 = arguments.length;
switch (G__52941) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = ((((cljs.core.not.call(null,stream)) || (stream === true)))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = ((((cljs.pprint.needs_pretty.call(null,format)) && (cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,real_stream)))))?cljs.pprint.get_pretty_writer.call(null,real_stream):real_stream);
var _STAR_out_STAR__orig_val__52942 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__52943 = wrapped_stream;
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__52943;

try{try{cljs.pprint.execute_format.call(null,format,args);
}finally {if((!((real_stream === wrapped_stream)))){
cljs.core._flush.call(null,wrapped_stream);
} else {
}
}
if(cljs.core.not.call(null,stream)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if(stream === true){
return cljs.core.string_print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__52942;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.pprint.abort_QMARK_.call(null,context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__52944 = cljs.pprint.realize_parameter_list.call(null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__52944,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__52944,(1),null);
var vec__52947 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__52947,(0),null);
var offsets = cljs.core.nth.call(null,vec__52947,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,cljs.core.cst$kw$base_DASH_args,args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize.call(null,cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method.call(null,multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$quote,"'",cljs.core.cst$sym$var,"#'",cljs.core.cst$sym$clojure$core_SLASH_deref,"@",cljs.core.cst$sym$clojure$core_SLASH_unquote,"~",cljs.core.cst$sym$cljs$core_SLASH_deref,"@",cljs.core.cst$sym$cljs$core_SLASH_unquote,"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = cljs.pprint.reader_macros.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_((function (){var and__4036__auto__ = macro_char;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,alis));
} else {
return and__4036__auto__;
}
})())){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__52951_52956 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__52952_52957 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__52953_52958 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__52954_52959 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__52953_52958;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__52954_52959;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

var length_count52955_52960 = (0);
var alis_52961__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count52955_52960 < cljs.core._STAR_print_length_STAR_)))){
if(alis_52961__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_52961__$1));

if(cljs.core.next.call(null,alis_52961__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$linear);

var G__52962 = (length_count52955_52960 + (1));
var G__52963 = cljs.core.next.call(null,alis_52961__$1);
length_count52955_52960 = G__52962;
alis_52961__$1 = G__52963;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__52952_52957;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__52951_52956;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
return cljs.pprint.pprint_simple_list.call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__52964_52969 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__52965_52970 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__52966_52971 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__52967_52972 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__52966_52971;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__52967_52972;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count52968_52973 = (0);
var aseq_52974 = cljs.core.seq.call(null,avec);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count52968_52973 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_52974){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,aseq_52974));

if(cljs.core.next.call(null,aseq_52974)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$linear);

var G__52975 = (length_count52968_52973 + (1));
var G__52976 = cljs.core.next.call(null,aseq_52974);
length_count52968_52973 = G__52975;
aseq_52974 = G__52976;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__52965_52970;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__52964_52969;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__23093__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (format_in__23093__auto__,cf__23094__auto__){
return (function() { 
var G__52977__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__52977 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__52978__i = 0, G__52978__a = new Array(arguments.length -  0);
while (G__52978__i < G__52978__a.length) {G__52978__a[G__52978__i] = arguments[G__52978__i + 0]; ++G__52978__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__52978__a,0,null);
} 
return G__52977__delegate.call(this,args__23095__auto__);};
G__52977.cljs$lang$maxFixedArity = 0;
G__52977.cljs$lang$applyTo = (function (arglist__52979){
var args__23095__auto__ = cljs.core.seq(arglist__52979);
return G__52977__delegate(args__23095__auto__);
});
G__52977.cljs$core$IFn$_invoke$arity$variadic = G__52977__delegate;
return G__52977;
})()
;
;})(format_in__23093__auto__,cf__23094__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__52980 = (((!(cljs.core.record_QMARK_.call(null,amap))))?new cljs.core.Var(function(){return cljs.core.lift_ns;},cljs.core.cst$sym$cljs$core_SLASH_lift_DASH_ns,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$lift_DASH_ns,"cljs/core.cljs",(15),(1),(10127),(10127),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)])).call(null,amap):null);
var ns = cljs.core.nth.call(null,vec__52980,(0),null);
var lift_map = cljs.core.nth.call(null,vec__52980,(1),null);
var amap__$1 = (function (){var or__4047__auto__ = lift_map;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__52983_52992 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__52984_52993 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__52985_52994 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__52986_52995 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__52985_52994;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__52986_52995;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count52987_52996 = (0);
var aseq_52997 = cljs.core.seq.call(null,amap__$1);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count52987_52996 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_52997){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__52988_52998 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__52989_52999 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__52990_53000 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__52991_53001 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__52990_53000;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__52991_53001;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out.call(null,cljs.core.ffirst.call(null,aseq_52997));

cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$linear);

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out.call(null,cljs.core.fnext.call(null,cljs.core.first.call(null,aseq_52997)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__52989_52999;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__52988_52998;
}}


if(cljs.core.next.call(null,aseq_52997)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$linear);

var G__53002 = (length_count52987_52996 + (1));
var G__53003 = cljs.core.next.call(null,aseq_52997);
length_count52987_52996 = G__53002;
aseq_52997 = G__53003;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__52984_52993;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__52983_52992;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,obj));
});
cljs.pprint.pprint_set = (function (){var format_in__23093__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (format_in__23093__auto__,cf__23094__auto__){
return (function() { 
var G__53004__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53004 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53005__i = 0, G__53005__a = new Array(arguments.length -  0);
while (G__53005__i < G__53005__a.length) {G__53005__a[G__53005__i] = arguments[G__53005__i + 0]; ++G__53005__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53005__a,0,null);
} 
return G__53004__delegate.call(this,args__23095__auto__);};
G__53004.cljs$lang$maxFixedArity = 0;
G__53004.cljs$lang$applyTo = (function (arglist__53006){
var args__23095__auto__ = cljs.core.seq(arglist__53006);
return G__53004__delegate(args__23095__auto__);
});
G__53004.cljs$core$IFn$_invoke$arity$variadic = G__53004__delegate;
return G__53004;
})()
;
;})(format_in__23093__auto__,cf__23094__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__4047__auto__ = (function (){var temp__5457__auto__ = cljs.core.re_find.call(null,/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5457__auto__)){
var match = temp__5457__auto__;
return cljs.pprint.type_map.call(null,match);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type.call(null,cljs.core.type.call(null,o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__53007_53013 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__53008_53014 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__53009_53015 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__53010_53016 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__53009_53015;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__53010_53016;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent.call(null,cljs.core.cst$kw$block,(- (cljs.core.count.call(null,prefix) - (2))));

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$linear);

cljs.pprint.write_out.call(null,(((function (){var and__4036__auto__ = (((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$))))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o));
if(and__4036__auto__){
return (!(cljs.core._realized_QMARK_.call(null,o)));
} else {
return and__4036__auto__;
}
})())?cljs.core.cst$kw$not_DASH_delivered:cljs.core.deref.call(null,o)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__53008_53014;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__53007_53013;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__23093__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (format_in__23093__auto__,cf__23094__auto__){
return (function() { 
var G__53017__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53017 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53018__i = 0, G__53018__a = new Array(arguments.length -  0);
while (G__53018__i < G__53018__a.length) {G__53018__a[G__53018__i] = arguments[G__53018__i + 0]; ++G__53018__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53018__a,0,null);
} 
return G__53017__delegate.call(this,args__23095__auto__);};
G__53017.cljs$lang$maxFixedArity = 0;
G__53017.cljs$lang$applyTo = (function (arglist__53019){
var args__23095__auto__ = cljs.core.seq(arglist__53019);
return G__53017__delegate(args__23095__auto__);
});
G__53017.cljs$core$IFn$_invoke$arity$variadic = G__53017__delegate;
return G__53017;
})()
;
;})(format_in__23093__auto__,cf__23094__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return cljs.core.cst$kw$queue;
} else {
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj))){
return cljs.core.cst$kw$deref;
} else {
if((obj instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.seq_QMARK_.call(null,obj)){
return cljs.core.cst$kw$list;
} else {
if(cljs.core.map_QMARK_.call(null,obj)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.vector_QMARK_.call(null,obj)){
return cljs.core.cst$kw$vector;
} else {
if(cljs.core.set_QMARK_.call(null,obj)){
return cljs.core.cst$kw$set;
} else {
if((obj == null)){
return null;
} else {
return cljs.core.cst$kw$default;

}
}
}
}
}
}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.simple_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_list);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,null));
}));
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_.call(null,form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_.call(null,reference)){
var vec__53021 = cljs.pprint.brackets.call(null,reference);
var start = cljs.core.nth.call(null,vec__53021,(0),null);
var end = cljs.core.nth.call(null,vec__53021,(1),null);
var vec__53024 = reference;
var seq__53025 = cljs.core.seq.call(null,vec__53024);
var first__53026 = cljs.core.first.call(null,seq__53025);
var seq__53025__$1 = cljs.core.next.call(null,seq__53025);
var keyw = first__53026;
var args = seq__53025__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__53027_53041 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__53028_53042 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__53029_53043 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__53030_53044 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__53029_53043;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__53030_53044;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__23093__auto__ = "~w~:i";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53027_53041,_STAR_current_length_STAR__orig_val__53028_53042,_STAR_current_level_STAR__temp_val__53029_53043,_STAR_current_length_STAR__temp_val__53030_53044,vec__53021,start,end,vec__53024,seq__53025,first__53026,seq__53025__$1,keyw,args){
return (function() { 
var G__53045__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53045 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53046__i = 0, G__53046__a = new Array(arguments.length -  0);
while (G__53046__i < G__53046__a.length) {G__53046__a[G__53046__i] = arguments[G__53046__i + 0]; ++G__53046__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53046__a,0,null);
} 
return G__53045__delegate.call(this,args__23095__auto__);};
G__53045.cljs$lang$maxFixedArity = 0;
G__53045.cljs$lang$applyTo = (function (arglist__53047){
var args__23095__auto__ = cljs.core.seq(arglist__53047);
return G__53045__delegate(args__23095__auto__);
});
G__53045.cljs$core$IFn$_invoke$arity$variadic = G__53045__delegate;
return G__53045;
})()
;
;})(format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53027_53041,_STAR_current_length_STAR__orig_val__53028_53042,_STAR_current_level_STAR__temp_val__53029_53043,_STAR_current_length_STAR__temp_val__53030_53044,vec__53021,start,end,vec__53024,seq__53025,first__53026,seq__53025__$1,keyw,args))
})().call(null,keyw);

var args_53048__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_53048__$1)){
(function (){var format_in__23093__auto__ = " ";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (args_53048__$1,format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53027_53041,_STAR_current_length_STAR__orig_val__53028_53042,_STAR_current_level_STAR__temp_val__53029_53043,_STAR_current_length_STAR__temp_val__53030_53044,vec__53021,start,end,vec__53024,seq__53025,first__53026,seq__53025__$1,keyw,args){
return (function() { 
var G__53049__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53049 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53050__i = 0, G__53050__a = new Array(arguments.length -  0);
while (G__53050__i < G__53050__a.length) {G__53050__a[G__53050__i] = arguments[G__53050__i + 0]; ++G__53050__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53050__a,0,null);
} 
return G__53049__delegate.call(this,args__23095__auto__);};
G__53049.cljs$lang$maxFixedArity = 0;
G__53049.cljs$lang$applyTo = (function (arglist__53051){
var args__23095__auto__ = cljs.core.seq(arglist__53051);
return G__53049__delegate(args__23095__auto__);
});
G__53049.cljs$core$IFn$_invoke$arity$variadic = G__53049__delegate;
return G__53049;
})()
;
;})(args_53048__$1,format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53027_53041,_STAR_current_length_STAR__orig_val__53028_53042,_STAR_current_level_STAR__temp_val__53029_53043,_STAR_current_length_STAR__temp_val__53030_53044,vec__53021,start,end,vec__53024,seq__53025,first__53026,seq__53025__$1,keyw,args))
})().call(null);

var arg_53052 = cljs.core.first.call(null,args_53048__$1);
if(cljs.core.sequential_QMARK_.call(null,arg_53052)){
var vec__53031_53053 = cljs.pprint.brackets.call(null,arg_53052);
var start_53054__$1 = cljs.core.nth.call(null,vec__53031_53053,(0),null);
var end_53055__$1 = cljs.core.nth.call(null,vec__53031_53053,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__53034_53056 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__53035_53057 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__53036_53058 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__53037_53059 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__53036_53058;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__53037_53059;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start_53054__$1,null,end_53055__$1);

if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,arg_53052),(3))) && ((cljs.core.second.call(null,arg_53052) instanceof cljs.core.Keyword)))){
var vec__53038_53060 = arg_53052;
var ns_53061 = cljs.core.nth.call(null,vec__53038_53060,(0),null);
var kw_53062 = cljs.core.nth.call(null,vec__53038_53060,(1),null);
var lis_53063 = cljs.core.nth.call(null,vec__53038_53060,(2),null);
(function (){var format_in__23093__auto__ = "~w ~w ";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (args_53048__$1,format_in__23093__auto__,cf__23094__auto__,vec__53038_53060,ns_53061,kw_53062,lis_53063,_STAR_current_level_STAR__orig_val__53034_53056,_STAR_current_length_STAR__orig_val__53035_53057,_STAR_current_level_STAR__temp_val__53036_53058,_STAR_current_length_STAR__temp_val__53037_53059,vec__53031_53053,start_53054__$1,end_53055__$1,arg_53052,_STAR_current_level_STAR__orig_val__53027_53041,_STAR_current_length_STAR__orig_val__53028_53042,_STAR_current_level_STAR__temp_val__53029_53043,_STAR_current_length_STAR__temp_val__53030_53044,vec__53021,start,end,vec__53024,seq__53025,first__53026,seq__53025__$1,keyw,args){
return (function() { 
var G__53064__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53064 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53065__i = 0, G__53065__a = new Array(arguments.length -  0);
while (G__53065__i < G__53065__a.length) {G__53065__a[G__53065__i] = arguments[G__53065__i + 0]; ++G__53065__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53065__a,0,null);
} 
return G__53064__delegate.call(this,args__23095__auto__);};
G__53064.cljs$lang$maxFixedArity = 0;
G__53064.cljs$lang$applyTo = (function (arglist__53066){
var args__23095__auto__ = cljs.core.seq(arglist__53066);
return G__53064__delegate(args__23095__auto__);
});
G__53064.cljs$core$IFn$_invoke$arity$variadic = G__53064__delegate;
return G__53064;
})()
;
;})(args_53048__$1,format_in__23093__auto__,cf__23094__auto__,vec__53038_53060,ns_53061,kw_53062,lis_53063,_STAR_current_level_STAR__orig_val__53034_53056,_STAR_current_length_STAR__orig_val__53035_53057,_STAR_current_level_STAR__temp_val__53036_53058,_STAR_current_length_STAR__temp_val__53037_53059,vec__53031_53053,start_53054__$1,end_53055__$1,arg_53052,_STAR_current_level_STAR__orig_val__53027_53041,_STAR_current_length_STAR__orig_val__53028_53042,_STAR_current_level_STAR__temp_val__53029_53043,_STAR_current_length_STAR__temp_val__53030_53044,vec__53021,start,end,vec__53024,seq__53025,first__53026,seq__53025__$1,keyw,args))
})().call(null,ns_53061,kw_53062);

if(cljs.core.sequential_QMARK_.call(null,lis_53063)){
(function (){var format_in__23093__auto__ = ((cljs.core.vector_QMARK_.call(null,lis_53063))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (args_53048__$1,format_in__23093__auto__,cf__23094__auto__,vec__53038_53060,ns_53061,kw_53062,lis_53063,_STAR_current_level_STAR__orig_val__53034_53056,_STAR_current_length_STAR__orig_val__53035_53057,_STAR_current_level_STAR__temp_val__53036_53058,_STAR_current_length_STAR__temp_val__53037_53059,vec__53031_53053,start_53054__$1,end_53055__$1,arg_53052,_STAR_current_level_STAR__orig_val__53027_53041,_STAR_current_length_STAR__orig_val__53028_53042,_STAR_current_level_STAR__temp_val__53029_53043,_STAR_current_length_STAR__temp_val__53030_53044,vec__53021,start,end,vec__53024,seq__53025,first__53026,seq__53025__$1,keyw,args){
return (function() { 
var G__53067__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53067 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53068__i = 0, G__53068__a = new Array(arguments.length -  0);
while (G__53068__i < G__53068__a.length) {G__53068__a[G__53068__i] = arguments[G__53068__i + 0]; ++G__53068__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53068__a,0,null);
} 
return G__53067__delegate.call(this,args__23095__auto__);};
G__53067.cljs$lang$maxFixedArity = 0;
G__53067.cljs$lang$applyTo = (function (arglist__53069){
var args__23095__auto__ = cljs.core.seq(arglist__53069);
return G__53067__delegate(args__23095__auto__);
});
G__53067.cljs$core$IFn$_invoke$arity$variadic = G__53067__delegate;
return G__53067;
})()
;
;})(args_53048__$1,format_in__23093__auto__,cf__23094__auto__,vec__53038_53060,ns_53061,kw_53062,lis_53063,_STAR_current_level_STAR__orig_val__53034_53056,_STAR_current_length_STAR__orig_val__53035_53057,_STAR_current_level_STAR__temp_val__53036_53058,_STAR_current_length_STAR__temp_val__53037_53059,vec__53031_53053,start_53054__$1,end_53055__$1,arg_53052,_STAR_current_level_STAR__orig_val__53027_53041,_STAR_current_length_STAR__orig_val__53028_53042,_STAR_current_level_STAR__temp_val__53029_53043,_STAR_current_length_STAR__temp_val__53030_53044,vec__53021,start,end,vec__53024,seq__53025,first__53026,seq__53025__$1,keyw,args))
})().call(null,lis_53063);
} else {
cljs.pprint.write_out.call(null,lis_53063);
}
} else {
cljs.core.apply.call(null,(function (){var format_in__23093__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (args_53048__$1,format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53034_53056,_STAR_current_length_STAR__orig_val__53035_53057,_STAR_current_level_STAR__temp_val__53036_53058,_STAR_current_length_STAR__temp_val__53037_53059,vec__53031_53053,start_53054__$1,end_53055__$1,arg_53052,_STAR_current_level_STAR__orig_val__53027_53041,_STAR_current_length_STAR__orig_val__53028_53042,_STAR_current_level_STAR__temp_val__53029_53043,_STAR_current_length_STAR__temp_val__53030_53044,vec__53021,start,end,vec__53024,seq__53025,first__53026,seq__53025__$1,keyw,args){
return (function() { 
var G__53070__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53070 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53071__i = 0, G__53071__a = new Array(arguments.length -  0);
while (G__53071__i < G__53071__a.length) {G__53071__a[G__53071__i] = arguments[G__53071__i + 0]; ++G__53071__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53071__a,0,null);
} 
return G__53070__delegate.call(this,args__23095__auto__);};
G__53070.cljs$lang$maxFixedArity = 0;
G__53070.cljs$lang$applyTo = (function (arglist__53072){
var args__23095__auto__ = cljs.core.seq(arglist__53072);
return G__53070__delegate(args__23095__auto__);
});
G__53070.cljs$core$IFn$_invoke$arity$variadic = G__53070__delegate;
return G__53070;
})()
;
;})(args_53048__$1,format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53034_53056,_STAR_current_length_STAR__orig_val__53035_53057,_STAR_current_level_STAR__temp_val__53036_53058,_STAR_current_length_STAR__temp_val__53037_53059,vec__53031_53053,start_53054__$1,end_53055__$1,arg_53052,_STAR_current_level_STAR__orig_val__53027_53041,_STAR_current_length_STAR__orig_val__53028_53042,_STAR_current_level_STAR__temp_val__53029_53043,_STAR_current_length_STAR__temp_val__53030_53044,vec__53021,start,end,vec__53024,seq__53025,first__53026,seq__53025__$1,keyw,args))
})(),arg_53052);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__53035_53057;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__53034_53056;
}}


if(cljs.core.next.call(null,args_53048__$1)){
(function (){var format_in__23093__auto__ = "~_";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (args_53048__$1,format_in__23093__auto__,cf__23094__auto__,vec__53031_53053,start_53054__$1,end_53055__$1,arg_53052,_STAR_current_level_STAR__orig_val__53027_53041,_STAR_current_length_STAR__orig_val__53028_53042,_STAR_current_level_STAR__temp_val__53029_53043,_STAR_current_length_STAR__temp_val__53030_53044,vec__53021,start,end,vec__53024,seq__53025,first__53026,seq__53025__$1,keyw,args){
return (function() { 
var G__53073__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53073 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53074__i = 0, G__53074__a = new Array(arguments.length -  0);
while (G__53074__i < G__53074__a.length) {G__53074__a[G__53074__i] = arguments[G__53074__i + 0]; ++G__53074__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53074__a,0,null);
} 
return G__53073__delegate.call(this,args__23095__auto__);};
G__53073.cljs$lang$maxFixedArity = 0;
G__53073.cljs$lang$applyTo = (function (arglist__53075){
var args__23095__auto__ = cljs.core.seq(arglist__53075);
return G__53073__delegate(args__23095__auto__);
});
G__53073.cljs$core$IFn$_invoke$arity$variadic = G__53073__delegate;
return G__53073;
})()
;
;})(args_53048__$1,format_in__23093__auto__,cf__23094__auto__,vec__53031_53053,start_53054__$1,end_53055__$1,arg_53052,_STAR_current_level_STAR__orig_val__53027_53041,_STAR_current_length_STAR__orig_val__53028_53042,_STAR_current_level_STAR__temp_val__53029_53043,_STAR_current_length_STAR__temp_val__53030_53044,vec__53021,start,end,vec__53024,seq__53025,first__53026,seq__53025__$1,keyw,args))
})().call(null);
} else {
}
} else {
cljs.pprint.write_out.call(null,arg_53052);

if(cljs.core.next.call(null,args_53048__$1)){
(function (){var format_in__23093__auto__ = "~:_";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (args_53048__$1,format_in__23093__auto__,cf__23094__auto__,arg_53052,_STAR_current_level_STAR__orig_val__53027_53041,_STAR_current_length_STAR__orig_val__53028_53042,_STAR_current_level_STAR__temp_val__53029_53043,_STAR_current_length_STAR__temp_val__53030_53044,vec__53021,start,end,vec__53024,seq__53025,first__53026,seq__53025__$1,keyw,args){
return (function() { 
var G__53076__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53076 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53077__i = 0, G__53077__a = new Array(arguments.length -  0);
while (G__53077__i < G__53077__a.length) {G__53077__a[G__53077__i] = arguments[G__53077__i + 0]; ++G__53077__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53077__a,0,null);
} 
return G__53076__delegate.call(this,args__23095__auto__);};
G__53076.cljs$lang$maxFixedArity = 0;
G__53076.cljs$lang$applyTo = (function (arglist__53078){
var args__23095__auto__ = cljs.core.seq(arglist__53078);
return G__53076__delegate(args__23095__auto__);
});
G__53076.cljs$core$IFn$_invoke$arity$variadic = G__53076__delegate;
return G__53076;
})()
;
;})(args_53048__$1,format_in__23093__auto__,cf__23094__auto__,arg_53052,_STAR_current_level_STAR__orig_val__53027_53041,_STAR_current_length_STAR__orig_val__53028_53042,_STAR_current_level_STAR__temp_val__53029_53043,_STAR_current_length_STAR__temp_val__53030_53044,vec__53021,start,end,vec__53024,seq__53025,first__53026,seq__53025__$1,keyw,args))
})().call(null);
} else {
}
}

var G__53079 = cljs.core.next.call(null,args_53048__$1);
args_53048__$1 = G__53079;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__53028_53042;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__53027_53041;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next.call(null,alis)){
var vec__53080 = alis;
var seq__53081 = cljs.core.seq.call(null,vec__53080);
var first__53082 = cljs.core.first.call(null,seq__53081);
var seq__53081__$1 = cljs.core.next.call(null,seq__53081);
var ns_sym = first__53082;
var first__53082__$1 = cljs.core.first.call(null,seq__53081__$1);
var seq__53081__$2 = cljs.core.next.call(null,seq__53081__$1);
var ns_name = first__53082__$1;
var stuff = seq__53081__$2;
var vec__53083 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__53083,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__53083,(1),null);
var vec__53086 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__53086,(0),null);
var references = cljs.core.nth.call(null,vec__53086,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__53089_53093 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__53090_53094 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__53091_53095 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__53092_53096 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__53091_53095;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__53092_53096;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__23093__auto__ = "~w ~1I~@_~w";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53089_53093,_STAR_current_length_STAR__orig_val__53090_53094,_STAR_current_level_STAR__temp_val__53091_53095,_STAR_current_length_STAR__temp_val__53092_53096,vec__53080,seq__53081,first__53082,seq__53081__$1,ns_sym,first__53082__$1,seq__53081__$2,ns_name,stuff,vec__53083,doc_str,stuff__$1,vec__53086,attr_map,references){
return (function() { 
var G__53097__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53097 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53098__i = 0, G__53098__a = new Array(arguments.length -  0);
while (G__53098__i < G__53098__a.length) {G__53098__a[G__53098__i] = arguments[G__53098__i + 0]; ++G__53098__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53098__a,0,null);
} 
return G__53097__delegate.call(this,args__23095__auto__);};
G__53097.cljs$lang$maxFixedArity = 0;
G__53097.cljs$lang$applyTo = (function (arglist__53099){
var args__23095__auto__ = cljs.core.seq(arglist__53099);
return G__53097__delegate(args__23095__auto__);
});
G__53097.cljs$core$IFn$_invoke$arity$variadic = G__53097__delegate;
return G__53097;
})()
;
;})(format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53089_53093,_STAR_current_length_STAR__orig_val__53090_53094,_STAR_current_level_STAR__temp_val__53091_53095,_STAR_current_length_STAR__temp_val__53092_53096,vec__53080,seq__53081,first__53082,seq__53081__$1,ns_sym,first__53082__$1,seq__53081__$2,ns_name,stuff,vec__53083,doc_str,stuff__$1,vec__53086,attr_map,references))
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__4047__auto__ = doc_str;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = attr_map;
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return cljs.core.seq.call(null,references);
}
}
})())){
(function (){var format_in__23093__auto__ = "~@:_";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53089_53093,_STAR_current_length_STAR__orig_val__53090_53094,_STAR_current_level_STAR__temp_val__53091_53095,_STAR_current_length_STAR__temp_val__53092_53096,vec__53080,seq__53081,first__53082,seq__53081__$1,ns_sym,first__53082__$1,seq__53081__$2,ns_name,stuff,vec__53083,doc_str,stuff__$1,vec__53086,attr_map,references){
return (function() { 
var G__53100__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53100 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53101__i = 0, G__53101__a = new Array(arguments.length -  0);
while (G__53101__i < G__53101__a.length) {G__53101__a[G__53101__i] = arguments[G__53101__i + 0]; ++G__53101__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53101__a,0,null);
} 
return G__53100__delegate.call(this,args__23095__auto__);};
G__53100.cljs$lang$maxFixedArity = 0;
G__53100.cljs$lang$applyTo = (function (arglist__53102){
var args__23095__auto__ = cljs.core.seq(arglist__53102);
return G__53100__delegate(args__23095__auto__);
});
G__53100.cljs$core$IFn$_invoke$arity$variadic = G__53100__delegate;
return G__53100;
})()
;
;})(format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53089_53093,_STAR_current_length_STAR__orig_val__53090_53094,_STAR_current_level_STAR__temp_val__53091_53095,_STAR_current_length_STAR__temp_val__53092_53096,vec__53080,seq__53081,first__53082,seq__53081__$1,ns_sym,first__53082__$1,seq__53081__$2,ns_name,stuff,vec__53083,doc_str,stuff__$1,vec__53086,attr_map,references))
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.call(null,true,"\"~a\"~:[~;~:@_~]",doc_str,(function (){var or__4047__auto__ = attr_map;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.seq.call(null,references);
}
})());
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__23093__auto__ = "~w~:[~;~:@_~]";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53089_53093,_STAR_current_length_STAR__orig_val__53090_53094,_STAR_current_level_STAR__temp_val__53091_53095,_STAR_current_length_STAR__temp_val__53092_53096,vec__53080,seq__53081,first__53082,seq__53081__$1,ns_sym,first__53082__$1,seq__53081__$2,ns_name,stuff,vec__53083,doc_str,stuff__$1,vec__53086,attr_map,references){
return (function() { 
var G__53103__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53103 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53104__i = 0, G__53104__a = new Array(arguments.length -  0);
while (G__53104__i < G__53104__a.length) {G__53104__a[G__53104__i] = arguments[G__53104__i + 0]; ++G__53104__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53104__a,0,null);
} 
return G__53103__delegate.call(this,args__23095__auto__);};
G__53103.cljs$lang$maxFixedArity = 0;
G__53103.cljs$lang$applyTo = (function (arglist__53105){
var args__23095__auto__ = cljs.core.seq(arglist__53105);
return G__53103__delegate(args__23095__auto__);
});
G__53103.cljs$core$IFn$_invoke$arity$variadic = G__53103__delegate;
return G__53103;
})()
;
;})(format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53089_53093,_STAR_current_length_STAR__orig_val__53090_53094,_STAR_current_level_STAR__temp_val__53091_53095,_STAR_current_length_STAR__temp_val__53092_53096,vec__53080,seq__53081,first__53082,seq__53081__$1,ns_sym,first__53082__$1,seq__53081__$2,ns_name,stuff,vec__53083,doc_str,stuff__$1,vec__53086,attr_map,references))
})().call(null,attr_map,cljs.core.seq.call(null,references));
} else {
}

var references_53106__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference.call(null,cljs.core.first.call(null,references_53106__$1));

var temp__5457__auto___53107 = cljs.core.next.call(null,references_53106__$1);
if(temp__5457__auto___53107){
var references_53108__$2 = temp__5457__auto___53107;
cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$linear);

var G__53109 = references_53108__$2;
references_53106__$1 = G__53109;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__53090_53094;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__53089_53093;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__23093__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (format_in__23093__auto__,cf__23094__auto__){
return (function() { 
var G__53110__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53110 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53111__i = 0, G__53111__a = new Array(arguments.length -  0);
while (G__53111__i < G__53111__a.length) {G__53111__a[G__53111__i] = arguments[G__53111__i + 0]; ++G__53111__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53111__a,0,null);
} 
return G__53110__delegate.call(this,args__23095__auto__);};
G__53110.cljs$lang$maxFixedArity = 0;
G__53110.cljs$lang$applyTo = (function (arglist__53112){
var args__23095__auto__ = cljs.core.seq(arglist__53112);
return G__53110__delegate(args__23095__auto__);
});
G__53110.cljs$core$IFn$_invoke$arity$variadic = G__53110__delegate;
return G__53110;
})()
;
;})(format_in__23093__auto__,cf__23094__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__23093__auto__ = " ~_";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (format_in__23093__auto__,cf__23094__auto__){
return (function() { 
var G__53113__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53113 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53114__i = 0, G__53114__a = new Array(arguments.length -  0);
while (G__53114__i < G__53114__a.length) {G__53114__a[G__53114__i] = arguments[G__53114__i + 0]; ++G__53114__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53114__a,0,null);
} 
return G__53113__delegate.call(this,args__23095__auto__);};
G__53113.cljs$lang$maxFixedArity = 0;
G__53113.cljs$lang$applyTo = (function (arglist__53115){
var args__23095__auto__ = cljs.core.seq(arglist__53115);
return G__53113__delegate(args__23095__auto__);
});
G__53113.cljs$core$IFn$_invoke$arity$variadic = G__53113__delegate;
return G__53113;
})()
;
;})(format_in__23093__auto__,cf__23094__auto__))
})().call(null);
} else {
(function (){var format_in__23093__auto__ = " ~@_";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (format_in__23093__auto__,cf__23094__auto__){
return (function() { 
var G__53116__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53116 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53117__i = 0, G__53117__a = new Array(arguments.length -  0);
while (G__53117__i < G__53117__a.length) {G__53117__a[G__53117__i] = arguments[G__53117__i + 0]; ++G__53117__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53117__a,0,null);
} 
return G__53116__delegate.call(this,args__23095__auto__);};
G__53116.cljs$lang$maxFixedArity = 0;
G__53116.cljs$lang$applyTo = (function (arglist__53118){
var args__23095__auto__ = cljs.core.seq(arglist__53118);
return G__53116__delegate(args__23095__auto__);
});
G__53116.cljs$core$IFn$_invoke$arity$variadic = G__53116__delegate;
return G__53116;
})()
;
;})(format_in__23093__auto__,cf__23094__auto__))
})().call(null);
}

return (function (){var format_in__23093__auto__ = "~{~w~^ ~_~}";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (format_in__23093__auto__,cf__23094__auto__){
return (function() { 
var G__53119__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53119 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53120__i = 0, G__53120__a = new Array(arguments.length -  0);
while (G__53120__i < G__53120__a.length) {G__53120__a[G__53120__i] = arguments[G__53120__i + 0]; ++G__53120__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53120__a,0,null);
} 
return G__53119__delegate.call(this,args__23095__auto__);};
G__53119.cljs$lang$maxFixedArity = 0;
G__53119.cljs$lang$applyTo = (function (arglist__53121){
var args__23095__auto__ = cljs.core.seq(arglist__53121);
return G__53119__delegate(args__23095__auto__);
});
G__53119.cljs$core$IFn$_invoke$arity$variadic = G__53119__delegate;
return G__53119;
})()
;
;})(format_in__23093__auto__,cf__23094__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
return (function (){var format_in__23093__auto__ = " ~_~{~w~^ ~_~}";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (format_in__23093__auto__,cf__23094__auto__){
return (function() { 
var G__53122__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53122 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53123__i = 0, G__53123__a = new Array(arguments.length -  0);
while (G__53123__i < G__53123__a.length) {G__53123__a[G__53123__i] = arguments[G__53123__i + 0]; ++G__53123__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53123__a,0,null);
} 
return G__53122__delegate.call(this,args__23095__auto__);};
G__53122.cljs$lang$maxFixedArity = 0;
G__53122.cljs$lang$applyTo = (function (arglist__53124){
var args__23095__auto__ = cljs.core.seq(arglist__53124);
return G__53122__delegate(args__23095__auto__);
});
G__53122.cljs$core$IFn$_invoke$arity$variadic = G__53122__delegate;
return G__53122;
})()
;
;})(format_in__23093__auto__,cf__23094__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next.call(null,alis)){
var vec__53125 = alis;
var seq__53126 = cljs.core.seq.call(null,vec__53125);
var first__53127 = cljs.core.first.call(null,seq__53126);
var seq__53126__$1 = cljs.core.next.call(null,seq__53126);
var defn_sym = first__53127;
var first__53127__$1 = cljs.core.first.call(null,seq__53126__$1);
var seq__53126__$2 = cljs.core.next.call(null,seq__53126__$1);
var defn_name = first__53127__$1;
var stuff = seq__53126__$2;
var vec__53128 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__53128,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__53128,(1),null);
var vec__53131 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__53131,(0),null);
var stuff__$2 = cljs.core.nth.call(null,vec__53131,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__53134_53138 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__53135_53139 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__53136_53140 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__53137_53141 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__53136_53140;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__53137_53141;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__23093__auto__ = "~w ~1I~@_~w";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53134_53138,_STAR_current_length_STAR__orig_val__53135_53139,_STAR_current_level_STAR__temp_val__53136_53140,_STAR_current_length_STAR__temp_val__53137_53141,vec__53125,seq__53126,first__53127,seq__53126__$1,defn_sym,first__53127__$1,seq__53126__$2,defn_name,stuff,vec__53128,doc_str,stuff__$1,vec__53131,attr_map,stuff__$2){
return (function() { 
var G__53142__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53142 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53143__i = 0, G__53143__a = new Array(arguments.length -  0);
while (G__53143__i < G__53143__a.length) {G__53143__a[G__53143__i] = arguments[G__53143__i + 0]; ++G__53143__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53143__a,0,null);
} 
return G__53142__delegate.call(this,args__23095__auto__);};
G__53142.cljs$lang$maxFixedArity = 0;
G__53142.cljs$lang$applyTo = (function (arglist__53144){
var args__23095__auto__ = cljs.core.seq(arglist__53144);
return G__53142__delegate(args__23095__auto__);
});
G__53142.cljs$core$IFn$_invoke$arity$variadic = G__53142__delegate;
return G__53142;
})()
;
;})(format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53134_53138,_STAR_current_length_STAR__orig_val__53135_53139,_STAR_current_level_STAR__temp_val__53136_53140,_STAR_current_length_STAR__temp_val__53137_53141,vec__53125,seq__53126,first__53127,seq__53126__$1,defn_sym,first__53127__$1,seq__53126__$2,defn_name,stuff,vec__53128,doc_str,stuff__$1,vec__53131,attr_map,stuff__$2))
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__23093__auto__ = " ~_~w";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53134_53138,_STAR_current_length_STAR__orig_val__53135_53139,_STAR_current_level_STAR__temp_val__53136_53140,_STAR_current_length_STAR__temp_val__53137_53141,vec__53125,seq__53126,first__53127,seq__53126__$1,defn_sym,first__53127__$1,seq__53126__$2,defn_name,stuff,vec__53128,doc_str,stuff__$1,vec__53131,attr_map,stuff__$2){
return (function() { 
var G__53145__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53145 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53146__i = 0, G__53146__a = new Array(arguments.length -  0);
while (G__53146__i < G__53146__a.length) {G__53146__a[G__53146__i] = arguments[G__53146__i + 0]; ++G__53146__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53146__a,0,null);
} 
return G__53145__delegate.call(this,args__23095__auto__);};
G__53145.cljs$lang$maxFixedArity = 0;
G__53145.cljs$lang$applyTo = (function (arglist__53147){
var args__23095__auto__ = cljs.core.seq(arglist__53147);
return G__53145__delegate(args__23095__auto__);
});
G__53145.cljs$core$IFn$_invoke$arity$variadic = G__53145__delegate;
return G__53145;
})()
;
;})(format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53134_53138,_STAR_current_length_STAR__orig_val__53135_53139,_STAR_current_level_STAR__temp_val__53136_53140,_STAR_current_length_STAR__temp_val__53137_53141,vec__53125,seq__53126,first__53127,seq__53126__$1,defn_sym,first__53127__$1,seq__53126__$2,defn_name,stuff,vec__53128,doc_str,stuff__$1,vec__53131,attr_map,stuff__$2))
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__23093__auto__ = " ~_~w";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53134_53138,_STAR_current_length_STAR__orig_val__53135_53139,_STAR_current_level_STAR__temp_val__53136_53140,_STAR_current_length_STAR__temp_val__53137_53141,vec__53125,seq__53126,first__53127,seq__53126__$1,defn_sym,first__53127__$1,seq__53126__$2,defn_name,stuff,vec__53128,doc_str,stuff__$1,vec__53131,attr_map,stuff__$2){
return (function() { 
var G__53148__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53148 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53149__i = 0, G__53149__a = new Array(arguments.length -  0);
while (G__53149__i < G__53149__a.length) {G__53149__a[G__53149__i] = arguments[G__53149__i + 0]; ++G__53149__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53149__a,0,null);
} 
return G__53148__delegate.call(this,args__23095__auto__);};
G__53148.cljs$lang$maxFixedArity = 0;
G__53148.cljs$lang$applyTo = (function (arglist__53150){
var args__23095__auto__ = cljs.core.seq(arglist__53150);
return G__53148__delegate(args__23095__auto__);
});
G__53148.cljs$core$IFn$_invoke$arity$variadic = G__53148__delegate;
return G__53148;
})()
;
;})(format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53134_53138,_STAR_current_length_STAR__orig_val__53135_53139,_STAR_current_level_STAR__temp_val__53136_53140,_STAR_current_length_STAR__temp_val__53137_53141,vec__53125,seq__53126,first__53127,seq__53126__$1,defn_sym,first__53127__$1,seq__53126__$2,defn_name,stuff,vec__53128,doc_str,stuff__$1,vec__53131,attr_map,stuff__$2))
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,stuff__$2))){
cljs.pprint.single_defn.call(null,stuff__$2,(function (){var or__4047__auto__ = doc_str;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn.call(null,stuff__$2,(function (){var or__4047__auto__ = doc_str;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__53135_53139;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__53134_53138;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__53151_53160 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__53152_53161 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__53153_53162 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__53154_53163 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__53153_53162;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__53154_53163;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count53155_53164 = (0);
var binding_53165 = binding_vec;
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count53155_53164 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq.call(null,binding_53165)){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__53156_53166 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__53157_53167 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__53158_53168 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__53159_53169 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__53158_53168;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__53159_53169;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,binding_53165));

if(cljs.core.next.call(null,binding_53165)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$miser);

cljs.pprint.write_out.call(null,cljs.core.second.call(null,binding_53165));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__53157_53167;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__53156_53166;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,binding_53165))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$linear);

var G__53170 = (length_count53155_53164 + (1));
var G__53171 = cljs.core.next.call(null,cljs.core.rest.call(null,binding_53165));
length_count53155_53164 = G__53170;
binding_53165 = G__53171;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__53152_53161;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__53151_53160;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first.call(null,alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__53172_53176 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__53173_53177 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__53174_53178 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__53175_53179 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__53174_53178;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__53175_53179;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next.call(null,alis)) && (cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,alis))))){
(function (){var format_in__23093__auto__ = "~w ~1I~@_";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53172_53176,_STAR_current_length_STAR__orig_val__53173_53177,_STAR_current_level_STAR__temp_val__53174_53178,_STAR_current_length_STAR__temp_val__53175_53179,base_sym){
return (function() { 
var G__53180__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53180 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53181__i = 0, G__53181__a = new Array(arguments.length -  0);
while (G__53181__i < G__53181__a.length) {G__53181__a[G__53181__i] = arguments[G__53181__i + 0]; ++G__53181__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53181__a,0,null);
} 
return G__53180__delegate.call(this,args__23095__auto__);};
G__53180.cljs$lang$maxFixedArity = 0;
G__53180.cljs$lang$applyTo = (function (arglist__53182){
var args__23095__auto__ = cljs.core.seq(arglist__53182);
return G__53180__delegate(args__23095__auto__);
});
G__53180.cljs$core$IFn$_invoke$arity$variadic = G__53180__delegate;
return G__53180;
})()
;
;})(format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53172_53176,_STAR_current_length_STAR__orig_val__53173_53177,_STAR_current_level_STAR__temp_val__53174_53178,_STAR_current_length_STAR__temp_val__53175_53179,base_sym))
})().call(null,base_sym);

cljs.pprint.pprint_binding_form.call(null,cljs.core.second.call(null,alis));

(function (){var format_in__23093__auto__ = " ~_~{~w~^ ~_~}";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53172_53176,_STAR_current_length_STAR__orig_val__53173_53177,_STAR_current_level_STAR__temp_val__53174_53178,_STAR_current_length_STAR__temp_val__53175_53179,base_sym){
return (function() { 
var G__53183__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53183 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53184__i = 0, G__53184__a = new Array(arguments.length -  0);
while (G__53184__i < G__53184__a.length) {G__53184__a[G__53184__i] = arguments[G__53184__i + 0]; ++G__53184__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53184__a,0,null);
} 
return G__53183__delegate.call(this,args__23095__auto__);};
G__53183.cljs$lang$maxFixedArity = 0;
G__53183.cljs$lang$applyTo = (function (arglist__53185){
var args__23095__auto__ = cljs.core.seq(arglist__53185);
return G__53183__delegate(args__23095__auto__);
});
G__53183.cljs$core$IFn$_invoke$arity$variadic = G__53183__delegate;
return G__53183;
})()
;
;})(format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53172_53176,_STAR_current_length_STAR__orig_val__53173_53177,_STAR_current_level_STAR__temp_val__53174_53178,_STAR_current_length_STAR__temp_val__53175_53179,base_sym))
})().call(null,cljs.core.next.call(null,cljs.core.rest.call(null,alis)));
} else {
cljs.pprint.pprint_simple_code_list.call(null,alis);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__53173_53177;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__53172_53176;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__23093__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (format_in__23093__auto__,cf__23094__auto__){
return (function() { 
var G__53186__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53186 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53187__i = 0, G__53187__a = new Array(arguments.length -  0);
while (G__53187__i < G__53187__a.length) {G__53187__a[G__53187__i] = arguments[G__53187__i + 0]; ++G__53187__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53187__a,0,null);
} 
return G__53186__delegate.call(this,args__23095__auto__);};
G__53186.cljs$lang$maxFixedArity = 0;
G__53186.cljs$lang$applyTo = (function (arglist__53188){
var args__23095__auto__ = cljs.core.seq(arglist__53188);
return G__53186__delegate(args__23095__auto__);
});
G__53186.cljs$core$IFn$_invoke$arity$variadic = G__53186__delegate;
return G__53186;
})()
;
;})(format_in__23093__auto__,cf__23094__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__53189_53198 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__53190_53199 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__53191_53200 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__53192_53201 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__53191_53200;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__53192_53201;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,cljs.core.cst$kw$block,(1));

cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis));

if(cljs.core.next.call(null,alis)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$linear);

var length_count53193_53202 = (0);
var alis_53203__$1 = cljs.core.next.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count53193_53202 < cljs.core._STAR_print_length_STAR_)))){
if(alis_53203__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__53194_53204 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__53195_53205 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__53196_53206 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__53197_53207 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__53196_53206;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__53197_53207;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_53203__$1));

if(cljs.core.next.call(null,alis_53203__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$miser);

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_53203__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__53195_53205;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__53194_53204;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_53203__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$linear);

var G__53208 = (length_count53193_53202 + (1));
var G__53209 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_53203__$1));
length_count53193_53202 = G__53208;
alis_53203__$1 = G__53209;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__53190_53199;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__53189_53198;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count.call(null,alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__53210_53219 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__53211_53220 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__53212_53221 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__53213_53222 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__53212_53221;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__53213_53222;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,cljs.core.cst$kw$block,(1));

cljs.core.apply.call(null,(function (){var format_in__23093__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53210_53219,_STAR_current_length_STAR__orig_val__53211_53220,_STAR_current_level_STAR__temp_val__53212_53221,_STAR_current_length_STAR__temp_val__53213_53222){
return (function() { 
var G__53223__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53223 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53224__i = 0, G__53224__a = new Array(arguments.length -  0);
while (G__53224__i < G__53224__a.length) {G__53224__a[G__53224__i] = arguments[G__53224__i + 0]; ++G__53224__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53224__a,0,null);
} 
return G__53223__delegate.call(this,args__23095__auto__);};
G__53223.cljs$lang$maxFixedArity = 0;
G__53223.cljs$lang$applyTo = (function (arglist__53225){
var args__23095__auto__ = cljs.core.seq(arglist__53225);
return G__53223__delegate(args__23095__auto__);
});
G__53223.cljs$core$IFn$_invoke$arity$variadic = G__53223__delegate;
return G__53223;
})()
;
;})(format_in__23093__auto__,cf__23094__auto__,_STAR_current_level_STAR__orig_val__53210_53219,_STAR_current_length_STAR__orig_val__53211_53220,_STAR_current_level_STAR__temp_val__53212_53221,_STAR_current_length_STAR__temp_val__53213_53222))
})(),alis);

var length_count53214_53226 = (0);
var alis_53227__$1 = cljs.core.seq.call(null,cljs.core.drop.call(null,(3),alis));
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count53214_53226 < cljs.core._STAR_print_length_STAR_)))){
if(alis_53227__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__53215_53228 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__53216_53229 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__53217_53230 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__53218_53231 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__53217_53230;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__53218_53231;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_53227__$1));

if(cljs.core.next.call(null,alis_53227__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$miser);

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_53227__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__53216_53229;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__53215_53228;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_53227__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$linear);

var G__53232 = (length_count53214_53226 + (1));
var G__53233 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_53227__$1));
length_count53214_53226 = G__53232;
alis_53227__$1 = G__53233;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__53211_53220;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__53210_53219;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second.call(null,alis);
var nlis = cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,alis)));
if(cljs.core.vector_QMARK_.call(null,args)){
var _STAR_symbol_map_STAR__orig_val__53236 = cljs.pprint._STAR_symbol_map_STAR_;
var _STAR_symbol_map_STAR__temp_val__53237 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,args),"%"]):cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (_STAR_symbol_map_STAR__orig_val__53236,args,nlis){
return (function (p1__53234_SHARP_,p2__53235_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__53234_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__53235_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR__orig_val__53236,args,nlis))
,args,cljs.core.range.call(null,(1),(cljs.core.count.call(null,args) + (1))))));
cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__temp_val__53237;

try{return (function (){var format_in__23093__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__23094__auto__ = ((typeof format_in__23093__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__23093__auto__):format_in__23093__auto__);
return ((function (format_in__23093__auto__,cf__23094__auto__,_STAR_symbol_map_STAR__orig_val__53236,_STAR_symbol_map_STAR__temp_val__53237,args,nlis){
return (function() { 
var G__53238__delegate = function (args__23095__auto__){
var navigator__23096__auto__ = cljs.pprint.init_navigator.call(null,args__23095__auto__);
return cljs.pprint.execute_format.call(null,cf__23094__auto__,navigator__23096__auto__);
};
var G__53238 = function (var_args){
var args__23095__auto__ = null;
if (arguments.length > 0) {
var G__53239__i = 0, G__53239__a = new Array(arguments.length -  0);
while (G__53239__i < G__53239__a.length) {G__53239__a[G__53239__i] = arguments[G__53239__i + 0]; ++G__53239__i;}
  args__23095__auto__ = new cljs.core.IndexedSeq(G__53239__a,0,null);
} 
return G__53238__delegate.call(this,args__23095__auto__);};
G__53238.cljs$lang$maxFixedArity = 0;
G__53238.cljs$lang$applyTo = (function (arglist__53240){
var args__23095__auto__ = cljs.core.seq(arglist__53240);
return G__53238__delegate(args__23095__auto__);
});
G__53238.cljs$core$IFn$_invoke$arity$variadic = G__53238__delegate;
return G__53238;
})()
;
;})(format_in__23093__auto__,cf__23094__auto__,_STAR_symbol_map_STAR__orig_val__53236,_STAR_symbol_map_STAR__temp_val__53237,args,nlis))
})().call(null,nlis);
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__orig_val__53236;
}} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__53241_53246 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__53242_53247 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__53243_53248 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__53244_53249 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__53243_53248;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__53244_53249;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,cljs.core.cst$kw$block,(1));

var length_count53245_53250 = (0);
var alis_53251__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count53245_53250 < cljs.core._STAR_print_length_STAR_)))){
if(alis_53251__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_53251__$1));

if(cljs.core.next.call(null,alis_53251__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,cljs.core.cst$kw$linear);

var G__53252 = (length_count53245_53250 + (1));
var G__53253 = cljs.core.next.call(null,alis_53251__$1);
length_count53245_53250 = G__53252;
alis_53251__$1 = G__53253;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__53242_53247;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__53241_53246;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__4434__auto__ = (function cljs$pprint$two_forms_$_iter__53254(s__53255){
return (new cljs.core.LazySeq(null,(function (){
var s__53255__$1 = s__53255;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__53255__$1);
if(temp__5457__auto__){
var s__53255__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53255__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__53255__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__53257 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__53256 = (0);
while(true){
if((i__53256 < size__4433__auto__)){
var x = cljs.core._nth.call(null,c__4432__auto__,i__53256);
cljs.core.chunk_append.call(null,b__53257,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null));

var G__53258 = (i__53256 + (1));
i__53256 = G__53258;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53257),cljs$pprint$two_forms_$_iter__53254.call(null,cljs.core.chunk_rest.call(null,s__53255__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53257),null);
}
} else {
var x = cljs.core.first.call(null,s__53255__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null),cljs$pprint$two_forms_$_iter__53254.call(null,cljs.core.rest.call(null,s__53255__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,amap);
})()));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (core){
return (function (p1__53259_SHARP_){
var vec__53260 = p1__53259_SHARP_;
var s = cljs.core.nth.call(null,vec__53260,(0),null);
var f = cljs.core.nth.call(null,vec__53260,(1),null);
if(cljs.core.not.call(null,(function (){var or__4047__auto__ = cljs.core.namespace.call(null,s);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.special_symbol_QMARK_.call(null,s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,core,cljs.core.name.call(null,s)),f], null);
} else {
return p1__53259_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms.call(null,cljs.pprint.add_core_ns.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if,cljs.core.cst$sym$condp,cljs.core.cst$sym$$$,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
var temp__5455__auto__ = cljs.pprint._STAR_code_table_STAR_.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_(temp__5455__auto__)){
var special_form = temp__5455__auto__;
return special_form.call(null,alis);
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5455__auto__ = sym.call(null,cljs.pprint._STAR_symbol_map_STAR_);
if(cljs.core.truth_(temp__5455__auto__)){
var arg_num = temp__5455__auto__;
return cljs.pprint.print.call(null,arg_num);
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.call(null,cljs.core.name.call(null,sym));
} else {
return cljs.pprint.pr.call(null,sym);
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.code_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_code_list);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,cljs.core.cst$kw$symbol,cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,cljs.core.cst$kw$queue,cljs.pprint.pprint_pqueue);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,cljs.core.cst$kw$deref,cljs.pprint.pprint_ideref);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__4135__auto__ = (0);
var y__4136__auto__ = (width - cljs.core.count.call(null,s));
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})();
return cljs.core.apply.call(null,cljs.core.str,clojure.string.join.call(null,cljs.core.repeat.call(null,padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__53267 = arguments.length;
switch (G__53267) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
if(cljs.core.seq.call(null,rows)){
var widths = cljs.core.map.call(null,(function (k){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),cljs.core.map.call(null,(function (p1__53263_SHARP_){
return cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,p1__53263_SHARP_,k)));
}),rows));
}),ks);
var spacers = cljs.core.map.call(null,((function (widths){
return (function (p1__53264_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,p1__53264_SHARP_,"-"));
});})(widths))
,widths);
var fmt_row = ((function (widths,spacers){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,divider,(function (){var iter__4434__auto__ = ((function (widths,spacers){
return (function cljs$pprint$iter__53268(s__53269){
return (new cljs.core.LazySeq(null,((function (widths,spacers){
return (function (){
var s__53269__$1 = s__53269;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__53269__$1);
if(temp__5457__auto__){
var s__53269__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53269__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__53269__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__53271 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__53270 = (0);
while(true){
if((i__53270 < size__4433__auto__)){
var vec__53272 = cljs.core._nth.call(null,c__4432__auto__,i__53270);
var col = cljs.core.nth.call(null,vec__53272,(0),null);
var width = cljs.core.nth.call(null,vec__53272,(1),null);
cljs.core.chunk_append.call(null,b__53271,cljs.pprint.add_padding.call(null,width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)));

var G__53283 = (i__53270 + (1));
i__53270 = G__53283;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53271),cljs$pprint$iter__53268.call(null,cljs.core.chunk_rest.call(null,s__53269__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53271),null);
}
} else {
var vec__53275 = cljs.core.first.call(null,s__53269__$2);
var col = cljs.core.nth.call(null,vec__53275,(0),null);
var width = cljs.core.nth.call(null,vec__53275,(1),null);
return cljs.core.cons.call(null,cljs.pprint.add_padding.call(null,width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),cljs$pprint$iter__53268.call(null,cljs.core.rest.call(null,s__53269__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers))
,null,null));
});})(widths,spacers))
;
return iter__4434__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,((function (iter__4434__auto__,widths,spacers){
return (function (p1__53265_SHARP_){
return cljs.core.get.call(null,row,p1__53265_SHARP_);
});})(iter__4434__auto__,widths,spacers))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers))
;
cljs.core.println.call(null);

cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",cljs.core.zipmap.call(null,ks,ks)));

cljs.core.println.call(null,fmt_row.call(null,"|-","-+-","-|",cljs.core.zipmap.call(null,ks,spacers)));

var seq__53278 = cljs.core.seq.call(null,rows);
var chunk__53279 = null;
var count__53280 = (0);
var i__53281 = (0);
while(true){
if((i__53281 < count__53280)){
var row = cljs.core._nth.call(null,chunk__53279,i__53281);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__53284 = seq__53278;
var G__53285 = chunk__53279;
var G__53286 = count__53280;
var G__53287 = (i__53281 + (1));
seq__53278 = G__53284;
chunk__53279 = G__53285;
count__53280 = G__53286;
i__53281 = G__53287;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__53278);
if(temp__5457__auto__){
var seq__53278__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53278__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__53278__$1);
var G__53288 = cljs.core.chunk_rest.call(null,seq__53278__$1);
var G__53289 = c__4461__auto__;
var G__53290 = cljs.core.count.call(null,c__4461__auto__);
var G__53291 = (0);
seq__53278 = G__53288;
chunk__53279 = G__53289;
count__53280 = G__53290;
i__53281 = G__53291;
continue;
} else {
var row = cljs.core.first.call(null,seq__53278__$1);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__53292 = cljs.core.next.call(null,seq__53278__$1);
var G__53293 = null;
var G__53294 = (0);
var G__53295 = (0);
seq__53278 = G__53292;
chunk__53279 = G__53293;
count__53280 = G__53294;
i__53281 = G__53295;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=pprint.js.map?rel=1545321275934
