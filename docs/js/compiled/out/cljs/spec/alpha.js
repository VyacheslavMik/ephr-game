// Compiled by ClojureScript 1.10.439 {:optimize-constants true}
goog.provide('cljs.spec.alpha');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.spec.gen.alpha');
goog.require('clojure.string');
cljs.spec.alpha.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec.alpha._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec.alpha._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.alpha.Spec = function(){};

cljs.spec.alpha.conform_STAR_ = (function cljs$spec$alpha$conform_STAR_(spec,x){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__4347__auto__ = (((spec == null))?null:spec);
var m__4348__auto__ = (cljs.spec.alpha.conform_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,spec,x);
} else {
var m__4348__auto____$1 = (cljs.spec.alpha.conform_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.alpha.unform_STAR_ = (function cljs$spec$alpha$unform_STAR_(spec,y){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__4347__auto__ = (((spec == null))?null:spec);
var m__4348__auto__ = (cljs.spec.alpha.unform_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,spec,y);
} else {
var m__4348__auto____$1 = (cljs.spec.alpha.unform_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.alpha.explain_STAR_ = (function cljs$spec$alpha$explain_STAR_(spec,path,via,in$,x){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5 == null)))))){
return spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__4347__auto__ = (((spec == null))?null:spec);
var m__4348__auto__ = (cljs.spec.alpha.explain_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,spec,path,via,in$,x);
} else {
var m__4348__auto____$1 = (cljs.spec.alpha.explain_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.alpha.gen_STAR_ = (function cljs$spec$alpha$gen_STAR_(spec,overrides,path,rmap){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4 == null)))))){
return spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__4347__auto__ = (((spec == null))?null:spec);
var m__4348__auto__ = (cljs.spec.alpha.gen_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__4348__auto____$1 = (cljs.spec.alpha.gen_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.alpha.with_gen_STAR_ = (function cljs$spec$alpha$with_gen_STAR_(spec,gfn){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__4347__auto__ = (((spec == null))?null:spec);
var m__4348__auto__ = (cljs.spec.alpha.with_gen_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,spec,gfn);
} else {
var m__4348__auto____$1 = (cljs.spec.alpha.with_gen_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.alpha.describe_STAR_ = (function cljs$spec$alpha$describe_STAR_(spec){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1 == null)))))){
return spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1(spec);
} else {
var x__4347__auto__ = (((spec == null))?null:spec);
var m__4348__auto__ = (cljs.spec.alpha.describe_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,spec);
} else {
var m__4348__auto____$1 = (cljs.spec.alpha.describe_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.registry_ref !== 'undefined')){
} else {
cljs.spec.alpha.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.alpha.deep_resolve = (function cljs$spec$alpha$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_.call(null,spec)){
var G__55418 = cljs.core.get.call(null,reg,spec);
spec = G__55418;
continue;
} else {
return spec;
}
break;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve = (function cljs$spec$alpha$reg_resolve(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var reg = cljs.core.deref.call(null,cljs.spec.alpha.registry_ref);
var spec = cljs.core.get.call(null,reg,k);
if((!(cljs.core.ident_QMARK_.call(null,spec)))){
return spec;
} else {
return cljs.spec.alpha.deep_resolve.call(null,reg,spec);
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve_BANG_ = (function cljs$spec$alpha$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__4047__auto__ = cljs.spec.alpha.reg_resolve.call(null,k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.alpha.spec_QMARK_ = (function cljs$spec$alpha$spec_QMARK_(x){
if((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$alpha$Spec$))))?true:false):false)){
return x;
} else {
return null;
}
});
/**
 * returns x if x is a (cljs.spec.alpha) regex op, else logical false
 */
cljs.spec.alpha.regex_QMARK_ = (function cljs$spec$alpha$regex_QMARK_(x){
var and__4036__auto__ = cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__4036__auto__)){
return x;
} else {
return and__4036__auto__;
}
});
cljs.spec.alpha.with_name = (function cljs$spec$alpha$with_name(spec,name){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,spec))){
return cljs.core.assoc.call(null,spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_name,name);
} else {
if((((!((spec == null))))?(((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$))))?true:false):false)){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),cljs.core.cst$kw$cljs$spec$alpha_SLASH_name,name));
} else {
return null;
}
}
}
});
cljs.spec.alpha.spec_name = (function cljs$spec$alpha$spec_name(spec){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,spec))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_name.cljs$core$IFn$_invoke$arity$1(spec);
} else {
if((((!((spec == null))))?(((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$))))?true:false):false)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.alpha.maybe_spec = (function cljs$spec$alpha$maybe_spec(spec_or_k){
var s = (function (){var or__4047__auto__ = (function (){var and__4036__auto__ = cljs.core.ident_QMARK_.call(null,spec_or_k);
if(and__4036__auto__){
return cljs.spec.alpha.reg_resolve.call(null,spec_or_k);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = cljs.spec.alpha.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = cljs.spec.alpha.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,s))){
return cljs.spec.alpha.with_name.call(null,cljs.spec.alpha.regex_spec_impl.call(null,s,null),cljs.spec.alpha.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.alpha.the_spec = (function cljs$spec$alpha$the_spec(spec_or_k){
var or__4047__auto__ = cljs.spec.alpha.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.ident_QMARK_.call(null,spec_or_k)){
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.alpha.fn_sym = (function cljs$spec$alpha$fn_sym(f_n){
if(clojure.string.blank_QMARK_.call(null,f_n)){
return null;
} else {
var xs = cljs.core.map.call(null,cljs.core.demunge,clojure.string.split.call(null,f_n,"$"));
if(((((2) <= cljs.core.count.call(null,xs))) && (cljs.core.every_QMARK_.call(null,((function (xs){
return (function (p1__55422_SHARP_){
return (!(clojure.string.blank_QMARK_.call(null,p1__55422_SHARP_)));
});})(xs))
,xs)))){
var vec__55423 = cljs.core.juxt.call(null,cljs.core.butlast,cljs.core.last).call(null,xs);
var xs__$1 = cljs.core.nth.call(null,vec__55423,(0),null);
var y = cljs.core.nth.call(null,vec__55423,(1),null);
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",xs__$1)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''));
} else {
return null;
}
}
});

/**
 * @interface
 */
cljs.spec.alpha.Specize = function(){};

cljs.spec.alpha.specize_STAR_ = (function cljs$spec$alpha$specize_STAR_(var_args){
var G__55427 = arguments.length;
switch (G__55427) {
case 1:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$1 == null)))))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.spec.alpha.specize_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,form){
if((((!((_ == null)))) && ((!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$2 == null)))))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$2(_,form);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_,form);
} else {
var m__4348__auto____$1 = (cljs.spec.alpha.specize_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_,form);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$lang$maxFixedArity = 2;


cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (k){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,k__$1));
});

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (k,_){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,k__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,s__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,s__$1));
});

cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.call(null,s__$1,s__$1,null,null);
});

cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,form){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.call(null,form,s__$1,null,null);
});

cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.call(null,s__$1,s__$1,null,null);
});

cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,form){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.call(null,form,s__$1,null,null);
});

goog.object.set(cljs.spec.alpha.Specize,"_",true);

