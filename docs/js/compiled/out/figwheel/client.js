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
}catch (e42485){if((e42485 instanceof Error)){
var e = e42485;
return "Error: Unable to stringify";
} else {
throw e42485;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__42488 = arguments.length;
switch (G__42488) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$figwheel_DASH_event,"callback",cljs.core.cst$kw$callback_DASH_name,"figwheel-repl-print",cljs.core.cst$kw$content,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stream,stream,cljs.core.cst$kw$args,cljs.core.mapv.call(null,(function (p1__42486_SHARP_){
if(typeof p1__42486_SHARP_ === 'string'){
return p1__42486_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__42486_SHARP_);
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
var len__4641__auto___42491 = arguments.length;
var i__4642__auto___42492 = (0);
while(true){
if((i__4642__auto___42492 < len__4641__auto___42491)){
args__4647__auto__.push((arguments[i__4642__auto___42492]));

var G__42493 = (i__4642__auto___42492 + (1));
i__4642__auto___42492 = G__42493;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq42490){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42490));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___42495 = arguments.length;
var i__4642__auto___42496 = (0);
while(true){
if((i__4642__auto___42496 < len__4641__auto___42495)){
args__4647__auto__.push((arguments[i__4642__auto___42496]));

var G__42497 = (i__4642__auto___42496 + (1));
i__4642__auto___42496 = G__42497;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq42494){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42494));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__42498){
var map__42499 = p__42498;
var map__42499__$1 = (((((!((map__42499 == null))))?(((((map__42499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42499):map__42499);
var message = cljs.core.get.call(null,map__42499__$1,cljs.core.cst$kw$message);
var class$ = cljs.core.get.call(null,map__42499__$1,cljs.core.cst$kw$class);
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
var c__22961__auto___42578 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22961__auto___42578,ch){
return (function (){
var f__22962__auto__ = (function (){var switch__22938__auto__ = ((function (c__22961__auto___42578,ch){
return (function (state_42550){
var state_val_42551 = (state_42550[(1)]);
if((state_val_42551 === (7))){
var inst_42546 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
var statearr_42552_42579 = state_42550__$1;
(statearr_42552_42579[(2)] = inst_42546);

(statearr_42552_42579[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42551 === (1))){
var state_42550__$1 = state_42550;
var statearr_42553_42580 = state_42550__$1;
(statearr_42553_42580[(2)] = null);

(statearr_42553_42580[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42551 === (4))){
var inst_42503 = (state_42550[(7)]);
var inst_42503__$1 = (state_42550[(2)]);
var state_42550__$1 = (function (){var statearr_42554 = state_42550;
(statearr_42554[(7)] = inst_42503__$1);

return statearr_42554;
})();
if(cljs.core.truth_(inst_42503__$1)){
var statearr_42555_42581 = state_42550__$1;
(statearr_42555_42581[(1)] = (5));

} else {
var statearr_42556_42582 = state_42550__$1;
(statearr_42556_42582[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42551 === (15))){
var inst_42510 = (state_42550[(8)]);
var inst_42525 = cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(inst_42510);
var inst_42526 = cljs.core.first.call(null,inst_42525);
var inst_42527 = cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(inst_42526);
var inst_42528 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42527)].join('');
var inst_42529 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$warn,inst_42528);
var state_42550__$1 = state_42550;
var statearr_42557_42583 = state_42550__$1;
(statearr_42557_42583[(2)] = inst_42529);

(statearr_42557_42583[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42551 === (13))){
var inst_42534 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
var statearr_42558_42584 = state_42550__$1;
(statearr_42558_42584[(2)] = inst_42534);

(statearr_42558_42584[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42551 === (6))){
var state_42550__$1 = state_42550;
var statearr_42559_42585 = state_42550__$1;
(statearr_42559_42585[(2)] = null);

(statearr_42559_42585[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42551 === (17))){
var inst_42532 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
var statearr_42560_42586 = state_42550__$1;
(statearr_42560_42586[(2)] = inst_42532);

(statearr_42560_42586[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42551 === (3))){
var inst_42548 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42550__$1,inst_42548);
} else {
if((state_val_42551 === (12))){
var inst_42509 = (state_42550[(9)]);
var inst_42523 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_42509,opts);
var state_42550__$1 = state_42550;
if(inst_42523){
var statearr_42561_42587 = state_42550__$1;
(statearr_42561_42587[(1)] = (15));

} else {
var statearr_42562_42588 = state_42550__$1;
(statearr_42562_42588[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42551 === (2))){
var state_42550__$1 = state_42550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42550__$1,(4),ch);
} else {
if((state_val_42551 === (11))){
var inst_42510 = (state_42550[(8)]);
var inst_42515 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42516 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_42510);
var inst_42517 = cljs.core.async.timeout.call(null,(1000));
var inst_42518 = [inst_42516,inst_42517];
var inst_42519 = (new cljs.core.PersistentVector(null,2,(5),inst_42515,inst_42518,null));
var state_42550__$1 = state_42550;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42550__$1,(14),inst_42519);
} else {
if((state_val_42551 === (9))){
var inst_42510 = (state_42550[(8)]);
var inst_42536 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$warn,"Figwheel: code autoloading is OFF");
var inst_42537 = cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(inst_42510);
var inst_42538 = cljs.core.map.call(null,cljs.core.cst$kw$file,inst_42537);
var inst_42539 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42538)].join('');
var inst_42540 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$info,inst_42539);
var state_42550__$1 = (function (){var statearr_42563 = state_42550;
(statearr_42563[(10)] = inst_42536);

return statearr_42563;
})();
var statearr_42564_42589 = state_42550__$1;
(statearr_42564_42589[(2)] = inst_42540);

(statearr_42564_42589[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42551 === (5))){
var inst_42503 = (state_42550[(7)]);
var inst_42505 = [cljs.core.cst$kw$compile_DASH_warning,null,cljs.core.cst$kw$files_DASH_changed,null];
var inst_42506 = (new cljs.core.PersistentArrayMap(null,2,inst_42505,null));
var inst_42507 = (new cljs.core.PersistentHashSet(null,inst_42506,null));
var inst_42508 = figwheel.client.focus_msgs.call(null,inst_42507,inst_42503);
var inst_42509 = cljs.core.map.call(null,cljs.core.cst$kw$msg_DASH_name,inst_42508);
var inst_42510 = cljs.core.first.call(null,inst_42508);
var inst_42511 = figwheel.client.autoload_QMARK_.call(null);
var state_42550__$1 = (function (){var statearr_42565 = state_42550;
(statearr_42565[(9)] = inst_42509);

(statearr_42565[(8)] = inst_42510);

return statearr_42565;
})();
if(cljs.core.truth_(inst_42511)){
var statearr_42566_42590 = state_42550__$1;
(statearr_42566_42590[(1)] = (8));

} else {
var statearr_42567_42591 = state_42550__$1;
(statearr_42567_42591[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42551 === (14))){
var inst_42521 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
var statearr_42568_42592 = state_42550__$1;
(statearr_42568_42592[(2)] = inst_42521);

(statearr_42568_42592[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42551 === (16))){
var state_42550__$1 = state_42550;
var statearr_42569_42593 = state_42550__$1;
(statearr_42569_42593[(2)] = null);

(statearr_42569_42593[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42551 === (10))){
var inst_42542 = (state_42550[(2)]);
var state_42550__$1 = (function (){var statearr_42570 = state_42550;
(statearr_42570[(11)] = inst_42542);

return statearr_42570;
})();
var statearr_42571_42594 = state_42550__$1;
(statearr_42571_42594[(2)] = null);

(statearr_42571_42594[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42551 === (8))){
var inst_42509 = (state_42550[(9)]);
var inst_42513 = figwheel.client.reload_file_state_QMARK_.call(null,inst_42509,opts);
var state_42550__$1 = state_42550;
if(cljs.core.truth_(inst_42513)){
var statearr_42572_42595 = state_42550__$1;
(statearr_42572_42595[(1)] = (11));

} else {
var statearr_42573_42596 = state_42550__$1;
(statearr_42573_42596[(1)] = (12));

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
});})(c__22961__auto___42578,ch))
;
return ((function (switch__22938__auto__,c__22961__auto___42578,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____0 = (function (){
var statearr_42574 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42574[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__);

(statearr_42574[(1)] = (1));

return statearr_42574;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____1 = (function (state_42550){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_42550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e42575){if((e42575 instanceof Object)){
var ex__22942__auto__ = e42575;
var statearr_42576_42597 = state_42550;
(statearr_42576_42597[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42550);

return cljs.core.cst$kw$recur;
} else {
throw e42575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__42598 = state_42550;
state_42550 = G__42598;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__ = function(state_42550){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____1.call(this,state_42550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto___42578,ch))
})();
var state__22963__auto__ = (function (){var statearr_42577 = f__22962__auto__.call(null);
(statearr_42577[(6)] = c__22961__auto___42578);

return statearr_42577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto___42578,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__42599_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__42599_SHARP_));
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
var base_path_42605 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_42605){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42601 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42602 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42603 = false;
var _STAR_print_fn_STAR__temp_val__42604 = ((function (_STAR_print_newline_STAR__orig_val__42601,_STAR_print_fn_STAR__orig_val__42602,_STAR_print_newline_STAR__temp_val__42603,sb,base_path_42605){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__42601,_STAR_print_fn_STAR__orig_val__42602,_STAR_print_newline_STAR__temp_val__42603,sb,base_path_42605))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42603;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42604;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$status,cljs.core.cst$kw$success,cljs.core.cst$kw$out,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product.call(null),cljs.core.cst$kw$value,result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42602;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42601;
}}catch (e42600){if((e42600 instanceof Error)){
var e = e42600;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$status,cljs.core.cst$kw$exception,cljs.core.cst$kw$value,cljs.core.pr_str.call(null,e),cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product.call(null),cljs.core.cst$kw$stacktrace,clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),cljs.core.cst$kw$base_DASH_path,base_path_42605], null));
} else {
var e = e42600;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$status,cljs.core.cst$kw$exception,cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product.call(null),cljs.core.cst$kw$value,cljs.core.pr_str.call(null,e),cljs.core.cst$kw$stacktrace,"No stacktrace available."], null));

}
}});})(base_path_42605))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__42606){
var map__42607 = p__42606;
var map__42607__$1 = (((((!((map__42607 == null))))?(((((map__42607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42607):map__42607);
var opts = map__42607__$1;
var build_id = cljs.core.get.call(null,map__42607__$1,cljs.core.cst$kw$build_DASH_id);
return ((function (map__42607,map__42607__$1,opts,build_id){
return (function (p__42609){
var vec__42610 = p__42609;
var seq__42611 = cljs.core.seq.call(null,vec__42610);
var first__42612 = cljs.core.first.call(null,seq__42611);
var seq__42611__$1 = cljs.core.next.call(null,seq__42611);
var map__42613 = first__42612;
var map__42613__$1 = (((((!((map__42613 == null))))?(((((map__42613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42613):map__42613);
var msg = map__42613__$1;
var msg_name = cljs.core.get.call(null,map__42613__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = seq__42611__$1;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$repl_DASH_eval,msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__42610,seq__42611,first__42612,seq__42611__$1,map__42613,map__42613__$1,msg,msg_name,_,map__42607,map__42607__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$figwheel_DASH_event,"callback",cljs.core.cst$kw$callback_DASH_name,cljs.core.cst$kw$callback_DASH_name.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.cst$kw$content,res], null));
});})(vec__42610,seq__42611,first__42612,seq__42611__$1,map__42613,map__42613__$1,msg,msg_name,_,map__42607,map__42607__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__42607,map__42607__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__42615){
var vec__42616 = p__42615;
var seq__42617 = cljs.core.seq.call(null,vec__42616);
var first__42618 = cljs.core.first.call(null,seq__42617);
var seq__42617__$1 = cljs.core.next.call(null,seq__42617);
var map__42619 = first__42618;
var map__42619__$1 = (((((!((map__42619 == null))))?(((((map__42619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42619):map__42619);
var msg = map__42619__$1;
var msg_name = cljs.core.get.call(null,map__42619__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = seq__42617__$1;
if(cljs.core._EQ_.call(null,msg_name,cljs.core.cst$kw$css_DASH_files_DASH_changed)){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__42621){
var map__42622 = p__42621;
var map__42622__$1 = (((((!((map__42622 == null))))?(((((map__42622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42622):map__42622);
var on_compile_warning = cljs.core.get.call(null,map__42622__$1,cljs.core.cst$kw$on_DASH_compile_DASH_warning);
var on_compile_fail = cljs.core.get.call(null,map__42622__$1,cljs.core.cst$kw$on_DASH_compile_DASH_fail);
return ((function (map__42622,map__42622__$1,on_compile_warning,on_compile_fail){
return (function (p__42624){
var vec__42625 = p__42624;
var seq__42626 = cljs.core.seq.call(null,vec__42625);
var first__42627 = cljs.core.first.call(null,seq__42626);
var seq__42626__$1 = cljs.core.next.call(null,seq__42626);
var map__42628 = first__42627;
var map__42628__$1 = (((((!((map__42628 == null))))?(((((map__42628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42628):map__42628);
var msg = map__42628__$1;
var msg_name = cljs.core.get.call(null,map__42628__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = seq__42626__$1;
var pred__42630 = cljs.core._EQ_;
var expr__42631 = msg_name;
if(cljs.core.truth_(pred__42630.call(null,cljs.core.cst$kw$compile_DASH_warning,expr__42631))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__42630.call(null,cljs.core.cst$kw$compile_DASH_failed,expr__42631))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__42622,map__42622__$1,on_compile_warning,on_compile_fail))
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
return (function (state_42720){
var state_val_42721 = (state_42720[(1)]);
if((state_val_42721 === (7))){
var inst_42640 = (state_42720[(2)]);
var state_42720__$1 = state_42720;
if(cljs.core.truth_(inst_42640)){
var statearr_42722_42769 = state_42720__$1;
(statearr_42722_42769[(1)] = (8));

} else {
var statearr_42723_42770 = state_42720__$1;
(statearr_42723_42770[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (20))){
var inst_42714 = (state_42720[(2)]);
var state_42720__$1 = state_42720;
var statearr_42724_42771 = state_42720__$1;
(statearr_42724_42771[(2)] = inst_42714);

(statearr_42724_42771[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (27))){
var inst_42710 = (state_42720[(2)]);
var state_42720__$1 = state_42720;
var statearr_42725_42772 = state_42720__$1;
(statearr_42725_42772[(2)] = inst_42710);

(statearr_42725_42772[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (1))){
var inst_42633 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_42720__$1 = state_42720;
if(cljs.core.truth_(inst_42633)){
var statearr_42726_42773 = state_42720__$1;
(statearr_42726_42773[(1)] = (2));

} else {
var statearr_42727_42774 = state_42720__$1;
(statearr_42727_42774[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (24))){
var inst_42712 = (state_42720[(2)]);
var state_42720__$1 = state_42720;
var statearr_42728_42775 = state_42720__$1;
(statearr_42728_42775[(2)] = inst_42712);

(statearr_42728_42775[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (4))){
var inst_42718 = (state_42720[(2)]);
var state_42720__$1 = state_42720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42720__$1,inst_42718);
} else {
if((state_val_42721 === (15))){
var inst_42716 = (state_42720[(2)]);
var state_42720__$1 = state_42720;
var statearr_42729_42776 = state_42720__$1;
(statearr_42729_42776[(2)] = inst_42716);

(statearr_42729_42776[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (21))){
var inst_42669 = (state_42720[(2)]);
var inst_42670 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_42671 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42670);
var state_42720__$1 = (function (){var statearr_42730 = state_42720;
(statearr_42730[(7)] = inst_42669);

return statearr_42730;
})();
var statearr_42731_42777 = state_42720__$1;
(statearr_42731_42777[(2)] = inst_42671);

(statearr_42731_42777[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (31))){
var inst_42699 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_42720__$1 = state_42720;
if(inst_42699){
var statearr_42732_42778 = state_42720__$1;
(statearr_42732_42778[(1)] = (34));

} else {
var statearr_42733_42779 = state_42720__$1;
(statearr_42733_42779[(1)] = (35));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (32))){
var inst_42708 = (state_42720[(2)]);
var state_42720__$1 = state_42720;
var statearr_42734_42780 = state_42720__$1;
(statearr_42734_42780[(2)] = inst_42708);

(statearr_42734_42780[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (33))){
var inst_42695 = (state_42720[(2)]);
var inst_42696 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_42697 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42696);
var state_42720__$1 = (function (){var statearr_42735 = state_42720;
(statearr_42735[(8)] = inst_42695);

return statearr_42735;
})();
var statearr_42736_42781 = state_42720__$1;
(statearr_42736_42781[(2)] = inst_42697);

(statearr_42736_42781[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (13))){
var inst_42654 = figwheel.client.heads_up.clear.call(null);
var state_42720__$1 = state_42720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42720__$1,(16),inst_42654);
} else {
if((state_val_42721 === (22))){
var inst_42675 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_42676 = figwheel.client.heads_up.append_warning_message.call(null,inst_42675);
var state_42720__$1 = state_42720;
var statearr_42737_42782 = state_42720__$1;
(statearr_42737_42782[(2)] = inst_42676);

(statearr_42737_42782[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (36))){
var inst_42706 = (state_42720[(2)]);
var state_42720__$1 = state_42720;
var statearr_42738_42783 = state_42720__$1;
(statearr_42738_42783[(2)] = inst_42706);

(statearr_42738_42783[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (29))){
var inst_42686 = (state_42720[(2)]);
var inst_42687 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_42688 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42687);
var state_42720__$1 = (function (){var statearr_42739 = state_42720;
(statearr_42739[(9)] = inst_42686);

return statearr_42739;
})();
var statearr_42740_42784 = state_42720__$1;
(statearr_42740_42784[(2)] = inst_42688);

(statearr_42740_42784[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (6))){
var inst_42635 = (state_42720[(10)]);
var state_42720__$1 = state_42720;
var statearr_42741_42785 = state_42720__$1;
(statearr_42741_42785[(2)] = inst_42635);

(statearr_42741_42785[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (28))){
var inst_42682 = (state_42720[(2)]);
var inst_42683 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_42684 = figwheel.client.heads_up.display_warning.call(null,inst_42683);
var state_42720__$1 = (function (){var statearr_42742 = state_42720;
(statearr_42742[(11)] = inst_42682);

return statearr_42742;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42720__$1,(29),inst_42684);
} else {
if((state_val_42721 === (25))){
var inst_42680 = figwheel.client.heads_up.clear.call(null);
var state_42720__$1 = state_42720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42720__$1,(28),inst_42680);
} else {
if((state_val_42721 === (34))){
var inst_42701 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42720__$1 = state_42720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42720__$1,(37),inst_42701);
} else {
if((state_val_42721 === (17))){
var inst_42660 = (state_42720[(2)]);
var inst_42661 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_42662 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42661);
var state_42720__$1 = (function (){var statearr_42743 = state_42720;
(statearr_42743[(12)] = inst_42660);

return statearr_42743;
})();
var statearr_42744_42786 = state_42720__$1;
(statearr_42744_42786[(2)] = inst_42662);

(statearr_42744_42786[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (3))){
var inst_42652 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_42720__$1 = state_42720;
if(inst_42652){
var statearr_42745_42787 = state_42720__$1;
(statearr_42745_42787[(1)] = (13));

} else {
var statearr_42746_42788 = state_42720__$1;
(statearr_42746_42788[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (12))){
var inst_42648 = (state_42720[(2)]);
var state_42720__$1 = state_42720;
var statearr_42747_42789 = state_42720__$1;
(statearr_42747_42789[(2)] = inst_42648);

(statearr_42747_42789[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (2))){
var inst_42635 = (state_42720[(10)]);
var inst_42635__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_42720__$1 = (function (){var statearr_42748 = state_42720;
(statearr_42748[(10)] = inst_42635__$1);

return statearr_42748;
})();
if(cljs.core.truth_(inst_42635__$1)){
var statearr_42749_42790 = state_42720__$1;
(statearr_42749_42790[(1)] = (5));

} else {
var statearr_42750_42791 = state_42720__$1;
(statearr_42750_42791[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (23))){
var inst_42678 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_42720__$1 = state_42720;
if(inst_42678){
var statearr_42751_42792 = state_42720__$1;
(statearr_42751_42792[(1)] = (25));

} else {
var statearr_42752_42793 = state_42720__$1;
(statearr_42752_42793[(1)] = (26));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (35))){
var state_42720__$1 = state_42720;
var statearr_42753_42794 = state_42720__$1;
(statearr_42753_42794[(2)] = null);

(statearr_42753_42794[(1)] = (36));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (19))){
var inst_42673 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_42720__$1 = state_42720;
if(inst_42673){
var statearr_42754_42795 = state_42720__$1;
(statearr_42754_42795[(1)] = (22));

} else {
var statearr_42755_42796 = state_42720__$1;
(statearr_42755_42796[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (11))){
var inst_42644 = (state_42720[(2)]);
var state_42720__$1 = state_42720;
var statearr_42756_42797 = state_42720__$1;
(statearr_42756_42797[(2)] = inst_42644);

(statearr_42756_42797[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (9))){
var inst_42646 = figwheel.client.heads_up.clear.call(null);
var state_42720__$1 = state_42720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42720__$1,(12),inst_42646);
} else {
if((state_val_42721 === (5))){
var inst_42637 = cljs.core.cst$kw$autoload.cljs$core$IFn$_invoke$arity$1(opts);
var state_42720__$1 = state_42720;
var statearr_42757_42798 = state_42720__$1;
(statearr_42757_42798[(2)] = inst_42637);

(statearr_42757_42798[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (14))){
var inst_42664 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_42720__$1 = state_42720;
if(inst_42664){
var statearr_42758_42799 = state_42720__$1;
(statearr_42758_42799[(1)] = (18));

} else {
var statearr_42759_42800 = state_42720__$1;
(statearr_42759_42800[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (26))){
var inst_42690 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_42720__$1 = state_42720;
if(inst_42690){
var statearr_42760_42801 = state_42720__$1;
(statearr_42760_42801[(1)] = (30));

} else {
var statearr_42761_42802 = state_42720__$1;
(statearr_42761_42802[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (16))){
var inst_42656 = (state_42720[(2)]);
var inst_42657 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_42658 = figwheel.client.heads_up.display_exception.call(null,inst_42657);
var state_42720__$1 = (function (){var statearr_42762 = state_42720;
(statearr_42762[(13)] = inst_42656);

return statearr_42762;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42720__$1,(17),inst_42658);
} else {
if((state_val_42721 === (30))){
var inst_42692 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_42693 = figwheel.client.heads_up.display_warning.call(null,inst_42692);
var state_42720__$1 = state_42720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42720__$1,(33),inst_42693);
} else {
if((state_val_42721 === (10))){
var inst_42650 = (state_42720[(2)]);
var state_42720__$1 = state_42720;
var statearr_42763_42803 = state_42720__$1;
(statearr_42763_42803[(2)] = inst_42650);

(statearr_42763_42803[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (18))){
var inst_42666 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_42667 = figwheel.client.heads_up.display_exception.call(null,inst_42666);
var state_42720__$1 = state_42720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42720__$1,(21),inst_42667);
} else {
if((state_val_42721 === (37))){
var inst_42703 = (state_42720[(2)]);
var state_42720__$1 = state_42720;
var statearr_42764_42804 = state_42720__$1;
(statearr_42764_42804[(2)] = inst_42703);

(statearr_42764_42804[(1)] = (36));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42721 === (8))){
var inst_42642 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42720__$1 = state_42720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42720__$1,(11),inst_42642);
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
var statearr_42765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42765[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__);

(statearr_42765[(1)] = (1));

return statearr_42765;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____1 = (function (state_42720){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_42720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e42766){if((e42766 instanceof Object)){
var ex__22942__auto__ = e42766;
var statearr_42767_42805 = state_42720;
(statearr_42767_42805[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42720);

return cljs.core.cst$kw$recur;
} else {
throw e42766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__42806 = state_42720;
state_42720 = G__42806;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__ = function(state_42720){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____1.call(this,state_42720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__,msg_hist,msg_names,msg))
})();
var state__22963__auto__ = (function (){var statearr_42768 = f__22962__auto__.call(null);
(statearr_42768[(6)] = c__22961__auto__);

return statearr_42768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto__,msg_hist,msg_names,msg))
);

return c__22961__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22961__auto___42835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22961__auto___42835,ch){
return (function (){
var f__22962__auto__ = (function (){var switch__22938__auto__ = ((function (c__22961__auto___42835,ch){
return (function (state_42821){
var state_val_42822 = (state_42821[(1)]);
if((state_val_42822 === (1))){
var state_42821__$1 = state_42821;
var statearr_42823_42836 = state_42821__$1;
(statearr_42823_42836[(2)] = null);

(statearr_42823_42836[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42822 === (2))){
var state_42821__$1 = state_42821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42821__$1,(4),ch);
} else {
if((state_val_42822 === (3))){
var inst_42819 = (state_42821[(2)]);
var state_42821__$1 = state_42821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42821__$1,inst_42819);
} else {
if((state_val_42822 === (4))){
var inst_42809 = (state_42821[(7)]);
var inst_42809__$1 = (state_42821[(2)]);
var state_42821__$1 = (function (){var statearr_42824 = state_42821;
(statearr_42824[(7)] = inst_42809__$1);

return statearr_42824;
})();
if(cljs.core.truth_(inst_42809__$1)){
var statearr_42825_42837 = state_42821__$1;
(statearr_42825_42837[(1)] = (5));

} else {
var statearr_42826_42838 = state_42821__$1;
(statearr_42826_42838[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42822 === (5))){
var inst_42809 = (state_42821[(7)]);
var inst_42811 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_42809);
var state_42821__$1 = state_42821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42821__$1,(8),inst_42811);
} else {
if((state_val_42822 === (6))){
var state_42821__$1 = state_42821;
var statearr_42827_42839 = state_42821__$1;
(statearr_42827_42839[(2)] = null);

(statearr_42827_42839[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42822 === (7))){
var inst_42817 = (state_42821[(2)]);
var state_42821__$1 = state_42821;
var statearr_42828_42840 = state_42821__$1;
(statearr_42828_42840[(2)] = inst_42817);

(statearr_42828_42840[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42822 === (8))){
var inst_42813 = (state_42821[(2)]);
var state_42821__$1 = (function (){var statearr_42829 = state_42821;
(statearr_42829[(8)] = inst_42813);

return statearr_42829;
})();
var statearr_42830_42841 = state_42821__$1;
(statearr_42830_42841[(2)] = null);

(statearr_42830_42841[(1)] = (2));


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
});})(c__22961__auto___42835,ch))
;
return ((function (switch__22938__auto__,c__22961__auto___42835,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22939__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22939__auto____0 = (function (){
var statearr_42831 = [null,null,null,null,null,null,null,null,null];
(statearr_42831[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22939__auto__);

(statearr_42831[(1)] = (1));

return statearr_42831;
});
var figwheel$client$heads_up_plugin_$_state_machine__22939__auto____1 = (function (state_42821){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_42821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e42832){if((e42832 instanceof Object)){
var ex__22942__auto__ = e42832;
var statearr_42833_42842 = state_42821;
(statearr_42833_42842[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42821);

return cljs.core.cst$kw$recur;
} else {
throw e42832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__42843 = state_42821;
state_42821 = G__42843;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22939__auto__ = function(state_42821){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22939__auto____1.call(this,state_42821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22939__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22939__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto___42835,ch))
})();
var state__22963__auto__ = (function (){var statearr_42834 = f__22962__auto__.call(null);
(statearr_42834[(6)] = c__22961__auto___42835);

return statearr_42834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto___42835,ch))
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
return (function (state_42849){
var state_val_42850 = (state_42849[(1)]);
if((state_val_42850 === (1))){
var inst_42844 = cljs.core.async.timeout.call(null,(3000));
var state_42849__$1 = state_42849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42849__$1,(2),inst_42844);
} else {
if((state_val_42850 === (2))){
var inst_42846 = (state_42849[(2)]);
var inst_42847 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42849__$1 = (function (){var statearr_42851 = state_42849;
(statearr_42851[(7)] = inst_42846);

return statearr_42851;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42849__$1,inst_42847);
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
var statearr_42852 = [null,null,null,null,null,null,null,null];
(statearr_42852[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__);

(statearr_42852[(1)] = (1));

return statearr_42852;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____1 = (function (state_42849){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_42849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e42853){if((e42853 instanceof Object)){
var ex__22942__auto__ = e42853;
var statearr_42854_42856 = state_42849;
(statearr_42854_42856[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42849);

return cljs.core.cst$kw$recur;
} else {
throw e42853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__42857 = state_42849;
state_42849 = G__42857;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__ = function(state_42849){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____1.call(this,state_42849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__))
})();
var state__22963__auto__ = (function (){var statearr_42855 = f__22962__auto__.call(null);
(statearr_42855[(6)] = c__22961__auto__);

return statearr_42855;
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
return (function (state_42864){
var state_val_42865 = (state_42864[(1)]);
if((state_val_42865 === (1))){
var inst_42858 = cljs.core.async.timeout.call(null,(2000));
var state_42864__$1 = state_42864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42864__$1,(2),inst_42858);
} else {
if((state_val_42865 === (2))){
var inst_42860 = (state_42864[(2)]);
var inst_42861 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_42862 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_42861);
var state_42864__$1 = (function (){var statearr_42866 = state_42864;
(statearr_42866[(7)] = inst_42860);

return statearr_42866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42864__$1,inst_42862);
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
var statearr_42867 = [null,null,null,null,null,null,null,null];
(statearr_42867[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__);

(statearr_42867[(1)] = (1));

return statearr_42867;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____1 = (function (state_42864){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_42864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e42868){if((e42868 instanceof Object)){
var ex__22942__auto__ = e42868;
var statearr_42869_42871 = state_42864;
(statearr_42869_42871[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42864);

return cljs.core.cst$kw$recur;
} else {
throw e42868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__42872 = state_42864;
state_42864 = G__42872;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__ = function(state_42864){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____1.call(this,state_42864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__,figwheel_version,temp__5457__auto__))
})();
var state__22963__auto__ = (function (){var statearr_42870 = f__22962__auto__.call(null);
(statearr_42870[(6)] = c__22961__auto__);

return statearr_42870;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__42873){
var map__42874 = p__42873;
var map__42874__$1 = (((((!((map__42874 == null))))?(((((map__42874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42874):map__42874);
var file = cljs.core.get.call(null,map__42874__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.call(null,map__42874__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.call(null,map__42874__$1,cljs.core.cst$kw$column);
var G__42876 = "";
var G__42876__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42876),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__42876);
var G__42876__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42876__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__42876__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42876__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__42876__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42877){
var map__42878 = p__42877;
var map__42878__$1 = (((((!((map__42878 == null))))?(((((map__42878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42878):map__42878);
var ed = map__42878__$1;
var formatted_exception = cljs.core.get.call(null,map__42878__$1,cljs.core.cst$kw$formatted_DASH_exception);
var exception_data = cljs.core.get.call(null,map__42878__$1,cljs.core.cst$kw$exception_DASH_data);
var cause = cljs.core.get.call(null,map__42878__$1,cljs.core.cst$kw$cause);
figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: Compile Exception");

var seq__42880_42884 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42881_42885 = null;
var count__42882_42886 = (0);
var i__42883_42887 = (0);
while(true){
if((i__42883_42887 < count__42882_42886)){
var msg_42888 = cljs.core._nth.call(null,chunk__42881_42885,i__42883_42887);
figwheel.client.utils.log.call(null,cljs.core.cst$kw$info,msg_42888);


var G__42889 = seq__42880_42884;
var G__42890 = chunk__42881_42885;
var G__42891 = count__42882_42886;
var G__42892 = (i__42883_42887 + (1));
seq__42880_42884 = G__42889;
chunk__42881_42885 = G__42890;
count__42882_42886 = G__42891;
i__42883_42887 = G__42892;
continue;
} else {
var temp__5457__auto___42893 = cljs.core.seq.call(null,seq__42880_42884);
if(temp__5457__auto___42893){
var seq__42880_42894__$1 = temp__5457__auto___42893;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42880_42894__$1)){
var c__4461__auto___42895 = cljs.core.chunk_first.call(null,seq__42880_42894__$1);
var G__42896 = cljs.core.chunk_rest.call(null,seq__42880_42894__$1);
var G__42897 = c__4461__auto___42895;
var G__42898 = cljs.core.count.call(null,c__4461__auto___42895);
var G__42899 = (0);
seq__42880_42884 = G__42896;
chunk__42881_42885 = G__42897;
count__42882_42886 = G__42898;
i__42883_42887 = G__42899;
continue;
} else {
var msg_42900 = cljs.core.first.call(null,seq__42880_42894__$1);
figwheel.client.utils.log.call(null,cljs.core.cst$kw$info,msg_42900);


var G__42901 = cljs.core.next.call(null,seq__42880_42894__$1);
var G__42902 = null;
var G__42903 = (0);
var G__42904 = (0);
seq__42880_42884 = G__42901;
chunk__42881_42885 = G__42902;
count__42882_42886 = G__42903;
i__42883_42887 = G__42904;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42905){
var map__42906 = p__42905;
var map__42906__$1 = (((((!((map__42906 == null))))?(((((map__42906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42906):map__42906);
var w = map__42906__$1;
var message = cljs.core.get.call(null,map__42906__$1,cljs.core.cst$kw$message);
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
var seq__42908 = cljs.core.seq.call(null,plugins);
var chunk__42909 = null;
var count__42910 = (0);
var i__42911 = (0);
while(true){
if((i__42911 < count__42910)){
var vec__42912 = cljs.core._nth.call(null,chunk__42909,i__42911);
var k = cljs.core.nth.call(null,vec__42912,(0),null);
var plugin = cljs.core.nth.call(null,vec__42912,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42918 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42908,chunk__42909,count__42910,i__42911,pl_42918,vec__42912,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42918.call(null,msg_hist);
});})(seq__42908,chunk__42909,count__42910,i__42911,pl_42918,vec__42912,k,plugin))
);
} else {
}


var G__42919 = seq__42908;
var G__42920 = chunk__42909;
var G__42921 = count__42910;
var G__42922 = (i__42911 + (1));
seq__42908 = G__42919;
chunk__42909 = G__42920;
count__42910 = G__42921;
i__42911 = G__42922;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__42908);
if(temp__5457__auto__){
var seq__42908__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42908__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__42908__$1);
var G__42923 = cljs.core.chunk_rest.call(null,seq__42908__$1);
var G__42924 = c__4461__auto__;
var G__42925 = cljs.core.count.call(null,c__4461__auto__);
var G__42926 = (0);
seq__42908 = G__42923;
chunk__42909 = G__42924;
count__42910 = G__42925;
i__42911 = G__42926;
continue;
} else {
var vec__42915 = cljs.core.first.call(null,seq__42908__$1);
var k = cljs.core.nth.call(null,vec__42915,(0),null);
var plugin = cljs.core.nth.call(null,vec__42915,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42927 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42908,chunk__42909,count__42910,i__42911,pl_42927,vec__42915,k,plugin,seq__42908__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42927.call(null,msg_hist);
});})(seq__42908,chunk__42909,count__42910,i__42911,pl_42927,vec__42915,k,plugin,seq__42908__$1,temp__5457__auto__))
);
} else {
}


var G__42928 = cljs.core.next.call(null,seq__42908__$1);
var G__42929 = null;
var G__42930 = (0);
var G__42931 = (0);
seq__42908 = G__42928;
chunk__42909 = G__42929;
count__42910 = G__42930;
i__42911 = G__42931;
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
var G__42933 = arguments.length;
switch (G__42933) {
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

var seq__42934_42939 = cljs.core.seq.call(null,cljs.core.cst$kw$initial_DASH_messages.cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__42935_42940 = null;
var count__42936_42941 = (0);
var i__42937_42942 = (0);
while(true){
if((i__42937_42942 < count__42936_42941)){
var msg_42943 = cljs.core._nth.call(null,chunk__42935_42940,i__42937_42942);
figwheel.client.socket.handle_incoming_message.call(null,msg_42943);


var G__42944 = seq__42934_42939;
var G__42945 = chunk__42935_42940;
var G__42946 = count__42936_42941;
var G__42947 = (i__42937_42942 + (1));
seq__42934_42939 = G__42944;
chunk__42935_42940 = G__42945;
count__42936_42941 = G__42946;
i__42937_42942 = G__42947;
continue;
} else {
var temp__5457__auto___42948 = cljs.core.seq.call(null,seq__42934_42939);
if(temp__5457__auto___42948){
var seq__42934_42949__$1 = temp__5457__auto___42948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42934_42949__$1)){
var c__4461__auto___42950 = cljs.core.chunk_first.call(null,seq__42934_42949__$1);
var G__42951 = cljs.core.chunk_rest.call(null,seq__42934_42949__$1);
var G__42952 = c__4461__auto___42950;
var G__42953 = cljs.core.count.call(null,c__4461__auto___42950);
var G__42954 = (0);
seq__42934_42939 = G__42951;
chunk__42935_42940 = G__42952;
count__42936_42941 = G__42953;
i__42937_42942 = G__42954;
continue;
} else {
var msg_42955 = cljs.core.first.call(null,seq__42934_42949__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_42955);


var G__42956 = cljs.core.next.call(null,seq__42934_42949__$1);
var G__42957 = null;
var G__42958 = (0);
var G__42959 = (0);
seq__42934_42939 = G__42956;
chunk__42935_42940 = G__42957;
count__42936_42941 = G__42958;
i__42937_42942 = G__42959;
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
var len__4641__auto___42964 = arguments.length;
var i__4642__auto___42965 = (0);
while(true){
if((i__4642__auto___42965 < len__4641__auto___42964)){
args__4647__auto__.push((arguments[i__4642__auto___42965]));

var G__42966 = (i__4642__auto___42965 + (1));
i__4642__auto___42965 = G__42966;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__42961){
var map__42962 = p__42961;
var map__42962__$1 = (((((!((map__42962 == null))))?(((((map__42962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42962):map__42962);
var opts = map__42962__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq42960){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42960));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e42967){if((e42967 instanceof Error)){
var e = e42967;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$autoload,false], null);
} else {
throw e42967;

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
return (function (p__42968){
var map__42969 = p__42968;
var map__42969__$1 = (((((!((map__42969 == null))))?(((((map__42969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42969):map__42969);
var msg_name = cljs.core.get.call(null,map__42969__$1,cljs.core.cst$kw$msg_DASH_name);
if(cljs.core._EQ_.call(null,msg_name,cljs.core.cst$kw$files_DASH_changed)){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1545307823086
