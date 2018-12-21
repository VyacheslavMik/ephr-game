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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__66247_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__66247_SHARP_));
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
var seq__66248 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__66249 = null;
var count__66250 = (0);
var i__66251 = (0);
while(true){
if((i__66251 < count__66250)){
var n = cljs.core._nth.call(null,chunk__66249,i__66251);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__66252 = seq__66248;
var G__66253 = chunk__66249;
var G__66254 = count__66250;
var G__66255 = (i__66251 + (1));
seq__66248 = G__66252;
chunk__66249 = G__66253;
count__66250 = G__66254;
i__66251 = G__66255;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__66248);
if(temp__5457__auto__){
var seq__66248__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66248__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__66248__$1);
var G__66256 = cljs.core.chunk_rest.call(null,seq__66248__$1);
var G__66257 = c__4461__auto__;
var G__66258 = cljs.core.count.call(null,c__4461__auto__);
var G__66259 = (0);
seq__66248 = G__66256;
chunk__66249 = G__66257;
count__66250 = G__66258;
i__66251 = G__66259;
continue;
} else {
var n = cljs.core.first.call(null,seq__66248__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__66260 = cljs.core.next.call(null,seq__66248__$1);
var G__66261 = null;
var G__66262 = (0);
var G__66263 = (0);
seq__66248 = G__66260;
chunk__66249 = G__66261;
count__66250 = G__66262;
i__66251 = G__66263;
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
return cljs.core.some.call(null,(function (p__66264){
var vec__66265 = p__66264;
var _ = cljs.core.nth.call(null,vec__66265,(0),null);
var v = cljs.core.nth.call(null,vec__66265,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__66268){
var vec__66269 = p__66268;
var k = cljs.core.nth.call(null,vec__66269,(0),null);
var v = cljs.core.nth.call(null,vec__66269,(1),null);
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

var seq__66281_66289 = cljs.core.seq.call(null,deps);
var chunk__66282_66290 = null;
var count__66283_66291 = (0);
var i__66284_66292 = (0);
while(true){
if((i__66284_66292 < count__66283_66291)){
var dep_66293 = cljs.core._nth.call(null,chunk__66282_66290,i__66284_66292);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_66293;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_66293));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_66293,(depth + (1)),state);
} else {
}


var G__66294 = seq__66281_66289;
var G__66295 = chunk__66282_66290;
var G__66296 = count__66283_66291;
var G__66297 = (i__66284_66292 + (1));
seq__66281_66289 = G__66294;
chunk__66282_66290 = G__66295;
count__66283_66291 = G__66296;
i__66284_66292 = G__66297;
continue;
} else {
var temp__5457__auto___66298 = cljs.core.seq.call(null,seq__66281_66289);
if(temp__5457__auto___66298){
var seq__66281_66299__$1 = temp__5457__auto___66298;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66281_66299__$1)){
var c__4461__auto___66300 = cljs.core.chunk_first.call(null,seq__66281_66299__$1);
var G__66301 = cljs.core.chunk_rest.call(null,seq__66281_66299__$1);
var G__66302 = c__4461__auto___66300;
var G__66303 = cljs.core.count.call(null,c__4461__auto___66300);
var G__66304 = (0);
seq__66281_66289 = G__66301;
chunk__66282_66290 = G__66302;
count__66283_66291 = G__66303;
i__66284_66292 = G__66304;
continue;
} else {
var dep_66305 = cljs.core.first.call(null,seq__66281_66299__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_66305;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_66305));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_66305,(depth + (1)),state);
} else {
}


var G__66306 = cljs.core.next.call(null,seq__66281_66299__$1);
var G__66307 = null;
var G__66308 = (0);
var G__66309 = (0);
seq__66281_66289 = G__66306;
chunk__66282_66290 = G__66307;
count__66283_66291 = G__66308;
i__66284_66292 = G__66309;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__66285){
var vec__66286 = p__66285;
var seq__66287 = cljs.core.seq.call(null,vec__66286);
var first__66288 = cljs.core.first.call(null,seq__66287);
var seq__66287__$1 = cljs.core.next.call(null,seq__66287);
var x = first__66288;
var xs = seq__66287__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__66286,seq__66287,first__66288,seq__66287__$1,x,xs,get_deps__$1){
return (function (p1__66272_SHARP_){
return clojure.set.difference.call(null,p1__66272_SHARP_,x);
});})(vec__66286,seq__66287,first__66288,seq__66287__$1,x,xs,get_deps__$1))
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
var seq__66310 = cljs.core.seq.call(null,provides);
var chunk__66311 = null;
var count__66312 = (0);
var i__66313 = (0);
while(true){
if((i__66313 < count__66312)){
var prov = cljs.core._nth.call(null,chunk__66311,i__66313);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__66314_66322 = cljs.core.seq.call(null,requires);
var chunk__66315_66323 = null;
var count__66316_66324 = (0);
var i__66317_66325 = (0);
while(true){
if((i__66317_66325 < count__66316_66324)){
var req_66326 = cljs.core._nth.call(null,chunk__66315_66323,i__66317_66325);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_66326,prov);


var G__66327 = seq__66314_66322;
var G__66328 = chunk__66315_66323;
var G__66329 = count__66316_66324;
var G__66330 = (i__66317_66325 + (1));
seq__66314_66322 = G__66327;
chunk__66315_66323 = G__66328;
count__66316_66324 = G__66329;
i__66317_66325 = G__66330;
continue;
} else {
var temp__5457__auto___66331 = cljs.core.seq.call(null,seq__66314_66322);
if(temp__5457__auto___66331){
var seq__66314_66332__$1 = temp__5457__auto___66331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66314_66332__$1)){
var c__4461__auto___66333 = cljs.core.chunk_first.call(null,seq__66314_66332__$1);
var G__66334 = cljs.core.chunk_rest.call(null,seq__66314_66332__$1);
var G__66335 = c__4461__auto___66333;
var G__66336 = cljs.core.count.call(null,c__4461__auto___66333);
var G__66337 = (0);
seq__66314_66322 = G__66334;
chunk__66315_66323 = G__66335;
count__66316_66324 = G__66336;
i__66317_66325 = G__66337;
continue;
} else {
var req_66338 = cljs.core.first.call(null,seq__66314_66332__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_66338,prov);


var G__66339 = cljs.core.next.call(null,seq__66314_66332__$1);
var G__66340 = null;
var G__66341 = (0);
var G__66342 = (0);
seq__66314_66322 = G__66339;
chunk__66315_66323 = G__66340;
count__66316_66324 = G__66341;
i__66317_66325 = G__66342;
continue;
}
} else {
}
}
break;
}


