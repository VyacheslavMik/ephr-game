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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__40945_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__40945_SHARP_));
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
var seq__40946 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__40947 = null;
var count__40948 = (0);
var i__40949 = (0);
while(true){
if((i__40949 < count__40948)){
var n = cljs.core._nth.call(null,chunk__40947,i__40949);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__40950 = seq__40946;
var G__40951 = chunk__40947;
var G__40952 = count__40948;
var G__40953 = (i__40949 + (1));
seq__40946 = G__40950;
chunk__40947 = G__40951;
count__40948 = G__40952;
i__40949 = G__40953;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__40946);
if(temp__5457__auto__){
var seq__40946__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40946__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__40946__$1);
var G__40954 = cljs.core.chunk_rest.call(null,seq__40946__$1);
var G__40955 = c__4461__auto__;
var G__40956 = cljs.core.count.call(null,c__4461__auto__);
var G__40957 = (0);
seq__40946 = G__40954;
chunk__40947 = G__40955;
count__40948 = G__40956;
i__40949 = G__40957;
continue;
} else {
var n = cljs.core.first.call(null,seq__40946__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__40958 = cljs.core.next.call(null,seq__40946__$1);
var G__40959 = null;
var G__40960 = (0);
var G__40961 = (0);
seq__40946 = G__40958;
chunk__40947 = G__40959;
count__40948 = G__40960;
i__40949 = G__40961;
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
return cljs.core.some.call(null,(function (p__40962){
var vec__40963 = p__40962;
var _ = cljs.core.nth.call(null,vec__40963,(0),null);
var v = cljs.core.nth.call(null,vec__40963,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__40966){
var vec__40967 = p__40966;
var k = cljs.core.nth.call(null,vec__40967,(0),null);
var v = cljs.core.nth.call(null,vec__40967,(1),null);
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

var seq__40979_40987 = cljs.core.seq.call(null,deps);
var chunk__40980_40988 = null;
var count__40981_40989 = (0);
var i__40982_40990 = (0);
while(true){
if((i__40982_40990 < count__40981_40989)){
var dep_40991 = cljs.core._nth.call(null,chunk__40980_40988,i__40982_40990);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_40991;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_40991));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_40991,(depth + (1)),state);
} else {
}


var G__40992 = seq__40979_40987;
var G__40993 = chunk__40980_40988;
var G__40994 = count__40981_40989;
var G__40995 = (i__40982_40990 + (1));
seq__40979_40987 = G__40992;
chunk__40980_40988 = G__40993;
count__40981_40989 = G__40994;
i__40982_40990 = G__40995;
continue;
} else {
var temp__5457__auto___40996 = cljs.core.seq.call(null,seq__40979_40987);
if(temp__5457__auto___40996){
var seq__40979_40997__$1 = temp__5457__auto___40996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40979_40997__$1)){
var c__4461__auto___40998 = cljs.core.chunk_first.call(null,seq__40979_40997__$1);
var G__40999 = cljs.core.chunk_rest.call(null,seq__40979_40997__$1);
var G__41000 = c__4461__auto___40998;
var G__41001 = cljs.core.count.call(null,c__4461__auto___40998);
var G__41002 = (0);
seq__40979_40987 = G__40999;
chunk__40980_40988 = G__41000;
count__40981_40989 = G__41001;
i__40982_40990 = G__41002;
continue;
} else {
var dep_41003 = cljs.core.first.call(null,seq__40979_40997__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_41003;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_41003));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_41003,(depth + (1)),state);
} else {
}


var G__41004 = cljs.core.next.call(null,seq__40979_40997__$1);
var G__41005 = null;
var G__41006 = (0);
var G__41007 = (0);
seq__40979_40987 = G__41004;
chunk__40980_40988 = G__41005;
count__40981_40989 = G__41006;
i__40982_40990 = G__41007;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__40983){
var vec__40984 = p__40983;
var seq__40985 = cljs.core.seq.call(null,vec__40984);
var first__40986 = cljs.core.first.call(null,seq__40985);
var seq__40985__$1 = cljs.core.next.call(null,seq__40985);
var x = first__40986;
var xs = seq__40985__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__40984,seq__40985,first__40986,seq__40985__$1,x,xs,get_deps__$1){
return (function (p1__40970_SHARP_){
return clojure.set.difference.call(null,p1__40970_SHARP_,x);
});})(vec__40984,seq__40985,first__40986,seq__40985__$1,x,xs,get_deps__$1))
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
var seq__41008 = cljs.core.seq.call(null,provides);
var chunk__41009 = null;
var count__41010 = (0);
var i__41011 = (0);
while(true){
if((i__41011 < count__41010)){
var prov = cljs.core._nth.call(null,chunk__41009,i__41011);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41012_41020 = cljs.core.seq.call(null,requires);
var chunk__41013_41021 = null;
var count__41014_41022 = (0);
var i__41015_41023 = (0);
while(true){
if((i__41015_41023 < count__41014_41022)){
var req_41024 = cljs.core._nth.call(null,chunk__41013_41021,i__41015_41023);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41024,prov);


var G__41025 = seq__41012_41020;
var G__41026 = chunk__41013_41021;
var G__41027 = count__41014_41022;
var G__41028 = (i__41015_41023 + (1));
seq__41012_41020 = G__41025;
chunk__41013_41021 = G__41026;
count__41014_41022 = G__41027;
i__41015_41023 = G__41028;
continue;
} else {
var temp__5457__auto___41029 = cljs.core.seq.call(null,seq__41012_41020);
if(temp__5457__auto___41029){
var seq__41012_41030__$1 = temp__5457__auto___41029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41012_41030__$1)){
var c__4461__auto___41031 = cljs.core.chunk_first.call(null,seq__41012_41030__$1);
var G__41032 = cljs.core.chunk_rest.call(null,seq__41012_41030__$1);
var G__41033 = c__4461__auto___41031;
var G__41034 = cljs.core.count.call(null,c__4461__auto___41031);
var G__41035 = (0);
seq__41012_41020 = G__41032;
chunk__41013_41021 = G__41033;
count__41014_41022 = G__41034;
i__41015_41023 = G__41035;
continue;
} else {
var req_41036 = cljs.core.first.call(null,seq__41012_41030__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41036,prov);


var G__41037 = cljs.core.next.call(null,seq__41012_41030__$1);
var G__41038 = null;
var G__41039 = (0);
var G__41040 = (0);
seq__41012_41020 = G__41037;
chunk__41013_41021 = G__41038;
count__41014_41022 = G__41039;
i__41015_41023 = G__41040;
continue;
}
} else {
}
}
break;
}


