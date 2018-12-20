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
var len__4641__auto___56387 = arguments.length;
var i__4642__auto___56388 = (0);
while(true){
if((i__4642__auto___56388 < len__4641__auto___56387)){
args__4647__auto__.push((arguments[i__4642__auto___56388]));

var G__56389 = (i__4642__auto___56388 + (1));
i__4642__auto___56388 = G__56389;
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
var seq__56379_56390 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__56380_56391 = null;
var count__56381_56392 = (0);
var i__56382_56393 = (0);
while(true){
if((i__56382_56393 < count__56381_56392)){
var k_56394 = cljs.core._nth.call(null,chunk__56380_56391,i__56382_56393);
e.setAttribute(cljs.core.name.call(null,k_56394),cljs.core.get.call(null,attrs,k_56394));


var G__56395 = seq__56379_56390;
var G__56396 = chunk__56380_56391;
var G__56397 = count__56381_56392;
var G__56398 = (i__56382_56393 + (1));
seq__56379_56390 = G__56395;
chunk__56380_56391 = G__56396;
count__56381_56392 = G__56397;
i__56382_56393 = G__56398;
continue;
} else {
var temp__5457__auto___56399 = cljs.core.seq.call(null,seq__56379_56390);
if(temp__5457__auto___56399){
var seq__56379_56400__$1 = temp__5457__auto___56399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56379_56400__$1)){
var c__4461__auto___56401 = cljs.core.chunk_first.call(null,seq__56379_56400__$1);
var G__56402 = cljs.core.chunk_rest.call(null,seq__56379_56400__$1);
var G__56403 = c__4461__auto___56401;
var G__56404 = cljs.core.count.call(null,c__4461__auto___56401);
var G__56405 = (0);
seq__56379_56390 = G__56402;
chunk__56380_56391 = G__56403;
count__56381_56392 = G__56404;
i__56382_56393 = G__56405;
continue;
} else {
var k_56406 = cljs.core.first.call(null,seq__56379_56400__$1);
e.setAttribute(cljs.core.name.call(null,k_56406),cljs.core.get.call(null,attrs,k_56406));


var G__56407 = cljs.core.next.call(null,seq__56379_56400__$1);
var G__56408 = null;
var G__56409 = (0);
var G__56410 = (0);
seq__56379_56390 = G__56407;
chunk__56380_56391 = G__56408;
count__56381_56392 = G__56409;
i__56382_56393 = G__56410;
continue;
}
} else {
}
}
break;
}

