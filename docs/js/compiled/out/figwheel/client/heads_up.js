// Compiled by ClojureScript 1.10.439 {:optimize-constants true}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__4647__auto__ = [];
var len__4641__auto___68452 = arguments.length;
var i__4642__auto___68453 = (0);
while(true){
if((i__4642__auto___68453 < len__4641__auto___68452)){
args__4647__auto__.push((arguments[i__4642__auto___68453]));

var G__68454 = (i__4642__auto___68453 + (1));
i__4642__auto___68453 = G__68454;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__68444_68455 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__68445_68456 = null;
var count__68446_68457 = (0);
var i__68447_68458 = (0);
while(true){
if((i__68447_68458 < count__68446_68457)){
var k_68459 = cljs.core._nth.call(null,chunk__68445_68456,i__68447_68458);
e.setAttribute(cljs.core.name.call(null,k_68459),cljs.core.get.call(null,attrs,k_68459));


var G__68460 = seq__68444_68455;
var G__68461 = chunk__68445_68456;
var G__68462 = count__68446_68457;
var G__68463 = (i__68447_68458 + (1));
seq__68444_68455 = G__68460;
chunk__68445_68456 = G__68461;
count__68446_68457 = G__68462;
i__68447_68458 = G__68463;
continue;
} else {
var temp__5457__auto___68464 = cljs.core.seq.call(null,seq__68444_68455);
if(temp__5457__auto___68464){
var seq__68444_68465__$1 = temp__5457__auto___68464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68444_68465__$1)){
var c__4461__auto___68466 = cljs.core.chunk_first.call(null,seq__68444_68465__$1);
var G__68467 = cljs.core.chunk_rest.call(null,seq__68444_68465__$1);
var G__68468 = c__4461__auto___68466;
var G__68469 = cljs.core.count.call(null,c__4461__auto___68466);
var G__68470 = (0);
seq__68444_68455 = G__68467;
chunk__68445_68456 = G__68468;
count__68446_68457 = G__68469;
i__68447_68458 = G__68470;
continue;
} else {
var k_68471 = cljs.core.first.call(null,seq__68444_68465__$1);
e.setAttribute(cljs.core.name.call(null,k_68471),cljs.core.get.call(null,attrs,k_68471));


var G__68472 = cljs.core.next.call(null,seq__68444_68465__$1);
var G__68473 = null;
var G__68474 = (0);
var G__68475 = (0);
seq__68444_68455 = G__68472;
chunk__68445_68456 = G__68473;
count__68446_68457 = G__68474;
i__68447_68458 = G__68475;
continue;
}
} else {
}
}
break;
}

