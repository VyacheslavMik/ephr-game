// Compiled by ClojureScript 1.10.439 {:optimize-constants true}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4047__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof cljs.core.cst$kw$namespace.cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$namespace)));
if(or__4047__auto__){
return or__4047__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__54683_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__54683_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pathToName,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$dependents,cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pathToName,path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pathToName,path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dependents,ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__54684 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__54685 = null;
var count__54686 = (0);
var i__54687 = (0);
while(true){
if((i__54687 < count__54686)){
var n = cljs.core._nth.call(null,chunk__54685,i__54687);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__54688 = seq__54684;
var G__54689 = chunk__54685;
var G__54690 = count__54686;
var G__54691 = (i__54687 + (1));
seq__54684 = G__54688;
chunk__54685 = G__54689;
count__54686 = G__54690;
i__54687 = G__54691;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__54684);
if(temp__5457__auto__){
var seq__54684__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54684__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__54684__$1);
var G__54692 = cljs.core.chunk_rest.call(null,seq__54684__$1);
var G__54693 = c__4461__auto__;
var G__54694 = cljs.core.count.call(null,c__4461__auto__);
var G__54695 = (0);
seq__54684 = G__54692;
chunk__54685 = G__54693;
count__54686 = G__54694;
i__54687 = G__54695;
continue;
} else {
var n = cljs.core.first.call(null,seq__54684__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__54696 = cljs.core.next.call(null,seq__54684__$1);
var G__54697 = null;
var G__54698 = (0);
var G__54699 = (0);
seq__54684 = G__54696;
chunk__54685 = G__54697;
count__54686 = G__54698;
i__54687 = G__54699;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dependents,ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__54700){
var vec__54701 = p__54700;
var _ = cljs.core.nth.call(null,vec__54701,(0),null);
var v = cljs.core.nth.call(null,vec__54701,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__54704){
var vec__54705 = p__54704;
var k = cljs.core.nth.call(null,vec__54705,(0),null);
var v = cljs.core.nth.call(null,vec__54705,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__54717_54725 = cljs.core.seq.call(null,deps);
var chunk__54718_54726 = null;
var count__54719_54727 = (0);
var i__54720_54728 = (0);
while(true){
if((i__54720_54728 < count__54719_54727)){
var dep_54729 = cljs.core._nth.call(null,chunk__54718_54726,i__54720_54728);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_54729;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_54729));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_54729,(depth + (1)),state);
} else {
}


var G__54730 = seq__54717_54725;
var G__54731 = chunk__54718_54726;
var G__54732 = count__54719_54727;
var G__54733 = (i__54720_54728 + (1));
seq__54717_54725 = G__54730;
chunk__54718_54726 = G__54731;
count__54719_54727 = G__54732;
i__54720_54728 = G__54733;
continue;
} else {
var temp__5457__auto___54734 = cljs.core.seq.call(null,seq__54717_54725);
if(temp__5457__auto___54734){
var seq__54717_54735__$1 = temp__5457__auto___54734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54717_54735__$1)){
var c__4461__auto___54736 = cljs.core.chunk_first.call(null,seq__54717_54735__$1);
var G__54737 = cljs.core.chunk_rest.call(null,seq__54717_54735__$1);
var G__54738 = c__4461__auto___54736;
var G__54739 = cljs.core.count.call(null,c__4461__auto___54736);
var G__54740 = (0);
seq__54717_54725 = G__54737;
chunk__54718_54726 = G__54738;
count__54719_54727 = G__54739;
i__54720_54728 = G__54740;
continue;
} else {
var dep_54741 = cljs.core.first.call(null,seq__54717_54735__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_54741;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_54741));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_54741,(depth + (1)),state);
} else {
}


var G__54742 = cljs.core.next.call(null,seq__54717_54735__$1);
var G__54743 = null;
var G__54744 = (0);
var G__54745 = (0);
seq__54717_54725 = G__54742;
chunk__54718_54726 = G__54743;
count__54719_54727 = G__54744;
i__54720_54728 = G__54745;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__54721){
var vec__54722 = p__54721;
var seq__54723 = cljs.core.seq.call(null,vec__54722);
var first__54724 = cljs.core.first.call(null,seq__54723);
var seq__54723__$1 = cljs.core.next.call(null,seq__54723);
var x = first__54724;
var xs = seq__54723__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__54722,seq__54723,first__54724,seq__54723__$1,x,xs,get_deps__$1){
return (function (p1__54708_SHARP_){
return clojure.set.difference.call(null,p1__54708_SHARP_,x);
});})(vec__54722,seq__54723,first__54724,seq__54723__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__54746 = cljs.core.seq.call(null,provides);
var chunk__54747 = null;
var count__54748 = (0);
var i__54749 = (0);
while(true){
if((i__54749 < count__54748)){
var prov = cljs.core._nth.call(null,chunk__54747,i__54749);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__54750_54758 = cljs.core.seq.call(null,requires);
var chunk__54751_54759 = null;
var count__54752_54760 = (0);
var i__54753_54761 = (0);
while(true){
if((i__54753_54761 < count__54752_54760)){
var req_54762 = cljs.core._nth.call(null,chunk__54751_54759,i__54753_54761);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54762,prov);


var G__54763 = seq__54750_54758;
var G__54764 = chunk__54751_54759;
var G__54765 = count__54752_54760;
var G__54766 = (i__54753_54761 + (1));
seq__54750_54758 = G__54763;
chunk__54751_54759 = G__54764;
count__54752_54760 = G__54765;
i__54753_54761 = G__54766;
continue;
} else {
var temp__5457__auto___54767 = cljs.core.seq.call(null,seq__54750_54758);
if(temp__5457__auto___54767){
var seq__54750_54768__$1 = temp__5457__auto___54767;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54750_54768__$1)){
var c__4461__auto___54769 = cljs.core.chunk_first.call(null,seq__54750_54768__$1);
var G__54770 = cljs.core.chunk_rest.call(null,seq__54750_54768__$1);
var G__54771 = c__4461__auto___54769;
var G__54772 = cljs.core.count.call(null,c__4461__auto___54769);
var G__54773 = (0);
seq__54750_54758 = G__54770;
chunk__54751_54759 = G__54771;
count__54752_54760 = G__54772;
i__54753_54761 = G__54773;
continue;
} else {
var req_54774 = cljs.core.first.call(null,seq__54750_54768__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54774,prov);


var G__54775 = cljs.core.next.call(null,seq__54750_54768__$1);
var G__54776 = null;
var G__54777 = (0);
var G__54778 = (0);
seq__54750_54758 = G__54775;
chunk__54751_54759 = G__54776;
count__54752_54760 = G__54777;
i__54753_54761 = G__54778;
continue;
}
} else {
}
}
break;
}