goog.object.set(cljs.spec.alpha.specize_STAR_,"_",(function() {
var G__55429 = null;
var G__55429__1 = (function (o){
var temp__5455__auto__ = (function (){var and__4036__auto__ = cljs.core.fn_QMARK_.call(null,o);
if(and__4036__auto__){
return cljs.spec.alpha.fn_sym.call(null,o.name);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var f_n = temp__5455__auto__;
return cljs.spec.alpha.spec_impl.call(null,f_n,o,null,null);
} else {
return cljs.spec.alpha.spec_impl.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown,o,null,null);
}
});
var G__55429__2 = (function (o,form){
return cljs.spec.alpha.spec_impl.call(null,form,o,null,null);
});
G__55429 = function(o,form){
switch(arguments.length){
case 1:
return G__55429__1.call(this,o);
case 2:
return G__55429__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55429.cljs$core$IFn$_invoke$arity$1 = G__55429__1;
G__55429.cljs$core$IFn$_invoke$arity$2 = G__55429__2;
return G__55429;
})()
);
cljs.spec.alpha.specize = (function cljs$spec$alpha$specize(var_args){
var G__55431 = arguments.length;
switch (G__55431) {
case 1:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1 = (function (s){
var or__4047__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.call(null,s);
}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2 = (function (s,form){
var or__4047__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.call(null,s,form);
}
});

cljs.spec.alpha.specize.cljs$lang$maxFixedArity = 2;

/**
 * tests the validity of a conform return value
 */
cljs.spec.alpha.invalid_QMARK_ = (function cljs$spec$alpha$invalid_QMARK_(ret){
return cljs.core.keyword_identical_QMARK_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid,ret);
});
/**
 * Given a spec and a value, returns :cljs.spec.alpha/invalid if value does
 *   not match spec, else the (possibly destructured) value.
 */
cljs.spec.alpha.conform = (function cljs$spec$alpha$conform(spec,x){
return cljs.spec.alpha.conform_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.alpha.unform = (function cljs$spec$alpha$unform(spec,x){
return cljs.spec.alpha.unform_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.alpha.form = (function cljs$spec$alpha$form(spec){
return cljs.spec.alpha.describe_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec));
});
cljs.spec.alpha.abbrev = (function cljs$spec$alpha$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__4036__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__4036__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if(((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,cljs.core.cst$sym$fn,cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.second.call(null,form__$1))))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = (form instanceof cljs.core.Symbol);
if(and__4036__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.alpha.describe = (function cljs$spec$alpha$describe(spec){
return cljs.spec.alpha.abbrev.call(null,cljs.spec.alpha.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.alpha.with_gen = (function cljs$spec$alpha$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.alpha.reg_resolve.call(null,spec);
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,spec__$1))){
return cljs.core.assoc.call(null,spec__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_gfn,gen_fn);
} else {
return cljs.spec.alpha.with_gen_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec__$1),gen_fn);
}
});
cljs.spec.alpha.explain_data_STAR_ = (function cljs$spec$alpha$explain_data_STAR_(spec,path,via,in$,x){
var temp__5457__auto__ = cljs.spec.alpha.explain_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__5457__auto__)){
var probs = temp__5457__auto__;
if(cljs.core.empty_QMARK_.call(null,probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,probs,cljs.core.cst$kw$cljs$spec$alpha_SLASH_spec,spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_value,x], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.alpha.explain_data = (function cljs$spec$alpha$explain_data(spec,x){
return cljs.spec.alpha.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__5455__auto__ = cljs.spec.alpha.spec_name.call(null,spec);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.alpha.explain_printer = (function cljs$spec$alpha$explain_printer(ed){
if(cljs.core.truth_(ed)){
var problems = cljs.core.sort_by.call(null,(function (p1__55434_SHARP_){
return (- cljs.core.count.call(null,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(p1__55434_SHARP_)));
}),cljs.core.sort_by.call(null,(function (p1__55433_SHARP_){
return (- cljs.core.count.call(null,cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(p1__55433_SHARP_)));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems.cljs$core$IFn$_invoke$arity$1(ed)));
return cljs.core.print.call(null,(function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__55435_55467 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__55436_55468 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__55437_55469 = true;
var _STAR_print_fn_STAR__temp_val__55438_55470 = ((function (_STAR_print_newline_STAR__orig_val__55435_55467,_STAR_print_fn_STAR__orig_val__55436_55468,_STAR_print_newline_STAR__temp_val__55437_55469,sb__4572__auto__,problems){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__55435_55467,_STAR_print_fn_STAR__orig_val__55436_55468,_STAR_print_newline_STAR__temp_val__55437_55469,sb__4572__auto__,problems))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__55437_55469;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__55438_55470;

try{var seq__55439_55471 = cljs.core.seq.call(null,problems);
var chunk__55440_55472 = null;
var count__55441_55473 = (0);
var i__55442_55474 = (0);
while(true){
if((i__55442_55474 < count__55441_55473)){
var map__55443_55475 = cljs.core._nth.call(null,chunk__55440_55472,i__55442_55474);
var map__55443_55476__$1 = (((((!((map__55443_55475 == null))))?(((((map__55443_55475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55443_55475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55443_55475):map__55443_55475);
var prob_55477 = map__55443_55476__$1;
var path_55478 = cljs.core.get.call(null,map__55443_55476__$1,cljs.core.cst$kw$path);
var pred_55479 = cljs.core.get.call(null,map__55443_55476__$1,cljs.core.cst$kw$pred);
var val_55480 = cljs.core.get.call(null,map__55443_55476__$1,cljs.core.cst$kw$val);
var reason_55481 = cljs.core.get.call(null,map__55443_55476__$1,cljs.core.cst$kw$reason);
var via_55482 = cljs.core.get.call(null,map__55443_55476__$1,cljs.core.cst$kw$via);
var in_55483 = cljs.core.get.call(null,map__55443_55476__$1,cljs.core.cst$kw$in);
cljs.core.pr.call(null,val_55480);

cljs.core.print.call(null," - failed: ");

if(cljs.core.truth_(reason_55481)){
cljs.core.print.call(null,reason_55481);
} else {
cljs.core.pr.call(null,cljs.spec.alpha.abbrev.call(null,pred_55479));
}

if(cljs.core.empty_QMARK_.call(null,in_55483)){
} else {
cljs.core.print.call(null,[" in: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,in_55483))].join(''));
}

if(cljs.core.empty_QMARK_.call(null,path_55478)){
} else {
cljs.core.print.call(null,[" at: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,path_55478))].join(''));
}

if(cljs.core.empty_QMARK_.call(null,via_55482)){
} else {
cljs.core.print.call(null,[" spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.last.call(null,via_55482)))].join(''));
}

var seq__55445_55484 = cljs.core.seq.call(null,prob_55477);
var chunk__55446_55485 = null;
var count__55447_55486 = (0);
var i__55448_55487 = (0);
while(true){
if((i__55448_55487 < count__55447_55486)){
var vec__55449_55488 = cljs.core._nth.call(null,chunk__55446_55485,i__55448_55487);
var k_55489 = cljs.core.nth.call(null,vec__55449_55488,(0),null);
var v_55490 = cljs.core.nth.call(null,vec__55449_55488,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_55489))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_55489)," ");

cljs.core.pr.call(null,v_55490);
}


var G__55491 = seq__55445_55484;
var G__55492 = chunk__55446_55485;
var G__55493 = count__55447_55486;
var G__55494 = (i__55448_55487 + (1));
seq__55445_55484 = G__55491;
chunk__55446_55485 = G__55492;
count__55447_55486 = G__55493;
i__55448_55487 = G__55494;
continue;
} else {
var temp__5457__auto___55495 = cljs.core.seq.call(null,seq__55445_55484);
if(temp__5457__auto___55495){
var seq__55445_55496__$1 = temp__5457__auto___55495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55445_55496__$1)){
var c__4461__auto___55497 = cljs.core.chunk_first.call(null,seq__55445_55496__$1);
var G__55498 = cljs.core.chunk_rest.call(null,seq__55445_55496__$1);
var G__55499 = c__4461__auto___55497;
var G__55500 = cljs.core.count.call(null,c__4461__auto___55497);
var G__55501 = (0);
seq__55445_55484 = G__55498;
chunk__55446_55485 = G__55499;
count__55447_55486 = G__55500;
i__55448_55487 = G__55501;
continue;
} else {
var vec__55452_55502 = cljs.core.first.call(null,seq__55445_55496__$1);
var k_55503 = cljs.core.nth.call(null,vec__55452_55502,(0),null);
var v_55504 = cljs.core.nth.call(null,vec__55452_55502,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_55503))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_55503)," ");

cljs.core.pr.call(null,v_55504);
}


var G__55505 = cljs.core.next.call(null,seq__55445_55496__$1);
var G__55506 = null;
var G__55507 = (0);
var G__55508 = (0);
seq__55445_55484 = G__55505;
chunk__55446_55485 = G__55506;
count__55447_55486 = G__55507;
i__55448_55487 = G__55508;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);


var G__55509 = seq__55439_55471;
var G__55510 = chunk__55440_55472;
var G__55511 = count__55441_55473;
var G__55512 = (i__55442_55474 + (1));
seq__55439_55471 = G__55509;
chunk__55440_55472 = G__55510;
count__55441_55473 = G__55511;
i__55442_55474 = G__55512;
continue;
} else {
var temp__5457__auto___55513 = cljs.core.seq.call(null,seq__55439_55471);
if(temp__5457__auto___55513){
var seq__55439_55514__$1 = temp__5457__auto___55513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55439_55514__$1)){
var c__4461__auto___55515 = cljs.core.chunk_first.call(null,seq__55439_55514__$1);
var G__55516 = cljs.core.chunk_rest.call(null,seq__55439_55514__$1);
var G__55517 = c__4461__auto___55515;
var G__55518 = cljs.core.count.call(null,c__4461__auto___55515);
var G__55519 = (0);
seq__55439_55471 = G__55516;
chunk__55440_55472 = G__55517;
count__55441_55473 = G__55518;
i__55442_55474 = G__55519;
continue;
} else {
var map__55455_55520 = cljs.core.first.call(null,seq__55439_55514__$1);
var map__55455_55521__$1 = (((((!((map__55455_55520 == null))))?(((((map__55455_55520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55455_55520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55455_55520):map__55455_55520);
var prob_55522 = map__55455_55521__$1;
var path_55523 = cljs.core.get.call(null,map__55455_55521__$1,cljs.core.cst$kw$path);
var pred_55524 = cljs.core.get.call(null,map__55455_55521__$1,cljs.core.cst$kw$pred);
var val_55525 = cljs.core.get.call(null,map__55455_55521__$1,cljs.core.cst$kw$val);
var reason_55526 = cljs.core.get.call(null,map__55455_55521__$1,cljs.core.cst$kw$reason);
var via_55527 = cljs.core.get.call(null,map__55455_55521__$1,cljs.core.cst$kw$via);
var in_55528 = cljs.core.get.call(null,map__55455_55521__$1,cljs.core.cst$kw$in);
cljs.core.pr.call(null,val_55525);

cljs.core.print.call(null," - failed: ");

if(cljs.core.truth_(reason_55526)){
cljs.core.print.call(null,reason_55526);
} else {
cljs.core.pr.call(null,cljs.spec.alpha.abbrev.call(null,pred_55524));
}

if(cljs.core.empty_QMARK_.call(null,in_55528)){
} else {
cljs.core.print.call(null,[" in: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,in_55528))].join(''));
}

if(cljs.core.empty_QMARK_.call(null,path_55523)){
} else {
cljs.core.print.call(null,[" at: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,path_55523))].join(''));
}

if(cljs.core.empty_QMARK_.call(null,via_55527)){
} else {
cljs.core.print.call(null,[" spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.last.call(null,via_55527)))].join(''));
}

var seq__55457_55529 = cljs.core.seq.call(null,prob_55522);
var chunk__55458_55530 = null;
var count__55459_55531 = (0);
var i__55460_55532 = (0);
while(true){
if((i__55460_55532 < count__55459_55531)){
var vec__55461_55533 = cljs.core._nth.call(null,chunk__55458_55530,i__55460_55532);
var k_55534 = cljs.core.nth.call(null,vec__55461_55533,(0),null);
var v_55535 = cljs.core.nth.call(null,vec__55461_55533,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_55534))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_55534)," ");

cljs.core.pr.call(null,v_55535);
}


var G__55536 = seq__55457_55529;
var G__55537 = chunk__55458_55530;
var G__55538 = count__55459_55531;
var G__55539 = (i__55460_55532 + (1));
seq__55457_55529 = G__55536;
chunk__55458_55530 = G__55537;
count__55459_55531 = G__55538;
i__55460_55532 = G__55539;
continue;
} else {
var temp__5457__auto___55540__$1 = cljs.core.seq.call(null,seq__55457_55529);
if(temp__5457__auto___55540__$1){
var seq__55457_55541__$1 = temp__5457__auto___55540__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55457_55541__$1)){
var c__4461__auto___55542 = cljs.core.chunk_first.call(null,seq__55457_55541__$1);
var G__55543 = cljs.core.chunk_rest.call(null,seq__55457_55541__$1);
var G__55544 = c__4461__auto___55542;
var G__55545 = cljs.core.count.call(null,c__4461__auto___55542);
var G__55546 = (0);
seq__55457_55529 = G__55543;
chunk__55458_55530 = G__55544;
count__55459_55531 = G__55545;
i__55460_55532 = G__55546;
continue;
} else {
var vec__55464_55547 = cljs.core.first.call(null,seq__55457_55541__$1);
var k_55548 = cljs.core.nth.call(null,vec__55464_55547,(0),null);
var v_55549 = cljs.core.nth.call(null,vec__55464_55547,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_55548))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_55548)," ");

cljs.core.pr.call(null,v_55549);
}


var G__55550 = cljs.core.next.call(null,seq__55457_55541__$1);
var G__55551 = null;
var G__55552 = (0);
var G__55553 = (0);
seq__55457_55529 = G__55550;
chunk__55458_55530 = G__55551;
count__55459_55531 = G__55552;
i__55460_55532 = G__55553;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);


var G__55554 = cljs.core.next.call(null,seq__55439_55514__$1);
var G__55555 = null;
var G__55556 = (0);
var G__55557 = (0);
seq__55439_55471 = G__55554;
chunk__55440_55472 = G__55555;
count__55441_55473 = G__55556;
i__55442_55474 = G__55557;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__55436_55468;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__55435_55467;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
cljs.spec.alpha._STAR_explain_out_STAR_ = cljs.spec.alpha.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.alpha.explain_out = (function cljs$spec$alpha$explain_out(ed){
return cljs.spec.alpha._STAR_explain_out_STAR_.call(null,ed);
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.alpha.explain = (function cljs$spec$alpha$explain(spec,x){
return cljs.spec.alpha.explain_out.call(null,cljs.spec.alpha.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.alpha.explain_str = (function cljs$spec$alpha$explain_str(spec,x){
var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__55558_55562 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__55559_55563 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__55560_55564 = true;
var _STAR_print_fn_STAR__temp_val__55561_55565 = ((function (_STAR_print_newline_STAR__orig_val__55558_55562,_STAR_print_fn_STAR__orig_val__55559_55563,_STAR_print_newline_STAR__temp_val__55560_55564,sb__4572__auto__){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__55558_55562,_STAR_print_fn_STAR__orig_val__55559_55563,_STAR_print_newline_STAR__temp_val__55560_55564,sb__4572__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__55560_55564;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__55561_55565;

try{cljs.spec.alpha.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__55559_55563;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__55558_55562;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
});
cljs.spec.alpha.gensub = (function cljs$spec$alpha$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec);
var temp__5455__auto__ = (function (){var or__4047__auto__ = (function (){var temp__5457__auto__ = (function (){var or__4047__auto__ = cljs.core.get.call(null,overrides,(function (){var or__4047__auto__ = cljs.spec.alpha.spec_name.call(null,spec__$1);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,overrides,path);
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var gfn = temp__5457__auto__;
return gfn.call(null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.spec.alpha.gen_STAR_.call(null,spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var g = temp__5455__auto__;
return cljs.spec.gen.alpha.such_that.call(null,((function (g,temp__5455__auto__,spec__$1){
return (function (p1__55566_SHARP_){
return cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,p1__55566_SHARP_);
});})(g,temp__5455__auto__,spec__$1))
,g,(100));
} else {
throw (new Error(["Unable to construct gen at: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.alpha.gen = (function cljs$spec$alpha$gen(var_args){
var G__55568 = arguments.length;
switch (G__55568) {
case 1:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.gen.call(null,spec,null);
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.alpha.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_recursion_DASH_limit,cljs.spec.alpha._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.alpha.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.alpha.def_impl = (function cljs$spec$alpha$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.ident_QMARK_.call(null,k);
if(and__4036__auto__){
return cljs.core.namespace.call(null,k);
} else {
return and__4036__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","k must be namespaced keyword or resolveable symbol","\n","(c/and (ident? k) (namespace k))"].join('')));
}

if((spec == null)){
cljs.core.swap_BANG_.call(null,cljs.spec.alpha.registry_ref,cljs.core.dissoc,k);
} else {
var spec_55570__$1 = (cljs.core.truth_((function (){var or__4047__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = cljs.spec.alpha.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.alpha.registry_ref),spec);
}
}
})())?spec:cljs.spec.alpha.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.alpha.registry_ref,cljs.core.assoc,k,cljs.spec.alpha.with_name.call(null,spec_55570__$1,k));
}

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.alpha.registry = (function cljs$spec$alpha$registry(){
return cljs.core.deref.call(null,cljs.spec.alpha.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.alpha.__GT_sym = (function cljs$spec$alpha$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.alpha.get_spec = (function cljs$spec$alpha$get_spec(k){
return cljs.core.get.call(null,cljs.spec.alpha.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.alpha.__GT_sym.call(null,k)));
});
cljs.spec.alpha.macroexpand_check = (function cljs$spec$alpha$macroexpand_check(v,args){
var specs = cljs.spec.alpha.get_spec.call(null,v);
var temp__5457__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__5457__auto__)){
var arg_spec = temp__5457__auto__;
if(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.conform.call(null,arg_spec,args))){
var ed = cljs.core.assoc.call(null,cljs.spec.alpha.explain_data_STAR_.call(null,arg_spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__5455__auto__ = cljs.spec.alpha.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),cljs.core.cst$kw$cljs$spec$alpha_SLASH_args,args);
throw cljs.core.ex_info.call(null,["Call to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.__GT_sym.call(null,v))," did not conform to spec."].join(''),ed);
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.alpha.recur_limit_QMARK_ = (function cljs$spec$alpha$recur_limit_QMARK_(rmap,id,path,k){
return (((cljs.core.get.call(null,rmap,id) > cljs.core.cst$kw$cljs$spec$alpha_SLASH_recursion_DASH_limit.cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k)));
});
cljs.spec.alpha.inck = (function cljs$spec$alpha$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__4047__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.alpha.dt = (function cljs$spec$alpha$dt(var_args){
var G__55572 = arguments.length;
switch (G__55572) {
case 3:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.alpha.dt.call(null,pred,x,form,null);
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__5455__auto__ = cljs.spec.alpha.the_spec.call(null,pred);
if(cljs.core.truth_(temp__5455__auto__)){
var spec = temp__5455__auto__;
return cljs.spec.alpha.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,form))," is not a fn, expected predicate fn"].join('')));
}
}
} else {
return x;
}
});

cljs.spec.alpha.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.valid_QMARK_ = (function cljs$spec$alpha$valid_QMARK_(var_args){
var G__55575 = arguments.length;
switch (G__55575) {
case 2:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec);
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.conform_STAR_.call(null,spec__$1,x))));
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec,form);
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.conform_STAR_.call(null,spec__$1,x))));
});

cljs.spec.alpha.valid_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * internal helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.pvalid_QMARK_ = (function cljs$spec$alpha$pvalid_QMARK_(var_args){
var G__55578 = arguments.length;
switch (G__55578) {
case 2:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.dt.call(null,pred,x,cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown))));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.dt.call(null,pred,x,form))));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.explain_1 = (function cljs$spec$alpha$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.alpha.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.alpha.explain_STAR_.call(null,pred__$1,path,(function (){var temp__5455__auto__ = cljs.spec.alpha.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,form,cljs.core.cst$kw$val,v,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});

/**
 * returns a generator for form f, which can be a keyword or a list
 *   starting with 'or or 'and.
 */
cljs.spec.alpha.k_gen = (function cljs$spec$alpha$k_gen(f){
if((f instanceof cljs.core.Keyword)){
return cljs.spec.gen.alpha.return$.call(null,f);
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$sym$or,cljs.core.first.call(null,f))){
return cljs.spec.alpha.or_k_gen.call(null,(1),cljs.core.rest.call(null,f));
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$sym$and,cljs.core.first.call(null,f))){
return cljs.spec.alpha.and_k_gen.call(null,cljs.core.rest.call(null,f));
} else {
return null;
}
}
}
});
/**
 * returns a tuple generator made up of generators for a random subset
 *   of min-count (default 0) to all elements in s.
 */
cljs.spec.alpha.or_k_gen = (function cljs$spec$alpha$or_k_gen(var_args){
var G__55581 = arguments.length;
switch (G__55581) {
case 1:
return cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.spec.alpha.or_k_gen.call(null,(0),s);
});

cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$2 = (function (min_count,s){
return cljs.spec.gen.alpha.bind.call(null,cljs.spec.gen.alpha.tuple.call(null,cljs.spec.gen.alpha.choose.call(null,min_count,cljs.core.count.call(null,s)),cljs.spec.gen.alpha.shuffle.call(null,cljs.core.map.call(null,cljs.spec.alpha.k_gen,s))),(function (p__55582){
var vec__55583 = p__55582;
var n = cljs.core.nth.call(null,vec__55583,(0),null);
var gens = cljs.core.nth.call(null,vec__55583,(1),null);
return cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,cljs.core.take.call(null,n,gens));
}));
});

cljs.spec.alpha.or_k_gen.cljs$lang$maxFixedArity = 2;

/**
 * returns a tuple generator made up of generators for every element
 *   in s.
 */
cljs.spec.alpha.and_k_gen = (function cljs$spec$alpha$and_k_gen(s){
return cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,cljs.core.map.call(null,cljs.spec.alpha.k_gen,s));
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.alpha.map_spec_impl = (function cljs$spec$alpha$map_spec_impl(p__55590){
var map__55591 = p__55590;
var map__55591__$1 = (((((!((map__55591 == null))))?(((((map__55591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55591):map__55591);
var argm = map__55591__$1;
var opt = cljs.core.get.call(null,map__55591__$1,cljs.core.cst$kw$opt);
var req_un = cljs.core.get.call(null,map__55591__$1,cljs.core.cst$kw$req_DASH_un);
var opt_un = cljs.core.get.call(null,map__55591__$1,cljs.core.cst$kw$opt_DASH_un);
var gfn = cljs.core.get.call(null,map__55591__$1,cljs.core.cst$kw$gfn);
var pred_exprs = cljs.core.get.call(null,map__55591__$1,cljs.core.cst$kw$pred_DASH_exprs);
var keys_pred = cljs.core.get.call(null,map__55591__$1,cljs.core.cst$kw$keys_DASH_pred);
var opt_keys = cljs.core.get.call(null,map__55591__$1,cljs.core.cst$kw$opt_DASH_keys);
var req_specs = cljs.core.get.call(null,map__55591__$1,cljs.core.cst$kw$req_DASH_specs);
var req = cljs.core.get.call(null,map__55591__$1,cljs.core.cst$kw$req);
var req_keys = cljs.core.get.call(null,map__55591__$1,cljs.core.cst$kw$req_DASH_keys);
var opt_specs = cljs.core.get.call(null,map__55591__$1,cljs.core.cst$kw$opt_DASH_specs);
var pred_forms = cljs.core.get.call(null,map__55591__$1,cljs.core.cst$kw$pred_DASH_forms);
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__55587_SHARP_){
var or__4047__auto__ = k__GT_s.call(null,p1__55587_SHARP_);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return p1__55587_SHARP_;
}
});})(k__GT_s,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha55593 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha55593 = (function (keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,map__55591,req,id,req_keys,opt_specs,k__GT_s,p__55590,pred_forms,meta55594){
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.map__55591 = map__55591;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.p__55590 = p__55590;
this.pred_forms = pred_forms;
this.meta55594 = meta55594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha55593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_55595,meta55594__$1){
var self__ = this;
var _55595__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha55593(self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.map__55591,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.p__55590,self__.pred_forms,meta55594__$1));
});})(k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha55593.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_55595){
var self__ = this;
var _55595__$1 = this;
return self__.meta55594;
});})(k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha55593.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55593.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha55593.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha55593.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55593.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.alpha.registry.call(null);
var ret = m;
var G__55602 = m;
var vec__55603 = G__55602;
var seq__55604 = cljs.core.seq.call(null,vec__55603);
var first__55605 = cljs.core.first.call(null,seq__55604);
var seq__55604__$1 = cljs.core.next.call(null,seq__55604);
var vec__55606 = first__55605;
var k = cljs.core.nth.call(null,vec__55606,(0),null);
var v = cljs.core.nth.call(null,vec__55606,(1),null);
var ks = seq__55604__$1;
var keys = vec__55603;
var ret__$1 = ret;
var G__55602__$1 = G__55602;
while(true){
var ret__$2 = ret__$1;
var vec__55609 = G__55602__$1;
var seq__55610 = cljs.core.seq.call(null,vec__55609);
var first__55611 = cljs.core.first.call(null,seq__55610);
var seq__55610__$1 = cljs.core.next.call(null,seq__55610);
var vec__55612 = first__55611;
var k__$1 = cljs.core.nth.call(null,vec__55612,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__55612,(1),null);
var ks__$1 = seq__55610__$1;
var keys__$1 = vec__55609;
if(cljs.core.truth_(keys__$1)){
var sname = self__.keys__GT_specnames.call(null,k__$1);
var temp__5455__auto__ = cljs.core.get.call(null,reg,sname);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
var cv = cljs.spec.alpha.conform.call(null,s,v__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cv)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var G__55634 = (((cv === v__$1))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__55635 = ks__$1;
ret__$1 = G__55634;
G__55602__$1 = G__55635;
continue;
}
} else {
var G__55636 = ret__$2;
var G__55637 = ks__$1;
ret__$1 = G__55636;
G__55602__$1 = G__55637;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
});})(k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha55593.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.alpha.registry.call(null);
var ret = m;
var G__55618 = cljs.core.keys.call(null,m);
var vec__55619 = G__55618;
var seq__55620 = cljs.core.seq.call(null,vec__55619);
var first__55621 = cljs.core.first.call(null,seq__55620);
var seq__55620__$1 = cljs.core.next.call(null,seq__55620);
var k = first__55621;
var ks = seq__55620__$1;
var keys = vec__55619;
var ret__$1 = ret;
var G__55618__$1 = G__55618;
while(true){
var ret__$2 = ret__$1;
var vec__55622 = G__55618__$1;
var seq__55623 = cljs.core.seq.call(null,vec__55622);
var first__55624 = cljs.core.first.call(null,seq__55623);
var seq__55623__$1 = cljs.core.next.call(null,seq__55623);
var k__$1 = first__55624;
var ks__$1 = seq__55623__$1;
var keys__$1 = vec__55622;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.alpha.unform.call(null,self__.keys__GT_specnames.call(null,k__$1),cv);
var G__55638 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__55639 = ks__$1;
ret__$1 = G__55638;
G__55618__$1 = G__55639;
continue;
} else {
var G__55640 = ret__$2;
var G__55641 = ks__$1;
ret__$1 = G__55640;
G__55618__$1 = G__55641;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha55593.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.map_QMARK_.call(null,x)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
var reg = cljs.spec.alpha.registry.call(null);
return cljs.core.apply.call(null,cljs.core.concat,(function (){var temp__5457__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return form;
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__5457__auto__){
var probs = temp__5457__auto__;
return cljs.core.map.call(null,((function (probs,temp__5457__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__55588_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,p1__55588_SHARP_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null));
});})(probs,temp__5457__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__55625){
var vec__55626 = p__55625;
var k = cljs.core.nth.call(null,vec__55626,(0),null);
var v = cljs.core.nth.call(null,vec__55626,(1),null);
if(cljs.core.truth_((function (){var or__4047__auto__ = (!(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.spec.alpha.pvalid_QMARK_.call(null,self__.keys__GT_specnames.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.alpha.explain_1.call(null,self__.keys__GT_specnames.call(null,k),self__.keys__GT_specnames.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha55593.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
var rgen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.alpha.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k)], null);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.alpha.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var reqs = cljs.core.map.call(null,rgen,self__.req_keys,self__.req_specs);
var opts = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.second,reqs),cljs.core.map.call(null,cljs.core.second,opts)))){
return cljs.spec.gen.alpha.bind.call(null,cljs.spec.gen.alpha.tuple.call(null,cljs.spec.alpha.and_k_gen.call(null,self__.req),cljs.spec.alpha.or_k_gen.call(null,self__.opt),cljs.spec.alpha.and_k_gen.call(null,self__.req_un),cljs.spec.alpha.or_k_gen.call(null,self__.opt_un)),((function (rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__55629){
var vec__55630 = p__55629;
var req_ks = cljs.core.nth.call(null,vec__55630,(0),null);
var opt_ks = cljs.core.nth.call(null,vec__55630,(1),null);
var req_un_ks = cljs.core.nth.call(null,vec__55630,(2),null);
var opt_un_ks = cljs.core.nth.call(null,vec__55630,(3),null);
var qks = cljs.core.flatten.call(null,cljs.core.concat.call(null,req_ks,opt_ks));
var unqks = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.keyword,cljs.core.name),cljs.core.flatten.call(null,cljs.core.concat.call(null,req_un_ks,opt_un_ks)));
return cljs.core.apply.call(null,cljs.spec.gen.alpha.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,((function (qks,unqks,vec__55630,req_ks,opt_ks,req_un_ks,opt_un_ks,rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__55589_SHARP_){
return cljs.core.set.call(null,cljs.core.concat.call(null,qks,unqks)).call(null,cljs.core.first.call(null,p1__55589_SHARP_));
});})(qks,unqks,vec__55630,req_ks,opt_ks,req_un_ks,opt_un_ks,rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.into.call(null,reqs,opts))));
});})(rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha55593.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,cljs.core.cst$kw$gfn,gfn__$1));
});})(k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha55593.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,(function (){var G__55633 = cljs.core.PersistentVector.EMPTY;
var G__55633__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__55633,cljs.core.cst$kw$req,self__.req):G__55633);
var G__55633__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__55633__$1,cljs.core.cst$kw$opt,self__.opt):G__55633__$1);
var G__55633__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__55633__$2,cljs.core.cst$kw$req_DASH_un,self__.req_un):G__55633__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__55633__$3,cljs.core.cst$kw$opt_DASH_un,self__.opt_un);
} else {
return G__55633__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha55593.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys_DASH__GT_specnames,cljs.core.cst$sym$opt,cljs.core.cst$sym$req_DASH_un,cljs.core.cst$sym$opt_DASH_un,cljs.core.cst$sym$gfn,cljs.core.cst$sym$pred_DASH_exprs,cljs.core.cst$sym$keys_DASH_pred,cljs.core.cst$sym$argm,cljs.core.cst$sym$opt_DASH_keys,cljs.core.cst$sym$req_DASH_specs,cljs.core.cst$sym$map__55591,cljs.core.cst$sym$req,cljs.core.cst$sym$id,cljs.core.cst$sym$req_DASH_keys,cljs.core.cst$sym$opt_DASH_specs,cljs.core.cst$sym$k_DASH__GT_s,cljs.core.cst$sym$p__55590,cljs.core.cst$sym$pred_DASH_forms,cljs.core.cst$sym$meta55594], null);
});})(k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha55593.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha55593.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha55593";

cljs.spec.alpha.t_cljs$spec$alpha55593.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha55593");
});})(k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha55593.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha55593 = ((function (k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$alpha$map_spec_impl_$___GT_t_cljs$spec$alpha55593(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,map__55591__$2,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,p__55590__$1,pred_forms__$1,meta55594){
return (new cljs.spec.alpha.t_cljs$spec$alpha55593(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,map__55591__$2,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,p__55590__$1,pred_forms__$1,meta55594));
});})(k__GT_s,keys__GT_specnames,id,map__55591,map__55591__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha55593(keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,map__55591__$1,req,id,req_keys,opt_specs,k__GT_s,p__55590,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.alpha.spec_impl = (function cljs$spec$alpha$spec_impl(var_args){
var G__55643 = arguments.length;
switch (G__55643) {
case 4:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.alpha.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_.call(null,pred))){
var G__55644 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen.call(null,G__55644,gfn);
} else {
return G__55644;
}
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,pred))){
return cljs.spec.alpha.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.ident_QMARK_.call(null,pred)){
var G__55645 = cljs.spec.alpha.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen.call(null,G__55645,gfn);
} else {
return G__55645;
}
} else {
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha55646 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha55646 = (function (form,pred,gfn,cpred_QMARK_,unc,meta55647){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta55647 = meta55647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha55646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55648,meta55647__$1){
var self__ = this;
var _55648__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha55646(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta55647__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha55646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55648){
var self__ = this;
var _55648__$1 = this;
return self__.meta55647;
});

cljs.spec.alpha.t_cljs$spec$alpha55646.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55646.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha55646.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha55646.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55646.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = self__.pred.call(null,x);
if(cljs.core.truth_(self__.cpred_QMARK_)){
return ret;
} else {
if(cljs.core.truth_(ret)){
return x;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
});

cljs.spec.alpha.t_cljs$spec$alpha55646.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.alpha.t_cljs$spec$alpha55646.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,self__.form,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return null;
}
});

cljs.spec.alpha.t_cljs$spec$alpha55646.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.alpha.t_cljs$spec$alpha55646.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.alpha.t_cljs$spec$alpha55646.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.alpha.t_cljs$spec$alpha55646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$cpred_QMARK_,cljs.core.cst$sym$unc,cljs.core.cst$sym$meta55647], null);
});

cljs.spec.alpha.t_cljs$spec$alpha55646.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha55646.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha55646";

cljs.spec.alpha.t_cljs$spec$alpha55646.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha55646");
});

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha55646.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha55646 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha55646(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta55647){
return (new cljs.spec.alpha.t_cljs$spec$alpha55646(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta55647));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha55646(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.alpha.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.alpha.multi_spec_impl = (function cljs$spec$alpha$multi_spec_impl(var_args){
var G__55656 = arguments.length;
switch (G__55656) {
case 3:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.alpha.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__55650_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__4036__auto__ = cljs.core._get_method.call(null,mm,cljs.core._dispatch_fn.call(null,mm).call(null,p1__55650_SHARP_));
if(cljs.core.truth_(and__4036__auto__)){
return mm.call(null,p1__55650_SHARP_);
} else {
return and__4036__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__55651_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__55651_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__55652_SHARP_,p2__55653_SHARP_){
return cljs.core.assoc.call(null,p1__55652_SHARP_,retag,p2__55653_SHARP_);
});})(id,predx,dval))
:retag);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha55657 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha55657 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta55658){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta55658 = meta55658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha55657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_55659,meta55658__$1){
var self__ = this;
var _55659__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha55657(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta55658__$1));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha55657.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_55659){
var self__ = this;
var _55659__$1 = this;
return self__.meta55658;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha55657.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55657.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha55657.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha55657.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55657.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__5455__auto__)){
var pred = temp__5455__auto__;
return cljs.spec.alpha.dt.call(null,pred,x,self__.form);
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha55657.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__5455__auto__)){
var pred = temp__5455__auto__;
return cljs.spec.alpha.unform.call(null,pred,x);
} else {
throw (new Error(["No method of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form)," for dispatch value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.dval.call(null,x))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha55657.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__5455__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__5455__auto__)){
var pred = temp__5455__auto__;
return cljs.spec.alpha.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path__$1,cljs.core.cst$kw$pred,self__.form,cljs.core.cst$kw$val,x,cljs.core.cst$kw$reason,"no method",cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha55657.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__55660){
var vec__55661 = p__55660;
var k = cljs.core.nth.call(null,vec__55661,(0),null);
var f = cljs.core.nth.call(null,vec__55661,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
if(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k)){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__55661,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.gen.alpha.fmap.call(null,((function (rmap__$1,p,vec__55661,k,f,___$1,id,predx,dval,tag){
return (function (p1__55654_SHARP_){
return self__.tag.call(null,p1__55654_SHARP_,k);
});})(rmap__$1,p,vec__55661,k,f,___$1,id,predx,dval,tag))
,cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,(new cljs.core.List(null,cljs.core.cst$sym$method,(new cljs.core.List(null,self__.form,(new cljs.core.List(null,k,null,(1),null)),(2),null)),(3),null))));
});})(rmap__$1,p,vec__55661,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__55664){
var vec__55665 = p__55664;
var k = cljs.core.nth.call(null,vec__55665,(0),null);
return cljs.spec.alpha.invalid_QMARK_.call(null,k);
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.gen.alpha.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha55657.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha55657.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_multi_DASH_spec,null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)),(new cljs.core.List(null,self__.retag,null,(1),null)))));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha55657.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$mmvar,cljs.core.cst$sym$retag,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$predx,cljs.core.cst$sym$dval,cljs.core.cst$sym$tag,cljs.core.cst$sym$meta55658], null);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha55657.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha55657.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha55657";

cljs.spec.alpha.t_cljs$spec$alpha55657.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha55657");
});})(id,predx,dval,tag))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha55657.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha55657 = ((function (id,predx,dval,tag){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha55657(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta55658){
return (new cljs.spec.alpha.t_cljs$spec$alpha55657(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta55658));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha55657(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.alpha.tuple_impl = (function cljs$spec$alpha$tuple_impl(var_args){
var G__55670 = arguments.length;
switch (G__55670) {
case 2:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.alpha.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.alpha.specize,preds,forms);
}),null));
var cnt = cljs.core.count.call(null,preds);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha55671 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha55671 = (function (forms,preds,gfn,specs,cnt,meta55672){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
this.meta55672 = meta55672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha55671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_55673,meta55672__$1){
var self__ = this;
var _55673__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha55671(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta55672__$1));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha55671.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_55673){
var self__ = this;
var _55673__$1 = this;
return self__.meta55672;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha55671.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55671.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha55671.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha55671.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55671.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var specs__$1 = cljs.core.deref.call(null,self__.specs);
if((!(((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),self__.cnt)))))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,self__.cnt)){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,i),v);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cv)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var G__55675 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__55676 = (i + (1));
ret = G__55675;
i = G__55676;
continue;
}
}
break;
}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha55671.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.alpha.unform.call(null,self__.preds.call(null,i),cv);
var G__55677 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__55678 = (i + (1));
ret = G__55677;
i = G__55678;
continue;
}
break;
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha55671.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.vector_QMARK_.call(null,x)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_count,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.count.call(null,self__.preds),null,(1),null))))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1,specs,cnt){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.alpha.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1,specs,cnt))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha55671.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,specs,cnt){
return (function (i,p,f){
return cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1,specs,cnt))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gs);
} else {
return null;
}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha55671.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha55671.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,null,(1),null)),self__.forms)));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha55671.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$cnt,cljs.core.cst$sym$meta55672], null);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha55671.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha55671.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha55671";

