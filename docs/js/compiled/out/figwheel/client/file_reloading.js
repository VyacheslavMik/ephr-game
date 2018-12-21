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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__79618_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__79618_SHARP_));
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
var seq__79619 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__79620 = null;
var count__79621 = (0);
var i__79622 = (0);
while(true){
if((i__79622 < count__79621)){
var n = cljs.core._nth.call(null,chunk__79620,i__79622);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__79623 = seq__79619;
var G__79624 = chunk__79620;
var G__79625 = count__79621;
var G__79626 = (i__79622 + (1));
seq__79619 = G__79623;
chunk__79620 = G__79624;
count__79621 = G__79625;
i__79622 = G__79626;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__79619);
if(temp__5457__auto__){
var seq__79619__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79619__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__79619__$1);
var G__79627 = cljs.core.chunk_rest.call(null,seq__79619__$1);
var G__79628 = c__4461__auto__;
var G__79629 = cljs.core.count.call(null,c__4461__auto__);
var G__79630 = (0);
seq__79619 = G__79627;
chunk__79620 = G__79628;
count__79621 = G__79629;
i__79622 = G__79630;
continue;
} else {
var n = cljs.core.first.call(null,seq__79619__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__79631 = cljs.core.next.call(null,seq__79619__$1);
var G__79632 = null;
var G__79633 = (0);
var G__79634 = (0);
seq__79619 = G__79631;
chunk__79620 = G__79632;
count__79621 = G__79633;
i__79622 = G__79634;
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
return cljs.core.some.call(null,(function (p__79635){
var vec__79636 = p__79635;
var _ = cljs.core.nth.call(null,vec__79636,(0),null);
var v = cljs.core.nth.call(null,vec__79636,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__79639){
var vec__79640 = p__79639;
var k = cljs.core.nth.call(null,vec__79640,(0),null);
var v = cljs.core.nth.call(null,vec__79640,(1),null);
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

var seq__79652_79660 = cljs.core.seq.call(null,deps);
var chunk__79653_79661 = null;
var count__79654_79662 = (0);
var i__79655_79663 = (0);
while(true){
if((i__79655_79663 < count__79654_79662)){
var dep_79664 = cljs.core._nth.call(null,chunk__79653_79661,i__79655_79663);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_79664;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_79664));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_79664,(depth + (1)),state);
} else {
}


var G__79665 = seq__79652_79660;
var G__79666 = chunk__79653_79661;
var G__79667 = count__79654_79662;
var G__79668 = (i__79655_79663 + (1));
seq__79652_79660 = G__79665;
chunk__79653_79661 = G__79666;
count__79654_79662 = G__79667;
i__79655_79663 = G__79668;
continue;
} else {
var temp__5457__auto___79669 = cljs.core.seq.call(null,seq__79652_79660);
if(temp__5457__auto___79669){
var seq__79652_79670__$1 = temp__5457__auto___79669;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79652_79670__$1)){
var c__4461__auto___79671 = cljs.core.chunk_first.call(null,seq__79652_79670__$1);
var G__79672 = cljs.core.chunk_rest.call(null,seq__79652_79670__$1);
var G__79673 = c__4461__auto___79671;
var G__79674 = cljs.core.count.call(null,c__4461__auto___79671);
var G__79675 = (0);
seq__79652_79660 = G__79672;
chunk__79653_79661 = G__79673;
count__79654_79662 = G__79674;
i__79655_79663 = G__79675;
continue;
} else {
var dep_79676 = cljs.core.first.call(null,seq__79652_79670__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_79676;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_79676));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_79676,(depth + (1)),state);
} else {
}


var G__79677 = cljs.core.next.call(null,seq__79652_79670__$1);
var G__79678 = null;
var G__79679 = (0);
var G__79680 = (0);
seq__79652_79660 = G__79677;
chunk__79653_79661 = G__79678;
count__79654_79662 = G__79679;
i__79655_79663 = G__79680;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__79656){
var vec__79657 = p__79656;
var seq__79658 = cljs.core.seq.call(null,vec__79657);
var first__79659 = cljs.core.first.call(null,seq__79658);
var seq__79658__$1 = cljs.core.next.call(null,seq__79658);
var x = first__79659;
var xs = seq__79658__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__79657,seq__79658,first__79659,seq__79658__$1,x,xs,get_deps__$1){
return (function (p1__79643_SHARP_){
return clojure.set.difference.call(null,p1__79643_SHARP_,x);
});})(vec__79657,seq__79658,first__79659,seq__79658__$1,x,xs,get_deps__$1))
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
var seq__79681 = cljs.core.seq.call(null,provides);
var chunk__79682 = null;
var count__79683 = (0);
var i__79684 = (0);
while(true){
if((i__79684 < count__79683)){
var prov = cljs.core._nth.call(null,chunk__79682,i__79684);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__79685_79693 = cljs.core.seq.call(null,requires);
var chunk__79686_79694 = null;
var count__79687_79695 = (0);
var i__79688_79696 = (0);
while(true){
if((i__79688_79696 < count__79687_79695)){
var req_79697 = cljs.core._nth.call(null,chunk__79686_79694,i__79688_79696);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_79697,prov);


var G__79698 = seq__79685_79693;
var G__79699 = chunk__79686_79694;
var G__79700 = count__79687_79695;
var G__79701 = (i__79688_79696 + (1));
seq__79685_79693 = G__79698;
chunk__79686_79694 = G__79699;
count__79687_79695 = G__79700;
i__79688_79696 = G__79701;
continue;
} else {
var temp__5457__auto___79702 = cljs.core.seq.call(null,seq__79685_79693);
if(temp__5457__auto___79702){
var seq__79685_79703__$1 = temp__5457__auto___79702;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79685_79703__$1)){
var c__4461__auto___79704 = cljs.core.chunk_first.call(null,seq__79685_79703__$1);
var G__79705 = cljs.core.chunk_rest.call(null,seq__79685_79703__$1);
var G__79706 = c__4461__auto___79704;
var G__79707 = cljs.core.count.call(null,c__4461__auto___79704);
var G__79708 = (0);
seq__79685_79693 = G__79705;
chunk__79686_79694 = G__79706;
count__79687_79695 = G__79707;
i__79688_79696 = G__79708;
continue;
} else {
var req_79709 = cljs.core.first.call(null,seq__79685_79703__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_79709,prov);


var G__79710 = cljs.core.next.call(null,seq__79685_79703__$1);
var G__79711 = null;
var G__79712 = (0);
var G__79713 = (0);
seq__79685_79693 = G__79710;
chunk__79686_79694 = G__79711;
count__79687_79695 = G__79712;
i__79688_79696 = G__79713;
continue;
}
} else {
}
}
break;
}


