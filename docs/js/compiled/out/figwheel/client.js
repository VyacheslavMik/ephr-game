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
}catch (e82486){if((e82486 instanceof Error)){
var e = e82486;
return "Error: Unable to stringify";
} else {
throw e82486;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__82489 = arguments.length;
switch (G__82489) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$figwheel_DASH_event,"callback",cljs.core.cst$kw$callback_DASH_name,"figwheel-repl-print",cljs.core.cst$kw$content,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stream,stream,cljs.core.cst$kw$args,cljs.core.mapv.call(null,(function (p1__82487_SHARP_){
if(typeof p1__82487_SHARP_ === 'string'){
return p1__82487_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__82487_SHARP_);
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
var len__4641__auto___82492 = arguments.length;
var i__4642__auto___82493 = (0);
while(true){
if((i__4642__auto___82493 < len__4641__auto___82492)){
args__4647__auto__.push((arguments[i__4642__auto___82493]));

var G__82494 = (i__4642__auto___82493 + (1));
i__4642__auto___82493 = G__82494;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq82491){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82491));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___82496 = arguments.length;
var i__4642__auto___82497 = (0);
while(true){
if((i__4642__auto___82497 < len__4641__auto___82496)){
args__4647__auto__.push((arguments[i__4642__auto___82497]));

var G__82498 = (i__4642__auto___82497 + (1));
i__4642__auto___82497 = G__82498;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq82495){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82495));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__82499){
var map__82500 = p__82499;
var map__82500__$1 = (((((!((map__82500 == null))))?(((((map__82500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82500):map__82500);
var message = cljs.core.get.call(null,map__82500__$1,cljs.core.cst$kw$message);
var class$ = cljs.core.get.call(null,map__82500__$1,cljs.core.cst$kw$class);
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
var c__22961__auto___82579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22961__auto___82579,ch){
return (function (){
var f__22962__auto__ = (function (){var switch__22938__auto__ = ((function (c__22961__auto___82579,ch){
return (function (state_82551){
var state_val_82552 = (state_82551[(1)]);
if((state_val_82552 === (7))){
var inst_82547 = (state_82551[(2)]);
var state_82551__$1 = state_82551;
var statearr_82553_82580 = state_82551__$1;
(statearr_82553_82580[(2)] = inst_82547);

(statearr_82553_82580[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82552 === (1))){
var state_82551__$1 = state_82551;
var statearr_82554_82581 = state_82551__$1;
(statearr_82554_82581[(2)] = null);

(statearr_82554_82581[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82552 === (4))){
var inst_82504 = (state_82551[(7)]);
var inst_82504__$1 = (state_82551[(2)]);
var state_82551__$1 = (function (){var statearr_82555 = state_82551;
(statearr_82555[(7)] = inst_82504__$1);

return statearr_82555;
})();
if(cljs.core.truth_(inst_82504__$1)){
var statearr_82556_82582 = state_82551__$1;
(statearr_82556_82582[(1)] = (5));

} else {
var statearr_82557_82583 = state_82551__$1;
(statearr_82557_82583[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_82552 === (15))){
var inst_82511 = (state_82551[(8)]);
var inst_82526 = cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(inst_82511);
var inst_82527 = cljs.core.first.call(null,inst_82526);
var inst_82528 = cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(inst_82527);
var inst_82529 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_82528)].join('');
var inst_82530 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$warn,inst_82529);
var state_82551__$1 = state_82551;
var statearr_82558_82584 = state_82551__$1;
(statearr_82558_82584[(2)] = inst_82530);

(statearr_82558_82584[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82552 === (13))){
var inst_82535 = (state_82551[(2)]);
var state_82551__$1 = state_82551;
var statearr_82559_82585 = state_82551__$1;
(statearr_82559_82585[(2)] = inst_82535);

(statearr_82559_82585[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82552 === (6))){
var state_82551__$1 = state_82551;
var statearr_82560_82586 = state_82551__$1;
(statearr_82560_82586[(2)] = null);

(statearr_82560_82586[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82552 === (17))){
var inst_82533 = (state_82551[(2)]);
var state_82551__$1 = state_82551;
var statearr_82561_82587 = state_82551__$1;
(statearr_82561_82587[(2)] = inst_82533);

(statearr_82561_82587[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82552 === (3))){
var inst_82549 = (state_82551[(2)]);
var state_82551__$1 = state_82551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82551__$1,inst_82549);
} else {
if((state_val_82552 === (12))){
var inst_82510 = (state_82551[(9)]);
var inst_82524 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_82510,opts);
var state_82551__$1 = state_82551;
if(inst_82524){
var statearr_82562_82588 = state_82551__$1;
(statearr_82562_82588[(1)] = (15));

} else {
var statearr_82563_82589 = state_82551__$1;
(statearr_82563_82589[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_82552 === (2))){
var state_82551__$1 = state_82551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82551__$1,(4),ch);
} else {
if((state_val_82552 === (11))){
var inst_82511 = (state_82551[(8)]);
var inst_82516 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_82517 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_82511);
var inst_82518 = cljs.core.async.timeout.call(null,(1000));
var inst_82519 = [inst_82517,inst_82518];
var inst_82520 = (new cljs.core.PersistentVector(null,2,(5),inst_82516,inst_82519,null));
var state_82551__$1 = state_82551;
return cljs.core.async.ioc_alts_BANG_.call(null,state_82551__$1,(14),inst_82520);
} else {
if((state_val_82552 === (9))){
var inst_82511 = (state_82551[(8)]);
var inst_82537 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$warn,"Figwheel: code autoloading is OFF");
var inst_82538 = cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(inst_82511);
var inst_82539 = cljs.core.map.call(null,cljs.core.cst$kw$file,inst_82538);
var inst_82540 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_82539)].join('');
var inst_82541 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$info,inst_82540);
var state_82551__$1 = (function (){var statearr_82564 = state_82551;
(statearr_82564[(10)] = inst_82537);

return statearr_82564;
})();
var statearr_82565_82590 = state_82551__$1;
(statearr_82565_82590[(2)] = inst_82541);

(statearr_82565_82590[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82552 === (5))){
var inst_82504 = (state_82551[(7)]);
var inst_82506 = [cljs.core.cst$kw$compile_DASH_warning,null,cljs.core.cst$kw$files_DASH_changed,null];
var inst_82507 = (new cljs.core.PersistentArrayMap(null,2,inst_82506,null));
var inst_82508 = (new cljs.core.PersistentHashSet(null,inst_82507,null));
var inst_82509 = figwheel.client.focus_msgs.call(null,inst_82508,inst_82504);
var inst_82510 = cljs.core.map.call(null,cljs.core.cst$kw$msg_DASH_name,inst_82509);
var inst_82511 = cljs.core.first.call(null,inst_82509);
var inst_82512 = figwheel.client.autoload_QMARK_.call(null);
var state_82551__$1 = (function (){var statearr_82566 = state_82551;
(statearr_82566[(9)] = inst_82510);

(statearr_82566[(8)] = inst_82511);

return statearr_82566;
})();
if(cljs.core.truth_(inst_82512)){
var statearr_82567_82591 = state_82551__$1;
(statearr_82567_82591[(1)] = (8));

} else {
var statearr_82568_82592 = state_82551__$1;
(statearr_82568_82592[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_82552 === (14))){
var inst_82522 = (state_82551[(2)]);
var state_82551__$1 = state_82551;
var statearr_82569_82593 = state_82551__$1;
(statearr_82569_82593[(2)] = inst_82522);

(statearr_82569_82593[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82552 === (16))){
var state_82551__$1 = state_82551;
var statearr_82570_82594 = state_82551__$1;
(statearr_82570_82594[(2)] = null);

(statearr_82570_82594[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82552 === (10))){
var inst_82543 = (state_82551[(2)]);
var state_82551__$1 = (function (){var statearr_82571 = state_82551;
(statearr_82571[(11)] = inst_82543);

return statearr_82571;
})();
var statearr_82572_82595 = state_82551__$1;
(statearr_82572_82595[(2)] = null);

(statearr_82572_82595[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82552 === (8))){
var inst_82510 = (state_82551[(9)]);
var inst_82514 = figwheel.client.reload_file_state_QMARK_.call(null,inst_82510,opts);
var state_82551__$1 = state_82551;
if(cljs.core.truth_(inst_82514)){
var statearr_82573_82596 = state_82551__$1;
(statearr_82573_82596[(1)] = (11));

} else {
var statearr_82574_82597 = state_82551__$1;
(statearr_82574_82597[(1)] = (12));

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
});})(c__22961__auto___82579,ch))
;
return ((function (switch__22938__auto__,c__22961__auto___82579,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____0 = (function (){
var statearr_82575 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82575[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__);

(statearr_82575[(1)] = (1));

return statearr_82575;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____1 = (function (state_82551){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_82551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e82576){if((e82576 instanceof Object)){
var ex__22942__auto__ = e82576;
var statearr_82577_82598 = state_82551;
(statearr_82577_82598[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82551);

return cljs.core.cst$kw$recur;
} else {
throw e82576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__82599 = state_82551;
state_82551 = G__82599;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__ = function(state_82551){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____1.call(this,state_82551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22939__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto___82579,ch))
})();
var state__22963__auto__ = (function (){var statearr_82578 = f__22962__auto__.call(null);
(statearr_82578[(6)] = c__22961__auto___82579);

return statearr_82578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto___82579,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__82600_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__82600_SHARP_));
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
var base_path_82606 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_82606){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__82602 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__82603 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__82604 = false;
var _STAR_print_fn_STAR__temp_val__82605 = ((function (_STAR_print_newline_STAR__orig_val__82602,_STAR_print_fn_STAR__orig_val__82603,_STAR_print_newline_STAR__temp_val__82604,sb,base_path_82606){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__82602,_STAR_print_fn_STAR__orig_val__82603,_STAR_print_newline_STAR__temp_val__82604,sb,base_path_82606))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__82604;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__82605;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$status,cljs.core.cst$kw$success,cljs.core.cst$kw$out,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product.call(null),cljs.core.cst$kw$value,result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__82603;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__82602;
}}catch (e82601){if((e82601 instanceof Error)){
var e = e82601;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$status,cljs.core.cst$kw$exception,cljs.core.cst$kw$value,cljs.core.pr_str.call(null,e),cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product.call(null),cljs.core.cst$kw$stacktrace,clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),cljs.core.cst$kw$base_DASH_path,base_path_82606], null));
} else {
var e = e82601;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$status,cljs.core.cst$kw$exception,cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product.call(null),cljs.core.cst$kw$value,cljs.core.pr_str.call(null,e),cljs.core.cst$kw$stacktrace,"No stacktrace available."], null));

}
}});})(base_path_82606))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__82607){
var map__82608 = p__82607;
var map__82608__$1 = (((((!((map__82608 == null))))?(((((map__82608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82608):map__82608);
var opts = map__82608__$1;
var build_id = cljs.core.get.call(null,map__82608__$1,cljs.core.cst$kw$build_DASH_id);
return ((function (map__82608,map__82608__$1,opts,build_id){
return (function (p__82610){
var vec__82611 = p__82610;
var seq__82612 = cljs.core.seq.call(null,vec__82611);
var first__82613 = cljs.core.first.call(null,seq__82612);
var seq__82612__$1 = cljs.core.next.call(null,seq__82612);
var map__82614 = first__82613;
var map__82614__$1 = (((((!((map__82614 == null))))?(((((map__82614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82614):map__82614);
var msg = map__82614__$1;
var msg_name = cljs.core.get.call(null,map__82614__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = seq__82612__$1;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$repl_DASH_eval,msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__82611,seq__82612,first__82613,seq__82612__$1,map__82614,map__82614__$1,msg,msg_name,_,map__82608,map__82608__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$figwheel_DASH_event,"callback",cljs.core.cst$kw$callback_DASH_name,cljs.core.cst$kw$callback_DASH_name.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.cst$kw$content,res], null));
});})(vec__82611,seq__82612,first__82613,seq__82612__$1,map__82614,map__82614__$1,msg,msg_name,_,map__82608,map__82608__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__82608,map__82608__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__82616){
var vec__82617 = p__82616;
var seq__82618 = cljs.core.seq.call(null,vec__82617);
var first__82619 = cljs.core.first.call(null,seq__82618);
var seq__82618__$1 = cljs.core.next.call(null,seq__82618);
var map__82620 = first__82619;
var map__82620__$1 = (((((!((map__82620 == null))))?(((((map__82620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82620):map__82620);
var msg = map__82620__$1;
var msg_name = cljs.core.get.call(null,map__82620__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = seq__82618__$1;
if(cljs.core._EQ_.call(null,msg_name,cljs.core.cst$kw$css_DASH_files_DASH_changed)){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__82622){
var map__82623 = p__82622;
var map__82623__$1 = (((((!((map__82623 == null))))?(((((map__82623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82623):map__82623);
var on_compile_warning = cljs.core.get.call(null,map__82623__$1,cljs.core.cst$kw$on_DASH_compile_DASH_warning);
var on_compile_fail = cljs.core.get.call(null,map__82623__$1,cljs.core.cst$kw$on_DASH_compile_DASH_fail);
return ((function (map__82623,map__82623__$1,on_compile_warning,on_compile_fail){
return (function (p__82625){
var vec__82626 = p__82625;
var seq__82627 = cljs.core.seq.call(null,vec__82626);
var first__82628 = cljs.core.first.call(null,seq__82627);
var seq__82627__$1 = cljs.core.next.call(null,seq__82627);
var map__82629 = first__82628;
var map__82629__$1 = (((((!((map__82629 == null))))?(((((map__82629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82629):map__82629);
var msg = map__82629__$1;
var msg_name = cljs.core.get.call(null,map__82629__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = seq__82627__$1;
var pred__82631 = cljs.core._EQ_;
var expr__82632 = msg_name;
if(cljs.core.truth_(pred__82631.call(null,cljs.core.cst$kw$compile_DASH_warning,expr__82632))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__82631.call(null,cljs.core.cst$kw$compile_DASH_failed,expr__82632))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__82623,map__82623__$1,on_compile_warning,on_compile_fail))
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
return (function (state_82721){
var state_val_82722 = (state_82721[(1)]);
if((state_val_82722 === (7))){
var inst_82641 = (state_82721[(2)]);
var state_82721__$1 = state_82721;
if(cljs.core.truth_(inst_82641)){
var statearr_82723_82770 = state_82721__$1;
(statearr_82723_82770[(1)] = (8));

} else {
var statearr_82724_82771 = state_82721__$1;
(statearr_82724_82771[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (20))){
var inst_82715 = (state_82721[(2)]);
var state_82721__$1 = state_82721;
var statearr_82725_82772 = state_82721__$1;
(statearr_82725_82772[(2)] = inst_82715);

(statearr_82725_82772[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (27))){
var inst_82711 = (state_82721[(2)]);
var state_82721__$1 = state_82721;
var statearr_82726_82773 = state_82721__$1;
(statearr_82726_82773[(2)] = inst_82711);

(statearr_82726_82773[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (1))){
var inst_82634 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_82721__$1 = state_82721;
if(cljs.core.truth_(inst_82634)){
var statearr_82727_82774 = state_82721__$1;
(statearr_82727_82774[(1)] = (2));

} else {
var statearr_82728_82775 = state_82721__$1;
(statearr_82728_82775[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (24))){
var inst_82713 = (state_82721[(2)]);
var state_82721__$1 = state_82721;
var statearr_82729_82776 = state_82721__$1;
(statearr_82729_82776[(2)] = inst_82713);

(statearr_82729_82776[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (4))){
var inst_82719 = (state_82721[(2)]);
var state_82721__$1 = state_82721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82721__$1,inst_82719);
} else {
if((state_val_82722 === (15))){
var inst_82717 = (state_82721[(2)]);
var state_82721__$1 = state_82721;
var statearr_82730_82777 = state_82721__$1;
(statearr_82730_82777[(2)] = inst_82717);

(statearr_82730_82777[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (21))){
var inst_82670 = (state_82721[(2)]);
var inst_82671 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_82672 = figwheel.client.auto_jump_to_error.call(null,opts,inst_82671);
var state_82721__$1 = (function (){var statearr_82731 = state_82721;
(statearr_82731[(7)] = inst_82670);

return statearr_82731;
})();
var statearr_82732_82778 = state_82721__$1;
(statearr_82732_82778[(2)] = inst_82672);

(statearr_82732_82778[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (31))){
var inst_82700 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_82721__$1 = state_82721;
if(inst_82700){
var statearr_82733_82779 = state_82721__$1;
(statearr_82733_82779[(1)] = (34));

} else {
var statearr_82734_82780 = state_82721__$1;
(statearr_82734_82780[(1)] = (35));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (32))){
var inst_82709 = (state_82721[(2)]);
var state_82721__$1 = state_82721;
var statearr_82735_82781 = state_82721__$1;
(statearr_82735_82781[(2)] = inst_82709);

(statearr_82735_82781[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (33))){
var inst_82696 = (state_82721[(2)]);
var inst_82697 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_82698 = figwheel.client.auto_jump_to_error.call(null,opts,inst_82697);
var state_82721__$1 = (function (){var statearr_82736 = state_82721;
(statearr_82736[(8)] = inst_82696);

return statearr_82736;
})();
var statearr_82737_82782 = state_82721__$1;
(statearr_82737_82782[(2)] = inst_82698);

(statearr_82737_82782[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (13))){
var inst_82655 = figwheel.client.heads_up.clear.call(null);
var state_82721__$1 = state_82721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82721__$1,(16),inst_82655);
} else {
if((state_val_82722 === (22))){
var inst_82676 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_82677 = figwheel.client.heads_up.append_warning_message.call(null,inst_82676);
var state_82721__$1 = state_82721;
var statearr_82738_82783 = state_82721__$1;
(statearr_82738_82783[(2)] = inst_82677);

(statearr_82738_82783[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (36))){
var inst_82707 = (state_82721[(2)]);
var state_82721__$1 = state_82721;
var statearr_82739_82784 = state_82721__$1;
(statearr_82739_82784[(2)] = inst_82707);

(statearr_82739_82784[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (29))){
var inst_82687 = (state_82721[(2)]);
var inst_82688 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_82689 = figwheel.client.auto_jump_to_error.call(null,opts,inst_82688);
var state_82721__$1 = (function (){var statearr_82740 = state_82721;
(statearr_82740[(9)] = inst_82687);

return statearr_82740;
})();
var statearr_82741_82785 = state_82721__$1;
(statearr_82741_82785[(2)] = inst_82689);

(statearr_82741_82785[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (6))){
var inst_82636 = (state_82721[(10)]);
var state_82721__$1 = state_82721;
var statearr_82742_82786 = state_82721__$1;
(statearr_82742_82786[(2)] = inst_82636);

(statearr_82742_82786[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (28))){
var inst_82683 = (state_82721[(2)]);
var inst_82684 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_82685 = figwheel.client.heads_up.display_warning.call(null,inst_82684);
var state_82721__$1 = (function (){var statearr_82743 = state_82721;
(statearr_82743[(11)] = inst_82683);

return statearr_82743;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82721__$1,(29),inst_82685);
} else {
if((state_val_82722 === (25))){
var inst_82681 = figwheel.client.heads_up.clear.call(null);
var state_82721__$1 = state_82721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82721__$1,(28),inst_82681);
} else {
if((state_val_82722 === (34))){
var inst_82702 = figwheel.client.heads_up.flash_loaded.call(null);
var state_82721__$1 = state_82721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82721__$1,(37),inst_82702);
} else {
if((state_val_82722 === (17))){
var inst_82661 = (state_82721[(2)]);
var inst_82662 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_82663 = figwheel.client.auto_jump_to_error.call(null,opts,inst_82662);
var state_82721__$1 = (function (){var statearr_82744 = state_82721;
(statearr_82744[(12)] = inst_82661);

return statearr_82744;
})();
var statearr_82745_82787 = state_82721__$1;
(statearr_82745_82787[(2)] = inst_82663);

(statearr_82745_82787[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (3))){
var inst_82653 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_82721__$1 = state_82721;
if(inst_82653){
var statearr_82746_82788 = state_82721__$1;
(statearr_82746_82788[(1)] = (13));

} else {
var statearr_82747_82789 = state_82721__$1;
(statearr_82747_82789[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (12))){
var inst_82649 = (state_82721[(2)]);
var state_82721__$1 = state_82721;
var statearr_82748_82790 = state_82721__$1;
(statearr_82748_82790[(2)] = inst_82649);

(statearr_82748_82790[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (2))){
var inst_82636 = (state_82721[(10)]);
var inst_82636__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_82721__$1 = (function (){var statearr_82749 = state_82721;
(statearr_82749[(10)] = inst_82636__$1);

return statearr_82749;
})();
if(cljs.core.truth_(inst_82636__$1)){
var statearr_82750_82791 = state_82721__$1;
(statearr_82750_82791[(1)] = (5));

} else {
var statearr_82751_82792 = state_82721__$1;
(statearr_82751_82792[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (23))){
var inst_82679 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_82721__$1 = state_82721;
if(inst_82679){
var statearr_82752_82793 = state_82721__$1;
(statearr_82752_82793[(1)] = (25));

} else {
var statearr_82753_82794 = state_82721__$1;
(statearr_82753_82794[(1)] = (26));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (35))){
var state_82721__$1 = state_82721;
var statearr_82754_82795 = state_82721__$1;
(statearr_82754_82795[(2)] = null);

(statearr_82754_82795[(1)] = (36));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (19))){
var inst_82674 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_82721__$1 = state_82721;
if(inst_82674){
var statearr_82755_82796 = state_82721__$1;
(statearr_82755_82796[(1)] = (22));

} else {
var statearr_82756_82797 = state_82721__$1;
(statearr_82756_82797[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (11))){
var inst_82645 = (state_82721[(2)]);
var state_82721__$1 = state_82721;
var statearr_82757_82798 = state_82721__$1;
(statearr_82757_82798[(2)] = inst_82645);

(statearr_82757_82798[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (9))){
var inst_82647 = figwheel.client.heads_up.clear.call(null);
var state_82721__$1 = state_82721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82721__$1,(12),inst_82647);
} else {
if((state_val_82722 === (5))){
var inst_82638 = cljs.core.cst$kw$autoload.cljs$core$IFn$_invoke$arity$1(opts);
var state_82721__$1 = state_82721;
var statearr_82758_82799 = state_82721__$1;
(statearr_82758_82799[(2)] = inst_82638);

(statearr_82758_82799[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (14))){
var inst_82665 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_82721__$1 = state_82721;
if(inst_82665){
var statearr_82759_82800 = state_82721__$1;
(statearr_82759_82800[(1)] = (18));

} else {
var statearr_82760_82801 = state_82721__$1;
(statearr_82760_82801[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (26))){
var inst_82691 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_82721__$1 = state_82721;
if(inst_82691){
var statearr_82761_82802 = state_82721__$1;
(statearr_82761_82802[(1)] = (30));

} else {
var statearr_82762_82803 = state_82721__$1;
(statearr_82762_82803[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (16))){
var inst_82657 = (state_82721[(2)]);
var inst_82658 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_82659 = figwheel.client.heads_up.display_exception.call(null,inst_82658);
var state_82721__$1 = (function (){var statearr_82763 = state_82721;
(statearr_82763[(13)] = inst_82657);

return statearr_82763;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82721__$1,(17),inst_82659);
} else {
if((state_val_82722 === (30))){
var inst_82693 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_82694 = figwheel.client.heads_up.display_warning.call(null,inst_82693);
var state_82721__$1 = state_82721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82721__$1,(33),inst_82694);
} else {
if((state_val_82722 === (10))){
var inst_82651 = (state_82721[(2)]);
var state_82721__$1 = state_82721;
var statearr_82764_82804 = state_82721__$1;
(statearr_82764_82804[(2)] = inst_82651);

(statearr_82764_82804[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (18))){
var inst_82667 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_82668 = figwheel.client.heads_up.display_exception.call(null,inst_82667);
var state_82721__$1 = state_82721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82721__$1,(21),inst_82668);
} else {
if((state_val_82722 === (37))){
var inst_82704 = (state_82721[(2)]);
var state_82721__$1 = state_82721;
var statearr_82765_82805 = state_82721__$1;
(statearr_82765_82805[(2)] = inst_82704);

(statearr_82765_82805[(1)] = (36));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82722 === (8))){
var inst_82643 = figwheel.client.heads_up.flash_loaded.call(null);
var state_82721__$1 = state_82721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82721__$1,(11),inst_82643);
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
var statearr_82766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82766[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__);

(statearr_82766[(1)] = (1));

return statearr_82766;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____1 = (function (state_82721){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_82721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e82767){if((e82767 instanceof Object)){
var ex__22942__auto__ = e82767;
var statearr_82768_82806 = state_82721;
(statearr_82768_82806[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82721);

return cljs.core.cst$kw$recur;
} else {
throw e82767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__82807 = state_82721;
state_82721 = G__82807;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__ = function(state_82721){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____1.call(this,state_82721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__,msg_hist,msg_names,msg))
})();
var state__22963__auto__ = (function (){var statearr_82769 = f__22962__auto__.call(null);
(statearr_82769[(6)] = c__22961__auto__);

return statearr_82769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto__,msg_hist,msg_names,msg))
);

return c__22961__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22961__auto___82836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22961__auto___82836,ch){
return (function (){
var f__22962__auto__ = (function (){var switch__22938__auto__ = ((function (c__22961__auto___82836,ch){
return (function (state_82822){
var state_val_82823 = (state_82822[(1)]);
if((state_val_82823 === (1))){
var state_82822__$1 = state_82822;
var statearr_82824_82837 = state_82822__$1;
(statearr_82824_82837[(2)] = null);

(statearr_82824_82837[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82823 === (2))){
var state_82822__$1 = state_82822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82822__$1,(4),ch);
} else {
if((state_val_82823 === (3))){
var inst_82820 = (state_82822[(2)]);
var state_82822__$1 = state_82822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82822__$1,inst_82820);
} else {
if((state_val_82823 === (4))){
var inst_82810 = (state_82822[(7)]);
var inst_82810__$1 = (state_82822[(2)]);
var state_82822__$1 = (function (){var statearr_82825 = state_82822;
(statearr_82825[(7)] = inst_82810__$1);

return statearr_82825;
})();
if(cljs.core.truth_(inst_82810__$1)){
var statearr_82826_82838 = state_82822__$1;
(statearr_82826_82838[(1)] = (5));

} else {
var statearr_82827_82839 = state_82822__$1;
(statearr_82827_82839[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_82823 === (5))){
var inst_82810 = (state_82822[(7)]);
var inst_82812 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_82810);
var state_82822__$1 = state_82822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82822__$1,(8),inst_82812);
} else {
if((state_val_82823 === (6))){
var state_82822__$1 = state_82822;
var statearr_82828_82840 = state_82822__$1;
(statearr_82828_82840[(2)] = null);

(statearr_82828_82840[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82823 === (7))){
var inst_82818 = (state_82822[(2)]);
var state_82822__$1 = state_82822;
var statearr_82829_82841 = state_82822__$1;
(statearr_82829_82841[(2)] = inst_82818);

(statearr_82829_82841[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_82823 === (8))){
var inst_82814 = (state_82822[(2)]);
var state_82822__$1 = (function (){var statearr_82830 = state_82822;
(statearr_82830[(8)] = inst_82814);

return statearr_82830;
})();
var statearr_82831_82842 = state_82822__$1;
(statearr_82831_82842[(2)] = null);

(statearr_82831_82842[(1)] = (2));


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
});})(c__22961__auto___82836,ch))
;
return ((function (switch__22938__auto__,c__22961__auto___82836,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22939__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22939__auto____0 = (function (){
var statearr_82832 = [null,null,null,null,null,null,null,null,null];
(statearr_82832[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22939__auto__);

(statearr_82832[(1)] = (1));

return statearr_82832;
});
var figwheel$client$heads_up_plugin_$_state_machine__22939__auto____1 = (function (state_82822){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_82822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e82833){if((e82833 instanceof Object)){
var ex__22942__auto__ = e82833;
var statearr_82834_82843 = state_82822;
(statearr_82834_82843[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82822);

return cljs.core.cst$kw$recur;
} else {
throw e82833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__82844 = state_82822;
state_82822 = G__82844;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22939__auto__ = function(state_82822){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22939__auto____1.call(this,state_82822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22939__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22939__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto___82836,ch))
})();
var state__22963__auto__ = (function (){var statearr_82835 = f__22962__auto__.call(null);
(statearr_82835[(6)] = c__22961__auto___82836);

return statearr_82835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto___82836,ch))
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
return (function (state_82850){
var state_val_82851 = (state_82850[(1)]);
if((state_val_82851 === (1))){
var inst_82845 = cljs.core.async.timeout.call(null,(3000));
var state_82850__$1 = state_82850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82850__$1,(2),inst_82845);
} else {
if((state_val_82851 === (2))){
var inst_82847 = (state_82850[(2)]);
var inst_82848 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_82850__$1 = (function (){var statearr_82852 = state_82850;
(statearr_82852[(7)] = inst_82847);

return statearr_82852;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82850__$1,inst_82848);
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
var statearr_82853 = [null,null,null,null,null,null,null,null];
(statearr_82853[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__);

(statearr_82853[(1)] = (1));

return statearr_82853;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____1 = (function (state_82850){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_82850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e82854){if((e82854 instanceof Object)){
var ex__22942__auto__ = e82854;
var statearr_82855_82857 = state_82850;
(statearr_82855_82857[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82850);

return cljs.core.cst$kw$recur;
} else {
throw e82854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__82858 = state_82850;
state_82850 = G__82858;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__ = function(state_82850){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____1.call(this,state_82850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22939__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__))
})();
var state__22963__auto__ = (function (){var statearr_82856 = f__22962__auto__.call(null);
(statearr_82856[(6)] = c__22961__auto__);

return statearr_82856;
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
return (function (state_82865){
var state_val_82866 = (state_82865[(1)]);
if((state_val_82866 === (1))){
var inst_82859 = cljs.core.async.timeout.call(null,(2000));
var state_82865__$1 = state_82865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82865__$1,(2),inst_82859);
} else {
if((state_val_82866 === (2))){
var inst_82861 = (state_82865[(2)]);
var inst_82862 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_82863 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_82862);
var state_82865__$1 = (function (){var statearr_82867 = state_82865;
(statearr_82867[(7)] = inst_82861);

return statearr_82867;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82865__$1,inst_82863);
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
var statearr_82868 = [null,null,null,null,null,null,null,null];
(statearr_82868[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__);

(statearr_82868[(1)] = (1));

return statearr_82868;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____1 = (function (state_82865){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_82865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e82869){if((e82869 instanceof Object)){
var ex__22942__auto__ = e82869;
var statearr_82870_82872 = state_82865;
(statearr_82870_82872[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82865);

return cljs.core.cst$kw$recur;
} else {
throw e82869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__82873 = state_82865;
state_82865 = G__82873;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__ = function(state_82865){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____1.call(this,state_82865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__,figwheel_version,temp__5457__auto__))
})();
var state__22963__auto__ = (function (){var statearr_82871 = f__22962__auto__.call(null);
(statearr_82871[(6)] = c__22961__auto__);

return statearr_82871;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__82874){
var map__82875 = p__82874;
var map__82875__$1 = (((((!((map__82875 == null))))?(((((map__82875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82875):map__82875);
var file = cljs.core.get.call(null,map__82875__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.call(null,map__82875__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.call(null,map__82875__$1,cljs.core.cst$kw$column);
var G__82877 = "";
var G__82877__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__82877),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__82877);
var G__82877__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__82877__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__82877__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__82877__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__82877__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__82878){
var map__82879 = p__82878;
var map__82879__$1 = (((((!((map__82879 == null))))?(((((map__82879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82879):map__82879);
var ed = map__82879__$1;
var formatted_exception = cljs.core.get.call(null,map__82879__$1,cljs.core.cst$kw$formatted_DASH_exception);
var exception_data = cljs.core.get.call(null,map__82879__$1,cljs.core.cst$kw$exception_DASH_data);
var cause = cljs.core.get.call(null,map__82879__$1,cljs.core.cst$kw$cause);
figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: Compile Exception");

var seq__82881_82885 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__82882_82886 = null;
var count__82883_82887 = (0);
var i__82884_82888 = (0);
while(true){
if((i__82884_82888 < count__82883_82887)){
var msg_82889 = cljs.core._nth.call(null,chunk__82882_82886,i__82884_82888);
figwheel.client.utils.log.call(null,cljs.core.cst$kw$info,msg_82889);


var G__82890 = seq__82881_82885;
var G__82891 = chunk__82882_82886;
var G__82892 = count__82883_82887;
var G__82893 = (i__82884_82888 + (1));
seq__82881_82885 = G__82890;
chunk__82882_82886 = G__82891;
count__82883_82887 = G__82892;
i__82884_82888 = G__82893;
continue;
} else {
var temp__5457__auto___82894 = cljs.core.seq.call(null,seq__82881_82885);
if(temp__5457__auto___82894){
var seq__82881_82895__$1 = temp__5457__auto___82894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82881_82895__$1)){
var c__4461__auto___82896 = cljs.core.chunk_first.call(null,seq__82881_82895__$1);
var G__82897 = cljs.core.chunk_rest.call(null,seq__82881_82895__$1);
var G__82898 = c__4461__auto___82896;
var G__82899 = cljs.core.count.call(null,c__4461__auto___82896);
var G__82900 = (0);
seq__82881_82885 = G__82897;
chunk__82882_82886 = G__82898;
count__82883_82887 = G__82899;
i__82884_82888 = G__82900;
continue;
} else {
var msg_82901 = cljs.core.first.call(null,seq__82881_82895__$1);
figwheel.client.utils.log.call(null,cljs.core.cst$kw$info,msg_82901);


var G__82902 = cljs.core.next.call(null,seq__82881_82895__$1);
var G__82903 = null;
var G__82904 = (0);
var G__82905 = (0);
seq__82881_82885 = G__82902;
chunk__82882_82886 = G__82903;
count__82883_82887 = G__82904;
i__82884_82888 = G__82905;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__82906){
var map__82907 = p__82906;
var map__82907__$1 = (((((!((map__82907 == null))))?(((((map__82907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82907):map__82907);
var w = map__82907__$1;
var message = cljs.core.get.call(null,map__82907__$1,cljs.core.cst$kw$message);
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
var seq__82909 = cljs.core.seq.call(null,plugins);
var chunk__82910 = null;
var count__82911 = (0);
var i__82912 = (0);
while(true){
if((i__82912 < count__82911)){
var vec__82913 = cljs.core._nth.call(null,chunk__82910,i__82912);
var k = cljs.core.nth.call(null,vec__82913,(0),null);
var plugin = cljs.core.nth.call(null,vec__82913,(1),null);
if(cljs.core.truth_(plugin)){
var pl_82919 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__82909,chunk__82910,count__82911,i__82912,pl_82919,vec__82913,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_82919.call(null,msg_hist);
});})(seq__82909,chunk__82910,count__82911,i__82912,pl_82919,vec__82913,k,plugin))
);
} else {
}


var G__82920 = seq__82909;
var G__82921 = chunk__82910;
var G__82922 = count__82911;
var G__82923 = (i__82912 + (1));
seq__82909 = G__82920;
chunk__82910 = G__82921;
count__82911 = G__82922;
i__82912 = G__82923;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__82909);
if(temp__5457__auto__){
var seq__82909__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82909__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__82909__$1);
var G__82924 = cljs.core.chunk_rest.call(null,seq__82909__$1);
var G__82925 = c__4461__auto__;
var G__82926 = cljs.core.count.call(null,c__4461__auto__);
var G__82927 = (0);
seq__82909 = G__82924;
chunk__82910 = G__82925;
count__82911 = G__82926;
i__82912 = G__82927;
continue;
} else {
var vec__82916 = cljs.core.first.call(null,seq__82909__$1);
var k = cljs.core.nth.call(null,vec__82916,(0),null);
var plugin = cljs.core.nth.call(null,vec__82916,(1),null);
if(cljs.core.truth_(plugin)){
var pl_82928 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__82909,chunk__82910,count__82911,i__82912,pl_82928,vec__82916,k,plugin,seq__82909__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_82928.call(null,msg_hist);
});})(seq__82909,chunk__82910,count__82911,i__82912,pl_82928,vec__82916,k,plugin,seq__82909__$1,temp__5457__auto__))
);
} else {
}


var G__82929 = cljs.core.next.call(null,seq__82909__$1);
var G__82930 = null;
var G__82931 = (0);
var G__82932 = (0);
seq__82909 = G__82929;
chunk__82910 = G__82930;
count__82911 = G__82931;
i__82912 = G__82932;
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
var G__82934 = arguments.length;
switch (G__82934) {
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

var seq__82935_82940 = cljs.core.seq.call(null,cljs.core.cst$kw$initial_DASH_messages.cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__82936_82941 = null;
var count__82937_82942 = (0);
var i__82938_82943 = (0);
while(true){
if((i__82938_82943 < count__82937_82942)){
var msg_82944 = cljs.core._nth.call(null,chunk__82936_82941,i__82938_82943);
figwheel.client.socket.handle_incoming_message.call(null,msg_82944);


var G__82945 = seq__82935_82940;
var G__82946 = chunk__82936_82941;
var G__82947 = count__82937_82942;
var G__82948 = (i__82938_82943 + (1));
seq__82935_82940 = G__82945;
chunk__82936_82941 = G__82946;
count__82937_82942 = G__82947;
i__82938_82943 = G__82948;
continue;
} else {
var temp__5457__auto___82949 = cljs.core.seq.call(null,seq__82935_82940);
if(temp__5457__auto___82949){
var seq__82935_82950__$1 = temp__5457__auto___82949;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82935_82950__$1)){
var c__4461__auto___82951 = cljs.core.chunk_first.call(null,seq__82935_82950__$1);
var G__82952 = cljs.core.chunk_rest.call(null,seq__82935_82950__$1);
var G__82953 = c__4461__auto___82951;
var G__82954 = cljs.core.count.call(null,c__4461__auto___82951);
var G__82955 = (0);
seq__82935_82940 = G__82952;
chunk__82936_82941 = G__82953;
count__82937_82942 = G__82954;
i__82938_82943 = G__82955;
continue;
} else {
var msg_82956 = cljs.core.first.call(null,seq__82935_82950__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_82956);


var G__82957 = cljs.core.next.call(null,seq__82935_82950__$1);
var G__82958 = null;
var G__82959 = (0);
var G__82960 = (0);
seq__82935_82940 = G__82957;
chunk__82936_82941 = G__82958;
count__82937_82942 = G__82959;
i__82938_82943 = G__82960;
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
var len__4641__auto___82965 = arguments.length;
var i__4642__auto___82966 = (0);
while(true){
if((i__4642__auto___82966 < len__4641__auto___82965)){
args__4647__auto__.push((arguments[i__4642__auto___82966]));

var G__82967 = (i__4642__auto___82966 + (1));
i__4642__auto___82966 = G__82967;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__82962){
var map__82963 = p__82962;
var map__82963__$1 = (((((!((map__82963 == null))))?(((((map__82963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82963):map__82963);
var opts = map__82963__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq82961){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82961));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e82968){if((e82968 instanceof Error)){
var e = e82968;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$autoload,false], null);
} else {
throw e82968;

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
return (function (p__82969){
var map__82970 = p__82969;
var map__82970__$1 = (((((!((map__82970 == null))))?(((((map__82970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82970):map__82970);
var msg_name = cljs.core.get.call(null,map__82970__$1,cljs.core.cst$kw$msg_DASH_name);
if(cljs.core._EQ_.call(null,msg_name,cljs.core.cst$kw$files_DASH_changed)){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1545392135532