cljs.spec.alpha.t_cljs$spec$alpha55671.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha55671");
});})(specs,cnt))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha55671.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha55671 = ((function (specs,cnt){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha55671(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta55672){
return (new cljs.spec.alpha.t_cljs$spec$alpha55671(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta55672));
});})(specs,cnt))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha55671(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.tagged_ret = (function cljs$spec$alpha$tagged_ret(tag,ret){
return (new cljs.core.MapEntry(tag,ret,null));
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.alpha.or_spec_impl = (function cljs$spec$alpha$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var specs = (new cljs.core.Delay(((function (id,kps){
return (function (){
return cljs.core.mapv.call(null,cljs.spec.alpha.specize,preds,forms);
});})(id,kps))
,null));
var cform = (function (){var G__55679 = cljs.core.count.call(null,preds);
switch (G__55679) {
case (2):
return ((function (G__55679,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
var ret__$1 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(1)),ret__$1);
}
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(0)),ret);
}
});
;})(G__55679,id,kps,specs))

break;
case (3):
return ((function (G__55679,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
var ret__$1 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
var ret__$2 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(2)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$2)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(2)),ret__$2);
}
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(1)),ret__$1);
}
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(0)),ret);
}
});
;})(G__55679,id,kps,specs))

break;
default:
return ((function (G__55679,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var spec = specs__$1.call(null,i);
var ret = cljs.spec.alpha.conform_STAR_.call(null,spec,x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
var G__55688 = (i + (1));
i = G__55688;
continue;
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,i),ret);
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
break;
}
});
;})(G__55679,id,kps,specs))

}
})();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha55680 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha55680 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta55681){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
this.meta55681 = meta55681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha55680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_55682,meta55681__$1){
var self__ = this;
var _55682__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha55680(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta55681__$1));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha55680.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_55682){
var self__ = this;
var _55682__$1 = this;
return self__.meta55681;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha55680.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55680.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha55680.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha55680.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55680.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha55680.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__55683){
var self__ = this;
var vec__55684 = p__55683;
var k = cljs.core.nth.call(null,vec__55684,(0),null);
var x = cljs.core.nth.call(null,vec__55684,(1),null);
var ___$1 = this;
return cljs.spec.alpha.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha55680.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (this$__$1,id,kps,specs,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.alpha.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,kps,specs,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha55680.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,kps,specs,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
if(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k)){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,specs,cform){
return (function (){
return cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,specs,cform))
,null)));
}
});})(___$1,id,kps,specs,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.call(null,gs);
}
}
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha55680.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha55680.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,null,(1),null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha55680.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys,cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$kps,cljs.core.cst$sym$specs,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta55681], null);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha55680.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha55680.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha55680";