var G__79714 = seq__79681;
var G__79715 = chunk__79682;
var G__79716 = count__79683;
var G__79717 = (i__79684 + (1));
seq__79681 = G__79714;
chunk__79682 = G__79715;
count__79683 = G__79716;
i__79684 = G__79717;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__79681);
if(temp__5457__auto__){
var seq__79681__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79681__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__79681__$1);
var G__79718 = cljs.core.chunk_rest.call(null,seq__79681__$1);
var G__79719 = c__4461__auto__;
var G__79720 = cljs.core.count.call(null,c__4461__auto__);
var G__79721 = (0);
seq__79681 = G__79718;
chunk__79682 = G__79719;
count__79683 = G__79720;
i__79684 = G__79721;
continue;
} else {
var prov = cljs.core.first.call(null,seq__79681__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__79689_79722 = cljs.core.seq.call(null,requires);
var chunk__79690_79723 = null;
var count__79691_79724 = (0);
var i__79692_79725 = (0);
while(true){
if((i__79692_79725 < count__79691_79724)){
var req_79726 = cljs.core._nth.call(null,chunk__79690_79723,i__79692_79725);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_79726,prov);


var G__79727 = seq__79689_79722;
var G__79728 = chunk__79690_79723;
var G__79729 = count__79691_79724;
var G__79730 = (i__79692_79725 + (1));
seq__79689_79722 = G__79727;
chunk__79690_79723 = G__79728;
count__79691_79724 = G__79729;
i__79692_79725 = G__79730;
continue;
} else {
var temp__5457__auto___79731__$1 = cljs.core.seq.call(null,seq__79689_79722);
if(temp__5457__auto___79731__$1){
var seq__79689_79732__$1 = temp__5457__auto___79731__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79689_79732__$1)){
var c__4461__auto___79733 = cljs.core.chunk_first.call(null,seq__79689_79732__$1);
var G__79734 = cljs.core.chunk_rest.call(null,seq__79689_79732__$1);
var G__79735 = c__4461__auto___79733;
var G__79736 = cljs.core.count.call(null,c__4461__auto___79733);
var G__79737 = (0);
seq__79689_79722 = G__79734;
chunk__79690_79723 = G__79735;
count__79691_79724 = G__79736;
i__79692_79725 = G__79737;
continue;
} else {
var req_79738 = cljs.core.first.call(null,seq__79689_79732__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_79738,prov);


var G__79739 = cljs.core.next.call(null,seq__79689_79732__$1);
var G__79740 = null;
var G__79741 = (0);
var G__79742 = (0);
seq__79689_79722 = G__79739;
chunk__79690_79723 = G__79740;
count__79691_79724 = G__79741;
i__79692_79725 = G__79742;
continue;
}
} else {
}
}
break;
}


