// Compiled by ClojureScript 1.10.439 {:optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37063){
var map__37064 = p__37063;
var map__37064__$1 = (((((!((map__37064 == null))))?(((((map__37064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37064):map__37064);
var m = map__37064__$1;
var n = cljs.core.get.call(null,map__37064__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.call(null,map__37064__$1,cljs.core.cst$kw$name);
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
var seq__37066_37088 = cljs.core.seq.call(null,cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__37067_37089 = null;
var count__37068_37090 = (0);
var i__37069_37091 = (0);
while(true){
if((i__37069_37091 < count__37068_37090)){
var f_37092 = cljs.core._nth.call(null,chunk__37067_37089,i__37069_37091);
cljs.core.println.call(null,"  ",f_37092);


var G__37093 = seq__37066_37088;
var G__37094 = chunk__37067_37089;
var G__37095 = count__37068_37090;
var G__37096 = (i__37069_37091 + (1));
seq__37066_37088 = G__37093;
chunk__37067_37089 = G__37094;
count__37068_37090 = G__37095;
i__37069_37091 = G__37096;
continue;
} else {
var temp__5457__auto___37097 = cljs.core.seq.call(null,seq__37066_37088);
if(temp__5457__auto___37097){
var seq__37066_37098__$1 = temp__5457__auto___37097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37066_37098__$1)){
var c__4461__auto___37099 = cljs.core.chunk_first.call(null,seq__37066_37098__$1);
var G__37100 = cljs.core.chunk_rest.call(null,seq__37066_37098__$1);
var G__37101 = c__4461__auto___37099;
var G__37102 = cljs.core.count.call(null,c__4461__auto___37099);
var G__37103 = (0);
seq__37066_37088 = G__37100;
chunk__37067_37089 = G__37101;
count__37068_37090 = G__37102;
i__37069_37091 = G__37103;
continue;
} else {
var f_37104 = cljs.core.first.call(null,seq__37066_37098__$1);
cljs.core.println.call(null,"  ",f_37104);


var G__37105 = cljs.core.next.call(null,seq__37066_37098__$1);
var G__37106 = null;
var G__37107 = (0);
var G__37108 = (0);
seq__37066_37088 = G__37105;
chunk__37067_37089 = G__37106;
count__37068_37090 = G__37107;
i__37069_37091 = G__37108;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37109 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37109);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,cljs.core.cst$sym$quote,cljs.core.first.call(null,arglists_37109)))?cljs.core.second.call(null,arglists_37109):arglists_37109));
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
var seq__37070_37110 = cljs.core.seq.call(null,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__37071_37111 = null;
var count__37072_37112 = (0);
var i__37073_37113 = (0);
while(true){
if((i__37073_37113 < count__37072_37112)){
var vec__37074_37114 = cljs.core._nth.call(null,chunk__37071_37111,i__37073_37113);
var name_37115 = cljs.core.nth.call(null,vec__37074_37114,(0),null);
var map__37077_37116 = cljs.core.nth.call(null,vec__37074_37114,(1),null);
var map__37077_37117__$1 = (((((!((map__37077_37116 == null))))?(((((map__37077_37116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37077_37116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37077_37116):map__37077_37116);
var doc_37118 = cljs.core.get.call(null,map__37077_37117__$1,cljs.core.cst$kw$doc);
var arglists_37119 = cljs.core.get.call(null,map__37077_37117__$1,cljs.core.cst$kw$arglists);
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37115);

cljs.core.println.call(null," ",arglists_37119);

if(cljs.core.truth_(doc_37118)){
cljs.core.println.call(null," ",doc_37118);
} else {
}


var G__37120 = seq__37070_37110;
var G__37121 = chunk__37071_37111;
var G__37122 = count__37072_37112;
var G__37123 = (i__37073_37113 + (1));
seq__37070_37110 = G__37120;
chunk__37071_37111 = G__37121;
count__37072_37112 = G__37122;
i__37073_37113 = G__37123;
continue;
} else {
var temp__5457__auto___37124 = cljs.core.seq.call(null,seq__37070_37110);
if(temp__5457__auto___37124){
var seq__37070_37125__$1 = temp__5457__auto___37124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37070_37125__$1)){
var c__4461__auto___37126 = cljs.core.chunk_first.call(null,seq__37070_37125__$1);
var G__37127 = cljs.core.chunk_rest.call(null,seq__37070_37125__$1);
var G__37128 = c__4461__auto___37126;
var G__37129 = cljs.core.count.call(null,c__4461__auto___37126);
var G__37130 = (0);
seq__37070_37110 = G__37127;
chunk__37071_37111 = G__37128;
count__37072_37112 = G__37129;
i__37073_37113 = G__37130;
continue;
} else {
var vec__37079_37131 = cljs.core.first.call(null,seq__37070_37125__$1);
var name_37132 = cljs.core.nth.call(null,vec__37079_37131,(0),null);
var map__37082_37133 = cljs.core.nth.call(null,vec__37079_37131,(1),null);
var map__37082_37134__$1 = (((((!((map__37082_37133 == null))))?(((((map__37082_37133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37082_37133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37082_37133):map__37082_37133);
var doc_37135 = cljs.core.get.call(null,map__37082_37134__$1,cljs.core.cst$kw$doc);
var arglists_37136 = cljs.core.get.call(null,map__37082_37134__$1,cljs.core.cst$kw$arglists);
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37132);

cljs.core.println.call(null," ",arglists_37136);

if(cljs.core.truth_(doc_37135)){
cljs.core.println.call(null," ",doc_37135);
} else {
}


var G__37137 = cljs.core.next.call(null,seq__37070_37125__$1);
var G__37138 = null;
var G__37139 = (0);
var G__37140 = (0);
seq__37070_37110 = G__37137;
chunk__37071_37111 = G__37138;
count__37072_37112 = G__37139;
i__37073_37113 = G__37140;
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

var seq__37084 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__37085 = null;
var count__37086 = (0);
var i__37087 = (0);
while(true){
if((i__37087 < count__37086)){
var role = cljs.core._nth.call(null,chunk__37085,i__37087);
var temp__5457__auto___37141__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___37141__$1)){
var spec_37142 = temp__5457__auto___37141__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37142));
} else {
}


var G__37143 = seq__37084;
var G__37144 = chunk__37085;
var G__37145 = count__37086;
var G__37146 = (i__37087 + (1));
seq__37084 = G__37143;
chunk__37085 = G__37144;
count__37086 = G__37145;
i__37087 = G__37146;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__37084);
if(temp__5457__auto____$1){
var seq__37084__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37084__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__37084__$1);
var G__37147 = cljs.core.chunk_rest.call(null,seq__37084__$1);
var G__37148 = c__4461__auto__;
var G__37149 = cljs.core.count.call(null,c__4461__auto__);
var G__37150 = (0);
seq__37084 = G__37147;
chunk__37085 = G__37148;
count__37086 = G__37149;
i__37087 = G__37150;
continue;
} else {
var role = cljs.core.first.call(null,seq__37084__$1);
var temp__5457__auto___37151__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___37151__$2)){
var spec_37152 = temp__5457__auto___37151__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37152));
} else {
}


var G__37153 = cljs.core.next.call(null,seq__37084__$1);
var G__37154 = null;
var G__37155 = (0);
var G__37156 = (0);
seq__37084 = G__37153;
chunk__37085 = G__37154;
count__37086 = G__37155;
i__37087 = G__37156;
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

//# sourceMappingURL=repl.js.map?rel=1545307819463