cljs.spec.alpha.t_cljs$spec$alpha55680.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha55680");
});})(id,kps,specs,cform))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha55680.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha55680 = ((function (id,kps,specs,cform){
return (function cljs$spec$alpha$or_spec_impl_$___GT_t_cljs$spec$alpha55680(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta55681){
return (new cljs.spec.alpha.t_cljs$spec$alpha55680(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta55681));
});})(id,kps,specs,cform))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha55680(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.and_preds = (function cljs$spec$alpha$and_preds(x,preds,forms){
var ret = x;
var G__55695 = preds;
var vec__55697 = G__55695;
var seq__55698 = cljs.core.seq.call(null,vec__55697);
var first__55699 = cljs.core.first.call(null,seq__55698);
var seq__55698__$1 = cljs.core.next.call(null,seq__55698);
var pred = first__55699;
var preds__$1 = seq__55698__$1;
var G__55696 = forms;
var vec__55700 = G__55696;
var seq__55701 = cljs.core.seq.call(null,vec__55700);
var first__55702 = cljs.core.first.call(null,seq__55701);
var seq__55701__$1 = cljs.core.next.call(null,seq__55701);
var form = first__55702;
var forms__$1 = seq__55701__$1;
var ret__$1 = ret;
var G__55695__$1 = G__55695;
var G__55696__$1 = G__55696;
while(true){
var ret__$2 = ret__$1;
var vec__55703 = G__55695__$1;
var seq__55704 = cljs.core.seq.call(null,vec__55703);
var first__55705 = cljs.core.first.call(null,seq__55704);
var seq__55704__$1 = cljs.core.next.call(null,seq__55704);
var pred__$1 = first__55705;
var preds__$2 = seq__55704__$1;
var vec__55706 = G__55696__$1;
var seq__55707 = cljs.core.seq.call(null,vec__55706);
var first__55708 = cljs.core.first.call(null,seq__55707);
var seq__55707__$1 = cljs.core.next.call(null,seq__55707);
var form__$1 = first__55708;
var forms__$2 = seq__55707__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,nret)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var G__55709 = nret;
var G__55710 = preds__$2;
var G__55711 = forms__$2;
ret__$1 = G__55709;
G__55695__$1 = G__55710;
G__55696__$1 = G__55711;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.alpha.explain_pred_list = (function cljs$spec$alpha$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__55718 = forms;
var vec__55720 = G__55718;
var seq__55721 = cljs.core.seq.call(null,vec__55720);
var first__55722 = cljs.core.first.call(null,seq__55721);
var seq__55721__$1 = cljs.core.next.call(null,seq__55721);
var form = first__55722;
var forms__$1 = seq__55721__$1;
var G__55719 = preds;
var vec__55723 = G__55719;
var seq__55724 = cljs.core.seq.call(null,vec__55723);
var first__55725 = cljs.core.first.call(null,seq__55724);
var seq__55724__$1 = cljs.core.next.call(null,seq__55724);
var pred = first__55725;
var preds__$1 = seq__55724__$1;
var ret__$1 = ret;
var G__55718__$1 = G__55718;
var G__55719__$1 = G__55719;
while(true){
var ret__$2 = ret__$1;
var vec__55726 = G__55718__$1;
var seq__55727 = cljs.core.seq.call(null,vec__55726);
var first__55728 = cljs.core.first.call(null,seq__55727);
var seq__55727__$1 = cljs.core.next.call(null,seq__55727);
var form__$1 = first__55728;
var forms__$2 = seq__55727__$1;
var vec__55729 = G__55719__$1;
var seq__55730 = cljs.core.seq.call(null,vec__55729);
var first__55731 = cljs.core.first.call(null,seq__55730);
var seq__55730__$1 = cljs.core.next.call(null,seq__55730);
var pred__$1 = first__55731;
var preds__$2 = seq__55730__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,nret)){
return cljs.spec.alpha.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
} else {
var G__55732 = nret;
var G__55733 = forms__$2;
var G__55734 = preds__$2;
ret__$1 = G__55732;
G__55718__$1 = G__55733;
G__55719__$1 = G__55734;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.alpha.and_spec_impl = (function cljs$spec$alpha$and_spec_impl(forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.alpha.specize,preds,forms);
}),null));
var cform = (function (){var G__55737 = cljs.core.count.call(null,preds);
switch (G__55737) {
case (2):
return ((function (G__55737,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
}
});
;})(G__55737,specs))

break;
case (3):
return ((function (G__55737,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var ret__$1 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(2)),ret__$1);
}
}
});
;})(G__55737,specs))

break;
default:
return ((function (G__55737,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = x;
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var nret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,i),ret);
if(cljs.spec.alpha.invalid_QMARK_.call(null,nret)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var G__55742 = nret;
var G__55743 = (i + (1));
ret = G__55742;
i = G__55743;
continue;
}
} else {
return ret;
}
break;
}
});
;})(G__55737,specs))

}
})();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha55738 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha55738 = (function (forms,preds,gfn,specs,cform,meta55739){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
this.meta55739 = meta55739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha55738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_55740,meta55739__$1){
var self__ = this;
var _55740__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha55738(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta55739__$1));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha55738.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_55740){
var self__ = this;
var _55740__$1 = this;
return self__.meta55739;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha55738.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55738.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha55738.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha55738.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55738.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha55738.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1,specs,cform){
return (function (p1__55736_SHARP_,p2__55735_SHARP_){
return cljs.spec.alpha.unform.call(null,p2__55735_SHARP_,p1__55736_SHARP_);
});})(___$1,specs,cform))
,x,cljs.core.reverse.call(null,self__.preds));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha55738.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha55738.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.alpha.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha55738.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha55738.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,null,(1),null)),self__.forms)));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha55738.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta55739], null);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha55738.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha55738.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha55738";

cljs.spec.alpha.t_cljs$spec$alpha55738.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha55738");
});})(specs,cform))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha55738.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha55738 = ((function (specs,cform){
return (function cljs$spec$alpha$and_spec_impl_$___GT_t_cljs$spec$alpha55738(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta55739){
return (new cljs.spec.alpha.t_cljs$spec$alpha55738(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta55739));
});})(specs,cform))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha55738(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.coll_prob = (function cljs$spec$alpha$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__4047__auto__ = kfn;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__4047__auto__ = kform;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.cst$sym$cljs$core_SLASH_coll_QMARK_;
}
})();
if(cljs.core.not.call(null,cljs.spec.alpha.pvalid_QMARK_.call(null,pred,x))){
return cljs.spec.alpha.explain_1.call(null,kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = count;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not_EQ_.call(null,count,cljs.core.bounded_count.call(null,count,x));
} else {
return and__4036__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,count,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_count,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null))))),null,(1),null))))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = (function (){var or__4047__auto__ = min_count;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__4036__auto__)){
return (!(((((function (){var or__4047__auto__ = min_count;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__4047__auto__ = max_count;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (9007199254740991);
}
})())))));
} else {
return and__4036__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_,null,(1),null)),(new cljs.core.List(null,(function (){var or__4047__auto__ = min_count;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})(),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_count,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(function (){var or__4047__auto__ = max_count;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (9007199254740991);
}
})(),null,(1),null))))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = distinct;
if(cljs.core.truth_(and__4036__auto__)){
return (((!(cljs.core.empty_QMARK_.call(null,x)))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x))));
} else {
return and__4036__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$distinct_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.alpha.merge_spec_impl = (function cljs$spec$alpha$merge_spec_impl(forms,preds,gfn){
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha55752 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha55752 = (function (forms,preds,gfn,meta55753){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta55753 = meta55753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha55752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55754,meta55753__$1){
var self__ = this;
var _55754__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha55752(self__.forms,self__.preds,self__.gfn,meta55753__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha55752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55754){
var self__ = this;
var _55754__$1 = this;
return self__.meta55753;
});

cljs.spec.alpha.t_cljs$spec$alpha55752.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55752.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha55752.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha55752.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55752.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.call(null,((function (___$1){
return (function (p1__55744_SHARP_,p2__55745_SHARP_){
return cljs.spec.alpha.dt.call(null,p1__55744_SHARP_,x,p2__55745_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.spec.alpha.invalid_QMARK_,ms))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.core.apply.call(null,cljs.core.merge,ms);
}
});

cljs.spec.alpha.t_cljs$spec$alpha55752.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (p1__55746_SHARP_){
return cljs.spec.alpha.unform.call(null,p1__55746_SHARP_,x);
});})(___$1))
,cljs.core.reverse.call(null,self__.preds)));
});