var G__54779 = seq__54746;
var G__54780 = chunk__54747;
var G__54781 = count__54748;
var G__54782 = (i__54749 + (1));
seq__54746 = G__54779;
chunk__54747 = G__54780;
count__54748 = G__54781;
i__54749 = G__54782;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__54746);
if(temp__5457__auto__){
var seq__54746__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54746__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__54746__$1);
var G__54783 = cljs.core.chunk_rest.call(null,seq__54746__$1);
var G__54784 = c__4461__auto__;
var G__54785 = cljs.core.count.call(null,c__4461__auto__);
var G__54786 = (0);
seq__54746 = G__54783;
chunk__54747 = G__54784;
count__54748 = G__54785;
i__54749 = G__54786;
continue;
} else {
var prov = cljs.core.first.call(null,seq__54746__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__54754_54787 = cljs.core.seq.call(null,requires);
var chunk__54755_54788 = null;
var count__54756_54789 = (0);
var i__54757_54790 = (0);
while(true){
if((i__54757_54790 < count__54756_54789)){
var req_54791 = cljs.core._nth.call(null,chunk__54755_54788,i__54757_54790);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54791,prov);


var G__54792 = seq__54754_54787;
var G__54793 = chunk__54755_54788;
var G__54794 = count__54756_54789;
var G__54795 = (i__54757_54790 + (1));
seq__54754_54787 = G__54792;
chunk__54755_54788 = G__54793;
count__54756_54789 = G__54794;
i__54757_54790 = G__54795;
continue;
} else {
var temp__5457__auto___54796__$1 = cljs.core.seq.call(null,seq__54754_54787);
if(temp__5457__auto___54796__$1){
var seq__54754_54797__$1 = temp__5457__auto___54796__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54754_54797__$1)){
var c__4461__auto___54798 = cljs.core.chunk_first.call(null,seq__54754_54797__$1);
var G__54799 = cljs.core.chunk_rest.call(null,seq__54754_54797__$1);
var G__54800 = c__4461__auto___54798;
var G__54801 = cljs.core.count.call(null,c__4461__auto___54798);
var G__54802 = (0);
seq__54754_54787 = G__54799;
chunk__54755_54788 = G__54800;
count__54756_54789 = G__54801;
i__54757_54790 = G__54802;
continue;
} else {
var req_54803 = cljs.core.first.call(null,seq__54754_54797__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54803,prov);


var G__54804 = cljs.core.next.call(null,seq__54754_54797__$1);
var G__54805 = null;
var G__54806 = (0);
var G__54807 = (0);
seq__54754_54787 = G__54804;
chunk__54755_54788 = G__54805;
count__54756_54789 = G__54806;
i__54757_54790 = G__54807;
continue;
}
} else {
}
}
break;
}


