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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__54182_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__54182_SHARP_));
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
var seq__54183 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__54184 = null;
var count__54185 = (0);
var i__54186 = (0);
while(true){
if((i__54186 < count__54185)){
var n = cljs.core._nth.call(null,chunk__54184,i__54186);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__54187 = seq__54183;
var G__54188 = chunk__54184;
var G__54189 = count__54185;
var G__54190 = (i__54186 + (1));
seq__54183 = G__54187;
chunk__54184 = G__54188;
count__54185 = G__54189;
i__54186 = G__54190;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__54183);
if(temp__5457__auto__){
var seq__54183__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54183__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__54183__$1);
var G__54191 = cljs.core.chunk_rest.call(null,seq__54183__$1);
var G__54192 = c__4461__auto__;
var G__54193 = cljs.core.count.call(null,c__4461__auto__);
var G__54194 = (0);
seq__54183 = G__54191;
chunk__54184 = G__54192;
count__54185 = G__54193;
i__54186 = G__54194;
continue;
} else {
var n = cljs.core.first.call(null,seq__54183__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__54195 = cljs.core.next.call(null,seq__54183__$1);
var G__54196 = null;
var G__54197 = (0);
var G__54198 = (0);
seq__54183 = G__54195;
chunk__54184 = G__54196;
count__54185 = G__54197;
i__54186 = G__54198;
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
return cljs.core.some.call(null,(function (p__54199){
var vec__54200 = p__54199;
var _ = cljs.core.nth.call(null,vec__54200,(0),null);
var v = cljs.core.nth.call(null,vec__54200,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__54203){
var vec__54204 = p__54203;
var k = cljs.core.nth.call(null,vec__54204,(0),null);
var v = cljs.core.nth.call(null,vec__54204,(1),null);
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

var seq__54216_54224 = cljs.core.seq.call(null,deps);
var chunk__54217_54225 = null;
var count__54218_54226 = (0);
var i__54219_54227 = (0);
while(true){
if((i__54219_54227 < count__54218_54226)){
var dep_54228 = cljs.core._nth.call(null,chunk__54217_54225,i__54219_54227);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_54228;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_54228));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_54228,(depth + (1)),state);
} else {
}


var G__54229 = seq__54216_54224;
var G__54230 = chunk__54217_54225;
var G__54231 = count__54218_54226;
var G__54232 = (i__54219_54227 + (1));
seq__54216_54224 = G__54229;
chunk__54217_54225 = G__54230;
count__54218_54226 = G__54231;
i__54219_54227 = G__54232;
continue;
} else {
var temp__5457__auto___54233 = cljs.core.seq.call(null,seq__54216_54224);
if(temp__5457__auto___54233){
var seq__54216_54234__$1 = temp__5457__auto___54233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54216_54234__$1)){
var c__4461__auto___54235 = cljs.core.chunk_first.call(null,seq__54216_54234__$1);
var G__54236 = cljs.core.chunk_rest.call(null,seq__54216_54234__$1);
var G__54237 = c__4461__auto___54235;
var G__54238 = cljs.core.count.call(null,c__4461__auto___54235);
var G__54239 = (0);
seq__54216_54224 = G__54236;
chunk__54217_54225 = G__54237;
count__54218_54226 = G__54238;
i__54219_54227 = G__54239;
continue;
} else {
var dep_54240 = cljs.core.first.call(null,seq__54216_54234__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_54240;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_54240));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_54240,(depth + (1)),state);
} else {
}


var G__54241 = cljs.core.next.call(null,seq__54216_54234__$1);
var G__54242 = null;
var G__54243 = (0);
var G__54244 = (0);
seq__54216_54224 = G__54241;
chunk__54217_54225 = G__54242;
count__54218_54226 = G__54243;
i__54219_54227 = G__54244;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__54220){
var vec__54221 = p__54220;
var seq__54222 = cljs.core.seq.call(null,vec__54221);
var first__54223 = cljs.core.first.call(null,seq__54222);
var seq__54222__$1 = cljs.core.next.call(null,seq__54222);
var x = first__54223;
var xs = seq__54222__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__54221,seq__54222,first__54223,seq__54222__$1,x,xs,get_deps__$1){
return (function (p1__54207_SHARP_){
return clojure.set.difference.call(null,p1__54207_SHARP_,x);
});})(vec__54221,seq__54222,first__54223,seq__54222__$1,x,xs,get_deps__$1))
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
var seq__54245 = cljs.core.seq.call(null,provides);
var chunk__54246 = null;
var count__54247 = (0);
var i__54248 = (0);
while(true){
if((i__54248 < count__54247)){
var prov = cljs.core._nth.call(null,chunk__54246,i__54248);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__54249_54257 = cljs.core.seq.call(null,requires);
var chunk__54250_54258 = null;
var count__54251_54259 = (0);
var i__54252_54260 = (0);
while(true){
if((i__54252_54260 < count__54251_54259)){
var req_54261 = cljs.core._nth.call(null,chunk__54250_54258,i__54252_54260);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54261,prov);


var G__54262 = seq__54249_54257;
var G__54263 = chunk__54250_54258;
var G__54264 = count__54251_54259;
var G__54265 = (i__54252_54260 + (1));
seq__54249_54257 = G__54262;
chunk__54250_54258 = G__54263;
count__54251_54259 = G__54264;
i__54252_54260 = G__54265;
continue;
} else {
var temp__5457__auto___54266 = cljs.core.seq.call(null,seq__54249_54257);
if(temp__5457__auto___54266){
var seq__54249_54267__$1 = temp__5457__auto___54266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54249_54267__$1)){
var c__4461__auto___54268 = cljs.core.chunk_first.call(null,seq__54249_54267__$1);
var G__54269 = cljs.core.chunk_rest.call(null,seq__54249_54267__$1);
var G__54270 = c__4461__auto___54268;
var G__54271 = cljs.core.count.call(null,c__4461__auto___54268);
var G__54272 = (0);
seq__54249_54257 = G__54269;
chunk__54250_54258 = G__54270;
count__54251_54259 = G__54271;
i__54252_54260 = G__54272;
continue;
} else {
var req_54273 = cljs.core.first.call(null,seq__54249_54267__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54273,prov);


var G__54274 = cljs.core.next.call(null,seq__54249_54267__$1);
var G__54275 = null;
var G__54276 = (0);
var G__54277 = (0);
seq__54249_54257 = G__54274;
chunk__54250_54258 = G__54275;
count__54251_54259 = G__54276;
i__54252_54260 = G__54277;
continue;
}
} else {
}
}
break;
}