cljs.spec.alpha.t_cljs$spec$alpha55752.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (p1__55747_SHARP_,p2__55748_SHARP_){
return cljs.spec.alpha.explain_1.call(null,p1__55747_SHARP_,p2__55748_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.alpha.t_cljs$spec$alpha55752.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.fmap.call(null,((function (___$1){
return (function (p1__55749_SHARP_){
return cljs.core.apply.call(null,cljs.core.merge,p1__55749_SHARP_);
});})(___$1))
,cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,cljs.core.map.call(null,((function (___$1){
return (function (p1__55750_SHARP_,p2__55751_SHARP_){
return cljs.spec.alpha.gensub.call(null,p1__55750_SHARP_,overrides,path,rmap,p2__55751_SHARP_);
});})(___$1))
,self__.preds,self__.forms)));
}
});

cljs.spec.alpha.t_cljs$spec$alpha55752.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.alpha.t_cljs$spec$alpha55752.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_merge,null,(1),null)),self__.forms)));
});

cljs.spec.alpha.t_cljs$spec$alpha55752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta55753], null);
});

cljs.spec.alpha.t_cljs$spec$alpha55752.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha55752.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha55752";

cljs.spec.alpha.t_cljs$spec$alpha55752.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha55752");
});

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha55752.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha55752 = (function cljs$spec$alpha$merge_spec_impl_$___GT_t_cljs$spec$alpha55752(forms__$1,preds__$1,gfn__$1,meta55753){
return (new cljs.spec.alpha.t_cljs$spec$alpha55752(forms__$1,preds__$1,gfn__$1,meta55753));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha55752(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.empty_coll = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list_QMARK_,cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.alpha.every_impl = (function cljs$spec$alpha$every_impl(var_args){
var G__55760 = arguments.length;
switch (G__55760) {
case 3:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.alpha.every_impl.call(null,form,pred,opts,null);
});

cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__55761,gfn){
var map__55762 = p__55761;
var map__55762__$1 = (((((!((map__55762 == null))))?(((((map__55762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55762):map__55762);
var opts = map__55762__$1;
var max_count = cljs.core.get.call(null,map__55762__$1,cljs.core.cst$kw$max_DASH_count);
var kind_form = cljs.core.get.call(null,map__55762__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form);
var gen_max = cljs.core.get.call(null,map__55762__$1,cljs.core.cst$kw$gen_DASH_max,(20));
var cpred = cljs.core.get.call(null,map__55762__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred);
var conform_keys = cljs.core.get.call(null,map__55762__$1,cljs.core.cst$kw$conform_DASH_keys);
var describe_form = cljs.core.get.call(null,map__55762__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe);
var distinct = cljs.core.get.call(null,map__55762__$1,cljs.core.cst$kw$distinct);
var kfn = cljs.core.get.call(null,map__55762__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn);
var count = cljs.core.get.call(null,map__55762__$1,cljs.core.cst$kw$count);
var min_count = cljs.core.get.call(null,map__55762__$1,cljs.core.cst$kw$min_DASH_count);
var kind = cljs.core.get.call(null,map__55762__$1,cljs.core.cst$kw$kind);
var conform_all = cljs.core.get.call(null,map__55762__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all);
var conform_into = cljs.core.get.call(null,map__55762__$1,cljs.core.cst$kw$into);
var gen_into = (cljs.core.truth_(conform_into)?cljs.core.empty.call(null,conform_into):cljs.core.get.call(null,cljs.spec.alpha.empty_coll,kind_form));
var spec = (new cljs.core.Delay(((function (gen_into,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (){
return cljs.spec.alpha.specize.call(null,pred);
});})(gen_into,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,null));
var check_QMARK_ = ((function (gen_into,spec,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__55755_SHARP_){
return cljs.spec.alpha.valid_QMARK_.call(null,cljs.core.deref.call(null,spec),p1__55755_SHARP_);
});})(gen_into,spec,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;
var kfn__$1 = (function (){var or__4047__auto__ = kfn;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return ((function (or__4047__auto__,gen_into,spec,check_QMARK_,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (i,v){
return i;
});
;})(or__4047__auto__,gen_into,spec,check_QMARK_,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
}
})();
var addcv = ((function (gen_into,spec,check_QMARK_,kfn__$1,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (ret,i,v,cv){
return cljs.core.conj.call(null,ret,cv);
});})(gen_into,spec,check_QMARK_,kfn__$1,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;
var cfns = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (x){
if(((cljs.core.vector_QMARK_.call(null,x)) && (((cljs.core.not.call(null,conform_into)) || (cljs.core.vector_QMARK_.call(null,conform_into)))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.call(null,ret,i,cv);
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__4036__auto__){
var or__4047__auto__ = (function (){var and__4036__auto____$1 = kind;
if(cljs.core.truth_(and__4036__auto____$1)){
return cljs.core.not.call(null,conform_into);
} else {
return and__4036__auto____$1;
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.map_QMARK_.call(null,conform_into);
}
} else {
return and__4036__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (ret,i,v,cv){
if((((v === cv)) && (cljs.core.not.call(null,conform_keys)))){
return ret;
} else {
return cljs.core.assoc.call(null,ret,cljs.core.nth.call(null,(cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.call(null,cv,(1)));
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,cljs.core.identity], null);
} else {
if(((cljs.core.list_QMARK_.call(null,conform_into)) || (cljs.core.seq_QMARK_.call(null,conform_into)) || (((cljs.core.not.call(null,conform_into)) && (((cljs.core.list_QMARK_.call(null,x)) || (cljs.core.seq_QMARK_.call(null,x)))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__55756_SHARP_){
return cljs.core.empty.call(null,(function (){var or__4047__auto__ = conform_into;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return p1__55756_SHARP_;
}
})());
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,addcv,cljs.core.identity], null);

}
}
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha55764 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha55764 = (function (form,max_count,map__55762,p__55761,check_QMARK_,gfn,gen_max,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,meta55765){
this.form = form;
this.max_count = max_count;
this.map__55762 = map__55762;
this.p__55761 = p__55761;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.cpred = cpred;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.describe_form = describe_form;
this.distinct = distinct;
this.spec = spec;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta55765 = meta55765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha55764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_55766,meta55765__$1){
var self__ = this;
var _55766__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha55764(self__.form,self__.max_count,self__.map__55762,self__.p__55761,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.pred,self__.cpred,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.describe_form,self__.distinct,self__.spec,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta55765__$1));
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha55764.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_55766){
var self__ = this;
var _55766__$1 = this;
return self__.meta55765;
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha55764.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55764.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha55764.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha55764.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55764.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = cljs.core.deref.call(null,self__.spec);
if(cljs.core.not.call(null,self__.cpred.call(null,x))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__55767 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__55767,(0),null);
var add = cljs.core.nth.call(null,vec__55767,(1),null);
var complete = cljs.core.nth.call(null,vec__55767,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__55773 = cljs.core.seq.call(null,x);
var vec__55774 = G__55773;
var seq__55775 = cljs.core.seq.call(null,vec__55774);
var first__55776 = cljs.core.first.call(null,seq__55775);
var seq__55775__$1 = cljs.core.next.call(null,seq__55775);
var v = first__55776;
var vs = seq__55775__$1;
var vseq = vec__55774;
var ret__$1 = ret;
var i__$1 = i;
var G__55773__$1 = G__55773;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__55777 = G__55773__$1;
var seq__55778 = cljs.core.seq.call(null,vec__55777);
var first__55779 = cljs.core.first.call(null,seq__55778);
var seq__55778__$1 = cljs.core.next.call(null,seq__55778);
var v__$1 = first__55779;
var vs__$1 = seq__55778__$1;
var vseq__$1 = vec__55777;
if(vseq__$1){
var cv = cljs.spec.alpha.conform_STAR_.call(null,spec__$1,v__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cv)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var G__55804 = add.call(null,ret__$2,i__$2,v__$1,cv);
var G__55805 = (i__$2 + (1));
var G__55806 = vs__$1;
ret__$1 = G__55804;
i__$1 = G__55805;
G__55773__$1 = G__55806;
continue;
}
} else {
return complete.call(null,ret__$2);
}
break;
}
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__4135__auto__ = (1);
var y__4136__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec.alpha._STAR_coll_check_limit_STAR_));
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,cljs.core.nth.call(null,x,i)))){
var G__55807 = (i + step);
i = G__55807;
continue;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
break;
}
} else {
var limit = cljs.spec.alpha._STAR_coll_check_limit_STAR_;
var i = (0);
var G__55783 = cljs.core.seq.call(null,x);
var vec__55784 = G__55783;
var seq__55785 = cljs.core.seq.call(null,vec__55784);
var first__55786 = cljs.core.first.call(null,seq__55785);
var seq__55785__$1 = cljs.core.next.call(null,seq__55785);
var v = first__55786;
var vs = seq__55785__$1;
var vseq = vec__55784;
var i__$1 = i;
var G__55783__$1 = G__55783;
while(true){
var i__$2 = i__$1;
var vec__55787 = G__55783__$1;
var seq__55788 = cljs.core.seq.call(null,vec__55787);
var first__55789 = cljs.core.first.call(null,seq__55788);
var seq__55788__$1 = cljs.core.next.call(null,seq__55788);
var v__$1 = first__55789;
var vs__$1 = seq__55788__$1;
var vseq__$1 = vec__55787;
if((((vseq__$1 == null)) || (cljs.core._EQ_.call(null,i__$2,limit)))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,v__$1))){
var G__55808 = (i__$2 + (1));
var G__55809 = vs__$1;
i__$1 = G__55808;
G__55783__$1 = G__55809;
continue;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;

}
}
break;
}
}

}
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha55764.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.conform_all)){
var spec__$1 = cljs.core.deref.call(null,self__.spec);
var vec__55790 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__55790,(0),null);
var add = cljs.core.nth.call(null,vec__55790,(1),null);
var complete = cljs.core.nth.call(null,vec__55790,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__55796 = cljs.core.seq.call(null,x);
var vec__55797 = G__55796;
var seq__55798 = cljs.core.seq.call(null,vec__55797);
var first__55799 = cljs.core.first.call(null,seq__55798);
var seq__55798__$1 = cljs.core.next.call(null,seq__55798);
var v = first__55799;
var vs = seq__55798__$1;
var vseq = vec__55797;
var ret__$1 = ret;
var i__$1 = i;
var G__55796__$1 = G__55796;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__55800 = G__55796__$1;
var seq__55801 = cljs.core.seq.call(null,vec__55800);
var first__55802 = cljs.core.first.call(null,seq__55801);
var seq__55801__$1 = cljs.core.next.call(null,seq__55801);
var v__$1 = first__55802;
var vs__$1 = seq__55801__$1;
var vseq__$1 = vec__55800;
if((i__$2 >= cljs.core.count.call(null,x))){
return complete.call(null,ret__$2);
} else {
var G__55810 = add.call(null,ret__$2,i__$2,v__$1,cljs.spec.alpha.unform_STAR_.call(null,spec__$1,v__$1));
var G__55811 = (i__$2 + (1));
var G__55812 = vs__$1;
ret__$1 = G__55810;
i__$1 = G__55811;
G__55796__$1 = G__55812;
continue;
}
break;
}
} else {
return x;
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha55764.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = cljs.spec.alpha.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.call(null,cljs.core.take,cljs.spec.alpha._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (or__4047__auto__,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.alpha.explain_1.call(null,self__.form,self__.pred,path,via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
});})(or__4047__auto__,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,cljs.core.range.call(null),x))));
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha55764.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var pgen = cljs.spec.alpha.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.gen.alpha.bind.call(null,(cljs.core.truth_(self__.gen_into)?cljs.spec.gen.alpha.return$.call(null,self__.gen_into):(cljs.core.truth_(self__.kind)?cljs.spec.gen.alpha.fmap.call(null,((function (pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__55757_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__55757_SHARP_)){
return p1__55757_SHARP_;
} else {
return cljs.core.empty.call(null,p1__55757_SHARP_);
}
});})(pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,cljs.spec.alpha.gensub.call(null,self__.kind,overrides,path,rmap,self__.form)):cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY)
)),((function (pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (init){
return cljs.spec.gen.alpha.fmap.call(null,((function (pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__55758_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__55758_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__55758_SHARP_);
}
});})(pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$num_DASH_elements,self__.count,cljs.core.cst$kw$max_DASH_tries,(100)], null)):cljs.spec.gen.alpha.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_elements,(function (){var or__4047__auto__ = self__.min_count;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})(),cljs.core.cst$kw$max_DASH_elements,(function (){var or__4047__auto__ = self__.max_count;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var x__4135__auto__ = self__.gen_max;
var y__4136__auto__ = ((2) * (function (){var or__4047__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return (0);
}
})());
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
}
})(),cljs.core.cst$kw$max_DASH_tries,(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__4047__auto__ = self__.min_count;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.gen.alpha.vector.call(null,pgen,(function (){var or__4047__auto__ = self__.min_count;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})(),(function (){var or__4047__auto__ = self__.max_count;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var x__4135__auto__ = self__.gen_max;
var y__4136__auto__ = ((2) * (function (){var or__4047__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return (0);
}
})());
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
}
})()):cljs.spec.gen.alpha.vector.call(null,pgen,(0),self__.gen_max)
))));
});})(pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
);
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha55764.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha55764.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = self__.describe_form;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_every,null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha55764.getBasis = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$max_DASH_count,cljs.core.cst$sym$map__55762,cljs.core.cst$sym$p__55761,cljs.core.cst$sym$check_QMARK_,cljs.core.cst$sym$gfn,cljs.core.cst$sym$gen_DASH_max,cljs.core.cst$sym$pred,cljs.core.cst$sym$cpred,cljs.core.cst$sym$conform_DASH_keys,cljs.core.cst$sym$kind_DASH_form,cljs.core.cst$sym$addcv,cljs.core.cst$sym$cfns,cljs.core.cst$sym$describe_DASH_form,cljs.core.cst$sym$distinct,cljs.core.cst$sym$spec,cljs.core.cst$sym$kfn,cljs.core.cst$sym$gen_DASH_into,cljs.core.cst$sym$count,cljs.core.cst$sym$min_DASH_count,cljs.core.cst$sym$opts,cljs.core.cst$sym$kind,cljs.core.cst$sym$conform_DASH_all,cljs.core.cst$sym$conform_DASH_into,cljs.core.cst$sym$meta55765], null);
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha55764.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha55764.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha55764";