var G__54808 = cljs.core.next.call(null,seq__54746__$1);
var G__54809 = null;
var G__54810 = (0);
var G__54811 = (0);
seq__54746 = G__54808;
chunk__54747 = G__54809;
count__54748 = G__54810;
i__54749 = G__54811;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__54812_54816 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__54813_54817 = null;
var count__54814_54818 = (0);
var i__54815_54819 = (0);
while(true){
if((i__54815_54819 < count__54814_54818)){
var ns_54820 = cljs.core._nth.call(null,chunk__54813_54817,i__54815_54819);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_54820);


var G__54821 = seq__54812_54816;
var G__54822 = chunk__54813_54817;
var G__54823 = count__54814_54818;
var G__54824 = (i__54815_54819 + (1));
seq__54812_54816 = G__54821;
chunk__54813_54817 = G__54822;
count__54814_54818 = G__54823;
i__54815_54819 = G__54824;
continue;
} else {
var temp__5457__auto___54825 = cljs.core.seq.call(null,seq__54812_54816);
if(temp__5457__auto___54825){
var seq__54812_54826__$1 = temp__5457__auto___54825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54812_54826__$1)){
var c__4461__auto___54827 = cljs.core.chunk_first.call(null,seq__54812_54826__$1);
var G__54828 = cljs.core.chunk_rest.call(null,seq__54812_54826__$1);
var G__54829 = c__4461__auto___54827;
var G__54830 = cljs.core.count.call(null,c__4461__auto___54827);
var G__54831 = (0);
seq__54812_54816 = G__54828;
chunk__54813_54817 = G__54829;
count__54814_54818 = G__54830;
i__54815_54819 = G__54831;
continue;
} else {
var ns_54832 = cljs.core.first.call(null,seq__54812_54826__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_54832);


var G__54833 = cljs.core.next.call(null,seq__54812_54826__$1);
var G__54834 = null;
var G__54835 = (0);
var G__54836 = (0);
seq__54812_54816 = G__54833;
chunk__54813_54817 = G__54834;
count__54814_54818 = G__54835;
i__54815_54819 = G__54836;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4047__auto__ = goog.require__;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__54837__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__54837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54838__i = 0, G__54838__a = new Array(arguments.length -  0);
while (G__54838__i < G__54838__a.length) {G__54838__a[G__54838__i] = arguments[G__54838__i + 0]; ++G__54838__i;}
  args = new cljs.core.IndexedSeq(G__54838__a,0,null);
} 
return G__54837__delegate.call(this,args);};
G__54837.cljs$lang$maxFixedArity = 0;
G__54837.cljs$lang$applyTo = (function (arglist__54839){
var args = cljs.core.seq(arglist__54839);
return G__54837__delegate(args);
});
G__54837.cljs$core$IFn$_invoke$arity$variadic = G__54837__delegate;
return G__54837;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__54840_SHARP_,p2__54841_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54840_SHARP_)),p2__54841_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__54842_SHARP_,p2__54843_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54842_SHARP_),p2__54843_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__54844 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__54844.addCallback(((function (G__54844){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__54844))
);

G__54844.addErrback(((function (G__54844){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__54844))
);

return G__54844;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e54845){if((e54845 instanceof Error)){
var e = e54845;
figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,e.stack);

return false;
} else {
throw e54845;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e54846){if((e54846 instanceof Error)){
var e = e54846;
figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,e.stack);

return false;
} else {
throw e54846;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__54847 = cljs.core._EQ_;
var expr__54848 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__54847.call(null,cljs.core.cst$kw$node,expr__54848))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__54847.call(null,cljs.core.cst$kw$html,expr__54848))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__54847.call(null,cljs.core.cst$kw$worker,expr__54848))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__54847,expr__54848){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__54847,expr__54848))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__54850,callback){
var map__54851 = p__54850;
var map__54851__$1 = (((((!((map__54851 == null))))?(((((map__54851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54851):map__54851);
var file_msg = map__54851__$1;
var request_url = cljs.core.get.call(null,map__54851__$1,cljs.core.cst$kw$request_DASH_url);

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__54851,map__54851__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,cljs.core.cst$kw$loaded_DASH_file,true)], null));
} else {
figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__54851,map__54851__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$request_DASH_url,url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto__){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto__){
return (function (state_54889){
var state_val_54890 = (state_54889[(1)]);
if((state_val_54890 === (7))){
var inst_54885 = (state_54889[(2)]);
var state_54889__$1 = state_54889;
var statearr_54891_54917 = state_54889__$1;
(statearr_54891_54917[(2)] = inst_54885);

(statearr_54891_54917[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54890 === (1))){
var state_54889__$1 = state_54889;
var statearr_54892_54918 = state_54889__$1;
(statearr_54892_54918[(2)] = null);

(statearr_54892_54918[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54890 === (4))){
var inst_54855 = (state_54889[(7)]);
var inst_54855__$1 = (state_54889[(2)]);
var state_54889__$1 = (function (){var statearr_54893 = state_54889;
(statearr_54893[(7)] = inst_54855__$1);

return statearr_54893;
})();
if(cljs.core.truth_(inst_54855__$1)){
var statearr_54894_54919 = state_54889__$1;
(statearr_54894_54919[(1)] = (5));

} else {
var statearr_54895_54920 = state_54889__$1;
(statearr_54895_54920[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_54890 === (15))){
var inst_54868 = (state_54889[(8)]);
var inst_54870 = (state_54889[(9)]);
var inst_54872 = inst_54870.call(null,inst_54868);
var state_54889__$1 = state_54889;
var statearr_54896_54921 = state_54889__$1;
(statearr_54896_54921[(2)] = inst_54872);

(statearr_54896_54921[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54890 === (13))){
var inst_54879 = (state_54889[(2)]);
var state_54889__$1 = state_54889;
var statearr_54897_54922 = state_54889__$1;
(statearr_54897_54922[(2)] = inst_54879);

(statearr_54897_54922[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54890 === (6))){
var state_54889__$1 = state_54889;
var statearr_54898_54923 = state_54889__$1;
(statearr_54898_54923[(2)] = null);

(statearr_54898_54923[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54890 === (17))){
var inst_54876 = (state_54889[(2)]);
var state_54889__$1 = state_54889;
var statearr_54899_54924 = state_54889__$1;
(statearr_54899_54924[(2)] = inst_54876);

(statearr_54899_54924[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54890 === (3))){
var inst_54887 = (state_54889[(2)]);
var state_54889__$1 = state_54889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54889__$1,inst_54887);
} else {
if((state_val_54890 === (12))){
var state_54889__$1 = state_54889;
var statearr_54900_54925 = state_54889__$1;
(statearr_54900_54925[(2)] = null);

(statearr_54900_54925[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54890 === (2))){
var state_54889__$1 = state_54889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54889__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_54890 === (11))){
var inst_54860 = (state_54889[(10)]);
var inst_54866 = figwheel.client.file_reloading.blocking_load.call(null,inst_54860);
var state_54889__$1 = state_54889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54889__$1,(14),inst_54866);
} else {
if((state_val_54890 === (9))){
var inst_54860 = (state_54889[(10)]);
var state_54889__$1 = state_54889;
if(cljs.core.truth_(inst_54860)){
var statearr_54901_54926 = state_54889__$1;
(statearr_54901_54926[(1)] = (11));

} else {
var statearr_54902_54927 = state_54889__$1;
(statearr_54902_54927[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_54890 === (5))){
var inst_54861 = (state_54889[(11)]);
var inst_54855 = (state_54889[(7)]);
var inst_54860 = cljs.core.nth.call(null,inst_54855,(0),null);
var inst_54861__$1 = cljs.core.nth.call(null,inst_54855,(1),null);
var state_54889__$1 = (function (){var statearr_54903 = state_54889;
(statearr_54903[(11)] = inst_54861__$1);

(statearr_54903[(10)] = inst_54860);

return statearr_54903;
})();
if(cljs.core.truth_(inst_54861__$1)){
var statearr_54904_54928 = state_54889__$1;
(statearr_54904_54928[(1)] = (8));

} else {
var statearr_54905_54929 = state_54889__$1;
(statearr_54905_54929[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_54890 === (14))){
var inst_54870 = (state_54889[(9)]);
var inst_54860 = (state_54889[(10)]);
var inst_54868 = (state_54889[(2)]);
var inst_54869 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_54870__$1 = cljs.core.get.call(null,inst_54869,inst_54860);
var state_54889__$1 = (function (){var statearr_54906 = state_54889;
(statearr_54906[(8)] = inst_54868);

(statearr_54906[(9)] = inst_54870__$1);

return statearr_54906;
})();
if(cljs.core.truth_(inst_54870__$1)){
var statearr_54907_54930 = state_54889__$1;
(statearr_54907_54930[(1)] = (15));

} else {
var statearr_54908_54931 = state_54889__$1;
(statearr_54908_54931[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_54890 === (16))){
var inst_54868 = (state_54889[(8)]);
var inst_54874 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_54868);
var state_54889__$1 = state_54889;
var statearr_54909_54932 = state_54889__$1;
(statearr_54909_54932[(2)] = inst_54874);

(statearr_54909_54932[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54890 === (10))){
var inst_54881 = (state_54889[(2)]);
var state_54889__$1 = (function (){var statearr_54910 = state_54889;
(statearr_54910[(12)] = inst_54881);

return statearr_54910;
})();
var statearr_54911_54933 = state_54889__$1;
(statearr_54911_54933[(2)] = null);

(statearr_54911_54933[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54890 === (8))){
var inst_54861 = (state_54889[(11)]);
var inst_54863 = eval(inst_54861);
var state_54889__$1 = state_54889;
var statearr_54912_54934 = state_54889__$1;
(statearr_54912_54934[(2)] = inst_54863);

(statearr_54912_54934[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
}
}
}
}
});})(c__23252__auto__))
;
return ((function (switch__23157__auto__,c__23252__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23158__auto__ = null;
var figwheel$client$file_reloading$state_machine__23158__auto____0 = (function (){
var statearr_54913 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54913[(0)] = figwheel$client$file_reloading$state_machine__23158__auto__);

(statearr_54913[(1)] = (1));

return statearr_54913;
});
var figwheel$client$file_reloading$state_machine__23158__auto____1 = (function (state_54889){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_54889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e54914){if((e54914 instanceof Object)){
var ex__23161__auto__ = e54914;
var statearr_54915_54935 = state_54889;
(statearr_54915_54935[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54889);

return cljs.core.cst$kw$recur;
} else {
throw e54914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__54936 = state_54889;
state_54889 = G__54936;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23158__auto__ = function(state_54889){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23158__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23158__auto____1.call(this,state_54889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23158__auto____0;
figwheel$client$file_reloading$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23158__auto____1;
return figwheel$client$file_reloading$state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto__))
})();
var state__23254__auto__ = (function (){var statearr_54916 = f__23253__auto__.call(null);
(statearr_54916[(6)] = c__23252__auto__);

return statearr_54916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto__))
);

return c__23252__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__54938 = arguments.length;
switch (G__54938) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__54940,callback){
var map__54941 = p__54940;
var map__54941__$1 = (((((!((map__54941 == null))))?(((((map__54941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54941):map__54941);
var file_msg = map__54941__$1;
var namespace = cljs.core.get.call(null,map__54941__$1,cljs.core.cst$kw$namespace);
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__54941,map__54941__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loaded_DASH_file], null)))], null));
});})(request_url,map__54941,map__54941__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__54943){
var map__54944 = p__54943;
var map__54944__$1 = (((((!((map__54944 == null))))?(((((map__54944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54944):map__54944);
var file_msg = map__54944__$1;
var namespace = cljs.core.get.call(null,map__54944__$1,cljs.core.cst$kw$namespace);
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return cljs.core.cst$kw$figwheel_DASH_no_DASH_load.cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__54946){
var map__54947 = p__54946;
var map__54947__$1 = (((((!((map__54947 == null))))?(((((map__54947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54947):map__54947);
var file_msg = map__54947__$1;
var namespace = cljs.core.get.call(null,map__54947__$1,cljs.core.cst$kw$namespace);

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4036__auto__){
var or__4047__auto__ = cljs.core.cst$kw$figwheel_DASH_always.cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = cljs.core.cst$kw$figwheel_DASH_load.cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__54949,callback){
var map__54950 = p__54949;
var map__54950__$1 = (((((!((map__54950 == null))))?(((((map__54950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54950):map__54950);
var file_msg = map__54950__$1;
var request_url = cljs.core.get.call(null,map__54950__$1,cljs.core.cst$kw$request_DASH_url);
var namespace = cljs.core.get.call(null,map__54950__$1,cljs.core.cst$kw$namespace);

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23252__auto___55000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto___55000,out){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto___55000,out){
return (function (state_54985){
var state_val_54986 = (state_54985[(1)]);
if((state_val_54986 === (1))){
var inst_54959 = cljs.core.seq.call(null,files);
var inst_54960 = cljs.core.first.call(null,inst_54959);
var inst_54961 = cljs.core.next.call(null,inst_54959);
var inst_54962 = files;
var state_54985__$1 = (function (){var statearr_54987 = state_54985;
(statearr_54987[(7)] = inst_54962);

(statearr_54987[(8)] = inst_54961);

(statearr_54987[(9)] = inst_54960);

return statearr_54987;
})();
var statearr_54988_55001 = state_54985__$1;
(statearr_54988_55001[(2)] = null);

(statearr_54988_55001[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54986 === (2))){
var inst_54962 = (state_54985[(7)]);
var inst_54968 = (state_54985[(10)]);
var inst_54967 = cljs.core.seq.call(null,inst_54962);
var inst_54968__$1 = cljs.core.first.call(null,inst_54967);
var inst_54969 = cljs.core.next.call(null,inst_54967);
var inst_54970 = (inst_54968__$1 == null);
var inst_54971 = cljs.core.not.call(null,inst_54970);
var state_54985__$1 = (function (){var statearr_54989 = state_54985;
(statearr_54989[(10)] = inst_54968__$1);

(statearr_54989[(11)] = inst_54969);

return statearr_54989;
})();
if(inst_54971){
var statearr_54990_55002 = state_54985__$1;
(statearr_54990_55002[(1)] = (4));

} else {
var statearr_54991_55003 = state_54985__$1;
(statearr_54991_55003[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_54986 === (3))){
var inst_54983 = (state_54985[(2)]);
var state_54985__$1 = state_54985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54985__$1,inst_54983);
} else {
if((state_val_54986 === (4))){
var inst_54968 = (state_54985[(10)]);
var inst_54973 = figwheel.client.file_reloading.reload_js_file.call(null,inst_54968);
var state_54985__$1 = state_54985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54985__$1,(7),inst_54973);
} else {
if((state_val_54986 === (5))){
var inst_54979 = cljs.core.async.close_BANG_.call(null,out);
var state_54985__$1 = state_54985;
var statearr_54992_55004 = state_54985__$1;
(statearr_54992_55004[(2)] = inst_54979);

(statearr_54992_55004[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54986 === (6))){
var inst_54981 = (state_54985[(2)]);
var state_54985__$1 = state_54985;
var statearr_54993_55005 = state_54985__$1;
(statearr_54993_55005[(2)] = inst_54981);

(statearr_54993_55005[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54986 === (7))){
var inst_54969 = (state_54985[(11)]);
var inst_54975 = (state_54985[(2)]);
var inst_54976 = cljs.core.async.put_BANG_.call(null,out,inst_54975);
var inst_54962 = inst_54969;
var state_54985__$1 = (function (){var statearr_54994 = state_54985;
(statearr_54994[(12)] = inst_54976);

(statearr_54994[(7)] = inst_54962);

return statearr_54994;
})();
var statearr_54995_55006 = state_54985__$1;
(statearr_54995_55006[(2)] = null);

(statearr_54995_55006[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__23252__auto___55000,out))
;
return ((function (switch__23157__auto__,c__23252__auto___55000,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23158__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23158__auto____0 = (function (){
var statearr_54996 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54996[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23158__auto__);

(statearr_54996[(1)] = (1));

return statearr_54996;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23158__auto____1 = (function (state_54985){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_54985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e54997){if((e54997 instanceof Object)){
var ex__23161__auto__ = e54997;
var statearr_54998_55007 = state_54985;
(statearr_54998_55007[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54985);

return cljs.core.cst$kw$recur;
} else {
throw e54997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__55008 = state_54985;
state_54985 = G__55008;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23158__auto__ = function(state_54985){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23158__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23158__auto____1.call(this,state_54985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23158__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23158__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto___55000,out))
})();
var state__23254__auto__ = (function (){var statearr_54999 = f__23253__auto__.call(null);
(statearr_54999[(6)] = c__23252__auto___55000);

return statearr_54999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto___55000,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__55009,opts){
var map__55010 = p__55009;
var map__55010__$1 = (((((!((map__55010 == null))))?(((((map__55010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55010):map__55010);
var eval_body = cljs.core.get.call(null,map__55010__$1,cljs.core.cst$kw$eval_DASH_body);
var file = cljs.core.get.call(null,map__55010__$1,cljs.core.cst$kw$file);
if(cljs.core.truth_((function (){var and__4036__auto__ = eval_body;
if(cljs.core.truth_(and__4036__auto__)){
return typeof eval_body === 'string';
} else {
return and__4036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e55012){var e = e55012;
return figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,cljs.core.cst$kw$namespace,files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),cljs.core.cst$kw$namespace),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__55013_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$namespace.cljs$core$IFn$_invoke$arity$1(p1__55013_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$namespace,cljs.core.cst$kw$namespace,n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,cljs.core.cst$kw$namespace,files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,cljs.core.cst$kw$namespace),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__55014){
var vec__55015 = p__55014;
var k = cljs.core.nth.call(null,vec__55015,(0),null);
var v = cljs.core.nth.call(null,vec__55015,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$namespace,k,cljs.core.cst$kw$type,cljs.core.cst$kw$namespace], null);
}),cljs.core.filter.call(null,(function (p__55018){
var vec__55019 = p__55018;
var k = cljs.core.nth.call(null,vec__55019,(0),null);
var v = cljs.core.nth.call(null,vec__55019,(1),null);
return cljs.core.cst$kw$figwheel_DASH_always.cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__55025,p__55026){
var map__55027 = p__55025;
var map__55027__$1 = (((((!((map__55027 == null))))?(((((map__55027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55027):map__55027);
var opts = map__55027__$1;
var before_jsload = cljs.core.get.call(null,map__55027__$1,cljs.core.cst$kw$before_DASH_jsload);
var on_jsload = cljs.core.get.call(null,map__55027__$1,cljs.core.cst$kw$on_DASH_jsload);
var reload_dependents = cljs.core.get.call(null,map__55027__$1,cljs.core.cst$kw$reload_DASH_dependents);
var map__55028 = p__55026;
var map__55028__$1 = (((((!((map__55028 == null))))?(((((map__55028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55028):map__55028);
var msg = map__55028__$1;
var files = cljs.core.get.call(null,map__55028__$1,cljs.core.cst$kw$files);
var figwheel_meta = cljs.core.get.call(null,map__55028__$1,cljs.core.cst$kw$figwheel_DASH_meta);
var recompile_dependents = cljs.core.get.call(null,map__55028__$1,cljs.core.cst$kw$recompile_DASH_dependents);
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto__,map__55027,map__55027__$1,opts,before_jsload,on_jsload,reload_dependents,map__55028,map__55028__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto__,map__55027,map__55027__$1,opts,before_jsload,on_jsload,reload_dependents,map__55028,map__55028__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_55182){
var state_val_55183 = (state_55182[(1)]);
if((state_val_55183 === (7))){
var inst_55044 = (state_55182[(7)]);
var inst_55045 = (state_55182[(8)]);
var inst_55043 = (state_55182[(9)]);
var inst_55042 = (state_55182[(10)]);
var inst_55050 = cljs.core._nth.call(null,inst_55043,inst_55045);
var inst_55051 = figwheel.client.file_reloading.eval_body.call(null,inst_55050,opts);
var inst_55052 = (inst_55045 + (1));
var tmp55184 = inst_55044;
var tmp55185 = inst_55043;
var tmp55186 = inst_55042;
var inst_55042__$1 = tmp55186;
var inst_55043__$1 = tmp55185;
var inst_55044__$1 = tmp55184;
var inst_55045__$1 = inst_55052;
var state_55182__$1 = (function (){var statearr_55187 = state_55182;
(statearr_55187[(7)] = inst_55044__$1);

(statearr_55187[(11)] = inst_55051);

(statearr_55187[(8)] = inst_55045__$1);

(statearr_55187[(9)] = inst_55043__$1);

(statearr_55187[(10)] = inst_55042__$1);

return statearr_55187;
})();
var statearr_55188_55271 = state_55182__$1;
(statearr_55188_55271[(2)] = null);

(statearr_55188_55271[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (20))){
var inst_55085 = (state_55182[(12)]);
var inst_55093 = figwheel.client.file_reloading.sort_files.call(null,inst_55085);
var state_55182__$1 = state_55182;
var statearr_55189_55272 = state_55182__$1;
(statearr_55189_55272[(2)] = inst_55093);

(statearr_55189_55272[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (27))){
var state_55182__$1 = state_55182;
var statearr_55190_55273 = state_55182__$1;
(statearr_55190_55273[(2)] = null);

(statearr_55190_55273[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (1))){
var inst_55034 = (state_55182[(13)]);
var inst_55031 = before_jsload.call(null,files);
var inst_55032 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_55033 = (function (){return ((function (inst_55034,inst_55031,inst_55032,state_val_55183,c__23252__auto__,map__55027,map__55027__$1,opts,before_jsload,on_jsload,reload_dependents,map__55028,map__55028__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__55022_SHARP_){
return cljs.core.cst$kw$eval_DASH_body.cljs$core$IFn$_invoke$arity$1(p1__55022_SHARP_);
});
;})(inst_55034,inst_55031,inst_55032,state_val_55183,c__23252__auto__,map__55027,map__55027__$1,opts,before_jsload,on_jsload,reload_dependents,map__55028,map__55028__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55034__$1 = cljs.core.filter.call(null,inst_55033,files);
var inst_55035 = cljs.core.not_empty.call(null,inst_55034__$1);
var state_55182__$1 = (function (){var statearr_55191 = state_55182;
(statearr_55191[(14)] = inst_55031);

(statearr_55191[(15)] = inst_55032);

(statearr_55191[(13)] = inst_55034__$1);

return statearr_55191;
})();
if(cljs.core.truth_(inst_55035)){
var statearr_55192_55274 = state_55182__$1;
(statearr_55192_55274[(1)] = (2));

} else {
var statearr_55193_55275 = state_55182__$1;
(statearr_55193_55275[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (24))){
var state_55182__$1 = state_55182;
var statearr_55194_55276 = state_55182__$1;
(statearr_55194_55276[(2)] = null);

(statearr_55194_55276[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (39))){
var inst_55135 = (state_55182[(16)]);
var state_55182__$1 = state_55182;
var statearr_55195_55277 = state_55182__$1;
(statearr_55195_55277[(2)] = inst_55135);

(statearr_55195_55277[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (46))){
var inst_55177 = (state_55182[(2)]);
var state_55182__$1 = state_55182;
var statearr_55196_55278 = state_55182__$1;
(statearr_55196_55278[(2)] = inst_55177);

(statearr_55196_55278[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (4))){
var inst_55079 = (state_55182[(2)]);
var inst_55080 = cljs.core.List.EMPTY;
var inst_55081 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_55080);
var inst_55082 = (function (){return ((function (inst_55079,inst_55080,inst_55081,state_val_55183,c__23252__auto__,map__55027,map__55027__$1,opts,before_jsload,on_jsload,reload_dependents,map__55028,map__55028__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__55023_SHARP_){
var and__4036__auto__ = cljs.core.cst$kw$namespace.cljs$core$IFn$_invoke$arity$1(p1__55023_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,cljs.core.cst$kw$eval_DASH_body.cljs$core$IFn$_invoke$arity$1(p1__55023_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__55023_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_55079,inst_55080,inst_55081,state_val_55183,c__23252__auto__,map__55027,map__55027__$1,opts,before_jsload,on_jsload,reload_dependents,map__55028,map__55028__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55083 = cljs.core.filter.call(null,inst_55082,files);
var inst_55084 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_55085 = cljs.core.concat.call(null,inst_55083,inst_55084);
var state_55182__$1 = (function (){var statearr_55197 = state_55182;
(statearr_55197[(17)] = inst_55079);

(statearr_55197[(12)] = inst_55085);

(statearr_55197[(18)] = inst_55081);

return statearr_55197;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_55198_55279 = state_55182__$1;
(statearr_55198_55279[(1)] = (16));

} else {
var statearr_55199_55280 = state_55182__$1;
(statearr_55199_55280[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (15))){
var inst_55069 = (state_55182[(2)]);
var state_55182__$1 = state_55182;
var statearr_55200_55281 = state_55182__$1;
(statearr_55200_55281[(2)] = inst_55069);

(statearr_55200_55281[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (21))){
var inst_55095 = (state_55182[(19)]);
var inst_55095__$1 = (state_55182[(2)]);
var inst_55096 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_55095__$1);
var state_55182__$1 = (function (){var statearr_55201 = state_55182;
(statearr_55201[(19)] = inst_55095__$1);

return statearr_55201;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55182__$1,(22),inst_55096);
} else {
if((state_val_55183 === (31))){
var inst_55180 = (state_55182[(2)]);
var state_55182__$1 = state_55182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55182__$1,inst_55180);
} else {
if((state_val_55183 === (32))){
var inst_55135 = (state_55182[(16)]);
var inst_55140 = inst_55135.cljs$lang$protocol_mask$partition0$;
var inst_55141 = (inst_55140 & (64));
var inst_55142 = inst_55135.cljs$core$ISeq$;
var inst_55143 = (cljs.core.PROTOCOL_SENTINEL === inst_55142);
var inst_55144 = ((inst_55141) || (inst_55143));
var state_55182__$1 = state_55182;
if(cljs.core.truth_(inst_55144)){
var statearr_55202_55282 = state_55182__$1;
(statearr_55202_55282[(1)] = (35));

} else {
var statearr_55203_55283 = state_55182__$1;
(statearr_55203_55283[(1)] = (36));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (40))){
var inst_55157 = (state_55182[(20)]);
var inst_55156 = (state_55182[(2)]);
var inst_55157__$1 = cljs.core.get.call(null,inst_55156,cljs.core.cst$kw$figwheel_DASH_no_DASH_load);
var inst_55158 = cljs.core.get.call(null,inst_55156,cljs.core.cst$kw$not_DASH_required);
var inst_55159 = cljs.core.not_empty.call(null,inst_55157__$1);
var state_55182__$1 = (function (){var statearr_55204 = state_55182;
(statearr_55204[(20)] = inst_55157__$1);

(statearr_55204[(21)] = inst_55158);

return statearr_55204;
})();
if(cljs.core.truth_(inst_55159)){
var statearr_55205_55284 = state_55182__$1;
(statearr_55205_55284[(1)] = (41));

} else {
var statearr_55206_55285 = state_55182__$1;
(statearr_55206_55285[(1)] = (42));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (33))){
var state_55182__$1 = state_55182;
var statearr_55207_55286 = state_55182__$1;
(statearr_55207_55286[(2)] = false);

(statearr_55207_55286[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (13))){
var inst_55055 = (state_55182[(22)]);
var inst_55059 = cljs.core.chunk_first.call(null,inst_55055);
var inst_55060 = cljs.core.chunk_rest.call(null,inst_55055);
var inst_55061 = cljs.core.count.call(null,inst_55059);
var inst_55042 = inst_55060;
var inst_55043 = inst_55059;
var inst_55044 = inst_55061;
var inst_55045 = (0);
var state_55182__$1 = (function (){var statearr_55208 = state_55182;
(statearr_55208[(7)] = inst_55044);

(statearr_55208[(8)] = inst_55045);

(statearr_55208[(9)] = inst_55043);

(statearr_55208[(10)] = inst_55042);

return statearr_55208;
})();
var statearr_55209_55287 = state_55182__$1;
(statearr_55209_55287[(2)] = null);

(statearr_55209_55287[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (22))){
var inst_55103 = (state_55182[(23)]);
var inst_55099 = (state_55182[(24)]);
var inst_55098 = (state_55182[(25)]);
var inst_55095 = (state_55182[(19)]);
var inst_55098__$1 = (state_55182[(2)]);
var inst_55099__$1 = cljs.core.filter.call(null,cljs.core.cst$kw$loaded_DASH_file,inst_55098__$1);
var inst_55100 = (function (){var all_files = inst_55095;
var res_SINGLEQUOTE_ = inst_55098__$1;
var res = inst_55099__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_55103,inst_55099,inst_55098,inst_55095,inst_55098__$1,inst_55099__$1,state_val_55183,c__23252__auto__,map__55027,map__55027__$1,opts,before_jsload,on_jsload,reload_dependents,map__55028,map__55028__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__55024_SHARP_){
return cljs.core.not.call(null,cljs.core.cst$kw$loaded_DASH_file.cljs$core$IFn$_invoke$arity$1(p1__55024_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_55103,inst_55099,inst_55098,inst_55095,inst_55098__$1,inst_55099__$1,state_val_55183,c__23252__auto__,map__55027,map__55027__$1,opts,before_jsload,on_jsload,reload_dependents,map__55028,map__55028__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55101 = cljs.core.filter.call(null,inst_55100,inst_55098__$1);
var inst_55102 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_55103__$1 = cljs.core.filter.call(null,cljs.core.cst$kw$loaded_DASH_file,inst_55102);
var inst_55104 = cljs.core.not_empty.call(null,inst_55103__$1);
var state_55182__$1 = (function (){var statearr_55210 = state_55182;
(statearr_55210[(23)] = inst_55103__$1);

(statearr_55210[(24)] = inst_55099__$1);

(statearr_55210[(26)] = inst_55101);

(statearr_55210[(25)] = inst_55098__$1);

return statearr_55210;
})();
if(cljs.core.truth_(inst_55104)){
var statearr_55211_55288 = state_55182__$1;
(statearr_55211_55288[(1)] = (23));

} else {
var statearr_55212_55289 = state_55182__$1;
(statearr_55212_55289[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (36))){
var state_55182__$1 = state_55182;
var statearr_55213_55290 = state_55182__$1;
(statearr_55213_55290[(2)] = false);

(statearr_55213_55290[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (41))){
var inst_55157 = (state_55182[(20)]);
var inst_55161 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,cljs.core.cst$kw$namespace);
var inst_55162 = cljs.core.map.call(null,inst_55161,inst_55157);
var inst_55163 = cljs.core.pr_str.call(null,inst_55162);
var inst_55164 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55163)].join('');
var inst_55165 = figwheel.client.utils.log.call(null,inst_55164);
var state_55182__$1 = state_55182;
var statearr_55214_55291 = state_55182__$1;
(statearr_55214_55291[(2)] = inst_55165);

(statearr_55214_55291[(1)] = (43));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (43))){
var inst_55158 = (state_55182[(21)]);
var inst_55168 = (state_55182[(2)]);
var inst_55169 = cljs.core.not_empty.call(null,inst_55158);
var state_55182__$1 = (function (){var statearr_55215 = state_55182;
(statearr_55215[(27)] = inst_55168);

return statearr_55215;
})();
if(cljs.core.truth_(inst_55169)){
var statearr_55216_55292 = state_55182__$1;
(statearr_55216_55292[(1)] = (44));

} else {
var statearr_55217_55293 = state_55182__$1;
(statearr_55217_55293[(1)] = (45));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (29))){
var inst_55103 = (state_55182[(23)]);
var inst_55099 = (state_55182[(24)]);
var inst_55101 = (state_55182[(26)]);
var inst_55098 = (state_55182[(25)]);
var inst_55095 = (state_55182[(19)]);
var inst_55135 = (state_55182[(16)]);
var inst_55131 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: NOT loading these files ");
var inst_55134 = (function (){var all_files = inst_55095;
var res_SINGLEQUOTE_ = inst_55098;
var res = inst_55099;
var files_not_loaded = inst_55101;
var dependencies_that_loaded = inst_55103;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55103,inst_55099,inst_55101,inst_55098,inst_55095,inst_55135,inst_55131,state_val_55183,c__23252__auto__,map__55027,map__55027__$1,opts,before_jsload,on_jsload,reload_dependents,map__55028,map__55028__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55133){
var map__55218 = p__55133;
var map__55218__$1 = (((((!((map__55218 == null))))?(((((map__55218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55218):map__55218);
var namespace = cljs.core.get.call(null,map__55218__$1,cljs.core.cst$kw$namespace);
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return cljs.core.cst$kw$not_DASH_required;
} else {
if(cljs.core.truth_(meta_data.call(null,cljs.core.cst$kw$figwheel_DASH_no_DASH_load))){
return cljs.core.cst$kw$figwheel_DASH_no_DASH_load;
} else {
return cljs.core.cst$kw$not_DASH_required;

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55103,inst_55099,inst_55101,inst_55098,inst_55095,inst_55135,inst_55131,state_val_55183,c__23252__auto__,map__55027,map__55027__$1,opts,before_jsload,on_jsload,reload_dependents,map__55028,map__55028__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55135__$1 = cljs.core.group_by.call(null,inst_55134,inst_55101);
var inst_55137 = (inst_55135__$1 == null);
var inst_55138 = cljs.core.not.call(null,inst_55137);
var state_55182__$1 = (function (){var statearr_55220 = state_55182;
(statearr_55220[(28)] = inst_55131);

(statearr_55220[(16)] = inst_55135__$1);

return statearr_55220;
})();
if(inst_55138){
var statearr_55221_55294 = state_55182__$1;
(statearr_55221_55294[(1)] = (32));

} else {
var statearr_55222_55295 = state_55182__$1;
(statearr_55222_55295[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (44))){
var inst_55158 = (state_55182[(21)]);
var inst_55171 = cljs.core.map.call(null,cljs.core.cst$kw$file,inst_55158);
var inst_55172 = cljs.core.pr_str.call(null,inst_55171);
var inst_55173 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55172)].join('');
var inst_55174 = figwheel.client.utils.log.call(null,inst_55173);
var state_55182__$1 = state_55182;
var statearr_55223_55296 = state_55182__$1;
(statearr_55223_55296[(2)] = inst_55174);

(statearr_55223_55296[(1)] = (46));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (6))){
var inst_55076 = (state_55182[(2)]);
var state_55182__$1 = state_55182;
var statearr_55224_55297 = state_55182__$1;
(statearr_55224_55297[(2)] = inst_55076);

(statearr_55224_55297[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (28))){
var inst_55101 = (state_55182[(26)]);
var inst_55128 = (state_55182[(2)]);
var inst_55129 = cljs.core.not_empty.call(null,inst_55101);
var state_55182__$1 = (function (){var statearr_55225 = state_55182;
(statearr_55225[(29)] = inst_55128);

return statearr_55225;
})();
if(cljs.core.truth_(inst_55129)){
var statearr_55226_55298 = state_55182__$1;
(statearr_55226_55298[(1)] = (29));

} else {
var statearr_55227_55299 = state_55182__$1;
(statearr_55227_55299[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (25))){
var inst_55099 = (state_55182[(24)]);
var inst_55115 = (state_55182[(2)]);
var inst_55116 = cljs.core.not_empty.call(null,inst_55099);
var state_55182__$1 = (function (){var statearr_55228 = state_55182;
(statearr_55228[(30)] = inst_55115);

return statearr_55228;
})();
if(cljs.core.truth_(inst_55116)){
var statearr_55229_55300 = state_55182__$1;
(statearr_55229_55300[(1)] = (26));

} else {
var statearr_55230_55301 = state_55182__$1;
(statearr_55230_55301[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (34))){
var inst_55151 = (state_55182[(2)]);
var state_55182__$1 = state_55182;
if(cljs.core.truth_(inst_55151)){
var statearr_55231_55302 = state_55182__$1;
(statearr_55231_55302[(1)] = (38));

} else {
var statearr_55232_55303 = state_55182__$1;
(statearr_55232_55303[(1)] = (39));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (17))){
var state_55182__$1 = state_55182;
var statearr_55233_55304 = state_55182__$1;
(statearr_55233_55304[(2)] = recompile_dependents);

(statearr_55233_55304[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (3))){
var state_55182__$1 = state_55182;
var statearr_55234_55305 = state_55182__$1;
(statearr_55234_55305[(2)] = null);

(statearr_55234_55305[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (12))){
var inst_55072 = (state_55182[(2)]);
var state_55182__$1 = state_55182;
var statearr_55235_55306 = state_55182__$1;
(statearr_55235_55306[(2)] = inst_55072);

(statearr_55235_55306[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (2))){
var inst_55034 = (state_55182[(13)]);
var inst_55041 = cljs.core.seq.call(null,inst_55034);
var inst_55042 = inst_55041;
var inst_55043 = null;
var inst_55044 = (0);
var inst_55045 = (0);
var state_55182__$1 = (function (){var statearr_55236 = state_55182;
(statearr_55236[(7)] = inst_55044);

(statearr_55236[(8)] = inst_55045);

(statearr_55236[(9)] = inst_55043);

(statearr_55236[(10)] = inst_55042);

return statearr_55236;
})();
var statearr_55237_55307 = state_55182__$1;
(statearr_55237_55307[(2)] = null);

(statearr_55237_55307[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (23))){
var inst_55103 = (state_55182[(23)]);
var inst_55099 = (state_55182[(24)]);
var inst_55101 = (state_55182[(26)]);
var inst_55098 = (state_55182[(25)]);
var inst_55095 = (state_55182[(19)]);
var inst_55106 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: loaded these dependencies");
var inst_55108 = (function (){var all_files = inst_55095;
var res_SINGLEQUOTE_ = inst_55098;
var res = inst_55099;
var files_not_loaded = inst_55101;
var dependencies_that_loaded = inst_55103;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55103,inst_55099,inst_55101,inst_55098,inst_55095,inst_55106,state_val_55183,c__23252__auto__,map__55027,map__55027__$1,opts,before_jsload,on_jsload,reload_dependents,map__55028,map__55028__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55107){
var map__55238 = p__55107;
var map__55238__$1 = (((((!((map__55238 == null))))?(((((map__55238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55238):map__55238);
var request_url = cljs.core.get.call(null,map__55238__$1,cljs.core.cst$kw$request_DASH_url);
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55103,inst_55099,inst_55101,inst_55098,inst_55095,inst_55106,state_val_55183,c__23252__auto__,map__55027,map__55027__$1,opts,before_jsload,on_jsload,reload_dependents,map__55028,map__55028__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55109 = cljs.core.reverse.call(null,inst_55103);
var inst_55110 = cljs.core.map.call(null,inst_55108,inst_55109);
var inst_55111 = cljs.core.pr_str.call(null,inst_55110);
var inst_55112 = figwheel.client.utils.log.call(null,inst_55111);
var state_55182__$1 = (function (){var statearr_55240 = state_55182;
(statearr_55240[(31)] = inst_55106);

return statearr_55240;
})();
var statearr_55241_55308 = state_55182__$1;
(statearr_55241_55308[(2)] = inst_55112);

(statearr_55241_55308[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (35))){
var state_55182__$1 = state_55182;
var statearr_55242_55309 = state_55182__$1;
(statearr_55242_55309[(2)] = true);

(statearr_55242_55309[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (19))){
var inst_55085 = (state_55182[(12)]);
var inst_55091 = figwheel.client.file_reloading.expand_files.call(null,inst_55085);
var state_55182__$1 = state_55182;
var statearr_55243_55310 = state_55182__$1;
(statearr_55243_55310[(2)] = inst_55091);

(statearr_55243_55310[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (11))){
var state_55182__$1 = state_55182;
var statearr_55244_55311 = state_55182__$1;
(statearr_55244_55311[(2)] = null);

(statearr_55244_55311[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (9))){
var inst_55074 = (state_55182[(2)]);
var state_55182__$1 = state_55182;
var statearr_55245_55312 = state_55182__$1;
(statearr_55245_55312[(2)] = inst_55074);

(statearr_55245_55312[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (5))){
var inst_55044 = (state_55182[(7)]);
var inst_55045 = (state_55182[(8)]);
var inst_55047 = (inst_55045 < inst_55044);
var inst_55048 = inst_55047;
var state_55182__$1 = state_55182;
if(cljs.core.truth_(inst_55048)){
var statearr_55246_55313 = state_55182__$1;
(statearr_55246_55313[(1)] = (7));

} else {
var statearr_55247_55314 = state_55182__$1;
(statearr_55247_55314[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (14))){
var inst_55055 = (state_55182[(22)]);
var inst_55064 = cljs.core.first.call(null,inst_55055);
var inst_55065 = figwheel.client.file_reloading.eval_body.call(null,inst_55064,opts);
var inst_55066 = cljs.core.next.call(null,inst_55055);
var inst_55042 = inst_55066;
var inst_55043 = null;
var inst_55044 = (0);
var inst_55045 = (0);
var state_55182__$1 = (function (){var statearr_55248 = state_55182;
(statearr_55248[(7)] = inst_55044);

(statearr_55248[(32)] = inst_55065);

(statearr_55248[(8)] = inst_55045);

(statearr_55248[(9)] = inst_55043);

(statearr_55248[(10)] = inst_55042);

return statearr_55248;
})();
var statearr_55249_55315 = state_55182__$1;
(statearr_55249_55315[(2)] = null);

(statearr_55249_55315[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (45))){
var state_55182__$1 = state_55182;
var statearr_55250_55316 = state_55182__$1;
(statearr_55250_55316[(2)] = null);

(statearr_55250_55316[(1)] = (46));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (26))){
var inst_55103 = (state_55182[(23)]);
var inst_55099 = (state_55182[(24)]);
var inst_55101 = (state_55182[(26)]);
var inst_55098 = (state_55182[(25)]);
var inst_55095 = (state_55182[(19)]);
var inst_55118 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: loaded these files");
var inst_55120 = (function (){var all_files = inst_55095;
var res_SINGLEQUOTE_ = inst_55098;
var res = inst_55099;
var files_not_loaded = inst_55101;
var dependencies_that_loaded = inst_55103;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55103,inst_55099,inst_55101,inst_55098,inst_55095,inst_55118,state_val_55183,c__23252__auto__,map__55027,map__55027__$1,opts,before_jsload,on_jsload,reload_dependents,map__55028,map__55028__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55119){
var map__55251 = p__55119;
var map__55251__$1 = (((((!((map__55251 == null))))?(((((map__55251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55251):map__55251);
var namespace = cljs.core.get.call(null,map__55251__$1,cljs.core.cst$kw$namespace);
var file = cljs.core.get.call(null,map__55251__$1,cljs.core.cst$kw$file);
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55103,inst_55099,inst_55101,inst_55098,inst_55095,inst_55118,state_val_55183,c__23252__auto__,map__55027,map__55027__$1,opts,before_jsload,on_jsload,reload_dependents,map__55028,map__55028__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55121 = cljs.core.map.call(null,inst_55120,inst_55099);
var inst_55122 = cljs.core.pr_str.call(null,inst_55121);
var inst_55123 = figwheel.client.utils.log.call(null,inst_55122);
var inst_55124 = (function (){var all_files = inst_55095;
var res_SINGLEQUOTE_ = inst_55098;
var res = inst_55099;
var files_not_loaded = inst_55101;
var dependencies_that_loaded = inst_55103;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55103,inst_55099,inst_55101,inst_55098,inst_55095,inst_55118,inst_55120,inst_55121,inst_55122,inst_55123,state_val_55183,c__23252__auto__,map__55027,map__55027__$1,opts,before_jsload,on_jsload,reload_dependents,map__55028,map__55028__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55103,inst_55099,inst_55101,inst_55098,inst_55095,inst_55118,inst_55120,inst_55121,inst_55122,inst_55123,state_val_55183,c__23252__auto__,map__55027,map__55027__$1,opts,before_jsload,on_jsload,reload_dependents,map__55028,map__55028__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55125 = setTimeout(inst_55124,(10));
var state_55182__$1 = (function (){var statearr_55253 = state_55182;
(statearr_55253[(33)] = inst_55118);

(statearr_55253[(34)] = inst_55123);

return statearr_55253;
})();
var statearr_55254_55317 = state_55182__$1;
(statearr_55254_55317[(2)] = inst_55125);

(statearr_55254_55317[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (16))){
var state_55182__$1 = state_55182;
var statearr_55255_55318 = state_55182__$1;
(statearr_55255_55318[(2)] = reload_dependents);

(statearr_55255_55318[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (38))){
var inst_55135 = (state_55182[(16)]);
var inst_55153 = cljs.core.apply.call(null,cljs.core.hash_map,inst_55135);
var state_55182__$1 = state_55182;
var statearr_55256_55319 = state_55182__$1;
(statearr_55256_55319[(2)] = inst_55153);

(statearr_55256_55319[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (30))){
var state_55182__$1 = state_55182;
var statearr_55257_55320 = state_55182__$1;
(statearr_55257_55320[(2)] = null);

(statearr_55257_55320[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (10))){
var inst_55055 = (state_55182[(22)]);
var inst_55057 = cljs.core.chunked_seq_QMARK_.call(null,inst_55055);
var state_55182__$1 = state_55182;
if(inst_55057){
var statearr_55258_55321 = state_55182__$1;
(statearr_55258_55321[(1)] = (13));

} else {
var statearr_55259_55322 = state_55182__$1;
(statearr_55259_55322[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (18))){
var inst_55089 = (state_55182[(2)]);
var state_55182__$1 = state_55182;
if(cljs.core.truth_(inst_55089)){
var statearr_55260_55323 = state_55182__$1;
(statearr_55260_55323[(1)] = (19));

} else {
var statearr_55261_55324 = state_55182__$1;
(statearr_55261_55324[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (42))){
var state_55182__$1 = state_55182;
var statearr_55262_55325 = state_55182__$1;
(statearr_55262_55325[(2)] = null);

(statearr_55262_55325[(1)] = (43));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (37))){
var inst_55148 = (state_55182[(2)]);
var state_55182__$1 = state_55182;
var statearr_55263_55326 = state_55182__$1;
(statearr_55263_55326[(2)] = inst_55148);

(statearr_55263_55326[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_55183 === (8))){
var inst_55055 = (state_55182[(22)]);
var inst_55042 = (state_55182[(10)]);
var inst_55055__$1 = cljs.core.seq.call(null,inst_55042);
var state_55182__$1 = (function (){var statearr_55264 = state_55182;
(statearr_55264[(22)] = inst_55055__$1);

return statearr_55264;
})();
if(inst_55055__$1){
var statearr_55265_55327 = state_55182__$1;
(statearr_55265_55327[(1)] = (10));

} else {
var statearr_55266_55328 = state_55182__$1;
(statearr_55266_55328[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
}
}
}
});})(c__23252__auto__,map__55027,map__55027__$1,opts,before_jsload,on_jsload,reload_dependents,map__55028,map__55028__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23157__auto__,c__23252__auto__,map__55027,map__55027__$1,opts,before_jsload,on_jsload,reload_dependents,map__55028,map__55028__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23158__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23158__auto____0 = (function (){
var statearr_55267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55267[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23158__auto__);

(statearr_55267[(1)] = (1));

return statearr_55267;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23158__auto____1 = (function (state_55182){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_55182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e55268){if((e55268 instanceof Object)){
var ex__23161__auto__ = e55268;
var statearr_55269_55329 = state_55182;
(statearr_55269_55329[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55182);

return cljs.core.cst$kw$recur;
} else {
throw e55268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__55330 = state_55182;
state_55182 = G__55330;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23158__auto__ = function(state_55182){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23158__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23158__auto____1.call(this,state_55182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23158__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23158__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto__,map__55027,map__55027__$1,opts,before_jsload,on_jsload,reload_dependents,map__55028,map__55028__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23254__auto__ = (function (){var statearr_55270 = f__23253__auto__.call(null);
(statearr_55270[(6)] = c__23252__auto__);

return statearr_55270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto__,map__55027,map__55027__$1,opts,before_jsload,on_jsload,reload_dependents,map__55028,map__55028__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23252__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__55333,link){
var map__55334 = p__55333;
var map__55334__$1 = (((((!((map__55334 == null))))?(((((map__55334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55334):map__55334);
var file = cljs.core.get.call(null,map__55334__$1,cljs.core.cst$kw$file);
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__55334,map__55334__$1,file){
return (function (p1__55331_SHARP_,p2__55332_SHARP_){
if(cljs.core._EQ_.call(null,p1__55331_SHARP_,p2__55332_SHARP_)){
return p1__55331_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__55334,map__55334__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$link,link,cljs.core.cst$kw$link_DASH_href,link_href,cljs.core.cst$kw$match_DASH_length,match_length,cljs.core.cst$kw$current_DASH_url_DASH_length,cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__55337){
var map__55338 = p__55337;
var map__55338__$1 = (((((!((map__55338 == null))))?(((((map__55338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55338):map__55338);
var match_length = cljs.core.get.call(null,map__55338__$1,cljs.core.cst$kw$match_DASH_length);
var current_url_length = cljs.core.get.call(null,map__55338__$1,cljs.core.cst$kw$current_DASH_url_DASH_length);
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__55336_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__55336_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return cljs.core.cst$kw$link.cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__55340_SHARP_,p2__55341_SHARP_){
return cljs.core.assoc.call(null,p1__55340_SHARP_,cljs.core.get.call(null,p2__55341_SHARP_,key),p2__55341_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,cljs.core.cst$kw$loaded,true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_55342 = cljs.core.filter.call(null,cljs.core.cst$kw$loaded,f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_55342);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_55342);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__55343,p__55344){
var map__55345 = p__55343;
var map__55345__$1 = (((((!((map__55345 == null))))?(((((map__55345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55345):map__55345);
var on_cssload = cljs.core.get.call(null,map__55345__$1,cljs.core.cst$kw$on_DASH_cssload);
var map__55346 = p__55344;
var map__55346__$1 = (((((!((map__55346 == null))))?(((((map__55346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55346):map__55346);
var files_msg = map__55346__$1;
var files = cljs.core.get.call(null,map__55346__$1,cljs.core.cst$kw$files);
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,cljs.core.cst$kw$file,files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1545301526645
