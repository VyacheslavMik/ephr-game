// Compiled by ClojureScript 1.10.439 {:optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56082){
var map__56083 = p__56082;
var map__56083__$1 = (((((!((map__56083 == null))))?(((((map__56083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56083):map__56083);
var m = map__56083__$1;
var n = cljs.core.get.call(null,map__56083__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.call(null,map__56083__$1,cljs.core.cst$kw$name);
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
var seq__56085_56107 = cljs.core.seq.call(null,cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__56086_56108 = null;
var count__56087_56109 = (0);
var i__56088_56110 = (0);
while(true){
if((i__56088_56110 < count__56087_56109)){
var f_56111 = cljs.core._nth.call(null,chunk__56086_56108,i__56088_56110);
cljs.core.println.call(null,"  ",f_56111);


var G__56112 = seq__56085_56107;
var G__56113 = chunk__56086_56108;
var G__56114 = count__56087_56109;
var G__56115 = (i__56088_56110 + (1));
seq__56085_56107 = G__56112;
chunk__56086_56108 = G__56113;
count__56087_56109 = G__56114;
i__56088_56110 = G__56115;
continue;
} else {
var temp__5457__auto___56116 = cljs.core.seq.call(null,seq__56085_56107);
if(temp__5457__auto___56116){
var seq__56085_56117__$1 = temp__5457__auto___56116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56085_56117__$1)){
var c__4461__auto___56118 = cljs.core.chunk_first.call(null,seq__56085_56117__$1);
var G__56119 = cljs.core.chunk_rest.call(null,seq__56085_56117__$1);
var G__56120 = c__4461__auto___56118;
var G__56121 = cljs.core.count.call(null,c__4461__auto___56118);
var G__56122 = (0);
seq__56085_56107 = G__56119;
chunk__56086_56108 = G__56120;
count__56087_56109 = G__56121;
i__56088_56110 = G__56122;
continue;
} else {
var f_56123 = cljs.core.first.call(null,seq__56085_56117__$1);
cljs.core.println.call(null,"  ",f_56123);


var G__56124 = cljs.core.next.call(null,seq__56085_56117__$1);
var G__56125 = null;
var G__56126 = (0);
var G__56127 = (0);
seq__56085_56107 = G__56124;
chunk__56086_56108 = G__56125;
count__56087_56109 = G__56126;
i__56088_56110 = G__56127;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_56128 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_56128);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,cljs.core.cst$sym$quote,cljs.core.first.call(null,arglists_56128)))?cljs.core.second.call(null,arglists_56128):arglists_56128));
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
var seq__56089_56129 = cljs.core.seq.call(null,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__56090_56130 = null;
var count__56091_56131 = (0);
var i__56092_56132 = (0);
while(true){
if((i__56092_56132 < count__56091_56131)){
var vec__56093_56133 = cljs.core._nth.call(null,chunk__56090_56130,i__56092_56132);
var name_56134 = cljs.core.nth.call(null,vec__56093_56133,(0),null);
var map__56096_56135 = cljs.core.nth.call(null,vec__56093_56133,(1),null);
var map__56096_56136__$1 = (((((!((map__56096_56135 == null))))?(((((map__56096_56135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56096_56135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56096_56135):map__56096_56135);
var doc_56137 = cljs.core.get.call(null,map__56096_56136__$1,cljs.core.cst$kw$doc);
var arglists_56138 = cljs.core.get.call(null,map__56096_56136__$1,cljs.core.cst$kw$arglists);
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_56134);

cljs.core.println.call(null," ",arglists_56138);

if(cljs.core.truth_(doc_56137)){
cljs.core.println.call(null," ",doc_56137);
} else {
}


var G__56139 = seq__56089_56129;
var G__56140 = chunk__56090_56130;
var G__56141 = count__56091_56131;
var G__56142 = (i__56092_56132 + (1));
seq__56089_56129 = G__56139;
chunk__56090_56130 = G__56140;
count__56091_56131 = G__56141;
i__56092_56132 = G__56142;
continue;
} else {
var temp__5457__auto___56143 = cljs.core.seq.call(null,seq__56089_56129);
if(temp__5457__auto___56143){
var seq__56089_56144__$1 = temp__5457__auto___56143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56089_56144__$1)){
var c__4461__auto___56145 = cljs.core.chunk_first.call(null,seq__56089_56144__$1);
var G__56146 = cljs.core.chunk_rest.call(null,seq__56089_56144__$1);
var G__56147 = c__4461__auto___56145;
var G__56148 = cljs.core.count.call(null,c__4461__auto___56145);
var G__56149 = (0);
seq__56089_56129 = G__56146;
chunk__56090_56130 = G__56147;
count__56091_56131 = G__56148;
i__56092_56132 = G__56149;
continue;
} else {
var vec__56098_56150 = cljs.core.first.call(null,seq__56089_56144__$1);
var name_56151 = cljs.core.nth.call(null,vec__56098_56150,(0),null);
var map__56101_56152 = cljs.core.nth.call(null,vec__56098_56150,(1),null);
var map__56101_56153__$1 = (((((!((map__56101_56152 == null))))?(((((map__56101_56152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56101_56152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56101_56152):map__56101_56152);
var doc_56154 = cljs.core.get.call(null,map__56101_56153__$1,cljs.core.cst$kw$doc);
var arglists_56155 = cljs.core.get.call(null,map__56101_56153__$1,cljs.core.cst$kw$arglists);
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_56151);

cljs.core.println.call(null," ",arglists_56155);

if(cljs.core.truth_(doc_56154)){
cljs.core.println.call(null," ",doc_56154);
} else {
}


var G__56156 = cljs.core.next.call(null,seq__56089_56144__$1);
var G__56157 = null;
var G__56158 = (0);
var G__56159 = (0);
seq__56089_56129 = G__56156;
chunk__56090_56130 = G__56157;
count__56091_56131 = G__56158;
i__56092_56132 = G__56159;
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

var seq__56103 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__56104 = null;
var count__56105 = (0);
var i__56106 = (0);
while(true){
if((i__56106 < count__56105)){
var role = cljs.core._nth.call(null,chunk__56104,i__56106);
var temp__5457__auto___56160__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___56160__$1)){
var spec_56161 = temp__5457__auto___56160__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_56161));
} else {
}


var G__56162 = seq__56103;
var G__56163 = chunk__56104;
var G__56164 = count__56105;
var G__56165 = (i__56106 + (1));
seq__56103 = G__56162;
chunk__56104 = G__56163;
count__56105 = G__56164;
i__56106 = G__56165;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__56103);
if(temp__5457__auto____$1){
var seq__56103__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56103__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__56103__$1);
var G__56166 = cljs.core.chunk_rest.call(null,seq__56103__$1);
var G__56167 = c__4461__auto__;
var G__56168 = cljs.core.count.call(null,c__4461__auto__);
var G__56169 = (0);
seq__56103 = G__56166;
chunk__56104 = G__56167;
count__56105 = G__56168;
i__56106 = G__56169;
continue;
} else {
var role = cljs.core.first.call(null,seq__56103__$1);
var temp__5457__auto___56170__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___56170__$2)){
var spec_56171 = temp__5457__auto___56170__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_56171));
} else {
}


var G__56172 = cljs.core.next.call(null,seq__56103__$1);
var G__56173 = null;
var G__56174 = (0);
var G__56175 = (0);
seq__56103 = G__56172;
chunk__56104 = G__56173;
count__56105 = G__56174;
i__56106 = G__56175;
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

//# sourceMappingURL=repl.js.map?rel=1545321278032