var G__54278 = seq__54245;
var G__54279 = chunk__54246;
var G__54280 = count__54247;
var G__54281 = (i__54248 + (1));
seq__54245 = G__54278;
chunk__54246 = G__54279;
count__54247 = G__54280;
i__54248 = G__54281;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__54245);
if(temp__5457__auto__){
var seq__54245__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54245__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__54245__$1);
var G__54282 = cljs.core.chunk_rest.call(null,seq__54245__$1);
var G__54283 = c__4461__auto__;
var G__54284 = cljs.core.count.call(null,c__4461__auto__);
var G__54285 = (0);
seq__54245 = G__54282;
chunk__54246 = G__54283;
count__54247 = G__54284;
i__54248 = G__54285;
continue;
} else {
var prov = cljs.core.first.call(null,seq__54245__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__54253_54286 = cljs.core.seq.call(null,requires);
var chunk__54254_54287 = null;
var count__54255_54288 = (0);
var i__54256_54289 = (0);
while(true){
if((i__54256_54289 < count__54255_54288)){
var req_54290 = cljs.core._nth.call(null,chunk__54254_54287,i__54256_54289);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54290,prov);


var G__54291 = seq__54253_54286;
var G__54292 = chunk__54254_54287;
var G__54293 = count__54255_54288;
var G__54294 = (i__54256_54289 + (1));
seq__54253_54286 = G__54291;
chunk__54254_54287 = G__54292;
count__54255_54288 = G__54293;
i__54256_54289 = G__54294;
continue;
} else {
var temp__5457__auto___54295__$1 = cljs.core.seq.call(null,seq__54253_54286);
if(temp__5457__auto___54295__$1){
var seq__54253_54296__$1 = temp__5457__auto___54295__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54253_54296__$1)){
var c__4461__auto___54297 = cljs.core.chunk_first.call(null,seq__54253_54296__$1);
var G__54298 = cljs.core.chunk_rest.call(null,seq__54253_54296__$1);
var G__54299 = c__4461__auto___54297;
var G__54300 = cljs.core.count.call(null,c__4461__auto___54297);
var G__54301 = (0);
seq__54253_54286 = G__54298;
chunk__54254_54287 = G__54299;
count__54255_54288 = G__54300;
i__54256_54289 = G__54301;
continue;
} else {
var req_54302 = cljs.core.first.call(null,seq__54253_54296__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54302,prov);


var G__54303 = cljs.core.next.call(null,seq__54253_54296__$1);
var G__54304 = null;
var G__54305 = (0);
var G__54306 = (0);
seq__54253_54286 = G__54303;
chunk__54254_54287 = G__54304;
count__54255_54288 = G__54305;
i__54256_54289 = G__54306;
continue;
}
} else {
}
}
break;
}