cljs.spec.alpha.t_cljs$spec$alpha55764.cljs$lang$ctorPrWriter = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha55764");
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha55764.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha55764 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha55764(form__$1,max_count__$1,map__55762__$2,p__55761__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta55765){
return (new cljs.spec.alpha.t_cljs$spec$alpha55764(form__$1,max_count__$1,map__55762__$2,p__55761__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta55765));
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__55762,map__55762__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha55764(form,max_count,map__55762__$1,p__55761,check_QMARK_,gfn,gen_max,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.alpha.accept = (function cljs$spec$alpha$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,cljs.core.cst$kw$ret,x], null);
});
cljs.spec.alpha.accept_QMARK_ = (function cljs$spec$alpha$accept_QMARK_(p__55813){
var map__55814 = p__55813;
var map__55814__$1 = (((((!((map__55814 == null))))?(((((map__55814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55814):map__55814);
var op = cljs.core.get.call(null,map__55814__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
return cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,op);
});
cljs.spec.alpha.pcat_STAR_ = (function cljs$spec$alpha$pcat_STAR_(p__55816){
var map__55817 = p__55816;
var map__55817__$1 = (((((!((map__55817 == null))))?(((((map__55817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55817):map__55817);
var vec__55818 = cljs.core.get.call(null,map__55817__$1,cljs.core.cst$kw$ps);
var seq__55819 = cljs.core.seq.call(null,vec__55818);
var first__55820 = cljs.core.first.call(null,seq__55819);
var seq__55819__$1 = cljs.core.next.call(null,seq__55819);
var p1 = first__55820;
var pr = seq__55819__$1;
var ps = vec__55818;
var vec__55821 = cljs.core.get.call(null,map__55817__$1,cljs.core.cst$kw$ks);
var seq__55822 = cljs.core.seq.call(null,vec__55821);
var first__55823 = cljs.core.first.call(null,seq__55822);
var seq__55822__$1 = cljs.core.next.call(null,seq__55822);
var k1 = first__55823;
var kr = seq__55822__$1;
var ks = vec__55821;
var vec__55824 = cljs.core.get.call(null,map__55817__$1,cljs.core.cst$kw$forms);
var seq__55825 = cljs.core.seq.call(null,vec__55824);
var first__55826 = cljs.core.first.call(null,seq__55825);
var seq__55825__$1 = cljs.core.next.call(null,seq__55825);
var f1 = first__55826;
var fr = seq__55825__$1;
var forms = vec__55824;
var ret = cljs.core.get.call(null,map__55817__$1,cljs.core.cst$kw$ret);
var rep_PLUS_ = cljs.core.get.call(null,map__55817__$1,cljs.core.cst$kw$rep_PLUS_);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.spec.alpha.accept_QMARK_.call(null,p1)){
var rp = cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,fr,cljs.core.cst$kw$ret,ret__$1], null));
} else {
return cljs.spec.alpha.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$ret,ret,cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$rep_PLUS_,rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.alpha.pcat = (function cljs$spec$alpha$pcat(var_args){
var args__4647__auto__ = [];
var len__4641__auto___55829 = arguments.length;
var i__4642__auto___55830 = (0);
while(true){
if((i__4642__auto___55830 < len__4641__auto___55829)){
args__4647__auto__.push((arguments[i__4642__auto___55830]));

var G__55831 = (i__4642__auto___55830 + (1));
i__4642__auto___55830 = G__55831;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$ret,cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.alpha.pcat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.alpha.pcat.cljs$lang$applyTo = (function (seq55828){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55828));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.alpha.cat_impl = (function cljs$spec$alpha$cat_impl(ks,ps,forms){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.alpha.rep_STAR_ = (function cljs$spec$alpha$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,cljs.core.cst$kw$p2,p2,cljs.core.cst$kw$splice,splice,cljs.core.cst$kw$forms,form,cljs.core.cst$kw$id,cljs.core.random_uuid.call(null)], null);
if(cljs.spec.alpha.accept_QMARK_.call(null,p1)){
return cljs.core.assoc.call(null,r,cljs.core.cst$kw$p1,p2,cljs.core.cst$kw$ret,cljs.core.conj.call(null,ret,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,cljs.core.cst$kw$p1,p1,cljs.core.cst$kw$ret,ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.alpha.rep_impl = (function cljs$spec$alpha$rep_impl(form,p){
return cljs.spec.alpha.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.alpha.rep_PLUS_impl = (function cljs$spec$alpha$rep_PLUS_impl(form,p){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),cljs.core.cst$kw$forms,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)))))),cljs.core.cst$kw$ret,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$rep_PLUS_,form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.alpha.amp_impl = (function cljs$spec$alpha$amp_impl(re,re_form,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,cljs.core.cst$kw$p1,re,cljs.core.cst$kw$amp,re_form,cljs.core.cst$kw$ps,preds,cljs.core.cst$kw$forms,pred_forms], null);
});
cljs.spec.alpha.filter_alt = (function cljs$spec$alpha$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__4047__auto__ = ks;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__55832_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__55832_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__4047__auto__ = cljs.core.seq.call(null,ks);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__4047__auto__ = cljs.core.seq.call(null,forms);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__55833_SHARP_){
return cljs.core.nth.call(null,p1__55833_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alpha.alt_STAR_ = (function cljs$spec$alpha$alt_STAR_(ps,ks,forms){
var vec__55834 = cljs.spec.alpha.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__55837 = cljs.core.nth.call(null,vec__55834,(0),null);
var seq__55838 = cljs.core.seq.call(null,vec__55837);
var first__55839 = cljs.core.first.call(null,seq__55838);
var seq__55838__$1 = cljs.core.next.call(null,seq__55838);
var p1 = first__55839;
var pr = seq__55838__$1;
var ps__$1 = vec__55837;
var vec__55840 = cljs.core.nth.call(null,vec__55834,(1),null);
var k1 = cljs.core.nth.call(null,vec__55840,(0),null);
var ks__$1 = vec__55840;
var forms__$1 = cljs.core.nth.call(null,vec__55834,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$ps,ps__$1,cljs.core.cst$kw$ks,ks__$1,cljs.core.cst$kw$forms,forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.spec.alpha.accept_QMARK_.call(null,p1)){
return cljs.spec.alpha.accept.call(null,cljs.spec.alpha.tagged_ret.call(null,k1,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alpha.alts = (function cljs$spec$alpha$alts(var_args){
var args__4647__auto__ = [];
var len__4641__auto___55844 = arguments.length;
var i__4642__auto___55845 = (0);
while(true){
if((i__4642__auto___55845 < len__4641__auto___55844)){
args__4647__auto__.push((arguments[i__4642__auto___55845]));

var G__55846 = (i__4642__auto___55845 + (1));
i__4642__auto___55845 = G__55846;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alpha.alts.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.alpha.alts.cljs$lang$applyTo = (function (seq55843){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55843));
});

cljs.spec.alpha.alt2 = (function cljs$spec$alpha$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__4036__auto__ = p1;
if(cljs.core.truth_(and__4036__auto__)){
return p2;
} else {
return and__4036__auto__;
}
})())){
return cljs.spec.alpha.alts.call(null,p1,p2);
} else {
var or__4047__auto__ = p1;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alpha.alt_impl = (function cljs$spec$alpha$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alpha.alt_STAR_.call(null,ps,ks,forms),cljs.core.cst$kw$id,cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.alpha.maybe_impl = (function cljs$spec$alpha$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alpha.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.accept.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil], null)),cljs.core.cst$kw$maybe,form);
});
cljs.spec.alpha.noret_QMARK_ = (function cljs$spec$alpha$noret_QMARK_(p1,pret){
var or__4047__auto__ = cljs.core._EQ_.call(null,pret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil);
if(or__4047__auto__){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = (function (){var and__4036__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,null], null), null).call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return null;
}
}
});
cljs.spec.alpha.accept_nil_QMARK_ = (function cljs$spec$alpha$accept_nil_QMARK_(p){
var map__55847 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__55847__$1 = (((((!((map__55847 == null))))?(((((map__55847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55847):map__55847);
var p__$1 = map__55847__$1;
var op = cljs.core.get.call(null,map__55847__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.call(null,map__55847__$1,cljs.core.cst$kw$ps);
var p1 = cljs.core.get.call(null,map__55847__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.call(null,map__55847__$1,cljs.core.cst$kw$p2);
var forms = cljs.core.get.call(null,map__55847__$1,cljs.core.cst$kw$forms);
var G__55849 = op;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__55849)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__55849)){
return null;
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__55849)){
var and__4036__auto__ = cljs.spec.alpha.accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__4036__auto__)){
var ret = cljs.spec.alpha.and_preds.call(null,cljs.spec.alpha.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,ret)));
} else {
return and__4036__auto__;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__55849)){
var or__4047__auto__ = (p1 === p2);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.spec.alpha.accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__55849)){
return cljs.core.every_QMARK_.call(null,cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__55849)){
return cljs.core.some.call(null,cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55849)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.preturn = (function cljs$spec$alpha$preturn(p){
var map__55850 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__55850__$1 = (((((!((map__55850 == null))))?(((((map__55850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55850):map__55850);
var p__$1 = map__55850__$1;
var vec__55851 = cljs.core.get.call(null,map__55850__$1,cljs.core.cst$kw$ps);
var seq__55852 = cljs.core.seq.call(null,vec__55851);
var first__55853 = cljs.core.first.call(null,seq__55852);
var seq__55852__$1 = cljs.core.next.call(null,seq__55852);
var p0 = first__55853;
var pr = seq__55852__$1;
var ps = vec__55851;
var vec__55854 = cljs.core.get.call(null,map__55850__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.call(null,vec__55854,(0),null);
var ks = vec__55854;
var op = cljs.core.get.call(null,map__55850__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var p1 = cljs.core.get.call(null,map__55850__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.call(null,map__55850__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.call(null,map__55850__$1,cljs.core.cst$kw$forms);
var G__55858 = op;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__55858)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__55858)){
return null;
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__55858)){
var pret = cljs.spec.alpha.preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.alpha.noret_QMARK_.call(null,p1,pret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil;
} else {
return cljs.spec.alpha.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__55858)){
return cljs.spec.alpha.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__55858)){
return cljs.spec.alpha.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__55858)){
var vec__55859 = cljs.spec.alpha.filter_alt.call(null,ps,ks,forms,cljs.spec.alpha.accept_nil_QMARK_);
var vec__55862 = cljs.core.nth.call(null,vec__55859,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__55862,(0),null);
var vec__55865 = cljs.core.nth.call(null,vec__55859,(1),null);
var k0 = cljs.core.nth.call(null,vec__55865,(0),null);
var r = (((p0__$1 == null))?cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil:cljs.spec.alpha.preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.alpha.tagged_ret.call(null,k0,r);
} else {
return r;
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55858)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.op_unform = (function cljs$spec$alpha$op_unform(p,x){
var map__55872 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__55872__$1 = (((((!((map__55872 == null))))?(((((map__55872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55872):map__55872);
var p__$1 = map__55872__$1;
var vec__55873 = cljs.core.get.call(null,map__55872__$1,cljs.core.cst$kw$ps);
var seq__55874 = cljs.core.seq.call(null,vec__55873);
var first__55875 = cljs.core.first.call(null,seq__55874);
var seq__55874__$1 = cljs.core.next.call(null,seq__55874);
var p0 = first__55875;
var pr = seq__55874__$1;
var ps = vec__55873;
var vec__55876 = cljs.core.get.call(null,map__55872__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.call(null,vec__55876,(0),null);
var ks = vec__55876;
var op = cljs.core.get.call(null,map__55872__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var p1 = cljs.core.get.call(null,map__55872__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.call(null,map__55872__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.call(null,map__55872__$1,cljs.core.cst$kw$forms);
var rep_PLUS_ = cljs.core.get.call(null,map__55872__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.call(null,map__55872__$1,cljs.core.cst$kw$maybe);
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__55880 = op;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__55880)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__55880)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__55880)){
var px = cljs.core.reduce.call(null,((function (G__55880,map__55872,map__55872__$1,p__$1,vec__55873,seq__55874,first__55875,seq__55874__$1,p0,pr,ps,vec__55876,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__55869_SHARP_,p2__55868_SHARP_){
return cljs.spec.alpha.unform.call(null,p2__55868_SHARP_,p1__55869_SHARP_);
});})(G__55880,map__55872,map__55872__$1,p__$1,vec__55873,seq__55874,first__55875,seq__55874__$1,p0,pr,ps,vec__55876,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs.spec.alpha.op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__55880)){
return cljs.core.mapcat.call(null,((function (G__55880,map__55872,map__55872__$1,p__$1,vec__55873,seq__55874,first__55875,seq__55874__$1,p0,pr,ps,vec__55876,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__55870_SHARP_){
return cljs.spec.alpha.op_unform.call(null,p1,p1__55870_SHARP_);
});})(G__55880,map__55872,map__55872__$1,p__$1,vec__55873,seq__55874,first__55875,seq__55874__$1,p0,pr,ps,vec__55876,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__55880)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__55880,map__55872,map__55872__$1,p__$1,vec__55873,seq__55874,first__55875,seq__55874__$1,p0,pr,ps,vec__55876,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__55871_SHARP_){
return cljs.spec.alpha.op_unform.call(null,p0,p1__55871_SHARP_);
});})(G__55880,map__55872,map__55872__$1,p__$1,vec__55873,seq__55874,first__55875,seq__55874__$1,p0,pr,ps,vec__55876,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__55880,map__55872,map__55872__$1,p__$1,vec__55873,seq__55874,first__55875,seq__55874__$1,p0,pr,ps,vec__55876,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs.spec.alpha.op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__55880,map__55872,map__55872__$1,p__$1,vec__55873,seq__55874,first__55875,seq__55874__$1,p0,pr,ps,vec__55876,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__55880)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform.call(null,p0,x)], null);
} else {
var vec__55881 = x;
var k__$1 = cljs.core.nth.call(null,vec__55881,(0),null);
var v = cljs.core.nth.call(null,vec__55881,(1),null);
return cljs.spec.alpha.op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55880)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.add_ret = (function cljs$spec$alpha$add_ret(p,r,k){
var map__55884 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__55884__$1 = (((((!((map__55884 == null))))?(((((map__55884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55884):map__55884);
var p__$1 = map__55884__$1;
var op = cljs.core.get.call(null,map__55884__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.call(null,map__55884__$1,cljs.core.cst$kw$ps);
var splice = cljs.core.get.call(null,map__55884__$1,cljs.core.cst$kw$splice);
var prop = ((function (map__55884,map__55884__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
});})(map__55884,map__55884__$1,p__$1,op,ps,splice))
;
var G__55886 = op;
if(cljs.core._EQ_.call(null,null,G__55886)){
return r;
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__55886)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__55886)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__55886)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__55886)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__55886)){
return prop.call(null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55886)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.deriv = (function cljs$spec$alpha$deriv(p,x){
var map__55888 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__55888__$1 = (((((!((map__55888 == null))))?(((((map__55888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55888):map__55888);
var p__$1 = map__55888__$1;
var vec__55889 = cljs.core.get.call(null,map__55888__$1,cljs.core.cst$kw$ps);
var seq__55890 = cljs.core.seq.call(null,vec__55889);
var first__55891 = cljs.core.first.call(null,seq__55890);
var seq__55890__$1 = cljs.core.next.call(null,seq__55890);
var p0 = first__55891;
var pr = seq__55890__$1;
var ps = vec__55889;
var vec__55892 = cljs.core.get.call(null,map__55888__$1,cljs.core.cst$kw$ks);
var seq__55893 = cljs.core.seq.call(null,vec__55892);
var first__55894 = cljs.core.first.call(null,seq__55893);
var seq__55893__$1 = cljs.core.next.call(null,seq__55893);
var k0 = first__55894;
var kr = seq__55893__$1;
var ks = vec__55892;
var op = cljs.core.get.call(null,map__55888__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var p1 = cljs.core.get.call(null,map__55888__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.call(null,map__55888__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.call(null,map__55888__$1,cljs.core.cst$kw$ret);
var splice = cljs.core.get.call(null,map__55888__$1,cljs.core.cst$kw$splice);
var forms = cljs.core.get.call(null,map__55888__$1,cljs.core.cst$kw$forms);
var amp = cljs.core.get.call(null,map__55888__$1,cljs.core.cst$kw$amp);
if(cljs.core.truth_(p__$1)){
var G__55896 = op;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__55896)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__55896)){
var ret__$1 = cljs.spec.alpha.dt.call(null,p__$1,x,p__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
return null;
} else {
return cljs.spec.alpha.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__55896)){
var temp__5457__auto__ = cljs.spec.alpha.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__5457__auto__)){
var p1__$1 = temp__5457__auto__;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.alpha.and_preds.call(null,cljs.spec.alpha.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
return null;
} else {
return cljs.spec.alpha.accept.call(null,ret__$1);
}
} else {
return cljs.spec.alpha.amp_impl.call(null,p1__$1,amp,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__55896)){
return cljs.spec.alpha.alt2.call(null,cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,cljs.core.cons.call(null,cljs.spec.alpha.deriv.call(null,p0,x),pr),cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,ret], null)),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p0))?cljs.spec.alpha.deriv.call(null,cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,cljs.core.next.call(null,forms),cljs.core.cst$kw$ret,cljs.spec.alpha.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__55896)){
return cljs.spec.alpha.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__55896,map__55888,map__55888__$1,p__$1,vec__55889,seq__55890,first__55891,seq__55890__$1,p0,pr,ps,vec__55892,seq__55893,first__55894,seq__55893__$1,k0,kr,ks,op,p1,p2,ret,splice,forms,amp){
return (function (p1__55887_SHARP_){
return cljs.spec.alpha.deriv.call(null,p1__55887_SHARP_,x);
});})(G__55896,map__55888,map__55888__$1,p__$1,vec__55889,seq__55890,first__55891,seq__55890__$1,p0,pr,ps,vec__55892,seq__55893,first__55894,seq__55893__$1,k0,kr,ks,op,p1,p2,ret,splice,forms,amp))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__55896)){
return cljs.spec.alpha.alt2.call(null,cljs.spec.alpha.rep_STAR_.call(null,cljs.spec.alpha.deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p1))?cljs.spec.alpha.deriv.call(null,cljs.spec.alpha.rep_STAR_.call(null,p2,p2,cljs.spec.alpha.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55896)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_describe = (function cljs$spec$alpha$op_describe(p){
var map__55897 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__55897__$1 = (((((!((map__55897 == null))))?(((((map__55897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55897):map__55897);
var p__$1 = map__55897__$1;
var op = cljs.core.get.call(null,map__55897__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.call(null,map__55897__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.call(null,map__55897__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.call(null,map__55897__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.call(null,map__55897__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.call(null,map__55897__$1,cljs.core.cst$kw$p1);
var rep_PLUS_ = cljs.core.get.call(null,map__55897__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.call(null,map__55897__$1,cljs.core.cst$kw$maybe);
var amp = cljs.core.get.call(null,map__55897__$1,cljs.core.cst$kw$amp);
if(cljs.core.truth_(p__$1)){
var G__55899 = op;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__55899)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__55899)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__55899)){
return cljs.core.list_STAR_.call(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH__AMPERSAND_,amp,forms);
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__55899)){
if(cljs.core.truth_(rep_PLUS_)){
return (new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,(new cljs.core.List(null,rep_PLUS_,null,(1),null)),(2),null));
} else {
return cljs.core.cons.call(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__4047__auto__ = cljs.core.seq.call(null,ks);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.repeat.call(null,cljs.core.cst$kw$_);
}
})(),forms));
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__55899)){
if(cljs.core.truth_(maybe)){
return (new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,(new cljs.core.List(null,maybe,null,(1),null)),(2),null));
} else {
return cljs.core.cons.call(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__55899)){
return (new cljs.core.List(null,(cljs.core.truth_(splice)?cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_:cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_),(new cljs.core.List(null,forms,null,(1),null)),(2),null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55899)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_explain = (function cljs$spec$alpha$op_explain(form,p,path,via,in$,input){
var vec__55900 = input;
var x = cljs.core.nth.call(null,vec__55900,(0),null);
var input__$1 = vec__55900;
var map__55903 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__55903__$1 = (((((!((map__55903 == null))))?(((((map__55903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55903):map__55903);
var p__$1 = map__55903__$1;
var op = cljs.core.get.call(null,map__55903__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.call(null,map__55903__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.call(null,map__55903__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.call(null,map__55903__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.call(null,map__55903__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.call(null,map__55903__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.call(null,map__55903__$1,cljs.core.cst$kw$p2);
var via__$1 = (function (){var temp__5455__auto__ = cljs.spec.alpha.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__55900,x,input__$1,map__55903,map__55903__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path__$1,cljs.core.cst$kw$reason,"Insufficient input",cljs.core.cst$kw$pred,form__$1,cljs.core.cst$kw$val,cljs.core.List.EMPTY,cljs.core.cst$kw$via,via__$1,cljs.core.cst$kw$in,in$], null)], null);
});})(vec__55900,x,input__$1,map__55903,map__55903__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__55905 = op;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__55905)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__55905)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.alpha.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__55905)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.alpha.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.core.cst$kw$amp.cljs$core$IFn$_invoke$arity$1(p__$1));
}
} else {
var temp__5455__auto__ = cljs.spec.alpha.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__5455__auto__)){
var p1__$1 = temp__5455__auto__;
return cljs.spec.alpha.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn.call(null,p1__$1));
} else {
return cljs.spec.alpha.op_explain.call(null,cljs.core.cst$kw$amp.cljs$core$IFn$_invoke$arity$1(p__$1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__55905)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__4047__auto__ = cljs.core.seq.call(null,ks);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__4047__auto__ = cljs.core.seq.call(null,forms);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__55906 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__55905,vec__55900,x,input__$1,map__55903,map__55903__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__55909){
var vec__55910 = p__55909;
var p__$2 = cljs.core.nth.call(null,vec__55910,(0),null);
return cljs.spec.alpha.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__55905,vec__55900,x,input__$1,map__55903,map__55903__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__55906,(0),null);
var k = cljs.core.nth.call(null,vec__55906,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__55906,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__4047__auto__ = form__$1;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.spec.alpha.op_describe.call(null,pred);
}
})();
if(((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred)))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs.spec.alpha.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__55905)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.alpha.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (G__55905,vec__55900,x,input__$1,map__55903,map__55903__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs.spec.alpha.op_explain.call(null,(function (){var or__4047__auto__ = form__$1;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.spec.alpha.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__55905,vec__55900,x,input__$1,map__55903,map__55903__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__4047__auto__ = cljs.core.seq.call(null,ks);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__4047__auto__ = cljs.core.seq.call(null,forms);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__55905)){
return cljs.spec.alpha.op_explain.call(null,(((p1 === p2))?forms:cljs.spec.alpha.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55905)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.re_gen = (function cljs$spec$alpha$re_gen(p,overrides,path,rmap,f){
var map__55914 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__55914__$1 = (((((!((map__55914 == null))))?(((((map__55914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55914):map__55914);
var p__$1 = map__55914__$1;
var ps = cljs.core.get.call(null,map__55914__$1,cljs.core.cst$kw$ps);
var forms = cljs.core.get.call(null,map__55914__$1,cljs.core.cst$kw$forms);
var p2 = cljs.core.get.call(null,map__55914__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.call(null,map__55914__$1,cljs.core.cst$kw$ret);
var gfn = cljs.core.get.call(null,map__55914__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_gfn);
var op = cljs.core.get.call(null,map__55914__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var splice = cljs.core.get.call(null,map__55914__$1,cljs.core.cst$kw$splice);
var ks = cljs.core.get.call(null,map__55914__$1,cljs.core.cst$kw$ks);
var p1 = cljs.core.get.call(null,map__55914__$1,cljs.core.cst$kw$p1);
var id = cljs.core.get.call(null,map__55914__$1,cljs.core.cst$kw$id);
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.alpha.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__55914,map__55914__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__55914,map__55914__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__4036__auto__ = rmap__$1;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = id;
if(cljs.core.truth_(and__4036__auto____$1)){
var and__4036__auto____$2 = k;
if(cljs.core.truth_(and__4036__auto____$2)){
return cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__4036__auto____$2;
}
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (map__55914,map__55914__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (){
return cljs.spec.alpha.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__4047__auto__ = f__$1;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return p__$2;
}
})());
});})(map__55914,map__55914__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
,null)));
} else {
return cljs.spec.alpha.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__4047__auto__ = f__$1;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__55914,map__55914__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__4047__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__4047__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__55914,map__55914__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
;
var or__4047__auto__ = (function (){var temp__5457__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__5457__auto__)){
var g = temp__5457__auto__;
var G__55917 = op;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$accept,G__55917)){
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__55917)){
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = (cljs.core.truth_(gfn)?gfn.call(null):null);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__55918 = op;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__55918)){
if(cljs.core._EQ_.call(null,ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.gen.alpha.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__55918)){
var temp__5457__auto__ = cljs.spec.alpha.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__5457__auto__)){
var g = temp__5457__auto__;
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__55918)){
return cljs.spec.alpha.re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.alpha.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__55918)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.gen.alpha.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__55918)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__55918)){
if(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id)){
return cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__5457__auto__ = cljs.spec.alpha.re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__5457__auto__)){
var g = temp__5457__auto__;
return cljs.spec.gen.alpha.fmap.call(null,((function (g,temp__5457__auto__,G__55918,or__4047__auto____$1,or__4047__auto__,map__55914,map__55914__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens){
return (function (p1__55913_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__55913_SHARP_);
});})(g,temp__5457__auto__,G__55918,or__4047__auto____$1,or__4047__auto__,map__55914,map__55914__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens))
,cljs.spec.gen.alpha.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55918)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.alpha.re_conform = (function cljs$spec$alpha$re_conform(p,p__55919){
while(true){
var vec__55920 = p__55919;
var seq__55921 = cljs.core.seq.call(null,vec__55920);
var first__55922 = cljs.core.first.call(null,seq__55921);
var seq__55921__$1 = cljs.core.next.call(null,seq__55921);
var x = first__55922;
var xs = seq__55921__$1;
var data = vec__55920;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.alpha.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return null;
} else {
return ret;
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
} else {
var temp__5455__auto__ = cljs.spec.alpha.deriv.call(null,p,x);
if(cljs.core.truth_(temp__5455__auto__)){
var dp = temp__5455__auto__;
var G__55923 = dp;
var G__55924 = xs;
p = G__55923;
p__55919 = G__55924;
continue;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
break;
}
});
cljs.spec.alpha.re_explain = (function cljs$spec$alpha$re_explain(path,via,in$,re,input){
var p = re;
var G__55928 = input;
var vec__55929 = G__55928;
var seq__55930 = cljs.core.seq.call(null,vec__55929);
var first__55931 = cljs.core.first.call(null,seq__55930);
var seq__55930__$1 = cljs.core.next.call(null,seq__55930);
var x = first__55931;
var xs = seq__55930__$1;
var data = vec__55929;
var i = (0);
var p__$1 = p;
var G__55928__$1 = G__55928;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__55932 = G__55928__$1;
var seq__55933 = cljs.core.seq.call(null,vec__55932);
var first__55934 = cljs.core.first.call(null,seq__55933);
var seq__55933__$1 = cljs.core.next.call(null,seq__55933);
var x__$1 = first__55934;
var xs__$1 = seq__55933__$1;
var data__$1 = vec__55932;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.alpha.op_explain.call(null,cljs.spec.alpha.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__5455__auto__ = cljs.spec.alpha.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var dp = temp__5455__auto__;
var G__55935 = dp;
var G__55936 = xs__$1;
var G__55937 = (i__$2 + (1));
p__$1 = G__55935;
G__55928__$1 = G__55936;
i__$1 = G__55937;
continue;
} else {
if(cljs.spec.alpha.accept_QMARK_.call(null,p__$2)){
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(p__$2),cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat)){
return cljs.spec.alpha.op_explain.call(null,cljs.spec.alpha.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$reason,"Extra input",cljs.core.cst$kw$pred,cljs.spec.alpha.op_describe.call(null,re),cljs.core.cst$kw$val,data__$1,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
} else {
var or__4047__auto__ = cljs.spec.alpha.op_explain.call(null,cljs.spec.alpha.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$reason,"Extra input",cljs.core.cst$kw$pred,cljs.spec.alpha.op_describe.call(null,p__$2),cljs.core.cst$kw$val,data__$1,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.alpha.regex_spec_impl = (function cljs$spec$alpha$regex_spec_impl(re,gfn){
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha55938 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha55938 = (function (re,gfn,meta55939){
this.re = re;
this.gfn = gfn;
this.meta55939 = meta55939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha55938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55940,meta55939__$1){
var self__ = this;
var _55940__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha55938(self__.re,self__.gfn,meta55939__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha55938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55940){
var self__ = this;
var _55940__$1 = this;
return self__.meta55939;
});

cljs.spec.alpha.t_cljs$spec$alpha55938.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55938.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha55938.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha55938.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55938.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((((x == null)) || (cljs.core.sequential_QMARK_.call(null,x)))){
return cljs.spec.alpha.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
});

cljs.spec.alpha.t_cljs$spec$alpha55938.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_unform.call(null,self__.re,x);
});

cljs.spec.alpha.t_cljs$spec$alpha55938.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((((x == null)) || (cljs.core.sequential_QMARK_.call(null,x)))){
return cljs.spec.alpha.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_or,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_sequential_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null))))),null,(1),null))))),null,(1),null))))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});

cljs.spec.alpha.t_cljs$spec$alpha55938.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.alpha.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.alpha.op_describe.call(null,self__.re));
}
});

cljs.spec.alpha.t_cljs$spec$alpha55938.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.alpha.t_cljs$spec$alpha55938.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_describe.call(null,self__.re);
});

cljs.spec.alpha.t_cljs$spec$alpha55938.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$re,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta55939], null);
});

cljs.spec.alpha.t_cljs$spec$alpha55938.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha55938.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha55938";

cljs.spec.alpha.t_cljs$spec$alpha55938.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha55938");
});

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha55938.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha55938 = (function cljs$spec$alpha$regex_spec_impl_$___GT_t_cljs$spec$alpha55938(re__$1,gfn__$1,meta55939){
return (new cljs.spec.alpha.t_cljs$spec$alpha55938(re__$1,gfn__$1,meta55939));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha55938(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.call_valid_QMARK_ = (function cljs$spec$alpha$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.alpha.conform.call(null,cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cargs)){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.alpha.conform.call(null,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__4036__auto__ = (!(cljs.spec.alpha.invalid_QMARK_.call(null,cret)));
if(and__4036__auto__){
if(cljs.core.truth_(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.alpha.pvalid_QMARK_.call(null,cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null));
} else {
return true;
}
} else {
return and__4036__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.alpha.validate_fn = (function cljs$spec$alpha$validate_fn(f,specs,iters){
var g = cljs.spec.alpha.gen.call(null,cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.gen.alpha.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__55941_SHARP_){
return cljs.spec.alpha.call_valid_QMARK_.call(null,f,specs,p1__55941_SHARP_);
});})(g))
);
var ret = cljs.spec.gen.alpha.quick_check.call(null,iters,prop);
var temp__5455__auto__ = cljs.core.cst$kw$smallest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$shrunk.cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__5455__auto__)){
var vec__55942 = temp__5455__auto__;
var smallest = cljs.core.nth.call(null,vec__55942,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.alpha.fspec_impl = (function cljs$spec$alpha$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,argspec,cljs.core.cst$kw$ret,retspec,cljs.core.cst$kw$fn,fnspec], null);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha55945 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.alpha.t_cljs$spec$alpha55945 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta55946){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta55946 = meta55946;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha55945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_55947,meta55946__$1){
var self__ = this;
var _55947__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha55945(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta55946__$1));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha55945.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_55947){
var self__ = this;
var _55947__$1 = this;
return self__.meta55946;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha55945.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha55945.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha55945.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55945.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha55945.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha55945.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55945.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.alpha.validate_fn.call(null,f,self__.specs,cljs.spec.alpha._STAR_fspec_iterations_STAR_))){
return f;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha55945.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha55945.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.alpha.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e55948){if((e55948 instanceof Error)){
var t = e55948;
return t;
} else {
throw e55948;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.list(cljs.core.cst$sym$apply,cljs.core.cst$sym$fn),cljs.core.cst$kw$val,args,cljs.core.cst$kw$reason,ret.message,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
var cret = cljs.spec.alpha.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cret)){
return cljs.spec.alpha.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,cljs.core.cst$kw$ret),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.alpha.conform.call(null,self__.argspec,args);
return cljs.spec.alpha.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,cljs.core.cst$kw$fn),via,in$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$kw$val,f,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha55945.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.return$.call(null,((function (___$3,specs){
return (function() { 
var G__55953__delegate = function (args){
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__55949_55954 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__55950_55955 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__55951_55956 = true;
var _STAR_print_fn_STAR__temp_val__55952_55957 = ((function (_STAR_print_newline_STAR__orig_val__55949_55954,_STAR_print_fn_STAR__orig_val__55950_55955,_STAR_print_newline_STAR__temp_val__55951_55956,sb__4572__auto__,___$3,specs){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__55949_55954,_STAR_print_fn_STAR__orig_val__55950_55955,_STAR_print_newline_STAR__temp_val__55951_55956,sb__4572__auto__,___$3,specs))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__55951_55956;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__55952_55957;

try{cljs.spec.alpha.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__55950_55955;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__55949_55954;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})()),"\n","(pvalid? argspec args)"].join('')));
}

return cljs.spec.gen.alpha.generate.call(null,cljs.spec.alpha.gen.call(null,self__.retspec,overrides));
};
var G__55953 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55958__i = 0, G__55958__a = new Array(arguments.length -  0);
while (G__55958__i < G__55958__a.length) {G__55958__a[G__55958__i] = arguments[G__55958__i + 0]; ++G__55958__i;}
  args = new cljs.core.IndexedSeq(G__55958__a,0,null);
} 
return G__55953__delegate.call(this,args);};
G__55953.cljs$lang$maxFixedArity = 0;
G__55953.cljs$lang$applyTo = (function (arglist__55959){
var args = cljs.core.seq(arglist__55959);
return G__55953__delegate(args);
});
G__55953.cljs$core$IFn$_invoke$arity$variadic = G__55953__delegate;
return G__55953;
})()
;})(___$3,specs))
);
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha55945.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha55945.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$args,null,(1),null)),(new cljs.core.List(null,self__.aform,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$ret,null,(1),null)),(new cljs.core.List(null,self__.rform,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$fn,null,(1),null)),(new cljs.core.List(null,self__.fform,null,(1),null)))));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha55945.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$argspec,cljs.core.cst$sym$aform,cljs.core.cst$sym$retspec,cljs.core.cst$sym$rform,cljs.core.cst$sym$fnspec,cljs.core.cst$sym$fform,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$meta55946], null);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha55945.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha55945.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha55945";

