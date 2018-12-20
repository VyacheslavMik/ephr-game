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
}catch (e57551){if((e57551 instanceof Error)){
var e = e57551;
return "Error: Unable to stringify";
} else {
throw e57551;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__57554 = arguments.length;
switch (G__57554) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$figwheel_DASH_event,"callback",cljs.core.cst$kw$callback_DASH_name,"figwheel-repl-print",cljs.core.cst$kw$content,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stream,stream,cljs.core.cst$kw$args,cljs.core.mapv.call(null,(function (p1__57552_SHARP_){
if(typeof p1__57552_SHARP_ === 'string'){
return p1__57552_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__57552_SHARP_);
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
var len__4641__auto___57557 = arguments.length;
var i__4642__auto___57558 = (0);
while(true){
if((i__4642__auto___57558 < len__4641__auto___57557)){
args__4647__auto__.push((arguments[i__4642__auto___57558]));

var G__57559 = (i__4642__auto___57558 + (1));
i__4642__auto___57558 = G__57559;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq57556){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57556));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___57561 = arguments.length;
var i__4642__auto___57562 = (0);
while(true){
if((i__4642__auto___57562 < len__4641__auto___57561)){
args__4647__auto__.push((arguments[i__4642__auto___57562]));

var G__57563 = (i__4642__auto___57562 + (1));
i__4642__auto___57562 = G__57563;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq57560){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57560));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__57564){
var map__57565 = p__57564;
var map__57565__$1 = (((((!((map__57565 == null))))?(((((map__57565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57565):map__57565);
var message = cljs.core.get.call(null,map__57565__$1,cljs.core.cst$kw$message);
var class$ = cljs.core.get.call(null,map__57565__$1,cljs.core.cst$kw$class);
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
var c__23252__auto___57644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto___57644,ch){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto___57644,ch){
return (function (state_57616){
var state_val_57617 = (state_57616[(1)]);
if((state_val_57617 === (7))){
var inst_57612 = (state_57616[(2)]);
var state_57616__$1 = state_57616;
var statearr_57618_57645 = state_57616__$1;
(statearr_57618_57645[(2)] = inst_57612);

(statearr_57618_57645[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57617 === (1))){
var state_57616__$1 = state_57616;
var statearr_57619_57646 = state_57616__$1;
(statearr_57619_57646[(2)] = null);

(statearr_57619_57646[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57617 === (4))){
var inst_57569 = (state_57616[(7)]);
var inst_57569__$1 = (state_57616[(2)]);
var state_57616__$1 = (function (){var statearr_57620 = state_57616;
(statearr_57620[(7)] = inst_57569__$1);

return statearr_57620;
})();
if(cljs.core.truth_(inst_57569__$1)){
var statearr_57621_57647 = state_57616__$1;
(statearr_57621_57647[(1)] = (5));

} else {
var statearr_57622_57648 = state_57616__$1;
(statearr_57622_57648[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57617 === (15))){
var inst_57576 = (state_57616[(8)]);
var inst_57591 = cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(inst_57576);
var inst_57592 = cljs.core.first.call(null,inst_57591);
var inst_57593 = cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(inst_57592);
var inst_57594 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_57593)].join('');
var inst_57595 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$warn,inst_57594);
var state_57616__$1 = state_57616;
var statearr_57623_57649 = state_57616__$1;
(statearr_57623_57649[(2)] = inst_57595);

(statearr_57623_57649[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57617 === (13))){
var inst_57600 = (state_57616[(2)]);
var state_57616__$1 = state_57616;
var statearr_57624_57650 = state_57616__$1;
(statearr_57624_57650[(2)] = inst_57600);

(statearr_57624_57650[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57617 === (6))){
var state_57616__$1 = state_57616;
var statearr_57625_57651 = state_57616__$1;
(statearr_57625_57651[(2)] = null);

(statearr_57625_57651[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57617 === (17))){
var inst_57598 = (state_57616[(2)]);
var state_57616__$1 = state_57616;
var statearr_57626_57652 = state_57616__$1;
(statearr_57626_57652[(2)] = inst_57598);

(statearr_57626_57652[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57617 === (3))){
var inst_57614 = (state_57616[(2)]);
var state_57616__$1 = state_57616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57616__$1,inst_57614);
} else {
if((state_val_57617 === (12))){
var inst_57575 = (state_57616[(9)]);
var inst_57589 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_57575,opts);
var state_57616__$1 = state_57616;
if(inst_57589){
var statearr_57627_57653 = state_57616__$1;
(statearr_57627_57653[(1)] = (15));

} else {
var statearr_57628_57654 = state_57616__$1;
(statearr_57628_57654[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57617 === (2))){
var state_57616__$1 = state_57616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57616__$1,(4),ch);
} else {
if((state_val_57617 === (11))){
var inst_57576 = (state_57616[(8)]);
var inst_57581 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57582 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_57576);
var inst_57583 = cljs.core.async.timeout.call(null,(1000));
var inst_57584 = [inst_57582,inst_57583];
var inst_57585 = (new cljs.core.PersistentVector(null,2,(5),inst_57581,inst_57584,null));
var state_57616__$1 = state_57616;
return cljs.core.async.ioc_alts_BANG_.call(null,state_57616__$1,(14),inst_57585);
} else {
if((state_val_57617 === (9))){
var inst_57576 = (state_57616[(8)]);
var inst_57602 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$warn,"Figwheel: code autoloading is OFF");
var inst_57603 = cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(inst_57576);
var inst_57604 = cljs.core.map.call(null,cljs.core.cst$kw$file,inst_57603);
var inst_57605 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_57604)].join('');
var inst_57606 = figwheel.client.utils.log.call(null,cljs.core.cst$kw$info,inst_57605);
var state_57616__$1 = (function (){var statearr_57629 = state_57616;
(statearr_57629[(10)] = inst_57602);

return statearr_57629;
})();
var statearr_57630_57655 = state_57616__$1;
(statearr_57630_57655[(2)] = inst_57606);

(statearr_57630_57655[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57617 === (5))){
var inst_57569 = (state_57616[(7)]);
var inst_57571 = [cljs.core.cst$kw$compile_DASH_warning,null,cljs.core.cst$kw$files_DASH_changed,null];
var inst_57572 = (new cljs.core.PersistentArrayMap(null,2,inst_57571,null));
var inst_57573 = (new cljs.core.PersistentHashSet(null,inst_57572,null));
var inst_57574 = figwheel.client.focus_msgs.call(null,inst_57573,inst_57569);
var inst_57575 = cljs.core.map.call(null,cljs.core.cst$kw$msg_DASH_name,inst_57574);
var inst_57576 = cljs.core.first.call(null,inst_57574);
var inst_57577 = figwheel.client.autoload_QMARK_.call(null);
var state_57616__$1 = (function (){var statearr_57631 = state_57616;
(statearr_57631[(9)] = inst_57575);

(statearr_57631[(8)] = inst_57576);

return statearr_57631;
})();
if(cljs.core.truth_(inst_57577)){
var statearr_57632_57656 = state_57616__$1;
(statearr_57632_57656[(1)] = (8));

} else {
var statearr_57633_57657 = state_57616__$1;
(statearr_57633_57657[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57617 === (14))){
var inst_57587 = (state_57616[(2)]);
var state_57616__$1 = state_57616;
var statearr_57634_57658 = state_57616__$1;
(statearr_57634_57658[(2)] = inst_57587);

(statearr_57634_57658[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57617 === (16))){
var state_57616__$1 = state_57616;
var statearr_57635_57659 = state_57616__$1;
(statearr_57635_57659[(2)] = null);

(statearr_57635_57659[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57617 === (10))){
var inst_57608 = (state_57616[(2)]);
var state_57616__$1 = (function (){var statearr_57636 = state_57616;
(statearr_57636[(11)] = inst_57608);

return statearr_57636;
})();
var statearr_57637_57660 = state_57616__$1;
(statearr_57637_57660[(2)] = null);

(statearr_57637_57660[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57617 === (8))){
var inst_57575 = (state_57616[(9)]);
var inst_57579 = figwheel.client.reload_file_state_QMARK_.call(null,inst_57575,opts);
var state_57616__$1 = state_57616;
if(cljs.core.truth_(inst_57579)){
var statearr_57638_57661 = state_57616__$1;
(statearr_57638_57661[(1)] = (11));

} else {
var statearr_57639_57662 = state_57616__$1;
(statearr_57639_57662[(1)] = (12));

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
});})(c__23252__auto___57644,ch))
;
return ((function (switch__23157__auto__,c__23252__auto___57644,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23158__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23158__auto____0 = (function (){
var statearr_57640 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57640[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23158__auto__);

(statearr_57640[(1)] = (1));

return statearr_57640;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23158__auto____1 = (function (state_57616){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_57616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e57641){if((e57641 instanceof Object)){
var ex__23161__auto__ = e57641;
var statearr_57642_57663 = state_57616;
(statearr_57642_57663[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57616);

return cljs.core.cst$kw$recur;
} else {
throw e57641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__57664 = state_57616;
state_57616 = G__57664;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23158__auto__ = function(state_57616){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23158__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23158__auto____1.call(this,state_57616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23158__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23158__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto___57644,ch))
})();
var state__23254__auto__ = (function (){var statearr_57643 = f__23253__auto__.call(null);
(statearr_57643[(6)] = c__23252__auto___57644);

return statearr_57643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto___57644,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__57665_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__57665_SHARP_));
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
var base_path_57671 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_57671){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57667 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57668 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57669 = false;
var _STAR_print_fn_STAR__temp_val__57670 = ((function (_STAR_print_newline_STAR__orig_val__57667,_STAR_print_fn_STAR__orig_val__57668,_STAR_print_newline_STAR__temp_val__57669,sb,base_path_57671){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__57667,_STAR_print_fn_STAR__orig_val__57668,_STAR_print_newline_STAR__temp_val__57669,sb,base_path_57671))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57669;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57670;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$status,cljs.core.cst$kw$success,cljs.core.cst$kw$out,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product.call(null),cljs.core.cst$kw$value,result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57668;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57667;
}}catch (e57666){if((e57666 instanceof Error)){
var e = e57666;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$status,cljs.core.cst$kw$exception,cljs.core.cst$kw$value,cljs.core.pr_str.call(null,e),cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product.call(null),cljs.core.cst$kw$stacktrace,clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),cljs.core.cst$kw$base_DASH_path,base_path_57671], null));
} else {
var e = e57666;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$status,cljs.core.cst$kw$exception,cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product.call(null),cljs.core.cst$kw$value,cljs.core.pr_str.call(null,e),cljs.core.cst$kw$stacktrace,"No stacktrace available."], null));

}
}});})(base_path_57671))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__57672){
var map__57673 = p__57672;
var map__57673__$1 = (((((!((map__57673 == null))))?(((((map__57673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57673):map__57673);
var opts = map__57673__$1;
var build_id = cljs.core.get.call(null,map__57673__$1,cljs.core.cst$kw$build_DASH_id);
return ((function (map__57673,map__57673__$1,opts,build_id){
return (function (p__57675){
var vec__57676 = p__57675;
var seq__57677 = cljs.core.seq.call(null,vec__57676);
var first__57678 = cljs.core.first.call(null,seq__57677);
var seq__57677__$1 = cljs.core.next.call(null,seq__57677);
var map__57679 = first__57678;
var map__57679__$1 = (((((!((map__57679 == null))))?(((((map__57679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57679):map__57679);
var msg = map__57679__$1;
var msg_name = cljs.core.get.call(null,map__57679__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = seq__57677__$1;
if(cljs.core._EQ_.call(null,cljs.core.cst$kw$repl_DASH_eval,msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__57676,seq__57677,first__57678,seq__57677__$1,map__57679,map__57679__$1,msg,msg_name,_,map__57673,map__57673__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$figwheel_DASH_event,"callback",cljs.core.cst$kw$callback_DASH_name,cljs.core.cst$kw$callback_DASH_name.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.cst$kw$content,res], null));
});})(vec__57676,seq__57677,first__57678,seq__57677__$1,map__57679,map__57679__$1,msg,msg_name,_,map__57673,map__57673__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__57673,map__57673__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__57681){
var vec__57682 = p__57681;
var seq__57683 = cljs.core.seq.call(null,vec__57682);
var first__57684 = cljs.core.first.call(null,seq__57683);
var seq__57683__$1 = cljs.core.next.call(null,seq__57683);
var map__57685 = first__57684;
var map__57685__$1 = (((((!((map__57685 == null))))?(((((map__57685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57685):map__57685);
var msg = map__57685__$1;
var msg_name = cljs.core.get.call(null,map__57685__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = seq__57683__$1;
if(cljs.core._EQ_.call(null,msg_name,cljs.core.cst$kw$css_DASH_files_DASH_changed)){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__57687){
var map__57688 = p__57687;
var map__57688__$1 = (((((!((map__57688 == null))))?(((((map__57688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57688):map__57688);
var on_compile_warning = cljs.core.get.call(null,map__57688__$1,cljs.core.cst$kw$on_DASH_compile_DASH_warning);
var on_compile_fail = cljs.core.get.call(null,map__57688__$1,cljs.core.cst$kw$on_DASH_compile_DASH_fail);
return ((function (map__57688,map__57688__$1,on_compile_warning,on_compile_fail){
return (function (p__57690){
var vec__57691 = p__57690;
var seq__57692 = cljs.core.seq.call(null,vec__57691);
var first__57693 = cljs.core.first.call(null,seq__57692);
var seq__57692__$1 = cljs.core.next.call(null,seq__57692);
var map__57694 = first__57693;
var map__57694__$1 = (((((!((map__57694 == null))))?(((((map__57694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57694):map__57694);
var msg = map__57694__$1;
var msg_name = cljs.core.get.call(null,map__57694__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = seq__57692__$1;
var pred__57696 = cljs.core._EQ_;
var expr__57697 = msg_name;
if(cljs.core.truth_(pred__57696.call(null,cljs.core.cst$kw$compile_DASH_warning,expr__57697))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__57696.call(null,cljs.core.cst$kw$compile_DASH_failed,expr__57697))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__57688,map__57688__$1,on_compile_warning,on_compile_fail))
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
var c__23252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto__,msg_hist,msg_names,msg){
return (function (state_57786){
var state_val_57787 = (state_57786[(1)]);
if((state_val_57787 === (7))){
var inst_57706 = (state_57786[(2)]);
var state_57786__$1 = state_57786;
if(cljs.core.truth_(inst_57706)){
var statearr_57788_57835 = state_57786__$1;
(statearr_57788_57835[(1)] = (8));

} else {
var statearr_57789_57836 = state_57786__$1;
(statearr_57789_57836[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (20))){
var inst_57780 = (state_57786[(2)]);
var state_57786__$1 = state_57786;
var statearr_57790_57837 = state_57786__$1;
(statearr_57790_57837[(2)] = inst_57780);

(statearr_57790_57837[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (27))){
var inst_57776 = (state_57786[(2)]);
var state_57786__$1 = state_57786;
var statearr_57791_57838 = state_57786__$1;
(statearr_57791_57838[(2)] = inst_57776);

(statearr_57791_57838[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (1))){
var inst_57699 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_57786__$1 = state_57786;
if(cljs.core.truth_(inst_57699)){
var statearr_57792_57839 = state_57786__$1;
(statearr_57792_57839[(1)] = (2));

} else {
var statearr_57793_57840 = state_57786__$1;
(statearr_57793_57840[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (24))){
var inst_57778 = (state_57786[(2)]);
var state_57786__$1 = state_57786;
var statearr_57794_57841 = state_57786__$1;
(statearr_57794_57841[(2)] = inst_57778);

(statearr_57794_57841[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (4))){
var inst_57784 = (state_57786[(2)]);
var state_57786__$1 = state_57786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57786__$1,inst_57784);
} else {
if((state_val_57787 === (15))){
var inst_57782 = (state_57786[(2)]);
var state_57786__$1 = state_57786;
var statearr_57795_57842 = state_57786__$1;
(statearr_57795_57842[(2)] = inst_57782);

(statearr_57795_57842[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (21))){
var inst_57735 = (state_57786[(2)]);
var inst_57736 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_57737 = figwheel.client.auto_jump_to_error.call(null,opts,inst_57736);
var state_57786__$1 = (function (){var statearr_57796 = state_57786;
(statearr_57796[(7)] = inst_57735);

return statearr_57796;
})();
var statearr_57797_57843 = state_57786__$1;
(statearr_57797_57843[(2)] = inst_57737);

(statearr_57797_57843[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (31))){
var inst_57765 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_57786__$1 = state_57786;
if(inst_57765){
var statearr_57798_57844 = state_57786__$1;
(statearr_57798_57844[(1)] = (34));

} else {
var statearr_57799_57845 = state_57786__$1;
(statearr_57799_57845[(1)] = (35));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (32))){
var inst_57774 = (state_57786[(2)]);
var state_57786__$1 = state_57786;
var statearr_57800_57846 = state_57786__$1;
(statearr_57800_57846[(2)] = inst_57774);

(statearr_57800_57846[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (33))){
var inst_57761 = (state_57786[(2)]);
var inst_57762 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_57763 = figwheel.client.auto_jump_to_error.call(null,opts,inst_57762);
var state_57786__$1 = (function (){var statearr_57801 = state_57786;
(statearr_57801[(8)] = inst_57761);

return statearr_57801;
})();
var statearr_57802_57847 = state_57786__$1;
(statearr_57802_57847[(2)] = inst_57763);

(statearr_57802_57847[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (13))){
var inst_57720 = figwheel.client.heads_up.clear.call(null);
var state_57786__$1 = state_57786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57786__$1,(16),inst_57720);
} else {
if((state_val_57787 === (22))){
var inst_57741 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_57742 = figwheel.client.heads_up.append_warning_message.call(null,inst_57741);
var state_57786__$1 = state_57786;
var statearr_57803_57848 = state_57786__$1;
(statearr_57803_57848[(2)] = inst_57742);

(statearr_57803_57848[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (36))){
var inst_57772 = (state_57786[(2)]);
var state_57786__$1 = state_57786;
var statearr_57804_57849 = state_57786__$1;
(statearr_57804_57849[(2)] = inst_57772);

(statearr_57804_57849[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (29))){
var inst_57752 = (state_57786[(2)]);
var inst_57753 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_57754 = figwheel.client.auto_jump_to_error.call(null,opts,inst_57753);
var state_57786__$1 = (function (){var statearr_57805 = state_57786;
(statearr_57805[(9)] = inst_57752);

return statearr_57805;
})();
var statearr_57806_57850 = state_57786__$1;
(statearr_57806_57850[(2)] = inst_57754);

(statearr_57806_57850[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (6))){
var inst_57701 = (state_57786[(10)]);
var state_57786__$1 = state_57786;
var statearr_57807_57851 = state_57786__$1;
(statearr_57807_57851[(2)] = inst_57701);

(statearr_57807_57851[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (28))){
var inst_57748 = (state_57786[(2)]);
var inst_57749 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_57750 = figwheel.client.heads_up.display_warning.call(null,inst_57749);
var state_57786__$1 = (function (){var statearr_57808 = state_57786;
(statearr_57808[(11)] = inst_57748);

return statearr_57808;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57786__$1,(29),inst_57750);
} else {
if((state_val_57787 === (25))){
var inst_57746 = figwheel.client.heads_up.clear.call(null);
var state_57786__$1 = state_57786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57786__$1,(28),inst_57746);
} else {
if((state_val_57787 === (34))){
var inst_57767 = figwheel.client.heads_up.flash_loaded.call(null);
var state_57786__$1 = state_57786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57786__$1,(37),inst_57767);
} else {
if((state_val_57787 === (17))){
var inst_57726 = (state_57786[(2)]);
var inst_57727 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_57728 = figwheel.client.auto_jump_to_error.call(null,opts,inst_57727);
var state_57786__$1 = (function (){var statearr_57809 = state_57786;
(statearr_57809[(12)] = inst_57726);

return statearr_57809;
})();
var statearr_57810_57852 = state_57786__$1;
(statearr_57810_57852[(2)] = inst_57728);

(statearr_57810_57852[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (3))){
var inst_57718 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_57786__$1 = state_57786;
if(inst_57718){
var statearr_57811_57853 = state_57786__$1;
(statearr_57811_57853[(1)] = (13));

} else {
var statearr_57812_57854 = state_57786__$1;
(statearr_57812_57854[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (12))){
var inst_57714 = (state_57786[(2)]);
var state_57786__$1 = state_57786;
var statearr_57813_57855 = state_57786__$1;
(statearr_57813_57855[(2)] = inst_57714);

(statearr_57813_57855[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (2))){
var inst_57701 = (state_57786[(10)]);
var inst_57701__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_57786__$1 = (function (){var statearr_57814 = state_57786;
(statearr_57814[(10)] = inst_57701__$1);

return statearr_57814;
})();
if(cljs.core.truth_(inst_57701__$1)){
var statearr_57815_57856 = state_57786__$1;
(statearr_57815_57856[(1)] = (5));

} else {
var statearr_57816_57857 = state_57786__$1;
(statearr_57816_57857[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (23))){
var inst_57744 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_57786__$1 = state_57786;
if(inst_57744){
var statearr_57817_57858 = state_57786__$1;
(statearr_57817_57858[(1)] = (25));

} else {
var statearr_57818_57859 = state_57786__$1;
(statearr_57818_57859[(1)] = (26));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (35))){
var state_57786__$1 = state_57786;
var statearr_57819_57860 = state_57786__$1;
(statearr_57819_57860[(2)] = null);

(statearr_57819_57860[(1)] = (36));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (19))){
var inst_57739 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_57786__$1 = state_57786;
if(inst_57739){
var statearr_57820_57861 = state_57786__$1;
(statearr_57820_57861[(1)] = (22));

} else {
var statearr_57821_57862 = state_57786__$1;
(statearr_57821_57862[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (11))){
var inst_57710 = (state_57786[(2)]);
var state_57786__$1 = state_57786;
var statearr_57822_57863 = state_57786__$1;
(statearr_57822_57863[(2)] = inst_57710);

(statearr_57822_57863[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (9))){
var inst_57712 = figwheel.client.heads_up.clear.call(null);
var state_57786__$1 = state_57786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57786__$1,(12),inst_57712);
} else {
if((state_val_57787 === (5))){
var inst_57703 = cljs.core.cst$kw$autoload.cljs$core$IFn$_invoke$arity$1(opts);
var state_57786__$1 = state_57786;
var statearr_57823_57864 = state_57786__$1;
(statearr_57823_57864[(2)] = inst_57703);

(statearr_57823_57864[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (14))){
var inst_57730 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_57786__$1 = state_57786;
if(inst_57730){
var statearr_57824_57865 = state_57786__$1;
(statearr_57824_57865[(1)] = (18));

} else {
var statearr_57825_57866 = state_57786__$1;
(statearr_57825_57866[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (26))){
var inst_57756 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_57786__$1 = state_57786;
if(inst_57756){
var statearr_57826_57867 = state_57786__$1;
(statearr_57826_57867[(1)] = (30));

} else {
var statearr_57827_57868 = state_57786__$1;
(statearr_57827_57868[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (16))){
var inst_57722 = (state_57786[(2)]);
var inst_57723 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_57724 = figwheel.client.heads_up.display_exception.call(null,inst_57723);
var state_57786__$1 = (function (){var statearr_57828 = state_57786;
(statearr_57828[(13)] = inst_57722);

return statearr_57828;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57786__$1,(17),inst_57724);
} else {
if((state_val_57787 === (30))){
var inst_57758 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_57759 = figwheel.client.heads_up.display_warning.call(null,inst_57758);
var state_57786__$1 = state_57786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57786__$1,(33),inst_57759);
} else {
if((state_val_57787 === (10))){
var inst_57716 = (state_57786[(2)]);
var state_57786__$1 = state_57786;
var statearr_57829_57869 = state_57786__$1;
(statearr_57829_57869[(2)] = inst_57716);

(statearr_57829_57869[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (18))){
var inst_57732 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_57733 = figwheel.client.heads_up.display_exception.call(null,inst_57732);
var state_57786__$1 = state_57786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57786__$1,(21),inst_57733);
} else {
if((state_val_57787 === (37))){
var inst_57769 = (state_57786[(2)]);
var state_57786__$1 = state_57786;
var statearr_57830_57870 = state_57786__$1;
(statearr_57830_57870[(2)] = inst_57769);

(statearr_57830_57870[(1)] = (36));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57787 === (8))){
var inst_57708 = figwheel.client.heads_up.flash_loaded.call(null);
var state_57786__$1 = state_57786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57786__$1,(11),inst_57708);
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
});})(c__23252__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23157__auto__,c__23252__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23158__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23158__auto____0 = (function (){
var statearr_57831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57831[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23158__auto__);

(statearr_57831[(1)] = (1));

return statearr_57831;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23158__auto____1 = (function (state_57786){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_57786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e57832){if((e57832 instanceof Object)){
var ex__23161__auto__ = e57832;
var statearr_57833_57871 = state_57786;
(statearr_57833_57871[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57786);

return cljs.core.cst$kw$recur;
} else {
throw e57832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__57872 = state_57786;
state_57786 = G__57872;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23158__auto__ = function(state_57786){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23158__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23158__auto____1.call(this,state_57786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23158__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23158__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto__,msg_hist,msg_names,msg))
})();
var state__23254__auto__ = (function (){var statearr_57834 = f__23253__auto__.call(null);
(statearr_57834[(6)] = c__23252__auto__);

return statearr_57834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto__,msg_hist,msg_names,msg))
);

return c__23252__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23252__auto___57901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto___57901,ch){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto___57901,ch){
return (function (state_57887){
var state_val_57888 = (state_57887[(1)]);
if((state_val_57888 === (1))){
var state_57887__$1 = state_57887;
var statearr_57889_57902 = state_57887__$1;
(statearr_57889_57902[(2)] = null);

(statearr_57889_57902[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57888 === (2))){
var state_57887__$1 = state_57887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57887__$1,(4),ch);
} else {
if((state_val_57888 === (3))){
var inst_57885 = (state_57887[(2)]);
var state_57887__$1 = state_57887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57887__$1,inst_57885);
} else {
if((state_val_57888 === (4))){
var inst_57875 = (state_57887[(7)]);
var inst_57875__$1 = (state_57887[(2)]);
var state_57887__$1 = (function (){var statearr_57890 = state_57887;
(statearr_57890[(7)] = inst_57875__$1);

return statearr_57890;
})();
if(cljs.core.truth_(inst_57875__$1)){
var statearr_57891_57903 = state_57887__$1;
(statearr_57891_57903[(1)] = (5));

} else {
var statearr_57892_57904 = state_57887__$1;
(statearr_57892_57904[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57888 === (5))){
var inst_57875 = (state_57887[(7)]);
var inst_57877 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_57875);
var state_57887__$1 = state_57887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57887__$1,(8),inst_57877);
} else {
if((state_val_57888 === (6))){
var state_57887__$1 = state_57887;
var statearr_57893_57905 = state_57887__$1;
(statearr_57893_57905[(2)] = null);

(statearr_57893_57905[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57888 === (7))){
var inst_57883 = (state_57887[(2)]);
var state_57887__$1 = state_57887;
var statearr_57894_57906 = state_57887__$1;
(statearr_57894_57906[(2)] = inst_57883);

(statearr_57894_57906[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57888 === (8))){
var inst_57879 = (state_57887[(2)]);
var state_57887__$1 = (function (){var statearr_57895 = state_57887;
(statearr_57895[(8)] = inst_57879);

return statearr_57895;
})();
var statearr_57896_57907 = state_57887__$1;
(statearr_57896_57907[(2)] = null);

(statearr_57896_57907[(1)] = (2));


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
});})(c__23252__auto___57901,ch))
;
return ((function (switch__23157__auto__,c__23252__auto___57901,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23158__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23158__auto____0 = (function (){
var statearr_57897 = [null,null,null,null,null,null,null,null,null];
(statearr_57897[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23158__auto__);

(statearr_57897[(1)] = (1));

return statearr_57897;
});
var figwheel$client$heads_up_plugin_$_state_machine__23158__auto____1 = (function (state_57887){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_57887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e57898){if((e57898 instanceof Object)){
var ex__23161__auto__ = e57898;
var statearr_57899_57908 = state_57887;
(statearr_57899_57908[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57887);

return cljs.core.cst$kw$recur;
} else {
throw e57898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__57909 = state_57887;
state_57887 = G__57909;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23158__auto__ = function(state_57887){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23158__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23158__auto____1.call(this,state_57887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23158__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23158__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto___57901,ch))
})();
var state__23254__auto__ = (function (){var statearr_57900 = f__23253__auto__.call(null);
(statearr_57900[(6)] = c__23252__auto___57901);

return statearr_57900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto___57901,ch))
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
var c__23252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto__){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto__){
return (function (state_57915){
var state_val_57916 = (state_57915[(1)]);
if((state_val_57916 === (1))){
var inst_57910 = cljs.core.async.timeout.call(null,(3000));
var state_57915__$1 = state_57915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57915__$1,(2),inst_57910);
} else {
if((state_val_57916 === (2))){
var inst_57912 = (state_57915[(2)]);
var inst_57913 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_57915__$1 = (function (){var statearr_57917 = state_57915;
(statearr_57917[(7)] = inst_57912);

return statearr_57917;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57915__$1,inst_57913);
} else {
return null;
}
}
});})(c__23252__auto__))
;
return ((function (switch__23157__auto__,c__23252__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23158__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23158__auto____0 = (function (){
var statearr_57918 = [null,null,null,null,null,null,null,null];
(statearr_57918[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23158__auto__);

(statearr_57918[(1)] = (1));

return statearr_57918;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23158__auto____1 = (function (state_57915){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_57915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e57919){if((e57919 instanceof Object)){
var ex__23161__auto__ = e57919;
var statearr_57920_57922 = state_57915;
(statearr_57920_57922[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57915);

return cljs.core.cst$kw$recur;
} else {
throw e57919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__57923 = state_57915;
state_57915 = G__57923;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23158__auto__ = function(state_57915){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23158__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23158__auto____1.call(this,state_57915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23158__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23158__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto__))
})();
var state__23254__auto__ = (function (){var statearr_57921 = f__23253__auto__.call(null);
(statearr_57921[(6)] = c__23252__auto__);

return statearr_57921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto__))
);

return c__23252__auto__;
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
var c__23252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto__,figwheel_version,temp__5457__auto__){
return (function (state_57930){
var state_val_57931 = (state_57930[(1)]);
if((state_val_57931 === (1))){
var inst_57924 = cljs.core.async.timeout.call(null,(2000));
var state_57930__$1 = state_57930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57930__$1,(2),inst_57924);
} else {
if((state_val_57931 === (2))){
var inst_57926 = (state_57930[(2)]);
var inst_57927 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_57928 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_57927);
var state_57930__$1 = (function (){var statearr_57932 = state_57930;
(statearr_57932[(7)] = inst_57926);

return statearr_57932;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57930__$1,inst_57928);
} else {
return null;
}
}
});})(c__23252__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__23157__auto__,c__23252__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23158__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23158__auto____0 = (function (){
var statearr_57933 = [null,null,null,null,null,null,null,null];
(statearr_57933[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23158__auto__);

(statearr_57933[(1)] = (1));

return statearr_57933;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23158__auto____1 = (function (state_57930){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_57930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e57934){if((e57934 instanceof Object)){
var ex__23161__auto__ = e57934;
var statearr_57935_57937 = state_57930;
(statearr_57935_57937[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57930);

return cljs.core.cst$kw$recur;
} else {
throw e57934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__57938 = state_57930;
state_57930 = G__57938;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23158__auto__ = function(state_57930){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23158__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23158__auto____1.call(this,state_57930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23158__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23158__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto__,figwheel_version,temp__5457__auto__))
})();
var state__23254__auto__ = (function (){var statearr_57936 = f__23253__auto__.call(null);
(statearr_57936[(6)] = c__23252__auto__);

return statearr_57936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto__,figwheel_version,temp__5457__auto__))
);

return c__23252__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__57939){
var map__57940 = p__57939;
var map__57940__$1 = (((((!((map__57940 == null))))?(((((map__57940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57940):map__57940);
var file = cljs.core.get.call(null,map__57940__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.call(null,map__57940__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.call(null,map__57940__$1,cljs.core.cst$kw$column);
var G__57942 = "";
var G__57942__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57942),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__57942);
var G__57942__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57942__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__57942__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57942__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__57942__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__57943){
var map__57944 = p__57943;
var map__57944__$1 = (((((!((map__57944 == null))))?(((((map__57944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57944):map__57944);
var ed = map__57944__$1;
var formatted_exception = cljs.core.get.call(null,map__57944__$1,cljs.core.cst$kw$formatted_DASH_exception);
var exception_data = cljs.core.get.call(null,map__57944__$1,cljs.core.cst$kw$exception_DASH_data);
var cause = cljs.core.get.call(null,map__57944__$1,cljs.core.cst$kw$cause);
figwheel.client.utils.log.call(null,cljs.core.cst$kw$debug,"Figwheel: Compile Exception");

var seq__57946_57950 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__57947_57951 = null;
var count__57948_57952 = (0);
var i__57949_57953 = (0);
while(true){
if((i__57949_57953 < count__57948_57952)){
var msg_57954 = cljs.core._nth.call(null,chunk__57947_57951,i__57949_57953);
figwheel.client.utils.log.call(null,cljs.core.cst$kw$info,msg_57954);


var G__57955 = seq__57946_57950;
var G__57956 = chunk__57947_57951;
var G__57957 = count__57948_57952;
var G__57958 = (i__57949_57953 + (1));
seq__57946_57950 = G__57955;
chunk__57947_57951 = G__57956;
count__57948_57952 = G__57957;
i__57949_57953 = G__57958;
continue;
} else {
var temp__5457__auto___57959 = cljs.core.seq.call(null,seq__57946_57950);
if(temp__5457__auto___57959){
var seq__57946_57960__$1 = temp__5457__auto___57959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57946_57960__$1)){
var c__4461__auto___57961 = cljs.core.chunk_first.call(null,seq__57946_57960__$1);
var G__57962 = cljs.core.chunk_rest.call(null,seq__57946_57960__$1);
var G__57963 = c__4461__auto___57961;
var G__57964 = cljs.core.count.call(null,c__4461__auto___57961);
var G__57965 = (0);
seq__57946_57950 = G__57962;
chunk__57947_57951 = G__57963;
count__57948_57952 = G__57964;
i__57949_57953 = G__57965;
continue;
} else {
var msg_57966 = cljs.core.first.call(null,seq__57946_57960__$1);
figwheel.client.utils.log.call(null,cljs.core.cst$kw$info,msg_57966);


var G__57967 = cljs.core.next.call(null,seq__57946_57960__$1);
var G__57968 = null;
var G__57969 = (0);
var G__57970 = (0);
seq__57946_57950 = G__57967;
chunk__57947_57951 = G__57968;
count__57948_57952 = G__57969;
i__57949_57953 = G__57970;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__57971){
var map__57972 = p__57971;
var map__57972__$1 = (((((!((map__57972 == null))))?(((((map__57972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57972):map__57972);
var w = map__57972__$1;
var message = cljs.core.get.call(null,map__57972__$1,cljs.core.cst$kw$message);
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
var seq__57974 = cljs.core.seq.call(null,plugins);
var chunk__57975 = null;
var count__57976 = (0);
var i__57977 = (0);
while(true){
if((i__57977 < count__57976)){
var vec__57978 = cljs.core._nth.call(null,chunk__57975,i__57977);
var k = cljs.core.nth.call(null,vec__57978,(0),null);
var plugin = cljs.core.nth.call(null,vec__57978,(1),null);
if(cljs.core.truth_(plugin)){
var pl_57984 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__57974,chunk__57975,count__57976,i__57977,pl_57984,vec__57978,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_57984.call(null,msg_hist);
});})(seq__57974,chunk__57975,count__57976,i__57977,pl_57984,vec__57978,k,plugin))
);
} else {
}


var G__57985 = seq__57974;
var G__57986 = chunk__57975;
var G__57987 = count__57976;
var G__57988 = (i__57977 + (1));
seq__57974 = G__57985;
chunk__57975 = G__57986;
count__57976 = G__57987;
i__57977 = G__57988;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__57974);
if(temp__5457__auto__){
var seq__57974__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57974__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__57974__$1);
var G__57989 = cljs.core.chunk_rest.call(null,seq__57974__$1);
var G__57990 = c__4461__auto__;
var G__57991 = cljs.core.count.call(null,c__4461__auto__);
var G__57992 = (0);
seq__57974 = G__57989;
chunk__57975 = G__57990;
count__57976 = G__57991;
i__57977 = G__57992;
continue;
} else {
var vec__57981 = cljs.core.first.call(null,seq__57974__$1);
var k = cljs.core.nth.call(null,vec__57981,(0),null);
var plugin = cljs.core.nth.call(null,vec__57981,(1),null);
if(cljs.core.truth_(plugin)){
var pl_57993 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__57974,chunk__57975,count__57976,i__57977,pl_57993,vec__57981,k,plugin,seq__57974__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_57993.call(null,msg_hist);
});})(seq__57974,chunk__57975,count__57976,i__57977,pl_57993,vec__57981,k,plugin,seq__57974__$1,temp__5457__auto__))
);
} else {
}


var G__57994 = cljs.core.next.call(null,seq__57974__$1);
var G__57995 = null;
var G__57996 = (0);
var G__57997 = (0);
seq__57974 = G__57994;
chunk__57975 = G__57995;
count__57976 = G__57996;
i__57977 = G__57997;
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
var G__57999 = arguments.length;
switch (G__57999) {
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

var seq__58000_58005 = cljs.core.seq.call(null,cljs.core.cst$kw$initial_DASH_messages.cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__58001_58006 = null;
var count__58002_58007 = (0);
var i__58003_58008 = (0);
while(true){
if((i__58003_58008 < count__58002_58007)){
var msg_58009 = cljs.core._nth.call(null,chunk__58001_58006,i__58003_58008);
figwheel.client.socket.handle_incoming_message.call(null,msg_58009);


var G__58010 = seq__58000_58005;
var G__58011 = chunk__58001_58006;
var G__58012 = count__58002_58007;
var G__58013 = (i__58003_58008 + (1));
seq__58000_58005 = G__58010;
chunk__58001_58006 = G__58011;
count__58002_58007 = G__58012;
i__58003_58008 = G__58013;
continue;
} else {
var temp__5457__auto___58014 = cljs.core.seq.call(null,seq__58000_58005);
if(temp__5457__auto___58014){
var seq__58000_58015__$1 = temp__5457__auto___58014;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58000_58015__$1)){
var c__4461__auto___58016 = cljs.core.chunk_first.call(null,seq__58000_58015__$1);
var G__58017 = cljs.core.chunk_rest.call(null,seq__58000_58015__$1);
var G__58018 = c__4461__auto___58016;
var G__58019 = cljs.core.count.call(null,c__4461__auto___58016);
var G__58020 = (0);
seq__58000_58005 = G__58017;
chunk__58001_58006 = G__58018;
count__58002_58007 = G__58019;
i__58003_58008 = G__58020;
continue;
} else {
var msg_58021 = cljs.core.first.call(null,seq__58000_58015__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_58021);


var G__58022 = cljs.core.next.call(null,seq__58000_58015__$1);
var G__58023 = null;
var G__58024 = (0);
var G__58025 = (0);
seq__58000_58005 = G__58022;
chunk__58001_58006 = G__58023;
count__58002_58007 = G__58024;
i__58003_58008 = G__58025;
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
var len__4641__auto___58030 = arguments.length;
var i__4642__auto___58031 = (0);
while(true){
if((i__4642__auto___58031 < len__4641__auto___58030)){
args__4647__auto__.push((arguments[i__4642__auto___58031]));

var G__58032 = (i__4642__auto___58031 + (1));
i__4642__auto___58031 = G__58032;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__58027){
var map__58028 = p__58027;
var map__58028__$1 = (((((!((map__58028 == null))))?(((((map__58028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58028):map__58028);
var opts = map__58028__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq58026){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58026));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e58033){if((e58033 instanceof Error)){
var e = e58033;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$autoload,false], null);
} else {
throw e58033;

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
return (function (p__58034){
var map__58035 = p__58034;
var map__58035__$1 = (((((!((map__58035 == null))))?(((((map__58035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58035):map__58035);
var msg_name = cljs.core.get.call(null,map__58035__$1,cljs.core.cst$kw$msg_DASH_name);
if(cljs.core._EQ_.call(null,msg_name,cljs.core.cst$kw$files_DASH_changed)){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1545301528263
