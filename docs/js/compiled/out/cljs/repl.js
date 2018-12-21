// Compiled by ClojureScript 1.10.439 {:optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__68147){
var map__68148 = p__68147;
var map__68148__$1 = (((((!((map__68148 == null))))?(((((map__68148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68148):map__68148);
var m = map__68148__$1;
var n = cljs.core.get.call(null,map__68148__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.call(null,map__68148__$1,cljs.core.cst$kw$name);
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__68150_68172 = cljs.core.seq.call(null,cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__68151_68173 = null;
var count__68152_68174 = (0);
var i__68153_68175 = (0);
while(true){
if((i__68153_68175 < count__68152_68174)){
var f_68176 = cljs.core._nth.call(null,chunk__68151_68173,i__68153_68175);
cljs.core.println.call(null,"  ",f_68176);


var G__68177 = seq__68150_68172;
var G__68178 = chunk__68151_68173;
var G__68179 = count__68152_68174;
var G__68180 = (i__68153_68175 + (1));
seq__68150_68172 = G__68177;
chunk__68151_68173 = G__68178;
count__68152_68174 = G__68179;
i__68153_68175 = G__68180;
continue;
} else {
var temp__5457__auto___68181 = cljs.core.seq.call(null,seq__68150_68172);
if(temp__5457__auto___68181){
var seq__68150_68182__$1 = temp__5457__auto___68181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68150_68182__$1)){
var c__4461__auto___68183 = cljs.core.chunk_first.call(null,seq__68150_68182__$1);
var G__68184 = cljs.core.chunk_rest.call(null,seq__68150_68182__$1);
var G__68185 = c__4461__auto___68183;
var G__68186 = cljs.core.count.call(null,c__4461__auto___68183);
var G__68187 = (0);
seq__68150_68172 = G__68184;
chunk__68151_68173 = G__68185;
count__68152_68174 = G__68186;
i__68153_68175 = G__68187;
continue;
} else {
var f_68188 = cljs.core.first.call(null,seq__68150_68182__$1);
cljs.core.println.call(null,"  ",f_68188);


var G__68189 = cljs.core.next.call(null,seq__68150_68182__$1);
var G__68190 = null;
var G__68191 = (0);
var G__68192 = (0);
seq__68150_68172 = G__68189;
chunk__68151_68173 = G__68190;
count__68152_68174 = G__68191;
i__68153_68175 = G__68192;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_68193 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_68193);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,cljs.core.cst$sym$quote,cljs.core.first.call(null,arglists_68193)))?cljs.core.second.call(null,arglists_68193):arglists_68193));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__68154_68194 = cljs.core.seq.call(null,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__68155_68195 = null;
var count__68156_68196 = (0);
var i__68157_68197 = (0);
while(true){
if((i__68157_68197 < count__68156_68196)){
var vec__68158_68198 = cljs.core._nth.call(null,chunk__68155_68195,i__68157_68197);
var name_68199 = cljs.core.nth.call(null,vec__68158_68198,(0),null);
var map__68161_68200 = cljs.core.nth.call(null,vec__68158_68198,(1),null);
var map__68161_68201__$1 = (((((!((map__68161_68200 == null))))?(((((map__68161_68200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68161_68200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68161_68200):map__68161_68200);
var doc_68202 = cljs.core.get.call(null,map__68161_68201__$1,cljs.core.cst$kw$doc);
var arglists_68203 = cljs.core.get.call(null,map__68161_68201__$1,cljs.core.cst$kw$arglists);
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_68199);

cljs.core.println.call(null," ",arglists_68203);

if(cljs.core.truth_(doc_68202)){
cljs.core.println.call(null," ",doc_68202);
} else {
}


var G__68204 = seq__68154_68194;
var G__68205 = chunk__68155_68195;
var G__68206 = count__68156_68196;
var G__68207 = (i__68157_68197 + (1));
seq__68154_68194 = G__68204;
chunk__68155_68195 = G__68205;
count__68156_68196 = G__68206;
i__68157_68197 = G__68207;
continue;
} else {
var temp__5457__auto___68208 = cljs.core.seq.call(null,seq__68154_68194);
if(temp__5457__auto___68208){
var seq__68154_68209__$1 = temp__5457__auto___68208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68154_68209__$1)){
var c__4461__auto___68210 = cljs.core.chunk_first.call(null,seq__68154_68209__$1);
var G__68211 = cljs.core.chunk_rest.call(null,seq__68154_68209__$1);
var G__68212 = c__4461__auto___68210;
var G__68213 = cljs.core.count.call(null,c__4461__auto___68210);
var G__68214 = (0);
seq__68154_68194 = G__68211;
chunk__68155_68195 = G__68212;
count__68156_68196 = G__68213;
i__68157_68197 = G__68214;
continue;
} else {
var vec__68163_68215 = cljs.core.first.call(null,seq__68154_68209__$1);
var name_68216 = cljs.core.nth.call(null,vec__68163_68215,(0),null);
var map__68166_68217 = cljs.core.nth.call(null,vec__68163_68215,(1),null);
var map__68166_68218__$1 = (((((!((map__68166_68217 == null))))?(((((map__68166_68217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68166_68217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68166_68217):map__68166_68217);
var doc_68219 = cljs.core.get.call(null,map__68166_68218__$1,cljs.core.cst$kw$doc);
var arglists_68220 = cljs.core.get.call(null,map__68166_68218__$1,cljs.core.cst$kw$arglists);
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_68216);

cljs.core.println.call(null," ",arglists_68220);

if(cljs.core.truth_(doc_68219)){
cljs.core.println.call(null," ",doc_68219);
} else {
}


var G__68221 = cljs.core.next.call(null,seq__68154_68209__$1);
var G__68222 = null;
var G__68223 = (0);
var G__68224 = (0);
seq__68154_68194 = G__68221;
chunk__68155_68195 = G__68222;
count__68156_68196 = G__68223;
i__68157_68197 = G__68224;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__68168 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__68169 = null;
var count__68170 = (0);
var i__68171 = (0);
while(true){
if((i__68171 < count__68170)){
var role = cljs.core._nth.call(null,chunk__68169,i__68171);
var temp__5457__auto___68225__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___68225__$1)){
var spec_68226 = temp__5457__auto___68225__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_68226));
} else {
}


var G__68227 = seq__68168;
var G__68228 = chunk__68169;
var G__68229 = count__68170;
var G__68230 = (i__68171 + (1));
seq__68168 = G__68227;
chunk__68169 = G__68228;
count__68170 = G__68229;
i__68171 = G__68230;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__68168);
if(temp__5457__auto____$1){
var seq__68168__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68168__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__68168__$1);
var G__68231 = cljs.core.chunk_rest.call(null,seq__68168__$1);
var G__68232 = c__4461__auto__;
var G__68233 = cljs.core.count.call(null,c__4461__auto__);
var G__68234 = (0);
seq__68168 = G__68231;
chunk__68169 = G__68232;
count__68170 = G__68233;
i__68171 = G__68234;
continue;
} else {
var role = cljs.core.first.call(null,seq__68168__$1);
var temp__5457__auto___68235__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___68235__$2)){
var spec_68236 = temp__5457__auto___68235__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_68236));
} else {
}


var G__68237 = cljs.core.next.call(null,seq__68168__$1);
var G__68238 = null;
var G__68239 = (0);
var G__68240 = (0);
seq__68168 = G__68237;
chunk__68169 = G__68238;
count__68170 = G__68239;
i__68171 = G__68240;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1545335809564