var seq__56383_56411 = cljs.core.seq.call(null,children);
var chunk__56384_56412 = null;
var count__56385_56413 = (0);
var i__56386_56414 = (0);
while(true){
if((i__56386_56414 < count__56385_56413)){
var ch_56415 = cljs.core._nth.call(null,chunk__56384_56412,i__56386_56414);
e.appendChild(ch_56415);


var G__56416 = seq__56383_56411;
var G__56417 = chunk__56384_56412;
var G__56418 = count__56385_56413;
var G__56419 = (i__56386_56414 + (1));
seq__56383_56411 = G__56416;
chunk__56384_56412 = G__56417;
count__56385_56413 = G__56418;
i__56386_56414 = G__56419;
continue;
} else {
var temp__5457__auto___56420 = cljs.core.seq.call(null,seq__56383_56411);
if(temp__5457__auto___56420){
var seq__56383_56421__$1 = temp__5457__auto___56420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56383_56421__$1)){
var c__4461__auto___56422 = cljs.core.chunk_first.call(null,seq__56383_56421__$1);
var G__56423 = cljs.core.chunk_rest.call(null,seq__56383_56421__$1);
var G__56424 = c__4461__auto___56422;
var G__56425 = cljs.core.count.call(null,c__4461__auto___56422);
var G__56426 = (0);
seq__56383_56411 = G__56423;
chunk__56384_56412 = G__56424;
count__56385_56413 = G__56425;
i__56386_56414 = G__56426;
continue;
} else {
var ch_56427 = cljs.core.first.call(null,seq__56383_56421__$1);
e.appendChild(ch_56427);


var G__56428 = cljs.core.next.call(null,seq__56383_56421__$1);
var G__56429 = null;
var G__56430 = (0);
var G__56431 = (0);
seq__56383_56411 = G__56428;
chunk__56384_56412 = G__56429;
count__56385_56413 = G__56430;
i__56386_56414 = G__56431;
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
figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq56376){
var G__56377 = cljs.core.first.call(null,seq56376);
var seq56376__$1 = cljs.core.next.call(null,seq56376);
var G__56378 = cljs.core.first.call(null,seq56376__$1);
var seq56376__$2 = cljs.core.next.call(null,seq56376__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56377,G__56378,seq56376__$2);
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
var el_56432 = figwheel.client.heads_up.node.call(null,cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cont_id,cljs.core.cst$kw$style,["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
el_56432.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_56432.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_56432.appendChild(figwheel.client.heads_up.node.call(null,cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,content_id], null)));

document.body.appendChild(el_56432);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$container_DASH_el,document.getElementById(cont_id),cljs.core.cst$kw$content_DASH_area_DASH_el,document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__56433,st_map){
var map__56434 = p__56433;
var map__56434__$1 = (((((!((map__56434 == null))))?(((((map__56434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56434):map__56434);
var container_el = cljs.core.get.call(null,map__56434__$1,cljs.core.cst$kw$container_DASH_el);
return cljs.core.mapv.call(null,((function (map__56434,map__56434__$1,container_el){
return (function (p__56436){
var vec__56437 = p__56436;
var k = cljs.core.nth.call(null,vec__56437,(0),null);
var v = cljs.core.nth.call(null,vec__56437,(1),null);
return goog.object.set(container_el.style,cljs.core.name.call(null,k),v);
});})(map__56434,map__56434__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__56440,dom_str){
var map__56441 = p__56440;
var map__56441__$1 = (((((!((map__56441 == null))))?(((((map__56441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56441):map__56441);
var c = map__56441__$1;
var content_area_el = cljs.core.get.call(null,map__56441__$1,cljs.core.cst$kw$content_DASH_area_DASH_el);
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__56443){
var map__56444 = p__56443;
var map__56444__$1 = (((((!((map__56444 == null))))?(((((map__56444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56444):map__56444);
var content_area_el = cljs.core.get.call(null,map__56444__$1,cljs.core.cst$kw$content_DASH_area_DASH_el);
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
return (function (state_56461){
var state_val_56462 = (state_56461[(1)]);
if((state_val_56462 === (1))){
var inst_56446 = (state_56461[(7)]);
var inst_56446__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_56447 = [cljs.core.cst$kw$paddingTop,cljs.core.cst$kw$paddingBottom,cljs.core.cst$kw$width,cljs.core.cst$kw$minHeight,cljs.core.cst$kw$opacity];
var inst_56448 = ["10px","10px","100%","68px","1.0"];
var inst_56449 = cljs.core.PersistentHashMap.fromArrays(inst_56447,inst_56448);
var inst_56450 = cljs.core.merge.call(null,inst_56449,style);
var inst_56451 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_56446__$1,inst_56450);
var inst_56452 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_56446__$1,msg);
var inst_56453 = cljs.core.async.timeout.call(null,(300));
var state_56461__$1 = (function (){var statearr_56463 = state_56461;
(statearr_56463[(8)] = inst_56451);

(statearr_56463[(9)] = inst_56452);

(statearr_56463[(7)] = inst_56446__$1);

return statearr_56463;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56461__$1,(2),inst_56453);
} else {
if((state_val_56462 === (2))){
var inst_56446 = (state_56461[(7)]);
var inst_56455 = (state_56461[(2)]);
var inst_56456 = [cljs.core.cst$kw$height];
var inst_56457 = ["auto"];
var inst_56458 = cljs.core.PersistentHashMap.fromArrays(inst_56456,inst_56457);
var inst_56459 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_56446,inst_56458);
var state_56461__$1 = (function (){var statearr_56464 = state_56461;
(statearr_56464[(10)] = inst_56455);

return statearr_56464;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56461__$1,inst_56459);
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
var statearr_56465 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56465[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__22939__auto__);

(statearr_56465[(1)] = (1));

return statearr_56465;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__22939__auto____1 = (function (state_56461){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_56461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e56466){if((e56466 instanceof Object)){
var ex__22942__auto__ = e56466;
var statearr_56467_56469 = state_56461;
(statearr_56467_56469[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56461);

return cljs.core.cst$kw$recur;
} else {
throw e56466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__56470 = state_56461;
state_56461 = G__56470;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__22939__auto__ = function(state_56461){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22939__auto____1.call(this,state_56461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__22939__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__22939__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__))
})();
var state__22963__auto__ = (function (){var statearr_56468 = f__22962__auto__.call(null);
(statearr_56468[(6)] = c__22961__auto__);

return statearr_56468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22963__auto__);
});})(c__22961__auto__))
);

return c__22961__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__56472 = arguments.length;
switch (G__56472) {
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
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__56474){
var map__56475 = p__56474;
var map__56475__$1 = (((((!((map__56475 == null))))?(((((map__56475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56475):map__56475);
var file = cljs.core.get.call(null,map__56475__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.call(null,map__56475__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.call(null,map__56475__$1,cljs.core.cst$kw$column);
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
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__56477){
var vec__56478 = p__56477;
var typ = cljs.core.nth.call(null,vec__56478,(0),null);
var line_number = cljs.core.nth.call(null,vec__56478,(1),null);
var line = cljs.core.nth.call(null,vec__56478,(2),null);
var pred__56481 = cljs.core._EQ_;
var expr__56482 = typ;
if(cljs.core.truth_(pred__56481.call(null,cljs.core.cst$kw$code_DASH_line,expr__56482))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__56481.call(null,cljs.core.cst$kw$error_DASH_in_DASH_code,expr__56482))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__56481.call(null,cljs.core.cst$kw$error_DASH_message,expr__56482))){
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
return (function (p1__56484_SHARP_){
return cljs.core.update_in.call(null,p1__56484_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"</pre>"].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__56485_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,cljs.core.cst$kw$cause,p1__56485_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__56488){
var map__56489 = p__56488;
var map__56489__$1 = (((((!((map__56489 == null))))?(((((map__56489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56489):map__56489);
var exception = map__56489__$1;
var message = cljs.core.get.call(null,map__56489__$1,cljs.core.cst$kw$message);
var failed_loading_clj_file = cljs.core.get.call(null,map__56489__$1,cljs.core.cst$kw$failed_DASH_loading_DASH_clj_DASH_file);
var reader_exception = cljs.core.get.call(null,map__56489__$1,cljs.core.cst$kw$reader_DASH_exception);
var file = cljs.core.get.call(null,map__56489__$1,cljs.core.cst$kw$file);
var column = cljs.core.get.call(null,map__56489__$1,cljs.core.cst$kw$column);
var failed_compiling = cljs.core.get.call(null,map__56489__$1,cljs.core.cst$kw$failed_DASH_compiling);
var error_inline = cljs.core.get.call(null,map__56489__$1,cljs.core.cst$kw$error_DASH_inline);
var line = cljs.core.get.call(null,map__56489__$1,cljs.core.cst$kw$line);
var class$ = cljs.core.get.call(null,map__56489__$1,cljs.core.cst$kw$class);
var analysis_exception = cljs.core.get.call(null,map__56489__$1,cljs.core.cst$kw$analysis_DASH_exception);
var display_ex_data = cljs.core.get.call(null,map__56489__$1,cljs.core.cst$kw$display_DASH_ex_DASH_data);
var last_message = (cljs.core.truth_((function (){var and__4036__auto__ = file;
if(cljs.core.truth_(and__4036__auto__)){
return line;
} else {
return and__4036__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$head,(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),cljs.core.cst$kw$sub_DASH_head,file,cljs.core.cst$kw$messages,cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__56489,map__56489__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__56486_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__56486_SHARP_),"</div>"].join('');
});})(last_message,map__56489,map__56489__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),": "].join(''):"")),"<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre style=\"white-space: pre-wrap\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__56489,map__56489__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__56487_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(p1__56487_SHARP_))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(p1__56487_SHARP_)))].join('');
});})(last_message,map__56489,map__56489__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),cljs.core.cst$kw$file,file,cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__56491){
var map__56492 = p__56491;
var map__56492__$1 = (((((!((map__56492 == null))))?(((((map__56492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56492):map__56492);
var file = cljs.core.get.call(null,map__56492__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.call(null,map__56492__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.call(null,map__56492__$1,cljs.core.cst$kw$column);
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$figwheel_DASH_event,"file-selected",cljs.core.cst$kw$file_DASH_name,cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),cljs.core.cst$kw$file_DASH_line,cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.cst$kw$file_DASH_column,cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__56495 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__56495__$1 = (((((!((map__56495 == null))))?(((((map__56495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56495):map__56495);
var head = cljs.core.get.call(null,map__56495__$1,cljs.core.cst$kw$head);
var sub_head = cljs.core.get.call(null,map__56495__$1,cljs.core.cst$kw$sub_DASH_head);
var messages = cljs.core.get.call(null,map__56495__$1,cljs.core.cst$kw$messages);
var last_message = cljs.core.get.call(null,map__56495__$1,cljs.core.cst$kw$last_DASH_message);
var file = cljs.core.get.call(null,map__56495__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.call(null,map__56495__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.call(null,map__56495__$1,cljs.core.cst$kw$column);
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__56498){
var map__56499 = p__56498;
var map__56499__$1 = (((((!((map__56499 == null))))?(((((map__56499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56499):map__56499);
var warning_data = map__56499__$1;
var file = cljs.core.get.call(null,map__56499__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.call(null,map__56499__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.call(null,map__56499__$1,cljs.core.cst$kw$column);
var message = cljs.core.get.call(null,map__56499__$1,cljs.core.cst$kw$message);
var error_inline = cljs.core.get.call(null,map__56499__$1,cljs.core.cst$kw$error_DASH_inline);
var last_message = (cljs.core.truth_((function (){var and__4036__auto__ = file;
if(cljs.core.truth_(and__4036__auto__)){
return line;
} else {
return and__4036__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$head,"Compile Warning",cljs.core.cst$kw$sub_DASH_head,file,cljs.core.cst$kw$messages,cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__56499,map__56499__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__56497_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__56497_SHARP_),"</div>"].join('');
});})(last_message,map__56499,map__56499__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),cljs.core.cst$kw$file,file,cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__56501 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__56501__$1 = (((((!((map__56501 == null))))?(((((map__56501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56501):map__56501);
var head = cljs.core.get.call(null,map__56501__$1,cljs.core.cst$kw$head);
var sub_head = cljs.core.get.call(null,map__56501__$1,cljs.core.cst$kw$sub_DASH_head);
var messages = cljs.core.get.call(null,map__56501__$1,cljs.core.cst$kw$messages);
var last_message = cljs.core.get.call(null,map__56501__$1,cljs.core.cst$kw$last_DASH_message);
var file = cljs.core.get.call(null,map__56501__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.call(null,map__56501__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.call(null,map__56501__$1,cljs.core.cst$kw$column);
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__56503){
var map__56504 = p__56503;
var map__56504__$1 = (((((!((map__56504 == null))))?(((((map__56504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56504):map__56504);
var warning_data = map__56504__$1;
var message = cljs.core.get.call(null,map__56504__$1,cljs.core.cst$kw$message);
var file = cljs.core.get.call(null,map__56504__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.call(null,map__56504__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.call(null,map__56504__$1,cljs.core.cst$kw$column);
var G__56506 = message;
var G__56506__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56506)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__56506);
var G__56506__$2 = (cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56506__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__56506__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56506__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__56506__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__56507){
var map__56508 = p__56507;
var map__56508__$1 = (((((!((map__56508 == null))))?(((((map__56508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56508):map__56508);
var warning_data = map__56508__$1;
var message = cljs.core.get.call(null,map__56508__$1,cljs.core.cst$kw$message);
var file = cljs.core.get.call(null,map__56508__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.call(null,map__56508__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.call(null,map__56508__$1,cljs.core.cst$kw$column);
if(cljs.core.truth_(message)){
var map__56510 = figwheel.client.heads_up.ensure_container.call(null);
var map__56510__$1 = (((((!((map__56510 == null))))?(((((map__56510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56510):map__56510);
var content_area_el = cljs.core.get.call(null,map__56510__$1,cljs.core.cst$kw$content_DASH_area_DASH_el);
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
return (function (state_56529){
var state_val_56530 = (state_56529[(1)]);
if((state_val_56530 === (1))){
var inst_56512 = (state_56529[(7)]);
var inst_56512__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_56513 = [cljs.core.cst$kw$opacity];
var inst_56514 = ["0.0"];
var inst_56515 = cljs.core.PersistentHashMap.fromArrays(inst_56513,inst_56514);
var inst_56516 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_56512__$1,inst_56515);
var inst_56517 = cljs.core.async.timeout.call(null,(300));
var state_56529__$1 = (function (){var statearr_56531 = state_56529;
(statearr_56531[(8)] = inst_56516);

(statearr_56531[(7)] = inst_56512__$1);

return statearr_56531;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56529__$1,(2),inst_56517);
} else {
if((state_val_56530 === (2))){
var inst_56512 = (state_56529[(7)]);
var inst_56519 = (state_56529[(2)]);
var inst_56520 = [cljs.core.cst$kw$width,cljs.core.cst$kw$height,cljs.core.cst$kw$minHeight,cljs.core.cst$kw$padding,cljs.core.cst$kw$borderRadius,cljs.core.cst$kw$backgroundColor];
var inst_56521 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_56522 = cljs.core.PersistentHashMap.fromArrays(inst_56520,inst_56521);
var inst_56523 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_56512,inst_56522);
var inst_56524 = cljs.core.async.timeout.call(null,(200));
var state_56529__$1 = (function (){var statearr_56532 = state_56529;
(statearr_56532[(9)] = inst_56523);

(statearr_56532[(10)] = inst_56519);

return statearr_56532;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56529__$1,(3),inst_56524);
} else {
if((state_val_56530 === (3))){
var inst_56512 = (state_56529[(7)]);
var inst_56526 = (state_56529[(2)]);
var inst_56527 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_56512,"");
var state_56529__$1 = (function (){var statearr_56533 = state_56529;
(statearr_56533[(11)] = inst_56526);

return statearr_56533;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56529__$1,inst_56527);
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
var statearr_56534 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56534[(0)] = figwheel$client$heads_up$clear_$_state_machine__22939__auto__);

(statearr_56534[(1)] = (1));

return statearr_56534;
});
var figwheel$client$heads_up$clear_$_state_machine__22939__auto____1 = (function (state_56529){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_56529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e56535){if((e56535 instanceof Object)){
var ex__22942__auto__ = e56535;
var statearr_56536_56538 = state_56529;
(statearr_56536_56538[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56529);

return cljs.core.cst$kw$recur;
} else {
throw e56535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__56539 = state_56529;
state_56529 = G__56539;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__22939__auto__ = function(state_56529){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__22939__auto____1.call(this,state_56529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__22939__auto____0;
figwheel$client$heads_up$clear_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__22939__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__))
})();
var state__22963__auto__ = (function (){var statearr_56537 = f__22962__auto__.call(null);
(statearr_56537[(6)] = c__22961__auto__);

return statearr_56537;
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
return (function (state_56550){
var state_val_56551 = (state_56550[(1)]);
if((state_val_56551 === (1))){
var inst_56540 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_56550__$1 = state_56550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56550__$1,(2),inst_56540);
} else {
if((state_val_56551 === (2))){
var inst_56542 = (state_56550[(2)]);
var inst_56543 = cljs.core.async.timeout.call(null,(400));
var state_56550__$1 = (function (){var statearr_56552 = state_56550;
(statearr_56552[(7)] = inst_56542);

return statearr_56552;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56550__$1,(3),inst_56543);
} else {
if((state_val_56551 === (3))){
var inst_56545 = (state_56550[(2)]);
var inst_56546 = figwheel.client.heads_up.clear.call(null);
var state_56550__$1 = (function (){var statearr_56553 = state_56550;
(statearr_56553[(8)] = inst_56545);

return statearr_56553;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56550__$1,(4),inst_56546);
} else {
if((state_val_56551 === (4))){
var inst_56548 = (state_56550[(2)]);
var state_56550__$1 = state_56550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56550__$1,inst_56548);
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
var statearr_56554 = [null,null,null,null,null,null,null,null,null];
(statearr_56554[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__22939__auto__);

(statearr_56554[(1)] = (1));

return statearr_56554;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__22939__auto____1 = (function (state_56550){
while(true){
var ret_value__22940__auto__ = (function (){try{while(true){
var result__22941__auto__ = switch__22938__auto__.call(null,state_56550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22941__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22941__auto__;
}
break;
}
}catch (e56555){if((e56555 instanceof Object)){
var ex__22942__auto__ = e56555;
var statearr_56556_56558 = state_56550;
(statearr_56556_56558[(5)] = ex__22942__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56550);

return cljs.core.cst$kw$recur;
} else {
throw e56555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22940__auto__,cljs.core.cst$kw$recur)){
var G__56559 = state_56550;
state_56550 = G__56559;
continue;
} else {
return ret_value__22940__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__22939__auto__ = function(state_56550){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22939__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22939__auto____1.call(this,state_56550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__22939__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__22939__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__22939__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__22939__auto__;
})()
;})(switch__22938__auto__,c__22961__auto__))
})();
var state__22963__auto__ = (function (){var statearr_56557 = f__22962__auto__.call(null);
(statearr_56557[(6)] = c__22961__auto__);

return statearr_56557;
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

//# sourceMappingURL=heads_up.js.map?rel=1545321278268