var G__66343 = seq__66310;
var G__66344 = chunk__66311;
var G__66345 = count__66312;
var G__66346 = (i__66313 + (1));
seq__66310 = G__66343;
chunk__66311 = G__66344;
count__66312 = G__66345;
i__66313 = G__66346;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__66310);
if(temp__5457__auto__){
var seq__66310__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66310__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__66310__$1);
var G__66347 = cljs.core.chunk_rest.call(null,seq__66310__$1);
var G__66348 = c__4461__auto__;
var G__66349 = cljs.core.count.call(null,c__4461__auto__);
var G__66350 = (0);
seq__66310 = G__66347;
chunk__66311 = G__66348;
count__66312 = G__66349;
i__66313 = G__66350;
continue;
} else {
var prov = cljs.core.first.call(null,seq__66310__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__66318_66351 = cljs.core.seq.call(null,requires);
var chunk__66319_66352 = null;
var count__66320_66353 = (0);
var i__66321_66354 = (0);
while(true){
if((i__66321_66354 < count__66320_66353)){
var req_66355 = cljs.core._nth.call(null,chunk__66319_66352,i__66321_66354);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_66355,prov);


var G__66356 = seq__66318_66351;
var G__66357 = chunk__66319_66352;
var G__66358 = count__66320_66353;
var G__66359 = (i__66321_66354 + (1));
seq__66318_66351 = G__66356;
chunk__66319_66352 = G__66357;
count__66320_66353 = G__66358;
i__66321_66354 = G__66359;
continue;
} else {
var temp__5457__auto___66360__$1 = cljs.core.seq.call(null,seq__66318_66351);
if(temp__5457__auto___66360__$1){
var seq__66318_66361__$1 = temp__5457__auto___66360__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66318_66361__$1)){
var c__4461__auto___66362 = cljs.core.chunk_first.call(null,seq__66318_66361__$1);
var G__66363 = cljs.core.chunk_rest.call(null,seq__66318_66361__$1);
var G__66364 = c__4461__auto___66362;
var G__66365 = cljs.core.count.call(null,c__4461__auto___66362);
var G__66366 = (0);
seq__66318_66351 = G__66363;
chunk__66319_66352 = G__66364;
count__66320_66353 = G__66365;
i__66321_66354 = G__66366;
continue;
} else {
var req_66367 = cljs.core.first.call(null,seq__66318_66361__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_66367,prov);


var G__66368 = cljs.core.next.call(null,seq__66318_66361__$1);
var G__66369 = null;
var G__66370 = (0);
var G__66371 = (0);
seq__66318_66351 = G__66368;
chunk__66319_66352 = G__66369;
count__66320_66353 = G__66370;
i__66321_66354 = G__66371;
continue;
}
} else {
}
}
break;
}


