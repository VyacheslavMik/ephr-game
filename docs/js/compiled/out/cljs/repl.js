// Compiled by ClojureScript 1.10.439 {:optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56583){
var map__56584 = p__56583;
var map__56584__$1 = (((((!((map__56584 == null))))?(((((map__56584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56584):map__56584);
var m = map__56584__$1;
var n = cljs.core.get.call(null,map__56584__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.call(null,map__56584__$1,cljs.core.cst$kw$name);
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
var seq__56586_56608 = cljs.core.seq.call(null,cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__56587_56609 = null;
var count__56588_56610 = (0);
var i__56589_56611 = (0);
while(true){
if((i__56589_56611 < count__56588_56610)){
var f_56612 = cljs.core._nth.call(null,chunk__56587_56609,i__56589_56611);
cljs.core.println.call(null,"  ",f_56612);


var G__56613 = seq__56586_56608;
var G__56614 = chunk__56587_56609;
var G__56615 = count__56588_56610;
var G__56616 = (i__56589_56611 + (1));
seq__56586_56608 = G__56613;
chunk__56587_56609 = G__56614;
count__56588_56610 = G__56615;
i__56589_56611 = G__56616;
continue;
} else {
var temp__5457__auto___56617 = cljs.core.seq.call(null,seq__56586_56608);
if(temp__5457__auto___56617){
var seq__56586_56618__$1 = temp__5457__auto___56617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56586_56618__$1)){
var c__4461__auto___56619 = cljs.core.chunk_first.call(null,seq__56586_56618__$1);
var G__56620 = cljs.core.chunk_rest.call(null,seq__56586_56618__$1);
var G__56621 = c__4461__auto___56619;
var G__56622 = cljs.core.count.call(null,c__4461__auto___56619);
var G__56623 = (0);
seq__56586_56608 = G__56620;
chunk__56587_56609 = G__56621;
count__56588_56610 = G__56622;
i__56589_56611 = G__56623;
continue;
} else {
var f_56624 = cljs.core.first.call(null,seq__56586_56618__$1);
cljs.core.println.call(null,"  ",f_56624);


var G__56625 = cljs.core.next.call(null,seq__56586_56618__$1);
var G__56626 = null;
var G__56627 = (0);
var G__56628 = (0);
seq__56586_56608 = G__56625;
chunk__56587_56609 = G__56626;
count__56588_56610 = G__56627;
i__56589_56611 = G__56628;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_56629 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_56629);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,cljs.core.cst$sym$quote,cljs.core.first.call(null,arglists_56629)))?cljs.core.second.call(null,arglists_56629):arglists_56629));
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
var seq__56590_56630 = cljs.core.seq.call(null,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__56591_56631 = null;
var count__56592_56632 = (0);
var i__56593_56633 = (0);
while(true){
if((i__56593_56633 < count__56592_56632)){
var vec__56594_56634 = cljs.core._nth.call(null,chunk__56591_56631,i__56593_56633);
var name_56635 = cljs.core.nth.call(null,vec__56594_56634,(0),null);
var map__56597_56636 = cljs.core.nth.call(null,vec__56594_56634,(1),null);
var map__56597_56637__$1 = (((((!((map__56597_56636 == null))))?(((((map__56597_56636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56597_56636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56597_56636):map__56597_56636);
var doc_56638 = cljs.core.get.call(null,map__56597_56637__$1,cljs.core.cst$kw$doc);
var arglists_56639 = cljs.core.get.call(null,map__56597_56637__$1,cljs.core.cst$kw$arglists);
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_56635);

cljs.core.println.call(null," ",arglists_56639);

if(cljs.core.truth_(doc_56638)){
cljs.core.println.call(null," ",doc_56638);
} else {
}


var G__56640 = seq__56590_56630;
var G__56641 = chunk__56591_56631;
var G__56642 = count__56592_56632;
var G__56643 = (i__56593_56633 + (1));
seq__56590_56630 = G__56640;
chunk__56591_56631 = G__56641;
count__56592_56632 = G__56642;
i__56593_56633 = G__56643;
continue;
} else {
var temp__5457__auto___56644 = cljs.core.seq.call(null,seq__56590_56630);
if(temp__5457__auto___56644){
var seq__56590_56645__$1 = temp__5457__auto___56644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56590_56645__$1)){
var c__4461__auto___56646 = cljs.core.chunk_first.call(null,seq__56590_56645__$1);
var G__56647 = cljs.core.chunk_rest.call(null,seq__56590_56645__$1);
var G__56648 = c__4461__auto___56646;
var G__56649 = cljs.core.count.call(null,c__4461__auto___56646);
var G__56650 = (0);
seq__56590_56630 = G__56647;
chunk__56591_56631 = G__56648;
count__56592_56632 = G__56649;
i__56593_56633 = G__56650;
continue;
} else {
var vec__56599_56651 = cljs.core.first.call(null,seq__56590_56645__$1);
var name_56652 = cljs.core.nth.call(null,vec__56599_56651,(0),null);
var map__56602_56653 = cljs.core.nth.call(null,vec__56599_56651,(1),null);
var map__56602_56654__$1 = (((((!((map__56602_56653 == null))))?(((((map__56602_56653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56602_56653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56602_56653):map__56602_56653);
var doc_56655 = cljs.core.get.call(null,map__56602_56654__$1,cljs.core.cst$kw$doc);
var arglists_56656 = cljs.core.get.call(null,map__56602_56654__$1,cljs.core.cst$kw$arglists);
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_56652);

cljs.core.println.call(null," ",arglists_56656);

if(cljs.core.truth_(doc_56655)){
cljs.core.println.call(null," ",doc_56655);
} else {
}


var G__56657 = cljs.core.next.call(null,seq__56590_56645__$1);
var G__56658 = null;
var G__56659 = (0);
var G__56660 = (0);
seq__56590_56630 = G__56657;
chunk__56591_56631 = G__56658;
count__56592_56632 = G__56659;
i__56593_56633 = G__56660;
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

var seq__56604 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__56605 = null;
var count__56606 = (0);
var i__56607 = (0);
while(true){
if((i__56607 < count__56606)){
var role = cljs.core._nth.call(null,chunk__56605,i__56607);
var temp__5457__auto___56661__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___56661__$1)){
var spec_56662 = temp__5457__auto___56661__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_56662));
} else {
}


var G__56663 = seq__56604;
var G__56664 = chunk__56605;
var G__56665 = count__56606;
var G__56666 = (i__56607 + (1));
seq__56604 = G__56663;
chunk__56605 = G__56664;
count__56606 = G__56665;
i__56607 = G__56666;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__56604);
if(temp__5457__auto____$1){
var seq__56604__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56604__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__56604__$1);
var G__56667 = cljs.core.chunk_rest.call(null,seq__56604__$1);
var G__56668 = c__4461__auto__;
var G__56669 = cljs.core.count.call(null,c__4461__auto__);
var G__56670 = (0);
seq__56604 = G__56667;
chunk__56605 = G__56668;
count__56606 = G__56669;
i__56607 = G__56670;
continue;
} else {
var role = cljs.core.first.call(null,seq__56604__$1);
var temp__5457__auto___56671__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___56671__$2)){
var spec_56672 = temp__5457__auto___56671__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_56672));
} else {
}


var G__56673 = cljs.core.next.call(null,seq__56604__$1);
var G__56674 = null;
var G__56675 = (0);
var G__56676 = (0);
seq__56604 = G__56673;
chunk__56605 = G__56674;
count__56606 = G__56675;
i__56607 = G__56676;
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

//# sourceMappingURL=repl.js.map?rel=1545301527726