var G__41041 = seq__41008;
var G__41042 = chunk__41009;
var G__41043 = count__41010;
var G__41044 = (i__41011 + (1));
seq__41008 = G__41041;
chunk__41009 = G__41042;
count__41010 = G__41043;
i__41011 = G__41044;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41008);
if(temp__5457__auto__){
var seq__41008__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41008__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__41008__$1);
var G__41045 = cljs.core.chunk_rest.call(null,seq__41008__$1);
var G__41046 = c__4461__auto__;
var G__41047 = cljs.core.count.call(null,c__4461__auto__);
var G__41048 = (0);
seq__41008 = G__41045;
chunk__41009 = G__41046;
count__41010 = G__41047;
i__41011 = G__41048;
continue;
} else {
var prov = cljs.core.first.call(null,seq__41008__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41016_41049 = cljs.core.seq.call(null,requires);
var chunk__41017_41050 = null;
var count__41018_41051 = (0);
var i__41019_41052 = (0);
while(true){
if((i__41019_41052 < count__41018_41051)){
var req_41053 = cljs.core._nth.call(null,chunk__41017_41050,i__41019_41052);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41053,prov);


var G__41054 = seq__41016_41049;
var G__41055 = chunk__41017_41050;
var G__41056 = count__41018_41051;
var G__41057 = (i__41019_41052 + (1));
seq__41016_41049 = G__41054;
chunk__41017_41050 = G__41055;
count__41018_41051 = G__41056;
i__41019_41052 = G__41057;
continue;
} else {
var temp__5457__auto___41058__$1 = cljs.core.seq.call(null,seq__41016_41049);
if(temp__5457__auto___41058__$1){
var seq__41016_41059__$1 = temp__5457__auto___41058__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41016_41059__$1)){
var c__4461__auto___41060 = cljs.core.chunk_first.call(null,seq__41016_41059__$1);
var G__41061 = cljs.core.chunk_rest.call(null,seq__41016_41059__$1);
var G__41062 = c__4461__auto___41060;
var G__41063 = cljs.core.count.call(null,c__4461__auto___41060);
var G__41064 = (0);
seq__41016_41049 = G__41061;
chunk__41017_41050 = G__41062;
count__41018_41051 = G__41063;
i__41019_41052 = G__41064;
continue;
} else {
var req_41065 = cljs.core.first.call(null,seq__41016_41059__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41065,prov);


var G__41066 = cljs.core.next.call(null,seq__41016_41059__$1);
var G__41067 = null;
var G__41068 = (0);
var G__41069 = (0);
seq__41016_41049 = G__41066;
chunk__41017_41050 = G__41067;
count__41018_41051 = G__41068;
i__41019_41052 = G__41069;
continue;
}
} else {
}
}
break;
}