var G__54307 = cljs.core.next.call(null,seq__54245__$1);
var G__54308 = null;
var G__54309 = (0);
var G__54310 = (0);
seq__54245 = G__54307;
chunk__54246 = G__54308;
count__54247 = G__54309;
i__54248 = G__54310;
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
var seq__54311_54315 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__54312_54316 = null;
var count__54313_54317 = (0);
var i__54314_54318 = (0);
while(true){
if((i__54314_54318 < count__54313_54317)){
var ns_54319 = cljs.core._nth.call(null,chunk__54312_54316,i__54314_54318);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_54319);


var G__54320 = seq__54311_54315;
var G__54321 = chunk__54312_54316;
var G__54322 = count__54313_54317;
var G__54323 = (i__54314_54318 + (1));
seq__54311_54315 = G__54320;
chunk__54312_54316 = G__54321;
count__54313_54317 = G__54322;
i__54314_54318 = G__54323;
continue;
} else {
var temp__5457__auto___54324 = cljs.core.seq.call(null,seq__54311_54315);
if(temp__5457__auto___54324){
var seq__54311_54325__$1 = temp__5457__auto___54324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54311_54325__$1)){
var c__4461__auto___54326 = cljs.core.chunk_first.call(null,seq__54311_54325__$1);
var G__54327 = cljs.core.chunk_rest.call(null,seq__54311_54325__$1);
var G__54328 = c__4461__auto___54326;
var G__54329 = cljs.core.count.call(null,c__4461__auto___54326);
var G__54330 = (0);
seq__54311_54315 = G__54327;
chunk__54312_54316 = G__54328;
count__54313_54317 = G__54329;
i__54314_54318 = G__54330;
continue;
} else {
var ns_54331 = cljs.core.first.call(null,seq__54311_54325__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_54331);


var G__54332 = cljs.core.next.call(null,seq__54311_54325__$1);
var G__54333 = null;
var G__54334 = (0);
var G__54335 = (0);
seq__54311_54315 = G__54332;
chunk__54312_54316 = G__54333;
count__54313_54317 = G__54334;
i__54314_54318 = G__54335;
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
var G__54336__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__54336 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54337__i = 0, G__54337__a = new Array(arguments.length -  0);
while (G__54337__i < G__54337__a.length) {G__54337__a[G__54337__i] = arguments[G__54337__i + 0]; ++G__54337__i;}
  args = new cljs.core.IndexedSeq(G__54337__a,0,null);
} 
return G__54336__delegate.call(this,args);};
G__54336.cljs$lang$maxFixedArity = 0;
G__54336.cljs$lang$applyTo = (function (arglist__54338){
var args = cljs.core.seq(arglist__54338);
return G__54336__delegate(args);
});
G__54336.cljs$core$IFn$_invoke$arity$variadic = G__54336__delegate;
return G__54336;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__54339_SHARP_,p2__54340_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54339_SHARP_)),p2__54340_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__54341_SHARP_,p2__54342_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54341_SHARP_),p2__54342_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__54343 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__54343.addCallback(((function (G__54343){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__54343))
);

G__54343.addErrback(((function (G__54343){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__54343))
);

return G__54343;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e54344){if((e54344 instanceof Error)){
var e = e54344;
figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,e.stack);

return false;
} else {
throw e54344;

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
}catch (e54345){if((e54345 instanceof Error)){
var e = e54345;
figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,e.stack);

return false;
} else {
throw e54345;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__54346 = cljs.core._EQ_;
var expr__54347 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__54346.call(null,cljs.core.cst$kw$node,expr__54347))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__54346.call(null,cljs.core.cst$kw$html,expr__54347))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__54346.call(null,cljs.core.cst$kw$worker,expr__54347))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__54346,expr__54347){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__54346,expr__54347))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__54349,callback){
var map__54350 = p__54349;
var map__54350__$1 = (((((!((map__54350 == null))))?(((((map__54350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54350):map__54350);
var file_msg = map__54350__$1;
var request_url = cljs.core.get.call(null,map__54350__$1,cljs.core.cst$kw$request_DASH_url);

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__54350,map__54350__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,cljs.core.cst$kw$loaded_DASH_file,true)], null));
} else {
figwheel.client.utils.log.call(null,cljs.core.cst$kw$error,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__54350,map__54350__$1,file_msg,request_url))
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
return (function (state_54388){
var state_val_54389 = (state_54388[(1)]);
if((state_val_54389 === (7))){
var inst_54384 = (state_54388[(2)]);
var state_54388__$1 = state_54388;
var statearr_54390_54416 = state_54388__$1;
(statearr_54390_54416[(2)] = inst_54384);

(statearr_54390_54416[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54389 === (1))){
var state_54388__$1 = state_54388;
var statearr_54391_54417 = state_54388__$1;
(statearr_54391_54417[(2)] = null);

(statearr_54391_54417[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54389 === (4))){
var inst_54354 = (state_54388[(7)]);
var inst_54354__$1 = (state_54388[(2)]);
var state_54388__$1 = (function (){var statearr_54392 = state_54388;
(statearr_54392[(7)] = inst_54354__$1);

return statearr_54392;
})();
if(cljs.core.truth_(inst_54354__$1)){
var statearr_54393_54418 = state_54388__$1;
(statearr_54393_54418[(1)] = (5));

} else {
var statearr_54394_54419 = state_54388__$1;
(statearr_54394_54419[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_54389 === (15))){
var inst_54369 = (state_54388[(8)]);
var inst_54367 = (state_54388[(9)]);
var inst_54371 = inst_54369.call(null,inst_54367);
var state_54388__$1 = state_54388;
var statearr_54395_54420 = state_54388__$1;
(statearr_54395_54420[(2)] = inst_54371);

(statearr_54395_54420[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54389 === (13))){
var inst_54378 = (state_54388[(2)]);
var state_54388__$1 = state_54388;
var statearr_54396_54421 = state_54388__$1;
(statearr_54396_54421[(2)] = inst_54378);

(statearr_54396_54421[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54389 === (6))){
var state_54388__$1 = state_54388;
var statearr_54397_54422 = state_54388__$1;
(statearr_54397_54422[(2)] = null);

(statearr_54397_54422[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54389 === (17))){
var inst_54375 = (state_54388[(2)]);
var state_54388__$1 = state_54388;
var statearr_54398_54423 = state_54388__$1;
(statearr_54398_54423[(2)] = inst_54375);

(statearr_54398_54423[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54389 === (3))){
var inst_54386 = (state_54388[(2)]);
var state_54388__$1 = state_54388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54388__$1,inst_54386);
} else {
if((state_val_54389 === (12))){
var state_54388__$1 = state_54388;
var statearr_54399_54424 = state_54388__$1;
(statearr_54399_54424[(2)] = null);

(statearr_54399_54424[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54389 === (2))){
var state_54388__$1 = state_54388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54388__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_54389 === (11))){
var inst_54359 = (state_54388[(10)]);
var inst_54365 = figwheel.client.file_reloading.blocking_load.call(null,inst_54359);
var state_54388__$1 = state_54388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54388__$1,(14),inst_54365);
} else {
if((state_val_54389 === (9))){
var inst_54359 = (state_54388[(10)]);
var state_54388__$1 = state_54388;
if(cljs.core.truth_(inst_54359)){
var statearr_54400_54425 = state_54388__$1;
(statearr_54400_54425[(1)] = (11));

} else {
var statearr_54401_54426 = state_54388__$1;
(statearr_54401_54426[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_54389 === (5))){
var inst_54354 = (state_54388[(7)]);
var inst_54360 = (state_54388[(11)]);
var inst_54359 = cljs.core.nth.call(null,inst_54354,(0),null);
var inst_54360__$1 = cljs.core.nth.call(null,inst_54354,(1),null);
var state_54388__$1 = (function (){var statearr_54402 = state_54388;
(statearr_54402[(11)] = inst_54360__$1);

(statearr_54402[(10)] = inst_54359);

return statearr_54402;
})();
if(cljs.core.truth_(inst_54360__$1)){
var statearr_54403_54427 = state_54388__$1;
(statearr_54403_54427[(1)] = (8));

} else {
var statearr_54404_54428 = state_54388__$1;
(statearr_54404_54428[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_54389 === (14))){
var inst_54369 = (state_54388[(8)]);
var inst_54359 = (state_54388[(10)]);
var inst_54367 = (state_54388[(2)]);
var inst_54368 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_54369__$1 = cljs.core.get.call(null,inst_54368,inst_54359);
var state_54388__$1 = (function (){var statearr_54405 = state_54388;
(statearr_54405[(8)] = inst_54369__$1);

(statearr_54405[(9)] = inst_54367);

return statearr_54405;
})();
if(cljs.core.truth_(inst_54369__$1)){
var statearr_54406_54429 = state_54388__$1;
(statearr_54406_54429[(1)] = (15));

} else {
var statearr_54407_54430 = state_54388__$1;
(statearr_54407_54430[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_54389 === (16))){
var inst_54367 = (state_54388[(9)]);
var inst_54373 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_54367);
var state_54388__$1 = state_54388;
var statearr_54408_54431 = state_54388__$1;
(statearr_54408_54431[(2)] = inst_54373);

(statearr_54408_54431[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54389 === (10))){
var inst_54380 = (state_54388[(2)]);
var state_54388__$1 = (function (){var statearr_54409 = state_54388;
(statearr_54409[(12)] = inst_54380);

return statearr_54409;
})();
var statearr_54410_54432 = state_54388__$1;
(statearr_54410_54432[(2)] = null);

(statearr_54410_54432[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54389 === (8))){
var inst_54360 = (state_54388[(11)]);
var inst_54362 = eval(inst_54360);
var state_54388__$1 = state_54388;
var statearr_54411_54433 = state_54388__$1;
(statearr_54411_54433[(2)] = inst_54362);

(statearr_54411_54433[(1)] = (10));


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
var statearr_54412 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54412[(0)] = figwheel$client$file_reloading$state_machine__22939__auto__);

(statearr_54412[(1)] = (1));

return statearr_54412;
});
var figwheel$client$file_reloading$state_machine__22939__auto____1 = (function (state_54388){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_54388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e54413){if((e54413 instanceof Object)){
var ex__22942__auto__ = e54413;
var statearr_54414_54434 = state_54388;
(statearr_54414_54434[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54388);

return cljs.core.cst$kw$recur;
} else {
throw e54413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__54435 = state_54388;
state_54388 = G__54435;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22939__auto__ = function(state_54388){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22939__auto____1.call(this,state_54388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22939__auto____0;
figwheel$client$file_reloading$state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22939__auto____1;
return figwheel$client$file_reloading$state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__))
})();
var state__22963__auto__ = (function (){var statearr_54415 = f__22962__auto__.call(null);
(statearr_54415[(6)] = c__22961__auto__);

return statearr_54415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto__))
);

return c__22961__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__54437 = arguments.length;
switch (G__54437) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__54439,callback){
var map__54440 = p__54439;
var map__54440__$1 = (((((!((map__54440 == null))))?(((((map__54440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54440):map__54440);
var file_msg = map__54440__$1;
var namespace = cljs.core.get.call(null,map__54440__$1,cljs.core.cst$kw$namespace);
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__54440,map__54440__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loaded_DASH_file], null)))], null));
});})(request_url,map__54440,map__54440__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__54442){
var map__54443 = p__54442;
var map__54443__$1 = (((((!((map__54443 == null))))?(((((map__54443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54443):map__54443);
var file_msg = map__54443__$1;
var namespace = cljs.core.get.call(null,map__54443__$1,cljs.core.cst$kw$namespace);
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return cljs.core.cst$kw$figwheel_DASH_no_DASH_load.cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__54445){
var map__54446 = p__54445;
var map__54446__$1 = (((((!((map__54446 == null))))?(((((map__54446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54446):map__54446);
var file_msg = map__54446__$1;
var namespace = cljs.core.get.call(null,map__54446__$1,cljs.core.cst$kw$namespace);

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__54448,callback){
var map__54449 = p__54448;
var map__54449__$1 = (((((!((map__54449 == null))))?(((((map__54449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54449):map__54449);
var file_msg = map__54449__$1;
var request_url = cljs.core.get.call(null,map__54449__$1,cljs.core.cst$kw$request_DASH_url);
var namespace = cljs.core.get.call(null,map__54449__$1,cljs.core.cst$kw$namespace);

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
var c__22961__auto___54499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22961__auto___54499,out){
return (function (){
var f__22962__auto__ = (function (){var switch__22938__auto__ = ((function (c__22961__auto___54499,out){
return (function (state_54484){
var state_val_54485 = (state_54484[(1)]);
if((state_val_54485 === (1))){
var inst_54458 = cljs.core.seq.call(null,files);
var inst_54459 = cljs.core.first.call(null,inst_54458);
var inst_54460 = cljs.core.next.call(null,inst_54458);
var inst_54461 = files;
var state_54484__$1 = (function (){var statearr_54486 = state_54484;
(statearr_54486[(7)] = inst_54460);

(statearr_54486[(8)] = inst_54461);

(statearr_54486[(9)] = inst_54459);

return statearr_54486;
})();
var statearr_54487_54500 = state_54484__$1;
(statearr_54487_54500[(2)] = null);

(statearr_54487_54500[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54485 === (2))){
var inst_54467 = (state_54484[(10)]);
var inst_54461 = (state_54484[(8)]);
var inst_54466 = cljs.core.seq.call(null,inst_54461);
var inst_54467__$1 = cljs.core.first.call(null,inst_54466);
var inst_54468 = cljs.core.next.call(null,inst_54466);
var inst_54469 = (inst_54467__$1 == null);
var inst_54470 = cljs.core.not.call(null,inst_54469);
var state_54484__$1 = (function (){var statearr_54488 = state_54484;
(statearr_54488[(11)] = inst_54468);

(statearr_54488[(10)] = inst_54467__$1);

return statearr_54488;
})();
if(inst_54470){
var statearr_54489_54501 = state_54484__$1;
(statearr_54489_54501[(1)] = (4));

} else {
var statearr_54490_54502 = state_54484__$1;
(statearr_54490_54502[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_54485 === (3))){
var inst_54482 = (state_54484[(2)]);
var state_54484__$1 = state_54484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54484__$1,inst_54482);
} else {
if((state_val_54485 === (4))){
var inst_54467 = (state_54484[(10)]);
var inst_54472 = figwheel.client.file_reloading.reload_js_file.call(null,inst_54467);
var state_54484__$1 = state_54484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54484__$1,(7),inst_54472);
} else {
if((state_val_54485 === (5))){
var inst_54478 = cljs.core.async.close_BANG_.call(null,out);
var state_54484__$1 = state_54484;
var statearr_54491_54503 = state_54484__$1;
(statearr_54491_54503[(2)] = inst_54478);

(statearr_54491_54503[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54485 === (6))){
var inst_54480 = (state_54484[(2)]);
var state_54484__$1 = state_54484;
var statearr_54492_54504 = state_54484__$1;
(statearr_54492_54504[(2)] = inst_54480);

(statearr_54492_54504[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54485 === (7))){
var inst_54468 = (state_54484[(11)]);
var inst_54474 = (state_54484[(2)]);
var inst_54475 = cljs.core.async.put_BANG_.call(null,out,inst_54474);
var inst_54461 = inst_54468;
var state_54484__$1 = (function (){var statearr_54493 = state_54484;
(statearr_54493[(12)] = inst_54475);

(statearr_54493[(8)] = inst_54461);

return statearr_54493;
})();
var statearr_54494_54505 = state_54484__$1;
(statearr_54494_54505[(2)] = null);

(statearr_54494_54505[(1)] = (2));


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
});})(c__22961__auto___54499,out))
;
return ((function (switch__22938__auto__,c__22961__auto___54499,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____0 = (function (){
var statearr_54495 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54495[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__);

(statearr_54495[(1)] = (1));

return statearr_54495;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____1 = (function (state_54484){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_54484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e54496){if((e54496 instanceof Object)){
var ex__22942__auto__ = e54496;
var statearr_54497_54506 = state_54484;
(statearr_54497_54506[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54484);

return cljs.core.cst$kw$recur;
} else {
throw e54496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__54507 = state_54484;
state_54484 = G__54507;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__ = function(state_54484){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____1.call(this,state_54484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto___54499,out))
})();
var state__22963__auto__ = (function (){var statearr_54498 = f__22962__auto__.call(null);
(statearr_54498[(6)] = c__22961__auto___54499);

return statearr_54498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto___54499,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__54508,opts){
var map__54509 = p__54508;
var map__54509__$1 = (((((!((map__54509 == null))))?(((((map__54509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54509):map__54509);
var eval_body = cljs.core.get.call(null,map__54509__$1,cljs.core.cst$kw$eval_DASH_body);
var file = cljs.core.get.call(null,map__54509__$1,cljs.core.cst$kw$file);
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
}catch (e54511){var e = e54511;
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
return (function (p1__54512_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$namespace.cljs$core$IFn$_invoke$arity$1(p1__54512_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__54513){
var vec__54514 = p__54513;
var k = cljs.core.nth.call(null,vec__54514,(0),null);
var v = cljs.core.nth.call(null,vec__54514,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$namespace,k,cljs.core.cst$kw$type,cljs.core.cst$kw$namespace], null);
}),cljs.core.filter.call(null,(function (p__54517){
var vec__54518 = p__54517;
var k = cljs.core.nth.call(null,vec__54518,(0),null);
var v = cljs.core.nth.call(null,vec__54518,(1),null);
return cljs.core.cst$kw$figwheel_DASH_always.cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__54524,p__54525){
var map__54526 = p__54524;
var map__54526__$1 = (((((!((map__54526 == null))))?(((((map__54526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54526):map__54526);
var opts = map__54526__$1;
var before_jsload = cljs.core.get.call(null,map__54526__$1,cljs.core.cst$kw$before_DASH_jsload);
var on_jsload = cljs.core.get.call(null,map__54526__$1,cljs.core.cst$kw$on_DASH_jsload);
var reload_dependents = cljs.core.get.call(null,map__54526__$1,cljs.core.cst$kw$reload_DASH_dependents);
var map__54527 = p__54525;
var map__54527__$1 = (((((!((map__54527 == null))))?(((((map__54527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54527):map__54527);
var msg = map__54527__$1;
var files = cljs.core.get.call(null,map__54527__$1,cljs.core.cst$kw$files);
var figwheel_meta = cljs.core.get.call(null,map__54527__$1,cljs.core.cst$kw$figwheel_DASH_meta);
var recompile_dependents = cljs.core.get.call(null,map__54527__$1,cljs.core.cst$kw$recompile_DASH_dependents);
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22961__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22961__auto__,map__54526,map__54526__$1,opts,before_jsload,on_jsload,reload_dependents,map__54527,map__54527__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22962__auto__ = (function (){var switch__22938__auto__ = ((function (c__22961__auto__,map__54526,map__54526__$1,opts,before_jsload,on_jsload,reload_dependents,map__54527,map__54527__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_54681){
var state_val_54682 = (state_54681[(1)]);
if((state_val_54682 === (7))){
var inst_54543 = (state_54681[(7)]);
var inst_54544 = (state_54681[(8)]);
var inst_54541 = (state_54681[(9)]);
var inst_54542 = (state_54681[(10)]);
var inst_54549 = cljs.core._nth.call(null,inst_54542,inst_54544);
var inst_54550 = figwheel.client.file_reloading.eval_body.call(null,inst_54549,opts);
var inst_54551 = (inst_54544 + (1));
var tmp54683 = inst_54543;
var tmp54684 = inst_54541;
var tmp54685 = inst_54542;
var inst_54541__$1 = tmp54684;
var inst_54542__$1 = tmp54685;
var inst_54543__$1 = tmp54683;
var inst_54544__$1 = inst_54551;
var state_54681__$1 = (function (){var statearr_54686 = state_54681;
(statearr_54686[(7)] = inst_54543__$1);

(statearr_54686[(8)] = inst_54544__$1);

(statearr_54686[(9)] = inst_54541__$1);

(statearr_54686[(10)] = inst_54542__$1);

(statearr_54686[(11)] = inst_54550);

return statearr_54686;
})();
var statearr_54687_54770 = state_54681__$1;
(statearr_54687_54770[(2)] = null);

(statearr_54687_54770[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (20))){
var inst_54584 = (state_54681[(12)]);
var inst_54592 = figwheel.client.file_reloading.sort_files.call(null,inst_54584);
var state_54681__$1 = state_54681;
var statearr_54688_54771 = state_54681__$1;
(statearr_54688_54771[(2)] = inst_54592);

(statearr_54688_54771[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (27))){
var state_54681__$1 = state_54681;
var statearr_54689_54772 = state_54681__$1;
(statearr_54689_54772[(2)] = null);

(statearr_54689_54772[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (1))){
var inst_54533 = (state_54681[(13)]);
var inst_54530 = before_jsload.call(null,files);
var inst_54531 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_54532 = (function (){return ((function (inst_54533,inst_54530,inst_54531,state_val_54682,c__22961__auto__,map__54526,map__54526__$1,opts,before_jsload,on_jsload,reload_dependents,map__54527,map__54527__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__54521_SHARP_){
return cljs.core.cst$kw$eval_DASH_body.cljs$core$IFn$_invoke$arity$1(p1__54521_SHARP_);
});
;})(inst_54533,inst_54530,inst_54531,state_val_54682,c__22961__auto__,map__54526,map__54526__$1,opts,before_jsload,on_jsload,reload_dependents,map__54527,map__54527__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54533__$1 = cljs.core.filter.call(null,inst_54532,files);
var inst_54534 = cljs.core.not_empty.call(null,inst_54533__$1);
var state_54681__$1 = (function (){var statearr_54690 = state_54681;
(statearr_54690[(14)] = inst_54531);

(statearr_54690[(15)] = inst_54530);

(statearr_54690[(13)] = inst_54533__$1);

return statearr_54690;
})();
if(cljs.core.truth_(inst_54534)){
var statearr_54691_54773 = state_54681__$1;
(statearr_54691_54773[(1)] = (2));

} else {
var statearr_54692_54774 = state_54681__$1;
(statearr_54692_54774[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (24))){
var state_54681__$1 = state_54681;
var statearr_54693_54775 = state_54681__$1;
(statearr_54693_54775[(2)] = null);

(statearr_54693_54775[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (39))){
var inst_54634 = (state_54681[(16)]);
var state_54681__$1 = state_54681;
var statearr_54694_54776 = state_54681__$1;
(statearr_54694_54776[(2)] = inst_54634);

(statearr_54694_54776[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (46))){
var inst_54676 = (state_54681[(2)]);
var state_54681__$1 = state_54681;
var statearr_54695_54777 = state_54681__$1;
(statearr_54695_54777[(2)] = inst_54676);

(statearr_54695_54777[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (4))){
var inst_54578 = (state_54681[(2)]);
var inst_54579 = cljs.core.List.EMPTY;
var inst_54580 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_54579);
var inst_54581 = (function (){return ((function (inst_54578,inst_54579,inst_54580,state_val_54682,c__22961__auto__,map__54526,map__54526__$1,opts,before_jsload,on_jsload,reload_dependents,map__54527,map__54527__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__54522_SHARP_){
var and__4036__auto__ = cljs.core.cst$kw$namespace.cljs$core$IFn$_invoke$arity$1(p1__54522_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,cljs.core.cst$kw$eval_DASH_body.cljs$core$IFn$_invoke$arity$1(p1__54522_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__54522_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_54578,inst_54579,inst_54580,state_val_54682,c__22961__auto__,map__54526,map__54526__$1,opts,before_jsload,on_jsload,reload_dependents,map__54527,map__54527__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54582 = cljs.core.filter.call(null,inst_54581,files);
var inst_54583 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_54584 = cljs.core.concat.call(null,inst_54582,inst_54583);
var state_54681__$1 = (function (){var statearr_54696 = state_54681;
(statearr_54696[(17)] = inst_54578);

(statearr_54696[(18)] = inst_54580);

(statearr_54696[(12)] = inst_54584);

return statearr_54696;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_54697_54778 = state_54681__$1;
(statearr_54697_54778[(1)] = (16));

} else {
var statearr_54698_54779 = state_54681__$1;
(statearr_54698_54779[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (15))){
var inst_54568 = (state_54681[(2)]);
var state_54681__$1 = state_54681;
var statearr_54699_54780 = state_54681__$1;
(statearr_54699_54780[(2)] = inst_54568);

(statearr_54699_54780[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (21))){
var inst_54594 = (state_54681[(19)]);
var inst_54594__$1 = (state_54681[(2)]);
var inst_54595 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_54594__$1);
var state_54681__$1 = (function (){var statearr_54700 = state_54681;
(statearr_54700[(19)] = inst_54594__$1);

return statearr_54700;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54681__$1,(22),inst_54595);
} else {
if((state_val_54682 === (31))){
var inst_54679 = (state_54681[(2)]);
var state_54681__$1 = state_54681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54681__$1,inst_54679);
} else {
if((state_val_54682 === (32))){
var inst_54634 = (state_54681[(16)]);
var inst_54639 = inst_54634.cljs$lang$protocol_mask$partition0$;
var inst_54640 = (inst_54639 & (64));
var inst_54641 = inst_54634.cljs$core$ISeq$;
var inst_54642 = (cljs.core.PROTOCOL_SENTINEL === inst_54641);
var inst_54643 = ((inst_54640) || (inst_54642));
var state_54681__$1 = state_54681;
if(cljs.core.truth_(inst_54643)){
var statearr_54701_54781 = state_54681__$1;
(statearr_54701_54781[(1)] = (35));

} else {
var statearr_54702_54782 = state_54681__$1;
(statearr_54702_54782[(1)] = (36));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (40))){
var inst_54656 = (state_54681[(20)]);
var inst_54655 = (state_54681[(2)]);
var inst_54656__$1 = cljs.core.get.call(null,inst_54655,cljs.core.cst$kw$figwheel_DASH_no_DASH_load);
var inst_54657 = cljs.core.get.call(null,inst_54655,cljs.core.cst$kw$not_DASH_required);
var inst_54658 = cljs.core.not_empty.call(null,inst_54656__$1);
var state_54681__$1 = (function (){var statearr_54703 = state_54681;
(statearr_54703[(21)] = inst_54657);

(statearr_54703[(20)] = inst_54656__$1);

return statearr_54703;
})();
if(cljs.core.truth_(inst_54658)){
var statearr_54704_54783 = state_54681__$1;
(statearr_54704_54783[(1)] = (41));

} else {
var statearr_54705_54784 = state_54681__$1;
(statearr_54705_54784[(1)] = (42));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (33))){
var state_54681__$1 = state_54681;
var statearr_54706_54785 = state_54681__$1;
(statearr_54706_54785[(2)] = false);

(statearr_54706_54785[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (13))){
var inst_54554 = (state_54681[(22)]);
var inst_54558 = cljs.core.chunk_first.call(null,inst_54554);
var inst_54559 = cljs.core.chunk_rest.call(null,inst_54554);
var inst_54560 = cljs.core.count.call(null,inst_54558);
var inst_54541 = inst_54559;
var inst_54542 = inst_54558;
var inst_54543 = inst_54560;
var inst_54544 = (0);
var state_54681__$1 = (function (){var statearr_54707 = state_54681;
(statearr_54707[(7)] = inst_54543);

(statearr_54707[(8)] = inst_54544);

(statearr_54707[(9)] = inst_54541);

(statearr_54707[(10)] = inst_54542);

return statearr_54707;
})();
var statearr_54708_54786 = state_54681__$1;
(statearr_54708_54786[(2)] = null);

(statearr_54708_54786[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (22))){
var inst_54594 = (state_54681[(19)]);
var inst_54597 = (state_54681[(23)]);
var inst_54602 = (state_54681[(24)]);
var inst_54598 = (state_54681[(25)]);
var inst_54597__$1 = (state_54681[(2)]);
var inst_54598__$1 = cljs.core.filter.call(null,cljs.core.cst$kw$loaded_DASH_file,inst_54597__$1);
var inst_54599 = (function (){var all_files = inst_54594;
var res_SINGLEQUOTE_ = inst_54597__$1;
var res = inst_54598__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_54594,inst_54597,inst_54602,inst_54598,inst_54597__$1,inst_54598__$1,state_val_54682,c__22961__auto__,map__54526,map__54526__$1,opts,before_jsload,on_jsload,reload_dependents,map__54527,map__54527__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__54523_SHARP_){
return cljs.core.not.call(null,cljs.core.cst$kw$loaded_DASH_file.cljs$core$IFn$_invoke$arity$1(p1__54523_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_54594,inst_54597,inst_54602,inst_54598,inst_54597__$1,inst_54598__$1,state_val_54682,c__22961__auto__,map__54526,map__54526__$1,opts,before_jsload,on_jsload,reload_dependents,map__54527,map__54527__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54600 = cljs.core.filter.call(null,inst_54599,inst_54597__$1);
var inst_54601 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_54602__$1 = cljs.core.filter.call(null,cljs.core.cst$kw$loaded_DASH_file,inst_54601);
var inst_54603 = cljs.core.not_empty.call(null,inst_54602__$1);
var state_54681__$1 = (function (){var statearr_54709 = state_54681;
(statearr_54709[(23)] = inst_54597__$1);

(statearr_54709[(24)] = inst_54602__$1);

(statearr_54709[(26)] = inst_54600);

(statearr_54709[(25)] = inst_54598__$1);

return statearr_54709;
})();
if(cljs.core.truth_(inst_54603)){
var statearr_54710_54787 = state_54681__$1;
(statearr_54710_54787[(1)] = (23));

} else {
var statearr_54711_54788 = state_54681__$1;
(statearr_54711_54788[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (36))){
var state_54681__$1 = state_54681;
var statearr_54712_54789 = state_54681__$1;
(statearr_54712_54789[(2)] = false);

(statearr_54712_54789[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (41))){
var inst_54656 = (state_54681[(20)]);
var inst_54660 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,cljs.core.cst$kw$namespace);
var inst_54661 = cljs.core.map.call(null,inst_54660,inst_54656);
var inst_54662 = cljs.core.pr_str.call(null,inst_54661);
var inst_54663 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54662)].join('');
var inst_54664 = figwheel.client.utils.log.call(null,inst_54663);
var state_54681__$1 = state_54681;
var statearr_54713_54790 = state_54681__$1;
(statearr_54713_54790[(2)] = inst_54664);

(statearr_54713_54790[(1)] = (43));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (43))){
var inst_54657 = (state_54681[(21)]);
var inst_54667 = (state_54681[(2)]);
var inst_54668 = cljs.core.not_empty.call(null,inst_54657);
var state_54681__$1 = (function (){var statearr_54714 = state_54681;
(statearr_54714[(27)] = inst_54667);

return statearr_54714;
})();
if(cljs.core.truth_(inst_54668)){
var statearr_54715_54791 = state_54681__$1;
(statearr_54715_54791[(1)] = (44));

} else {
var statearr_54716_54792 = state_54681__$1;
(statearr_54716_54792[(1)] = (45));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (29))){
var inst_54594 = (state_54681[(19)]);
var inst_54597 = (state_54681[(23)]);
var inst_54602 = (state_54681[(24)]);
var inst_54634 = (state_54681[(16)]);
var inst_54600 = (state_54681[(26)]);
var inst_54598 = (state_54681[(25)]);
var inst_54630 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: NOT loading these files ");
var inst_54633 = (function (){var all_files = inst_54594;
var res_SINGLEQUOTE_ = inst_54597;
var res = inst_54598;
var files_not_loaded = inst_54600;
var dependencies_that_loaded = inst_54602;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54594,inst_54597,inst_54602,inst_54634,inst_54600,inst_54598,inst_54630,state_val_54682,c__22961__auto__,map__54526,map__54526__$1,opts,before_jsload,on_jsload,reload_dependents,map__54527,map__54527__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__54632){
var map__54717 = p__54632;
var map__54717__$1 = (((((!((map__54717 == null))))?(((((map__54717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54717):map__54717);
var namespace = cljs.core.get.call(null,map__54717__$1,cljs.core.cst$kw$namespace);
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54594,inst_54597,inst_54602,inst_54634,inst_54600,inst_54598,inst_54630,state_val_54682,c__22961__auto__,map__54526,map__54526__$1,opts,before_jsload,on_jsload,reload_dependents,map__54527,map__54527__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54634__$1 = cljs.core.group_by.call(null,inst_54633,inst_54600);
var inst_54636 = (inst_54634__$1 == null);
var inst_54637 = cljs.core.not.call(null,inst_54636);
var state_54681__$1 = (function (){var statearr_54719 = state_54681;
(statearr_54719[(16)] = inst_54634__$1);

(statearr_54719[(28)] = inst_54630);

return statearr_54719;
})();
if(inst_54637){
var statearr_54720_54793 = state_54681__$1;
(statearr_54720_54793[(1)] = (32));

} else {
var statearr_54721_54794 = state_54681__$1;
(statearr_54721_54794[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (44))){
var inst_54657 = (state_54681[(21)]);
var inst_54670 = cljs.core.map.call(null,cljs.core.cst$kw$file,inst_54657);
var inst_54671 = cljs.core.pr_str.call(null,inst_54670);
var inst_54672 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54671)].join('');
var inst_54673 = figwheel.client.utils.log.call(null,inst_54672);
var state_54681__$1 = state_54681;
var statearr_54722_54795 = state_54681__$1;
(statearr_54722_54795[(2)] = inst_54673);

(statearr_54722_54795[(1)] = (46));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (6))){
var inst_54575 = (state_54681[(2)]);
var state_54681__$1 = state_54681;
var statearr_54723_54796 = state_54681__$1;
(statearr_54723_54796[(2)] = inst_54575);

(statearr_54723_54796[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (28))){
var inst_54600 = (state_54681[(26)]);
var inst_54627 = (state_54681[(2)]);
var inst_54628 = cljs.core.not_empty.call(null,inst_54600);
var state_54681__$1 = (function (){var statearr_54724 = state_54681;
(statearr_54724[(29)] = inst_54627);

return statearr_54724;
})();
if(cljs.core.truth_(inst_54628)){
var statearr_54725_54797 = state_54681__$1;
(statearr_54725_54797[(1)] = (29));

} else {
var statearr_54726_54798 = state_54681__$1;
(statearr_54726_54798[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (25))){
var inst_54598 = (state_54681[(25)]);
var inst_54614 = (state_54681[(2)]);
var inst_54615 = cljs.core.not_empty.call(null,inst_54598);
var state_54681__$1 = (function (){var statearr_54727 = state_54681;
(statearr_54727[(30)] = inst_54614);

return statearr_54727;
})();
if(cljs.core.truth_(inst_54615)){
var statearr_54728_54799 = state_54681__$1;
(statearr_54728_54799[(1)] = (26));

} else {
var statearr_54729_54800 = state_54681__$1;
(statearr_54729_54800[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (34))){
var inst_54650 = (state_54681[(2)]);
var state_54681__$1 = state_54681;
if(cljs.core.truth_(inst_54650)){
var statearr_54730_54801 = state_54681__$1;
(statearr_54730_54801[(1)] = (38));

} else {
var statearr_54731_54802 = state_54681__$1;
(statearr_54731_54802[(1)] = (39));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (17))){
var state_54681__$1 = state_54681;
var statearr_54732_54803 = state_54681__$1;
(statearr_54732_54803[(2)] = recompile_dependents);

(statearr_54732_54803[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (3))){
var state_54681__$1 = state_54681;
var statearr_54733_54804 = state_54681__$1;
(statearr_54733_54804[(2)] = null);

(statearr_54733_54804[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (12))){
var inst_54571 = (state_54681[(2)]);
var state_54681__$1 = state_54681;
var statearr_54734_54805 = state_54681__$1;
(statearr_54734_54805[(2)] = inst_54571);

(statearr_54734_54805[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (2))){
var inst_54533 = (state_54681[(13)]);
var inst_54540 = cljs.core.seq.call(null,inst_54533);
var inst_54541 = inst_54540;
var inst_54542 = null;
var inst_54543 = (0);
var inst_54544 = (0);
var state_54681__$1 = (function (){var statearr_54735 = state_54681;
(statearr_54735[(7)] = inst_54543);

(statearr_54735[(8)] = inst_54544);

(statearr_54735[(9)] = inst_54541);

(statearr_54735[(10)] = inst_54542);

return statearr_54735;
})();
var statearr_54736_54806 = state_54681__$1;
(statearr_54736_54806[(2)] = null);

(statearr_54736_54806[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (23))){
var inst_54594 = (state_54681[(19)]);
var inst_54597 = (state_54681[(23)]);
var inst_54602 = (state_54681[(24)]);
var inst_54600 = (state_54681[(26)]);
var inst_54598 = (state_54681[(25)]);
var inst_54605 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: loaded these dependencies");
var inst_54607 = (function (){var all_files = inst_54594;
var res_SINGLEQUOTE_ = inst_54597;
var res = inst_54598;
var files_not_loaded = inst_54600;
var dependencies_that_loaded = inst_54602;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54594,inst_54597,inst_54602,inst_54600,inst_54598,inst_54605,state_val_54682,c__22961__auto__,map__54526,map__54526__$1,opts,before_jsload,on_jsload,reload_dependents,map__54527,map__54527__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__54606){
var map__54737 = p__54606;
var map__54737__$1 = (((((!((map__54737 == null))))?(((((map__54737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54737):map__54737);
var request_url = cljs.core.get.call(null,map__54737__$1,cljs.core.cst$kw$request_DASH_url);
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54594,inst_54597,inst_54602,inst_54600,inst_54598,inst_54605,state_val_54682,c__22961__auto__,map__54526,map__54526__$1,opts,before_jsload,on_jsload,reload_dependents,map__54527,map__54527__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54608 = cljs.core.reverse.call(null,inst_54602);
var inst_54609 = cljs.core.map.call(null,inst_54607,inst_54608);
var inst_54610 = cljs.core.pr_str.call(null,inst_54609);
var inst_54611 = figwheel.client.utils.log.call(null,inst_54610);
var state_54681__$1 = (function (){var statearr_54739 = state_54681;
(statearr_54739[(31)] = inst_54605);

return statearr_54739;
})();
var statearr_54740_54807 = state_54681__$1;
(statearr_54740_54807[(2)] = inst_54611);

(statearr_54740_54807[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (35))){
var state_54681__$1 = state_54681;
var statearr_54741_54808 = state_54681__$1;
(statearr_54741_54808[(2)] = true);

(statearr_54741_54808[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (19))){
var inst_54584 = (state_54681[(12)]);
var inst_54590 = figwheel.client.file_reloading.expand_files.call(null,inst_54584);
var state_54681__$1 = state_54681;
var statearr_54742_54809 = state_54681__$1;
(statearr_54742_54809[(2)] = inst_54590);

(statearr_54742_54809[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (11))){
var state_54681__$1 = state_54681;
var statearr_54743_54810 = state_54681__$1;
(statearr_54743_54810[(2)] = null);

(statearr_54743_54810[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (9))){
var inst_54573 = (state_54681[(2)]);
var state_54681__$1 = state_54681;
var statearr_54744_54811 = state_54681__$1;
(statearr_54744_54811[(2)] = inst_54573);

(statearr_54744_54811[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (5))){
var inst_54543 = (state_54681[(7)]);
var inst_54544 = (state_54681[(8)]);
var inst_54546 = (inst_54544 < inst_54543);
var inst_54547 = inst_54546;
var state_54681__$1 = state_54681;
if(cljs.core.truth_(inst_54547)){
var statearr_54745_54812 = state_54681__$1;
(statearr_54745_54812[(1)] = (7));

} else {
var statearr_54746_54813 = state_54681__$1;
(statearr_54746_54813[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (14))){
var inst_54554 = (state_54681[(22)]);
var inst_54563 = cljs.core.first.call(null,inst_54554);
var inst_54564 = figwheel.client.file_reloading.eval_body.call(null,inst_54563,opts);
var inst_54565 = cljs.core.next.call(null,inst_54554);
var inst_54541 = inst_54565;
var inst_54542 = null;
var inst_54543 = (0);
var inst_54544 = (0);
var state_54681__$1 = (function (){var statearr_54747 = state_54681;
(statearr_54747[(7)] = inst_54543);

(statearr_54747[(8)] = inst_54544);

(statearr_54747[(9)] = inst_54541);

(statearr_54747[(32)] = inst_54564);

(statearr_54747[(10)] = inst_54542);

return statearr_54747;
})();
var statearr_54748_54814 = state_54681__$1;
(statearr_54748_54814[(2)] = null);

(statearr_54748_54814[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (45))){
var state_54681__$1 = state_54681;
var statearr_54749_54815 = state_54681__$1;
(statearr_54749_54815[(2)] = null);

(statearr_54749_54815[(1)] = (46));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (26))){
var inst_54594 = (state_54681[(19)]);
var inst_54597 = (state_54681[(23)]);
var inst_54602 = (state_54681[(24)]);
var inst_54600 = (state_54681[(26)]);
var inst_54598 = (state_54681[(25)]);
var inst_54617 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: loaded these files");
var inst_54619 = (function (){var all_files = inst_54594;
var res_SINGLEQUOTE_ = inst_54597;
var res = inst_54598;
var files_not_loaded = inst_54600;
var dependencies_that_loaded = inst_54602;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54594,inst_54597,inst_54602,inst_54600,inst_54598,inst_54617,state_val_54682,c__22961__auto__,map__54526,map__54526__$1,opts,before_jsload,on_jsload,reload_dependents,map__54527,map__54527__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__54618){
var map__54750 = p__54618;
var map__54750__$1 = (((((!((map__54750 == null))))?(((((map__54750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54750):map__54750);
var namespace = cljs.core.get.call(null,map__54750__$1,cljs.core.cst$kw$namespace);
var file = cljs.core.get.call(null,map__54750__$1,cljs.core.cst$kw$file);
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54594,inst_54597,inst_54602,inst_54600,inst_54598,inst_54617,state_val_54682,c__22961__auto__,map__54526,map__54526__$1,opts,before_jsload,on_jsload,reload_dependents,map__54527,map__54527__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54620 = cljs.core.map.call(null,inst_54619,inst_54598);
var inst_54621 = cljs.core.pr_str.call(null,inst_54620);
var inst_54622 = figwheel.client.utils.log.call(null,inst_54621);
var inst_54623 = (function (){var all_files = inst_54594;
var res_SINGLEQUOTE_ = inst_54597;
var res = inst_54598;
var files_not_loaded = inst_54600;
var dependencies_that_loaded = inst_54602;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54594,inst_54597,inst_54602,inst_54600,inst_54598,inst_54617,inst_54619,inst_54620,inst_54621,inst_54622,state_val_54682,c__22961__auto__,map__54526,map__54526__$1,opts,before_jsload,on_jsload,reload_dependents,map__54527,map__54527__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54594,inst_54597,inst_54602,inst_54600,inst_54598,inst_54617,inst_54619,inst_54620,inst_54621,inst_54622,state_val_54682,c__22961__auto__,map__54526,map__54526__$1,opts,before_jsload,on_jsload,reload_dependents,map__54527,map__54527__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54624 = setTimeout(inst_54623,(10));
var state_54681__$1 = (function (){var statearr_54752 = state_54681;
(statearr_54752[(33)] = inst_54622);

(statearr_54752[(34)] = inst_54617);

return statearr_54752;
})();
var statearr_54753_54816 = state_54681__$1;
(statearr_54753_54816[(2)] = inst_54624);

(statearr_54753_54816[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (16))){
var state_54681__$1 = state_54681;
var statearr_54754_54817 = state_54681__$1;
(statearr_54754_54817[(2)] = reload_dependents);

(statearr_54754_54817[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (38))){
var inst_54634 = (state_54681[(16)]);
var inst_54652 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54634);
var state_54681__$1 = state_54681;
var statearr_54755_54818 = state_54681__$1;
(statearr_54755_54818[(2)] = inst_54652);

(statearr_54755_54818[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (30))){
var state_54681__$1 = state_54681;
var statearr_54756_54819 = state_54681__$1;
(statearr_54756_54819[(2)] = null);

(statearr_54756_54819[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (10))){
var inst_54554 = (state_54681[(22)]);
var inst_54556 = cljs.core.chunked_seq_QMARK_.call(null,inst_54554);
var state_54681__$1 = state_54681;
if(inst_54556){
var statearr_54757_54820 = state_54681__$1;
(statearr_54757_54820[(1)] = (13));

} else {
var statearr_54758_54821 = state_54681__$1;
(statearr_54758_54821[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (18))){
var inst_54588 = (state_54681[(2)]);
var state_54681__$1 = state_54681;
if(cljs.core.truth_(inst_54588)){
var statearr_54759_54822 = state_54681__$1;
(statearr_54759_54822[(1)] = (19));

} else {
var statearr_54760_54823 = state_54681__$1;
(statearr_54760_54823[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (42))){
var state_54681__$1 = state_54681;
var statearr_54761_54824 = state_54681__$1;
(statearr_54761_54824[(2)] = null);

(statearr_54761_54824[(1)] = (43));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (37))){
var inst_54647 = (state_54681[(2)]);
var state_54681__$1 = state_54681;
var statearr_54762_54825 = state_54681__$1;
(statearr_54762_54825[(2)] = inst_54647);

(statearr_54762_54825[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_54682 === (8))){
var inst_54554 = (state_54681[(22)]);
var inst_54541 = (state_54681[(9)]);
var inst_54554__$1 = cljs.core.seq.call(null,inst_54541);
var state_54681__$1 = (function (){var statearr_54763 = state_54681;
(statearr_54763[(22)] = inst_54554__$1);

return statearr_54763;
})();
if(inst_54554__$1){
var statearr_54764_54826 = state_54681__$1;
(statearr_54764_54826[(1)] = (10));

} else {
var statearr_54765_54827 = state_54681__$1;
(statearr_54765_54827[(1)] = (11));

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
});})(c__22961__auto__,map__54526,map__54526__$1,opts,before_jsload,on_jsload,reload_dependents,map__54527,map__54527__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22938__auto__,c__22961__auto__,map__54526,map__54526__$1,opts,before_jsload,on_jsload,reload_dependents,map__54527,map__54527__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____0 = (function (){
var statearr_54766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54766[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__);

(statearr_54766[(1)] = (1));

return statearr_54766;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____1 = (function (state_54681){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_54681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e54767){if((e54767 instanceof Object)){
var ex__22942__auto__ = e54767;
var statearr_54768_54828 = state_54681;
(statearr_54768_54828[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54681);

return cljs.core.cst$kw$recur;
} else {
throw e54767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__54829 = state_54681;
state_54681 = G__54829;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__ = function(state_54681){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____1.call(this,state_54681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__,map__54526,map__54526__$1,opts,before_jsload,on_jsload,reload_dependents,map__54527,map__54527__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22963__auto__ = (function (){var statearr_54769 = f__22962__auto__.call(null);
(statearr_54769[(6)] = c__22961__auto__);

return statearr_54769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto__,map__54526,map__54526__$1,opts,before_jsload,on_jsload,reload_dependents,map__54527,map__54527__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22961__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__54832,link){
var map__54833 = p__54832;
var map__54833__$1 = (((((!((map__54833 == null))))?(((((map__54833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54833):map__54833);
var file = cljs.core.get.call(null,map__54833__$1,cljs.core.cst$kw$file);
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__54833,map__54833__$1,file){
return (function (p1__54830_SHARP_,p2__54831_SHARP_){
if(cljs.core._EQ_.call(null,p1__54830_SHARP_,p2__54831_SHARP_)){
return p1__54830_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__54833,map__54833__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__54836){
var map__54837 = p__54836;
var map__54837__$1 = (((((!((map__54837 == null))))?(((((map__54837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54837):map__54837);
var match_length = cljs.core.get.call(null,map__54837__$1,cljs.core.cst$kw$match_DASH_length);
var current_url_length = cljs.core.get.call(null,map__54837__$1,cljs.core.cst$kw$current_DASH_url_DASH_length);
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__54835_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__54835_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__54839_SHARP_,p2__54840_SHARP_){
return cljs.core.assoc.call(null,p1__54839_SHARP_,cljs.core.get.call(null,p2__54840_SHARP_,key),p2__54840_SHARP_);
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
var loaded_f_datas_54841 = cljs.core.filter.call(null,cljs.core.cst$kw$loaded,f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_54841);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_54841);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__54842,p__54843){
var map__54844 = p__54842;
var map__54844__$1 = (((((!((map__54844 == null))))?(((((map__54844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54844):map__54844);
var on_cssload = cljs.core.get.call(null,map__54844__$1,cljs.core.cst$kw$on_DASH_cssload);
var map__54845 = p__54843;
var map__54845__$1 = (((((!((map__54845 == null))))?(((((map__54845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54845):map__54845);
var files_msg = map__54845__$1;
var files = cljs.core.get.call(null,map__54845__$1,cljs.core.cst$kw$files);
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

//# sourceMappingURL=file_reloading.js.map?rel=1545321276747