var G__66372 = cljs.core.next.call(null,seq__66310__$1);
var G__66373 = null;
var G__66374 = (0);
var G__66375 = (0);
seq__66310 = G__66372;
chunk__66311 = G__66373;
count__66312 = G__66374;
i__66313 = G__66375;
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
var seq__66376_66380 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__66377_66381 = null;
var count__66378_66382 = (0);
var i__66379_66383 = (0);
while(true){
if((i__66379_66383 < count__66378_66382)){
var ns_66384 = cljs.core._nth.call(null,chunk__66377_66381,i__66379_66383);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_66384);


var G__66385 = seq__66376_66380;
var G__66386 = chunk__66377_66381;
var G__66387 = count__66378_66382;
var G__66388 = (i__66379_66383 + (1));
seq__66376_66380 = G__66385;
chunk__66377_66381 = G__66386;
count__66378_66382 = G__66387;
i__66379_66383 = G__66388;
continue;
} else {
var temp__5457__auto___66389 = cljs.core.seq.call(null,seq__66376_66380);
if(temp__5457__auto___66389){
var seq__66376_66390__$1 = temp__5457__auto___66389;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66376_66390__$1)){
var c__4461__auto___66391 = cljs.core.chunk_first.call(null,seq__66376_66390__$1);
var G__66392 = cljs.core.chunk_rest.call(null,seq__66376_66390__$1);
var G__66393 = c__4461__auto___66391;
var G__66394 = cljs.core.count.call(null,c__4461__auto___66391);
var G__66395 = (0);
seq__66376_66380 = G__66392;
chunk__66377_66381 = G__66393;
count__66378_66382 = G__66394;
i__66379_66383 = G__66395;
continue;
} else {
var ns_66396 = cljs.core.first.call(null,seq__66376_66390__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_66396);


var G__66397 = cljs.core.next.call(null,seq__66376_66390__$1);
var G__66398 = null;
var G__66399 = (0);
var G__66400 = (0);
seq__66376_66380 = G__66397;
chunk__66377_66381 = G__66398;
count__66378_66382 = G__66399;
i__66379_66383 = G__66400;
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
var G__66401__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__66401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66402__i = 0, G__66402__a = new Array(arguments.length -  0);
while (G__66402__i < G__66402__a.length) {G__66402__a[G__66402__i] = arguments[G__66402__i + 0]; ++G__66402__i;}
  args = new cljs.core.IndexedSeq(G__66402__a,0,null);
} 
return G__66401__delegate.call(this,args);};
G__66401.cljs$lang$maxFixedArity = 0;
G__66401.cljs$lang$applyTo = (function (arglist__66403){
var args = cljs.core.seq(arglist__66403);
return G__66401__delegate(args);
});
G__66401.cljs$core$IFn$_invoke$arity$variadic = G__66401__delegate;
return G__66401;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__66404_SHARP_,p2__66405_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__66404_SHARP_)),p2__66405_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__66406_SHARP_,p2__66407_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__66406_SHARP_),p2__66407_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__66408 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__66408.addCallback(((function (G__66408){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__66408))
);

G__66408.addErrback(((function (G__66408){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__66408))
);

return G__66408;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e66409){if((e66409 instanceof Error)){
var e = e66409;
figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,e.stack);

return false;
} else {
throw e66409;

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
}catch (e66410){if((e66410 instanceof Error)){
var e = e66410;
figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,e.stack);

return false;
} else {
throw e66410;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__66411 = cljs.core._EQ_;
var expr__66412 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__66411.call(null,cljs.core.cst$kw$node,expr__66412))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__66411.call(null,cljs.core.cst$kw$html,expr__66412))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__66411.call(null,cljs.core.cst$kw$worker,expr__66412))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__66411,expr__66412){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__66411,expr__66412))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__66414,callback){
var map__66415 = p__66414;
var map__66415__$1 = (((((!((map__66415 == null))))?(((((map__66415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66415):map__66415);
var file_msg = map__66415__$1;
var request_url = cljs.core.get.call(null,map__66415__$1,cljs.core.cst$kw$request_DASH_url);

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__66415,map__66415__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,cljs.core.cst$kw$loaded_DASH_file,true)], null));
} else {
figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__66415,map__66415__$1,file_msg,request_url))
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
return (function (state_66453){
var state_val_66454 = (state_66453[(1)]);
if((state_val_66454 === (7))){
var inst_66449 = (state_66453[(2)]);
var state_66453__$1 = state_66453;
var statearr_66455_66481 = state_66453__$1;
(statearr_66455_66481[(2)] = inst_66449);

(statearr_66455_66481[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66454 === (1))){
var state_66453__$1 = state_66453;
var statearr_66456_66482 = state_66453__$1;
(statearr_66456_66482[(2)] = null);

(statearr_66456_66482[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66454 === (4))){
var inst_66419 = (state_66453[(7)]);
var inst_66419__$1 = (state_66453[(2)]);
var state_66453__$1 = (function (){var statearr_66457 = state_66453;
(statearr_66457[(7)] = inst_66419__$1);

return statearr_66457;
})();
if(cljs.core.truth_(inst_66419__$1)){
var statearr_66458_66483 = state_66453__$1;
(statearr_66458_66483[(1)] = (5));

} else {
var statearr_66459_66484 = state_66453__$1;
(statearr_66459_66484[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_66454 === (15))){
var inst_66434 = (state_66453[(8)]);
var inst_66432 = (state_66453[(9)]);
var inst_66436 = inst_66434.call(null,inst_66432);
var state_66453__$1 = state_66453;
var statearr_66460_66485 = state_66453__$1;
(statearr_66460_66485[(2)] = inst_66436);

(statearr_66460_66485[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66454 === (13))){
var inst_66443 = (state_66453[(2)]);
var state_66453__$1 = state_66453;
var statearr_66461_66486 = state_66453__$1;
(statearr_66461_66486[(2)] = inst_66443);

(statearr_66461_66486[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66454 === (6))){
var state_66453__$1 = state_66453;
var statearr_66462_66487 = state_66453__$1;
(statearr_66462_66487[(2)] = null);

(statearr_66462_66487[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66454 === (17))){
var inst_66440 = (state_66453[(2)]);
var state_66453__$1 = state_66453;
var statearr_66463_66488 = state_66453__$1;
(statearr_66463_66488[(2)] = inst_66440);

(statearr_66463_66488[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66454 === (3))){
var inst_66451 = (state_66453[(2)]);
var state_66453__$1 = state_66453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66453__$1,inst_66451);
} else {
if((state_val_66454 === (12))){
var state_66453__$1 = state_66453;
var statearr_66464_66489 = state_66453__$1;
(statearr_66464_66489[(2)] = null);

(statearr_66464_66489[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66454 === (2))){
var state_66453__$1 = state_66453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66453__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_66454 === (11))){
var inst_66424 = (state_66453[(10)]);
var inst_66430 = figwheel.client.file_reloading.blocking_load.call(null,inst_66424);
var state_66453__$1 = state_66453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66453__$1,(14),inst_66430);
} else {
if((state_val_66454 === (9))){
var inst_66424 = (state_66453[(10)]);
var state_66453__$1 = state_66453;
if(cljs.core.truth_(inst_66424)){
var statearr_66465_66490 = state_66453__$1;
(statearr_66465_66490[(1)] = (11));

} else {
var statearr_66466_66491 = state_66453__$1;
(statearr_66466_66491[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_66454 === (5))){
var inst_66425 = (state_66453[(11)]);
var inst_66419 = (state_66453[(7)]);
var inst_66424 = cljs.core.nth.call(null,inst_66419,(0),null);
var inst_66425__$1 = cljs.core.nth.call(null,inst_66419,(1),null);
var state_66453__$1 = (function (){var statearr_66467 = state_66453;
(statearr_66467[(11)] = inst_66425__$1);

(statearr_66467[(10)] = inst_66424);

return statearr_66467;
})();
if(cljs.core.truth_(inst_66425__$1)){
var statearr_66468_66492 = state_66453__$1;
(statearr_66468_66492[(1)] = (8));

} else {
var statearr_66469_66493 = state_66453__$1;
(statearr_66469_66493[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_66454 === (14))){
var inst_66434 = (state_66453[(8)]);
var inst_66424 = (state_66453[(10)]);
var inst_66432 = (state_66453[(2)]);
var inst_66433 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_66434__$1 = cljs.core.get.call(null,inst_66433,inst_66424);
var state_66453__$1 = (function (){var statearr_66470 = state_66453;
(statearr_66470[(8)] = inst_66434__$1);

(statearr_66470[(9)] = inst_66432);

return statearr_66470;
})();
if(cljs.core.truth_(inst_66434__$1)){
var statearr_66471_66494 = state_66453__$1;
(statearr_66471_66494[(1)] = (15));

} else {
var statearr_66472_66495 = state_66453__$1;
(statearr_66472_66495[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_66454 === (16))){
var inst_66432 = (state_66453[(9)]);
var inst_66438 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_66432);
var state_66453__$1 = state_66453;
var statearr_66473_66496 = state_66453__$1;
(statearr_66473_66496[(2)] = inst_66438);

(statearr_66473_66496[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66454 === (10))){
var inst_66445 = (state_66453[(2)]);
var state_66453__$1 = (function (){var statearr_66474 = state_66453;
(statearr_66474[(12)] = inst_66445);

return statearr_66474;
})();
var statearr_66475_66497 = state_66453__$1;
(statearr_66475_66497[(2)] = null);

(statearr_66475_66497[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66454 === (8))){
var inst_66425 = (state_66453[(11)]);
var inst_66427 = eval(inst_66425);
var state_66453__$1 = state_66453;
var statearr_66476_66498 = state_66453__$1;
(statearr_66476_66498[(2)] = inst_66427);

(statearr_66476_66498[(1)] = (10));


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
var statearr_66477 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66477[(0)] = figwheel$client$file_reloading$state_machine__22939__auto__);

(statearr_66477[(1)] = (1));

return statearr_66477;
});
var figwheel$client$file_reloading$state_machine__22939__auto____1 = (function (state_66453){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_66453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e66478){if((e66478 instanceof Object)){
var ex__22942__auto__ = e66478;
var statearr_66479_66499 = state_66453;
(statearr_66479_66499[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66453);

return cljs.core.cst$kw$recur;
} else {
throw e66478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__66500 = state_66453;
state_66453 = G__66500;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22939__auto__ = function(state_66453){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22939__auto____1.call(this,state_66453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22939__auto____0;
figwheel$client$file_reloading$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22939__auto____1;
return figwheel$client$file_reloading$state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__))
})();
var state__22963__auto__ = (function (){var statearr_66480 = f__22962__auto__.call(null);
(statearr_66480[(6)] = c__22961__auto__);

return statearr_66480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto__))
);

return c__22961__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__66502 = arguments.length;
switch (G__66502) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__66504,callback){
var map__66505 = p__66504;
var map__66505__$1 = (((((!((map__66505 == null))))?(((((map__66505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66505):map__66505);
var file_msg = map__66505__$1;
var namespace = cljs.core.get.call(null,map__66505__$1,cljs.core.cst$kw$namespace);
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__66505,map__66505__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loaded_DASH_file], null)))], null));
});})(request_url,map__66505,map__66505__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__66507){
var map__66508 = p__66507;
var map__66508__$1 = (((((!((map__66508 == null))))?(((((map__66508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66508):map__66508);
var file_msg = map__66508__$1;
var namespace = cljs.core.get.call(null,map__66508__$1,cljs.core.cst$kw$namespace);
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return cljs.core.cst$kw$figwheel_DASH_no_DASH_load.cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__66510){
var map__66511 = p__66510;
var map__66511__$1 = (((((!((map__66511 == null))))?(((((map__66511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66511):map__66511);
var file_msg = map__66511__$1;
var namespace = cljs.core.get.call(null,map__66511__$1,cljs.core.cst$kw$namespace);

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__66513,callback){
var map__66514 = p__66513;
var map__66514__$1 = (((((!((map__66514 == null))))?(((((map__66514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66514):map__66514);
var file_msg = map__66514__$1;
var request_url = cljs.core.get.call(null,map__66514__$1,cljs.core.cst$kw$request_DASH_url);
var namespace = cljs.core.get.call(null,map__66514__$1,cljs.core.cst$kw$namespace);

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
var c__22961__auto___66564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22961__auto___66564,out){
return (function (){
var f__22962__auto__ = (function (){var switch__22938__auto__ = ((function (c__22961__auto___66564,out){
return (function (state_66549){
var state_val_66550 = (state_66549[(1)]);
if((state_val_66550 === (1))){
var inst_66523 = cljs.core.seq.call(null,files);
var inst_66524 = cljs.core.first.call(null,inst_66523);
var inst_66525 = cljs.core.next.call(null,inst_66523);
var inst_66526 = files;
var state_66549__$1 = (function (){var statearr_66551 = state_66549;
(statearr_66551[(7)] = inst_66524);

(statearr_66551[(8)] = inst_66526);

(statearr_66551[(9)] = inst_66525);

return statearr_66551;
})();
var statearr_66552_66565 = state_66549__$1;
(statearr_66552_66565[(2)] = null);

(statearr_66552_66565[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66550 === (2))){
var inst_66532 = (state_66549[(10)]);
var inst_66526 = (state_66549[(8)]);
var inst_66531 = cljs.core.seq.call(null,inst_66526);
var inst_66532__$1 = cljs.core.first.call(null,inst_66531);
var inst_66533 = cljs.core.next.call(null,inst_66531);
var inst_66534 = (inst_66532__$1 == null);
var inst_66535 = cljs.core.not.call(null,inst_66534);
var state_66549__$1 = (function (){var statearr_66553 = state_66549;
(statearr_66553[(11)] = inst_66533);

(statearr_66553[(10)] = inst_66532__$1);

return statearr_66553;
})();
if(inst_66535){
var statearr_66554_66566 = state_66549__$1;
(statearr_66554_66566[(1)] = (4));

} else {
var statearr_66555_66567 = state_66549__$1;
(statearr_66555_66567[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_66550 === (3))){
var inst_66547 = (state_66549[(2)]);
var state_66549__$1 = state_66549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66549__$1,inst_66547);
} else {
if((state_val_66550 === (4))){
var inst_66532 = (state_66549[(10)]);
var inst_66537 = figwheel.client.file_reloading.reload_js_file.call(null,inst_66532);
var state_66549__$1 = state_66549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66549__$1,(7),inst_66537);
} else {
if((state_val_66550 === (5))){
var inst_66543 = cljs.core.async.close_BANG_.call(null,out);
var state_66549__$1 = state_66549;
var statearr_66556_66568 = state_66549__$1;
(statearr_66556_66568[(2)] = inst_66543);

(statearr_66556_66568[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66550 === (6))){
var inst_66545 = (state_66549[(2)]);
var state_66549__$1 = state_66549;
var statearr_66557_66569 = state_66549__$1;
(statearr_66557_66569[(2)] = inst_66545);

(statearr_66557_66569[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66550 === (7))){
var inst_66533 = (state_66549[(11)]);
var inst_66539 = (state_66549[(2)]);
var inst_66540 = cljs.core.async.put_BANG_.call(null,out,inst_66539);
var inst_66526 = inst_66533;
var state_66549__$1 = (function (){var statearr_66558 = state_66549;
(statearr_66558[(8)] = inst_66526);

(statearr_66558[(12)] = inst_66540);

return statearr_66558;
})();
var statearr_66559_66570 = state_66549__$1;
(statearr_66559_66570[(2)] = null);

(statearr_66559_66570[(1)] = (2));


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
});})(c__22961__auto___66564,out))
;
return ((function (switch__22938__auto__,c__22961__auto___66564,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____0 = (function (){
var statearr_66560 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66560[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__);

(statearr_66560[(1)] = (1));

return statearr_66560;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____1 = (function (state_66549){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_66549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e66561){if((e66561 instanceof Object)){
var ex__22942__auto__ = e66561;
var statearr_66562_66571 = state_66549;
(statearr_66562_66571[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66549);

return cljs.core.cst$kw$recur;
} else {
throw e66561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__66572 = state_66549;
state_66549 = G__66572;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__ = function(state_66549){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____1.call(this,state_66549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto___66564,out))
})();
var state__22963__auto__ = (function (){var statearr_66563 = f__22962__auto__.call(null);
(statearr_66563[(6)] = c__22961__auto___66564);

return statearr_66563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto___66564,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__66573,opts){
var map__66574 = p__66573;
var map__66574__$1 = (((((!((map__66574 == null))))?(((((map__66574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66574):map__66574);
var eval_body = cljs.core.get.call(null,map__66574__$1,cljs.core.cst$kw$eval_DASH_body);
var file = cljs.core.get.call(null,map__66574__$1,cljs.core.cst$kw$file);
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
}catch (e66576){var e = e66576;
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
return (function (p1__66577_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$namespace.cljs$core$IFn$_invoke$arity$1(p1__66577_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__66578){
var vec__66579 = p__66578;
var k = cljs.core.nth.call(null,vec__66579,(0),null);
var v = cljs.core.nth.call(null,vec__66579,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$namespace,k,cljs.core.cst$kw$type,cljs.core.cst$kw$namespace], null);
}),cljs.core.filter.call(null,(function (p__66582){
var vec__66583 = p__66582;
var k = cljs.core.nth.call(null,vec__66583,(0),null);
var v = cljs.core.nth.call(null,vec__66583,(1),null);
return cljs.core.cst$kw$figwheel_DASH_always.cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__66589,p__66590){
var map__66591 = p__66589;
var map__66591__$1 = (((((!((map__66591 == null))))?(((((map__66591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66591):map__66591);
var opts = map__66591__$1;
var before_jsload = cljs.core.get.call(null,map__66591__$1,cljs.core.cst$kw$before_DASH_jsload);
var on_jsload = cljs.core.get.call(null,map__66591__$1,cljs.core.cst$kw$on_DASH_jsload);
var reload_dependents = cljs.core.get.call(null,map__66591__$1,cljs.core.cst$kw$reload_DASH_dependents);
var map__66592 = p__66590;
var map__66592__$1 = (((((!((map__66592 == null))))?(((((map__66592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66592):map__66592);
var msg = map__66592__$1;
var files = cljs.core.get.call(null,map__66592__$1,cljs.core.cst$kw$files);
var figwheel_meta = cljs.core.get.call(null,map__66592__$1,cljs.core.cst$kw$figwheel_DASH_meta);
var recompile_dependents = cljs.core.get.call(null,map__66592__$1,cljs.core.cst$kw$recompile_DASH_dependents);
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22961__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22961__auto__,map__66591,map__66591__$1,opts,before_jsload,on_jsload,reload_dependents,map__66592,map__66592__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22962__auto__ = (function (){var switch__22938__auto__ = ((function (c__22961__auto__,map__66591,map__66591__$1,opts,before_jsload,on_jsload,reload_dependents,map__66592,map__66592__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_66746){
var state_val_66747 = (state_66746[(1)]);
if((state_val_66747 === (7))){
var inst_66606 = (state_66746[(7)]);
var inst_66609 = (state_66746[(8)]);
var inst_66607 = (state_66746[(9)]);
var inst_66608 = (state_66746[(10)]);
var inst_66614 = cljs.core._nth.call(null,inst_66607,inst_66609);
var inst_66615 = figwheel.client.file_reloading.eval_body.call(null,inst_66614,opts);
var inst_66616 = (inst_66609 + (1));
var tmp66748 = inst_66606;
var tmp66749 = inst_66607;
var tmp66750 = inst_66608;
var inst_66606__$1 = tmp66748;
var inst_66607__$1 = tmp66749;
var inst_66608__$1 = tmp66750;
var inst_66609__$1 = inst_66616;
var state_66746__$1 = (function (){var statearr_66751 = state_66746;
(statearr_66751[(11)] = inst_66615);

(statearr_66751[(7)] = inst_66606__$1);

(statearr_66751[(8)] = inst_66609__$1);

(statearr_66751[(9)] = inst_66607__$1);

(statearr_66751[(10)] = inst_66608__$1);

return statearr_66751;
})();
var statearr_66752_66835 = state_66746__$1;
(statearr_66752_66835[(2)] = null);

(statearr_66752_66835[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (20))){
var inst_66649 = (state_66746[(12)]);
var inst_66657 = figwheel.client.file_reloading.sort_files.call(null,inst_66649);
var state_66746__$1 = state_66746;
var statearr_66753_66836 = state_66746__$1;
(statearr_66753_66836[(2)] = inst_66657);

(statearr_66753_66836[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (27))){
var state_66746__$1 = state_66746;
var statearr_66754_66837 = state_66746__$1;
(statearr_66754_66837[(2)] = null);

(statearr_66754_66837[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (1))){
var inst_66598 = (state_66746[(13)]);
var inst_66595 = before_jsload.call(null,files);
var inst_66596 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_66597 = (function (){return ((function (inst_66598,inst_66595,inst_66596,state_val_66747,c__22961__auto__,map__66591,map__66591__$1,opts,before_jsload,on_jsload,reload_dependents,map__66592,map__66592__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__66586_SHARP_){
return cljs.core.cst$kw$eval_DASH_body.cljs$core$IFn$_invoke$arity$1(p1__66586_SHARP_);
});
;})(inst_66598,inst_66595,inst_66596,state_val_66747,c__22961__auto__,map__66591,map__66591__$1,opts,before_jsload,on_jsload,reload_dependents,map__66592,map__66592__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66598__$1 = cljs.core.filter.call(null,inst_66597,files);
var inst_66599 = cljs.core.not_empty.call(null,inst_66598__$1);
var state_66746__$1 = (function (){var statearr_66755 = state_66746;
(statearr_66755[(13)] = inst_66598__$1);

(statearr_66755[(14)] = inst_66596);

(statearr_66755[(15)] = inst_66595);

return statearr_66755;
})();
if(cljs.core.truth_(inst_66599)){
var statearr_66756_66838 = state_66746__$1;
(statearr_66756_66838[(1)] = (2));

} else {
var statearr_66757_66839 = state_66746__$1;
(statearr_66757_66839[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (24))){
var state_66746__$1 = state_66746;
var statearr_66758_66840 = state_66746__$1;
(statearr_66758_66840[(2)] = null);

(statearr_66758_66840[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (39))){
var inst_66699 = (state_66746[(16)]);
var state_66746__$1 = state_66746;
var statearr_66759_66841 = state_66746__$1;
(statearr_66759_66841[(2)] = inst_66699);

(statearr_66759_66841[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (46))){
var inst_66741 = (state_66746[(2)]);
var state_66746__$1 = state_66746;
var statearr_66760_66842 = state_66746__$1;
(statearr_66760_66842[(2)] = inst_66741);

(statearr_66760_66842[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (4))){
var inst_66643 = (state_66746[(2)]);
var inst_66644 = cljs.core.List.EMPTY;
var inst_66645 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_66644);
var inst_66646 = (function (){return ((function (inst_66643,inst_66644,inst_66645,state_val_66747,c__22961__auto__,map__66591,map__66591__$1,opts,before_jsload,on_jsload,reload_dependents,map__66592,map__66592__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__66587_SHARP_){
var and__4036__auto__ = cljs.core.cst$kw$namespace.cljs$core$IFn$_invoke$arity$1(p1__66587_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,cljs.core.cst$kw$eval_DASH_body.cljs$core$IFn$_invoke$arity$1(p1__66587_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__66587_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_66643,inst_66644,inst_66645,state_val_66747,c__22961__auto__,map__66591,map__66591__$1,opts,before_jsload,on_jsload,reload_dependents,map__66592,map__66592__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66647 = cljs.core.filter.call(null,inst_66646,files);
var inst_66648 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_66649 = cljs.core.concat.call(null,inst_66647,inst_66648);
var state_66746__$1 = (function (){var statearr_66761 = state_66746;
(statearr_66761[(17)] = inst_66643);

(statearr_66761[(18)] = inst_66645);

(statearr_66761[(12)] = inst_66649);

return statearr_66761;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_66762_66843 = state_66746__$1;
(statearr_66762_66843[(1)] = (16));

} else {
var statearr_66763_66844 = state_66746__$1;
(statearr_66763_66844[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (15))){
var inst_66633 = (state_66746[(2)]);
var state_66746__$1 = state_66746;
var statearr_66764_66845 = state_66746__$1;
(statearr_66764_66845[(2)] = inst_66633);

(statearr_66764_66845[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (21))){
var inst_66659 = (state_66746[(19)]);
var inst_66659__$1 = (state_66746[(2)]);
var inst_66660 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_66659__$1);
var state_66746__$1 = (function (){var statearr_66765 = state_66746;
(statearr_66765[(19)] = inst_66659__$1);

return statearr_66765;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66746__$1,(22),inst_66660);
} else {
if((state_val_66747 === (31))){
var inst_66744 = (state_66746[(2)]);
var state_66746__$1 = state_66746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66746__$1,inst_66744);
} else {
if((state_val_66747 === (32))){
var inst_66699 = (state_66746[(16)]);
var inst_66704 = inst_66699.cljs$lang$protocol_mask$partition0$;
var inst_66705 = (inst_66704 & (64));
var inst_66706 = inst_66699.cljs$core$ISeq$;
var inst_66707 = (cljs.core.PROTOCOL_SENTINEL === inst_66706);
var inst_66708 = ((inst_66705) || (inst_66707));
var state_66746__$1 = state_66746;
if(cljs.core.truth_(inst_66708)){
var statearr_66766_66846 = state_66746__$1;
(statearr_66766_66846[(1)] = (35));

} else {
var statearr_66767_66847 = state_66746__$1;
(statearr_66767_66847[(1)] = (36));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (40))){
var inst_66721 = (state_66746[(20)]);
var inst_66720 = (state_66746[(2)]);
var inst_66721__$1 = cljs.core.get.call(null,inst_66720,cljs.core.cst$kw$figwheel_DASH_no_DASH_load);
var inst_66722 = cljs.core.get.call(null,inst_66720,cljs.core.cst$kw$not_DASH_required);
var inst_66723 = cljs.core.not_empty.call(null,inst_66721__$1);
var state_66746__$1 = (function (){var statearr_66768 = state_66746;
(statearr_66768[(21)] = inst_66722);

(statearr_66768[(20)] = inst_66721__$1);

return statearr_66768;
})();
if(cljs.core.truth_(inst_66723)){
var statearr_66769_66848 = state_66746__$1;
(statearr_66769_66848[(1)] = (41));

} else {
var statearr_66770_66849 = state_66746__$1;
(statearr_66770_66849[(1)] = (42));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (33))){
var state_66746__$1 = state_66746;
var statearr_66771_66850 = state_66746__$1;
(statearr_66771_66850[(2)] = false);

(statearr_66771_66850[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (13))){
var inst_66619 = (state_66746[(22)]);
var inst_66623 = cljs.core.chunk_first.call(null,inst_66619);
var inst_66624 = cljs.core.chunk_rest.call(null,inst_66619);
var inst_66625 = cljs.core.count.call(null,inst_66623);
var inst_66606 = inst_66624;
var inst_66607 = inst_66623;
var inst_66608 = inst_66625;
var inst_66609 = (0);
var state_66746__$1 = (function (){var statearr_66772 = state_66746;
(statearr_66772[(7)] = inst_66606);

(statearr_66772[(8)] = inst_66609);

(statearr_66772[(9)] = inst_66607);

(statearr_66772[(10)] = inst_66608);

return statearr_66772;
})();
var statearr_66773_66851 = state_66746__$1;
(statearr_66773_66851[(2)] = null);

(statearr_66773_66851[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (22))){
var inst_66663 = (state_66746[(23)]);
var inst_66662 = (state_66746[(24)]);
var inst_66659 = (state_66746[(19)]);
var inst_66667 = (state_66746[(25)]);
var inst_66662__$1 = (state_66746[(2)]);
var inst_66663__$1 = cljs.core.filter.call(null,cljs.core.cst$kw$loaded_DASH_file,inst_66662__$1);
var inst_66664 = (function (){var all_files = inst_66659;
var res_SINGLEQUOTE_ = inst_66662__$1;
var res = inst_66663__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_66663,inst_66662,inst_66659,inst_66667,inst_66662__$1,inst_66663__$1,state_val_66747,c__22961__auto__,map__66591,map__66591__$1,opts,before_jsload,on_jsload,reload_dependents,map__66592,map__66592__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__66588_SHARP_){
return cljs.core.not.call(null,cljs.core.cst$kw$loaded_DASH_file.cljs$core$IFn$_invoke$arity$1(p1__66588_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_66663,inst_66662,inst_66659,inst_66667,inst_66662__$1,inst_66663__$1,state_val_66747,c__22961__auto__,map__66591,map__66591__$1,opts,before_jsload,on_jsload,reload_dependents,map__66592,map__66592__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66665 = cljs.core.filter.call(null,inst_66664,inst_66662__$1);
var inst_66666 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_66667__$1 = cljs.core.filter.call(null,cljs.core.cst$kw$loaded_DASH_file,inst_66666);
var inst_66668 = cljs.core.not_empty.call(null,inst_66667__$1);
var state_66746__$1 = (function (){var statearr_66774 = state_66746;
(statearr_66774[(23)] = inst_66663__$1);

(statearr_66774[(24)] = inst_66662__$1);

(statearr_66774[(26)] = inst_66665);

(statearr_66774[(25)] = inst_66667__$1);

return statearr_66774;
})();
if(cljs.core.truth_(inst_66668)){
var statearr_66775_66852 = state_66746__$1;
(statearr_66775_66852[(1)] = (23));

} else {
var statearr_66776_66853 = state_66746__$1;
(statearr_66776_66853[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (36))){
var state_66746__$1 = state_66746;
var statearr_66777_66854 = state_66746__$1;
(statearr_66777_66854[(2)] = false);

(statearr_66777_66854[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (41))){
var inst_66721 = (state_66746[(20)]);
var inst_66725 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,cljs.core.cst$kw$namespace);
var inst_66726 = cljs.core.map.call(null,inst_66725,inst_66721);
var inst_66727 = cljs.core.pr_str.call(null,inst_66726);
var inst_66728 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_66727)].join('');
var inst_66729 = figwheel.client.utils.log.call(null,inst_66728);
var state_66746__$1 = state_66746;
var statearr_66778_66855 = state_66746__$1;
(statearr_66778_66855[(2)] = inst_66729);

(statearr_66778_66855[(1)] = (43));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (43))){
var inst_66722 = (state_66746[(21)]);
var inst_66732 = (state_66746[(2)]);
var inst_66733 = cljs.core.not_empty.call(null,inst_66722);
var state_66746__$1 = (function (){var statearr_66779 = state_66746;
(statearr_66779[(27)] = inst_66732);

return statearr_66779;
})();
if(cljs.core.truth_(inst_66733)){
var statearr_66780_66856 = state_66746__$1;
(statearr_66780_66856[(1)] = (44));

} else {
var statearr_66781_66857 = state_66746__$1;
(statearr_66781_66857[(1)] = (45));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (29))){
var inst_66663 = (state_66746[(23)]);
var inst_66662 = (state_66746[(24)]);
var inst_66665 = (state_66746[(26)]);
var inst_66659 = (state_66746[(19)]);
var inst_66667 = (state_66746[(25)]);
var inst_66699 = (state_66746[(16)]);
var inst_66695 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: NOT loading these files ");
var inst_66698 = (function (){var all_files = inst_66659;
var res_SINGLEQUOTE_ = inst_66662;
var res = inst_66663;
var files_not_loaded = inst_66665;
var dependencies_that_loaded = inst_66667;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66663,inst_66662,inst_66665,inst_66659,inst_66667,inst_66699,inst_66695,state_val_66747,c__22961__auto__,map__66591,map__66591__$1,opts,before_jsload,on_jsload,reload_dependents,map__66592,map__66592__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__66697){
var map__66782 = p__66697;
var map__66782__$1 = (((((!((map__66782 == null))))?(((((map__66782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66782):map__66782);
var namespace = cljs.core.get.call(null,map__66782__$1,cljs.core.cst$kw$namespace);
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66663,inst_66662,inst_66665,inst_66659,inst_66667,inst_66699,inst_66695,state_val_66747,c__22961__auto__,map__66591,map__66591__$1,opts,before_jsload,on_jsload,reload_dependents,map__66592,map__66592__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66699__$1 = cljs.core.group_by.call(null,inst_66698,inst_66665);
var inst_66701 = (inst_66699__$1 == null);
var inst_66702 = cljs.core.not.call(null,inst_66701);
var state_66746__$1 = (function (){var statearr_66784 = state_66746;
(statearr_66784[(28)] = inst_66695);

(statearr_66784[(16)] = inst_66699__$1);

return statearr_66784;
})();
if(inst_66702){
var statearr_66785_66858 = state_66746__$1;
(statearr_66785_66858[(1)] = (32));

} else {
var statearr_66786_66859 = state_66746__$1;
(statearr_66786_66859[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (44))){
var inst_66722 = (state_66746[(21)]);
var inst_66735 = cljs.core.map.call(null,cljs.core.cst$kw$file,inst_66722);
var inst_66736 = cljs.core.pr_str.call(null,inst_66735);
var inst_66737 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_66736)].join('');
var inst_66738 = figwheel.client.utils.log.call(null,inst_66737);
var state_66746__$1 = state_66746;
var statearr_66787_66860 = state_66746__$1;
(statearr_66787_66860[(2)] = inst_66738);

(statearr_66787_66860[(1)] = (46));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (6))){
var inst_66640 = (state_66746[(2)]);
var state_66746__$1 = state_66746;
var statearr_66788_66861 = state_66746__$1;
(statearr_66788_66861[(2)] = inst_66640);

(statearr_66788_66861[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (28))){
var inst_66665 = (state_66746[(26)]);
var inst_66692 = (state_66746[(2)]);
var inst_66693 = cljs.core.not_empty.call(null,inst_66665);
var state_66746__$1 = (function (){var statearr_66789 = state_66746;
(statearr_66789[(29)] = inst_66692);

return statearr_66789;
})();
if(cljs.core.truth_(inst_66693)){
var statearr_66790_66862 = state_66746__$1;
(statearr_66790_66862[(1)] = (29));

} else {
var statearr_66791_66863 = state_66746__$1;
(statearr_66791_66863[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (25))){
var inst_66663 = (state_66746[(23)]);
var inst_66679 = (state_66746[(2)]);
var inst_66680 = cljs.core.not_empty.call(null,inst_66663);
var state_66746__$1 = (function (){var statearr_66792 = state_66746;
(statearr_66792[(30)] = inst_66679);

return statearr_66792;
})();
if(cljs.core.truth_(inst_66680)){
var statearr_66793_66864 = state_66746__$1;
(statearr_66793_66864[(1)] = (26));

} else {
var statearr_66794_66865 = state_66746__$1;
(statearr_66794_66865[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (34))){
var inst_66715 = (state_66746[(2)]);
var state_66746__$1 = state_66746;
if(cljs.core.truth_(inst_66715)){
var statearr_66795_66866 = state_66746__$1;
(statearr_66795_66866[(1)] = (38));

} else {
var statearr_66796_66867 = state_66746__$1;
(statearr_66796_66867[(1)] = (39));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (17))){
var state_66746__$1 = state_66746;
var statearr_66797_66868 = state_66746__$1;
(statearr_66797_66868[(2)] = recompile_dependents);

(statearr_66797_66868[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (3))){
var state_66746__$1 = state_66746;
var statearr_66798_66869 = state_66746__$1;
(statearr_66798_66869[(2)] = null);

(statearr_66798_66869[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (12))){
var inst_66636 = (state_66746[(2)]);
var state_66746__$1 = state_66746;
var statearr_66799_66870 = state_66746__$1;
(statearr_66799_66870[(2)] = inst_66636);

(statearr_66799_66870[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (2))){
var inst_66598 = (state_66746[(13)]);
var inst_66605 = cljs.core.seq.call(null,inst_66598);
var inst_66606 = inst_66605;
var inst_66607 = null;
var inst_66608 = (0);
var inst_66609 = (0);
var state_66746__$1 = (function (){var statearr_66800 = state_66746;
(statearr_66800[(7)] = inst_66606);

(statearr_66800[(8)] = inst_66609);

(statearr_66800[(9)] = inst_66607);

(statearr_66800[(10)] = inst_66608);

return statearr_66800;
})();
var statearr_66801_66871 = state_66746__$1;
(statearr_66801_66871[(2)] = null);

(statearr_66801_66871[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (23))){
var inst_66663 = (state_66746[(23)]);
var inst_66662 = (state_66746[(24)]);
var inst_66665 = (state_66746[(26)]);
var inst_66659 = (state_66746[(19)]);
var inst_66667 = (state_66746[(25)]);
var inst_66670 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: loaded these dependencies");
var inst_66672 = (function (){var all_files = inst_66659;
var res_SINGLEQUOTE_ = inst_66662;
var res = inst_66663;
var files_not_loaded = inst_66665;
var dependencies_that_loaded = inst_66667;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66663,inst_66662,inst_66665,inst_66659,inst_66667,inst_66670,state_val_66747,c__22961__auto__,map__66591,map__66591__$1,opts,before_jsload,on_jsload,reload_dependents,map__66592,map__66592__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__66671){
var map__66802 = p__66671;
var map__66802__$1 = (((((!((map__66802 == null))))?(((((map__66802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66802):map__66802);
var request_url = cljs.core.get.call(null,map__66802__$1,cljs.core.cst$kw$request_DASH_url);
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66663,inst_66662,inst_66665,inst_66659,inst_66667,inst_66670,state_val_66747,c__22961__auto__,map__66591,map__66591__$1,opts,before_jsload,on_jsload,reload_dependents,map__66592,map__66592__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66673 = cljs.core.reverse.call(null,inst_66667);
var inst_66674 = cljs.core.map.call(null,inst_66672,inst_66673);
var inst_66675 = cljs.core.pr_str.call(null,inst_66674);
var inst_66676 = figwheel.client.utils.log.call(null,inst_66675);
var state_66746__$1 = (function (){var statearr_66804 = state_66746;
(statearr_66804[(31)] = inst_66670);

return statearr_66804;
})();
var statearr_66805_66872 = state_66746__$1;
(statearr_66805_66872[(2)] = inst_66676);

(statearr_66805_66872[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (35))){
var state_66746__$1 = state_66746;
var statearr_66806_66873 = state_66746__$1;
(statearr_66806_66873[(2)] = true);

(statearr_66806_66873[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (19))){
var inst_66649 = (state_66746[(12)]);
var inst_66655 = figwheel.client.file_reloading.expand_files.call(null,inst_66649);
var state_66746__$1 = state_66746;
var statearr_66807_66874 = state_66746__$1;
(statearr_66807_66874[(2)] = inst_66655);

(statearr_66807_66874[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (11))){
var state_66746__$1 = state_66746;
var statearr_66808_66875 = state_66746__$1;
(statearr_66808_66875[(2)] = null);

(statearr_66808_66875[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (9))){
var inst_66638 = (state_66746[(2)]);
var state_66746__$1 = state_66746;
var statearr_66809_66876 = state_66746__$1;
(statearr_66809_66876[(2)] = inst_66638);

(statearr_66809_66876[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (5))){
var inst_66609 = (state_66746[(8)]);
var inst_66608 = (state_66746[(10)]);
var inst_66611 = (inst_66609 < inst_66608);
var inst_66612 = inst_66611;
var state_66746__$1 = state_66746;
if(cljs.core.truth_(inst_66612)){
var statearr_66810_66877 = state_66746__$1;
(statearr_66810_66877[(1)] = (7));

} else {
var statearr_66811_66878 = state_66746__$1;
(statearr_66811_66878[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (14))){
var inst_66619 = (state_66746[(22)]);
var inst_66628 = cljs.core.first.call(null,inst_66619);
var inst_66629 = figwheel.client.file_reloading.eval_body.call(null,inst_66628,opts);
var inst_66630 = cljs.core.next.call(null,inst_66619);
var inst_66606 = inst_66630;
var inst_66607 = null;
var inst_66608 = (0);
var inst_66609 = (0);
var state_66746__$1 = (function (){var statearr_66812 = state_66746;
(statearr_66812[(7)] = inst_66606);

(statearr_66812[(8)] = inst_66609);

(statearr_66812[(32)] = inst_66629);

(statearr_66812[(9)] = inst_66607);

(statearr_66812[(10)] = inst_66608);

return statearr_66812;
})();
var statearr_66813_66879 = state_66746__$1;
(statearr_66813_66879[(2)] = null);

(statearr_66813_66879[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (45))){
var state_66746__$1 = state_66746;
var statearr_66814_66880 = state_66746__$1;
(statearr_66814_66880[(2)] = null);

(statearr_66814_66880[(1)] = (46));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (26))){
var inst_66663 = (state_66746[(23)]);
var inst_66662 = (state_66746[(24)]);
var inst_66665 = (state_66746[(26)]);
var inst_66659 = (state_66746[(19)]);
var inst_66667 = (state_66746[(25)]);
var inst_66682 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: loaded these files");
var inst_66684 = (function (){var all_files = inst_66659;
var res_SINGLEQUOTE_ = inst_66662;
var res = inst_66663;
var files_not_loaded = inst_66665;
var dependencies_that_loaded = inst_66667;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66663,inst_66662,inst_66665,inst_66659,inst_66667,inst_66682,state_val_66747,c__22961__auto__,map__66591,map__66591__$1,opts,before_jsload,on_jsload,reload_dependents,map__66592,map__66592__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__66683){
var map__66815 = p__66683;
var map__66815__$1 = (((((!((map__66815 == null))))?(((((map__66815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66815):map__66815);
var namespace = cljs.core.get.call(null,map__66815__$1,cljs.core.cst$kw$namespace);
var file = cljs.core.get.call(null,map__66815__$1,cljs.core.cst$kw$file);
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66663,inst_66662,inst_66665,inst_66659,inst_66667,inst_66682,state_val_66747,c__22961__auto__,map__66591,map__66591__$1,opts,before_jsload,on_jsload,reload_dependents,map__66592,map__66592__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66685 = cljs.core.map.call(null,inst_66684,inst_66663);
var inst_66686 = cljs.core.pr_str.call(null,inst_66685);
var inst_66687 = figwheel.client.utils.log.call(null,inst_66686);
var inst_66688 = (function (){var all_files = inst_66659;
var res_SINGLEQUOTE_ = inst_66662;
var res = inst_66663;
var files_not_loaded = inst_66665;
var dependencies_that_loaded = inst_66667;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66663,inst_66662,inst_66665,inst_66659,inst_66667,inst_66682,inst_66684,inst_66685,inst_66686,inst_66687,state_val_66747,c__22961__auto__,map__66591,map__66591__$1,opts,before_jsload,on_jsload,reload_dependents,map__66592,map__66592__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66663,inst_66662,inst_66665,inst_66659,inst_66667,inst_66682,inst_66684,inst_66685,inst_66686,inst_66687,state_val_66747,c__22961__auto__,map__66591,map__66591__$1,opts,before_jsload,on_jsload,reload_dependents,map__66592,map__66592__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66689 = setTimeout(inst_66688,(10));
var state_66746__$1 = (function (){var statearr_66817 = state_66746;
(statearr_66817[(33)] = inst_66687);

(statearr_66817[(34)] = inst_66682);

return statearr_66817;
})();
var statearr_66818_66881 = state_66746__$1;
(statearr_66818_66881[(2)] = inst_66689);

(statearr_66818_66881[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (16))){
var state_66746__$1 = state_66746;
var statearr_66819_66882 = state_66746__$1;
(statearr_66819_66882[(2)] = reload_dependents);

(statearr_66819_66882[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (38))){
var inst_66699 = (state_66746[(16)]);
var inst_66717 = cljs.core.apply.call(null,cljs.core.hash_map,inst_66699);
var state_66746__$1 = state_66746;
var statearr_66820_66883 = state_66746__$1;
(statearr_66820_66883[(2)] = inst_66717);

(statearr_66820_66883[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (30))){
var state_66746__$1 = state_66746;
var statearr_66821_66884 = state_66746__$1;
(statearr_66821_66884[(2)] = null);

(statearr_66821_66884[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (10))){
var inst_66619 = (state_66746[(22)]);
var inst_66621 = cljs.core.chunked_seq_QMARK_.call(null,inst_66619);
var state_66746__$1 = state_66746;
if(inst_66621){
var statearr_66822_66885 = state_66746__$1;
(statearr_66822_66885[(1)] = (13));

} else {
var statearr_66823_66886 = state_66746__$1;
(statearr_66823_66886[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (18))){
var inst_66653 = (state_66746[(2)]);
var state_66746__$1 = state_66746;
if(cljs.core.truth_(inst_66653)){
var statearr_66824_66887 = state_66746__$1;
(statearr_66824_66887[(1)] = (19));

} else {
var statearr_66825_66888 = state_66746__$1;
(statearr_66825_66888[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (42))){
var state_66746__$1 = state_66746;
var statearr_66826_66889 = state_66746__$1;
(statearr_66826_66889[(2)] = null);

(statearr_66826_66889[(1)] = (43));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (37))){
var inst_66712 = (state_66746[(2)]);
var state_66746__$1 = state_66746;
var statearr_66827_66890 = state_66746__$1;
(statearr_66827_66890[(2)] = inst_66712);

(statearr_66827_66890[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_66747 === (8))){
var inst_66606 = (state_66746[(7)]);
var inst_66619 = (state_66746[(22)]);
var inst_66619__$1 = cljs.core.seq.call(null,inst_66606);
var state_66746__$1 = (function (){var statearr_66828 = state_66746;
(statearr_66828[(22)] = inst_66619__$1);

return statearr_66828;
})();
if(inst_66619__$1){
var statearr_66829_66891 = state_66746__$1;
(statearr_66829_66891[(1)] = (10));

} else {
var statearr_66830_66892 = state_66746__$1;
(statearr_66830_66892[(1)] = (11));

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
});})(c__22961__auto__,map__66591,map__66591__$1,opts,before_jsload,on_jsload,reload_dependents,map__66592,map__66592__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22938__auto__,c__22961__auto__,map__66591,map__66591__$1,opts,before_jsload,on_jsload,reload_dependents,map__66592,map__66592__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____0 = (function (){
var statearr_66831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66831[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__);

(statearr_66831[(1)] = (1));

return statearr_66831;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____1 = (function (state_66746){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_66746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e66832){if((e66832 instanceof Object)){
var ex__22942__auto__ = e66832;
var statearr_66833_66893 = state_66746;
(statearr_66833_66893[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66746);

return cljs.core.cst$kw$recur;
} else {
throw e66832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__66894 = state_66746;
state_66746 = G__66894;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__ = function(state_66746){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____1.call(this,state_66746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__,map__66591,map__66591__$1,opts,before_jsload,on_jsload,reload_dependents,map__66592,map__66592__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22963__auto__ = (function (){var statearr_66834 = f__22962__auto__.call(null);
(statearr_66834[(6)] = c__22961__auto__);

return statearr_66834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto__,map__66591,map__66591__$1,opts,before_jsload,on_jsload,reload_dependents,map__66592,map__66592__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22961__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__66897,link){
var map__66898 = p__66897;
var map__66898__$1 = (((((!((map__66898 == null))))?(((((map__66898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66898):map__66898);
var file = cljs.core.get.call(null,map__66898__$1,cljs.core.cst$kw$file);
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__66898,map__66898__$1,file){
return (function (p1__66895_SHARP_,p2__66896_SHARP_){
if(cljs.core._EQ_.call(null,p1__66895_SHARP_,p2__66896_SHARP_)){
return p1__66895_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__66898,map__66898__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__66901){
var map__66902 = p__66901;
var map__66902__$1 = (((((!((map__66902 == null))))?(((((map__66902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66902):map__66902);
var match_length = cljs.core.get.call(null,map__66902__$1,cljs.core.cst$kw$match_DASH_length);
var current_url_length = cljs.core.get.call(null,map__66902__$1,cljs.core.cst$kw$current_DASH_url_DASH_length);
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__66900_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__66900_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__66904_SHARP_,p2__66905_SHARP_){
return cljs.core.assoc.call(null,p1__66904_SHARP_,cljs.core.get.call(null,p2__66905_SHARP_,key),p2__66905_SHARP_);
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
var loaded_f_datas_66906 = cljs.core.filter.call(null,cljs.core.cst$kw$loaded,f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_66906);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_66906);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__66907,p__66908){
var map__66909 = p__66907;
var map__66909__$1 = (((((!((map__66909 == null))))?(((((map__66909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66909):map__66909);
var on_cssload = cljs.core.get.call(null,map__66909__$1,cljs.core.cst$kw$on_DASH_cssload);
var map__66910 = p__66908;
var map__66910__$1 = (((((!((map__66910 == null))))?(((((map__66910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66910):map__66910);
var files_msg = map__66910__$1;
var files = cljs.core.get.call(null,map__66910__$1,cljs.core.cst$kw$files);
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

//# sourceMappingURL=file_reloading.js.map?rel=1545335808386