var G__41070 = cljs.core.next.call(null,seq__41008__$1);
var G__41071 = null;
var G__41072 = (0);
var G__41073 = (0);
seq__41008 = G__41070;
chunk__41009 = G__41071;
count__41010 = G__41072;
i__41011 = G__41073;
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
var seq__41074_41078 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__41075_41079 = null;
var count__41076_41080 = (0);
var i__41077_41081 = (0);
while(true){
if((i__41077_41081 < count__41076_41080)){
var ns_41082 = cljs.core._nth.call(null,chunk__41075_41079,i__41077_41081);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41082);


var G__41083 = seq__41074_41078;
var G__41084 = chunk__41075_41079;
var G__41085 = count__41076_41080;
var G__41086 = (i__41077_41081 + (1));
seq__41074_41078 = G__41083;
chunk__41075_41079 = G__41084;
count__41076_41080 = G__41085;
i__41077_41081 = G__41086;
continue;
} else {
var temp__5457__auto___41087 = cljs.core.seq.call(null,seq__41074_41078);
if(temp__5457__auto___41087){
var seq__41074_41088__$1 = temp__5457__auto___41087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41074_41088__$1)){
var c__4461__auto___41089 = cljs.core.chunk_first.call(null,seq__41074_41088__$1);
var G__41090 = cljs.core.chunk_rest.call(null,seq__41074_41088__$1);
var G__41091 = c__4461__auto___41089;
var G__41092 = cljs.core.count.call(null,c__4461__auto___41089);
var G__41093 = (0);
seq__41074_41078 = G__41090;
chunk__41075_41079 = G__41091;
count__41076_41080 = G__41092;
i__41077_41081 = G__41093;
continue;
} else {
var ns_41094 = cljs.core.first.call(null,seq__41074_41088__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41094);


var G__41095 = cljs.core.next.call(null,seq__41074_41088__$1);
var G__41096 = null;
var G__41097 = (0);
var G__41098 = (0);
seq__41074_41078 = G__41095;
chunk__41075_41079 = G__41096;
count__41076_41080 = G__41097;
i__41077_41081 = G__41098;
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
var G__41099__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__41099 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41100__i = 0, G__41100__a = new Array(arguments.length -  0);
while (G__41100__i < G__41100__a.length) {G__41100__a[G__41100__i] = arguments[G__41100__i + 0]; ++G__41100__i;}
  args = new cljs.core.IndexedSeq(G__41100__a,0,null);
} 
return G__41099__delegate.call(this,args);};
G__41099.cljs$lang$maxFixedArity = 0;
G__41099.cljs$lang$applyTo = (function (arglist__41101){
var args = cljs.core.seq(arglist__41101);
return G__41099__delegate(args);
});
G__41099.cljs$core$IFn$_invoke$arity$variadic = G__41099__delegate;
return G__41099;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__41102_SHARP_,p2__41103_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41102_SHARP_)),p2__41103_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__41104_SHARP_,p2__41105_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41104_SHARP_),p2__41105_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__41106 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__41106.addCallback(((function (G__41106){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__41106))
);

G__41106.addErrback(((function (G__41106){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__41106))
);

return G__41106;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e41107){if((e41107 instanceof Error)){
var e = e41107;
figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,e.stack);

return false;
} else {
throw e41107;

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
}catch (e41108){if((e41108 instanceof Error)){
var e = e41108;
figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,e.stack);

return false;
} else {
throw e41108;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__41109 = cljs.core._EQ_;
var expr__41110 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__41109.call(null,cljs.core.cst$kw$node,expr__41110))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__41109.call(null,cljs.core.cst$kw$html,expr__41110))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__41109.call(null,cljs.core.cst$kw$worker,expr__41110))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__41109,expr__41110){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__41109,expr__41110))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__41112,callback){
var map__41113 = p__41112;
var map__41113__$1 = (((((!((map__41113 == null))))?(((((map__41113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41113):map__41113);
var file_msg = map__41113__$1;
var request_url = cljs.core.get.call(null,map__41113__$1,cljs.core.cst$kw$request_DASH_url);

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__41113,map__41113__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,cljs.core.cst$kw$loaded_DASH_file,true)], null));
} else {
figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__41113,map__41113__$1,file_msg,request_url))
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
return (function (state_41151){
var state_val_41152 = (state_41151[(1)]);
if((state_val_41152 === (7))){
var inst_41147 = (state_41151[(2)]);
var state_41151__$1 = state_41151;
var statearr_41153_41179 = state_41151__$1;
(statearr_41153_41179[(2)] = inst_41147);

(statearr_41153_41179[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41152 === (1))){
var state_41151__$1 = state_41151;
var statearr_41154_41180 = state_41151__$1;
(statearr_41154_41180[(2)] = null);

(statearr_41154_41180[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41152 === (4))){
var inst_41117 = (state_41151[(7)]);
var inst_41117__$1 = (state_41151[(2)]);
var state_41151__$1 = (function (){var statearr_41155 = state_41151;
(statearr_41155[(7)] = inst_41117__$1);

return statearr_41155;
})();
if(cljs.core.truth_(inst_41117__$1)){
var statearr_41156_41181 = state_41151__$1;
(statearr_41156_41181[(1)] = (5));

} else {
var statearr_41157_41182 = state_41151__$1;
(statearr_41157_41182[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41152 === (15))){
var inst_41132 = (state_41151[(8)]);
var inst_41130 = (state_41151[(9)]);
var inst_41134 = inst_41132.call(null,inst_41130);
var state_41151__$1 = state_41151;
var statearr_41158_41183 = state_41151__$1;
(statearr_41158_41183[(2)] = inst_41134);

(statearr_41158_41183[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41152 === (13))){
var inst_41141 = (state_41151[(2)]);
var state_41151__$1 = state_41151;
var statearr_41159_41184 = state_41151__$1;
(statearr_41159_41184[(2)] = inst_41141);

(statearr_41159_41184[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41152 === (6))){
var state_41151__$1 = state_41151;
var statearr_41160_41185 = state_41151__$1;
(statearr_41160_41185[(2)] = null);

(statearr_41160_41185[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41152 === (17))){
var inst_41138 = (state_41151[(2)]);
var state_41151__$1 = state_41151;
var statearr_41161_41186 = state_41151__$1;
(statearr_41161_41186[(2)] = inst_41138);

(statearr_41161_41186[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41152 === (3))){
var inst_41149 = (state_41151[(2)]);
var state_41151__$1 = state_41151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41151__$1,inst_41149);
} else {
if((state_val_41152 === (12))){
var state_41151__$1 = state_41151;
var statearr_41162_41187 = state_41151__$1;
(statearr_41162_41187[(2)] = null);

(statearr_41162_41187[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41152 === (2))){
var state_41151__$1 = state_41151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41151__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_41152 === (11))){
var inst_41122 = (state_41151[(10)]);
var inst_41128 = figwheel.client.file_reloading.blocking_load.call(null,inst_41122);
var state_41151__$1 = state_41151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41151__$1,(14),inst_41128);
} else {
if((state_val_41152 === (9))){
var inst_41122 = (state_41151[(10)]);
var state_41151__$1 = state_41151;
if(cljs.core.truth_(inst_41122)){
var statearr_41163_41188 = state_41151__$1;
(statearr_41163_41188[(1)] = (11));

} else {
var statearr_41164_41189 = state_41151__$1;
(statearr_41164_41189[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41152 === (5))){
var inst_41117 = (state_41151[(7)]);
var inst_41123 = (state_41151[(11)]);
var inst_41122 = cljs.core.nth.call(null,inst_41117,(0),null);
var inst_41123__$1 = cljs.core.nth.call(null,inst_41117,(1),null);
var state_41151__$1 = (function (){var statearr_41165 = state_41151;
(statearr_41165[(10)] = inst_41122);

(statearr_41165[(11)] = inst_41123__$1);

return statearr_41165;
})();
if(cljs.core.truth_(inst_41123__$1)){
var statearr_41166_41190 = state_41151__$1;
(statearr_41166_41190[(1)] = (8));

} else {
var statearr_41167_41191 = state_41151__$1;
(statearr_41167_41191[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41152 === (14))){
var inst_41122 = (state_41151[(10)]);
var inst_41132 = (state_41151[(8)]);
var inst_41130 = (state_41151[(2)]);
var inst_41131 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_41132__$1 = cljs.core.get.call(null,inst_41131,inst_41122);
var state_41151__$1 = (function (){var statearr_41168 = state_41151;
(statearr_41168[(8)] = inst_41132__$1);

(statearr_41168[(9)] = inst_41130);

return statearr_41168;
})();
if(cljs.core.truth_(inst_41132__$1)){
var statearr_41169_41192 = state_41151__$1;
(statearr_41169_41192[(1)] = (15));

} else {
var statearr_41170_41193 = state_41151__$1;
(statearr_41170_41193[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41152 === (16))){
var inst_41130 = (state_41151[(9)]);
var inst_41136 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_41130);
var state_41151__$1 = state_41151;
var statearr_41171_41194 = state_41151__$1;
(statearr_41171_41194[(2)] = inst_41136);

(statearr_41171_41194[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41152 === (10))){
var inst_41143 = (state_41151[(2)]);
var state_41151__$1 = (function (){var statearr_41172 = state_41151;
(statearr_41172[(12)] = inst_41143);

return statearr_41172;
})();
var statearr_41173_41195 = state_41151__$1;
(statearr_41173_41195[(2)] = null);

(statearr_41173_41195[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41152 === (8))){
var inst_41123 = (state_41151[(11)]);
var inst_41125 = eval(inst_41123);
var state_41151__$1 = state_41151;
var statearr_41174_41196 = state_41151__$1;
(statearr_41174_41196[(2)] = inst_41125);

(statearr_41174_41196[(1)] = (10));


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
var statearr_41175 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41175[(0)] = figwheel$client$file_reloading$state_machine__22939__auto__);

(statearr_41175[(1)] = (1));

return statearr_41175;
});
var figwheel$client$file_reloading$state_machine__22939__auto____1 = (function (state_41151){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_41151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e41176){if((e41176 instanceof Object)){
var ex__22942__auto__ = e41176;
var statearr_41177_41197 = state_41151;
(statearr_41177_41197[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41151);

return cljs.core.cst$kw$recur;
} else {
throw e41176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__41198 = state_41151;
state_41151 = G__41198;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22939__auto__ = function(state_41151){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22939__auto____1.call(this,state_41151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22939__auto____0;
figwheel$client$file_reloading$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22939__auto____1;
return figwheel$client$file_reloading$state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__))
})();
var state__22963__auto__ = (function (){var statearr_41178 = f__22962__auto__.call(null);
(statearr_41178[(6)] = c__22961__auto__);

return statearr_41178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto__))
);

return c__22961__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__41200 = arguments.length;
switch (G__41200) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__41202,callback){
var map__41203 = p__41202;
var map__41203__$1 = (((((!((map__41203 == null))))?(((((map__41203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41203):map__41203);
var file_msg = map__41203__$1;
var namespace = cljs.core.get.call(null,map__41203__$1,cljs.core.cst$kw$namespace);
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__41203,map__41203__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loaded_DASH_file], null)))], null));
});})(request_url,map__41203,map__41203__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__41205){
var map__41206 = p__41205;
var map__41206__$1 = (((((!((map__41206 == null))))?(((((map__41206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41206):map__41206);
var file_msg = map__41206__$1;
var namespace = cljs.core.get.call(null,map__41206__$1,cljs.core.cst$kw$namespace);
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return cljs.core.cst$kw$figwheel_DASH_no_DASH_load.cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__41208){
var map__41209 = p__41208;
var map__41209__$1 = (((((!((map__41209 == null))))?(((((map__41209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41209):map__41209);
var file_msg = map__41209__$1;
var namespace = cljs.core.get.call(null,map__41209__$1,cljs.core.cst$kw$namespace);

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__41211,callback){
var map__41212 = p__41211;
var map__41212__$1 = (((((!((map__41212 == null))))?(((((map__41212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41212):map__41212);
var file_msg = map__41212__$1;
var request_url = cljs.core.get.call(null,map__41212__$1,cljs.core.cst$kw$request_DASH_url);
var namespace = cljs.core.get.call(null,map__41212__$1,cljs.core.cst$kw$namespace);

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
var c__22961__auto___41262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22961__auto___41262,out){
return (function (){
var f__22962__auto__ = (function (){var switch__22938__auto__ = ((function (c__22961__auto___41262,out){
return (function (state_41247){
var state_val_41248 = (state_41247[(1)]);
if((state_val_41248 === (1))){
var inst_41221 = cljs.core.seq.call(null,files);
var inst_41222 = cljs.core.first.call(null,inst_41221);
var inst_41223 = cljs.core.next.call(null,inst_41221);
var inst_41224 = files;
var state_41247__$1 = (function (){var statearr_41249 = state_41247;
(statearr_41249[(7)] = inst_41224);

(statearr_41249[(8)] = inst_41223);

(statearr_41249[(9)] = inst_41222);

return statearr_41249;
})();
var statearr_41250_41263 = state_41247__$1;
(statearr_41250_41263[(2)] = null);

(statearr_41250_41263[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41248 === (2))){
var inst_41224 = (state_41247[(7)]);
var inst_41230 = (state_41247[(10)]);
var inst_41229 = cljs.core.seq.call(null,inst_41224);
var inst_41230__$1 = cljs.core.first.call(null,inst_41229);
var inst_41231 = cljs.core.next.call(null,inst_41229);
var inst_41232 = (inst_41230__$1 == null);
var inst_41233 = cljs.core.not.call(null,inst_41232);
var state_41247__$1 = (function (){var statearr_41251 = state_41247;
(statearr_41251[(11)] = inst_41231);

(statearr_41251[(10)] = inst_41230__$1);

return statearr_41251;
})();
if(inst_41233){
var statearr_41252_41264 = state_41247__$1;
(statearr_41252_41264[(1)] = (4));

} else {
var statearr_41253_41265 = state_41247__$1;
(statearr_41253_41265[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41248 === (3))){
var inst_41245 = (state_41247[(2)]);
var state_41247__$1 = state_41247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41247__$1,inst_41245);
} else {
if((state_val_41248 === (4))){
var inst_41230 = (state_41247[(10)]);
var inst_41235 = figwheel.client.file_reloading.reload_js_file.call(null,inst_41230);
var state_41247__$1 = state_41247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41247__$1,(7),inst_41235);
} else {
if((state_val_41248 === (5))){
var inst_41241 = cljs.core.async.close_BANG_.call(null,out);
var state_41247__$1 = state_41247;
var statearr_41254_41266 = state_41247__$1;
(statearr_41254_41266[(2)] = inst_41241);

(statearr_41254_41266[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41248 === (6))){
var inst_41243 = (state_41247[(2)]);
var state_41247__$1 = state_41247;
var statearr_41255_41267 = state_41247__$1;
(statearr_41255_41267[(2)] = inst_41243);

(statearr_41255_41267[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41248 === (7))){
var inst_41231 = (state_41247[(11)]);
var inst_41237 = (state_41247[(2)]);
var inst_41238 = cljs.core.async.put_BANG_.call(null,out,inst_41237);
var inst_41224 = inst_41231;
var state_41247__$1 = (function (){var statearr_41256 = state_41247;
(statearr_41256[(7)] = inst_41224);

(statearr_41256[(12)] = inst_41238);

return statearr_41256;
})();
var statearr_41257_41268 = state_41247__$1;
(statearr_41257_41268[(2)] = null);

(statearr_41257_41268[(1)] = (2));


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
});})(c__22961__auto___41262,out))
;
return ((function (switch__22938__auto__,c__22961__auto___41262,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____0 = (function (){
var statearr_41258 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41258[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__);

(statearr_41258[(1)] = (1));

return statearr_41258;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____1 = (function (state_41247){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_41247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e41259){if((e41259 instanceof Object)){
var ex__22942__auto__ = e41259;
var statearr_41260_41269 = state_41247;
(statearr_41260_41269[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41247);

return cljs.core.cst$kw$recur;
} else {
throw e41259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__41270 = state_41247;
state_41247 = G__41270;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__ = function(state_41247){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____1.call(this,state_41247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto___41262,out))
})();
var state__22963__auto__ = (function (){var statearr_41261 = f__22962__auto__.call(null);
(statearr_41261[(6)] = c__22961__auto___41262);

return statearr_41261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto___41262,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__41271,opts){
var map__41272 = p__41271;
var map__41272__$1 = (((((!((map__41272 == null))))?(((((map__41272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41272):map__41272);
var eval_body = cljs.core.get.call(null,map__41272__$1,cljs.core.cst$kw$eval_DASH_body);
var file = cljs.core.get.call(null,map__41272__$1,cljs.core.cst$kw$file);
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
}catch (e41274){var e = e41274;
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
return (function (p1__41275_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$namespace.cljs$core$IFn$_invoke$arity$1(p1__41275_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__41276){
var vec__41277 = p__41276;
var k = cljs.core.nth.call(null,vec__41277,(0),null);
var v = cljs.core.nth.call(null,vec__41277,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$namespace,k,cljs.core.cst$kw$type,cljs.core.cst$kw$namespace], null);
}),cljs.core.filter.call(null,(function (p__41280){
var vec__41281 = p__41280;
var k = cljs.core.nth.call(null,vec__41281,(0),null);
var v = cljs.core.nth.call(null,vec__41281,(1),null);
return cljs.core.cst$kw$figwheel_DASH_always.cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__41287,p__41288){
var map__41289 = p__41287;
var map__41289__$1 = (((((!((map__41289 == null))))?(((((map__41289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41289):map__41289);
var opts = map__41289__$1;
var before_jsload = cljs.core.get.call(null,map__41289__$1,cljs.core.cst$kw$before_DASH_jsload);
var on_jsload = cljs.core.get.call(null,map__41289__$1,cljs.core.cst$kw$on_DASH_jsload);
var reload_dependents = cljs.core.get.call(null,map__41289__$1,cljs.core.cst$kw$reload_DASH_dependents);
var map__41290 = p__41288;
var map__41290__$1 = (((((!((map__41290 == null))))?(((((map__41290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41290):map__41290);
var msg = map__41290__$1;
var files = cljs.core.get.call(null,map__41290__$1,cljs.core.cst$kw$files);
var figwheel_meta = cljs.core.get.call(null,map__41290__$1,cljs.core.cst$kw$figwheel_DASH_meta);
var recompile_dependents = cljs.core.get.call(null,map__41290__$1,cljs.core.cst$kw$recompile_DASH_dependents);
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22961__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22961__auto__,map__41289,map__41289__$1,opts,before_jsload,on_jsload,reload_dependents,map__41290,map__41290__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22962__auto__ = (function (){var switch__22938__auto__ = ((function (c__22961__auto__,map__41289,map__41289__$1,opts,before_jsload,on_jsload,reload_dependents,map__41290,map__41290__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_41444){
var state_val_41445 = (state_41444[(1)]);
if((state_val_41445 === (7))){
var inst_41305 = (state_41444[(7)]);
var inst_41304 = (state_41444[(8)]);
var inst_41307 = (state_41444[(9)]);
var inst_41306 = (state_41444[(10)]);
var inst_41312 = cljs.core._nth.call(null,inst_41305,inst_41307);
var inst_41313 = figwheel.client.file_reloading.eval_body.call(null,inst_41312,opts);
var inst_41314 = (inst_41307 + (1));
var tmp41446 = inst_41305;
var tmp41447 = inst_41304;
var tmp41448 = inst_41306;
var inst_41304__$1 = tmp41447;
var inst_41305__$1 = tmp41446;
var inst_41306__$1 = tmp41448;
var inst_41307__$1 = inst_41314;
var state_41444__$1 = (function (){var statearr_41449 = state_41444;
(statearr_41449[(7)] = inst_41305__$1);

(statearr_41449[(8)] = inst_41304__$1);

(statearr_41449[(9)] = inst_41307__$1);

(statearr_41449[(10)] = inst_41306__$1);

(statearr_41449[(11)] = inst_41313);

return statearr_41449;
})();
var statearr_41450_41533 = state_41444__$1;
(statearr_41450_41533[(2)] = null);

(statearr_41450_41533[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (20))){
var inst_41347 = (state_41444[(12)]);
var inst_41355 = figwheel.client.file_reloading.sort_files.call(null,inst_41347);
var state_41444__$1 = state_41444;
var statearr_41451_41534 = state_41444__$1;
(statearr_41451_41534[(2)] = inst_41355);

(statearr_41451_41534[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (27))){
var state_41444__$1 = state_41444;
var statearr_41452_41535 = state_41444__$1;
(statearr_41452_41535[(2)] = null);

(statearr_41452_41535[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (1))){
var inst_41296 = (state_41444[(13)]);
var inst_41293 = before_jsload.call(null,files);
var inst_41294 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_41295 = (function (){return ((function (inst_41296,inst_41293,inst_41294,state_val_41445,c__22961__auto__,map__41289,map__41289__$1,opts,before_jsload,on_jsload,reload_dependents,map__41290,map__41290__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41284_SHARP_){
return cljs.core.cst$kw$eval_DASH_body.cljs$core$IFn$_invoke$arity$1(p1__41284_SHARP_);
});
;})(inst_41296,inst_41293,inst_41294,state_val_41445,c__22961__auto__,map__41289,map__41289__$1,opts,before_jsload,on_jsload,reload_dependents,map__41290,map__41290__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41296__$1 = cljs.core.filter.call(null,inst_41295,files);
var inst_41297 = cljs.core.not_empty.call(null,inst_41296__$1);
var state_41444__$1 = (function (){var statearr_41453 = state_41444;
(statearr_41453[(14)] = inst_41293);

(statearr_41453[(13)] = inst_41296__$1);

(statearr_41453[(15)] = inst_41294);

return statearr_41453;
})();
if(cljs.core.truth_(inst_41297)){
var statearr_41454_41536 = state_41444__$1;
(statearr_41454_41536[(1)] = (2));

} else {
var statearr_41455_41537 = state_41444__$1;
(statearr_41455_41537[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (24))){
var state_41444__$1 = state_41444;
var statearr_41456_41538 = state_41444__$1;
(statearr_41456_41538[(2)] = null);

(statearr_41456_41538[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (39))){
var inst_41397 = (state_41444[(16)]);
var state_41444__$1 = state_41444;
var statearr_41457_41539 = state_41444__$1;
(statearr_41457_41539[(2)] = inst_41397);

(statearr_41457_41539[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (46))){
var inst_41439 = (state_41444[(2)]);
var state_41444__$1 = state_41444;
var statearr_41458_41540 = state_41444__$1;
(statearr_41458_41540[(2)] = inst_41439);

(statearr_41458_41540[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (4))){
var inst_41341 = (state_41444[(2)]);
var inst_41342 = cljs.core.List.EMPTY;
var inst_41343 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_41342);
var inst_41344 = (function (){return ((function (inst_41341,inst_41342,inst_41343,state_val_41445,c__22961__auto__,map__41289,map__41289__$1,opts,before_jsload,on_jsload,reload_dependents,map__41290,map__41290__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41285_SHARP_){
var and__4036__auto__ = cljs.core.cst$kw$namespace.cljs$core$IFn$_invoke$arity$1(p1__41285_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,cljs.core.cst$kw$eval_DASH_body.cljs$core$IFn$_invoke$arity$1(p1__41285_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__41285_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_41341,inst_41342,inst_41343,state_val_41445,c__22961__auto__,map__41289,map__41289__$1,opts,before_jsload,on_jsload,reload_dependents,map__41290,map__41290__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41345 = cljs.core.filter.call(null,inst_41344,files);
var inst_41346 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_41347 = cljs.core.concat.call(null,inst_41345,inst_41346);
var state_41444__$1 = (function (){var statearr_41459 = state_41444;
(statearr_41459[(17)] = inst_41341);

(statearr_41459[(12)] = inst_41347);

(statearr_41459[(18)] = inst_41343);

return statearr_41459;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41460_41541 = state_41444__$1;
(statearr_41460_41541[(1)] = (16));

} else {
var statearr_41461_41542 = state_41444__$1;
(statearr_41461_41542[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (15))){
var inst_41331 = (state_41444[(2)]);
var state_41444__$1 = state_41444;
var statearr_41462_41543 = state_41444__$1;
(statearr_41462_41543[(2)] = inst_41331);

(statearr_41462_41543[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (21))){
var inst_41357 = (state_41444[(19)]);
var inst_41357__$1 = (state_41444[(2)]);
var inst_41358 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41357__$1);
var state_41444__$1 = (function (){var statearr_41463 = state_41444;
(statearr_41463[(19)] = inst_41357__$1);

return statearr_41463;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41444__$1,(22),inst_41358);
} else {
if((state_val_41445 === (31))){
var inst_41442 = (state_41444[(2)]);
var state_41444__$1 = state_41444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41444__$1,inst_41442);
} else {
if((state_val_41445 === (32))){
var inst_41397 = (state_41444[(16)]);
var inst_41402 = inst_41397.cljs$lang$protocol_mask$partition0$;
var inst_41403 = (inst_41402 & (64));
var inst_41404 = inst_41397.cljs$core$ISeq$;
var inst_41405 = (cljs.core.PROTOCOL_SENTINEL === inst_41404);
var inst_41406 = ((inst_41403) || (inst_41405));
var state_41444__$1 = state_41444;
if(cljs.core.truth_(inst_41406)){
var statearr_41464_41544 = state_41444__$1;
(statearr_41464_41544[(1)] = (35));

} else {
var statearr_41465_41545 = state_41444__$1;
(statearr_41465_41545[(1)] = (36));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (40))){
var inst_41419 = (state_41444[(20)]);
var inst_41418 = (state_41444[(2)]);
var inst_41419__$1 = cljs.core.get.call(null,inst_41418,cljs.core.cst$kw$figwheel_DASH_no_DASH_load);
var inst_41420 = cljs.core.get.call(null,inst_41418,cljs.core.cst$kw$not_DASH_required);
var inst_41421 = cljs.core.not_empty.call(null,inst_41419__$1);
var state_41444__$1 = (function (){var statearr_41466 = state_41444;
(statearr_41466[(20)] = inst_41419__$1);

(statearr_41466[(21)] = inst_41420);

return statearr_41466;
})();
if(cljs.core.truth_(inst_41421)){
var statearr_41467_41546 = state_41444__$1;
(statearr_41467_41546[(1)] = (41));

} else {
var statearr_41468_41547 = state_41444__$1;
(statearr_41468_41547[(1)] = (42));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (33))){
var state_41444__$1 = state_41444;
var statearr_41469_41548 = state_41444__$1;
(statearr_41469_41548[(2)] = false);

(statearr_41469_41548[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (13))){
var inst_41317 = (state_41444[(22)]);
var inst_41321 = cljs.core.chunk_first.call(null,inst_41317);
var inst_41322 = cljs.core.chunk_rest.call(null,inst_41317);
var inst_41323 = cljs.core.count.call(null,inst_41321);
var inst_41304 = inst_41322;
var inst_41305 = inst_41321;
var inst_41306 = inst_41323;
var inst_41307 = (0);
var state_41444__$1 = (function (){var statearr_41470 = state_41444;
(statearr_41470[(7)] = inst_41305);

(statearr_41470[(8)] = inst_41304);

(statearr_41470[(9)] = inst_41307);

(statearr_41470[(10)] = inst_41306);

return statearr_41470;
})();
var statearr_41471_41549 = state_41444__$1;
(statearr_41471_41549[(2)] = null);

(statearr_41471_41549[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (22))){
var inst_41365 = (state_41444[(23)]);
var inst_41357 = (state_41444[(19)]);
var inst_41360 = (state_41444[(24)]);
var inst_41361 = (state_41444[(25)]);
var inst_41360__$1 = (state_41444[(2)]);
var inst_41361__$1 = cljs.core.filter.call(null,cljs.core.cst$kw$loaded_DASH_file,inst_41360__$1);
var inst_41362 = (function (){var all_files = inst_41357;
var res_SINGLEQUOTE_ = inst_41360__$1;
var res = inst_41361__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_41365,inst_41357,inst_41360,inst_41361,inst_41360__$1,inst_41361__$1,state_val_41445,c__22961__auto__,map__41289,map__41289__$1,opts,before_jsload,on_jsload,reload_dependents,map__41290,map__41290__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41286_SHARP_){
return cljs.core.not.call(null,cljs.core.cst$kw$loaded_DASH_file.cljs$core$IFn$_invoke$arity$1(p1__41286_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_41365,inst_41357,inst_41360,inst_41361,inst_41360__$1,inst_41361__$1,state_val_41445,c__22961__auto__,map__41289,map__41289__$1,opts,before_jsload,on_jsload,reload_dependents,map__41290,map__41290__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41363 = cljs.core.filter.call(null,inst_41362,inst_41360__$1);
var inst_41364 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_41365__$1 = cljs.core.filter.call(null,cljs.core.cst$kw$loaded_DASH_file,inst_41364);
var inst_41366 = cljs.core.not_empty.call(null,inst_41365__$1);
var state_41444__$1 = (function (){var statearr_41472 = state_41444;
(statearr_41472[(23)] = inst_41365__$1);

(statearr_41472[(26)] = inst_41363);

(statearr_41472[(24)] = inst_41360__$1);

(statearr_41472[(25)] = inst_41361__$1);

return statearr_41472;
})();
if(cljs.core.truth_(inst_41366)){
var statearr_41473_41550 = state_41444__$1;
(statearr_41473_41550[(1)] = (23));

} else {
var statearr_41474_41551 = state_41444__$1;
(statearr_41474_41551[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (36))){
var state_41444__$1 = state_41444;
var statearr_41475_41552 = state_41444__$1;
(statearr_41475_41552[(2)] = false);

(statearr_41475_41552[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (41))){
var inst_41419 = (state_41444[(20)]);
var inst_41423 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,cljs.core.cst$kw$namespace);
var inst_41424 = cljs.core.map.call(null,inst_41423,inst_41419);
var inst_41425 = cljs.core.pr_str.call(null,inst_41424);
var inst_41426 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41425)].join('');
var inst_41427 = figwheel.client.utils.log.call(null,inst_41426);
var state_41444__$1 = state_41444;
var statearr_41476_41553 = state_41444__$1;
(statearr_41476_41553[(2)] = inst_41427);

(statearr_41476_41553[(1)] = (43));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (43))){
var inst_41420 = (state_41444[(21)]);
var inst_41430 = (state_41444[(2)]);
var inst_41431 = cljs.core.not_empty.call(null,inst_41420);
var state_41444__$1 = (function (){var statearr_41477 = state_41444;
(statearr_41477[(27)] = inst_41430);

return statearr_41477;
})();
if(cljs.core.truth_(inst_41431)){
var statearr_41478_41554 = state_41444__$1;
(statearr_41478_41554[(1)] = (44));

} else {
var statearr_41479_41555 = state_41444__$1;
(statearr_41479_41555[(1)] = (45));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (29))){
var inst_41365 = (state_41444[(23)]);
var inst_41363 = (state_41444[(26)]);
var inst_41357 = (state_41444[(19)]);
var inst_41397 = (state_41444[(16)]);
var inst_41360 = (state_41444[(24)]);
var inst_41361 = (state_41444[(25)]);
var inst_41393 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: NOT loading these files ");
var inst_41396 = (function (){var all_files = inst_41357;
var res_SINGLEQUOTE_ = inst_41360;
var res = inst_41361;
var files_not_loaded = inst_41363;
var dependencies_that_loaded = inst_41365;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41365,inst_41363,inst_41357,inst_41397,inst_41360,inst_41361,inst_41393,state_val_41445,c__22961__auto__,map__41289,map__41289__$1,opts,before_jsload,on_jsload,reload_dependents,map__41290,map__41290__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41395){
var map__41480 = p__41395;
var map__41480__$1 = (((((!((map__41480 == null))))?(((((map__41480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41480):map__41480);
var namespace = cljs.core.get.call(null,map__41480__$1,cljs.core.cst$kw$namespace);
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41365,inst_41363,inst_41357,inst_41397,inst_41360,inst_41361,inst_41393,state_val_41445,c__22961__auto__,map__41289,map__41289__$1,opts,before_jsload,on_jsload,reload_dependents,map__41290,map__41290__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41397__$1 = cljs.core.group_by.call(null,inst_41396,inst_41363);
var inst_41399 = (inst_41397__$1 == null);
var inst_41400 = cljs.core.not.call(null,inst_41399);
var state_41444__$1 = (function (){var statearr_41482 = state_41444;
(statearr_41482[(16)] = inst_41397__$1);

(statearr_41482[(28)] = inst_41393);

return statearr_41482;
})();
if(inst_41400){
var statearr_41483_41556 = state_41444__$1;
(statearr_41483_41556[(1)] = (32));

} else {
var statearr_41484_41557 = state_41444__$1;
(statearr_41484_41557[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (44))){
var inst_41420 = (state_41444[(21)]);
var inst_41433 = cljs.core.map.call(null,cljs.core.cst$kw$file,inst_41420);
var inst_41434 = cljs.core.pr_str.call(null,inst_41433);
var inst_41435 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41434)].join('');
var inst_41436 = figwheel.client.utils.log.call(null,inst_41435);
var state_41444__$1 = state_41444;
var statearr_41485_41558 = state_41444__$1;
(statearr_41485_41558[(2)] = inst_41436);

(statearr_41485_41558[(1)] = (46));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (6))){
var inst_41338 = (state_41444[(2)]);
var state_41444__$1 = state_41444;
var statearr_41486_41559 = state_41444__$1;
(statearr_41486_41559[(2)] = inst_41338);

(statearr_41486_41559[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (28))){
var inst_41363 = (state_41444[(26)]);
var inst_41390 = (state_41444[(2)]);
var inst_41391 = cljs.core.not_empty.call(null,inst_41363);
var state_41444__$1 = (function (){var statearr_41487 = state_41444;
(statearr_41487[(29)] = inst_41390);

return statearr_41487;
})();
if(cljs.core.truth_(inst_41391)){
var statearr_41488_41560 = state_41444__$1;
(statearr_41488_41560[(1)] = (29));

} else {
var statearr_41489_41561 = state_41444__$1;
(statearr_41489_41561[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (25))){
var inst_41361 = (state_41444[(25)]);
var inst_41377 = (state_41444[(2)]);
var inst_41378 = cljs.core.not_empty.call(null,inst_41361);
var state_41444__$1 = (function (){var statearr_41490 = state_41444;
(statearr_41490[(30)] = inst_41377);

return statearr_41490;
})();
if(cljs.core.truth_(inst_41378)){
var statearr_41491_41562 = state_41444__$1;
(statearr_41491_41562[(1)] = (26));

} else {
var statearr_41492_41563 = state_41444__$1;
(statearr_41492_41563[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (34))){
var inst_41413 = (state_41444[(2)]);
var state_41444__$1 = state_41444;
if(cljs.core.truth_(inst_41413)){
var statearr_41493_41564 = state_41444__$1;
(statearr_41493_41564[(1)] = (38));

} else {
var statearr_41494_41565 = state_41444__$1;
(statearr_41494_41565[(1)] = (39));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (17))){
var state_41444__$1 = state_41444;
var statearr_41495_41566 = state_41444__$1;
(statearr_41495_41566[(2)] = recompile_dependents);

(statearr_41495_41566[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (3))){
var state_41444__$1 = state_41444;
var statearr_41496_41567 = state_41444__$1;
(statearr_41496_41567[(2)] = null);

(statearr_41496_41567[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (12))){
var inst_41334 = (state_41444[(2)]);
var state_41444__$1 = state_41444;
var statearr_41497_41568 = state_41444__$1;
(statearr_41497_41568[(2)] = inst_41334);

(statearr_41497_41568[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (2))){
var inst_41296 = (state_41444[(13)]);
var inst_41303 = cljs.core.seq.call(null,inst_41296);
var inst_41304 = inst_41303;
var inst_41305 = null;
var inst_41306 = (0);
var inst_41307 = (0);
var state_41444__$1 = (function (){var statearr_41498 = state_41444;
(statearr_41498[(7)] = inst_41305);

(statearr_41498[(8)] = inst_41304);

(statearr_41498[(9)] = inst_41307);

(statearr_41498[(10)] = inst_41306);

return statearr_41498;
})();
var statearr_41499_41569 = state_41444__$1;
(statearr_41499_41569[(2)] = null);

(statearr_41499_41569[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (23))){
var inst_41365 = (state_41444[(23)]);
var inst_41363 = (state_41444[(26)]);
var inst_41357 = (state_41444[(19)]);
var inst_41360 = (state_41444[(24)]);
var inst_41361 = (state_41444[(25)]);
var inst_41368 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: loaded these dependencies");
var inst_41370 = (function (){var all_files = inst_41357;
var res_SINGLEQUOTE_ = inst_41360;
var res = inst_41361;
var files_not_loaded = inst_41363;
var dependencies_that_loaded = inst_41365;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41365,inst_41363,inst_41357,inst_41360,inst_41361,inst_41368,state_val_41445,c__22961__auto__,map__41289,map__41289__$1,opts,before_jsload,on_jsload,reload_dependents,map__41290,map__41290__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41369){
var map__41500 = p__41369;
var map__41500__$1 = (((((!((map__41500 == null))))?(((((map__41500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41500):map__41500);
var request_url = cljs.core.get.call(null,map__41500__$1,cljs.core.cst$kw$request_DASH_url);
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41365,inst_41363,inst_41357,inst_41360,inst_41361,inst_41368,state_val_41445,c__22961__auto__,map__41289,map__41289__$1,opts,before_jsload,on_jsload,reload_dependents,map__41290,map__41290__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41371 = cljs.core.reverse.call(null,inst_41365);
var inst_41372 = cljs.core.map.call(null,inst_41370,inst_41371);
var inst_41373 = cljs.core.pr_str.call(null,inst_41372);
var inst_41374 = figwheel.client.utils.log.call(null,inst_41373);
var state_41444__$1 = (function (){var statearr_41502 = state_41444;
(statearr_41502[(31)] = inst_41368);

return statearr_41502;
})();
var statearr_41503_41570 = state_41444__$1;
(statearr_41503_41570[(2)] = inst_41374);

(statearr_41503_41570[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (35))){
var state_41444__$1 = state_41444;
var statearr_41504_41571 = state_41444__$1;
(statearr_41504_41571[(2)] = true);

(statearr_41504_41571[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (19))){
var inst_41347 = (state_41444[(12)]);
var inst_41353 = figwheel.client.file_reloading.expand_files.call(null,inst_41347);
var state_41444__$1 = state_41444;
var statearr_41505_41572 = state_41444__$1;
(statearr_41505_41572[(2)] = inst_41353);

(statearr_41505_41572[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (11))){
var state_41444__$1 = state_41444;
var statearr_41506_41573 = state_41444__$1;
(statearr_41506_41573[(2)] = null);

(statearr_41506_41573[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (9))){
var inst_41336 = (state_41444[(2)]);
var state_41444__$1 = state_41444;
var statearr_41507_41574 = state_41444__$1;
(statearr_41507_41574[(2)] = inst_41336);

(statearr_41507_41574[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (5))){
var inst_41307 = (state_41444[(9)]);
var inst_41306 = (state_41444[(10)]);
var inst_41309 = (inst_41307 < inst_41306);
var inst_41310 = inst_41309;
var state_41444__$1 = state_41444;
if(cljs.core.truth_(inst_41310)){
var statearr_41508_41575 = state_41444__$1;
(statearr_41508_41575[(1)] = (7));

} else {
var statearr_41509_41576 = state_41444__$1;
(statearr_41509_41576[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (14))){
var inst_41317 = (state_41444[(22)]);
var inst_41326 = cljs.core.first.call(null,inst_41317);
var inst_41327 = figwheel.client.file_reloading.eval_body.call(null,inst_41326,opts);
var inst_41328 = cljs.core.next.call(null,inst_41317);
var inst_41304 = inst_41328;
var inst_41305 = null;
var inst_41306 = (0);
var inst_41307 = (0);
var state_41444__$1 = (function (){var statearr_41510 = state_41444;
(statearr_41510[(7)] = inst_41305);

(statearr_41510[(8)] = inst_41304);

(statearr_41510[(9)] = inst_41307);

(statearr_41510[(32)] = inst_41327);

(statearr_41510[(10)] = inst_41306);

return statearr_41510;
})();
var statearr_41511_41577 = state_41444__$1;
(statearr_41511_41577[(2)] = null);

(statearr_41511_41577[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (45))){
var state_41444__$1 = state_41444;
var statearr_41512_41578 = state_41444__$1;
(statearr_41512_41578[(2)] = null);

(statearr_41512_41578[(1)] = (46));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (26))){
var inst_41365 = (state_41444[(23)]);
var inst_41363 = (state_41444[(26)]);
var inst_41357 = (state_41444[(19)]);
var inst_41360 = (state_41444[(24)]);
var inst_41361 = (state_41444[(25)]);
var inst_41380 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: loaded these files");
var inst_41382 = (function (){var all_files = inst_41357;
var res_SINGLEQUOTE_ = inst_41360;
var res = inst_41361;
var files_not_loaded = inst_41363;
var dependencies_that_loaded = inst_41365;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41365,inst_41363,inst_41357,inst_41360,inst_41361,inst_41380,state_val_41445,c__22961__auto__,map__41289,map__41289__$1,opts,before_jsload,on_jsload,reload_dependents,map__41290,map__41290__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41381){
var map__41513 = p__41381;
var map__41513__$1 = (((((!((map__41513 == null))))?(((((map__41513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41513):map__41513);
var namespace = cljs.core.get.call(null,map__41513__$1,cljs.core.cst$kw$namespace);
var file = cljs.core.get.call(null,map__41513__$1,cljs.core.cst$kw$file);
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41365,inst_41363,inst_41357,inst_41360,inst_41361,inst_41380,state_val_41445,c__22961__auto__,map__41289,map__41289__$1,opts,before_jsload,on_jsload,reload_dependents,map__41290,map__41290__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41383 = cljs.core.map.call(null,inst_41382,inst_41361);
var inst_41384 = cljs.core.pr_str.call(null,inst_41383);
var inst_41385 = figwheel.client.utils.log.call(null,inst_41384);
var inst_41386 = (function (){var all_files = inst_41357;
var res_SINGLEQUOTE_ = inst_41360;
var res = inst_41361;
var files_not_loaded = inst_41363;
var dependencies_that_loaded = inst_41365;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41365,inst_41363,inst_41357,inst_41360,inst_41361,inst_41380,inst_41382,inst_41383,inst_41384,inst_41385,state_val_41445,c__22961__auto__,map__41289,map__41289__$1,opts,before_jsload,on_jsload,reload_dependents,map__41290,map__41290__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41365,inst_41363,inst_41357,inst_41360,inst_41361,inst_41380,inst_41382,inst_41383,inst_41384,inst_41385,state_val_41445,c__22961__auto__,map__41289,map__41289__$1,opts,before_jsload,on_jsload,reload_dependents,map__41290,map__41290__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41387 = setTimeout(inst_41386,(10));
var state_41444__$1 = (function (){var statearr_41515 = state_41444;
(statearr_41515[(33)] = inst_41385);

(statearr_41515[(34)] = inst_41380);

return statearr_41515;
})();
var statearr_41516_41579 = state_41444__$1;
(statearr_41516_41579[(2)] = inst_41387);

(statearr_41516_41579[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (16))){
var state_41444__$1 = state_41444;
var statearr_41517_41580 = state_41444__$1;
(statearr_41517_41580[(2)] = reload_dependents);

(statearr_41517_41580[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (38))){
var inst_41397 = (state_41444[(16)]);
var inst_41415 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41397);
var state_41444__$1 = state_41444;
var statearr_41518_41581 = state_41444__$1;
(statearr_41518_41581[(2)] = inst_41415);

(statearr_41518_41581[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (30))){
var state_41444__$1 = state_41444;
var statearr_41519_41582 = state_41444__$1;
(statearr_41519_41582[(2)] = null);

(statearr_41519_41582[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (10))){
var inst_41317 = (state_41444[(22)]);
var inst_41319 = cljs.core.chunked_seq_QMARK_.call(null,inst_41317);
var state_41444__$1 = state_41444;
if(inst_41319){
var statearr_41520_41583 = state_41444__$1;
(statearr_41520_41583[(1)] = (13));

} else {
var statearr_41521_41584 = state_41444__$1;
(statearr_41521_41584[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (18))){
var inst_41351 = (state_41444[(2)]);
var state_41444__$1 = state_41444;
if(cljs.core.truth_(inst_41351)){
var statearr_41522_41585 = state_41444__$1;
(statearr_41522_41585[(1)] = (19));

} else {
var statearr_41523_41586 = state_41444__$1;
(statearr_41523_41586[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (42))){
var state_41444__$1 = state_41444;
var statearr_41524_41587 = state_41444__$1;
(statearr_41524_41587[(2)] = null);

(statearr_41524_41587[(1)] = (43));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (37))){
var inst_41410 = (state_41444[(2)]);
var state_41444__$1 = state_41444;
var statearr_41525_41588 = state_41444__$1;
(statearr_41525_41588[(2)] = inst_41410);

(statearr_41525_41588[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41445 === (8))){
var inst_41317 = (state_41444[(22)]);
var inst_41304 = (state_41444[(8)]);
var inst_41317__$1 = cljs.core.seq.call(null,inst_41304);
var state_41444__$1 = (function (){var statearr_41526 = state_41444;
(statearr_41526[(22)] = inst_41317__$1);

return statearr_41526;
})();
if(inst_41317__$1){
var statearr_41527_41589 = state_41444__$1;
(statearr_41527_41589[(1)] = (10));

} else {
var statearr_41528_41590 = state_41444__$1;
(statearr_41528_41590[(1)] = (11));

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
});})(c__22961__auto__,map__41289,map__41289__$1,opts,before_jsload,on_jsload,reload_dependents,map__41290,map__41290__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22938__auto__,c__22961__auto__,map__41289,map__41289__$1,opts,before_jsload,on_jsload,reload_dependents,map__41290,map__41290__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____0 = (function (){
var statearr_41529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41529[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__);

(statearr_41529[(1)] = (1));

return statearr_41529;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____1 = (function (state_41444){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_41444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e41530){if((e41530 instanceof Object)){
var ex__22942__auto__ = e41530;
var statearr_41531_41591 = state_41444;
(statearr_41531_41591[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41444);

return cljs.core.cst$kw$recur;
} else {
throw e41530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__41592 = state_41444;
state_41444 = G__41592;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__ = function(state_41444){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____1.call(this,state_41444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__,map__41289,map__41289__$1,opts,before_jsload,on_jsload,reload_dependents,map__41290,map__41290__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22963__auto__ = (function (){var statearr_41532 = f__22962__auto__.call(null);
(statearr_41532[(6)] = c__22961__auto__);

return statearr_41532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto__,map__41289,map__41289__$1,opts,before_jsload,on_jsload,reload_dependents,map__41290,map__41290__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22961__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41595,link){
var map__41596 = p__41595;
var map__41596__$1 = (((((!((map__41596 == null))))?(((((map__41596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41596):map__41596);
var file = cljs.core.get.call(null,map__41596__$1,cljs.core.cst$kw$file);
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__41596,map__41596__$1,file){
return (function (p1__41593_SHARP_,p2__41594_SHARP_){
if(cljs.core._EQ_.call(null,p1__41593_SHARP_,p2__41594_SHARP_)){
return p1__41593_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__41596,map__41596__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41599){
var map__41600 = p__41599;
var map__41600__$1 = (((((!((map__41600 == null))))?(((((map__41600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41600):map__41600);
var match_length = cljs.core.get.call(null,map__41600__$1,cljs.core.cst$kw$match_DASH_length);
var current_url_length = cljs.core.get.call(null,map__41600__$1,cljs.core.cst$kw$current_DASH_url_DASH_length);
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41598_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41598_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41602_SHARP_,p2__41603_SHARP_){
return cljs.core.assoc.call(null,p1__41602_SHARP_,cljs.core.get.call(null,p2__41603_SHARP_,key),p2__41603_SHARP_);
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
var loaded_f_datas_41604 = cljs.core.filter.call(null,cljs.core.cst$kw$loaded,f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_41604);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_41604);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41605,p__41606){
var map__41607 = p__41605;
var map__41607__$1 = (((((!((map__41607 == null))))?(((((map__41607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41607):map__41607);
var on_cssload = cljs.core.get.call(null,map__41607__$1,cljs.core.cst$kw$on_DASH_cssload);
var map__41608 = p__41606;
var map__41608__$1 = (((((!((map__41608 == null))))?(((((map__41608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41608):map__41608);
var files_msg = map__41608__$1;
var files = cljs.core.get.call(null,map__41608__$1,cljs.core.cst$kw$files);
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

//# sourceMappingURL=file_reloading.js.map?rel=1545307822532