cljs.spec.alpha.t_cljs$spec$alpha55945.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha55945");
});})(specs))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha55945.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha55945 = ((function (specs){
return (function cljs$spec$alpha$fspec_impl_$___GT_t_cljs$spec$alpha55945(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta55946){
return (new cljs.spec.alpha.t_cljs$spec$alpha55945(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta55946));
});})(specs))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha55945(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.def_impl.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kvs_DASH__GT_map,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__55960_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_zipmap,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$p1__55960_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$p1__55960_SHARP_))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__55961_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$v], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$v], null)),cljs.core.cst$sym$p1__55961_SHARP_))),cljs.spec.alpha.spec_impl.call(null,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_zipmap,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$_PERCENT_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$_PERCENT_))),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$v], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$v], null)),cljs.core.cst$sym$_PERCENT_))),(function (p1__55960_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,p1__55960_SHARP_),cljs.core.map.call(null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,p1__55960_SHARP_));
}),null,true,(function (p1__55961_SHARP_){
return cljs.core.map.call(null,(function (p__55962){
var vec__55963 = p__55962;
var k = cljs.core.nth.call(null,vec__55963,(0),null);
var v = cljs.core.nth.call(null,vec__55963,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,v], null);
}),p1__55961_SHARP_);
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.alpha.nonconforming = (function cljs$spec$alpha$nonconforming(spec){
var spec__$1 = (new cljs.core.Delay((function (){
return cljs.spec.alpha.specize.call(null,spec);
}),null));
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha55966 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha55966 = (function (spec,meta55967){
this.spec = spec;
this.meta55967 = meta55967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha55966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_55968,meta55967__$1){
var self__ = this;
var _55968__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha55966(self__.spec,meta55967__$1));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha55966.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_55968){
var self__ = this;
var _55968__$1 = this;
return self__.meta55967;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha55966.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55966.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha55966.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha55966.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55966.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = cljs.spec.alpha.conform_STAR_.call(null,cljs.core.deref.call(null,self__.spec),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return x;
}
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha55966.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform_STAR_.call(null,cljs.core.deref.call(null,self__.spec),x);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha55966.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_STAR_.call(null,cljs.core.deref.call(null,self__.spec),path,via,in$,x);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha55966.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.gen_STAR_.call(null,cljs.core.deref.call(null,self__.spec),overrides,path,rmap);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha55966.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.nonconforming.call(null,cljs.spec.alpha.with_gen_STAR_.call(null,cljs.core.deref.call(null,self__.spec),gfn));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha55966.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_nonconforming,null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha.describe_STAR_.call(null,cljs.core.deref.call(null,self__.spec)),null,(1),null)))));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha55966.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$spec,cljs.core.cst$sym$meta55967], null);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha55966.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha55966.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha55966";

