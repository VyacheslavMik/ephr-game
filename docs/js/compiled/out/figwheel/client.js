// Compiled by ClojureScript 1.10.439 {:optimize-constants true}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.15";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e69115){if((e69115 instanceof Error)){
var e = e69115;
return "Error: Unable to stringify";
} else {
throw e69115;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__69118 = arguments.length;
switch (G__69118) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$figwheel_DASH_event,"callback",cljs.core.cst$kw$callback_DASH_name,"figwheel-repl-print",cljs.core.cst$kw$content,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stream,stream,cljs.core.cst$kw$args,cljs.core.mapv.call(null,(function (p1__69116_SHARP_){
if(typeof p1__69116_SHARP_ === 'string'){
return p1__69116_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__69116_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,cljs.core.cst$kw$out,args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___69121 = arguments.length;
var i__4642__auto___69122 = (0);
while(true){
if((i__4642__auto___69122 < len__4641__auto___69121)){
args__4647__auto__.push((arguments[i__4642__auto___69122]));

var G__69123 = (i__4642__auto___69122 + (1));
i__4642__auto___69122 = G__69123;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,cljs.core.cst$kw$out,args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq69120){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69120));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___69125 = arguments.length;
var i__4642__auto___69126 = (0);
while(true){
if((i__4642__auto___69126 < len__4641__auto___69125)){
args__4647__auto__.push((arguments[i__4642__auto___69126]));

var G__69127 = (i__4642__auto___69126 + (1));
i__4642__auto___69126 = G__69127;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,cljs.core.cst$kw$err,args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq69124){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69124));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,cljs.core.cst$kw$figwheel_DASH_autoload,true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,cljs.core.cst$kw$figwheel_DASH_autoload,cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,cljs.core.cst$kw$info,"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,cljs.core.cst$kw$info,["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,cljs.core.cst$kw$figwheel_DASH_autoload,b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,cljs.core.cst$kw$figwheel_DASH_repl_DASH_pprint,true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,cljs.core.cst$kw$figwheel_DASH_repl_DASH_pprint,b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$message,cljs.core.cst$kw$class], null)),figwheel.client.get_essential_messages.call(null,cljs.core.cst$kw$cause.cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__69128){
var map__69129 = p__69128;
var map__69129__$1 = (((((!((map__69129 == null))))?(((((map__69129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69129):map__69129);
var message = cljs.core.get.call(null,map__69129__$1,cljs.core.cst$kw$message);
var class$ = cljs.core.get.call(null,map__69129__$1,cljs.core.cst$kw$class);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,cljs.core.cst$kw$msg_DASH_name),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4047__auto__ = cljs.core.cst$kw$load_DASH_warninged_DASH_code.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,cljs.core.cst$kw$compile_DASH_warning);
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),cljs.core.cst$kw$files_DASH_changed);
if(and__4036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),cljs.core.cst$kw$files_DASH_changed)) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$compile_DASH_warning,cljs.core.cst$kw$compile_DASH_warning], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$compile_DASH_warning,cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$compile_DASH_warning,cljs.core.cst$kw$files_DASH_changed,cljs.core.cst$kw$compile_DASH_warning], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$compile_DASH_failed,cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$compile_DASH_failed,cljs.core.cst$kw$compile_DASH_failed], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,cljs.core.cst$kw$css_DASH_files_DASH_changed,cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22961__auto___69208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22961__auto___69208,ch){
return (function (){
var f__22962__auto__ = (function (){var switch__22938__auto__ = ((function (c__22961__auto___69208,ch){
return (function (state_69180){
var state_val_69181 = (state_69180[(1)]);
if((state_val_69181 === (7))){
var inst_69176 = (state_69180[(2)]);
var state_69180__$1 = state_69180;
var statearr_69182_69209 = state_69180__$1;
(statearr_69182_69209[(2)] = inst_69176);

(statearr_69182_69209[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69181 === (1))){
var state_69180__$1 = state_69180;
var statearr_69183_69210 = state_69180__$1;
(statearr_69183_69210[(2)] = null);

(statearr_69183_69210[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69181 === (4))){
var inst_69133 = (state_69180[(7)]);
var inst_69133__$1 = (state_69180[(2)]);
var state_69180__$1 = (function (){var statearr_69184 = state_69180;
(statearr_69184[(7)] = inst_69133__$1);

return statearr_69184;
})();
if(cljs.core.truth_(inst_69133__$1)){
var statearr_69185_69211 = state_69180__$1;
(statearr_69185_69211[(1)] = (5));

} else {
var statearr_69186_69212 = state_69180__$1;
(statearr_69186_69212[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_69181 === (15))){
var inst_69140 = (state_69180[(8)]);
var inst_69155 = cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(inst_69140);
var inst_69156 = cljs.core.first.call(null,inst_69155);
var inst_69157 = cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(inst_69156);
var inst_69158 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_69157)].join('');
var inst_69159 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$warn,inst_69158);
var state_69180__$1 = state_69180;
var statearr_69187_69213 = state_69180__$1;
(statearr_69187_69213[(2)] = inst_69159);

(statearr_69187_69213[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69181 === (13))){
var inst_69164 = (state_69180[(2)]);
var state_69180__$1 = state_69180;
var statearr_69188_69214 = state_69180__$1;
(statearr_69188_69214[(2)] = inst_69164);

(statearr_69188_69214[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69181 === (6))){
var state_69180__$1 = state_69180;
var statearr_69189_69215 = state_69180__$1;
(statearr_69189_69215[(2)] = null);

(statearr_69189_69215[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69181 === (17))){
var inst_69162 = (state_69180[(2)]);
var state_69180__$1 = state_69180;
var statearr_69190_69216 = state_69180__$1;
(statearr_69190_69216[(2)] = inst_69162);

(statearr_69190_69216[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69181 === (3))){
var inst_69178 = (state_69180[(2)]);
var state_69180__$1 = state_69180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69180__$1,inst_69178);
} else {
if((state_val_69181 === (12))){
var inst_69139 = (state_69180[(9)]);
var inst_69153 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_69139,opts);
var state_69180__$1 = state_69180;
if(inst_69153){
var statearr_69191_69217 = state_69180__$1;
(statearr_69191_69217[(1)] = (15));

} else {
var statearr_69192_69218 = state_69180__$1;
(statearr_69192_69218[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_69181 === (2))){
var state_69180__$1 = state_69180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69180__$1,(4),ch);
} else {
if((state_val_69181 === (11))){
var inst_69140 = (state_69180[(8)]);
var inst_69145 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69146 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_69140);
var inst_69147 = cljs.core.async.timeout.call(null,(1000));
var inst_69148 = [inst_69146,inst_69147];
var inst_69149 = (new cljs.core.PersistentVector(null,2,(5),inst_69145,inst_69148,null));
var state_69180__$1 = state_69180;
return cljs.core.async.ioc_alts_BANG_.call(null,state_69180__$1,(14),inst_69149);
} else {
if((state_val_69181 === (9))){
var inst_69140 = (state_69180[(8)]);
var inst_69166 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$warn,"Figwheel: code autoloading is OFF");
var inst_69167 = cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(inst_69140);
var inst_69168 = cljs.core.map.call(null,cljs.core.cst$kw$file,inst_69167);
var inst_69169 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_69168)].join('');
var inst_69170 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$info,inst_69169);
var state_69180__$1 = (function (){var statearr_69193 = state_69180;
(statearr_69193[(10)] = inst_69166);

return statearr_69193;
})();
var statearr_69194_69219 = state_69180__$1;
(statearr_69194_69219[(2)] = inst_69170);

(statearr_69194_69219[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69181 === (5))){
var inst_69133 = (state_69180[(7)]);
var inst_69135 = [cljs.core.cst$kw$compile_DASH_warning,null,cljs.core.cst$kw$files_DASH_changed,null];
var inst_69136 = (new cljs.core.PersistentArrayMap(null,2,inst_69135,null));
var inst_69137 = (new cljs.core.PersistentHashSet(null,inst_69136,null));
var inst_69138 = figwheel.client.focus_msgs.call(null,inst_69137,inst_69133);
var inst_69139 = cljs.core.map.call(null,cljs.core.cst$kw$msg_DASH_name,inst_69138);
var inst_69140 = cljs.core.first.call(null,inst_69138);
var inst_69141 = figwheel.client.autoload_QMARK_.call(null);
var state_69180__$1 = (function (){var statearr_69195 = state_69180;
(statearr_69195[(8)] = inst_69140);

(statearr_69195[(9)] = inst_69139);

return statearr_69195;
})();
if(cljs.core.truth_(inst_69141)){
var statearr_69196_69220 = state_69180__$1;
(statearr_69196_69220[(1)] = (8));

} else {
var statearr_69197_69221 = state_69180__$1;
(statearr_69197_69221[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_69181 === (14))){
var inst_69151 = (state_69180[(2)]);
var state_69180__$1 = state_69180;
var statearr_69198_69222 = state_69180__$1;
(statearr_69198_69222[(2)] = inst_69151);

(statearr_69198_69222[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69181 === (16))){
var state_69180__$1 = state_69180;
var statearr_69199_69223 = state_69180__$1;
(statearr_69199_69223[(2)] = null);

(statearr_69199_69223[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69181 === (10))){
var inst_69172 = (state_69180[(2)]);
var state_69180__$1 = (function (){var statearr_69200 = state_69180;
(statearr_69200[(11)] = inst_69172);

return statearr_69200;
})();
var statearr_69201_69224 = state_69180__$1;
(statearr_69201_69224[(2)] = null);

(statearr_69201_69224[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69181 === (8))){
var inst_69139 = (state_69180[(9)]);
var inst_69143 = figwheel.client.reload_file_state_QMARK_.call(null,inst_69139,opts);
var state_69180__$1 = state_69180;
if(cljs.core.truth_(inst_69143)){
var statearr_69202_69225 = state_69180__$1;
(statearr_69202_69225[(1)] = (11));

} else {
var statearr_69203_69226 = state_69180__$1;
(statearr_69203_69226[(1)] = (12));

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
});})(c__22961__auto___69208,ch))
;
return ((function (switch__22938__auto__,c__22961__auto___69208,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____0 = (function (){
var statearr_69204 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69204[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__);

(statearr_69204[(1)] = (1));

return statearr_69204;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____1 = (function (state_69180){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_69180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e69205){if((e69205 instanceof Object)){
var ex__22942__auto__ = e69205;
var statearr_69206_69227 = state_69180;
(statearr_69206_69227[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69180);

return cljs.core.cst$kw$recur;
} else {
throw e69205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__69228 = state_69180;
state_69180 = G__69228;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__ = function(state_69180){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____1.call(this,state_69180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto___69208,ch))
})();
var state__22963__auto__ = (function (){var statearr_69207 = f__22962__auto__.call(null);
(statearr_69207[(6)] = c__22961__auto___69208);

return statearr_69207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto___69208,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__69229_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__69229_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return cljs.core.cst$kw$chrome;
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return cljs.core.cst$kw$safari;
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return cljs.core.cst$kw$chrome;
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return cljs.core.cst$kw$firefox;
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return cljs.core.cst$kw$ie;
} else {
return null;
}
}
}
}
}
});
var base_path_69235 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_69235){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__69231 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__69232 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__69233 = false;
var _STAR_print_fn_STAR__temp_val__69234 = ((function (_STAR_print_newline_STAR__orig_val__69231,_STAR_print_fn_STAR__orig_val__69232,_STAR_print_newline_STAR__temp_val__69233,sb,base_path_69235){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__69231,_STAR_print_fn_STAR__orig_val__69232,_STAR_print_newline_STAR__temp_val__69233,sb,base_path_69235))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__69233;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__69234;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$status,cljs.core.cst$kw$success,cljs.core.cst$kw$out,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product.call(null),cljs.core.cst$kw$value,result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__69232;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__69231;
}}catch (e69230){if((e69230 instanceof Error)){
var e = e69230;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$status,cljs.core.cst$kw$exception,cljs.core.cst$kw$value,cljs.core.pr_str.call(null,e),cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product.call(null),cljs.core.cst$kw$stacktrace,clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),cljs.core.cst$kw$base_DASH_path,base_path_69235], null));
} else {
var e = e69230;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$status,cljs.core.cst$kw$exception,cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product.call(null),cljs.core.cst$kw$value,cljs.core.pr_str.call(null,e),cljs.core.cst$kw$stacktrace,"No stacktrace available."], null));

}
}});})(base_path_69235))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__69236){
var map__69237 = p__69236;
var map__69237__$1 = (((((!((map__69237 == null))))?(((((map__69237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69237):map__69237);
var opts = map__69237__$1;
var build_id = cljs.core.get.call(null,map__69237__$1,cljs.core.cst$kw$build_DASH_id);
return ((function (map__69237,map__69237__$1,opts,build_id){
return (function (p__69239){
var vec__69240 = p__69239;
var seq__69241 = cljs.core.seq.call(null,vec__69240);
var first__69242 = cljs.core.first.call(null,seq__69241);
var seq__69241__$1 = cljs.core.next.call(null,seq__69241);
var map__69243 = first__69242;
var map__69243__$1 = (((((!((map__69243 == null))))?(((((map__69243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69243):map__69243);
var msg = map__69243__$1;
var msg_name = cljs.core.get.call(null,map__69243__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = seq__69241__$1;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$repl_DASH_eval,msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__69240,seq__69241,first__69242,seq__69241__$1,map__69243,map__69243__$1,msg,msg_name,_,map__69237,map__69237__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$figwheel_DASH_event,"callback",cljs.core.cst$kw$callback_DASH_name,cljs.core.cst$kw$callback_DASH_name.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.cst$kw$content,res], null));
});})(vec__69240,seq__69241,first__69242,seq__69241__$1,map__69243,map__69243__$1,msg,msg_name,_,map__69237,map__69237__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__69237,map__69237__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__69245){
var vec__69246 = p__69245;
var seq__69247 = cljs.core.seq.call(null,vec__69246);
var first__69248 = cljs.core.first.call(null,seq__69247);
var seq__69247__$1 = cljs.core.next.call(null,seq__69247);
var map__69249 = first__69248;
var map__69249__$1 = (((((!((map__69249 == null))))?(((((map__69249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69249):map__69249);
var msg = map__69249__$1;
var msg_name = cljs.core.get.call(null,map__69249__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = seq__69247__$1;
if(cljs.core._EQ_.call(null,msg_name,cljs.core.cst$kw$css_DASH_files_DASH_changed)){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__69251){
var map__69252 = p__69251;
var map__69252__$1 = (((((!((map__69252 == null))))?(((((map__69252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69252):map__69252);
var on_compile_warning = cljs.core.get.call(null,map__69252__$1,cljs.core.cst$kw$on_DASH_compile_DASH_warning);
var on_compile_fail = cljs.core.get.call(null,map__69252__$1,cljs.core.cst$kw$on_DASH_compile_DASH_fail);
return ((function (map__69252,map__69252__$1,on_compile_warning,on_compile_fail){
return (function (p__69254){
var vec__69255 = p__69254;
var seq__69256 = cljs.core.seq.call(null,vec__69255);
var first__69257 = cljs.core.first.call(null,seq__69256);
var seq__69256__$1 = cljs.core.next.call(null,seq__69256);
var map__69258 = first__69257;
var map__69258__$1 = (((((!((map__69258 == null))))?(((((map__69258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69258):map__69258);
var msg = map__69258__$1;
var msg_name = cljs.core.get.call(null,map__69258__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = seq__69256__$1;
var pred__69260 = cljs.core._EQ_;
var expr__69261 = msg_name;
if(cljs.core.truth_(pred__69260.call(null,cljs.core.cst$kw$compile_DASH_warning,expr__69261))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__69260.call(null,cljs.core.cst$kw$compile_DASH_failed,expr__69261))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__69252,map__69252__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(cljs.core.cst$kw$auto_DASH_jump_DASH_to_DASH_source_DASH_on_DASH_error.cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$compile_DASH_failed,null,cljs.core.cst$kw$compile_DASH_warning,null,cljs.core.cst$kw$files_DASH_changed,null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,cljs.core.cst$kw$msg_DASH_name,msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22961__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22961__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22962__auto__ = (function (){var switch__22938__auto__ = ((function (c__22961__auto__,msg_hist,msg_names,msg){
return (function (state_69350){
var state_val_69351 = (state_69350[(1)]);
if((state_val_69351 === (7))){
var inst_69270 = (state_69350[(2)]);
var state_69350__$1 = state_69350;
if(cljs.core.truth_(inst_69270)){
var statearr_69352_69399 = state_69350__$1;
(statearr_69352_69399[(1)] = (8));

} else {
var statearr_69353_69400 = state_69350__$1;
(statearr_69353_69400[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (20))){
var inst_69344 = (state_69350[(2)]);
var state_69350__$1 = state_69350;
var statearr_69354_69401 = state_69350__$1;
(statearr_69354_69401[(2)] = inst_69344);

(statearr_69354_69401[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (27))){
var inst_69340 = (state_69350[(2)]);
var state_69350__$1 = state_69350;
var statearr_69355_69402 = state_69350__$1;
(statearr_69355_69402[(2)] = inst_69340);

(statearr_69355_69402[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (1))){
var inst_69263 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_69350__$1 = state_69350;
if(cljs.core.truth_(inst_69263)){
var statearr_69356_69403 = state_69350__$1;
(statearr_69356_69403[(1)] = (2));

} else {
var statearr_69357_69404 = state_69350__$1;
(statearr_69357_69404[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (24))){
var inst_69342 = (state_69350[(2)]);
var state_69350__$1 = state_69350;
var statearr_69358_69405 = state_69350__$1;
(statearr_69358_69405[(2)] = inst_69342);

(statearr_69358_69405[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (4))){
var inst_69348 = (state_69350[(2)]);
var state_69350__$1 = state_69350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69350__$1,inst_69348);
} else {
if((state_val_69351 === (15))){
var inst_69346 = (state_69350[(2)]);
var state_69350__$1 = state_69350;
var statearr_69359_69406 = state_69350__$1;
(statearr_69359_69406[(2)] = inst_69346);

(statearr_69359_69406[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (21))){
var inst_69299 = (state_69350[(2)]);
var inst_69300 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_69301 = figwheel.client.auto_jump_to_error.call(null,opts,inst_69300);
var state_69350__$1 = (function (){var statearr_69360 = state_69350;
(statearr_69360[(7)] = inst_69299);

return statearr_69360;
})();
var statearr_69361_69407 = state_69350__$1;
(statearr_69361_69407[(2)] = inst_69301);

(statearr_69361_69407[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (31))){
var inst_69329 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_69350__$1 = state_69350;
if(inst_69329){
var statearr_69362_69408 = state_69350__$1;
(statearr_69362_69408[(1)] = (34));

} else {
var statearr_69363_69409 = state_69350__$1;
(statearr_69363_69409[(1)] = (35));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (32))){
var inst_69338 = (state_69350[(2)]);
var state_69350__$1 = state_69350;
var statearr_69364_69410 = state_69350__$1;
(statearr_69364_69410[(2)] = inst_69338);

(statearr_69364_69410[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (33))){
var inst_69325 = (state_69350[(2)]);
var inst_69326 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_69327 = figwheel.client.auto_jump_to_error.call(null,opts,inst_69326);
var state_69350__$1 = (function (){var statearr_69365 = state_69350;
(statearr_69365[(8)] = inst_69325);

return statearr_69365;
})();
var statearr_69366_69411 = state_69350__$1;
(statearr_69366_69411[(2)] = inst_69327);

(statearr_69366_69411[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (13))){
var inst_69284 = figwheel.client.heads_up.clear.call(null);
var state_69350__$1 = state_69350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69350__$1,(16),inst_69284);
} else {
if((state_val_69351 === (22))){
var inst_69305 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_69306 = figwheel.client.heads_up.append_warning_message.call(null,inst_69305);
var state_69350__$1 = state_69350;
var statearr_69367_69412 = state_69350__$1;
(statearr_69367_69412[(2)] = inst_69306);

(statearr_69367_69412[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (36))){
var inst_69336 = (state_69350[(2)]);
var state_69350__$1 = state_69350;
var statearr_69368_69413 = state_69350__$1;
(statearr_69368_69413[(2)] = inst_69336);

(statearr_69368_69413[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (29))){
var inst_69316 = (state_69350[(2)]);
var inst_69317 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_69318 = figwheel.client.auto_jump_to_error.call(null,opts,inst_69317);
var state_69350__$1 = (function (){var statearr_69369 = state_69350;
(statearr_69369[(9)] = inst_69316);

return statearr_69369;
})();
var statearr_69370_69414 = state_69350__$1;
(statearr_69370_69414[(2)] = inst_69318);

(statearr_69370_69414[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (6))){
var inst_69265 = (state_69350[(10)]);
var state_69350__$1 = state_69350;
var statearr_69371_69415 = state_69350__$1;
(statearr_69371_69415[(2)] = inst_69265);

(statearr_69371_69415[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (28))){
var inst_69312 = (state_69350[(2)]);
var inst_69313 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_69314 = figwheel.client.heads_up.display_warning.call(null,inst_69313);
var state_69350__$1 = (function (){var statearr_69372 = state_69350;
(statearr_69372[(11)] = inst_69312);

return statearr_69372;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69350__$1,(29),inst_69314);
} else {
if((state_val_69351 === (25))){
var inst_69310 = figwheel.client.heads_up.clear.call(null);
var state_69350__$1 = state_69350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69350__$1,(28),inst_69310);
} else {
if((state_val_69351 === (34))){
var inst_69331 = figwheel.client.heads_up.flash_loaded.call(null);
var state_69350__$1 = state_69350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69350__$1,(37),inst_69331);
} else {
if((state_val_69351 === (17))){
var inst_69290 = (state_69350[(2)]);
var inst_69291 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_69292 = figwheel.client.auto_jump_to_error.call(null,opts,inst_69291);
var state_69350__$1 = (function (){var statearr_69373 = state_69350;
(statearr_69373[(12)] = inst_69290);

return statearr_69373;
})();
var statearr_69374_69416 = state_69350__$1;
(statearr_69374_69416[(2)] = inst_69292);

(statearr_69374_69416[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (3))){
var inst_69282 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_69350__$1 = state_69350;
if(inst_69282){
var statearr_69375_69417 = state_69350__$1;
(statearr_69375_69417[(1)] = (13));

} else {
var statearr_69376_69418 = state_69350__$1;
(statearr_69376_69418[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (12))){
var inst_69278 = (state_69350[(2)]);
var state_69350__$1 = state_69350;
var statearr_69377_69419 = state_69350__$1;
(statearr_69377_69419[(2)] = inst_69278);

(statearr_69377_69419[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (2))){
var inst_69265 = (state_69350[(10)]);
var inst_69265__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_69350__$1 = (function (){var statearr_69378 = state_69350;
(statearr_69378[(10)] = inst_69265__$1);

return statearr_69378;
})();
if(cljs.core.truth_(inst_69265__$1)){
var statearr_69379_69420 = state_69350__$1;
(statearr_69379_69420[(1)] = (5));

} else {
var statearr_69380_69421 = state_69350__$1;
(statearr_69380_69421[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (23))){
var inst_69308 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_69350__$1 = state_69350;
if(inst_69308){
var statearr_69381_69422 = state_69350__$1;
(statearr_69381_69422[(1)] = (25));

} else {
var statearr_69382_69423 = state_69350__$1;
(statearr_69382_69423[(1)] = (26));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (35))){
var state_69350__$1 = state_69350;
var statearr_69383_69424 = state_69350__$1;
(statearr_69383_69424[(2)] = null);

(statearr_69383_69424[(1)] = (36));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (19))){
var inst_69303 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_69350__$1 = state_69350;
if(inst_69303){
var statearr_69384_69425 = state_69350__$1;
(statearr_69384_69425[(1)] = (22));

} else {
var statearr_69385_69426 = state_69350__$1;
(statearr_69385_69426[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (11))){
var inst_69274 = (state_69350[(2)]);
var state_69350__$1 = state_69350;
var statearr_69386_69427 = state_69350__$1;
(statearr_69386_69427[(2)] = inst_69274);

(statearr_69386_69427[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (9))){
var inst_69276 = figwheel.client.heads_up.clear.call(null);
var state_69350__$1 = state_69350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69350__$1,(12),inst_69276);
} else {
if((state_val_69351 === (5))){
var inst_69267 = cljs.core.cst$kw$autoload.cljs$core$IFn$_invoke$arity$1(opts);
var state_69350__$1 = state_69350;
var statearr_69387_69428 = state_69350__$1;
(statearr_69387_69428[(2)] = inst_69267);

(statearr_69387_69428[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (14))){
var inst_69294 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_69350__$1 = state_69350;
if(inst_69294){
var statearr_69388_69429 = state_69350__$1;
(statearr_69388_69429[(1)] = (18));

} else {
var statearr_69389_69430 = state_69350__$1;
(statearr_69389_69430[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (26))){
var inst_69320 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_69350__$1 = state_69350;
if(inst_69320){
var statearr_69390_69431 = state_69350__$1;
(statearr_69390_69431[(1)] = (30));

} else {
var statearr_69391_69432 = state_69350__$1;
(statearr_69391_69432[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (16))){
var inst_69286 = (state_69350[(2)]);
var inst_69287 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_69288 = figwheel.client.heads_up.display_exception.call(null,inst_69287);
var state_69350__$1 = (function (){var statearr_69392 = state_69350;
(statearr_69392[(13)] = inst_69286);

return statearr_69392;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69350__$1,(17),inst_69288);
} else {
if((state_val_69351 === (30))){
var inst_69322 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_69323 = figwheel.client.heads_up.display_warning.call(null,inst_69322);
var state_69350__$1 = state_69350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69350__$1,(33),inst_69323);
} else {
if((state_val_69351 === (10))){
var inst_69280 = (state_69350[(2)]);
var state_69350__$1 = state_69350;
var statearr_69393_69433 = state_69350__$1;
(statearr_69393_69433[(2)] = inst_69280);

(statearr_69393_69433[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (18))){
var inst_69296 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_69297 = figwheel.client.heads_up.display_exception.call(null,inst_69296);
var state_69350__$1 = state_69350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69350__$1,(21),inst_69297);
} else {
if((state_val_69351 === (37))){
var inst_69333 = (state_69350[(2)]);
var state_69350__$1 = state_69350;
var statearr_69394_69434 = state_69350__$1;
(statearr_69394_69434[(2)] = inst_69333);

(statearr_69394_69434[(1)] = (36));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69351 === (8))){
var inst_69272 = figwheel.client.heads_up.flash_loaded.call(null);
var state_69350__$1 = state_69350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69350__$1,(11),inst_69272);
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
});})(c__22961__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22938__auto__,c__22961__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____0 = (function (){
var statearr_69395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69395[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__);

(statearr_69395[(1)] = (1));

return statearr_69395;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____1 = (function (state_69350){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_69350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e69396){if((e69396 instanceof Object)){
var ex__22942__auto__ = e69396;
var statearr_69397_69435 = state_69350;
(statearr_69397_69435[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69350);

return cljs.core.cst$kw$recur;
} else {
throw e69396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__69436 = state_69350;
state_69350 = G__69436;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__ = function(state_69350){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____1.call(this,state_69350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__,msg_hist,msg_names,msg))
})();
var state__22963__auto__ = (function (){var statearr_69398 = f__22962__auto__.call(null);
(statearr_69398[(6)] = c__22961__auto__);

return statearr_69398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto__,msg_hist,msg_names,msg))
);

return c__22961__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22961__auto___69465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22961__auto___69465,ch){
return (function (){
var f__22962__auto__ = (function (){var switch__22938__auto__ = ((function (c__22961__auto___69465,ch){
return (function (state_69451){
var state_val_69452 = (state_69451[(1)]);
if((state_val_69452 === (1))){
var state_69451__$1 = state_69451;
var statearr_69453_69466 = state_69451__$1;
(statearr_69453_69466[(2)] = null);

(statearr_69453_69466[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69452 === (2))){
var state_69451__$1 = state_69451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69451__$1,(4),ch);
} else {
if((state_val_69452 === (3))){
var inst_69449 = (state_69451[(2)]);
var state_69451__$1 = state_69451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69451__$1,inst_69449);
} else {
if((state_val_69452 === (4))){
var inst_69439 = (state_69451[(7)]);
var inst_69439__$1 = (state_69451[(2)]);
var state_69451__$1 = (function (){var statearr_69454 = state_69451;
(statearr_69454[(7)] = inst_69439__$1);

return statearr_69454;
})();
if(cljs.core.truth_(inst_69439__$1)){
var statearr_69455_69467 = state_69451__$1;
(statearr_69455_69467[(1)] = (5));

} else {
var statearr_69456_69468 = state_69451__$1;
(statearr_69456_69468[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_69452 === (5))){
var inst_69439 = (state_69451[(7)]);
var inst_69441 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_69439);
var state_69451__$1 = state_69451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69451__$1,(8),inst_69441);
} else {
if((state_val_69452 === (6))){
var state_69451__$1 = state_69451;
var statearr_69457_69469 = state_69451__$1;
(statearr_69457_69469[(2)] = null);

(statearr_69457_69469[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69452 === (7))){
var inst_69447 = (state_69451[(2)]);
var state_69451__$1 = state_69451;
var statearr_69458_69470 = state_69451__$1;
(statearr_69458_69470[(2)] = inst_69447);

(statearr_69458_69470[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_69452 === (8))){
var inst_69443 = (state_69451[(2)]);
var state_69451__$1 = (function (){var statearr_69459 = state_69451;
(statearr_69459[(8)] = inst_69443);

return statearr_69459;
})();
var statearr_69460_69471 = state_69451__$1;
(statearr_69460_69471[(2)] = null);

(statearr_69460_69471[(1)] = (2));


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
});})(c__22961__auto___69465,ch))
;
return ((function (switch__22938__auto__,c__22961__auto___69465,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22939__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22939__auto____0 = (function (){
var statearr_69461 = [null,null,null,null,null,null,null,null,null];
(statearr_69461[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22939__auto__);

(statearr_69461[(1)] = (1));

return statearr_69461;
});
var figwheel$client$heads_up_plugin_$_state_machine__22939__auto____1 = (function (state_69451){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_69451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e69462){if((e69462 instanceof Object)){
var ex__22942__auto__ = e69462;
var statearr_69463_69472 = state_69451;
(statearr_69463_69472[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69451);

return cljs.core.cst$kw$recur;
} else {
throw e69462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__69473 = state_69451;
state_69451 = G__69473;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22939__auto__ = function(state_69451){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22939__auto____1.call(this,state_69451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22939__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22939__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto___69465,ch))
})();
var state__22963__auto__ = (function (){var statearr_69464 = f__22962__auto__.call(null);
(statearr_69464[(6)] = c__22961__auto___69465);

return statearr_69464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto___69465,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,cljs.core.cst$kw$project_DASH_id,cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(cljs.core.cst$kw$heads_DASH_up_DASH_display.cljs$core$IFn$_invoke$arity$1(opts))){
var c__22961__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22961__auto__){
return (function (){
var f__22962__auto__ = (function (){var switch__22938__auto__ = ((function (c__22961__auto__){
return (function (state_69479){
var state_val_69480 = (state_69479[(1)]);
if((state_val_69480 === (1))){
var inst_69474 = cljs.core.async.timeout.call(null,(3000));
var state_69479__$1 = state_69479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69479__$1,(2),inst_69474);
} else {
if((state_val_69480 === (2))){
var inst_69476 = (state_69479[(2)]);
var inst_69477 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_69479__$1 = (function (){var statearr_69481 = state_69479;
(statearr_69481[(7)] = inst_69476);

return statearr_69481;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69479__$1,inst_69477);
} else {
return null;
}
}
});})(c__22961__auto__))
;
return ((function (switch__22938__auto__,c__22961__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____0 = (function (){
var statearr_69482 = [null,null,null,null,null,null,null,null];
(statearr_69482[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__);

(statearr_69482[(1)] = (1));

return statearr_69482;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____1 = (function (state_69479){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_69479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e69483){if((e69483 instanceof Object)){
var ex__22942__auto__ = e69483;
var statearr_69484_69486 = state_69479;
(statearr_69484_69486[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69479);

return cljs.core.cst$kw$recur;
} else {
throw e69483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__69487 = state_69479;
state_69479 = G__69487;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__ = function(state_69479){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____1.call(this,state_69479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__))
})();
var state__22963__auto__ = (function (){var statearr_69485 = f__22962__auto__.call(null);
(statearr_69485[(6)] = c__22961__auto__);

return statearr_69485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto__))
);

return c__22961__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = cljs.core.cst$kw$figwheel_DASH_version.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(cljs.core.cst$kw$heads_DASH_up_DASH_display.cljs$core$IFn$_invoke$arity$1(opts))){
var c__22961__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22961__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__22962__auto__ = (function (){var switch__22938__auto__ = ((function (c__22961__auto__,figwheel_version,temp__5457__auto__){
return (function (state_69494){
var state_val_69495 = (state_69494[(1)]);
if((state_val_69495 === (1))){
var inst_69488 = cljs.core.async.timeout.call(null,(2000));
var state_69494__$1 = state_69494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69494__$1,(2),inst_69488);
} else {
if((state_val_69495 === (2))){
var inst_69490 = (state_69494[(2)]);
var inst_69491 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_69492 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_69491);
var state_69494__$1 = (function (){var statearr_69496 = state_69494;
(statearr_69496[(7)] = inst_69490);

return statearr_69496;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69494__$1,inst_69492);
} else {
return null;
}
}
});})(c__22961__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__22938__auto__,c__22961__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____0 = (function (){
var statearr_69497 = [null,null,null,null,null,null,null,null];
(statearr_69497[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__);

(statearr_69497[(1)] = (1));

return statearr_69497;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____1 = (function (state_69494){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_69494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e69498){if((e69498 instanceof Object)){
var ex__22942__auto__ = e69498;
var statearr_69499_69501 = state_69494;
(statearr_69499_69501[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69494);

return cljs.core.cst$kw$recur;
} else {
throw e69498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__69502 = state_69494;
state_69494 = G__69502;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__ = function(state_69494){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____1.call(this,state_69494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__,figwheel_version,temp__5457__auto__))
})();
var state__22963__auto__ = (function (){var statearr_69500 = f__22962__auto__.call(null);
(statearr_69500[(6)] = c__22961__auto__);

return statearr_69500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto__,figwheel_version,temp__5457__auto__))
);

return c__22961__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__69503){
var map__69504 = p__69503;
var map__69504__$1 = (((((!((map__69504 == null))))?(((((map__69504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69504):map__69504);
var file = cljs.core.get.call(null,map__69504__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.call(null,map__69504__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.call(null,map__69504__$1,cljs.core.cst$kw$column);
var G__69506 = "";
var G__69506__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69506),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__69506);
var G__69506__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69506__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__69506__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69506__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__69506__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__69507){
var map__69508 = p__69507;
var map__69508__$1 = (((((!((map__69508 == null))))?(((((map__69508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69508):map__69508);
var ed = map__69508__$1;
var formatted_exception = cljs.core.get.call(null,map__69508__$1,cljs.core.cst$kw$formatted_DASH_exception);
var exception_data = cljs.core.get.call(null,map__69508__$1,cljs.core.cst$kw$exception_DASH_data);
var cause = cljs.core.get.call(null,map__69508__$1,cljs.core.cst$kw$cause);
figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: Compile Exception");

var seq__69510_69514 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__69511_69515 = null;
var count__69512_69516 = (0);
var i__69513_69517 = (0);
while(true){
if((i__69513_69517 < count__69512_69516)){
var msg_69518 = cljs.core._nth.call(null,chunk__69511_69515,i__69513_69517);
figwheel.client.utils.log.call(null,cljs.core.cst$kw$info,msg_69518);


var G__69519 = seq__69510_69514;
var G__69520 = chunk__69511_69515;
var G__69521 = count__69512_69516;
var G__69522 = (i__69513_69517 + (1));
seq__69510_69514 = G__69519;
chunk__69511_69515 = G__69520;
count__69512_69516 = G__69521;
i__69513_69517 = G__69522;
continue;
} else {
var temp__5457__auto___69523 = cljs.core.seq.call(null,seq__69510_69514);
if(temp__5457__auto___69523){
var seq__69510_69524__$1 = temp__5457__auto___69523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69510_69524__$1)){
var c__4461__auto___69525 = cljs.core.chunk_first.call(null,seq__69510_69524__$1);
var G__69526 = cljs.core.chunk_rest.call(null,seq__69510_69524__$1);
var G__69527 = c__4461__auto___69525;
var G__69528 = cljs.core.count.call(null,c__4461__auto___69525);
var G__69529 = (0);
seq__69510_69514 = G__69526;
chunk__69511_69515 = G__69527;
count__69512_69516 = G__69528;
i__69513_69517 = G__69529;
continue;
} else {
var msg_69530 = cljs.core.first.call(null,seq__69510_69524__$1);
figwheel.client.utils.log.call(null,cljs.core.cst$kw$info,msg_69530);


var G__69531 = cljs.core.next.call(null,seq__69510_69524__$1);
var G__69532 = null;
var G__69533 = (0);
var G__69534 = (0);
seq__69510_69514 = G__69531;
chunk__69511_69515 = G__69532;
count__69512_69516 = G__69533;
i__69513_69517 = G__69534;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,cljs.core.cst$kw$info,["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__69535){
var map__69536 = p__69535;
var map__69536__$1 = (((((!((map__69536 == null))))?(((((map__69536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69536):map__69536);
var w = map__69536__$1;
var message = cljs.core.get.call(null,map__69536__$1,cljs.core.cst$kw$message);
figwheel.client.utils.log.call(null,cljs.core.cst$kw$warn,["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,cljs.core.cst$kw$info,cljs.core.pr_str.call(null,cljs.core.map.call(null,cljs.core.cst$kw$file,files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$on_DASH_compile_DASH_warning,cljs.core.cst$kw$on_DASH_jsload,cljs.core.cst$kw$reload_DASH_dependents,cljs.core.cst$kw$on_DASH_compile_DASH_fail,cljs.core.cst$kw$debug,cljs.core.cst$kw$heads_DASH_up_DASH_display,cljs.core.cst$kw$websocket_DASH_url,cljs.core.cst$kw$auto_DASH_jump_DASH_to_DASH_source_DASH_on_DASH_error,cljs.core.cst$kw$before_DASH_jsload,cljs.core.cst$kw$load_DASH_warninged_DASH_code,cljs.core.cst$kw$eval_DASH_fn,cljs.core.cst$kw$retry_DASH_count,cljs.core.cst$kw$autoload,cljs.core.cst$kw$on_DASH_cssload],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},cljs.core.cst$sym$figwheel$client_SLASH_default_DASH_on_DASH_compile_DASH_warning,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$figwheel$client,cljs.core.cst$sym$default_DASH_on_DASH_compile_DASH_warning,"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$message], null),cljs.core.cst$kw$as,cljs.core.cst$sym$w], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},cljs.core.cst$sym$figwheel$client_SLASH_default_DASH_on_DASH_compile_DASH_fail,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$figwheel$client,cljs.core.cst$sym$default_DASH_on_DASH_compile_DASH_fail,"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$formatted_DASH_exception,cljs.core.cst$sym$exception_DASH_data,cljs.core.cst$sym$cause], null),cljs.core.cst$kw$as,cljs.core.cst$sym$ed], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(cljs.core.cst$kw$jsload_DASH_callback.cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,cljs.core.cst$kw$on_DASH_jsload,cljs.core.cst$kw$jsload_DASH_callback.cljs$core$IFn$_invoke$arity$1(config)),cljs.core.cst$kw$jsload_DASH_callback);
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$websocket_DASH_url], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$enforce_DASH_project_DASH_plugin,figwheel.client.enforce_project_plugin,cljs.core.cst$kw$enforce_DASH_figwheel_DASH_version_DASH_plugin,figwheel.client.enforce_figwheel_version_plugin,cljs.core.cst$kw$file_DASH_reloader_DASH_plugin,figwheel.client.file_reloader_plugin,cljs.core.cst$kw$comp_DASH_fail_DASH_warning_DASH_plugin,figwheel.client.compile_fail_warning_plugin,cljs.core.cst$kw$css_DASH_reloader_DASH_plugin,figwheel.client.css_reloader_plugin,cljs.core.cst$kw$repl_DASH_plugin,figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_reloader_DASH_plugin,cljs.core.cst$kw$comp_DASH_fail_DASH_warning_DASH_plugin,cljs.core.cst$kw$repl_DASH_plugin], null)):base);
var base__$2 = ((cljs.core.cst$kw$autoload.cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,cljs.core.cst$kw$file_DASH_reloader_DASH_plugin):base__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.cst$kw$heads_DASH_up_DASH_display.cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,cljs.core.cst$kw$heads_DASH_up_DASH_display_DASH_plugin,figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__69538 = cljs.core.seq.call(null,plugins);
var chunk__69539 = null;
var count__69540 = (0);
var i__69541 = (0);
while(true){
if((i__69541 < count__69540)){
var vec__69542 = cljs.core._nth.call(null,chunk__69539,i__69541);
var k = cljs.core.nth.call(null,vec__69542,(0),null);
var plugin = cljs.core.nth.call(null,vec__69542,(1),null);
if(cljs.core.truth_(plugin)){
var pl_69548 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__69538,chunk__69539,count__69540,i__69541,pl_69548,vec__69542,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_69548.call(null,msg_hist);
});})(seq__69538,chunk__69539,count__69540,i__69541,pl_69548,vec__69542,k,plugin))
);
} else {
}


var G__69549 = seq__69538;
var G__69550 = chunk__69539;
var G__69551 = count__69540;
var G__69552 = (i__69541 + (1));
seq__69538 = G__69549;
chunk__69539 = G__69550;
count__69540 = G__69551;
i__69541 = G__69552;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__69538);
if(temp__5457__auto__){
var seq__69538__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69538__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__69538__$1);
var G__69553 = cljs.core.chunk_rest.call(null,seq__69538__$1);
var G__69554 = c__4461__auto__;
var G__69555 = cljs.core.count.call(null,c__4461__auto__);
var G__69556 = (0);
seq__69538 = G__69553;
chunk__69539 = G__69554;
count__69540 = G__69555;
i__69541 = G__69556;
continue;
} else {
var vec__69545 = cljs.core.first.call(null,seq__69538__$1);
var k = cljs.core.nth.call(null,vec__69545,(0),null);
var plugin = cljs.core.nth.call(null,vec__69545,(1),null);
if(cljs.core.truth_(plugin)){
var pl_69557 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__69538,chunk__69539,count__69540,i__69541,pl_69557,vec__69545,k,plugin,seq__69538__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_69557.call(null,msg_hist);
});})(seq__69538,chunk__69539,count__69540,i__69541,pl_69557,vec__69545,k,plugin,seq__69538__$1,temp__5457__auto__))
);
} else {
}


var G__69558 = cljs.core.next.call(null,seq__69538__$1);
var G__69559 = null;
var G__69560 = (0);
var G__69561 = (0);
seq__69538 = G__69558;
chunk__69539 = G__69559;
count__69540 = G__69560;
i__69541 = G__69561;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__69563 = arguments.length;
switch (G__69563) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = cljs.core.cst$kw$plugins.cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = cljs.core.cst$kw$merge_DASH_plugins.cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,cljs.core.cst$kw$plugins,cljs.core.cst$kw$merge_DASH_plugins))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = cljs.core.cst$kw$debug.cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__69564_69569 = cljs.core.seq.call(null,cljs.core.cst$kw$initial_DASH_messages.cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__69565_69570 = null;
var count__69566_69571 = (0);
var i__69567_69572 = (0);
while(true){
if((i__69567_69572 < count__69566_69571)){
var msg_69573 = cljs.core._nth.call(null,chunk__69565_69570,i__69567_69572);
figwheel.client.socket.handle_incoming_message.call(null,msg_69573);


var G__69574 = seq__69564_69569;
var G__69575 = chunk__69565_69570;
var G__69576 = count__69566_69571;
var G__69577 = (i__69567_69572 + (1));
seq__69564_69569 = G__69574;
chunk__69565_69570 = G__69575;
count__69566_69571 = G__69576;
i__69567_69572 = G__69577;
continue;
} else {
var temp__5457__auto___69578 = cljs.core.seq.call(null,seq__69564_69569);
if(temp__5457__auto___69578){
var seq__69564_69579__$1 = temp__5457__auto___69578;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69564_69579__$1)){
var c__4461__auto___69580 = cljs.core.chunk_first.call(null,seq__69564_69579__$1);
var G__69581 = cljs.core.chunk_rest.call(null,seq__69564_69579__$1);
var G__69582 = c__4461__auto___69580;
var G__69583 = cljs.core.count.call(null,c__4461__auto___69580);
var G__69584 = (0);
seq__69564_69569 = G__69581;
chunk__69565_69570 = G__69582;
count__69566_69571 = G__69583;
i__69567_69572 = G__69584;
continue;
} else {
var msg_69585 = cljs.core.first.call(null,seq__69564_69579__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_69585);


var G__69586 = cljs.core.next.call(null,seq__69564_69579__$1);
var G__69587 = null;
var G__69588 = (0);
var G__69589 = (0);
seq__69564_69569 = G__69586;
chunk__69565_69570 = G__69587;
count__69566_69571 = G__69588;
i__69567_69572 = G__69589;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4647__auto__ = [];
var len__4641__auto___69594 = arguments.length;
var i__4642__auto___69595 = (0);
while(true){
if((i__4642__auto___69595 < len__4641__auto___69594)){
args__4647__auto__.push((arguments[i__4642__auto___69595]));

var G__69596 = (i__4642__auto___69595 + (1));
i__4642__auto___69595 = G__69596;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__69591){
var map__69592 = p__69591;
var map__69592__$1 = (((((!((map__69592 == null))))?(((((map__69592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69592):map__69592);
var opts = map__69592__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq69590){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69590));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e69597){if((e69597 instanceof Error)){
var e = e69597;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$autoload,false], null);
} else {
throw e69597;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,cljs.core.cst$kw$listen_DASH_for_DASH_successful_DASH_compile,((function (config){
return (function (p__69598){
var map__69599 = p__69598;
var map__69599__$1 = (((((!((map__69599 == null))))?(((((map__69599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69599):map__69599);
var msg_name = cljs.core.get.call(null,map__69599__$1,cljs.core.cst$kw$msg_DASH_name);
if(cljs.core._EQ_.call(null,msg_name,cljs.core.cst$kw$files_DASH_changed)){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1545335810071
