// Compiled by ClojureScript 1.10.439 {:optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__81518){
var map__81519 = p__81518;
var map__81519__$1 = (((((!((map__81519 == null))))?(((((map__81519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81519):map__81519);
var m = map__81519__$1;
var n = cljs.core.get.call(null,map__81519__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.call(null,map__81519__$1,cljs.core.cst$kw$name);
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
var seq__81521_81543 = cljs.core.seq.call(null,cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__81522_81544 = null;
var count__81523_81545 = (0);
var i__81524_81546 = (0);
while(true){
if((i__81524_81546 < count__81523_81545)){
var f_81547 = cljs.core._nth.call(null,chunk__81522_81544,i__81524_81546);
cljs.core.println.call(null,"  ",f_81547);


var G__81548 = seq__81521_81543;
var G__81549 = chunk__81522_81544;
var G__81550 = count__81523_81545;
var G__81551 = (i__81524_81546 + (1));
seq__81521_81543 = G__81548;
chunk__81522_81544 = G__81549;
count__81523_81545 = G__81550;
i__81524_81546 = G__81551;
continue;
} else {
var temp__5457__auto___81552 = cljs.core.seq.call(null,seq__81521_81543);
if(temp__5457__auto___81552){
var seq__81521_81553__$1 = temp__5457__auto___81552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81521_81553__$1)){
var c__4461__auto___81554 = cljs.core.chunk_first.call(null,seq__81521_81553__$1);
var G__81555 = cljs.core.chunk_rest.call(null,seq__81521_81553__$1);
var G__81556 = c__4461__auto___81554;
var G__81557 = cljs.core.count.call(null,c__4461__auto___81554);
var G__81558 = (0);
seq__81521_81543 = G__81555;
chunk__81522_81544 = G__81556;
count__81523_81545 = G__81557;
i__81524_81546 = G__81558;
continue;
} else {
var f_81559 = cljs.core.first.call(null,seq__81521_81553__$1);
cljs.core.println.call(null,"  ",f_81559);


var G__81560 = cljs.core.next.call(null,seq__81521_81553__$1);
var G__81561 = null;
var G__81562 = (0);
var G__81563 = (0);
seq__81521_81543 = G__81560;
chunk__81522_81544 = G__81561;
count__81523_81545 = G__81562;
i__81524_81546 = G__81563;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_81564 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_81564);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,cljs.core.cst$sym$quote,cljs.core.first.call(null,arglists_81564)))?cljs.core.second.call(null,arglists_81564):arglists_81564));
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
var seq__81525_81565 = cljs.core.seq.call(null,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__81526_81566 = null;
var count__81527_81567 = (0);
var i__81528_81568 = (0);
while(true){
if((i__81528_81568 < count__81527_81567)){
var vec__81529_81569 = cljs.core._nth.call(null,chunk__81526_81566,i__81528_81568);
var name_81570 = cljs.core.nth.call(null,vec__81529_81569,(0),null);
var map__81532_81571 = cljs.core.nth.call(null,vec__81529_81569,(1),null);
var map__81532_81572__$1 = (((((!((map__81532_81571 == null))))?(((((map__81532_81571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81532_81571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81532_81571):map__81532_81571);
var doc_81573 = cljs.core.get.call(null,map__81532_81572__$1,cljs.core.cst$kw$doc);
var arglists_81574 = cljs.core.get.call(null,map__81532_81572__$1,cljs.core.cst$kw$arglists);
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_81570);

cljs.core.println.call(null," ",arglists_81574);

if(cljs.core.truth_(doc_81573)){
cljs.core.println.call(null," ",doc_81573);
} else {
}


var G__81575 = seq__81525_81565;
var G__81576 = chunk__81526_81566;
var G__81577 = count__81527_81567;
var G__81578 = (i__81528_81568 + (1));
seq__81525_81565 = G__81575;
chunk__81526_81566 = G__81576;
count__81527_81567 = G__81577;
i__81528_81568 = G__81578;
continue;
} else {
var temp__5457__auto___81579 = cljs.core.seq.call(null,seq__81525_81565);
if(temp__5457__auto___81579){
var seq__81525_81580__$1 = temp__5457__auto___81579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81525_81580__$1)){
var c__4461__auto___81581 = cljs.core.chunk_first.call(null,seq__81525_81580__$1);
var G__81582 = cljs.core.chunk_rest.call(null,seq__81525_81580__$1);
var G__81583 = c__4461__auto___81581;
var G__81584 = cljs.core.count.call(null,c__4461__auto___81581);
var G__81585 = (0);
seq__81525_81565 = G__81582;
chunk__81526_81566 = G__81583;
count__81527_81567 = G__81584;
i__81528_81568 = G__81585;
continue;
} else {
var vec__81534_81586 = cljs.core.first.call(null,seq__81525_81580__$1);
var name_81587 = cljs.core.nth.call(null,vec__81534_81586,(0),null);
var map__81537_81588 = cljs.core.nth.call(null,vec__81534_81586,(1),null);
var map__81537_81589__$1 = (((((!((map__81537_81588 == null))))?(((((map__81537_81588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81537_81588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81537_81588):map__81537_81588);
var doc_81590 = cljs.core.get.call(null,map__81537_81589__$1,cljs.core.cst$kw$doc);
var arglists_81591 = cljs.core.get.call(null,map__81537_81589__$1,cljs.core.cst$kw$arglists);
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_81587);

cljs.core.println.call(null," ",arglists_81591);

if(cljs.core.truth_(doc_81590)){
cljs.core.println.call(null," ",doc_81590);
} else {
}


var G__81592 = cljs.core.next.call(null,seq__81525_81580__$1);
var G__81593 = null;
var G__81594 = (0);
var G__81595 = (0);
seq__81525_81565 = G__81592;
chunk__81526_81566 = G__81593;
count__81527_81567 = G__81594;
i__81528_81568 = G__81595;
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

var seq__81539 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__81540 = null;
var count__81541 = (0);
var i__81542 = (0);
while(true){
if((i__81542 < count__81541)){
var role = cljs.core._nth.call(null,chunk__81540,i__81542);
var temp__5457__auto___81596__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___81596__$1)){
var spec_81597 = temp__5457__auto___81596__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_81597));
} else {
}


var G__81598 = seq__81539;
var G__81599 = chunk__81540;
var G__81600 = count__81541;
var G__81601 = (i__81542 + (1));
seq__81539 = G__81598;
chunk__81540 = G__81599;
count__81541 = G__81600;
i__81542 = G__81601;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__81539);
if(temp__5457__auto____$1){
var seq__81539__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81539__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__81539__$1);
var G__81602 = cljs.core.chunk_rest.call(null,seq__81539__$1);
var G__81603 = c__4461__auto__;
var G__81604 = cljs.core.count.call(null,c__4461__auto__);
var G__81605 = (0);
seq__81539 = G__81602;
chunk__81540 = G__81603;
count__81541 = G__81604;
i__81542 = G__81605;
continue;
} else {
var role = cljs.core.first.call(null,seq__81539__$1);
var temp__5457__auto___81606__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___81606__$2)){
var spec_81607 = temp__5457__auto___81606__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_81607));
} else {
}


var G__81608 = cljs.core.next.call(null,seq__81539__$1);
var G__81609 = null;
var G__81610 = (0);
var G__81611 = (0);
seq__81539 = G__81608;
chunk__81540 = G__81609;
count__81541 = G__81610;
i__81542 = G__81611;
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

//# sourceMappingURL=repl.js.map?rel=1545392135020