cljs.spec.alpha.t_cljs$spec$alpha55966.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha55966");
});})(spec__$1))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha55966.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha55966 = ((function (spec__$1){
return (function cljs$spec$alpha$nonconforming_$___GT_t_cljs$spec$alpha55966(spec__$2,meta55967){
return (new cljs.spec.alpha.t_cljs$spec$alpha55966(spec__$2,meta55967));
});})(spec__$1))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha55966(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.alpha.nilable_impl = (function cljs$spec$alpha$nilable_impl(form,pred,gfn){
var spec = (new cljs.core.Delay((function (){
return cljs.spec.alpha.specize.call(null,pred,form);
}),null));
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha55969 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha55969 = (function (form,pred,gfn,spec,meta55970){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
this.meta55970 = meta55970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha55969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_55971,meta55970__$1){
var self__ = this;
var _55971__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha55969(self__.form,self__.pred,self__.gfn,self__.spec,meta55970__$1));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha55969.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_55971){
var self__ = this;
var _55971__$1 = this;
return self__.meta55970;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha55969.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55969.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha55969.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha55969.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha55969.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.conform_STAR_.call(null,cljs.core.deref.call(null,self__.spec),x);
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha55969.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.unform_STAR_.call(null,cljs.core.deref.call(null,self__.spec),x);
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha55969.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var or__4047__auto__ = cljs.spec.alpha.pvalid_QMARK_.call(null,cljs.core.deref.call(null,self__.spec),x);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (x == null);
}
})())){
return null;
} else {
return cljs.core.conj.call(null,cljs.spec.alpha.explain_1.call(null,self__.form,self__.pred,cljs.core.conj.call(null,path,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred),via,in$,x),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,cljs.core.conj.call(null,path,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil),cljs.core.cst$kw$pred,cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null));
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha55969.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.gen.alpha.return$.call(null,null);
});})(___$1,spec))
,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.alpha.gensub.call(null,self__.pred,overrides,cljs.core.conj.call(null,path,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred),rmap,self__.form);
});})(___$1,spec))
,null)))], null)], null));
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha55969.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.nilable_impl.call(null,self__.form,self__.pred,gfn__$1);
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha55969.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)))));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha55969.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$spec,cljs.core.cst$sym$meta55970], null);
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha55969.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha55969.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha55969";

cljs.spec.alpha.t_cljs$spec$alpha55969.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha55969");
});})(spec))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha55969.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha55969 = ((function (spec){
return (function cljs$spec$alpha$nilable_impl_$___GT_t_cljs$spec$alpha55969(form__$1,pred__$1,gfn__$1,spec__$1,meta55970){
return (new cljs.spec.alpha.t_cljs$spec$alpha55969(form__$1,pred__$1,gfn__$1,spec__$1,meta55970));
});})(spec))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha55969(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.alpha.exercise = (function cljs$spec$alpha$exercise(var_args){
var G__55974 = arguments.length;
switch (G__55974) {
case 1:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.exercise.call(null,spec,(10));
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.alpha.exercise.call(null,spec,n,null);
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__55972_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__55972_SHARP_,cljs.spec.alpha.conform.call(null,spec,p1__55972_SHARP_)],null));
}),cljs.spec.gen.alpha.sample.call(null,cljs.spec.alpha.gen.call(null,spec,overrides),n));
});

cljs.spec.alpha.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.alpha.inst_in_range_QMARK_ = (function cljs$spec$alpha$inst_in_range_QMARK_(start,end,inst){
var and__4036__auto__ = cljs.core.inst_QMARK_.call(null,inst);
if(and__4036__auto__){
var t = cljs.core.inst_ms.call(null,inst);
return (((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end))));
} else {
return and__4036__auto__;
}
});
/**
 * Return true if start <= val, val < end and val is a fixed
 *   precision integer.
 */
cljs.spec.alpha.int_in_range_QMARK_ = (function cljs$spec$alpha$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return (((start <= val)) && ((val < end)));
} else {
if((val instanceof goog.math.Long)){
var and__4036__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__4036__auto__)){
return val.lessThan(end);
} else {
return and__4036__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__4036__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__4036__auto__)){
return val.lessThan(end);
} else {
return and__4036__auto__;
}
} else {
return false;

}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha._STAR_compile_asserts_STAR_ !== 'undefined')){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec.alpha._STAR_compile_asserts_STAR_ = true;
}
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha._STAR_runtime_asserts_STAR_ !== 'undefined')){
} else {
cljs.spec.alpha._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.alpha.check_asserts_QMARK_ = (function cljs$spec$alpha$check_asserts_QMARK_(){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec.alpha/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.alpha.check_asserts = (function cljs$spec$alpha$check_asserts(flag){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.alpha.assert_STAR_ = (function cljs$spec$alpha$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,spec,x))){
return x;
} else {
var ed = cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.spec.alpha.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),cljs.core.cst$kw$cljs$spec$alpha_SLASH_failure,cljs.core.cst$kw$assertion_DASH_failed));
throw (new Error(["Spec assertion failed\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__55976_55980 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__55977_55981 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__55978_55982 = true;
var _STAR_print_fn_STAR__temp_val__55979_55983 = ((function (_STAR_print_newline_STAR__orig_val__55976_55980,_STAR_print_fn_STAR__orig_val__55977_55981,_STAR_print_newline_STAR__temp_val__55978_55982,sb__4572__auto__,ed){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__55976_55980,_STAR_print_fn_STAR__orig_val__55977_55981,_STAR_print_newline_STAR__temp_val__55978_55982,sb__4572__auto__,ed))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__55978_55982;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__55979_55983;

try{cljs.spec.alpha.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__55977_55981;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__55976_55980;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})())].join('')));
}
});

//# sourceMappingURL=alpha.js.map?rel=1545321277831