var G__79743 = cljs.core.next.call(null,seq__79681__$1);
var G__79744 = null;
var G__79745 = (0);
var G__79746 = (0);
seq__79681 = G__79743;
chunk__79682 = G__79744;
count__79683 = G__79745;
i__79684 = G__79746;
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
var seq__79747_79751 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__79748_79752 = null;
var count__79749_79753 = (0);
var i__79750_79754 = (0);
while(true){
if((i__79750_79754 < count__79749_79753)){
var ns_79755 = cljs.core._nth.call(null,chunk__79748_79752,i__79750_79754);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_79755);


var G__79756 = seq__79747_79751;
var G__79757 = chunk__79748_79752;
var G__79758 = count__79749_79753;
var G__79759 = (i__79750_79754 + (1));
seq__79747_79751 = G__79756;
chunk__79748_79752 = G__79757;
count__79749_79753 = G__79758;
i__79750_79754 = G__79759;
continue;
} else {
var temp__5457__auto___79760 = cljs.core.seq.call(null,seq__79747_79751);
if(temp__5457__auto___79760){
var seq__79747_79761__$1 = temp__5457__auto___79760;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79747_79761__$1)){
var c__4461__auto___79762 = cljs.core.chunk_first.call(null,seq__79747_79761__$1);
var G__79763 = cljs.core.chunk_rest.call(null,seq__79747_79761__$1);
var G__79764 = c__4461__auto___79762;
var G__79765 = cljs.core.count.call(null,c__4461__auto___79762);
var G__79766 = (0);
seq__79747_79751 = G__79763;
chunk__79748_79752 = G__79764;
count__79749_79753 = G__79765;
i__79750_79754 = G__79766;
continue;
} else {
var ns_79767 = cljs.core.first.call(null,seq__79747_79761__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_79767);


var G__79768 = cljs.core.next.call(null,seq__79747_79761__$1);
var G__79769 = null;
var G__79770 = (0);
var G__79771 = (0);
seq__79747_79751 = G__79768;
chunk__79748_79752 = G__79769;
count__79749_79753 = G__79770;
i__79750_79754 = G__79771;
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
var G__79772__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__79772 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__79773__i = 0, G__79773__a = new Array(arguments.length -  0);
while (G__79773__i < G__79773__a.length) {G__79773__a[G__79773__i] = arguments[G__79773__i + 0]; ++G__79773__i;}
  args = new cljs.core.IndexedSeq(G__79773__a,0,null);
} 
return G__79772__delegate.call(this,args);};
G__79772.cljs$lang$maxFixedArity = 0;
G__79772.cljs$lang$applyTo = (function (arglist__79774){
var args = cljs.core.seq(arglist__79774);
return G__79772__delegate(args);
});
G__79772.cljs$core$IFn$_invoke$arity$variadic = G__79772__delegate;
return G__79772;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__79775_SHARP_,p2__79776_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__79775_SHARP_)),p2__79776_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__79777_SHARP_,p2__79778_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__79777_SHARP_),p2__79778_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__79779 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__79779.addCallback(((function (G__79779){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__79779))
);

G__79779.addErrback(((function (G__79779){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__79779))
);

return G__79779;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e79780){if((e79780 instanceof Error)){
var e = e79780;
figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,e.stack);

return false;
} else {
throw e79780;

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
}catch (e79781){if((e79781 instanceof Error)){
var e = e79781;
figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,e.stack);

return false;
} else {
throw e79781;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__79782 = cljs.core._EQ_;
var expr__79783 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__79782.call(null,cljs.core.cst$kw$node,expr__79783))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__79782.call(null,cljs.core.cst$kw$html,expr__79783))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__79782.call(null,cljs.core.cst$kw$worker,expr__79783))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__79782,expr__79783){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__79782,expr__79783))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__79785,callback){
var map__79786 = p__79785;
var map__79786__$1 = (((((!((map__79786 == null))))?(((((map__79786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79786):map__79786);
var file_msg = map__79786__$1;
var request_url = cljs.core.get.call(null,map__79786__$1,cljs.core.cst$kw$request_DASH_url);

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__79786,map__79786__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,cljs.core.cst$kw$loaded_DASH_file,true)], null));
} else {
figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__79786,map__79786__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__22961__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22961__auto__){
return (function (){
var f__22962__auto__ = (function (){var switch__22938__auto__ = ((function (c__22961__auto__){
return (function (state_79824){
var state_val_79825 = (state_79824[(1)]);
if((state_val_79825 === (7))){
var inst_79820 = (state_79824[(2)]);
var state_79824__$1 = state_79824;
var statearr_79826_79852 = state_79824__$1;
(statearr_79826_79852[(2)] = inst_79820);

(statearr_79826_79852[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_79825 === (1))){
var state_79824__$1 = state_79824;
var statearr_79827_79853 = state_79824__$1;
(statearr_79827_79853[(2)] = null);

(statearr_79827_79853[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_79825 === (4))){
var inst_79790 = (state_79824[(7)]);
var inst_79790__$1 = (state_79824[(2)]);
var state_79824__$1 = (function (){var statearr_79828 = state_79824;
(statearr_79828[(7)] = inst_79790__$1);

return statearr_79828;
})();
if(cljs.core.truth_(inst_79790__$1)){
var statearr_79829_79854 = state_79824__$1;
(statearr_79829_79854[(1)] = (5));

} else {
var statearr_79830_79855 = state_79824__$1;
(statearr_79830_79855[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_79825 === (15))){
var inst_79805 = (state_79824[(8)]);
var inst_79803 = (state_79824[(9)]);
var inst_79807 = inst_79805.call(null,inst_79803);
var state_79824__$1 = state_79824;
var statearr_79831_79856 = state_79824__$1;
(statearr_79831_79856[(2)] = inst_79807);

(statearr_79831_79856[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_79825 === (13))){
var inst_79814 = (state_79824[(2)]);
var state_79824__$1 = state_79824;
var statearr_79832_79857 = state_79824__$1;
(statearr_79832_79857[(2)] = inst_79814);

(statearr_79832_79857[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_79825 === (6))){
var state_79824__$1 = state_79824;
var statearr_79833_79858 = state_79824__$1;
(statearr_79833_79858[(2)] = null);

(statearr_79833_79858[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_79825 === (17))){
var inst_79811 = (state_79824[(2)]);
var state_79824__$1 = state_79824;
var statearr_79834_79859 = state_79824__$1;
(statearr_79834_79859[(2)] = inst_79811);

(statearr_79834_79859[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_79825 === (3))){
var inst_79822 = (state_79824[(2)]);
var state_79824__$1 = state_79824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79824__$1,inst_79822);
} else {
if((state_val_79825 === (12))){
var state_79824__$1 = state_79824;
var statearr_79835_79860 = state_79824__$1;
(statearr_79835_79860[(2)] = null);

(statearr_79835_79860[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_79825 === (2))){
var state_79824__$1 = state_79824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79824__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_79825 === (11))){
var inst_79795 = (state_79824[(10)]);
var inst_79801 = figwheel.client.file_reloading.blocking_load.call(null,inst_79795);
var state_79824__$1 = state_79824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79824__$1,(14),inst_79801);
} else {
if((state_val_79825 === (9))){
var inst_79795 = (state_79824[(10)]);
var state_79824__$1 = state_79824;
if(cljs.core.truth_(inst_79795)){
var statearr_79836_79861 = state_79824__$1;
(statearr_79836_79861[(1)] = (11));

} else {
var statearr_79837_79862 = state_79824__$1;
(statearr_79837_79862[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_79825 === (5))){
var inst_79790 = (state_79824[(7)]);
var inst_79796 = (state_79824[(11)]);
var inst_79795 = cljs.core.nth.call(null,inst_79790,(0),null);
var inst_79796__$1 = cljs.core.nth.call(null,inst_79790,(1),null);
var state_79824__$1 = (function (){var statearr_79838 = state_79824;
(statearr_79838[(11)] = inst_79796__$1);

(statearr_79838[(10)] = inst_79795);

return statearr_79838;
})();
if(cljs.core.truth_(inst_79796__$1)){
var statearr_79839_79863 = state_79824__$1;
(statearr_79839_79863[(1)] = (8));

} else {
var statearr_79840_79864 = state_79824__$1;
(statearr_79840_79864[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_79825 === (14))){
var inst_79805 = (state_79824[(8)]);
var inst_79795 = (state_79824[(10)]);
var inst_79803 = (state_79824[(2)]);
var inst_79804 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_79805__$1 = cljs.core.get.call(null,inst_79804,inst_79795);
var state_79824__$1 = (function (){var statearr_79841 = state_79824;
(statearr_79841[(8)] = inst_79805__$1);

(statearr_79841[(9)] = inst_79803);

return statearr_79841;
})();
if(cljs.core.truth_(inst_79805__$1)){
var statearr_79842_79865 = state_79824__$1;
(statearr_79842_79865[(1)] = (15));

} else {
var statearr_79843_79866 = state_79824__$1;
(statearr_79843_79866[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_79825 === (16))){
var inst_79803 = (state_79824[(9)]);
var inst_79809 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_79803);
var state_79824__$1 = state_79824;
var statearr_79844_79867 = state_79824__$1;
(statearr_79844_79867[(2)] = inst_79809);

(statearr_79844_79867[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_79825 === (10))){
var inst_79816 = (state_79824[(2)]);
var state_79824__$1 = (function (){var statearr_79845 = state_79824;
(statearr_79845[(12)] = inst_79816);

return statearr_79845;
})();
var statearr_79846_79868 = state_79824__$1;
(statearr_79846_79868[(2)] = null);

(statearr_79846_79868[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_79825 === (8))){
var inst_79796 = (state_79824[(11)]);
var inst_79798 = eval(inst_79796);
var state_79824__$1 = state_79824;
var statearr_79847_79869 = state_79824__$1;
(statearr_79847_79869[(2)] = inst_79798);

(statearr_79847_79869[(1)] = (10));


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
});})(c__22961__auto__))
;
return ((function (switch__22938__auto__,c__22961__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22939__auto__ = null;
var figwheel$client$file_reloading$state_machine__22939__auto____0 = (function (){
var statearr_79848 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79848[(0)] = figwheel$client$file_reloading$state_machine__22939__auto__);

(statearr_79848[(1)] = (1));

return statearr_79848;
});
var figwheel$client$file_reloading$state_machine__22939__auto____1 = (function (state_79824){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_79824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e79849){if((e79849 instanceof Object)){
var ex__22942__auto__ = e79849;
var statearr_79850_79870 = state_79824;
(statearr_79850_79870[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79824);

return cljs.core.cst$kw$recur;
} else {
throw e79849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__79871 = state_79824;
state_79824 = G__79871;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22939__auto__ = function(state_79824){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22939__auto____1.call(this,state_79824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22939__auto____0;
figwheel$client$file_reloading$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22939__auto____1;
return figwheel$client$file_reloading$state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__))
})();
var state__22963__auto__ = (function (){var statearr_79851 = f__22962__auto__.call(null);
(statearr_79851[(6)] = c__22961__auto__);

return statearr_79851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto__))
);

return c__22961__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__79873 = arguments.length;
switch (G__79873) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__79875,callback){
var map__79876 = p__79875;
var map__79876__$1 = (((((!((map__79876 == null))))?(((((map__79876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79876):map__79876);
var file_msg = map__79876__$1;
var namespace = cljs.core.get.call(null,map__79876__$1,cljs.core.cst$kw$namespace);
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__79876,map__79876__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loaded_DASH_file], null)))], null));
});})(request_url,map__79876,map__79876__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__79878){
var map__79879 = p__79878;
var map__79879__$1 = (((((!((map__79879 == null))))?(((((map__79879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79879):map__79879);
var file_msg = map__79879__$1;
var namespace = cljs.core.get.call(null,map__79879__$1,cljs.core.cst$kw$namespace);
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return cljs.core.cst$kw$figwheel_DASH_no_DASH_load.cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__79881){
var map__79882 = p__79881;
var map__79882__$1 = (((((!((map__79882 == null))))?(((((map__79882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79882):map__79882);
var file_msg = map__79882__$1;
var namespace = cljs.core.get.call(null,map__79882__$1,cljs.core.cst$kw$namespace);

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__79884,callback){
var map__79885 = p__79884;
var map__79885__$1 = (((((!((map__79885 == null))))?(((((map__79885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79885):map__79885);
var file_msg = map__79885__$1;
var request_url = cljs.core.get.call(null,map__79885__$1,cljs.core.cst$kw$request_DASH_url);
var namespace = cljs.core.get.call(null,map__79885__$1,cljs.core.cst$kw$namespace);

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
var c__22961__auto___79935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22961__auto___79935,out){
return (function (){
var f__22962__auto__ = (function (){var switch__22938__auto__ = ((function (c__22961__auto___79935,out){
return (function (state_79920){
var state_val_79921 = (state_79920[(1)]);
if((state_val_79921 === (1))){
var inst_79894 = cljs.core.seq.call(null,files);
var inst_79895 = cljs.core.first.call(null,inst_79894);
var inst_79896 = cljs.core.next.call(null,inst_79894);
var inst_79897 = files;
var state_79920__$1 = (function (){var statearr_79922 = state_79920;
(statearr_79922[(7)] = inst_79896);

(statearr_79922[(8)] = inst_79897);

(statearr_79922[(9)] = inst_79895);

return statearr_79922;
})();
var statearr_79923_79936 = state_79920__$1;
(statearr_79923_79936[(2)] = null);

(statearr_79923_79936[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_79921 === (2))){
var inst_79897 = (state_79920[(8)]);
var inst_79903 = (state_79920[(10)]);
var inst_79902 = cljs.core.seq.call(null,inst_79897);
var inst_79903__$1 = cljs.core.first.call(null,inst_79902);
var inst_79904 = cljs.core.next.call(null,inst_79902);
var inst_79905 = (inst_79903__$1 == null);
var inst_79906 = cljs.core.not.call(null,inst_79905);
var state_79920__$1 = (function (){var statearr_79924 = state_79920;
(statearr_79924[(11)] = inst_79904);

(statearr_79924[(10)] = inst_79903__$1);

return statearr_79924;
})();
if(inst_79906){
var statearr_79925_79937 = state_79920__$1;
(statearr_79925_79937[(1)] = (4));

} else {
var statearr_79926_79938 = state_79920__$1;
(statearr_79926_79938[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_79921 === (3))){
var inst_79918 = (state_79920[(2)]);
var state_79920__$1 = state_79920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79920__$1,inst_79918);
} else {
if((state_val_79921 === (4))){
var inst_79903 = (state_79920[(10)]);
var inst_79908 = figwheel.client.file_reloading.reload_js_file.call(null,inst_79903);
var state_79920__$1 = state_79920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79920__$1,(7),inst_79908);
} else {
if((state_val_79921 === (5))){
var inst_79914 = cljs.core.async.close_BANG_.call(null,out);
var state_79920__$1 = state_79920;
var statearr_79927_79939 = state_79920__$1;
(statearr_79927_79939[(2)] = inst_79914);

(statearr_79927_79939[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_79921 === (6))){
var inst_79916 = (state_79920[(2)]);
var state_79920__$1 = state_79920;
var statearr_79928_79940 = state_79920__$1;
(statearr_79928_79940[(2)] = inst_79916);

(statearr_79928_79940[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_79921 === (7))){
var inst_79904 = (state_79920[(11)]);
var inst_79910 = (state_79920[(2)]);
var inst_79911 = cljs.core.async.put_BANG_.call(null,out,inst_79910);
var inst_79897 = inst_79904;
var state_79920__$1 = (function (){var statearr_79929 = state_79920;
(statearr_79929[(8)] = inst_79897);

(statearr_79929[(12)] = inst_79911);

return statearr_79929;
})();
var statearr_79930_79941 = state_79920__$1;
(statearr_79930_79941[(2)] = null);

(statearr_79930_79941[(1)] = (2));


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
});})(c__22961__auto___79935,out))
;
return ((function (switch__22938__auto__,c__22961__auto___79935,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____0 = (function (){
var statearr_79931 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79931[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__);

(statearr_79931[(1)] = (1));

return statearr_79931;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____1 = (function (state_79920){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_79920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e79932){if((e79932 instanceof Object)){
var ex__22942__auto__ = e79932;
var statearr_79933_79942 = state_79920;
(statearr_79933_79942[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79920);

return cljs.core.cst$kw$recur;
} else {
throw e79932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__79943 = state_79920;
state_79920 = G__79943;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__ = function(state_79920){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____1.call(this,state_79920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto___79935,out))
})();
var state__22963__auto__ = (function (){var statearr_79934 = f__22962__auto__.call(null);
(statearr_79934[(6)] = c__22961__auto___79935);

return statearr_79934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto___79935,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__79944,opts){
var map__79945 = p__79944;
var map__79945__$1 = (((((!((map__79945 == null))))?(((((map__79945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79945):map__79945);
var eval_body = cljs.core.get.call(null,map__79945__$1,cljs.core.cst$kw$eval_DASH_body);
var file = cljs.core.get.call(null,map__79945__$1,cljs.core.cst$kw$file);
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
}catch (e79947){var e = e79947;
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
return (function (p1__79948_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$namespace.cljs$core$IFn$_invoke$arity$1(p1__79948_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__79949){
var vec__79950 = p__79949;
var k = cljs.core.nth.call(null,vec__79950,(0),null);
var v = cljs.core.nth.call(null,vec__79950,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$namespace,k,cljs.core.cst$kw$type,cljs.core.cst$kw$namespace], null);
}),cljs.core.filter.call(null,(function (p__79953){
var vec__79954 = p__79953;
var k = cljs.core.nth.call(null,vec__79954,(0),null);
var v = cljs.core.nth.call(null,vec__79954,(1),null);
return cljs.core.cst$kw$figwheel_DASH_always.cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__79960,p__79961){
var map__79962 = p__79960;
var map__79962__$1 = (((((!((map__79962 == null))))?(((((map__79962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79962):map__79962);
var opts = map__79962__$1;
var before_jsload = cljs.core.get.call(null,map__79962__$1,cljs.core.cst$kw$before_DASH_jsload);
var on_jsload = cljs.core.get.call(null,map__79962__$1,cljs.core.cst$kw$on_DASH_jsload);
var reload_dependents = cljs.core.get.call(null,map__79962__$1,cljs.core.cst$kw$reload_DASH_dependents);
var map__79963 = p__79961;
var map__79963__$1 = (((((!((map__79963 == null))))?(((((map__79963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79963):map__79963);
var msg = map__79963__$1;
var files = cljs.core.get.call(null,map__79963__$1,cljs.core.cst$kw$files);
var figwheel_meta = cljs.core.get.call(null,map__79963__$1,cljs.core.cst$kw$figwheel_DASH_meta);
var recompile_dependents = cljs.core.get.call(null,map__79963__$1,cljs.core.cst$kw$recompile_DASH_dependents);
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22961__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22961__auto__,map__79962,map__79962__$1,opts,before_jsload,on_jsload,reload_dependents,map__79963,map__79963__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22962__auto__ = (function (){var switch__22938__auto__ = ((function (c__22961__auto__,map__79962,map__79962__$1,opts,before_jsload,on_jsload,reload_dependents,map__79963,map__79963__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_80117){
var state_val_80118 = (state_80117[(1)]);
if((state_val_80118 === (7))){
var inst_79979 = (state_80117[(7)]);
var inst_79980 = (state_80117[(8)]);
var inst_79978 = (state_80117[(9)]);
var inst_79977 = (state_80117[(10)]);
var inst_79985 = cljs.core._nth.call(null,inst_79978,inst_79980);
var inst_79986 = figwheel.client.file_reloading.eval_body.call(null,inst_79985,opts);
var inst_79987 = (inst_79980 + (1));
var tmp80119 = inst_79979;
var tmp80120 = inst_79978;
var tmp80121 = inst_79977;
var inst_79977__$1 = tmp80121;
var inst_79978__$1 = tmp80120;
var inst_79979__$1 = tmp80119;
var inst_79980__$1 = inst_79987;
var state_80117__$1 = (function (){var statearr_80122 = state_80117;
(statearr_80122[(7)] = inst_79979__$1);

(statearr_80122[(8)] = inst_79980__$1);

(statearr_80122[(11)] = inst_79986);

(statearr_80122[(9)] = inst_79978__$1);

(statearr_80122[(10)] = inst_79977__$1);

return statearr_80122;
})();
var statearr_80123_80206 = state_80117__$1;
(statearr_80123_80206[(2)] = null);

(statearr_80123_80206[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (20))){
var inst_80020 = (state_80117[(12)]);
var inst_80028 = figwheel.client.file_reloading.sort_files.call(null,inst_80020);
var state_80117__$1 = state_80117;
var statearr_80124_80207 = state_80117__$1;
(statearr_80124_80207[(2)] = inst_80028);

(statearr_80124_80207[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (27))){
var state_80117__$1 = state_80117;
var statearr_80125_80208 = state_80117__$1;
(statearr_80125_80208[(2)] = null);

(statearr_80125_80208[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (1))){
var inst_79969 = (state_80117[(13)]);
var inst_79966 = before_jsload.call(null,files);
var inst_79967 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_79968 = (function (){return ((function (inst_79969,inst_79966,inst_79967,state_val_80118,c__22961__auto__,map__79962,map__79962__$1,opts,before_jsload,on_jsload,reload_dependents,map__79963,map__79963__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__79957_SHARP_){
return cljs.core.cst$kw$eval_DASH_body.cljs$core$IFn$_invoke$arity$1(p1__79957_SHARP_);
});
;})(inst_79969,inst_79966,inst_79967,state_val_80118,c__22961__auto__,map__79962,map__79962__$1,opts,before_jsload,on_jsload,reload_dependents,map__79963,map__79963__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_79969__$1 = cljs.core.filter.call(null,inst_79968,files);
var inst_79970 = cljs.core.not_empty.call(null,inst_79969__$1);
var state_80117__$1 = (function (){var statearr_80126 = state_80117;
(statearr_80126[(14)] = inst_79967);

(statearr_80126[(15)] = inst_79966);

(statearr_80126[(13)] = inst_79969__$1);

return statearr_80126;
})();
if(cljs.core.truth_(inst_79970)){
var statearr_80127_80209 = state_80117__$1;
(statearr_80127_80209[(1)] = (2));

} else {
var statearr_80128_80210 = state_80117__$1;
(statearr_80128_80210[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (24))){
var state_80117__$1 = state_80117;
var statearr_80129_80211 = state_80117__$1;
(statearr_80129_80211[(2)] = null);

(statearr_80129_80211[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (39))){
var inst_80070 = (state_80117[(16)]);
var state_80117__$1 = state_80117;
var statearr_80130_80212 = state_80117__$1;
(statearr_80130_80212[(2)] = inst_80070);

(statearr_80130_80212[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (46))){
var inst_80112 = (state_80117[(2)]);
var state_80117__$1 = state_80117;
var statearr_80131_80213 = state_80117__$1;
(statearr_80131_80213[(2)] = inst_80112);

(statearr_80131_80213[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (4))){
var inst_80014 = (state_80117[(2)]);
var inst_80015 = cljs.core.List.EMPTY;
var inst_80016 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_80015);
var inst_80017 = (function (){return ((function (inst_80014,inst_80015,inst_80016,state_val_80118,c__22961__auto__,map__79962,map__79962__$1,opts,before_jsload,on_jsload,reload_dependents,map__79963,map__79963__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__79958_SHARP_){
var and__4036__auto__ = cljs.core.cst$kw$namespace.cljs$core$IFn$_invoke$arity$1(p1__79958_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,cljs.core.cst$kw$eval_DASH_body.cljs$core$IFn$_invoke$arity$1(p1__79958_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__79958_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_80014,inst_80015,inst_80016,state_val_80118,c__22961__auto__,map__79962,map__79962__$1,opts,before_jsload,on_jsload,reload_dependents,map__79963,map__79963__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_80018 = cljs.core.filter.call(null,inst_80017,files);
var inst_80019 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_80020 = cljs.core.concat.call(null,inst_80018,inst_80019);
var state_80117__$1 = (function (){var statearr_80132 = state_80117;
(statearr_80132[(17)] = inst_80014);

(statearr_80132[(12)] = inst_80020);

(statearr_80132[(18)] = inst_80016);

return statearr_80132;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_80133_80214 = state_80117__$1;
(statearr_80133_80214[(1)] = (16));

} else {
var statearr_80134_80215 = state_80117__$1;
(statearr_80134_80215[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (15))){
var inst_80004 = (state_80117[(2)]);
var state_80117__$1 = state_80117;
var statearr_80135_80216 = state_80117__$1;
(statearr_80135_80216[(2)] = inst_80004);

(statearr_80135_80216[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (21))){
var inst_80030 = (state_80117[(19)]);
var inst_80030__$1 = (state_80117[(2)]);
var inst_80031 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_80030__$1);
var state_80117__$1 = (function (){var statearr_80136 = state_80117;
(statearr_80136[(19)] = inst_80030__$1);

return statearr_80136;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80117__$1,(22),inst_80031);
} else {
if((state_val_80118 === (31))){
var inst_80115 = (state_80117[(2)]);
var state_80117__$1 = state_80117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80117__$1,inst_80115);
} else {
if((state_val_80118 === (32))){
var inst_80070 = (state_80117[(16)]);
var inst_80075 = inst_80070.cljs$lang$protocol_mask$partition0$;
var inst_80076 = (inst_80075 & (64));
var inst_80077 = inst_80070.cljs$core$ISeq$;
var inst_80078 = (cljs.core.PROTOCOL_SENTINEL === inst_80077);
var inst_80079 = ((inst_80076) || (inst_80078));
var state_80117__$1 = state_80117;
if(cljs.core.truth_(inst_80079)){
var statearr_80137_80217 = state_80117__$1;
(statearr_80137_80217[(1)] = (35));

} else {
var statearr_80138_80218 = state_80117__$1;
(statearr_80138_80218[(1)] = (36));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (40))){
var inst_80092 = (state_80117[(20)]);
var inst_80091 = (state_80117[(2)]);
var inst_80092__$1 = cljs.core.get.call(null,inst_80091,cljs.core.cst$kw$figwheel_DASH_no_DASH_load);
var inst_80093 = cljs.core.get.call(null,inst_80091,cljs.core.cst$kw$not_DASH_required);
var inst_80094 = cljs.core.not_empty.call(null,inst_80092__$1);
var state_80117__$1 = (function (){var statearr_80139 = state_80117;
(statearr_80139[(21)] = inst_80093);

(statearr_80139[(20)] = inst_80092__$1);

return statearr_80139;
})();
if(cljs.core.truth_(inst_80094)){
var statearr_80140_80219 = state_80117__$1;
(statearr_80140_80219[(1)] = (41));

} else {
var statearr_80141_80220 = state_80117__$1;
(statearr_80141_80220[(1)] = (42));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (33))){
var state_80117__$1 = state_80117;
var statearr_80142_80221 = state_80117__$1;
(statearr_80142_80221[(2)] = false);

(statearr_80142_80221[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (13))){
var inst_79990 = (state_80117[(22)]);
var inst_79994 = cljs.core.chunk_first.call(null,inst_79990);
var inst_79995 = cljs.core.chunk_rest.call(null,inst_79990);
var inst_79996 = cljs.core.count.call(null,inst_79994);
var inst_79977 = inst_79995;
var inst_79978 = inst_79994;
var inst_79979 = inst_79996;
var inst_79980 = (0);
var state_80117__$1 = (function (){var statearr_80143 = state_80117;
(statearr_80143[(7)] = inst_79979);

(statearr_80143[(8)] = inst_79980);

(statearr_80143[(9)] = inst_79978);

(statearr_80143[(10)] = inst_79977);

return statearr_80143;
})();
var statearr_80144_80222 = state_80117__$1;
(statearr_80144_80222[(2)] = null);

(statearr_80144_80222[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (22))){
var inst_80030 = (state_80117[(19)]);
var inst_80034 = (state_80117[(23)]);
var inst_80033 = (state_80117[(24)]);
var inst_80038 = (state_80117[(25)]);
var inst_80033__$1 = (state_80117[(2)]);
var inst_80034__$1 = cljs.core.filter.call(null,cljs.core.cst$kw$loaded_DASH_file,inst_80033__$1);
var inst_80035 = (function (){var all_files = inst_80030;
var res_SINGLEQUOTE_ = inst_80033__$1;
var res = inst_80034__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_80030,inst_80034,inst_80033,inst_80038,inst_80033__$1,inst_80034__$1,state_val_80118,c__22961__auto__,map__79962,map__79962__$1,opts,before_jsload,on_jsload,reload_dependents,map__79963,map__79963__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__79959_SHARP_){
return cljs.core.not.call(null,cljs.core.cst$kw$loaded_DASH_file.cljs$core$IFn$_invoke$arity$1(p1__79959_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_80030,inst_80034,inst_80033,inst_80038,inst_80033__$1,inst_80034__$1,state_val_80118,c__22961__auto__,map__79962,map__79962__$1,opts,before_jsload,on_jsload,reload_dependents,map__79963,map__79963__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_80036 = cljs.core.filter.call(null,inst_80035,inst_80033__$1);
var inst_80037 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_80038__$1 = cljs.core.filter.call(null,cljs.core.cst$kw$loaded_DASH_file,inst_80037);
var inst_80039 = cljs.core.not_empty.call(null,inst_80038__$1);
var state_80117__$1 = (function (){var statearr_80145 = state_80117;
(statearr_80145[(26)] = inst_80036);

(statearr_80145[(23)] = inst_80034__$1);

(statearr_80145[(24)] = inst_80033__$1);

(statearr_80145[(25)] = inst_80038__$1);

return statearr_80145;
})();
if(cljs.core.truth_(inst_80039)){
var statearr_80146_80223 = state_80117__$1;
(statearr_80146_80223[(1)] = (23));

} else {
var statearr_80147_80224 = state_80117__$1;
(statearr_80147_80224[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (36))){
var state_80117__$1 = state_80117;
var statearr_80148_80225 = state_80117__$1;
(statearr_80148_80225[(2)] = false);

(statearr_80148_80225[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (41))){
var inst_80092 = (state_80117[(20)]);
var inst_80096 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,cljs.core.cst$kw$namespace);
var inst_80097 = cljs.core.map.call(null,inst_80096,inst_80092);
var inst_80098 = cljs.core.pr_str.call(null,inst_80097);
var inst_80099 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_80098)].join('');
var inst_80100 = figwheel.client.utils.log.call(null,inst_80099);
var state_80117__$1 = state_80117;
var statearr_80149_80226 = state_80117__$1;
(statearr_80149_80226[(2)] = inst_80100);

(statearr_80149_80226[(1)] = (43));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (43))){
var inst_80093 = (state_80117[(21)]);
var inst_80103 = (state_80117[(2)]);
var inst_80104 = cljs.core.not_empty.call(null,inst_80093);
var state_80117__$1 = (function (){var statearr_80150 = state_80117;
(statearr_80150[(27)] = inst_80103);

return statearr_80150;
})();
if(cljs.core.truth_(inst_80104)){
var statearr_80151_80227 = state_80117__$1;
(statearr_80151_80227[(1)] = (44));

} else {
var statearr_80152_80228 = state_80117__$1;
(statearr_80152_80228[(1)] = (45));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (29))){
var inst_80070 = (state_80117[(16)]);
var inst_80030 = (state_80117[(19)]);
var inst_80036 = (state_80117[(26)]);
var inst_80034 = (state_80117[(23)]);
var inst_80033 = (state_80117[(24)]);
var inst_80038 = (state_80117[(25)]);
var inst_80066 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: NOT loading these files ");
var inst_80069 = (function (){var all_files = inst_80030;
var res_SINGLEQUOTE_ = inst_80033;
var res = inst_80034;
var files_not_loaded = inst_80036;
var dependencies_that_loaded = inst_80038;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_80070,inst_80030,inst_80036,inst_80034,inst_80033,inst_80038,inst_80066,state_val_80118,c__22961__auto__,map__79962,map__79962__$1,opts,before_jsload,on_jsload,reload_dependents,map__79963,map__79963__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__80068){
var map__80153 = p__80068;
var map__80153__$1 = (((((!((map__80153 == null))))?(((((map__80153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80153):map__80153);
var namespace = cljs.core.get.call(null,map__80153__$1,cljs.core.cst$kw$namespace);
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_80070,inst_80030,inst_80036,inst_80034,inst_80033,inst_80038,inst_80066,state_val_80118,c__22961__auto__,map__79962,map__79962__$1,opts,before_jsload,on_jsload,reload_dependents,map__79963,map__79963__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_80070__$1 = cljs.core.group_by.call(null,inst_80069,inst_80036);
var inst_80072 = (inst_80070__$1 == null);
var inst_80073 = cljs.core.not.call(null,inst_80072);
var state_80117__$1 = (function (){var statearr_80155 = state_80117;
(statearr_80155[(16)] = inst_80070__$1);

(statearr_80155[(28)] = inst_80066);

return statearr_80155;
})();
if(inst_80073){
var statearr_80156_80229 = state_80117__$1;
(statearr_80156_80229[(1)] = (32));

} else {
var statearr_80157_80230 = state_80117__$1;
(statearr_80157_80230[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (44))){
var inst_80093 = (state_80117[(21)]);
var inst_80106 = cljs.core.map.call(null,cljs.core.cst$kw$file,inst_80093);
var inst_80107 = cljs.core.pr_str.call(null,inst_80106);
var inst_80108 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_80107)].join('');
var inst_80109 = figwheel.client.utils.log.call(null,inst_80108);
var state_80117__$1 = state_80117;
var statearr_80158_80231 = state_80117__$1;
(statearr_80158_80231[(2)] = inst_80109);

(statearr_80158_80231[(1)] = (46));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (6))){
var inst_80011 = (state_80117[(2)]);
var state_80117__$1 = state_80117;
var statearr_80159_80232 = state_80117__$1;
(statearr_80159_80232[(2)] = inst_80011);

(statearr_80159_80232[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (28))){
var inst_80036 = (state_80117[(26)]);
var inst_80063 = (state_80117[(2)]);
var inst_80064 = cljs.core.not_empty.call(null,inst_80036);
var state_80117__$1 = (function (){var statearr_80160 = state_80117;
(statearr_80160[(29)] = inst_80063);

return statearr_80160;
})();
if(cljs.core.truth_(inst_80064)){
var statearr_80161_80233 = state_80117__$1;
(statearr_80161_80233[(1)] = (29));

} else {
var statearr_80162_80234 = state_80117__$1;
(statearr_80162_80234[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (25))){
var inst_80034 = (state_80117[(23)]);
var inst_80050 = (state_80117[(2)]);
var inst_80051 = cljs.core.not_empty.call(null,inst_80034);
var state_80117__$1 = (function (){var statearr_80163 = state_80117;
(statearr_80163[(30)] = inst_80050);

return statearr_80163;
})();
if(cljs.core.truth_(inst_80051)){
var statearr_80164_80235 = state_80117__$1;
(statearr_80164_80235[(1)] = (26));

} else {
var statearr_80165_80236 = state_80117__$1;
(statearr_80165_80236[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (34))){
var inst_80086 = (state_80117[(2)]);
var state_80117__$1 = state_80117;
if(cljs.core.truth_(inst_80086)){
var statearr_80166_80237 = state_80117__$1;
(statearr_80166_80237[(1)] = (38));

} else {
var statearr_80167_80238 = state_80117__$1;
(statearr_80167_80238[(1)] = (39));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (17))){
var state_80117__$1 = state_80117;
var statearr_80168_80239 = state_80117__$1;
(statearr_80168_80239[(2)] = recompile_dependents);

(statearr_80168_80239[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (3))){
var state_80117__$1 = state_80117;
var statearr_80169_80240 = state_80117__$1;
(statearr_80169_80240[(2)] = null);

(statearr_80169_80240[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (12))){
var inst_80007 = (state_80117[(2)]);
var state_80117__$1 = state_80117;
var statearr_80170_80241 = state_80117__$1;
(statearr_80170_80241[(2)] = inst_80007);

(statearr_80170_80241[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (2))){
var inst_79969 = (state_80117[(13)]);
var inst_79976 = cljs.core.seq.call(null,inst_79969);
var inst_79977 = inst_79976;
var inst_79978 = null;
var inst_79979 = (0);
var inst_79980 = (0);
var state_80117__$1 = (function (){var statearr_80171 = state_80117;
(statearr_80171[(7)] = inst_79979);

(statearr_80171[(8)] = inst_79980);

(statearr_80171[(9)] = inst_79978);

(statearr_80171[(10)] = inst_79977);

return statearr_80171;
})();
var statearr_80172_80242 = state_80117__$1;
(statearr_80172_80242[(2)] = null);

(statearr_80172_80242[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (23))){
var inst_80030 = (state_80117[(19)]);
var inst_80036 = (state_80117[(26)]);
var inst_80034 = (state_80117[(23)]);
var inst_80033 = (state_80117[(24)]);
var inst_80038 = (state_80117[(25)]);
var inst_80041 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: loaded these dependencies");
var inst_80043 = (function (){var all_files = inst_80030;
var res_SINGLEQUOTE_ = inst_80033;
var res = inst_80034;
var files_not_loaded = inst_80036;
var dependencies_that_loaded = inst_80038;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_80030,inst_80036,inst_80034,inst_80033,inst_80038,inst_80041,state_val_80118,c__22961__auto__,map__79962,map__79962__$1,opts,before_jsload,on_jsload,reload_dependents,map__79963,map__79963__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__80042){
var map__80173 = p__80042;
var map__80173__$1 = (((((!((map__80173 == null))))?(((((map__80173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80173):map__80173);
var request_url = cljs.core.get.call(null,map__80173__$1,cljs.core.cst$kw$request_DASH_url);
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_80030,inst_80036,inst_80034,inst_80033,inst_80038,inst_80041,state_val_80118,c__22961__auto__,map__79962,map__79962__$1,opts,before_jsload,on_jsload,reload_dependents,map__79963,map__79963__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_80044 = cljs.core.reverse.call(null,inst_80038);
var inst_80045 = cljs.core.map.call(null,inst_80043,inst_80044);
var inst_80046 = cljs.core.pr_str.call(null,inst_80045);
var inst_80047 = figwheel.client.utils.log.call(null,inst_80046);
var state_80117__$1 = (function (){var statearr_80175 = state_80117;
(statearr_80175[(31)] = inst_80041);

return statearr_80175;
})();
var statearr_80176_80243 = state_80117__$1;
(statearr_80176_80243[(2)] = inst_80047);

(statearr_80176_80243[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (35))){
var state_80117__$1 = state_80117;
var statearr_80177_80244 = state_80117__$1;
(statearr_80177_80244[(2)] = true);

(statearr_80177_80244[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (19))){
var inst_80020 = (state_80117[(12)]);
var inst_80026 = figwheel.client.file_reloading.expand_files.call(null,inst_80020);
var state_80117__$1 = state_80117;
var statearr_80178_80245 = state_80117__$1;
(statearr_80178_80245[(2)] = inst_80026);

(statearr_80178_80245[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (11))){
var state_80117__$1 = state_80117;
var statearr_80179_80246 = state_80117__$1;
(statearr_80179_80246[(2)] = null);

(statearr_80179_80246[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (9))){
var inst_80009 = (state_80117[(2)]);
var state_80117__$1 = state_80117;
var statearr_80180_80247 = state_80117__$1;
(statearr_80180_80247[(2)] = inst_80009);

(statearr_80180_80247[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (5))){
var inst_79979 = (state_80117[(7)]);
var inst_79980 = (state_80117[(8)]);
var inst_79982 = (inst_79980 < inst_79979);
var inst_79983 = inst_79982;
var state_80117__$1 = state_80117;
if(cljs.core.truth_(inst_79983)){
var statearr_80181_80248 = state_80117__$1;
(statearr_80181_80248[(1)] = (7));

} else {
var statearr_80182_80249 = state_80117__$1;
(statearr_80182_80249[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (14))){
var inst_79990 = (state_80117[(22)]);
var inst_79999 = cljs.core.first.call(null,inst_79990);
var inst_80000 = figwheel.client.file_reloading.eval_body.call(null,inst_79999,opts);
var inst_80001 = cljs.core.next.call(null,inst_79990);
var inst_79977 = inst_80001;
var inst_79978 = null;
var inst_79979 = (0);
var inst_79980 = (0);
var state_80117__$1 = (function (){var statearr_80183 = state_80117;
(statearr_80183[(7)] = inst_79979);

(statearr_80183[(8)] = inst_79980);

(statearr_80183[(32)] = inst_80000);

(statearr_80183[(9)] = inst_79978);

(statearr_80183[(10)] = inst_79977);

return statearr_80183;
})();
var statearr_80184_80250 = state_80117__$1;
(statearr_80184_80250[(2)] = null);

(statearr_80184_80250[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (45))){
var state_80117__$1 = state_80117;
var statearr_80185_80251 = state_80117__$1;
(statearr_80185_80251[(2)] = null);

(statearr_80185_80251[(1)] = (46));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (26))){
var inst_80030 = (state_80117[(19)]);
var inst_80036 = (state_80117[(26)]);
var inst_80034 = (state_80117[(23)]);
var inst_80033 = (state_80117[(24)]);
var inst_80038 = (state_80117[(25)]);
var inst_80053 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: loaded these files");
var inst_80055 = (function (){var all_files = inst_80030;
var res_SINGLEQUOTE_ = inst_80033;
var res = inst_80034;
var files_not_loaded = inst_80036;
var dependencies_that_loaded = inst_80038;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_80030,inst_80036,inst_80034,inst_80033,inst_80038,inst_80053,state_val_80118,c__22961__auto__,map__79962,map__79962__$1,opts,before_jsload,on_jsload,reload_dependents,map__79963,map__79963__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__80054){
var map__80186 = p__80054;
var map__80186__$1 = (((((!((map__80186 == null))))?(((((map__80186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80186):map__80186);
var namespace = cljs.core.get.call(null,map__80186__$1,cljs.core.cst$kw$namespace);
var file = cljs.core.get.call(null,map__80186__$1,cljs.core.cst$kw$file);
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_80030,inst_80036,inst_80034,inst_80033,inst_80038,inst_80053,state_val_80118,c__22961__auto__,map__79962,map__79962__$1,opts,before_jsload,on_jsload,reload_dependents,map__79963,map__79963__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_80056 = cljs.core.map.call(null,inst_80055,inst_80034);
var inst_80057 = cljs.core.pr_str.call(null,inst_80056);
var inst_80058 = figwheel.client.utils.log.call(null,inst_80057);
var inst_80059 = (function (){var all_files = inst_80030;
var res_SINGLEQUOTE_ = inst_80033;
var res = inst_80034;
var files_not_loaded = inst_80036;
var dependencies_that_loaded = inst_80038;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_80030,inst_80036,inst_80034,inst_80033,inst_80038,inst_80053,inst_80055,inst_80056,inst_80057,inst_80058,state_val_80118,c__22961__auto__,map__79962,map__79962__$1,opts,before_jsload,on_jsload,reload_dependents,map__79963,map__79963__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_80030,inst_80036,inst_80034,inst_80033,inst_80038,inst_80053,inst_80055,inst_80056,inst_80057,inst_80058,state_val_80118,c__22961__auto__,map__79962,map__79962__$1,opts,before_jsload,on_jsload,reload_dependents,map__79963,map__79963__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_80060 = setTimeout(inst_80059,(10));
var state_80117__$1 = (function (){var statearr_80188 = state_80117;
(statearr_80188[(33)] = inst_80058);

(statearr_80188[(34)] = inst_80053);

return statearr_80188;
})();
var statearr_80189_80252 = state_80117__$1;
(statearr_80189_80252[(2)] = inst_80060);

(statearr_80189_80252[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (16))){
var state_80117__$1 = state_80117;
var statearr_80190_80253 = state_80117__$1;
(statearr_80190_80253[(2)] = reload_dependents);

(statearr_80190_80253[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (38))){
var inst_80070 = (state_80117[(16)]);
var inst_80088 = cljs.core.apply.call(null,cljs.core.hash_map,inst_80070);
var state_80117__$1 = state_80117;
var statearr_80191_80254 = state_80117__$1;
(statearr_80191_80254[(2)] = inst_80088);

(statearr_80191_80254[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (30))){
var state_80117__$1 = state_80117;
var statearr_80192_80255 = state_80117__$1;
(statearr_80192_80255[(2)] = null);

(statearr_80192_80255[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (10))){
var inst_79990 = (state_80117[(22)]);
var inst_79992 = cljs.core.chunked_seq_QMARK_.call(null,inst_79990);
var state_80117__$1 = state_80117;
if(inst_79992){
var statearr_80193_80256 = state_80117__$1;
(statearr_80193_80256[(1)] = (13));

} else {
var statearr_80194_80257 = state_80117__$1;
(statearr_80194_80257[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (18))){
var inst_80024 = (state_80117[(2)]);
var state_80117__$1 = state_80117;
if(cljs.core.truth_(inst_80024)){
var statearr_80195_80258 = state_80117__$1;
(statearr_80195_80258[(1)] = (19));

} else {
var statearr_80196_80259 = state_80117__$1;
(statearr_80196_80259[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (42))){
var state_80117__$1 = state_80117;
var statearr_80197_80260 = state_80117__$1;
(statearr_80197_80260[(2)] = null);

(statearr_80197_80260[(1)] = (43));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (37))){
var inst_80083 = (state_80117[(2)]);
var state_80117__$1 = state_80117;
var statearr_80198_80261 = state_80117__$1;
(statearr_80198_80261[(2)] = inst_80083);

(statearr_80198_80261[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_80118 === (8))){
var inst_79977 = (state_80117[(10)]);
var inst_79990 = (state_80117[(22)]);
var inst_79990__$1 = cljs.core.seq.call(null,inst_79977);
var state_80117__$1 = (function (){var statearr_80199 = state_80117;
(statearr_80199[(22)] = inst_79990__$1);

return statearr_80199;
})();
if(inst_79990__$1){
var statearr_80200_80262 = state_80117__$1;
(statearr_80200_80262[(1)] = (10));

} else {
var statearr_80201_80263 = state_80117__$1;
(statearr_80201_80263[(1)] = (11));

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
});})(c__22961__auto__,map__79962,map__79962__$1,opts,before_jsload,on_jsload,reload_dependents,map__79963,map__79963__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22938__auto__,c__22961__auto__,map__79962,map__79962__$1,opts,before_jsload,on_jsload,reload_dependents,map__79963,map__79963__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____0 = (function (){
var statearr_80202 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80202[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__);

(statearr_80202[(1)] = (1));

return statearr_80202;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____1 = (function (state_80117){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_80117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e80203){if((e80203 instanceof Object)){
var ex__22942__auto__ = e80203;
var statearr_80204_80264 = state_80117;
(statearr_80204_80264[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80117);

return cljs.core.cst$kw$recur;
} else {
throw e80203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__80265 = state_80117;
state_80117 = G__80265;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__ = function(state_80117){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____1.call(this,state_80117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__,map__79962,map__79962__$1,opts,before_jsload,on_jsload,reload_dependents,map__79963,map__79963__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22963__auto__ = (function (){var statearr_80205 = f__22962__auto__.call(null);
(statearr_80205[(6)] = c__22961__auto__);

return statearr_80205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto__,map__79962,map__79962__$1,opts,before_jsload,on_jsload,reload_dependents,map__79963,map__79963__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22961__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__80268,link){
var map__80269 = p__80268;
var map__80269__$1 = (((((!((map__80269 == null))))?(((((map__80269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80269):map__80269);
var file = cljs.core.get.call(null,map__80269__$1,cljs.core.cst$kw$file);
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__80269,map__80269__$1,file){
return (function (p1__80266_SHARP_,p2__80267_SHARP_){
if(cljs.core._EQ_.call(null,p1__80266_SHARP_,p2__80267_SHARP_)){
return p1__80266_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__80269,map__80269__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__80272){
var map__80273 = p__80272;
var map__80273__$1 = (((((!((map__80273 == null))))?(((((map__80273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80273):map__80273);
var match_length = cljs.core.get.call(null,map__80273__$1,cljs.core.cst$kw$match_DASH_length);
var current_url_length = cljs.core.get.call(null,map__80273__$1,cljs.core.cst$kw$current_DASH_url_DASH_length);
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__80271_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__80271_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__80275_SHARP_,p2__80276_SHARP_){
return cljs.core.assoc.call(null,p1__80275_SHARP_,cljs.core.get.call(null,p2__80276_SHARP_,key),p2__80276_SHARP_);
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
var loaded_f_datas_80277 = cljs.core.filter.call(null,cljs.core.cst$kw$loaded,f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_80277);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_80277);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__80278,p__80279){
var map__80280 = p__80278;
var map__80280__$1 = (((((!((map__80280 == null))))?(((((map__80280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80280):map__80280);
var on_cssload = cljs.core.get.call(null,map__80280__$1,cljs.core.cst$kw$on_DASH_cssload);
var map__80281 = p__80279;
var map__80281__$1 = (((((!((map__80281 == null))))?(((((map__80281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80281):map__80281);
var files_msg = map__80281__$1;
var files = cljs.core.get.call(null,map__80281__$1,cljs.core.cst$kw$files);
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

//# sourceMappingURL=file_reloading.js.map?rel=1545392134122
