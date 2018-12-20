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
}catch (e57050){if((e57050 instanceof Error)){
var e = e57050;
return "Error: Unable to stringify";
} else {
throw e57050;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__57053 = arguments.length;
switch (G__57053) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$figwheel_DASH_event,"callback",cljs.core.cst$kw$callback_DASH_name,"figwheel-repl-print",cljs.core.cst$kw$content,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stream,stream,cljs.core.cst$kw$args,cljs.core.mapv.call(null,(function (p1__57051_SHARP_){
if(typeof p1__57051_SHARP_ === 'string'){
return p1__57051_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__57051_SHARP_);
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
var len__4641__auto___57056 = arguments.length;
var i__4642__auto___57057 = (0);
while(true){
if((i__4642__auto___57057 < len__4641__auto___57056)){
args__4647__auto__.push((arguments[i__4642__auto___57057]));

var G__57058 = (i__4642__auto___57057 + (1));
i__4642__auto___57057 = G__57058;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq57055){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57055));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___57060 = arguments.length;
var i__4642__auto___57061 = (0);
while(true){
if((i__4642__auto___57061 < len__4641__auto___57060)){
args__4647__auto__.push((arguments[i__4642__auto___57061]));

var G__57062 = (i__4642__auto___57061 + (1));
i__4642__auto___57061 = G__57062;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq57059){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57059));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__57063){
var map__57064 = p__57063;
var map__57064__$1 = (((((!((map__57064 == null))))?(((((map__57064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57064):map__57064);
var message = cljs.core.get.call(null,map__57064__$1,cljs.core.cst$kw$message);
var class$ = cljs.core.get.call(null,map__57064__$1,cljs.core.cst$kw$class);
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
var c__22961__auto___57143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22961__auto___57143,ch){
return (function (){
var f__22962__auto__ = (function (){var switch__22938__auto__ = ((function (c__22961__auto___57143,ch){
return (function (state_57115){
var state_val_57116 = (state_57115[(1)]);
if((state_val_57116 === (7))){
var inst_57111 = (state_57115[(2)]);
var state_57115__$1 = state_57115;
var statearr_57117_57144 = state_57115__$1;
(statearr_57117_57144[(2)] = inst_57111);

(statearr_57117_57144[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57116 === (1))){
var state_57115__$1 = state_57115;
var statearr_57118_57145 = state_57115__$1;
(statearr_57118_57145[(2)] = null);

(statearr_57118_57145[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57116 === (4))){
var inst_57068 = (state_57115[(7)]);
var inst_57068__$1 = (state_57115[(2)]);
var state_57115__$1 = (function (){var statearr_57119 = state_57115;
(statearr_57119[(7)] = inst_57068__$1);

return statearr_57119;
})();
if(cljs.core.truth_(inst_57068__$1)){
var statearr_57120_57146 = state_57115__$1;
(statearr_57120_57146[(1)] = (5));

} else {
var statearr_57121_57147 = state_57115__$1;
(statearr_57121_57147[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57116 === (15))){
var inst_57075 = (state_57115[(8)]);
var inst_57090 = cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(inst_57075);
var inst_57091 = cljs.core.first.call(null,inst_57090);
var inst_57092 = cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(inst_57091);
var inst_57093 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_57092)].join('');
var inst_57094 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$warn,inst_57093);
var state_57115__$1 = state_57115;
var statearr_57122_57148 = state_57115__$1;
(statearr_57122_57148[(2)] = inst_57094);

(statearr_57122_57148[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57116 === (13))){
var inst_57099 = (state_57115[(2)]);
var state_57115__$1 = state_57115;
var statearr_57123_57149 = state_57115__$1;
(statearr_57123_57149[(2)] = inst_57099);

(statearr_57123_57149[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57116 === (6))){
var state_57115__$1 = state_57115;
var statearr_57124_57150 = state_57115__$1;
(statearr_57124_57150[(2)] = null);

(statearr_57124_57150[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57116 === (17))){
var inst_57097 = (state_57115[(2)]);
var state_57115__$1 = state_57115;
var statearr_57125_57151 = state_57115__$1;
(statearr_57125_57151[(2)] = inst_57097);

(statearr_57125_57151[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57116 === (3))){
var inst_57113 = (state_57115[(2)]);
var state_57115__$1 = state_57115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57115__$1,inst_57113);
} else {
if((state_val_57116 === (12))){
var inst_57074 = (state_57115[(9)]);
var inst_57088 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_57074,opts);
var state_57115__$1 = state_57115;
if(inst_57088){
var statearr_57126_57152 = state_57115__$1;
(statearr_57126_57152[(1)] = (15));

} else {
var statearr_57127_57153 = state_57115__$1;
(statearr_57127_57153[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57116 === (2))){
var state_57115__$1 = state_57115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57115__$1,(4),ch);
} else {
if((state_val_57116 === (11))){
var inst_57075 = (state_57115[(8)]);
var inst_57080 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57081 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_57075);
var inst_57082 = cljs.core.async.timeout.call(null,(1000));
var inst_57083 = [inst_57081,inst_57082];
var inst_57084 = (new cljs.core.PersistentVector(null,2,(5),inst_57080,inst_57083,null));
var state_57115__$1 = state_57115;
return cljs.core.async.ioc_alts_BANG_.call(null,state_57115__$1,(14),inst_57084);
} else {
if((state_val_57116 === (9))){
var inst_57075 = (state_57115[(8)]);
var inst_57101 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$warn,"Figwheel: code autoloading is OFF");
var inst_57102 = cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(inst_57075);
var inst_57103 = cljs.core.map.call(null,cljs.core.cst$kw$file,inst_57102);
var inst_57104 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_57103)].join('');
var inst_57105 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$info,inst_57104);
var state_57115__$1 = (function (){var statearr_57128 = state_57115;
(statearr_57128[(10)] = inst_57101);

return statearr_57128;
})();
var statearr_57129_57154 = state_57115__$1;
(statearr_57129_57154[(2)] = inst_57105);

(statearr_57129_57154[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57116 === (5))){
var inst_57068 = (state_57115[(7)]);
var inst_57070 = [cljs.core.cst$kw$compile_DASH_warning,null,cljs.core.cst$kw$files_DASH_changed,null];
var inst_57071 = (new cljs.core.PersistentArrayMap(null,2,inst_57070,null));
var inst_57072 = (new cljs.core.PersistentHashSet(null,inst_57071,null));
var inst_57073 = figwheel.client.focus_msgs.call(null,inst_57072,inst_57068);
var inst_57074 = cljs.core.map.call(null,cljs.core.cst$kw$msg_DASH_name,inst_57073);
var inst_57075 = cljs.core.first.call(null,inst_57073);
var inst_57076 = figwheel.client.autoload_QMARK_.call(null);
var state_57115__$1 = (function (){var statearr_57130 = state_57115;
(statearr_57130[(9)] = inst_57074);

(statearr_57130[(8)] = inst_57075);

return statearr_57130;
})();
if(cljs.core.truth_(inst_57076)){
var statearr_57131_57155 = state_57115__$1;
(statearr_57131_57155[(1)] = (8));

} else {
var statearr_57132_57156 = state_57115__$1;
(statearr_57132_57156[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57116 === (14))){
var inst_57086 = (state_57115[(2)]);
var state_57115__$1 = state_57115;
var statearr_57133_57157 = state_57115__$1;
(statearr_57133_57157[(2)] = inst_57086);

(statearr_57133_57157[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57116 === (16))){
var state_57115__$1 = state_57115;
var statearr_57134_57158 = state_57115__$1;
(statearr_57134_57158[(2)] = null);

(statearr_57134_57158[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57116 === (10))){
var inst_57107 = (state_57115[(2)]);
var state_57115__$1 = (function (){var statearr_57135 = state_57115;
(statearr_57135[(11)] = inst_57107);

return statearr_57135;
})();
var statearr_57136_57159 = state_57115__$1;
(statearr_57136_57159[(2)] = null);

(statearr_57136_57159[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57116 === (8))){
var inst_57074 = (state_57115[(9)]);
var inst_57078 = figwheel.client.reload_file_state_QMARK_.call(null,inst_57074,opts);
var state_57115__$1 = state_57115;
if(cljs.core.truth_(inst_57078)){
var statearr_57137_57160 = state_57115__$1;
(statearr_57137_57160[(1)] = (11));

} else {
var statearr_57138_57161 = state_57115__$1;
(statearr_57138_57161[(1)] = (12));

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
});})(c__22961__auto___57143,ch))
;
return ((function (switch__22938__auto__,c__22961__auto___57143,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____0 = (function (){
var statearr_57139 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57139[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__);

(statearr_57139[(1)] = (1));

return statearr_57139;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____1 = (function (state_57115){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_57115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e57140){if((e57140 instanceof Object)){
var ex__22942__auto__ = e57140;
var statearr_57141_57162 = state_57115;
(statearr_57141_57162[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57115);

return cljs.core.cst$kw$recur;
} else {
throw e57140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__57163 = state_57115;
state_57115 = G__57163;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__ = function(state_57115){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____1.call(this,state_57115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto___57143,ch))
})();
var state__22963__auto__ = (function (){var statearr_57142 = f__22962__auto__.call(null);
(statearr_57142[(6)] = c__22961__auto___57143);

return statearr_57142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto___57143,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__57164_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__57164_SHARP_));
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
var base_path_57170 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_57170){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57166 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57167 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57168 = false;
var _STAR_print_fn_STAR__temp_val__57169 = ((function (_STAR_print_newline_STAR__orig_val__57166,_STAR_print_fn_STAR__orig_val__57167,_STAR_print_newline_STAR__temp_val__57168,sb,base_path_57170){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__57166,_STAR_print_fn_STAR__orig_val__57167,_STAR_print_newline_STAR__temp_val__57168,sb,base_path_57170))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57168;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57169;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$status,cljs.core.cst$kw$success,cljs.core.cst$kw$out,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product.call(null),cljs.core.cst$kw$value,result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57167;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57166;
}}catch (e57165){if((e57165 instanceof Error)){
var e = e57165;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$status,cljs.core.cst$kw$exception,cljs.core.cst$kw$value,cljs.core.pr_str.call(null,e),cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product.call(null),cljs.core.cst$kw$stacktrace,clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),cljs.core.cst$kw$base_DASH_path,base_path_57170], null));
} else {
var e = e57165;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$status,cljs.core.cst$kw$exception,cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product.call(null),cljs.core.cst$kw$value,cljs.core.pr_str.call(null,e),cljs.core.cst$kw$stacktrace,"No stacktrace available."], null));

}
}});})(base_path_57170))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__57171){
var map__57172 = p__57171;
var map__57172__$1 = (((((!((map__57172 == null))))?(((((map__57172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57172):map__57172);
var opts = map__57172__$1;
var build_id = cljs.core.get.call(null,map__57172__$1,cljs.core.cst$kw$build_DASH_id);
return ((function (map__57172,map__57172__$1,opts,build_id){
return (function (p__57174){
var vec__57175 = p__57174;
var seq__57176 = cljs.core.seq.call(null,vec__57175);
var first__57177 = cljs.core.first.call(null,seq__57176);
var seq__57176__$1 = cljs.core.next.call(null,seq__57176);
var map__57178 = first__57177;
var map__57178__$1 = (((((!((map__57178 == null))))?(((((map__57178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57178):map__57178);
var msg = map__57178__$1;
var msg_name = cljs.core.get.call(null,map__57178__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = seq__57176__$1;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$repl_DASH_eval,msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__57175,seq__57176,first__57177,seq__57176__$1,map__57178,map__57178__$1,msg,msg_name,_,map__57172,map__57172__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$figwheel_DASH_event,"callback",cljs.core.cst$kw$callback_DASH_name,cljs.core.cst$kw$callback_DASH_name.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.cst$kw$content,res], null));
});})(vec__57175,seq__57176,first__57177,seq__57176__$1,map__57178,map__57178__$1,msg,msg_name,_,map__57172,map__57172__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__57172,map__57172__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__57180){
var vec__57181 = p__57180;
var seq__57182 = cljs.core.seq.call(null,vec__57181);
var first__57183 = cljs.core.first.call(null,seq__57182);
var seq__57182__$1 = cljs.core.next.call(null,seq__57182);
var map__57184 = first__57183;
var map__57184__$1 = (((((!((map__57184 == null))))?(((((map__57184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57184):map__57184);
var msg = map__57184__$1;
var msg_name = cljs.core.get.call(null,map__57184__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = seq__57182__$1;
if(cljs.core._EQ_.call(null,msg_name,cljs.core.cst$kw$css_DASH_files_DASH_changed)){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__57186){
var map__57187 = p__57186;
var map__57187__$1 = (((((!((map__57187 == null))))?(((((map__57187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57187):map__57187);
var on_compile_warning = cljs.core.get.call(null,map__57187__$1,cljs.core.cst$kw$on_DASH_compile_DASH_warning);
var on_compile_fail = cljs.core.get.call(null,map__57187__$1,cljs.core.cst$kw$on_DASH_compile_DASH_fail);
return ((function (map__57187,map__57187__$1,on_compile_warning,on_compile_fail){
return (function (p__57189){
var vec__57190 = p__57189;
var seq__57191 = cljs.core.seq.call(null,vec__57190);
var first__57192 = cljs.core.first.call(null,seq__57191);
var seq__57191__$1 = cljs.core.next.call(null,seq__57191);
var map__57193 = first__57192;
var map__57193__$1 = (((((!((map__57193 == null))))?(((((map__57193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57193):map__57193);
var msg = map__57193__$1;
var msg_name = cljs.core.get.call(null,map__57193__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = seq__57191__$1;
var pred__57195 = cljs.core._EQ_;
var expr__57196 = msg_name;
if(cljs.core.truth_(pred__57195.call(null,cljs.core.cst$kw$compile_DASH_warning,expr__57196))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__57195.call(null,cljs.core.cst$kw$compile_DASH_failed,expr__57196))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__57187,map__57187__$1,on_compile_warning,on_compile_fail))
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
return (function (state_57285){
var state_val_57286 = (state_57285[(1)]);
if((state_val_57286 === (7))){
var inst_57205 = (state_57285[(2)]);
var state_57285__$1 = state_57285;
if(cljs.core.truth_(inst_57205)){
var statearr_57287_57334 = state_57285__$1;
(statearr_57287_57334[(1)] = (8));

} else {
var statearr_57288_57335 = state_57285__$1;
(statearr_57288_57335[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (20))){
var inst_57279 = (state_57285[(2)]);
var state_57285__$1 = state_57285;
var statearr_57289_57336 = state_57285__$1;
(statearr_57289_57336[(2)] = inst_57279);

(statearr_57289_57336[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (27))){
var inst_57275 = (state_57285[(2)]);
var state_57285__$1 = state_57285;
var statearr_57290_57337 = state_57285__$1;
(statearr_57290_57337[(2)] = inst_57275);

(statearr_57290_57337[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (1))){
var inst_57198 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_57285__$1 = state_57285;
if(cljs.core.truth_(inst_57198)){
var statearr_57291_57338 = state_57285__$1;
(statearr_57291_57338[(1)] = (2));

} else {
var statearr_57292_57339 = state_57285__$1;
(statearr_57292_57339[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (24))){
var inst_57277 = (state_57285[(2)]);
var state_57285__$1 = state_57285;
var statearr_57293_57340 = state_57285__$1;
(statearr_57293_57340[(2)] = inst_57277);

(statearr_57293_57340[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (4))){
var inst_57283 = (state_57285[(2)]);
var state_57285__$1 = state_57285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57285__$1,inst_57283);
} else {
if((state_val_57286 === (15))){
var inst_57281 = (state_57285[(2)]);
var state_57285__$1 = state_57285;
var statearr_57294_57341 = state_57285__$1;
(statearr_57294_57341[(2)] = inst_57281);

(statearr_57294_57341[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (21))){
var inst_57234 = (state_57285[(2)]);
var inst_57235 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_57236 = figwheel.client.auto_jump_to_error.call(null,opts,inst_57235);
var state_57285__$1 = (function (){var statearr_57295 = state_57285;
(statearr_57295[(7)] = inst_57234);

return statearr_57295;
})();
var statearr_57296_57342 = state_57285__$1;
(statearr_57296_57342[(2)] = inst_57236);

(statearr_57296_57342[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (31))){
var inst_57264 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_57285__$1 = state_57285;
if(inst_57264){
var statearr_57297_57343 = state_57285__$1;
(statearr_57297_57343[(1)] = (34));

} else {
var statearr_57298_57344 = state_57285__$1;
(statearr_57298_57344[(1)] = (35));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (32))){
var inst_57273 = (state_57285[(2)]);
var state_57285__$1 = state_57285;
var statearr_57299_57345 = state_57285__$1;
(statearr_57299_57345[(2)] = inst_57273);

(statearr_57299_57345[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (33))){
var inst_57260 = (state_57285[(2)]);
var inst_57261 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_57262 = figwheel.client.auto_jump_to_error.call(null,opts,inst_57261);
var state_57285__$1 = (function (){var statearr_57300 = state_57285;
(statearr_57300[(8)] = inst_57260);

return statearr_57300;
})();
var statearr_57301_57346 = state_57285__$1;
(statearr_57301_57346[(2)] = inst_57262);

(statearr_57301_57346[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (13))){
var inst_57219 = figwheel.client.heads_up.clear.call(null);
var state_57285__$1 = state_57285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57285__$1,(16),inst_57219);
} else {
if((state_val_57286 === (22))){
var inst_57240 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_57241 = figwheel.client.heads_up.append_warning_message.call(null,inst_57240);
var state_57285__$1 = state_57285;
var statearr_57302_57347 = state_57285__$1;
(statearr_57302_57347[(2)] = inst_57241);

(statearr_57302_57347[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (36))){
var inst_57271 = (state_57285[(2)]);
var state_57285__$1 = state_57285;
var statearr_57303_57348 = state_57285__$1;
(statearr_57303_57348[(2)] = inst_57271);

(statearr_57303_57348[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (29))){
var inst_57251 = (state_57285[(2)]);
var inst_57252 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_57253 = figwheel.client.auto_jump_to_error.call(null,opts,inst_57252);
var state_57285__$1 = (function (){var statearr_57304 = state_57285;
(statearr_57304[(9)] = inst_57251);

return statearr_57304;
})();
var statearr_57305_57349 = state_57285__$1;
(statearr_57305_57349[(2)] = inst_57253);

(statearr_57305_57349[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (6))){
var inst_57200 = (state_57285[(10)]);
var state_57285__$1 = state_57285;
var statearr_57306_57350 = state_57285__$1;
(statearr_57306_57350[(2)] = inst_57200);

(statearr_57306_57350[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (28))){
var inst_57247 = (state_57285[(2)]);
var inst_57248 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_57249 = figwheel.client.heads_up.display_warning.call(null,inst_57248);
var state_57285__$1 = (function (){var statearr_57307 = state_57285;
(statearr_57307[(11)] = inst_57247);

return statearr_57307;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57285__$1,(29),inst_57249);
} else {
if((state_val_57286 === (25))){
var inst_57245 = figwheel.client.heads_up.clear.call(null);
var state_57285__$1 = state_57285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57285__$1,(28),inst_57245);
} else {
if((state_val_57286 === (34))){
var inst_57266 = figwheel.client.heads_up.flash_loaded.call(null);
var state_57285__$1 = state_57285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57285__$1,(37),inst_57266);
} else {
if((state_val_57286 === (17))){
var inst_57225 = (state_57285[(2)]);
var inst_57226 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_57227 = figwheel.client.auto_jump_to_error.call(null,opts,inst_57226);
var state_57285__$1 = (function (){var statearr_57308 = state_57285;
(statearr_57308[(12)] = inst_57225);

return statearr_57308;
})();
var statearr_57309_57351 = state_57285__$1;
(statearr_57309_57351[(2)] = inst_57227);

(statearr_57309_57351[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (3))){
var inst_57217 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_57285__$1 = state_57285;
if(inst_57217){
var statearr_57310_57352 = state_57285__$1;
(statearr_57310_57352[(1)] = (13));

} else {
var statearr_57311_57353 = state_57285__$1;
(statearr_57311_57353[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (12))){
var inst_57213 = (state_57285[(2)]);
var state_57285__$1 = state_57285;
var statearr_57312_57354 = state_57285__$1;
(statearr_57312_57354[(2)] = inst_57213);

(statearr_57312_57354[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (2))){
var inst_57200 = (state_57285[(10)]);
var inst_57200__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_57285__$1 = (function (){var statearr_57313 = state_57285;
(statearr_57313[(10)] = inst_57200__$1);

return statearr_57313;
})();
if(cljs.core.truth_(inst_57200__$1)){
var statearr_57314_57355 = state_57285__$1;
(statearr_57314_57355[(1)] = (5));

} else {
var statearr_57315_57356 = state_57285__$1;
(statearr_57315_57356[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (23))){
var inst_57243 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_57285__$1 = state_57285;
if(inst_57243){
var statearr_57316_57357 = state_57285__$1;
(statearr_57316_57357[(1)] = (25));

} else {
var statearr_57317_57358 = state_57285__$1;
(statearr_57317_57358[(1)] = (26));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (35))){
var state_57285__$1 = state_57285;
var statearr_57318_57359 = state_57285__$1;
(statearr_57318_57359[(2)] = null);

(statearr_57318_57359[(1)] = (36));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (19))){
var inst_57238 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_57285__$1 = state_57285;
if(inst_57238){
var statearr_57319_57360 = state_57285__$1;
(statearr_57319_57360[(1)] = (22));

} else {
var statearr_57320_57361 = state_57285__$1;
(statearr_57320_57361[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (11))){
var inst_57209 = (state_57285[(2)]);
var state_57285__$1 = state_57285;
var statearr_57321_57362 = state_57285__$1;
(statearr_57321_57362[(2)] = inst_57209);

(statearr_57321_57362[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (9))){
var inst_57211 = figwheel.client.heads_up.clear.call(null);
var state_57285__$1 = state_57285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57285__$1,(12),inst_57211);
} else {
if((state_val_57286 === (5))){
var inst_57202 = cljs.core.cst$kw$autoload.cljs$core$IFn$_invoke$arity$1(opts);
var state_57285__$1 = state_57285;
var statearr_57322_57363 = state_57285__$1;
(statearr_57322_57363[(2)] = inst_57202);

(statearr_57322_57363[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (14))){
var inst_57229 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_57285__$1 = state_57285;
if(inst_57229){
var statearr_57323_57364 = state_57285__$1;
(statearr_57323_57364[(1)] = (18));

} else {
var statearr_57324_57365 = state_57285__$1;
(statearr_57324_57365[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (26))){
var inst_57255 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_57285__$1 = state_57285;
if(inst_57255){
var statearr_57325_57366 = state_57285__$1;
(statearr_57325_57366[(1)] = (30));

} else {
var statearr_57326_57367 = state_57285__$1;
(statearr_57326_57367[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (16))){
var inst_57221 = (state_57285[(2)]);
var inst_57222 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_57223 = figwheel.client.heads_up.display_exception.call(null,inst_57222);
var state_57285__$1 = (function (){var statearr_57327 = state_57285;
(statearr_57327[(13)] = inst_57221);

return statearr_57327;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57285__$1,(17),inst_57223);
} else {
if((state_val_57286 === (30))){
var inst_57257 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_57258 = figwheel.client.heads_up.display_warning.call(null,inst_57257);
var state_57285__$1 = state_57285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57285__$1,(33),inst_57258);
} else {
if((state_val_57286 === (10))){
var inst_57215 = (state_57285[(2)]);
var state_57285__$1 = state_57285;
var statearr_57328_57368 = state_57285__$1;
(statearr_57328_57368[(2)] = inst_57215);

(statearr_57328_57368[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (18))){
var inst_57231 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_57232 = figwheel.client.heads_up.display_exception.call(null,inst_57231);
var state_57285__$1 = state_57285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57285__$1,(21),inst_57232);
} else {
if((state_val_57286 === (37))){
var inst_57268 = (state_57285[(2)]);
var state_57285__$1 = state_57285;
var statearr_57329_57369 = state_57285__$1;
(statearr_57329_57369[(2)] = inst_57268);

(statearr_57329_57369[(1)] = (36));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57286 === (8))){
var inst_57207 = figwheel.client.heads_up.flash_loaded.call(null);
var state_57285__$1 = state_57285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57285__$1,(11),inst_57207);
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
var statearr_57330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57330[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__);

(statearr_57330[(1)] = (1));

return statearr_57330;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____1 = (function (state_57285){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_57285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e57331){if((e57331 instanceof Object)){
var ex__22942__auto__ = e57331;
var statearr_57332_57370 = state_57285;
(statearr_57332_57370[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57285);

return cljs.core.cst$kw$recur;
} else {
throw e57331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__57371 = state_57285;
state_57285 = G__57371;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__ = function(state_57285){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____1.call(this,state_57285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__,msg_hist,msg_names,msg))
})();
var state__22963__auto__ = (function (){var statearr_57333 = f__22962__auto__.call(null);
(statearr_57333[(6)] = c__22961__auto__);

return statearr_57333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto__,msg_hist,msg_names,msg))
);

return c__22961__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22961__auto___57400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22961__auto___57400,ch){
return (function (){
var f__22962__auto__ = (function (){var switch__22938__auto__ = ((function (c__22961__auto___57400,ch){
return (function (state_57386){
var state_val_57387 = (state_57386[(1)]);
if((state_val_57387 === (1))){
var state_57386__$1 = state_57386;
var statearr_57388_57401 = state_57386__$1;
(statearr_57388_57401[(2)] = null);

(statearr_57388_57401[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57387 === (2))){
var state_57386__$1 = state_57386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57386__$1,(4),ch);
} else {
if((state_val_57387 === (3))){
var inst_57384 = (state_57386[(2)]);
var state_57386__$1 = state_57386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57386__$1,inst_57384);
} else {
if((state_val_57387 === (4))){
var inst_57374 = (state_57386[(7)]);
var inst_57374__$1 = (state_57386[(2)]);
var state_57386__$1 = (function (){var statearr_57389 = state_57386;
(statearr_57389[(7)] = inst_57374__$1);

return statearr_57389;
})();
if(cljs.core.truth_(inst_57374__$1)){
var statearr_57390_57402 = state_57386__$1;
(statearr_57390_57402[(1)] = (5));

} else {
var statearr_57391_57403 = state_57386__$1;
(statearr_57391_57403[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57387 === (5))){
var inst_57374 = (state_57386[(7)]);
var inst_57376 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_57374);
var state_57386__$1 = state_57386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57386__$1,(8),inst_57376);
} else {
if((state_val_57387 === (6))){
var state_57386__$1 = state_57386;
var statearr_57392_57404 = state_57386__$1;
(statearr_57392_57404[(2)] = null);

(statearr_57392_57404[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57387 === (7))){
var inst_57382 = (state_57386[(2)]);
var state_57386__$1 = state_57386;
var statearr_57393_57405 = state_57386__$1;
(statearr_57393_57405[(2)] = inst_57382);

(statearr_57393_57405[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57387 === (8))){
var inst_57378 = (state_57386[(2)]);
var state_57386__$1 = (function (){var statearr_57394 = state_57386;
(statearr_57394[(8)] = inst_57378);

return statearr_57394;
})();
var statearr_57395_57406 = state_57386__$1;
(statearr_57395_57406[(2)] = null);

(statearr_57395_57406[(1)] = (2));


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
});})(c__22961__auto___57400,ch))
;
return ((function (switch__22938__auto__,c__22961__auto___57400,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22939__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22939__auto____0 = (function (){
var statearr_57396 = [null,null,null,null,null,null,null,null,null];
(statearr_57396[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22939__auto__);

(statearr_57396[(1)] = (1));

return statearr_57396;
});
var figwheel$client$heads_up_plugin_$_state_machine__22939__auto____1 = (function (state_57386){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_57386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e57397){if((e57397 instanceof Object)){
var ex__22942__auto__ = e57397;
var statearr_57398_57407 = state_57386;
(statearr_57398_57407[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57386);

return cljs.core.cst$kw$recur;
} else {
throw e57397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__57408 = state_57386;
state_57386 = G__57408;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22939__auto__ = function(state_57386){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22939__auto____1.call(this,state_57386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22939__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22939__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto___57400,ch))
})();
var state__22963__auto__ = (function (){var statearr_57399 = f__22962__auto__.call(null);
(statearr_57399[(6)] = c__22961__auto___57400);

return statearr_57399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto___57400,ch))
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
return (function (state_57414){
var state_val_57415 = (state_57414[(1)]);
if((state_val_57415 === (1))){
var inst_57409 = cljs.core.async.timeout.call(null,(3000));
var state_57414__$1 = state_57414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57414__$1,(2),inst_57409);
} else {
if((state_val_57415 === (2))){
var inst_57411 = (state_57414[(2)]);
var inst_57412 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_57414__$1 = (function (){var statearr_57416 = state_57414;
(statearr_57416[(7)] = inst_57411);

return statearr_57416;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57414__$1,inst_57412);
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
var statearr_57417 = [null,null,null,null,null,null,null,null];
(statearr_57417[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__);

(statearr_57417[(1)] = (1));

return statearr_57417;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____1 = (function (state_57414){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_57414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e57418){if((e57418 instanceof Object)){
var ex__22942__auto__ = e57418;
var statearr_57419_57421 = state_57414;
(statearr_57419_57421[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57414);

return cljs.core.cst$kw$recur;
} else {
throw e57418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__57422 = state_57414;
state_57414 = G__57422;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__ = function(state_57414){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____1.call(this,state_57414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__))
})();
var state__22963__auto__ = (function (){var statearr_57420 = f__22962__auto__.call(null);
(statearr_57420[(6)] = c__22961__auto__);

return statearr_57420;
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
return (function (state_57429){
var state_val_57430 = (state_57429[(1)]);
if((state_val_57430 === (1))){
var inst_57423 = cljs.core.async.timeout.call(null,(2000));
var state_57429__$1 = state_57429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57429__$1,(2),inst_57423);
} else {
if((state_val_57430 === (2))){
var inst_57425 = (state_57429[(2)]);
var inst_57426 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_57427 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_57426);
var state_57429__$1 = (function (){var statearr_57431 = state_57429;
(statearr_57431[(7)] = inst_57425);

return statearr_57431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57429__$1,inst_57427);
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
var statearr_57432 = [null,null,null,null,null,null,null,null];
(statearr_57432[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__);

(statearr_57432[(1)] = (1));

return statearr_57432;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____1 = (function (state_57429){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_57429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e57433){if((e57433 instanceof Object)){
var ex__22942__auto__ = e57433;
var statearr_57434_57436 = state_57429;
(statearr_57434_57436[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57429);

return cljs.core.cst$kw$recur;
} else {
throw e57433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__57437 = state_57429;
state_57429 = G__57437;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__ = function(state_57429){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____1.call(this,state_57429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__,figwheel_version,temp__5457__auto__))
})();
var state__22963__auto__ = (function (){var statearr_57435 = f__22962__auto__.call(null);
(statearr_57435[(6)] = c__22961__auto__);

return statearr_57435;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__57438){
var map__57439 = p__57438;
var map__57439__$1 = (((((!((map__57439 == null))))?(((((map__57439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57439):map__57439);
var file = cljs.core.get.call(null,map__57439__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.call(null,map__57439__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.call(null,map__57439__$1,cljs.core.cst$kw$column);
var G__57441 = "";
var G__57441__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57441),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__57441);
var G__57441__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57441__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__57441__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57441__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__57441__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__57442){
var map__57443 = p__57442;
var map__57443__$1 = (((((!((map__57443 == null))))?(((((map__57443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57443):map__57443);
var ed = map__57443__$1;
var formatted_exception = cljs.core.get.call(null,map__57443__$1,cljs.core.cst$kw$formatted_DASH_exception);
var exception_data = cljs.core.get.call(null,map__57443__$1,cljs.core.cst$kw$exception_DASH_data);
var cause = cljs.core.get.call(null,map__57443__$1,cljs.core.cst$kw$cause);
figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: Compile Exception");

var seq__57445_57449 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__57446_57450 = null;
var count__57447_57451 = (0);
var i__57448_57452 = (0);
while(true){
if((i__57448_57452 < count__57447_57451)){
var msg_57453 = cljs.core._nth.call(null,chunk__57446_57450,i__57448_57452);
figwheel.client.utils.log.call(null,cljs.core.cst$kw$info,msg_57453);


var G__57454 = seq__57445_57449;
var G__57455 = chunk__57446_57450;
var G__57456 = count__57447_57451;
var G__57457 = (i__57448_57452 + (1));
seq__57445_57449 = G__57454;
chunk__57446_57450 = G__57455;
count__57447_57451 = G__57456;
i__57448_57452 = G__57457;
continue;
} else {
var temp__5457__auto___57458 = cljs.core.seq.call(null,seq__57445_57449);
if(temp__5457__auto___57458){
var seq__57445_57459__$1 = temp__5457__auto___57458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57445_57459__$1)){
var c__4461__auto___57460 = cljs.core.chunk_first.call(null,seq__57445_57459__$1);
var G__57461 = cljs.core.chunk_rest.call(null,seq__57445_57459__$1);
var G__57462 = c__4461__auto___57460;
var G__57463 = cljs.core.count.call(null,c__4461__auto___57460);
var G__57464 = (0);
seq__57445_57449 = G__57461;
chunk__57446_57450 = G__57462;
count__57447_57451 = G__57463;
i__57448_57452 = G__57464;
continue;
} else {
var msg_57465 = cljs.core.first.call(null,seq__57445_57459__$1);
figwheel.client.utils.log.call(null,cljs.core.cst$kw$info,msg_57465);


var G__57466 = cljs.core.next.call(null,seq__57445_57459__$1);
var G__57467 = null;
var G__57468 = (0);
var G__57469 = (0);
seq__57445_57449 = G__57466;
chunk__57446_57450 = G__57467;
count__57447_57451 = G__57468;
i__57448_57452 = G__57469;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__57470){
var map__57471 = p__57470;
var map__57471__$1 = (((((!((map__57471 == null))))?(((((map__57471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57471):map__57471);
var w = map__57471__$1;
var message = cljs.core.get.call(null,map__57471__$1,cljs.core.cst$kw$message);
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
var seq__57473 = cljs.core.seq.call(null,plugins);
var chunk__57474 = null;
var count__57475 = (0);
var i__57476 = (0);
while(true){
if((i__57476 < count__57475)){
var vec__57477 = cljs.core._nth.call(null,chunk__57474,i__57476);
var k = cljs.core.nth.call(null,vec__57477,(0),null);
var plugin = cljs.core.nth.call(null,vec__57477,(1),null);
if(cljs.core.truth_(plugin)){
var pl_57483 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__57473,chunk__57474,count__57475,i__57476,pl_57483,vec__57477,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_57483.call(null,msg_hist);
});})(seq__57473,chunk__57474,count__57475,i__57476,pl_57483,vec__57477,k,plugin))
);
} else {
}


var G__57484 = seq__57473;
var G__57485 = chunk__57474;
var G__57486 = count__57475;
var G__57487 = (i__57476 + (1));
seq__57473 = G__57484;
chunk__57474 = G__57485;
count__57475 = G__57486;
i__57476 = G__57487;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__57473);
if(temp__5457__auto__){
var seq__57473__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57473__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__57473__$1);
var G__57488 = cljs.core.chunk_rest.call(null,seq__57473__$1);
var G__57489 = c__4461__auto__;
var G__57490 = cljs.core.count.call(null,c__4461__auto__);
var G__57491 = (0);
seq__57473 = G__57488;
chunk__57474 = G__57489;
count__57475 = G__57490;
i__57476 = G__57491;
continue;
} else {
var vec__57480 = cljs.core.first.call(null,seq__57473__$1);
var k = cljs.core.nth.call(null,vec__57480,(0),null);
var plugin = cljs.core.nth.call(null,vec__57480,(1),null);
if(cljs.core.truth_(plugin)){
var pl_57492 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__57473,chunk__57474,count__57475,i__57476,pl_57492,vec__57480,k,plugin,seq__57473__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_57492.call(null,msg_hist);
});})(seq__57473,chunk__57474,count__57475,i__57476,pl_57492,vec__57480,k,plugin,seq__57473__$1,temp__5457__auto__))
);
} else {
}


var G__57493 = cljs.core.next.call(null,seq__57473__$1);
var G__57494 = null;
var G__57495 = (0);
var G__57496 = (0);
seq__57473 = G__57493;
chunk__57474 = G__57494;
count__57475 = G__57495;
i__57476 = G__57496;
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
var G__57498 = arguments.length;
switch (G__57498) {
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

var seq__57499_57504 = cljs.core.seq.call(null,cljs.core.cst$kw$initial_DASH_messages.cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__57500_57505 = null;
var count__57501_57506 = (0);
var i__57502_57507 = (0);
while(true){
if((i__57502_57507 < count__57501_57506)){
var msg_57508 = cljs.core._nth.call(null,chunk__57500_57505,i__57502_57507);
figwheel.client.socket.handle_incoming_message.call(null,msg_57508);


var G__57509 = seq__57499_57504;
var G__57510 = chunk__57500_57505;
var G__57511 = count__57501_57506;
var G__57512 = (i__57502_57507 + (1));
seq__57499_57504 = G__57509;
chunk__57500_57505 = G__57510;
count__57501_57506 = G__57511;
i__57502_57507 = G__57512;
continue;
} else {
var temp__5457__auto___57513 = cljs.core.seq.call(null,seq__57499_57504);
if(temp__5457__auto___57513){
var seq__57499_57514__$1 = temp__5457__auto___57513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57499_57514__$1)){
var c__4461__auto___57515 = cljs.core.chunk_first.call(null,seq__57499_57514__$1);
var G__57516 = cljs.core.chunk_rest.call(null,seq__57499_57514__$1);
var G__57517 = c__4461__auto___57515;
var G__57518 = cljs.core.count.call(null,c__4461__auto___57515);
var G__57519 = (0);
seq__57499_57504 = G__57516;
chunk__57500_57505 = G__57517;
count__57501_57506 = G__57518;
i__57502_57507 = G__57519;
continue;
} else {
var msg_57520 = cljs.core.first.call(null,seq__57499_57514__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_57520);


var G__57521 = cljs.core.next.call(null,seq__57499_57514__$1);
var G__57522 = null;
var G__57523 = (0);
var G__57524 = (0);
seq__57499_57504 = G__57521;
chunk__57500_57505 = G__57522;
count__57501_57506 = G__57523;
i__57502_57507 = G__57524;
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
var len__4641__auto___57529 = arguments.length;
var i__4642__auto___57530 = (0);
while(true){
if((i__4642__auto___57530 < len__4641__auto___57529)){
args__4647__auto__.push((arguments[i__4642__auto___57530]));

var G__57531 = (i__4642__auto___57530 + (1));
i__4642__auto___57530 = G__57531;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__57526){
var map__57527 = p__57526;
var map__57527__$1 = (((((!((map__57527 == null))))?(((((map__57527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57527):map__57527);
var opts = map__57527__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq57525){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57525));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e57532){if((e57532 instanceof Error)){
var e = e57532;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$autoload,false], null);
} else {
throw e57532;

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
return (function (p__57533){
var map__57534 = p__57533;
var map__57534__$1 = (((((!((map__57534 == null))))?(((((map__57534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57534):map__57534);
var msg_name = cljs.core.get.call(null,map__57534__$1,cljs.core.cst$kw$msg_DASH_name);
if(cljs.core._EQ_.call(null,msg_name,cljs.core.cst$kw$files_DASH_changed)){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1545321278639