var seq__68448_68476 = cljs.core.seq.call(null,children);
var chunk__68449_68477 = null;
var count__68450_68478 = (0);
var i__68451_68479 = (0);
while(true){
if((i__68451_68479 < count__68450_68478)){
var ch_68480 = cljs.core._nth.call(null,chunk__68449_68477,i__68451_68479);
e.appendChild(ch_68480);


var G__68481 = seq__68448_68476;
var G__68482 = chunk__68449_68477;
var G__68483 = count__68450_68478;
var G__68484 = (i__68451_68479 + (1));
seq__68448_68476 = G__68481;
chunk__68449_68477 = G__68482;
count__68450_68478 = G__68483;
i__68451_68479 = G__68484;
continue;
} else {
var temp__5457__auto___68485 = cljs.core.seq.call(null,seq__68448_68476);
if(temp__5457__auto___68485){
var seq__68448_68486__$1 = temp__5457__auto___68485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68448_68486__$1)){
var c__4461__auto___68487 = cljs.core.chunk_first.call(null,seq__68448_68486__$1);
var G__68488 = cljs.core.chunk_rest.call(null,seq__68448_68486__$1);
var G__68489 = c__4461__auto___68487;
var G__68490 = cljs.core.count.call(null,c__4461__auto___68487);
var G__68491 = (0);
seq__68448_68476 = G__68488;
chunk__68449_68477 = G__68489;
count__68450_68478 = G__68490;
i__68451_68479 = G__68491;
continue;
} else {
var ch_68492 = cljs.core.first.call(null,seq__68448_68486__$1);
e.appendChild(ch_68492);


var G__68493 = cljs.core.next.call(null,seq__68448_68486__$1);
var G__68494 = null;
var G__68495 = (0);
var G__68496 = (0);
seq__68448_68476 = G__68493;
chunk__68449_68477 = G__68494;
count__68450_68478 = G__68495;
i__68451_68479 = G__68496;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq68441){
var G__68442 = cljs.core.first.call(null,seq68441);
var seq68441__$1 = cljs.core.next.call(null,seq68441);
var G__68443 = cljs.core.first.call(null,seq68441__$1);
var seq68441__$2 = cljs.core.next.call(null,seq68441__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68442,G__68443,seq68441__$2);
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.heads_up !== 'undefined') && (typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined')){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__))
,cljs.core.cst$kw$default,hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,cljs.core.cst$kw$default,(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$figwheel_DASH_event,"file-selected",cljs.core.cst$kw$file_DASH_name,dataset.fileName,cljs.core.cst$kw$file_DASH_line,dataset.fileLine,cljs.core.cst$kw$file_DASH_column,dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_68497 = figwheel.client.heads_up.node.call(null,cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cont_id,cljs.core.cst$kw$style,["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
el_68497.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_68497.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_68497.appendChild(figwheel.client.heads_up.node.call(null,cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,content_id], null)));

document.body.appendChild(el_68497);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$container_DASH_el,document.getElementById(cont_id),cljs.core.cst$kw$content_DASH_area_DASH_el,document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__68498,st_map){
var map__68499 = p__68498;
var map__68499__$1 = (((((!((map__68499 == null))))?(((((map__68499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68499):map__68499);
var container_el = cljs.core.get.call(null,map__68499__$1,cljs.core.cst$kw$container_DASH_el);
return cljs.core.mapv.call(null,((function (map__68499,map__68499__$1,container_el){
return (function (p__68501){
var vec__68502 = p__68501;
var k = cljs.core.nth.call(null,vec__68502,(0),null);
var v = cljs.core.nth.call(null,vec__68502,(1),null);
return goog.object.set(container_el.style,cljs.core.name.call(null,k),v);
});})(map__68499,map__68499__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__68505,dom_str){
var map__68506 = p__68505;
var map__68506__$1 = (((((!((map__68506 == null))))?(((((map__68506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68506):map__68506);
var c = map__68506__$1;
var content_area_el = cljs.core.get.call(null,map__68506__$1,cljs.core.cst$kw$content_DASH_area_DASH_el);
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__68508){
var map__68509 = p__68508;
var map__68509__$1 = (((((!((map__68509 == null))))?(((((map__68509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68509):map__68509);
var content_area_el = cljs.core.get.call(null,map__68509__$1,cljs.core.cst$kw$content_DASH_area_DASH_el);
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__22961__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22961__auto__){
return (function (){
var f__22962__auto__ = (function (){var switch__22938__auto__ = ((function (c__22961__auto__){
return (function (state_68526){
var state_val_68527 = (state_68526[(1)]);
if((state_val_68527 === (1))){
var inst_68511 = (state_68526[(7)]);
var inst_68511__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_68512 = [cljs.core.cst$kw$paddingTop,cljs.core.cst$kw$paddingBottom,cljs.core.cst$kw$width,cljs.core.cst$kw$minHeight,cljs.core.cst$kw$opacity];
var inst_68513 = ["10px","10px","100%","68px","1.0"];
var inst_68514 = cljs.core.PersistentHashMap.fromArrays(inst_68512,inst_68513);
var inst_68515 = cljs.core.merge.call(null,inst_68514,style);
var inst_68516 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_68511__$1,inst_68515);
var inst_68517 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_68511__$1,msg);
var inst_68518 = cljs.core.async.timeout.call(null,(300));
var state_68526__$1 = (function (){var statearr_68528 = state_68526;
(statearr_68528[(7)] = inst_68511__$1);

(statearr_68528[(8)] = inst_68516);

(statearr_68528[(9)] = inst_68517);

return statearr_68528;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68526__$1,(2),inst_68518);
} else {
if((state_val_68527 === (2))){
var inst_68511 = (state_68526[(7)]);
var inst_68520 = (state_68526[(2)]);
var inst_68521 = [cljs.core.cst$kw$height];
var inst_68522 = ["auto"];
var inst_68523 = cljs.core.PersistentHashMap.fromArrays(inst_68521,inst_68522);
var inst_68524 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_68511,inst_68523);
var state_68526__$1 = (function (){var statearr_68529 = state_68526;
(statearr_68529[(10)] = inst_68520);

return statearr_68529;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68526__$1,inst_68524);
} else {
return null;
}
}
});})(c__22961__auto__))
;
return ((function (switch__22938__auto__,c__22961__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__22939__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__22939__auto____0 = (function (){
var statearr_68530 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_68530[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__22939__auto__);

(statearr_68530[(1)] = (1));

return statearr_68530;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__22939__auto____1 = (function (state_68526){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_68526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e68531){if((e68531 instanceof Object)){
var ex__22942__auto__ = e68531;
var statearr_68532_68534 = state_68526;
(statearr_68532_68534[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68526);

return cljs.core.cst$kw$recur;
} else {
throw e68531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__68535 = state_68526;
state_68526 = G__68535;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__22939__auto__ = function(state_68526){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22939__auto____1.call(this,state_68526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__22939__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__22939__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__))
})();
var state__22963__auto__ = (function (){var statearr_68533 = f__22962__auto__.call(null);
(statearr_68533[(6)] = c__22961__auto__);

return statearr_68533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto__))
);

return c__22961__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__68537 = arguments.length;
switch (G__68537) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__68539){
var map__68540 = p__68539;
var map__68540__$1 = (((((!((map__68540 == null))))?(((((map__68540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68540):map__68540);
var file = cljs.core.get.call(null,map__68540__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.call(null,map__68540__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.call(null,map__68540__$1,cljs.core.cst$kw$column);
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__4047__auto__ = file;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),"</div>"].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),"</span>"].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__68542){
var vec__68543 = p__68542;
var typ = cljs.core.nth.call(null,vec__68543,(0),null);
var line_number = cljs.core.nth.call(null,vec__68543,(1),null);
var line = cljs.core.nth.call(null,vec__68543,(2),null);
var pred__68546 = cljs.core._EQ_;
var expr__68547 = typ;
if(cljs.core.truth_(pred__68546.call(null,cljs.core.cst$kw$code_DASH_line,expr__68547))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__68546.call(null,cljs.core.cst$kw$error_DASH_in_DASH_code,expr__68547))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__68546.call(null,cljs.core.cst$kw$error_DASH_message,expr__68547))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error))));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__68549_SHARP_){
return cljs.core.update_in.call(null,p1__68549_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"</pre>"].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__68550_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,cljs.core.cst$kw$cause,p1__68550_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__68553){
var map__68554 = p__68553;
var map__68554__$1 = (((((!((map__68554 == null))))?(((((map__68554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68554):map__68554);
var exception = map__68554__$1;
var message = cljs.core.get.call(null,map__68554__$1,cljs.core.cst$kw$message);
var failed_loading_clj_file = cljs.core.get.call(null,map__68554__$1,cljs.core.cst$kw$failed_DASH_loading_DASH_clj_DASH_file);
var reader_exception = cljs.core.get.call(null,map__68554__$1,cljs.core.cst$kw$reader_DASH_exception);
var file = cljs.core.get.call(null,map__68554__$1,cljs.core.cst$kw$file);
var column = cljs.core.get.call(null,map__68554__$1,cljs.core.cst$kw$column);
var failed_compiling = cljs.core.get.call(null,map__68554__$1,cljs.core.cst$kw$failed_DASH_compiling);
var error_inline = cljs.core.get.call(null,map__68554__$1,cljs.core.cst$kw$error_DASH_inline);
var line = cljs.core.get.call(null,map__68554__$1,cljs.core.cst$kw$line);
var class$ = cljs.core.get.call(null,map__68554__$1,cljs.core.cst$kw$class);
var analysis_exception = cljs.core.get.call(null,map__68554__$1,cljs.core.cst$kw$analysis_DASH_exception);
var display_ex_data = cljs.core.get.call(null,map__68554__$1,cljs.core.cst$kw$display_DASH_ex_DASH_data);
var last_message = (cljs.core.truth_((function (){var and__4036__auto__ = file;
if(cljs.core.truth_(and__4036__auto__)){
return line;
} else {
return and__4036__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$head,(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),cljs.core.cst$kw$sub_DASH_head,file,cljs.core.cst$kw$messages,cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__68554,map__68554__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__68551_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__68551_SHARP_),"</div>"].join('');
});})(last_message,map__68554,map__68554__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),": "].join(''):"")),"<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre style=\"white-space: pre-wrap\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__68554,map__68554__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__68552_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(p1__68552_SHARP_))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(p1__68552_SHARP_)))].join('');
});})(last_message,map__68554,map__68554__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),cljs.core.cst$kw$file,file,cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__68556){
var map__68557 = p__68556;
var map__68557__$1 = (((((!((map__68557 == null))))?(((((map__68557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68557):map__68557);
var file = cljs.core.get.call(null,map__68557__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.call(null,map__68557__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.call(null,map__68557__$1,cljs.core.cst$kw$column);
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$figwheel_DASH_event,"file-selected",cljs.core.cst$kw$file_DASH_name,cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),cljs.core.cst$kw$file_DASH_line,cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.cst$kw$file_DASH_column,cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__68560 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__68560__$1 = (((((!((map__68560 == null))))?(((((map__68560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68560):map__68560);
var head = cljs.core.get.call(null,map__68560__$1,cljs.core.cst$kw$head);
var sub_head = cljs.core.get.call(null,map__68560__$1,cljs.core.cst$kw$sub_DASH_head);
var messages = cljs.core.get.call(null,map__68560__$1,cljs.core.cst$kw$messages);
var last_message = cljs.core.get.call(null,map__68560__$1,cljs.core.cst$kw$last_DASH_message);
var file = cljs.core.get.call(null,map__68560__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.call(null,map__68560__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.call(null,map__68560__$1,cljs.core.cst$kw$column);
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__68563){
var map__68564 = p__68563;
var map__68564__$1 = (((((!((map__68564 == null))))?(((((map__68564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68564):map__68564);
var warning_data = map__68564__$1;
var file = cljs.core.get.call(null,map__68564__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.call(null,map__68564__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.call(null,map__68564__$1,cljs.core.cst$kw$column);
var message = cljs.core.get.call(null,map__68564__$1,cljs.core.cst$kw$message);
var error_inline = cljs.core.get.call(null,map__68564__$1,cljs.core.cst$kw$error_DASH_inline);
var last_message = (cljs.core.truth_((function (){var and__4036__auto__ = file;
if(cljs.core.truth_(and__4036__auto__)){
return line;
} else {
return and__4036__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$head,"Compile Warning",cljs.core.cst$kw$sub_DASH_head,file,cljs.core.cst$kw$messages,cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__68564,map__68564__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__68562_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__68562_SHARP_),"</div>"].join('');
});})(last_message,map__68564,map__68564__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),cljs.core.cst$kw$file,file,cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__68566 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__68566__$1 = (((((!((map__68566 == null))))?(((((map__68566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68566):map__68566);
var head = cljs.core.get.call(null,map__68566__$1,cljs.core.cst$kw$head);
var sub_head = cljs.core.get.call(null,map__68566__$1,cljs.core.cst$kw$sub_DASH_head);
var messages = cljs.core.get.call(null,map__68566__$1,cljs.core.cst$kw$messages);
var last_message = cljs.core.get.call(null,map__68566__$1,cljs.core.cst$kw$last_DASH_message);
var file = cljs.core.get.call(null,map__68566__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.call(null,map__68566__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.call(null,map__68566__$1,cljs.core.cst$kw$column);
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__68568){
var map__68569 = p__68568;
var map__68569__$1 = (((((!((map__68569 == null))))?(((((map__68569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68569):map__68569);
var warning_data = map__68569__$1;
var message = cljs.core.get.call(null,map__68569__$1,cljs.core.cst$kw$message);
var file = cljs.core.get.call(null,map__68569__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.call(null,map__68569__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.call(null,map__68569__$1,cljs.core.cst$kw$column);
var G__68571 = message;
var G__68571__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68571)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__68571);
var G__68571__$2 = (cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68571__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__68571__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68571__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__68571__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__68572){
var map__68573 = p__68572;
var map__68573__$1 = (((((!((map__68573 == null))))?(((((map__68573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68573):map__68573);
var warning_data = map__68573__$1;
var message = cljs.core.get.call(null,map__68573__$1,cljs.core.cst$kw$message);
var file = cljs.core.get.call(null,map__68573__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.call(null,map__68573__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.call(null,map__68573__$1,cljs.core.cst$kw$column);
if(cljs.core.truth_(message)){
var map__68575 = figwheel.client.heads_up.ensure_container.call(null);
var map__68575__$1 = (((((!((map__68575 == null))))?(((((map__68575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68575):map__68575);
var content_area_el = cljs.core.get.call(null,map__68575__$1,cljs.core.cst$kw$content_DASH_area_DASH_el);
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__5457__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5457__auto__)){
var last_child = temp__5457__auto__;
var temp__5455__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5455__auto__)){
var message_count = temp__5455__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__22961__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22961__auto__){
return (function (){
var f__22962__auto__ = (function (){var switch__22938__auto__ = ((function (c__22961__auto__){
return (function (state_68594){
var state_val_68595 = (state_68594[(1)]);
if((state_val_68595 === (1))){
var inst_68577 = (state_68594[(7)]);
var inst_68577__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_68578 = [cljs.core.cst$kw$opacity];
var inst_68579 = ["0.0"];
var inst_68580 = cljs.core.PersistentHashMap.fromArrays(inst_68578,inst_68579);
var inst_68581 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_68577__$1,inst_68580);
var inst_68582 = cljs.core.async.timeout.call(null,(300));
var state_68594__$1 = (function (){var statearr_68596 = state_68594;
(statearr_68596[(7)] = inst_68577__$1);

(statearr_68596[(8)] = inst_68581);

return statearr_68596;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68594__$1,(2),inst_68582);
} else {
if((state_val_68595 === (2))){
var inst_68577 = (state_68594[(7)]);
var inst_68584 = (state_68594[(2)]);
var inst_68585 = [cljs.core.cst$kw$width,cljs.core.cst$kw$height,cljs.core.cst$kw$minHeight,cljs.core.cst$kw$padding,cljs.core.cst$kw$borderRadius,cljs.core.cst$kw$backgroundColor];
var inst_68586 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_68587 = cljs.core.PersistentHashMap.fromArrays(inst_68585,inst_68586);
var inst_68588 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_68577,inst_68587);
var inst_68589 = cljs.core.async.timeout.call(null,(200));
var state_68594__$1 = (function (){var statearr_68597 = state_68594;
(statearr_68597[(9)] = inst_68584);

(statearr_68597[(10)] = inst_68588);

return statearr_68597;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68594__$1,(3),inst_68589);
} else {
if((state_val_68595 === (3))){
var inst_68577 = (state_68594[(7)]);
var inst_68591 = (state_68594[(2)]);
var inst_68592 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_68577,"");
var state_68594__$1 = (function (){var statearr_68598 = state_68594;
(statearr_68598[(11)] = inst_68591);

return statearr_68598;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68594__$1,inst_68592);
} else {
return null;
}
}
}
});})(c__22961__auto__))
;
return ((function (switch__22938__auto__,c__22961__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__22939__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__22939__auto____0 = (function (){
var statearr_68599 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68599[(0)] = figwheel$client$heads_up$clear_$_state_machine__22939__auto__);

(statearr_68599[(1)] = (1));

return statearr_68599;
});
var figwheel$client$heads_up$clear_$_state_machine__22939__auto____1 = (function (state_68594){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_68594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e68600){if((e68600 instanceof Object)){
var ex__22942__auto__ = e68600;
var statearr_68601_68603 = state_68594;
(statearr_68601_68603[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68594);

return cljs.core.cst$kw$recur;
} else {
throw e68600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__68604 = state_68594;
state_68594 = G__68604;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__22939__auto__ = function(state_68594){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__22939__auto____1.call(this,state_68594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__22939__auto____0;
figwheel$client$heads_up$clear_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__22939__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__))
})();
var state__22963__auto__ = (function (){var statearr_68602 = f__22962__auto__.call(null);
(statearr_68602[(6)] = c__22961__auto__);

return statearr_68602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto__))
);

return c__22961__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$backgroundColor,"rgba(211,234,172,1.0)",cljs.core.cst$kw$width,"68px",cljs.core.cst$kw$height,"68px",cljs.core.cst$kw$paddingLeft,"0px",cljs.core.cst$kw$paddingRight,"0px",cljs.core.cst$kw$borderRadius,"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__22961__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22961__auto__){
return (function (){
var f__22962__auto__ = (function (){var switch__22938__auto__ = ((function (c__22961__auto__){
return (function (state_68615){
var state_val_68616 = (state_68615[(1)]);
if((state_val_68616 === (1))){
var inst_68605 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_68615__$1 = state_68615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68615__$1,(2),inst_68605);
} else {
if((state_val_68616 === (2))){
var inst_68607 = (state_68615[(2)]);
var inst_68608 = cljs.core.async.timeout.call(null,(400));
var state_68615__$1 = (function (){var statearr_68617 = state_68615;
(statearr_68617[(7)] = inst_68607);

return statearr_68617;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68615__$1,(3),inst_68608);
} else {
if((state_val_68616 === (3))){
var inst_68610 = (state_68615[(2)]);
var inst_68611 = figwheel.client.heads_up.clear.call(null);
var state_68615__$1 = (function (){var statearr_68618 = state_68615;
(statearr_68618[(8)] = inst_68610);

return statearr_68618;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68615__$1,(4),inst_68611);
} else {
if((state_val_68616 === (4))){
var inst_68613 = (state_68615[(2)]);
var state_68615__$1 = state_68615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68615__$1,inst_68613);
} else {
return null;
}
}
}
}
});})(c__22961__auto__))
;
return ((function (switch__22938__auto__,c__22961__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__22939__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__22939__auto____0 = (function (){
var statearr_68619 = [null,null,null,null,null,null,null,null,null];
(statearr_68619[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__22939__auto__);

(statearr_68619[(1)] = (1));

return statearr_68619;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__22939__auto____1 = (function (state_68615){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_68615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e68620){if((e68620 instanceof Object)){
var ex__22942__auto__ = e68620;
var statearr_68621_68623 = state_68615;
(statearr_68621_68623[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68615);

return cljs.core.cst$kw$recur;
} else {
throw e68620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__68624 = state_68615;
state_68615 = G__68624;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__22939__auto__ = function(state_68615){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22939__auto____1.call(this,state_68615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__22939__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__22939__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__))
})();
var state__22963__auto__ = (function (){var statearr_68622 = f__22962__auto__.call(null);
(statearr_68622[(6)] = c__22961__auto__);

return statearr_68622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto__))
);

return c__22961__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__5457__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1545335809807
