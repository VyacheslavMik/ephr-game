// Compiled by ClojureScript 1.10.439 {:optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23312 = arguments.length;
switch (G__23312) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23313 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23313 = (function (f,blockable,meta23314){
this.f = f;
this.blockable = blockable;
this.meta23314 = meta23314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23315,meta23314__$1){
var self__ = this;
var _23315__$1 = this;
return (new cljs.core.async.t_cljs$core$async23313(self__.f,self__.blockable,meta23314__$1));
});

cljs.core.async.t_cljs$core$async23313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23315){
var self__ = this;
var _23315__$1 = this;
return self__.meta23314;
});

cljs.core.async.t_cljs$core$async23313.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23313.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23313.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23313.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta23314], null);
});

cljs.core.async.t_cljs$core$async23313.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23313";

cljs.core.async.t_cljs$core$async23313.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async23313");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23313.
 */
cljs.core.async.__GT_t_cljs$core$async23313 = (function cljs$core$async$__GT_t_cljs$core$async23313(f__$1,blockable__$1,meta23314){
return (new cljs.core.async.t_cljs$core$async23313(f__$1,blockable__$1,meta23314));
});

}

return (new cljs.core.async.t_cljs$core$async23313(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23319 = arguments.length;
switch (G__23319) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23322 = arguments.length;
switch (G__23322) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23325 = arguments.length;
switch (G__23325) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23327 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23327);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23327,ret){
return (function (){
return fn1.call(null,val_23327);
});})(val_23327,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23329 = arguments.length;
switch (G__23329) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___23331 = n;
var x_23332 = (0);
while(true){
if((x_23332 < n__4518__auto___23331)){
(a[x_23332] = (0));

var G__23333 = (x_23332 + (1));
x_23332 = G__23333;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23334 = (i + (1));
i = G__23334;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23335 = (function (flag,meta23336){
this.flag = flag;
this.meta23336 = meta23336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23337,meta23336__$1){
var self__ = this;
var _23337__$1 = this;
return (new cljs.core.async.t_cljs$core$async23335(self__.flag,meta23336__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23335.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23337){
var self__ = this;
var _23337__$1 = this;
return self__.meta23336;
});})(flag))
;

cljs.core.async.t_cljs$core$async23335.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23335.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23335.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta23336], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23335.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23335";

cljs.core.async.t_cljs$core$async23335.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async23335");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23335.
 */
cljs.core.async.__GT_t_cljs$core$async23335 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23335(flag__$1,meta23336){
return (new cljs.core.async.t_cljs$core$async23335(flag__$1,meta23336));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23335(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23338 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23338 = (function (flag,cb,meta23339){
this.flag = flag;
this.cb = cb;
this.meta23339 = meta23339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23340,meta23339__$1){
var self__ = this;
var _23340__$1 = this;
return (new cljs.core.async.t_cljs$core$async23338(self__.flag,self__.cb,meta23339__$1));
});

cljs.core.async.t_cljs$core$async23338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23340){
var self__ = this;
var _23340__$1 = this;
return self__.meta23339;
});

cljs.core.async.t_cljs$core$async23338.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23338.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23338.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23338.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta23339], null);
});

cljs.core.async.t_cljs$core$async23338.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23338";

cljs.core.async.t_cljs$core$async23338.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async23338");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23338.
 */
cljs.core.async.__GT_t_cljs$core$async23338 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23338(flag__$1,cb__$1,meta23339){
return (new cljs.core.async.t_cljs$core$async23338(flag__$1,cb__$1,meta23339));
});

}

return (new cljs.core.async.t_cljs$core$async23338(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23341_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23341_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23342_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23342_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23343 = (i + (1));
i = G__23343;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,cljs.core.cst$kw$default)){
var temp__5457__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___23349 = arguments.length;
var i__4642__auto___23350 = (0);
while(true){
if((i__4642__auto___23350 < len__4641__auto___23349)){
args__4647__auto__.push((arguments[i__4642__auto___23350]));

var G__23351 = (i__4642__auto___23350 + (1));
i__4642__auto___23350 = G__23351;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23346){
var map__23347 = p__23346;
var map__23347__$1 = (((((!((map__23347 == null))))?(((((map__23347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23347):map__23347);
var opts = map__23347__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23344){
var G__23345 = cljs.core.first.call(null,seq23344);
var seq23344__$1 = cljs.core.next.call(null,seq23344);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23345,seq23344__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23353 = arguments.length;
switch (G__23353) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23252__auto___23399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto___23399){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto___23399){
return (function (state_23377){
var state_val_23378 = (state_23377[(1)]);
if((state_val_23378 === (7))){
var inst_23373 = (state_23377[(2)]);
var state_23377__$1 = state_23377;
var statearr_23379_23400 = state_23377__$1;
(statearr_23379_23400[(2)] = inst_23373);

(statearr_23379_23400[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23378 === (1))){
var state_23377__$1 = state_23377;
var statearr_23380_23401 = state_23377__$1;
(statearr_23380_23401[(2)] = null);

(statearr_23380_23401[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23378 === (4))){
var inst_23356 = (state_23377[(7)]);
var inst_23356__$1 = (state_23377[(2)]);
var inst_23357 = (inst_23356__$1 == null);
var state_23377__$1 = (function (){var statearr_23381 = state_23377;
(statearr_23381[(7)] = inst_23356__$1);

return statearr_23381;
})();
if(cljs.core.truth_(inst_23357)){
var statearr_23382_23402 = state_23377__$1;
(statearr_23382_23402[(1)] = (5));

} else {
var statearr_23383_23403 = state_23377__$1;
(statearr_23383_23403[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23378 === (13))){
var state_23377__$1 = state_23377;
var statearr_23384_23404 = state_23377__$1;
(statearr_23384_23404[(2)] = null);

(statearr_23384_23404[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23378 === (6))){
var inst_23356 = (state_23377[(7)]);
var state_23377__$1 = state_23377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23377__$1,(11),to,inst_23356);
} else {
if((state_val_23378 === (3))){
var inst_23375 = (state_23377[(2)]);
var state_23377__$1 = state_23377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23377__$1,inst_23375);
} else {
if((state_val_23378 === (12))){
var state_23377__$1 = state_23377;
var statearr_23385_23405 = state_23377__$1;
(statearr_23385_23405[(2)] = null);

(statearr_23385_23405[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23378 === (2))){
var state_23377__$1 = state_23377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23377__$1,(4),from);
} else {
if((state_val_23378 === (11))){
var inst_23366 = (state_23377[(2)]);
var state_23377__$1 = state_23377;
if(cljs.core.truth_(inst_23366)){
var statearr_23386_23406 = state_23377__$1;
(statearr_23386_23406[(1)] = (12));

} else {
var statearr_23387_23407 = state_23377__$1;
(statearr_23387_23407[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23378 === (9))){
var state_23377__$1 = state_23377;
var statearr_23388_23408 = state_23377__$1;
(statearr_23388_23408[(2)] = null);

(statearr_23388_23408[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23378 === (5))){
var state_23377__$1 = state_23377;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23389_23409 = state_23377__$1;
(statearr_23389_23409[(1)] = (8));

} else {
var statearr_23390_23410 = state_23377__$1;
(statearr_23390_23410[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23378 === (14))){
var inst_23371 = (state_23377[(2)]);
var state_23377__$1 = state_23377;
var statearr_23391_23411 = state_23377__$1;
(statearr_23391_23411[(2)] = inst_23371);

(statearr_23391_23411[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23378 === (10))){
var inst_23363 = (state_23377[(2)]);
var state_23377__$1 = state_23377;
var statearr_23392_23412 = state_23377__$1;
(statearr_23392_23412[(2)] = inst_23363);

(statearr_23392_23412[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23378 === (8))){
var inst_23360 = cljs.core.async.close_BANG_.call(null,to);
var state_23377__$1 = state_23377;
var statearr_23393_23413 = state_23377__$1;
(statearr_23393_23413[(2)] = inst_23360);

(statearr_23393_23413[(1)] = (10));


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
});})(c__23252__auto___23399))
;
return ((function (switch__23157__auto__,c__23252__auto___23399){
return (function() {
var cljs$core$async$state_machine__23158__auto__ = null;
var cljs$core$async$state_machine__23158__auto____0 = (function (){
var statearr_23394 = [null,null,null,null,null,null,null,null];
(statearr_23394[(0)] = cljs$core$async$state_machine__23158__auto__);

(statearr_23394[(1)] = (1));

return statearr_23394;
});
var cljs$core$async$state_machine__23158__auto____1 = (function (state_23377){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_23377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e23395){if((e23395 instanceof Object)){
var ex__23161__auto__ = e23395;
var statearr_23396_23414 = state_23377;
(statearr_23396_23414[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23377);

return cljs.core.cst$kw$recur;
} else {
throw e23395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__23415 = state_23377;
state_23377 = G__23415;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
cljs$core$async$state_machine__23158__auto__ = function(state_23377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23158__auto____1.call(this,state_23377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23158__auto____0;
cljs$core$async$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23158__auto____1;
return cljs$core$async$state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto___23399))
})();
var state__23254__auto__ = (function (){var statearr_23397 = f__23253__auto__.call(null);
(statearr_23397[(6)] = c__23252__auto___23399);

return statearr_23397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto___23399))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23416){
var vec__23417 = p__23416;
var v = cljs.core.nth.call(null,vec__23417,(0),null);
var p = cljs.core.nth.call(null,vec__23417,(1),null);
var job = vec__23417;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23252__auto___23588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto___23588,res,vec__23417,v,p,job,jobs,results){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto___23588,res,vec__23417,v,p,job,jobs,results){
return (function (state_23424){
var state_val_23425 = (state_23424[(1)]);
if((state_val_23425 === (1))){
var state_23424__$1 = state_23424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23424__$1,(2),res,v);
} else {
if((state_val_23425 === (2))){
var inst_23421 = (state_23424[(2)]);
var inst_23422 = cljs.core.async.close_BANG_.call(null,res);
var state_23424__$1 = (function (){var statearr_23426 = state_23424;
(statearr_23426[(7)] = inst_23421);

return statearr_23426;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23424__$1,inst_23422);
} else {
return null;
}
}
});})(c__23252__auto___23588,res,vec__23417,v,p,job,jobs,results))
;
return ((function (switch__23157__auto__,c__23252__auto___23588,res,vec__23417,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____0 = (function (){
var statearr_23427 = [null,null,null,null,null,null,null,null];
(statearr_23427[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__);

(statearr_23427[(1)] = (1));

return statearr_23427;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____1 = (function (state_23424){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_23424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e23428){if((e23428 instanceof Object)){
var ex__23161__auto__ = e23428;
var statearr_23429_23589 = state_23424;
(statearr_23429_23589[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23424);

return cljs.core.cst$kw$recur;
} else {
throw e23428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__23590 = state_23424;
state_23424 = G__23590;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__ = function(state_23424){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____1.call(this,state_23424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto___23588,res,vec__23417,v,p,job,jobs,results))
})();
var state__23254__auto__ = (function (){var statearr_23430 = f__23253__auto__.call(null);
(statearr_23430[(6)] = c__23252__auto___23588);

return statearr_23430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto___23588,res,vec__23417,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23431){
var vec__23432 = p__23431;
var v = cljs.core.nth.call(null,vec__23432,(0),null);
var p = cljs.core.nth.call(null,vec__23432,(1),null);
var job = vec__23432;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___23591 = n;
var __23592 = (0);
while(true){
if((__23592 < n__4518__auto___23591)){
var G__23435_23593 = type;
var G__23435_23594__$1 = (((G__23435_23593 instanceof cljs.core.Keyword))?G__23435_23593.fqn:null);
switch (G__23435_23594__$1) {
case "compute":
var c__23252__auto___23596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23592,c__23252__auto___23596,G__23435_23593,G__23435_23594__$1,n__4518__auto___23591,jobs,results,process,async){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (__23592,c__23252__auto___23596,G__23435_23593,G__23435_23594__$1,n__4518__auto___23591,jobs,results,process,async){
return (function (state_23448){
var state_val_23449 = (state_23448[(1)]);
if((state_val_23449 === (1))){
var state_23448__$1 = state_23448;
var statearr_23450_23597 = state_23448__$1;
(statearr_23450_23597[(2)] = null);

(statearr_23450_23597[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23449 === (2))){
var state_23448__$1 = state_23448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23448__$1,(4),jobs);
} else {
if((state_val_23449 === (3))){
var inst_23446 = (state_23448[(2)]);
var state_23448__$1 = state_23448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23448__$1,inst_23446);
} else {
if((state_val_23449 === (4))){
var inst_23438 = (state_23448[(2)]);
var inst_23439 = process.call(null,inst_23438);
var state_23448__$1 = state_23448;
if(cljs.core.truth_(inst_23439)){
var statearr_23451_23598 = state_23448__$1;
(statearr_23451_23598[(1)] = (5));

} else {
var statearr_23452_23599 = state_23448__$1;
(statearr_23452_23599[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23449 === (5))){
var state_23448__$1 = state_23448;
var statearr_23453_23600 = state_23448__$1;
(statearr_23453_23600[(2)] = null);

(statearr_23453_23600[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23449 === (6))){
var state_23448__$1 = state_23448;
var statearr_23454_23601 = state_23448__$1;
(statearr_23454_23601[(2)] = null);

(statearr_23454_23601[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23449 === (7))){
var inst_23444 = (state_23448[(2)]);
var state_23448__$1 = state_23448;
var statearr_23455_23602 = state_23448__$1;
(statearr_23455_23602[(2)] = inst_23444);

(statearr_23455_23602[(1)] = (3));


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
});})(__23592,c__23252__auto___23596,G__23435_23593,G__23435_23594__$1,n__4518__auto___23591,jobs,results,process,async))
;
return ((function (__23592,switch__23157__auto__,c__23252__auto___23596,G__23435_23593,G__23435_23594__$1,n__4518__auto___23591,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____0 = (function (){
var statearr_23456 = [null,null,null,null,null,null,null];
(statearr_23456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__);

(statearr_23456[(1)] = (1));

return statearr_23456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____1 = (function (state_23448){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_23448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e23457){if((e23457 instanceof Object)){
var ex__23161__auto__ = e23457;
var statearr_23458_23603 = state_23448;
(statearr_23458_23603[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23448);

return cljs.core.cst$kw$recur;
} else {
throw e23457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__23604 = state_23448;
state_23448 = G__23604;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__ = function(state_23448){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____1.call(this,state_23448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__;
})()
;})(__23592,switch__23157__auto__,c__23252__auto___23596,G__23435_23593,G__23435_23594__$1,n__4518__auto___23591,jobs,results,process,async))
})();
var state__23254__auto__ = (function (){var statearr_23459 = f__23253__auto__.call(null);
(statearr_23459[(6)] = c__23252__auto___23596);

return statearr_23459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(__23592,c__23252__auto___23596,G__23435_23593,G__23435_23594__$1,n__4518__auto___23591,jobs,results,process,async))
);


break;
case "async":
var c__23252__auto___23605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23592,c__23252__auto___23605,G__23435_23593,G__23435_23594__$1,n__4518__auto___23591,jobs,results,process,async){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (__23592,c__23252__auto___23605,G__23435_23593,G__23435_23594__$1,n__4518__auto___23591,jobs,results,process,async){
return (function (state_23472){
var state_val_23473 = (state_23472[(1)]);
if((state_val_23473 === (1))){
var state_23472__$1 = state_23472;
var statearr_23474_23606 = state_23472__$1;
(statearr_23474_23606[(2)] = null);

(statearr_23474_23606[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23473 === (2))){
var state_23472__$1 = state_23472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23472__$1,(4),jobs);
} else {
if((state_val_23473 === (3))){
var inst_23470 = (state_23472[(2)]);
var state_23472__$1 = state_23472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23472__$1,inst_23470);
} else {
if((state_val_23473 === (4))){
var inst_23462 = (state_23472[(2)]);
var inst_23463 = async.call(null,inst_23462);
var state_23472__$1 = state_23472;
if(cljs.core.truth_(inst_23463)){
var statearr_23475_23607 = state_23472__$1;
(statearr_23475_23607[(1)] = (5));

} else {
var statearr_23476_23608 = state_23472__$1;
(statearr_23476_23608[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23473 === (5))){
var state_23472__$1 = state_23472;
var statearr_23477_23609 = state_23472__$1;
(statearr_23477_23609[(2)] = null);

(statearr_23477_23609[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23473 === (6))){
var state_23472__$1 = state_23472;
var statearr_23478_23610 = state_23472__$1;
(statearr_23478_23610[(2)] = null);

(statearr_23478_23610[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23473 === (7))){
var inst_23468 = (state_23472[(2)]);
var state_23472__$1 = state_23472;
var statearr_23479_23611 = state_23472__$1;
(statearr_23479_23611[(2)] = inst_23468);

(statearr_23479_23611[(1)] = (3));


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
});})(__23592,c__23252__auto___23605,G__23435_23593,G__23435_23594__$1,n__4518__auto___23591,jobs,results,process,async))
;
return ((function (__23592,switch__23157__auto__,c__23252__auto___23605,G__23435_23593,G__23435_23594__$1,n__4518__auto___23591,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____0 = (function (){
var statearr_23480 = [null,null,null,null,null,null,null];
(statearr_23480[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__);

(statearr_23480[(1)] = (1));

return statearr_23480;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____1 = (function (state_23472){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_23472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e23481){if((e23481 instanceof Object)){
var ex__23161__auto__ = e23481;
var statearr_23482_23612 = state_23472;
(statearr_23482_23612[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23472);

return cljs.core.cst$kw$recur;
} else {
throw e23481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__23613 = state_23472;
state_23472 = G__23613;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__ = function(state_23472){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____1.call(this,state_23472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__;
})()
;})(__23592,switch__23157__auto__,c__23252__auto___23605,G__23435_23593,G__23435_23594__$1,n__4518__auto___23591,jobs,results,process,async))
})();
var state__23254__auto__ = (function (){var statearr_23483 = f__23253__auto__.call(null);
(statearr_23483[(6)] = c__23252__auto___23605);

return statearr_23483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(__23592,c__23252__auto___23605,G__23435_23593,G__23435_23594__$1,n__4518__auto___23591,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23435_23594__$1)].join('')));

}

var G__23614 = (__23592 + (1));
__23592 = G__23614;
continue;
} else {
}
break;
}

var c__23252__auto___23615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto___23615,jobs,results,process,async){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto___23615,jobs,results,process,async){
return (function (state_23505){
var state_val_23506 = (state_23505[(1)]);
if((state_val_23506 === (1))){
var state_23505__$1 = state_23505;
var statearr_23507_23616 = state_23505__$1;
(statearr_23507_23616[(2)] = null);

(statearr_23507_23616[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23506 === (2))){
var state_23505__$1 = state_23505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23505__$1,(4),from);
} else {
if((state_val_23506 === (3))){
var inst_23503 = (state_23505[(2)]);
var state_23505__$1 = state_23505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23505__$1,inst_23503);
} else {
if((state_val_23506 === (4))){
var inst_23486 = (state_23505[(7)]);
var inst_23486__$1 = (state_23505[(2)]);
var inst_23487 = (inst_23486__$1 == null);
var state_23505__$1 = (function (){var statearr_23508 = state_23505;
(statearr_23508[(7)] = inst_23486__$1);

return statearr_23508;
})();
if(cljs.core.truth_(inst_23487)){
var statearr_23509_23617 = state_23505__$1;
(statearr_23509_23617[(1)] = (5));

} else {
var statearr_23510_23618 = state_23505__$1;
(statearr_23510_23618[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23506 === (5))){
var inst_23489 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23505__$1 = state_23505;
var statearr_23511_23619 = state_23505__$1;
(statearr_23511_23619[(2)] = inst_23489);

(statearr_23511_23619[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23506 === (6))){
var inst_23491 = (state_23505[(8)]);
var inst_23486 = (state_23505[(7)]);
var inst_23491__$1 = cljs.core.async.chan.call(null,(1));
var inst_23492 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23493 = [inst_23486,inst_23491__$1];
var inst_23494 = (new cljs.core.PersistentVector(null,2,(5),inst_23492,inst_23493,null));
var state_23505__$1 = (function (){var statearr_23512 = state_23505;
(statearr_23512[(8)] = inst_23491__$1);

return statearr_23512;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23505__$1,(8),jobs,inst_23494);
} else {
if((state_val_23506 === (7))){
var inst_23501 = (state_23505[(2)]);
var state_23505__$1 = state_23505;
var statearr_23513_23620 = state_23505__$1;
(statearr_23513_23620[(2)] = inst_23501);

(statearr_23513_23620[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23506 === (8))){
var inst_23491 = (state_23505[(8)]);
var inst_23496 = (state_23505[(2)]);
var state_23505__$1 = (function (){var statearr_23514 = state_23505;
(statearr_23514[(9)] = inst_23496);

return statearr_23514;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23505__$1,(9),results,inst_23491);
} else {
if((state_val_23506 === (9))){
var inst_23498 = (state_23505[(2)]);
var state_23505__$1 = (function (){var statearr_23515 = state_23505;
(statearr_23515[(10)] = inst_23498);

return statearr_23515;
})();
var statearr_23516_23621 = state_23505__$1;
(statearr_23516_23621[(2)] = null);

(statearr_23516_23621[(1)] = (2));


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
});})(c__23252__auto___23615,jobs,results,process,async))
;
return ((function (switch__23157__auto__,c__23252__auto___23615,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____0 = (function (){
var statearr_23517 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23517[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__);

(statearr_23517[(1)] = (1));

return statearr_23517;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____1 = (function (state_23505){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_23505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e23518){if((e23518 instanceof Object)){
var ex__23161__auto__ = e23518;
var statearr_23519_23622 = state_23505;
(statearr_23519_23622[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23505);

return cljs.core.cst$kw$recur;
} else {
throw e23518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__23623 = state_23505;
state_23505 = G__23623;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__ = function(state_23505){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____1.call(this,state_23505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto___23615,jobs,results,process,async))
})();
var state__23254__auto__ = (function (){var statearr_23520 = f__23253__auto__.call(null);
(statearr_23520[(6)] = c__23252__auto___23615);

return statearr_23520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto___23615,jobs,results,process,async))
);


var c__23252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto__,jobs,results,process,async){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto__,jobs,results,process,async){
return (function (state_23558){
var state_val_23559 = (state_23558[(1)]);
if((state_val_23559 === (7))){
var inst_23554 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
var statearr_23560_23624 = state_23558__$1;
(statearr_23560_23624[(2)] = inst_23554);

(statearr_23560_23624[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23559 === (20))){
var state_23558__$1 = state_23558;
var statearr_23561_23625 = state_23558__$1;
(statearr_23561_23625[(2)] = null);

(statearr_23561_23625[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23559 === (1))){
var state_23558__$1 = state_23558;
var statearr_23562_23626 = state_23558__$1;
(statearr_23562_23626[(2)] = null);

(statearr_23562_23626[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23559 === (4))){
var inst_23523 = (state_23558[(7)]);
var inst_23523__$1 = (state_23558[(2)]);
var inst_23524 = (inst_23523__$1 == null);
var state_23558__$1 = (function (){var statearr_23563 = state_23558;
(statearr_23563[(7)] = inst_23523__$1);

return statearr_23563;
})();
if(cljs.core.truth_(inst_23524)){
var statearr_23564_23627 = state_23558__$1;
(statearr_23564_23627[(1)] = (5));

} else {
var statearr_23565_23628 = state_23558__$1;
(statearr_23565_23628[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23559 === (15))){
var inst_23536 = (state_23558[(8)]);
var state_23558__$1 = state_23558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23558__$1,(18),to,inst_23536);
} else {
if((state_val_23559 === (21))){
var inst_23549 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
var statearr_23566_23629 = state_23558__$1;
(statearr_23566_23629[(2)] = inst_23549);

(statearr_23566_23629[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23559 === (13))){
var inst_23551 = (state_23558[(2)]);
var state_23558__$1 = (function (){var statearr_23567 = state_23558;
(statearr_23567[(9)] = inst_23551);

return statearr_23567;
})();
var statearr_23568_23630 = state_23558__$1;
(statearr_23568_23630[(2)] = null);

(statearr_23568_23630[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23559 === (6))){
var inst_23523 = (state_23558[(7)]);
var state_23558__$1 = state_23558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23558__$1,(11),inst_23523);
} else {
if((state_val_23559 === (17))){
var inst_23544 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
if(cljs.core.truth_(inst_23544)){
var statearr_23569_23631 = state_23558__$1;
(statearr_23569_23631[(1)] = (19));

} else {
var statearr_23570_23632 = state_23558__$1;
(statearr_23570_23632[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23559 === (3))){
var inst_23556 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23558__$1,inst_23556);
} else {
if((state_val_23559 === (12))){
var inst_23533 = (state_23558[(10)]);
var state_23558__$1 = state_23558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23558__$1,(14),inst_23533);
} else {
if((state_val_23559 === (2))){
var state_23558__$1 = state_23558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23558__$1,(4),results);
} else {
if((state_val_23559 === (19))){
var state_23558__$1 = state_23558;
var statearr_23571_23633 = state_23558__$1;
(statearr_23571_23633[(2)] = null);

(statearr_23571_23633[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23559 === (11))){
var inst_23533 = (state_23558[(2)]);
var state_23558__$1 = (function (){var statearr_23572 = state_23558;
(statearr_23572[(10)] = inst_23533);

return statearr_23572;
})();
var statearr_23573_23634 = state_23558__$1;
(statearr_23573_23634[(2)] = null);

(statearr_23573_23634[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23559 === (9))){
var state_23558__$1 = state_23558;
var statearr_23574_23635 = state_23558__$1;
(statearr_23574_23635[(2)] = null);

(statearr_23574_23635[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23559 === (5))){
var state_23558__$1 = state_23558;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23575_23636 = state_23558__$1;
(statearr_23575_23636[(1)] = (8));

} else {
var statearr_23576_23637 = state_23558__$1;
(statearr_23576_23637[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23559 === (14))){
var inst_23538 = (state_23558[(11)]);
var inst_23536 = (state_23558[(8)]);
var inst_23536__$1 = (state_23558[(2)]);
var inst_23537 = (inst_23536__$1 == null);
var inst_23538__$1 = cljs.core.not.call(null,inst_23537);
var state_23558__$1 = (function (){var statearr_23577 = state_23558;
(statearr_23577[(11)] = inst_23538__$1);

(statearr_23577[(8)] = inst_23536__$1);

return statearr_23577;
})();
if(inst_23538__$1){
var statearr_23578_23638 = state_23558__$1;
(statearr_23578_23638[(1)] = (15));

} else {
var statearr_23579_23639 = state_23558__$1;
(statearr_23579_23639[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23559 === (16))){
var inst_23538 = (state_23558[(11)]);
var state_23558__$1 = state_23558;
var statearr_23580_23640 = state_23558__$1;
(statearr_23580_23640[(2)] = inst_23538);

(statearr_23580_23640[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23559 === (10))){
var inst_23530 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
var statearr_23581_23641 = state_23558__$1;
(statearr_23581_23641[(2)] = inst_23530);

(statearr_23581_23641[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23559 === (18))){
var inst_23541 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
var statearr_23582_23642 = state_23558__$1;
(statearr_23582_23642[(2)] = inst_23541);

(statearr_23582_23642[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23559 === (8))){
var inst_23527 = cljs.core.async.close_BANG_.call(null,to);
var state_23558__$1 = state_23558;
var statearr_23583_23643 = state_23558__$1;
(statearr_23583_23643[(2)] = inst_23527);

(statearr_23583_23643[(1)] = (10));


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
});})(c__23252__auto__,jobs,results,process,async))
;
return ((function (switch__23157__auto__,c__23252__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____0 = (function (){
var statearr_23584 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23584[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__);

(statearr_23584[(1)] = (1));

return statearr_23584;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____1 = (function (state_23558){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_23558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e23585){if((e23585 instanceof Object)){
var ex__23161__auto__ = e23585;
var statearr_23586_23644 = state_23558;
(statearr_23586_23644[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23558);

return cljs.core.cst$kw$recur;
} else {
throw e23585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__23645 = state_23558;
state_23558 = G__23645;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__ = function(state_23558){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____1.call(this,state_23558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23158__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto__,jobs,results,process,async))
})();
var state__23254__auto__ = (function (){var statearr_23587 = f__23253__auto__.call(null);
(statearr_23587[(6)] = c__23252__auto__);

return statearr_23587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto__,jobs,results,process,async))
);

return c__23252__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__23647 = arguments.length;
switch (G__23647) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__23650 = arguments.length;
switch (G__23650) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__23653 = arguments.length;
switch (G__23653) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23252__auto___23702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto___23702,tc,fc){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto___23702,tc,fc){
return (function (state_23679){
var state_val_23680 = (state_23679[(1)]);
if((state_val_23680 === (7))){
var inst_23675 = (state_23679[(2)]);
var state_23679__$1 = state_23679;
var statearr_23681_23703 = state_23679__$1;
(statearr_23681_23703[(2)] = inst_23675);

(statearr_23681_23703[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23680 === (1))){
var state_23679__$1 = state_23679;
var statearr_23682_23704 = state_23679__$1;
(statearr_23682_23704[(2)] = null);

(statearr_23682_23704[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23680 === (4))){
var inst_23656 = (state_23679[(7)]);
var inst_23656__$1 = (state_23679[(2)]);
var inst_23657 = (inst_23656__$1 == null);
var state_23679__$1 = (function (){var statearr_23683 = state_23679;
(statearr_23683[(7)] = inst_23656__$1);

return statearr_23683;
})();
if(cljs.core.truth_(inst_23657)){
var statearr_23684_23705 = state_23679__$1;
(statearr_23684_23705[(1)] = (5));

} else {
var statearr_23685_23706 = state_23679__$1;
(statearr_23685_23706[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23680 === (13))){
var state_23679__$1 = state_23679;
var statearr_23686_23707 = state_23679__$1;
(statearr_23686_23707[(2)] = null);

(statearr_23686_23707[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23680 === (6))){
var inst_23656 = (state_23679[(7)]);
var inst_23662 = p.call(null,inst_23656);
var state_23679__$1 = state_23679;
if(cljs.core.truth_(inst_23662)){
var statearr_23687_23708 = state_23679__$1;
(statearr_23687_23708[(1)] = (9));

} else {
var statearr_23688_23709 = state_23679__$1;
(statearr_23688_23709[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23680 === (3))){
var inst_23677 = (state_23679[(2)]);
var state_23679__$1 = state_23679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23679__$1,inst_23677);
} else {
if((state_val_23680 === (12))){
var state_23679__$1 = state_23679;
var statearr_23689_23710 = state_23679__$1;
(statearr_23689_23710[(2)] = null);

(statearr_23689_23710[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23680 === (2))){
var state_23679__$1 = state_23679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23679__$1,(4),ch);
} else {
if((state_val_23680 === (11))){
var inst_23656 = (state_23679[(7)]);
var inst_23666 = (state_23679[(2)]);
var state_23679__$1 = state_23679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23679__$1,(8),inst_23666,inst_23656);
} else {
if((state_val_23680 === (9))){
var state_23679__$1 = state_23679;
var statearr_23690_23711 = state_23679__$1;
(statearr_23690_23711[(2)] = tc);

(statearr_23690_23711[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23680 === (5))){
var inst_23659 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23660 = cljs.core.async.close_BANG_.call(null,fc);
var state_23679__$1 = (function (){var statearr_23691 = state_23679;
(statearr_23691[(8)] = inst_23659);

return statearr_23691;
})();
var statearr_23692_23712 = state_23679__$1;
(statearr_23692_23712[(2)] = inst_23660);

(statearr_23692_23712[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23680 === (14))){
var inst_23673 = (state_23679[(2)]);
var state_23679__$1 = state_23679;
var statearr_23693_23713 = state_23679__$1;
(statearr_23693_23713[(2)] = inst_23673);

(statearr_23693_23713[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23680 === (10))){
var state_23679__$1 = state_23679;
var statearr_23694_23714 = state_23679__$1;
(statearr_23694_23714[(2)] = fc);

(statearr_23694_23714[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23680 === (8))){
var inst_23668 = (state_23679[(2)]);
var state_23679__$1 = state_23679;
if(cljs.core.truth_(inst_23668)){
var statearr_23695_23715 = state_23679__$1;
(statearr_23695_23715[(1)] = (12));

} else {
var statearr_23696_23716 = state_23679__$1;
(statearr_23696_23716[(1)] = (13));

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
});})(c__23252__auto___23702,tc,fc))
;
return ((function (switch__23157__auto__,c__23252__auto___23702,tc,fc){
return (function() {
var cljs$core$async$state_machine__23158__auto__ = null;
var cljs$core$async$state_machine__23158__auto____0 = (function (){
var statearr_23697 = [null,null,null,null,null,null,null,null,null];
(statearr_23697[(0)] = cljs$core$async$state_machine__23158__auto__);

(statearr_23697[(1)] = (1));

return statearr_23697;
});
var cljs$core$async$state_machine__23158__auto____1 = (function (state_23679){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_23679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e23698){if((e23698 instanceof Object)){
var ex__23161__auto__ = e23698;
var statearr_23699_23717 = state_23679;
(statearr_23699_23717[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23679);

return cljs.core.cst$kw$recur;
} else {
throw e23698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__23718 = state_23679;
state_23679 = G__23718;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
cljs$core$async$state_machine__23158__auto__ = function(state_23679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23158__auto____1.call(this,state_23679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23158__auto____0;
cljs$core$async$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23158__auto____1;
return cljs$core$async$state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto___23702,tc,fc))
})();
var state__23254__auto__ = (function (){var statearr_23700 = f__23253__auto__.call(null);
(statearr_23700[(6)] = c__23252__auto___23702);

return statearr_23700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto___23702,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto__){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto__){
return (function (state_23739){
var state_val_23740 = (state_23739[(1)]);
if((state_val_23740 === (7))){
var inst_23735 = (state_23739[(2)]);
var state_23739__$1 = state_23739;
var statearr_23741_23759 = state_23739__$1;
(statearr_23741_23759[(2)] = inst_23735);

(statearr_23741_23759[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23740 === (1))){
var inst_23719 = init;
var state_23739__$1 = (function (){var statearr_23742 = state_23739;
(statearr_23742[(7)] = inst_23719);

return statearr_23742;
})();
var statearr_23743_23760 = state_23739__$1;
(statearr_23743_23760[(2)] = null);

(statearr_23743_23760[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23740 === (4))){
var inst_23722 = (state_23739[(8)]);
var inst_23722__$1 = (state_23739[(2)]);
var inst_23723 = (inst_23722__$1 == null);
var state_23739__$1 = (function (){var statearr_23744 = state_23739;
(statearr_23744[(8)] = inst_23722__$1);

return statearr_23744;
})();
if(cljs.core.truth_(inst_23723)){
var statearr_23745_23761 = state_23739__$1;
(statearr_23745_23761[(1)] = (5));

} else {
var statearr_23746_23762 = state_23739__$1;
(statearr_23746_23762[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23740 === (6))){
var inst_23722 = (state_23739[(8)]);
var inst_23726 = (state_23739[(9)]);
var inst_23719 = (state_23739[(7)]);
var inst_23726__$1 = f.call(null,inst_23719,inst_23722);
var inst_23727 = cljs.core.reduced_QMARK_.call(null,inst_23726__$1);
var state_23739__$1 = (function (){var statearr_23747 = state_23739;
(statearr_23747[(9)] = inst_23726__$1);

return statearr_23747;
})();
if(inst_23727){
var statearr_23748_23763 = state_23739__$1;
(statearr_23748_23763[(1)] = (8));

} else {
var statearr_23749_23764 = state_23739__$1;
(statearr_23749_23764[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23740 === (3))){
var inst_23737 = (state_23739[(2)]);
var state_23739__$1 = state_23739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23739__$1,inst_23737);
} else {
if((state_val_23740 === (2))){
var state_23739__$1 = state_23739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23739__$1,(4),ch);
} else {
if((state_val_23740 === (9))){
var inst_23726 = (state_23739[(9)]);
var inst_23719 = inst_23726;
var state_23739__$1 = (function (){var statearr_23750 = state_23739;
(statearr_23750[(7)] = inst_23719);

return statearr_23750;
})();
var statearr_23751_23765 = state_23739__$1;
(statearr_23751_23765[(2)] = null);

(statearr_23751_23765[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23740 === (5))){
var inst_23719 = (state_23739[(7)]);
var state_23739__$1 = state_23739;
var statearr_23752_23766 = state_23739__$1;
(statearr_23752_23766[(2)] = inst_23719);

(statearr_23752_23766[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23740 === (10))){
var inst_23733 = (state_23739[(2)]);
var state_23739__$1 = state_23739;
var statearr_23753_23767 = state_23739__$1;
(statearr_23753_23767[(2)] = inst_23733);

(statearr_23753_23767[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23740 === (8))){
var inst_23726 = (state_23739[(9)]);
var inst_23729 = cljs.core.deref.call(null,inst_23726);
var state_23739__$1 = state_23739;
var statearr_23754_23768 = state_23739__$1;
(statearr_23754_23768[(2)] = inst_23729);

(statearr_23754_23768[(1)] = (10));


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
});})(c__23252__auto__))
;
return ((function (switch__23157__auto__,c__23252__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23158__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23158__auto____0 = (function (){
var statearr_23755 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23755[(0)] = cljs$core$async$reduce_$_state_machine__23158__auto__);

(statearr_23755[(1)] = (1));

return statearr_23755;
});
var cljs$core$async$reduce_$_state_machine__23158__auto____1 = (function (state_23739){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_23739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e23756){if((e23756 instanceof Object)){
var ex__23161__auto__ = e23756;
var statearr_23757_23769 = state_23739;
(statearr_23757_23769[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23739);

return cljs.core.cst$kw$recur;
} else {
throw e23756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__23770 = state_23739;
state_23739 = G__23770;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23158__auto__ = function(state_23739){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23158__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23158__auto____1.call(this,state_23739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23158__auto____0;
cljs$core$async$reduce_$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23158__auto____1;
return cljs$core$async$reduce_$_state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto__))
})();
var state__23254__auto__ = (function (){var statearr_23758 = f__23253__auto__.call(null);
(statearr_23758[(6)] = c__23252__auto__);

return statearr_23758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto__))
);

return c__23252__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto__,f__$1){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto__,f__$1){
return (function (state_23776){
var state_val_23777 = (state_23776[(1)]);
if((state_val_23777 === (1))){
var inst_23771 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23776__$1 = state_23776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23776__$1,(2),inst_23771);
} else {
if((state_val_23777 === (2))){
var inst_23773 = (state_23776[(2)]);
var inst_23774 = f__$1.call(null,inst_23773);
var state_23776__$1 = state_23776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23776__$1,inst_23774);
} else {
return null;
}
}
});})(c__23252__auto__,f__$1))
;
return ((function (switch__23157__auto__,c__23252__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23158__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23158__auto____0 = (function (){
var statearr_23778 = [null,null,null,null,null,null,null];
(statearr_23778[(0)] = cljs$core$async$transduce_$_state_machine__23158__auto__);

(statearr_23778[(1)] = (1));

return statearr_23778;
});
var cljs$core$async$transduce_$_state_machine__23158__auto____1 = (function (state_23776){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_23776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e23779){if((e23779 instanceof Object)){
var ex__23161__auto__ = e23779;
var statearr_23780_23782 = state_23776;
(statearr_23780_23782[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23776);

return cljs.core.cst$kw$recur;
} else {
throw e23779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__23783 = state_23776;
state_23776 = G__23783;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23158__auto__ = function(state_23776){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23158__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23158__auto____1.call(this,state_23776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23158__auto____0;
cljs$core$async$transduce_$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23158__auto____1;
return cljs$core$async$transduce_$_state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto__,f__$1))
})();
var state__23254__auto__ = (function (){var statearr_23781 = f__23253__auto__.call(null);
(statearr_23781[(6)] = c__23252__auto__);

return statearr_23781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto__,f__$1))
);

return c__23252__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__23785 = arguments.length;
switch (G__23785) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto__){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto__){
return (function (state_23810){
var state_val_23811 = (state_23810[(1)]);
if((state_val_23811 === (7))){
var inst_23792 = (state_23810[(2)]);
var state_23810__$1 = state_23810;
var statearr_23812_23833 = state_23810__$1;
(statearr_23812_23833[(2)] = inst_23792);

(statearr_23812_23833[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23811 === (1))){
var inst_23786 = cljs.core.seq.call(null,coll);
var inst_23787 = inst_23786;
var state_23810__$1 = (function (){var statearr_23813 = state_23810;
(statearr_23813[(7)] = inst_23787);

return statearr_23813;
})();
var statearr_23814_23834 = state_23810__$1;
(statearr_23814_23834[(2)] = null);

(statearr_23814_23834[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23811 === (4))){
var inst_23787 = (state_23810[(7)]);
var inst_23790 = cljs.core.first.call(null,inst_23787);
var state_23810__$1 = state_23810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23810__$1,(7),ch,inst_23790);
} else {
if((state_val_23811 === (13))){
var inst_23804 = (state_23810[(2)]);
var state_23810__$1 = state_23810;
var statearr_23815_23835 = state_23810__$1;
(statearr_23815_23835[(2)] = inst_23804);

(statearr_23815_23835[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23811 === (6))){
var inst_23795 = (state_23810[(2)]);
var state_23810__$1 = state_23810;
if(cljs.core.truth_(inst_23795)){
var statearr_23816_23836 = state_23810__$1;
(statearr_23816_23836[(1)] = (8));

} else {
var statearr_23817_23837 = state_23810__$1;
(statearr_23817_23837[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23811 === (3))){
var inst_23808 = (state_23810[(2)]);
var state_23810__$1 = state_23810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23810__$1,inst_23808);
} else {
if((state_val_23811 === (12))){
var state_23810__$1 = state_23810;
var statearr_23818_23838 = state_23810__$1;
(statearr_23818_23838[(2)] = null);

(statearr_23818_23838[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23811 === (2))){
var inst_23787 = (state_23810[(7)]);
var state_23810__$1 = state_23810;
if(cljs.core.truth_(inst_23787)){
var statearr_23819_23839 = state_23810__$1;
(statearr_23819_23839[(1)] = (4));

} else {
var statearr_23820_23840 = state_23810__$1;
(statearr_23820_23840[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23811 === (11))){
var inst_23801 = cljs.core.async.close_BANG_.call(null,ch);
var state_23810__$1 = state_23810;
var statearr_23821_23841 = state_23810__$1;
(statearr_23821_23841[(2)] = inst_23801);

(statearr_23821_23841[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23811 === (9))){
var state_23810__$1 = state_23810;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23822_23842 = state_23810__$1;
(statearr_23822_23842[(1)] = (11));

} else {
var statearr_23823_23843 = state_23810__$1;
(statearr_23823_23843[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23811 === (5))){
var inst_23787 = (state_23810[(7)]);
var state_23810__$1 = state_23810;
var statearr_23824_23844 = state_23810__$1;
(statearr_23824_23844[(2)] = inst_23787);

(statearr_23824_23844[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23811 === (10))){
var inst_23806 = (state_23810[(2)]);
var state_23810__$1 = state_23810;
var statearr_23825_23845 = state_23810__$1;
(statearr_23825_23845[(2)] = inst_23806);

(statearr_23825_23845[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23811 === (8))){
var inst_23787 = (state_23810[(7)]);
var inst_23797 = cljs.core.next.call(null,inst_23787);
var inst_23787__$1 = inst_23797;
var state_23810__$1 = (function (){var statearr_23826 = state_23810;
(statearr_23826[(7)] = inst_23787__$1);

return statearr_23826;
})();
var statearr_23827_23846 = state_23810__$1;
(statearr_23827_23846[(2)] = null);

(statearr_23827_23846[(1)] = (2));


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
});})(c__23252__auto__))
;
return ((function (switch__23157__auto__,c__23252__auto__){
return (function() {
var cljs$core$async$state_machine__23158__auto__ = null;
var cljs$core$async$state_machine__23158__auto____0 = (function (){
var statearr_23828 = [null,null,null,null,null,null,null,null];
(statearr_23828[(0)] = cljs$core$async$state_machine__23158__auto__);

(statearr_23828[(1)] = (1));

return statearr_23828;
});
var cljs$core$async$state_machine__23158__auto____1 = (function (state_23810){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_23810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e23829){if((e23829 instanceof Object)){
var ex__23161__auto__ = e23829;
var statearr_23830_23847 = state_23810;
(statearr_23830_23847[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23810);

return cljs.core.cst$kw$recur;
} else {
throw e23829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__23848 = state_23810;
state_23810 = G__23848;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
cljs$core$async$state_machine__23158__auto__ = function(state_23810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23158__auto____1.call(this,state_23810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23158__auto____0;
cljs$core$async$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23158__auto____1;
return cljs$core$async$state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto__))
})();
var state__23254__auto__ = (function (){var statearr_23831 = f__23253__auto__.call(null);
(statearr_23831[(6)] = c__23252__auto__);

return statearr_23831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto__))
);

return c__23252__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23849 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23849 = (function (ch,cs,meta23850){
this.ch = ch;
this.cs = cs;
this.meta23850 = meta23850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23851,meta23850__$1){
var self__ = this;
var _23851__$1 = this;
return (new cljs.core.async.t_cljs$core$async23849(self__.ch,self__.cs,meta23850__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23849.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23851){
var self__ = this;
var _23851__$1 = this;
return self__.meta23850;
});})(cs))
;

cljs.core.async.t_cljs$core$async23849.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23849.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23849.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23849.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23849.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23849.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23849.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta23850], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23849.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23849";

cljs.core.async.t_cljs$core$async23849.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async23849");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23849.
 */
cljs.core.async.__GT_t_cljs$core$async23849 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23849(ch__$1,cs__$1,meta23850){
return (new cljs.core.async.t_cljs$core$async23849(ch__$1,cs__$1,meta23850));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23849(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23252__auto___24071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto___24071,cs,m,dchan,dctr,done){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto___24071,cs,m,dchan,dctr,done){
return (function (state_23986){
var state_val_23987 = (state_23986[(1)]);
if((state_val_23987 === (7))){
var inst_23982 = (state_23986[(2)]);
var state_23986__$1 = state_23986;
var statearr_23988_24072 = state_23986__$1;
(statearr_23988_24072[(2)] = inst_23982);

(statearr_23988_24072[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (20))){
var inst_23885 = (state_23986[(7)]);
var inst_23897 = cljs.core.first.call(null,inst_23885);
var inst_23898 = cljs.core.nth.call(null,inst_23897,(0),null);
var inst_23899 = cljs.core.nth.call(null,inst_23897,(1),null);
var state_23986__$1 = (function (){var statearr_23989 = state_23986;
(statearr_23989[(8)] = inst_23898);

return statearr_23989;
})();
if(cljs.core.truth_(inst_23899)){
var statearr_23990_24073 = state_23986__$1;
(statearr_23990_24073[(1)] = (22));

} else {
var statearr_23991_24074 = state_23986__$1;
(statearr_23991_24074[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (27))){
var inst_23934 = (state_23986[(9)]);
var inst_23854 = (state_23986[(10)]);
var inst_23927 = (state_23986[(11)]);
var inst_23929 = (state_23986[(12)]);
var inst_23934__$1 = cljs.core._nth.call(null,inst_23927,inst_23929);
var inst_23935 = cljs.core.async.put_BANG_.call(null,inst_23934__$1,inst_23854,done);
var state_23986__$1 = (function (){var statearr_23992 = state_23986;
(statearr_23992[(9)] = inst_23934__$1);

return statearr_23992;
})();
if(cljs.core.truth_(inst_23935)){
var statearr_23993_24075 = state_23986__$1;
(statearr_23993_24075[(1)] = (30));

} else {
var statearr_23994_24076 = state_23986__$1;
(statearr_23994_24076[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (1))){
var state_23986__$1 = state_23986;
var statearr_23995_24077 = state_23986__$1;
(statearr_23995_24077[(2)] = null);

(statearr_23995_24077[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (24))){
var inst_23885 = (state_23986[(7)]);
var inst_23904 = (state_23986[(2)]);
var inst_23905 = cljs.core.next.call(null,inst_23885);
var inst_23863 = inst_23905;
var inst_23864 = null;
var inst_23865 = (0);
var inst_23866 = (0);
var state_23986__$1 = (function (){var statearr_23996 = state_23986;
(statearr_23996[(13)] = inst_23904);

(statearr_23996[(14)] = inst_23863);

(statearr_23996[(15)] = inst_23865);

(statearr_23996[(16)] = inst_23864);

(statearr_23996[(17)] = inst_23866);

return statearr_23996;
})();
var statearr_23997_24078 = state_23986__$1;
(statearr_23997_24078[(2)] = null);

(statearr_23997_24078[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (39))){
var state_23986__$1 = state_23986;
var statearr_24001_24079 = state_23986__$1;
(statearr_24001_24079[(2)] = null);

(statearr_24001_24079[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (4))){
var inst_23854 = (state_23986[(10)]);
var inst_23854__$1 = (state_23986[(2)]);
var inst_23855 = (inst_23854__$1 == null);
var state_23986__$1 = (function (){var statearr_24002 = state_23986;
(statearr_24002[(10)] = inst_23854__$1);

return statearr_24002;
})();
if(cljs.core.truth_(inst_23855)){
var statearr_24003_24080 = state_23986__$1;
(statearr_24003_24080[(1)] = (5));

} else {
var statearr_24004_24081 = state_23986__$1;
(statearr_24004_24081[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (15))){
var inst_23863 = (state_23986[(14)]);
var inst_23865 = (state_23986[(15)]);
var inst_23864 = (state_23986[(16)]);
var inst_23866 = (state_23986[(17)]);
var inst_23881 = (state_23986[(2)]);
var inst_23882 = (inst_23866 + (1));
var tmp23998 = inst_23863;
var tmp23999 = inst_23865;
var tmp24000 = inst_23864;
var inst_23863__$1 = tmp23998;
var inst_23864__$1 = tmp24000;
var inst_23865__$1 = tmp23999;
var inst_23866__$1 = inst_23882;
var state_23986__$1 = (function (){var statearr_24005 = state_23986;
(statearr_24005[(14)] = inst_23863__$1);

(statearr_24005[(15)] = inst_23865__$1);

(statearr_24005[(16)] = inst_23864__$1);

(statearr_24005[(17)] = inst_23866__$1);

(statearr_24005[(18)] = inst_23881);

return statearr_24005;
})();
var statearr_24006_24082 = state_23986__$1;
(statearr_24006_24082[(2)] = null);

(statearr_24006_24082[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (21))){
var inst_23908 = (state_23986[(2)]);
var state_23986__$1 = state_23986;
var statearr_24010_24083 = state_23986__$1;
(statearr_24010_24083[(2)] = inst_23908);

(statearr_24010_24083[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (31))){
var inst_23934 = (state_23986[(9)]);
var inst_23938 = done.call(null,null);
var inst_23939 = cljs.core.async.untap_STAR_.call(null,m,inst_23934);
var state_23986__$1 = (function (){var statearr_24011 = state_23986;
(statearr_24011[(19)] = inst_23938);

return statearr_24011;
})();
var statearr_24012_24084 = state_23986__$1;
(statearr_24012_24084[(2)] = inst_23939);

(statearr_24012_24084[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (32))){
var inst_23926 = (state_23986[(20)]);
var inst_23927 = (state_23986[(11)]);
var inst_23929 = (state_23986[(12)]);
var inst_23928 = (state_23986[(21)]);
var inst_23941 = (state_23986[(2)]);
var inst_23942 = (inst_23929 + (1));
var tmp24007 = inst_23926;
var tmp24008 = inst_23927;
var tmp24009 = inst_23928;
var inst_23926__$1 = tmp24007;
var inst_23927__$1 = tmp24008;
var inst_23928__$1 = tmp24009;
var inst_23929__$1 = inst_23942;
var state_23986__$1 = (function (){var statearr_24013 = state_23986;
(statearr_24013[(22)] = inst_23941);

(statearr_24013[(20)] = inst_23926__$1);

(statearr_24013[(11)] = inst_23927__$1);

(statearr_24013[(12)] = inst_23929__$1);

(statearr_24013[(21)] = inst_23928__$1);

return statearr_24013;
})();
var statearr_24014_24085 = state_23986__$1;
(statearr_24014_24085[(2)] = null);

(statearr_24014_24085[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (40))){
var inst_23954 = (state_23986[(23)]);
var inst_23958 = done.call(null,null);
var inst_23959 = cljs.core.async.untap_STAR_.call(null,m,inst_23954);
var state_23986__$1 = (function (){var statearr_24015 = state_23986;
(statearr_24015[(24)] = inst_23958);

return statearr_24015;
})();
var statearr_24016_24086 = state_23986__$1;
(statearr_24016_24086[(2)] = inst_23959);

(statearr_24016_24086[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (33))){
var inst_23945 = (state_23986[(25)]);
var inst_23947 = cljs.core.chunked_seq_QMARK_.call(null,inst_23945);
var state_23986__$1 = state_23986;
if(inst_23947){
var statearr_24017_24087 = state_23986__$1;
(statearr_24017_24087[(1)] = (36));

} else {
var statearr_24018_24088 = state_23986__$1;
(statearr_24018_24088[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (13))){
var inst_23875 = (state_23986[(26)]);
var inst_23878 = cljs.core.async.close_BANG_.call(null,inst_23875);
var state_23986__$1 = state_23986;
var statearr_24019_24089 = state_23986__$1;
(statearr_24019_24089[(2)] = inst_23878);

(statearr_24019_24089[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (22))){
var inst_23898 = (state_23986[(8)]);
var inst_23901 = cljs.core.async.close_BANG_.call(null,inst_23898);
var state_23986__$1 = state_23986;
var statearr_24020_24090 = state_23986__$1;
(statearr_24020_24090[(2)] = inst_23901);

(statearr_24020_24090[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (36))){
var inst_23945 = (state_23986[(25)]);
var inst_23949 = cljs.core.chunk_first.call(null,inst_23945);
var inst_23950 = cljs.core.chunk_rest.call(null,inst_23945);
var inst_23951 = cljs.core.count.call(null,inst_23949);
var inst_23926 = inst_23950;
var inst_23927 = inst_23949;
var inst_23928 = inst_23951;
var inst_23929 = (0);
var state_23986__$1 = (function (){var statearr_24021 = state_23986;
(statearr_24021[(20)] = inst_23926);

(statearr_24021[(11)] = inst_23927);

(statearr_24021[(12)] = inst_23929);

(statearr_24021[(21)] = inst_23928);

return statearr_24021;
})();
var statearr_24022_24091 = state_23986__$1;
(statearr_24022_24091[(2)] = null);

(statearr_24022_24091[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (41))){
var inst_23945 = (state_23986[(25)]);
var inst_23961 = (state_23986[(2)]);
var inst_23962 = cljs.core.next.call(null,inst_23945);
var inst_23926 = inst_23962;
var inst_23927 = null;
var inst_23928 = (0);
var inst_23929 = (0);
var state_23986__$1 = (function (){var statearr_24023 = state_23986;
(statearr_24023[(20)] = inst_23926);

(statearr_24023[(27)] = inst_23961);

(statearr_24023[(11)] = inst_23927);

(statearr_24023[(12)] = inst_23929);

(statearr_24023[(21)] = inst_23928);

return statearr_24023;
})();
var statearr_24024_24092 = state_23986__$1;
(statearr_24024_24092[(2)] = null);

(statearr_24024_24092[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (43))){
var state_23986__$1 = state_23986;
var statearr_24025_24093 = state_23986__$1;
(statearr_24025_24093[(2)] = null);

(statearr_24025_24093[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (29))){
var inst_23970 = (state_23986[(2)]);
var state_23986__$1 = state_23986;
var statearr_24026_24094 = state_23986__$1;
(statearr_24026_24094[(2)] = inst_23970);

(statearr_24026_24094[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (44))){
var inst_23979 = (state_23986[(2)]);
var state_23986__$1 = (function (){var statearr_24027 = state_23986;
(statearr_24027[(28)] = inst_23979);

return statearr_24027;
})();
var statearr_24028_24095 = state_23986__$1;
(statearr_24028_24095[(2)] = null);

(statearr_24028_24095[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (6))){
var inst_23918 = (state_23986[(29)]);
var inst_23917 = cljs.core.deref.call(null,cs);
var inst_23918__$1 = cljs.core.keys.call(null,inst_23917);
var inst_23919 = cljs.core.count.call(null,inst_23918__$1);
var inst_23920 = cljs.core.reset_BANG_.call(null,dctr,inst_23919);
var inst_23925 = cljs.core.seq.call(null,inst_23918__$1);
var inst_23926 = inst_23925;
var inst_23927 = null;
var inst_23928 = (0);
var inst_23929 = (0);
var state_23986__$1 = (function (){var statearr_24029 = state_23986;
(statearr_24029[(20)] = inst_23926);

(statearr_24029[(11)] = inst_23927);

(statearr_24029[(12)] = inst_23929);

(statearr_24029[(30)] = inst_23920);

(statearr_24029[(21)] = inst_23928);

(statearr_24029[(29)] = inst_23918__$1);

return statearr_24029;
})();
var statearr_24030_24096 = state_23986__$1;
(statearr_24030_24096[(2)] = null);

(statearr_24030_24096[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (28))){
var inst_23945 = (state_23986[(25)]);
var inst_23926 = (state_23986[(20)]);
var inst_23945__$1 = cljs.core.seq.call(null,inst_23926);
var state_23986__$1 = (function (){var statearr_24031 = state_23986;
(statearr_24031[(25)] = inst_23945__$1);

return statearr_24031;
})();
if(inst_23945__$1){
var statearr_24032_24097 = state_23986__$1;
(statearr_24032_24097[(1)] = (33));

} else {
var statearr_24033_24098 = state_23986__$1;
(statearr_24033_24098[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (25))){
var inst_23929 = (state_23986[(12)]);
var inst_23928 = (state_23986[(21)]);
var inst_23931 = (inst_23929 < inst_23928);
var inst_23932 = inst_23931;
var state_23986__$1 = state_23986;
if(cljs.core.truth_(inst_23932)){
var statearr_24034_24099 = state_23986__$1;
(statearr_24034_24099[(1)] = (27));

} else {
var statearr_24035_24100 = state_23986__$1;
(statearr_24035_24100[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (34))){
var state_23986__$1 = state_23986;
var statearr_24036_24101 = state_23986__$1;
(statearr_24036_24101[(2)] = null);

(statearr_24036_24101[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (17))){
var state_23986__$1 = state_23986;
var statearr_24037_24102 = state_23986__$1;
(statearr_24037_24102[(2)] = null);

(statearr_24037_24102[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (3))){
var inst_23984 = (state_23986[(2)]);
var state_23986__$1 = state_23986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23986__$1,inst_23984);
} else {
if((state_val_23987 === (12))){
var inst_23913 = (state_23986[(2)]);
var state_23986__$1 = state_23986;
var statearr_24038_24103 = state_23986__$1;
(statearr_24038_24103[(2)] = inst_23913);

(statearr_24038_24103[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (2))){
var state_23986__$1 = state_23986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23986__$1,(4),ch);
} else {
if((state_val_23987 === (23))){
var state_23986__$1 = state_23986;
var statearr_24039_24104 = state_23986__$1;
(statearr_24039_24104[(2)] = null);

(statearr_24039_24104[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (35))){
var inst_23968 = (state_23986[(2)]);
var state_23986__$1 = state_23986;
var statearr_24040_24105 = state_23986__$1;
(statearr_24040_24105[(2)] = inst_23968);

(statearr_24040_24105[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (19))){
var inst_23885 = (state_23986[(7)]);
var inst_23889 = cljs.core.chunk_first.call(null,inst_23885);
var inst_23890 = cljs.core.chunk_rest.call(null,inst_23885);
var inst_23891 = cljs.core.count.call(null,inst_23889);
var inst_23863 = inst_23890;
var inst_23864 = inst_23889;
var inst_23865 = inst_23891;
var inst_23866 = (0);
var state_23986__$1 = (function (){var statearr_24041 = state_23986;
(statearr_24041[(14)] = inst_23863);

(statearr_24041[(15)] = inst_23865);

(statearr_24041[(16)] = inst_23864);

(statearr_24041[(17)] = inst_23866);

return statearr_24041;
})();
var statearr_24042_24106 = state_23986__$1;
(statearr_24042_24106[(2)] = null);

(statearr_24042_24106[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (11))){
var inst_23885 = (state_23986[(7)]);
var inst_23863 = (state_23986[(14)]);
var inst_23885__$1 = cljs.core.seq.call(null,inst_23863);
var state_23986__$1 = (function (){var statearr_24043 = state_23986;
(statearr_24043[(7)] = inst_23885__$1);

return statearr_24043;
})();
if(inst_23885__$1){
var statearr_24044_24107 = state_23986__$1;
(statearr_24044_24107[(1)] = (16));

} else {
var statearr_24045_24108 = state_23986__$1;
(statearr_24045_24108[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (9))){
var inst_23915 = (state_23986[(2)]);
var state_23986__$1 = state_23986;
var statearr_24046_24109 = state_23986__$1;
(statearr_24046_24109[(2)] = inst_23915);

(statearr_24046_24109[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (5))){
var inst_23861 = cljs.core.deref.call(null,cs);
var inst_23862 = cljs.core.seq.call(null,inst_23861);
var inst_23863 = inst_23862;
var inst_23864 = null;
var inst_23865 = (0);
var inst_23866 = (0);
var state_23986__$1 = (function (){var statearr_24047 = state_23986;
(statearr_24047[(14)] = inst_23863);

(statearr_24047[(15)] = inst_23865);

(statearr_24047[(16)] = inst_23864);

(statearr_24047[(17)] = inst_23866);

return statearr_24047;
})();
var statearr_24048_24110 = state_23986__$1;
(statearr_24048_24110[(2)] = null);

(statearr_24048_24110[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (14))){
var state_23986__$1 = state_23986;
var statearr_24049_24111 = state_23986__$1;
(statearr_24049_24111[(2)] = null);

(statearr_24049_24111[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (45))){
var inst_23976 = (state_23986[(2)]);
var state_23986__$1 = state_23986;
var statearr_24050_24112 = state_23986__$1;
(statearr_24050_24112[(2)] = inst_23976);

(statearr_24050_24112[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (26))){
var inst_23918 = (state_23986[(29)]);
var inst_23972 = (state_23986[(2)]);
var inst_23973 = cljs.core.seq.call(null,inst_23918);
var state_23986__$1 = (function (){var statearr_24051 = state_23986;
(statearr_24051[(31)] = inst_23972);

return statearr_24051;
})();
if(inst_23973){
var statearr_24052_24113 = state_23986__$1;
(statearr_24052_24113[(1)] = (42));

} else {
var statearr_24053_24114 = state_23986__$1;
(statearr_24053_24114[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (16))){
var inst_23885 = (state_23986[(7)]);
var inst_23887 = cljs.core.chunked_seq_QMARK_.call(null,inst_23885);
var state_23986__$1 = state_23986;
if(inst_23887){
var statearr_24054_24115 = state_23986__$1;
(statearr_24054_24115[(1)] = (19));

} else {
var statearr_24055_24116 = state_23986__$1;
(statearr_24055_24116[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (38))){
var inst_23965 = (state_23986[(2)]);
var state_23986__$1 = state_23986;
var statearr_24056_24117 = state_23986__$1;
(statearr_24056_24117[(2)] = inst_23965);

(statearr_24056_24117[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (30))){
var state_23986__$1 = state_23986;
var statearr_24057_24118 = state_23986__$1;
(statearr_24057_24118[(2)] = null);

(statearr_24057_24118[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (10))){
var inst_23864 = (state_23986[(16)]);
var inst_23866 = (state_23986[(17)]);
var inst_23874 = cljs.core._nth.call(null,inst_23864,inst_23866);
var inst_23875 = cljs.core.nth.call(null,inst_23874,(0),null);
var inst_23876 = cljs.core.nth.call(null,inst_23874,(1),null);
var state_23986__$1 = (function (){var statearr_24058 = state_23986;
(statearr_24058[(26)] = inst_23875);

return statearr_24058;
})();
if(cljs.core.truth_(inst_23876)){
var statearr_24059_24119 = state_23986__$1;
(statearr_24059_24119[(1)] = (13));

} else {
var statearr_24060_24120 = state_23986__$1;
(statearr_24060_24120[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (18))){
var inst_23911 = (state_23986[(2)]);
var state_23986__$1 = state_23986;
var statearr_24061_24121 = state_23986__$1;
(statearr_24061_24121[(2)] = inst_23911);

(statearr_24061_24121[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (42))){
var state_23986__$1 = state_23986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23986__$1,(45),dchan);
} else {
if((state_val_23987 === (37))){
var inst_23954 = (state_23986[(23)]);
var inst_23854 = (state_23986[(10)]);
var inst_23945 = (state_23986[(25)]);
var inst_23954__$1 = cljs.core.first.call(null,inst_23945);
var inst_23955 = cljs.core.async.put_BANG_.call(null,inst_23954__$1,inst_23854,done);
var state_23986__$1 = (function (){var statearr_24062 = state_23986;
(statearr_24062[(23)] = inst_23954__$1);

return statearr_24062;
})();
if(cljs.core.truth_(inst_23955)){
var statearr_24063_24122 = state_23986__$1;
(statearr_24063_24122[(1)] = (39));

} else {
var statearr_24064_24123 = state_23986__$1;
(statearr_24064_24123[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23987 === (8))){
var inst_23865 = (state_23986[(15)]);
var inst_23866 = (state_23986[(17)]);
var inst_23868 = (inst_23866 < inst_23865);
var inst_23869 = inst_23868;
var state_23986__$1 = state_23986;
if(cljs.core.truth_(inst_23869)){
var statearr_24065_24124 = state_23986__$1;
(statearr_24065_24124[(1)] = (10));

} else {
var statearr_24066_24125 = state_23986__$1;
(statearr_24066_24125[(1)] = (11));

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
});})(c__23252__auto___24071,cs,m,dchan,dctr,done))
;
return ((function (switch__23157__auto__,c__23252__auto___24071,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23158__auto__ = null;
var cljs$core$async$mult_$_state_machine__23158__auto____0 = (function (){
var statearr_24067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24067[(0)] = cljs$core$async$mult_$_state_machine__23158__auto__);

(statearr_24067[(1)] = (1));

return statearr_24067;
});
var cljs$core$async$mult_$_state_machine__23158__auto____1 = (function (state_23986){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_23986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e24068){if((e24068 instanceof Object)){
var ex__23161__auto__ = e24068;
var statearr_24069_24126 = state_23986;
(statearr_24069_24126[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23986);

return cljs.core.cst$kw$recur;
} else {
throw e24068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__24127 = state_23986;
state_23986 = G__24127;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23158__auto__ = function(state_23986){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23158__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23158__auto____1.call(this,state_23986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23158__auto____0;
cljs$core$async$mult_$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23158__auto____1;
return cljs$core$async$mult_$_state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto___24071,cs,m,dchan,dctr,done))
})();
var state__23254__auto__ = (function (){var statearr_24070 = f__23253__auto__.call(null);
(statearr_24070[(6)] = c__23252__auto___24071);

return statearr_24070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto___24071,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24129 = arguments.length;
switch (G__24129) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___24141 = arguments.length;
var i__4642__auto___24142 = (0);
while(true){
if((i__4642__auto___24142 < len__4641__auto___24141)){
args__4647__auto__.push((arguments[i__4642__auto___24142]));

var G__24143 = (i__4642__auto___24142 + (1));
i__4642__auto___24142 = G__24143;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24135){
var map__24136 = p__24135;
var map__24136__$1 = (((((!((map__24136 == null))))?(((((map__24136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24136):map__24136);
var opts = map__24136__$1;
var statearr_24138_24144 = state;
(statearr_24138_24144[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__24136,map__24136__$1,opts){
return (function (val){
var statearr_24139_24145 = state;
(statearr_24139_24145[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24136,map__24136__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_24140_24146 = state;
(statearr_24140_24146[(2)] = cljs.core.deref.call(null,cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24131){
var G__24132 = cljs.core.first.call(null,seq24131);
var seq24131__$1 = cljs.core.next.call(null,seq24131);
var G__24133 = cljs.core.first.call(null,seq24131__$1);
var seq24131__$2 = cljs.core.next.call(null,seq24131__$1);
var G__24134 = cljs.core.first.call(null,seq24131__$2);
var seq24131__$3 = cljs.core.next.call(null,seq24131__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24132,G__24133,G__24134,seq24131__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.call(null,cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,cljs.core.cst$kw$solo,chs);
var pauses = pick.call(null,cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick.call(null,cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24147 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24147 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta24148){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta24148 = meta24148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24149,meta24148__$1){
var self__ = this;
var _24149__$1 = this;
return (new cljs.core.async.t_cljs$core$async24147(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta24148__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24147.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24149){
var self__ = this;
var _24149__$1 = this;
return self__.meta24148;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24147.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24147.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24147.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24147.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24147.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24147.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24147.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24147.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24147.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta24148], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24147.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24147";

cljs.core.async.t_cljs$core$async24147.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24147");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24147.
 */
cljs.core.async.__GT_t_cljs$core$async24147 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24147(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24148){
return (new cljs.core.async.t_cljs$core$async24147(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24148));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24147(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23252__auto___24311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto___24311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto___24311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24251){
var state_val_24252 = (state_24251[(1)]);
if((state_val_24252 === (7))){
var inst_24166 = (state_24251[(2)]);
var state_24251__$1 = state_24251;
var statearr_24253_24312 = state_24251__$1;
(statearr_24253_24312[(2)] = inst_24166);

(statearr_24253_24312[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (20))){
var inst_24178 = (state_24251[(7)]);
var state_24251__$1 = state_24251;
var statearr_24254_24313 = state_24251__$1;
(statearr_24254_24313[(2)] = inst_24178);

(statearr_24254_24313[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (27))){
var state_24251__$1 = state_24251;
var statearr_24255_24314 = state_24251__$1;
(statearr_24255_24314[(2)] = null);

(statearr_24255_24314[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (1))){
var inst_24153 = (state_24251[(8)]);
var inst_24153__$1 = calc_state.call(null);
var inst_24155 = (inst_24153__$1 == null);
var inst_24156 = cljs.core.not.call(null,inst_24155);
var state_24251__$1 = (function (){var statearr_24256 = state_24251;
(statearr_24256[(8)] = inst_24153__$1);

return statearr_24256;
})();
if(inst_24156){
var statearr_24257_24315 = state_24251__$1;
(statearr_24257_24315[(1)] = (2));

} else {
var statearr_24258_24316 = state_24251__$1;
(statearr_24258_24316[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (24))){
var inst_24211 = (state_24251[(9)]);
var inst_24202 = (state_24251[(10)]);
var inst_24225 = (state_24251[(11)]);
var inst_24225__$1 = inst_24202.call(null,inst_24211);
var state_24251__$1 = (function (){var statearr_24259 = state_24251;
(statearr_24259[(11)] = inst_24225__$1);

return statearr_24259;
})();
if(cljs.core.truth_(inst_24225__$1)){
var statearr_24260_24317 = state_24251__$1;
(statearr_24260_24317[(1)] = (29));

} else {
var statearr_24261_24318 = state_24251__$1;
(statearr_24261_24318[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (4))){
var inst_24169 = (state_24251[(2)]);
var state_24251__$1 = state_24251;
if(cljs.core.truth_(inst_24169)){
var statearr_24262_24319 = state_24251__$1;
(statearr_24262_24319[(1)] = (8));

} else {
var statearr_24263_24320 = state_24251__$1;
(statearr_24263_24320[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (15))){
var inst_24196 = (state_24251[(2)]);
var state_24251__$1 = state_24251;
if(cljs.core.truth_(inst_24196)){
var statearr_24264_24321 = state_24251__$1;
(statearr_24264_24321[(1)] = (19));

} else {
var statearr_24265_24322 = state_24251__$1;
(statearr_24265_24322[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (21))){
var inst_24201 = (state_24251[(12)]);
var inst_24201__$1 = (state_24251[(2)]);
var inst_24202 = cljs.core.get.call(null,inst_24201__$1,cljs.core.cst$kw$solos);
var inst_24203 = cljs.core.get.call(null,inst_24201__$1,cljs.core.cst$kw$mutes);
var inst_24204 = cljs.core.get.call(null,inst_24201__$1,cljs.core.cst$kw$reads);
var state_24251__$1 = (function (){var statearr_24266 = state_24251;
(statearr_24266[(13)] = inst_24203);

(statearr_24266[(10)] = inst_24202);

(statearr_24266[(12)] = inst_24201__$1);

return statearr_24266;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24251__$1,(22),inst_24204);
} else {
if((state_val_24252 === (31))){
var inst_24233 = (state_24251[(2)]);
var state_24251__$1 = state_24251;
if(cljs.core.truth_(inst_24233)){
var statearr_24267_24323 = state_24251__$1;
(statearr_24267_24323[(1)] = (32));

} else {
var statearr_24268_24324 = state_24251__$1;
(statearr_24268_24324[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (32))){
var inst_24210 = (state_24251[(14)]);
var state_24251__$1 = state_24251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24251__$1,(35),out,inst_24210);
} else {
if((state_val_24252 === (33))){
var inst_24201 = (state_24251[(12)]);
var inst_24178 = inst_24201;
var state_24251__$1 = (function (){var statearr_24269 = state_24251;
(statearr_24269[(7)] = inst_24178);

return statearr_24269;
})();
var statearr_24270_24325 = state_24251__$1;
(statearr_24270_24325[(2)] = null);

(statearr_24270_24325[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (13))){
var inst_24178 = (state_24251[(7)]);
var inst_24185 = inst_24178.cljs$lang$protocol_mask$partition0$;
var inst_24186 = (inst_24185 & (64));
var inst_24187 = inst_24178.cljs$core$ISeq$;
var inst_24188 = (cljs.core.PROTOCOL_SENTINEL === inst_24187);
var inst_24189 = ((inst_24186) || (inst_24188));
var state_24251__$1 = state_24251;
if(cljs.core.truth_(inst_24189)){
var statearr_24271_24326 = state_24251__$1;
(statearr_24271_24326[(1)] = (16));

} else {
var statearr_24272_24327 = state_24251__$1;
(statearr_24272_24327[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (22))){
var inst_24211 = (state_24251[(9)]);
var inst_24210 = (state_24251[(14)]);
var inst_24209 = (state_24251[(2)]);
var inst_24210__$1 = cljs.core.nth.call(null,inst_24209,(0),null);
var inst_24211__$1 = cljs.core.nth.call(null,inst_24209,(1),null);
var inst_24212 = (inst_24210__$1 == null);
var inst_24213 = cljs.core._EQ_.call(null,inst_24211__$1,change);
var inst_24214 = ((inst_24212) || (inst_24213));
var state_24251__$1 = (function (){var statearr_24273 = state_24251;
(statearr_24273[(9)] = inst_24211__$1);

(statearr_24273[(14)] = inst_24210__$1);

return statearr_24273;
})();
if(cljs.core.truth_(inst_24214)){
var statearr_24274_24328 = state_24251__$1;
(statearr_24274_24328[(1)] = (23));

} else {
var statearr_24275_24329 = state_24251__$1;
(statearr_24275_24329[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (36))){
var inst_24201 = (state_24251[(12)]);
var inst_24178 = inst_24201;
var state_24251__$1 = (function (){var statearr_24276 = state_24251;
(statearr_24276[(7)] = inst_24178);

return statearr_24276;
})();
var statearr_24277_24330 = state_24251__$1;
(statearr_24277_24330[(2)] = null);

(statearr_24277_24330[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (29))){
var inst_24225 = (state_24251[(11)]);
var state_24251__$1 = state_24251;
var statearr_24278_24331 = state_24251__$1;
(statearr_24278_24331[(2)] = inst_24225);

(statearr_24278_24331[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (6))){
var state_24251__$1 = state_24251;
var statearr_24279_24332 = state_24251__$1;
(statearr_24279_24332[(2)] = false);

(statearr_24279_24332[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (28))){
var inst_24221 = (state_24251[(2)]);
var inst_24222 = calc_state.call(null);
var inst_24178 = inst_24222;
var state_24251__$1 = (function (){var statearr_24280 = state_24251;
(statearr_24280[(7)] = inst_24178);

(statearr_24280[(15)] = inst_24221);

return statearr_24280;
})();
var statearr_24281_24333 = state_24251__$1;
(statearr_24281_24333[(2)] = null);

(statearr_24281_24333[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (25))){
var inst_24247 = (state_24251[(2)]);
var state_24251__$1 = state_24251;
var statearr_24282_24334 = state_24251__$1;
(statearr_24282_24334[(2)] = inst_24247);

(statearr_24282_24334[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (34))){
var inst_24245 = (state_24251[(2)]);
var state_24251__$1 = state_24251;
var statearr_24283_24335 = state_24251__$1;
(statearr_24283_24335[(2)] = inst_24245);

(statearr_24283_24335[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (17))){
var state_24251__$1 = state_24251;
var statearr_24284_24336 = state_24251__$1;
(statearr_24284_24336[(2)] = false);

(statearr_24284_24336[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (3))){
var state_24251__$1 = state_24251;
var statearr_24285_24337 = state_24251__$1;
(statearr_24285_24337[(2)] = false);

(statearr_24285_24337[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (12))){
var inst_24249 = (state_24251[(2)]);
var state_24251__$1 = state_24251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24251__$1,inst_24249);
} else {
if((state_val_24252 === (2))){
var inst_24153 = (state_24251[(8)]);
var inst_24158 = inst_24153.cljs$lang$protocol_mask$partition0$;
var inst_24159 = (inst_24158 & (64));
var inst_24160 = inst_24153.cljs$core$ISeq$;
var inst_24161 = (cljs.core.PROTOCOL_SENTINEL === inst_24160);
var inst_24162 = ((inst_24159) || (inst_24161));
var state_24251__$1 = state_24251;
if(cljs.core.truth_(inst_24162)){
var statearr_24286_24338 = state_24251__$1;
(statearr_24286_24338[(1)] = (5));

} else {
var statearr_24287_24339 = state_24251__$1;
(statearr_24287_24339[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (23))){
var inst_24210 = (state_24251[(14)]);
var inst_24216 = (inst_24210 == null);
var state_24251__$1 = state_24251;
if(cljs.core.truth_(inst_24216)){
var statearr_24288_24340 = state_24251__$1;
(statearr_24288_24340[(1)] = (26));

} else {
var statearr_24289_24341 = state_24251__$1;
(statearr_24289_24341[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (35))){
var inst_24236 = (state_24251[(2)]);
var state_24251__$1 = state_24251;
if(cljs.core.truth_(inst_24236)){
var statearr_24290_24342 = state_24251__$1;
(statearr_24290_24342[(1)] = (36));

} else {
var statearr_24291_24343 = state_24251__$1;
(statearr_24291_24343[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (19))){
var inst_24178 = (state_24251[(7)]);
var inst_24198 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24178);
var state_24251__$1 = state_24251;
var statearr_24292_24344 = state_24251__$1;
(statearr_24292_24344[(2)] = inst_24198);

(statearr_24292_24344[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (11))){
var inst_24178 = (state_24251[(7)]);
var inst_24182 = (inst_24178 == null);
var inst_24183 = cljs.core.not.call(null,inst_24182);
var state_24251__$1 = state_24251;
if(inst_24183){
var statearr_24293_24345 = state_24251__$1;
(statearr_24293_24345[(1)] = (13));

} else {
var statearr_24294_24346 = state_24251__$1;
(statearr_24294_24346[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (9))){
var inst_24153 = (state_24251[(8)]);
var state_24251__$1 = state_24251;
var statearr_24295_24347 = state_24251__$1;
(statearr_24295_24347[(2)] = inst_24153);

(statearr_24295_24347[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (5))){
var state_24251__$1 = state_24251;
var statearr_24296_24348 = state_24251__$1;
(statearr_24296_24348[(2)] = true);

(statearr_24296_24348[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (14))){
var state_24251__$1 = state_24251;
var statearr_24297_24349 = state_24251__$1;
(statearr_24297_24349[(2)] = false);

(statearr_24297_24349[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (26))){
var inst_24211 = (state_24251[(9)]);
var inst_24218 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24211);
var state_24251__$1 = state_24251;
var statearr_24298_24350 = state_24251__$1;
(statearr_24298_24350[(2)] = inst_24218);

(statearr_24298_24350[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (16))){
var state_24251__$1 = state_24251;
var statearr_24299_24351 = state_24251__$1;
(statearr_24299_24351[(2)] = true);

(statearr_24299_24351[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (38))){
var inst_24241 = (state_24251[(2)]);
var state_24251__$1 = state_24251;
var statearr_24300_24352 = state_24251__$1;
(statearr_24300_24352[(2)] = inst_24241);

(statearr_24300_24352[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (30))){
var inst_24211 = (state_24251[(9)]);
var inst_24203 = (state_24251[(13)]);
var inst_24202 = (state_24251[(10)]);
var inst_24228 = cljs.core.empty_QMARK_.call(null,inst_24202);
var inst_24229 = inst_24203.call(null,inst_24211);
var inst_24230 = cljs.core.not.call(null,inst_24229);
var inst_24231 = ((inst_24228) && (inst_24230));
var state_24251__$1 = state_24251;
var statearr_24301_24353 = state_24251__$1;
(statearr_24301_24353[(2)] = inst_24231);

(statearr_24301_24353[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (10))){
var inst_24153 = (state_24251[(8)]);
var inst_24174 = (state_24251[(2)]);
var inst_24175 = cljs.core.get.call(null,inst_24174,cljs.core.cst$kw$solos);
var inst_24176 = cljs.core.get.call(null,inst_24174,cljs.core.cst$kw$mutes);
var inst_24177 = cljs.core.get.call(null,inst_24174,cljs.core.cst$kw$reads);
var inst_24178 = inst_24153;
var state_24251__$1 = (function (){var statearr_24302 = state_24251;
(statearr_24302[(16)] = inst_24177);

(statearr_24302[(17)] = inst_24175);

(statearr_24302[(18)] = inst_24176);

(statearr_24302[(7)] = inst_24178);

return statearr_24302;
})();
var statearr_24303_24354 = state_24251__$1;
(statearr_24303_24354[(2)] = null);

(statearr_24303_24354[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (18))){
var inst_24193 = (state_24251[(2)]);
var state_24251__$1 = state_24251;
var statearr_24304_24355 = state_24251__$1;
(statearr_24304_24355[(2)] = inst_24193);

(statearr_24304_24355[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (37))){
var state_24251__$1 = state_24251;
var statearr_24305_24356 = state_24251__$1;
(statearr_24305_24356[(2)] = null);

(statearr_24305_24356[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24252 === (8))){
var inst_24153 = (state_24251[(8)]);
var inst_24171 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24153);
var state_24251__$1 = state_24251;
var statearr_24306_24357 = state_24251__$1;
(statearr_24306_24357[(2)] = inst_24171);

(statearr_24306_24357[(1)] = (10));


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
});})(c__23252__auto___24311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23157__auto__,c__23252__auto___24311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23158__auto__ = null;
var cljs$core$async$mix_$_state_machine__23158__auto____0 = (function (){
var statearr_24307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24307[(0)] = cljs$core$async$mix_$_state_machine__23158__auto__);

(statearr_24307[(1)] = (1));

return statearr_24307;
});
var cljs$core$async$mix_$_state_machine__23158__auto____1 = (function (state_24251){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_24251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e24308){if((e24308 instanceof Object)){
var ex__23161__auto__ = e24308;
var statearr_24309_24358 = state_24251;
(statearr_24309_24358[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24251);

return cljs.core.cst$kw$recur;
} else {
throw e24308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__24359 = state_24251;
state_24251 = G__24359;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23158__auto__ = function(state_24251){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23158__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23158__auto____1.call(this,state_24251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23158__auto____0;
cljs$core$async$mix_$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23158__auto____1;
return cljs$core$async$mix_$_state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto___24311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23254__auto__ = (function (){var statearr_24310 = f__23253__auto__.call(null);
(statearr_24310[(6)] = c__23252__auto___24311);

return statearr_24310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto___24311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24361 = arguments.length;
switch (G__24361) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24365 = arguments.length;
switch (G__24365) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__24363_SHARP_){
if(cljs.core.truth_(p1__24363_SHARP_.call(null,topic))){
return p1__24363_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24363_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24366 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24366 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24367){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24367 = meta24367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24368,meta24367__$1){
var self__ = this;
var _24368__$1 = this;
return (new cljs.core.async.t_cljs$core$async24366(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24367__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24368){
var self__ = this;
var _24368__$1 = this;
return self__.meta24367;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24366.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24366.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24366.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24366.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24366.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24366.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24366.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24366.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta24367], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24366.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24366";

cljs.core.async.t_cljs$core$async24366.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24366");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24366.
 */
cljs.core.async.__GT_t_cljs$core$async24366 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24366(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24367){
return (new cljs.core.async.t_cljs$core$async24366(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24367));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24366(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23252__auto___24486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto___24486,mults,ensure_mult,p){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto___24486,mults,ensure_mult,p){
return (function (state_24440){
var state_val_24441 = (state_24440[(1)]);
if((state_val_24441 === (7))){
var inst_24436 = (state_24440[(2)]);
var state_24440__$1 = state_24440;
var statearr_24442_24487 = state_24440__$1;
(statearr_24442_24487[(2)] = inst_24436);

(statearr_24442_24487[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24441 === (20))){
var state_24440__$1 = state_24440;
var statearr_24443_24488 = state_24440__$1;
(statearr_24443_24488[(2)] = null);

(statearr_24443_24488[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24441 === (1))){
var state_24440__$1 = state_24440;
var statearr_24444_24489 = state_24440__$1;
(statearr_24444_24489[(2)] = null);

(statearr_24444_24489[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24441 === (24))){
var inst_24419 = (state_24440[(7)]);
var inst_24428 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24419);
var state_24440__$1 = state_24440;
var statearr_24445_24490 = state_24440__$1;
(statearr_24445_24490[(2)] = inst_24428);

(statearr_24445_24490[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24441 === (4))){
var inst_24371 = (state_24440[(8)]);
var inst_24371__$1 = (state_24440[(2)]);
var inst_24372 = (inst_24371__$1 == null);
var state_24440__$1 = (function (){var statearr_24446 = state_24440;
(statearr_24446[(8)] = inst_24371__$1);

return statearr_24446;
})();
if(cljs.core.truth_(inst_24372)){
var statearr_24447_24491 = state_24440__$1;
(statearr_24447_24491[(1)] = (5));

} else {
var statearr_24448_24492 = state_24440__$1;
(statearr_24448_24492[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24441 === (15))){
var inst_24413 = (state_24440[(2)]);
var state_24440__$1 = state_24440;
var statearr_24449_24493 = state_24440__$1;
(statearr_24449_24493[(2)] = inst_24413);

(statearr_24449_24493[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24441 === (21))){
var inst_24433 = (state_24440[(2)]);
var state_24440__$1 = (function (){var statearr_24450 = state_24440;
(statearr_24450[(9)] = inst_24433);

return statearr_24450;
})();
var statearr_24451_24494 = state_24440__$1;
(statearr_24451_24494[(2)] = null);

(statearr_24451_24494[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24441 === (13))){
var inst_24395 = (state_24440[(10)]);
var inst_24397 = cljs.core.chunked_seq_QMARK_.call(null,inst_24395);
var state_24440__$1 = state_24440;
if(inst_24397){
var statearr_24452_24495 = state_24440__$1;
(statearr_24452_24495[(1)] = (16));

} else {
var statearr_24453_24496 = state_24440__$1;
(statearr_24453_24496[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24441 === (22))){
var inst_24425 = (state_24440[(2)]);
var state_24440__$1 = state_24440;
if(cljs.core.truth_(inst_24425)){
var statearr_24454_24497 = state_24440__$1;
(statearr_24454_24497[(1)] = (23));

} else {
var statearr_24455_24498 = state_24440__$1;
(statearr_24455_24498[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24441 === (6))){
var inst_24371 = (state_24440[(8)]);
var inst_24421 = (state_24440[(11)]);
var inst_24419 = (state_24440[(7)]);
var inst_24419__$1 = topic_fn.call(null,inst_24371);
var inst_24420 = cljs.core.deref.call(null,mults);
var inst_24421__$1 = cljs.core.get.call(null,inst_24420,inst_24419__$1);
var state_24440__$1 = (function (){var statearr_24456 = state_24440;
(statearr_24456[(11)] = inst_24421__$1);

(statearr_24456[(7)] = inst_24419__$1);

return statearr_24456;
})();
if(cljs.core.truth_(inst_24421__$1)){
var statearr_24457_24499 = state_24440__$1;
(statearr_24457_24499[(1)] = (19));

} else {
var statearr_24458_24500 = state_24440__$1;
(statearr_24458_24500[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24441 === (25))){
var inst_24430 = (state_24440[(2)]);
var state_24440__$1 = state_24440;
var statearr_24459_24501 = state_24440__$1;
(statearr_24459_24501[(2)] = inst_24430);

(statearr_24459_24501[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24441 === (17))){
var inst_24395 = (state_24440[(10)]);
var inst_24404 = cljs.core.first.call(null,inst_24395);
var inst_24405 = cljs.core.async.muxch_STAR_.call(null,inst_24404);
var inst_24406 = cljs.core.async.close_BANG_.call(null,inst_24405);
var inst_24407 = cljs.core.next.call(null,inst_24395);
var inst_24381 = inst_24407;
var inst_24382 = null;
var inst_24383 = (0);
var inst_24384 = (0);
var state_24440__$1 = (function (){var statearr_24460 = state_24440;
(statearr_24460[(12)] = inst_24384);

(statearr_24460[(13)] = inst_24382);

(statearr_24460[(14)] = inst_24383);

(statearr_24460[(15)] = inst_24381);

(statearr_24460[(16)] = inst_24406);

return statearr_24460;
})();
var statearr_24461_24502 = state_24440__$1;
(statearr_24461_24502[(2)] = null);

(statearr_24461_24502[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24441 === (3))){
var inst_24438 = (state_24440[(2)]);
var state_24440__$1 = state_24440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24440__$1,inst_24438);
} else {
if((state_val_24441 === (12))){
var inst_24415 = (state_24440[(2)]);
var state_24440__$1 = state_24440;
var statearr_24462_24503 = state_24440__$1;
(statearr_24462_24503[(2)] = inst_24415);

(statearr_24462_24503[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24441 === (2))){
var state_24440__$1 = state_24440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24440__$1,(4),ch);
} else {
if((state_val_24441 === (23))){
var state_24440__$1 = state_24440;
var statearr_24463_24504 = state_24440__$1;
(statearr_24463_24504[(2)] = null);

(statearr_24463_24504[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24441 === (19))){
var inst_24371 = (state_24440[(8)]);
var inst_24421 = (state_24440[(11)]);
var inst_24423 = cljs.core.async.muxch_STAR_.call(null,inst_24421);
var state_24440__$1 = state_24440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24440__$1,(22),inst_24423,inst_24371);
} else {
if((state_val_24441 === (11))){
var inst_24381 = (state_24440[(15)]);
var inst_24395 = (state_24440[(10)]);
var inst_24395__$1 = cljs.core.seq.call(null,inst_24381);
var state_24440__$1 = (function (){var statearr_24464 = state_24440;
(statearr_24464[(10)] = inst_24395__$1);

return statearr_24464;
})();
if(inst_24395__$1){
var statearr_24465_24505 = state_24440__$1;
(statearr_24465_24505[(1)] = (13));

} else {
var statearr_24466_24506 = state_24440__$1;
(statearr_24466_24506[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24441 === (9))){
var inst_24417 = (state_24440[(2)]);
var state_24440__$1 = state_24440;
var statearr_24467_24507 = state_24440__$1;
(statearr_24467_24507[(2)] = inst_24417);

(statearr_24467_24507[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24441 === (5))){
var inst_24378 = cljs.core.deref.call(null,mults);
var inst_24379 = cljs.core.vals.call(null,inst_24378);
var inst_24380 = cljs.core.seq.call(null,inst_24379);
var inst_24381 = inst_24380;
var inst_24382 = null;
var inst_24383 = (0);
var inst_24384 = (0);
var state_24440__$1 = (function (){var statearr_24468 = state_24440;
(statearr_24468[(12)] = inst_24384);

(statearr_24468[(13)] = inst_24382);

(statearr_24468[(14)] = inst_24383);

(statearr_24468[(15)] = inst_24381);

return statearr_24468;
})();
var statearr_24469_24508 = state_24440__$1;
(statearr_24469_24508[(2)] = null);

(statearr_24469_24508[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24441 === (14))){
var state_24440__$1 = state_24440;
var statearr_24473_24509 = state_24440__$1;
(statearr_24473_24509[(2)] = null);

(statearr_24473_24509[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24441 === (16))){
var inst_24395 = (state_24440[(10)]);
var inst_24399 = cljs.core.chunk_first.call(null,inst_24395);
var inst_24400 = cljs.core.chunk_rest.call(null,inst_24395);
var inst_24401 = cljs.core.count.call(null,inst_24399);
var inst_24381 = inst_24400;
var inst_24382 = inst_24399;
var inst_24383 = inst_24401;
var inst_24384 = (0);
var state_24440__$1 = (function (){var statearr_24474 = state_24440;
(statearr_24474[(12)] = inst_24384);

(statearr_24474[(13)] = inst_24382);

(statearr_24474[(14)] = inst_24383);

(statearr_24474[(15)] = inst_24381);

return statearr_24474;
})();
var statearr_24475_24510 = state_24440__$1;
(statearr_24475_24510[(2)] = null);

(statearr_24475_24510[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24441 === (10))){
var inst_24384 = (state_24440[(12)]);
var inst_24382 = (state_24440[(13)]);
var inst_24383 = (state_24440[(14)]);
var inst_24381 = (state_24440[(15)]);
var inst_24389 = cljs.core._nth.call(null,inst_24382,inst_24384);
var inst_24390 = cljs.core.async.muxch_STAR_.call(null,inst_24389);
var inst_24391 = cljs.core.async.close_BANG_.call(null,inst_24390);
var inst_24392 = (inst_24384 + (1));
var tmp24470 = inst_24382;
var tmp24471 = inst_24383;
var tmp24472 = inst_24381;
var inst_24381__$1 = tmp24472;
var inst_24382__$1 = tmp24470;
var inst_24383__$1 = tmp24471;
var inst_24384__$1 = inst_24392;
var state_24440__$1 = (function (){var statearr_24476 = state_24440;
(statearr_24476[(12)] = inst_24384__$1);

(statearr_24476[(13)] = inst_24382__$1);

(statearr_24476[(17)] = inst_24391);

(statearr_24476[(14)] = inst_24383__$1);

(statearr_24476[(15)] = inst_24381__$1);

return statearr_24476;
})();
var statearr_24477_24511 = state_24440__$1;
(statearr_24477_24511[(2)] = null);

(statearr_24477_24511[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24441 === (18))){
var inst_24410 = (state_24440[(2)]);
var state_24440__$1 = state_24440;
var statearr_24478_24512 = state_24440__$1;
(statearr_24478_24512[(2)] = inst_24410);

(statearr_24478_24512[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24441 === (8))){
var inst_24384 = (state_24440[(12)]);
var inst_24383 = (state_24440[(14)]);
var inst_24386 = (inst_24384 < inst_24383);
var inst_24387 = inst_24386;
var state_24440__$1 = state_24440;
if(cljs.core.truth_(inst_24387)){
var statearr_24479_24513 = state_24440__$1;
(statearr_24479_24513[(1)] = (10));

} else {
var statearr_24480_24514 = state_24440__$1;
(statearr_24480_24514[(1)] = (11));

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
});})(c__23252__auto___24486,mults,ensure_mult,p))
;
return ((function (switch__23157__auto__,c__23252__auto___24486,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23158__auto__ = null;
var cljs$core$async$state_machine__23158__auto____0 = (function (){
var statearr_24481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24481[(0)] = cljs$core$async$state_machine__23158__auto__);

(statearr_24481[(1)] = (1));

return statearr_24481;
});
var cljs$core$async$state_machine__23158__auto____1 = (function (state_24440){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_24440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e24482){if((e24482 instanceof Object)){
var ex__23161__auto__ = e24482;
var statearr_24483_24515 = state_24440;
(statearr_24483_24515[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24440);

return cljs.core.cst$kw$recur;
} else {
throw e24482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__24516 = state_24440;
state_24440 = G__24516;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
cljs$core$async$state_machine__23158__auto__ = function(state_24440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23158__auto____1.call(this,state_24440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23158__auto____0;
cljs$core$async$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23158__auto____1;
return cljs$core$async$state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto___24486,mults,ensure_mult,p))
})();
var state__23254__auto__ = (function (){var statearr_24484 = f__23253__auto__.call(null);
(statearr_24484[(6)] = c__23252__auto___24486);

return statearr_24484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto___24486,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24518 = arguments.length;
switch (G__24518) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24521 = arguments.length;
switch (G__24521) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24524 = arguments.length;
switch (G__24524) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23252__auto___24591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto___24591,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto___24591,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24563){
var state_val_24564 = (state_24563[(1)]);
if((state_val_24564 === (7))){
var state_24563__$1 = state_24563;
var statearr_24565_24592 = state_24563__$1;
(statearr_24565_24592[(2)] = null);

(statearr_24565_24592[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24564 === (1))){
var state_24563__$1 = state_24563;
var statearr_24566_24593 = state_24563__$1;
(statearr_24566_24593[(2)] = null);

(statearr_24566_24593[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24564 === (4))){
var inst_24527 = (state_24563[(7)]);
var inst_24529 = (inst_24527 < cnt);
var state_24563__$1 = state_24563;
if(cljs.core.truth_(inst_24529)){
var statearr_24567_24594 = state_24563__$1;
(statearr_24567_24594[(1)] = (6));

} else {
var statearr_24568_24595 = state_24563__$1;
(statearr_24568_24595[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24564 === (15))){
var inst_24559 = (state_24563[(2)]);
var state_24563__$1 = state_24563;
var statearr_24569_24596 = state_24563__$1;
(statearr_24569_24596[(2)] = inst_24559);

(statearr_24569_24596[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24564 === (13))){
var inst_24552 = cljs.core.async.close_BANG_.call(null,out);
var state_24563__$1 = state_24563;
var statearr_24570_24597 = state_24563__$1;
(statearr_24570_24597[(2)] = inst_24552);

(statearr_24570_24597[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24564 === (6))){
var state_24563__$1 = state_24563;
var statearr_24571_24598 = state_24563__$1;
(statearr_24571_24598[(2)] = null);

(statearr_24571_24598[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24564 === (3))){
var inst_24561 = (state_24563[(2)]);
var state_24563__$1 = state_24563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24563__$1,inst_24561);
} else {
if((state_val_24564 === (12))){
var inst_24549 = (state_24563[(8)]);
var inst_24549__$1 = (state_24563[(2)]);
var inst_24550 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24549__$1);
var state_24563__$1 = (function (){var statearr_24572 = state_24563;
(statearr_24572[(8)] = inst_24549__$1);

return statearr_24572;
})();
if(cljs.core.truth_(inst_24550)){
var statearr_24573_24599 = state_24563__$1;
(statearr_24573_24599[(1)] = (13));

} else {
var statearr_24574_24600 = state_24563__$1;
(statearr_24574_24600[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24564 === (2))){
var inst_24526 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24527 = (0);
var state_24563__$1 = (function (){var statearr_24575 = state_24563;
(statearr_24575[(7)] = inst_24527);

(statearr_24575[(9)] = inst_24526);

return statearr_24575;
})();
var statearr_24576_24601 = state_24563__$1;
(statearr_24576_24601[(2)] = null);

(statearr_24576_24601[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24564 === (11))){
var inst_24527 = (state_24563[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24563,(10),Object,null,(9));
var inst_24536 = chs__$1.call(null,inst_24527);
var inst_24537 = done.call(null,inst_24527);
var inst_24538 = cljs.core.async.take_BANG_.call(null,inst_24536,inst_24537);
var state_24563__$1 = state_24563;
var statearr_24577_24602 = state_24563__$1;
(statearr_24577_24602[(2)] = inst_24538);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24563__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_24564 === (9))){
var inst_24527 = (state_24563[(7)]);
var inst_24540 = (state_24563[(2)]);
var inst_24541 = (inst_24527 + (1));
var inst_24527__$1 = inst_24541;
var state_24563__$1 = (function (){var statearr_24578 = state_24563;
(statearr_24578[(7)] = inst_24527__$1);

(statearr_24578[(10)] = inst_24540);

return statearr_24578;
})();
var statearr_24579_24603 = state_24563__$1;
(statearr_24579_24603[(2)] = null);

(statearr_24579_24603[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24564 === (5))){
var inst_24547 = (state_24563[(2)]);
var state_24563__$1 = (function (){var statearr_24580 = state_24563;
(statearr_24580[(11)] = inst_24547);

return statearr_24580;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24563__$1,(12),dchan);
} else {
if((state_val_24564 === (14))){
var inst_24549 = (state_24563[(8)]);
var inst_24554 = cljs.core.apply.call(null,f,inst_24549);
var state_24563__$1 = state_24563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24563__$1,(16),out,inst_24554);
} else {
if((state_val_24564 === (16))){
var inst_24556 = (state_24563[(2)]);
var state_24563__$1 = (function (){var statearr_24581 = state_24563;
(statearr_24581[(12)] = inst_24556);

return statearr_24581;
})();
var statearr_24582_24604 = state_24563__$1;
(statearr_24582_24604[(2)] = null);

(statearr_24582_24604[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24564 === (10))){
var inst_24531 = (state_24563[(2)]);
var inst_24532 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24563__$1 = (function (){var statearr_24583 = state_24563;
(statearr_24583[(13)] = inst_24531);

return statearr_24583;
})();
var statearr_24584_24605 = state_24563__$1;
(statearr_24584_24605[(2)] = inst_24532);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24563__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_24564 === (8))){
var inst_24545 = (state_24563[(2)]);
var state_24563__$1 = state_24563;
var statearr_24585_24606 = state_24563__$1;
(statearr_24585_24606[(2)] = inst_24545);

(statearr_24585_24606[(1)] = (5));


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
});})(c__23252__auto___24591,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23157__auto__,c__23252__auto___24591,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23158__auto__ = null;
var cljs$core$async$state_machine__23158__auto____0 = (function (){
var statearr_24586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24586[(0)] = cljs$core$async$state_machine__23158__auto__);

(statearr_24586[(1)] = (1));

return statearr_24586;
});
var cljs$core$async$state_machine__23158__auto____1 = (function (state_24563){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_24563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e24587){if((e24587 instanceof Object)){
var ex__23161__auto__ = e24587;
var statearr_24588_24607 = state_24563;
(statearr_24588_24607[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24563);

return cljs.core.cst$kw$recur;
} else {
throw e24587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__24608 = state_24563;
state_24563 = G__24608;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
cljs$core$async$state_machine__23158__auto__ = function(state_24563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23158__auto____1.call(this,state_24563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23158__auto____0;
cljs$core$async$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23158__auto____1;
return cljs$core$async$state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto___24591,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23254__auto__ = (function (){var statearr_24589 = f__23253__auto__.call(null);
(statearr_24589[(6)] = c__23252__auto___24591);

return statearr_24589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto___24591,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24611 = arguments.length;
switch (G__24611) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23252__auto___24665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto___24665,out){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto___24665,out){
return (function (state_24643){
var state_val_24644 = (state_24643[(1)]);
if((state_val_24644 === (7))){
var inst_24623 = (state_24643[(7)]);
var inst_24622 = (state_24643[(8)]);
var inst_24622__$1 = (state_24643[(2)]);
var inst_24623__$1 = cljs.core.nth.call(null,inst_24622__$1,(0),null);
var inst_24624 = cljs.core.nth.call(null,inst_24622__$1,(1),null);
var inst_24625 = (inst_24623__$1 == null);
var state_24643__$1 = (function (){var statearr_24645 = state_24643;
(statearr_24645[(7)] = inst_24623__$1);

(statearr_24645[(9)] = inst_24624);

(statearr_24645[(8)] = inst_24622__$1);

return statearr_24645;
})();
if(cljs.core.truth_(inst_24625)){
var statearr_24646_24666 = state_24643__$1;
(statearr_24646_24666[(1)] = (8));

} else {
var statearr_24647_24667 = state_24643__$1;
(statearr_24647_24667[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24644 === (1))){
var inst_24612 = cljs.core.vec.call(null,chs);
var inst_24613 = inst_24612;
var state_24643__$1 = (function (){var statearr_24648 = state_24643;
(statearr_24648[(10)] = inst_24613);

return statearr_24648;
})();
var statearr_24649_24668 = state_24643__$1;
(statearr_24649_24668[(2)] = null);

(statearr_24649_24668[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24644 === (4))){
var inst_24613 = (state_24643[(10)]);
var state_24643__$1 = state_24643;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24643__$1,(7),inst_24613);
} else {
if((state_val_24644 === (6))){
var inst_24639 = (state_24643[(2)]);
var state_24643__$1 = state_24643;
var statearr_24650_24669 = state_24643__$1;
(statearr_24650_24669[(2)] = inst_24639);

(statearr_24650_24669[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24644 === (3))){
var inst_24641 = (state_24643[(2)]);
var state_24643__$1 = state_24643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24643__$1,inst_24641);
} else {
if((state_val_24644 === (2))){
var inst_24613 = (state_24643[(10)]);
var inst_24615 = cljs.core.count.call(null,inst_24613);
var inst_24616 = (inst_24615 > (0));
var state_24643__$1 = state_24643;
if(cljs.core.truth_(inst_24616)){
var statearr_24652_24670 = state_24643__$1;
(statearr_24652_24670[(1)] = (4));

} else {
var statearr_24653_24671 = state_24643__$1;
(statearr_24653_24671[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24644 === (11))){
var inst_24613 = (state_24643[(10)]);
var inst_24632 = (state_24643[(2)]);
var tmp24651 = inst_24613;
var inst_24613__$1 = tmp24651;
var state_24643__$1 = (function (){var statearr_24654 = state_24643;
(statearr_24654[(10)] = inst_24613__$1);

(statearr_24654[(11)] = inst_24632);

return statearr_24654;
})();
var statearr_24655_24672 = state_24643__$1;
(statearr_24655_24672[(2)] = null);

(statearr_24655_24672[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24644 === (9))){
var inst_24623 = (state_24643[(7)]);
var state_24643__$1 = state_24643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24643__$1,(11),out,inst_24623);
} else {
if((state_val_24644 === (5))){
var inst_24637 = cljs.core.async.close_BANG_.call(null,out);
var state_24643__$1 = state_24643;
var statearr_24656_24673 = state_24643__$1;
(statearr_24656_24673[(2)] = inst_24637);

(statearr_24656_24673[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24644 === (10))){
var inst_24635 = (state_24643[(2)]);
var state_24643__$1 = state_24643;
var statearr_24657_24674 = state_24643__$1;
(statearr_24657_24674[(2)] = inst_24635);

(statearr_24657_24674[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24644 === (8))){
var inst_24613 = (state_24643[(10)]);
var inst_24623 = (state_24643[(7)]);
var inst_24624 = (state_24643[(9)]);
var inst_24622 = (state_24643[(8)]);
var inst_24627 = (function (){var cs = inst_24613;
var vec__24618 = inst_24622;
var v = inst_24623;
var c = inst_24624;
return ((function (cs,vec__24618,v,c,inst_24613,inst_24623,inst_24624,inst_24622,state_val_24644,c__23252__auto___24665,out){
return (function (p1__24609_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24609_SHARP_);
});
;})(cs,vec__24618,v,c,inst_24613,inst_24623,inst_24624,inst_24622,state_val_24644,c__23252__auto___24665,out))
})();
var inst_24628 = cljs.core.filterv.call(null,inst_24627,inst_24613);
var inst_24613__$1 = inst_24628;
var state_24643__$1 = (function (){var statearr_24658 = state_24643;
(statearr_24658[(10)] = inst_24613__$1);

return statearr_24658;
})();
var statearr_24659_24675 = state_24643__$1;
(statearr_24659_24675[(2)] = null);

(statearr_24659_24675[(1)] = (2));


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
});})(c__23252__auto___24665,out))
;
return ((function (switch__23157__auto__,c__23252__auto___24665,out){
return (function() {
var cljs$core$async$state_machine__23158__auto__ = null;
var cljs$core$async$state_machine__23158__auto____0 = (function (){
var statearr_24660 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24660[(0)] = cljs$core$async$state_machine__23158__auto__);

(statearr_24660[(1)] = (1));

return statearr_24660;
});
var cljs$core$async$state_machine__23158__auto____1 = (function (state_24643){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_24643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e24661){if((e24661 instanceof Object)){
var ex__23161__auto__ = e24661;
var statearr_24662_24676 = state_24643;
(statearr_24662_24676[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24643);

return cljs.core.cst$kw$recur;
} else {
throw e24661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__24677 = state_24643;
state_24643 = G__24677;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
cljs$core$async$state_machine__23158__auto__ = function(state_24643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23158__auto____1.call(this,state_24643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23158__auto____0;
cljs$core$async$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23158__auto____1;
return cljs$core$async$state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto___24665,out))
})();
var state__23254__auto__ = (function (){var statearr_24663 = f__23253__auto__.call(null);
(statearr_24663[(6)] = c__23252__auto___24665);

return statearr_24663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto___24665,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__24679 = arguments.length;
switch (G__24679) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23252__auto___24724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto___24724,out){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto___24724,out){
return (function (state_24703){
var state_val_24704 = (state_24703[(1)]);
if((state_val_24704 === (7))){
var inst_24685 = (state_24703[(7)]);
var inst_24685__$1 = (state_24703[(2)]);
var inst_24686 = (inst_24685__$1 == null);
var inst_24687 = cljs.core.not.call(null,inst_24686);
var state_24703__$1 = (function (){var statearr_24705 = state_24703;
(statearr_24705[(7)] = inst_24685__$1);

return statearr_24705;
})();
if(inst_24687){
var statearr_24706_24725 = state_24703__$1;
(statearr_24706_24725[(1)] = (8));

} else {
var statearr_24707_24726 = state_24703__$1;
(statearr_24707_24726[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24704 === (1))){
var inst_24680 = (0);
var state_24703__$1 = (function (){var statearr_24708 = state_24703;
(statearr_24708[(8)] = inst_24680);

return statearr_24708;
})();
var statearr_24709_24727 = state_24703__$1;
(statearr_24709_24727[(2)] = null);

(statearr_24709_24727[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24704 === (4))){
var state_24703__$1 = state_24703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24703__$1,(7),ch);
} else {
if((state_val_24704 === (6))){
var inst_24698 = (state_24703[(2)]);
var state_24703__$1 = state_24703;
var statearr_24710_24728 = state_24703__$1;
(statearr_24710_24728[(2)] = inst_24698);

(statearr_24710_24728[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24704 === (3))){
var inst_24700 = (state_24703[(2)]);
var inst_24701 = cljs.core.async.close_BANG_.call(null,out);
var state_24703__$1 = (function (){var statearr_24711 = state_24703;
(statearr_24711[(9)] = inst_24700);

return statearr_24711;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24703__$1,inst_24701);
} else {
if((state_val_24704 === (2))){
var inst_24680 = (state_24703[(8)]);
var inst_24682 = (inst_24680 < n);
var state_24703__$1 = state_24703;
if(cljs.core.truth_(inst_24682)){
var statearr_24712_24729 = state_24703__$1;
(statearr_24712_24729[(1)] = (4));

} else {
var statearr_24713_24730 = state_24703__$1;
(statearr_24713_24730[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24704 === (11))){
var inst_24680 = (state_24703[(8)]);
var inst_24690 = (state_24703[(2)]);
var inst_24691 = (inst_24680 + (1));
var inst_24680__$1 = inst_24691;
var state_24703__$1 = (function (){var statearr_24714 = state_24703;
(statearr_24714[(10)] = inst_24690);

(statearr_24714[(8)] = inst_24680__$1);

return statearr_24714;
})();
var statearr_24715_24731 = state_24703__$1;
(statearr_24715_24731[(2)] = null);

(statearr_24715_24731[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24704 === (9))){
var state_24703__$1 = state_24703;
var statearr_24716_24732 = state_24703__$1;
(statearr_24716_24732[(2)] = null);

(statearr_24716_24732[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24704 === (5))){
var state_24703__$1 = state_24703;
var statearr_24717_24733 = state_24703__$1;
(statearr_24717_24733[(2)] = null);

(statearr_24717_24733[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24704 === (10))){
var inst_24695 = (state_24703[(2)]);
var state_24703__$1 = state_24703;
var statearr_24718_24734 = state_24703__$1;
(statearr_24718_24734[(2)] = inst_24695);

(statearr_24718_24734[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24704 === (8))){
var inst_24685 = (state_24703[(7)]);
var state_24703__$1 = state_24703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24703__$1,(11),out,inst_24685);
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
});})(c__23252__auto___24724,out))
;
return ((function (switch__23157__auto__,c__23252__auto___24724,out){
return (function() {
var cljs$core$async$state_machine__23158__auto__ = null;
var cljs$core$async$state_machine__23158__auto____0 = (function (){
var statearr_24719 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24719[(0)] = cljs$core$async$state_machine__23158__auto__);

(statearr_24719[(1)] = (1));

return statearr_24719;
});
var cljs$core$async$state_machine__23158__auto____1 = (function (state_24703){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_24703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e24720){if((e24720 instanceof Object)){
var ex__23161__auto__ = e24720;
var statearr_24721_24735 = state_24703;
(statearr_24721_24735[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24703);

return cljs.core.cst$kw$recur;
} else {
throw e24720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__24736 = state_24703;
state_24703 = G__24736;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
cljs$core$async$state_machine__23158__auto__ = function(state_24703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23158__auto____1.call(this,state_24703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23158__auto____0;
cljs$core$async$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23158__auto____1;
return cljs$core$async$state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto___24724,out))
})();
var state__23254__auto__ = (function (){var statearr_24722 = f__23253__auto__.call(null);
(statearr_24722[(6)] = c__23252__auto___24724);

return statearr_24722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto___24724,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24738 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24738 = (function (f,ch,meta24739){
this.f = f;
this.ch = ch;
this.meta24739 = meta24739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24740,meta24739__$1){
var self__ = this;
var _24740__$1 = this;
return (new cljs.core.async.t_cljs$core$async24738(self__.f,self__.ch,meta24739__$1));
});

cljs.core.async.t_cljs$core$async24738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24740){
var self__ = this;
var _24740__$1 = this;
return self__.meta24739;
});

cljs.core.async.t_cljs$core$async24738.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24738.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24738.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24738.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24738.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24741 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24741 = (function (f,ch,meta24739,_,fn1,meta24742){
this.f = f;
this.ch = ch;
this.meta24739 = meta24739;
this._ = _;
this.fn1 = fn1;
this.meta24742 = meta24742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24743,meta24742__$1){
var self__ = this;
var _24743__$1 = this;
return (new cljs.core.async.t_cljs$core$async24741(self__.f,self__.ch,self__.meta24739,self__._,self__.fn1,meta24742__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24741.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24743){
var self__ = this;
var _24743__$1 = this;
return self__.meta24742;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24741.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24741.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24737_SHARP_){
return f1.call(null,(((p1__24737_SHARP_ == null))?null:self__.f.call(null,p1__24737_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24741.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta24739,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async24738], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta24742], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24741.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24741";

cljs.core.async.t_cljs$core$async24741.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24741");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24741.
 */
cljs.core.async.__GT_t_cljs$core$async24741 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24741(f__$1,ch__$1,meta24739__$1,___$2,fn1__$1,meta24742){
return (new cljs.core.async.t_cljs$core$async24741(f__$1,ch__$1,meta24739__$1,___$2,fn1__$1,meta24742));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24741(self__.f,self__.ch,self__.meta24739,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24738.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24738.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta24739], null);
});

cljs.core.async.t_cljs$core$async24738.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24738";

cljs.core.async.t_cljs$core$async24738.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24738");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24738.
 */
cljs.core.async.__GT_t_cljs$core$async24738 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24738(f__$1,ch__$1,meta24739){
return (new cljs.core.async.t_cljs$core$async24738(f__$1,ch__$1,meta24739));
});

}

return (new cljs.core.async.t_cljs$core$async24738(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24744 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24744 = (function (f,ch,meta24745){
this.f = f;
this.ch = ch;
this.meta24745 = meta24745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24746,meta24745__$1){
var self__ = this;
var _24746__$1 = this;
return (new cljs.core.async.t_cljs$core$async24744(self__.f,self__.ch,meta24745__$1));
});

cljs.core.async.t_cljs$core$async24744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24746){
var self__ = this;
var _24746__$1 = this;
return self__.meta24745;
});

cljs.core.async.t_cljs$core$async24744.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24744.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24744.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24744.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24744.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24744.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24744.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta24745], null);
});

cljs.core.async.t_cljs$core$async24744.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24744";

cljs.core.async.t_cljs$core$async24744.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24744");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24744.
 */
cljs.core.async.__GT_t_cljs$core$async24744 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24744(f__$1,ch__$1,meta24745){
return (new cljs.core.async.t_cljs$core$async24744(f__$1,ch__$1,meta24745));
});

}

return (new cljs.core.async.t_cljs$core$async24744(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24747 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24747 = (function (p,ch,meta24748){
this.p = p;
this.ch = ch;
this.meta24748 = meta24748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24749,meta24748__$1){
var self__ = this;
var _24749__$1 = this;
return (new cljs.core.async.t_cljs$core$async24747(self__.p,self__.ch,meta24748__$1));
});

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24749){
var self__ = this;
var _24749__$1 = this;
return self__.meta24748;
});

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24747.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta24748], null);
});

cljs.core.async.t_cljs$core$async24747.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24747.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24747";

cljs.core.async.t_cljs$core$async24747.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24747");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24747.
 */
cljs.core.async.__GT_t_cljs$core$async24747 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24747(p__$1,ch__$1,meta24748){
return (new cljs.core.async.t_cljs$core$async24747(p__$1,ch__$1,meta24748));
});

}

return (new cljs.core.async.t_cljs$core$async24747(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__24751 = arguments.length;
switch (G__24751) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23252__auto___24791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto___24791,out){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto___24791,out){
return (function (state_24772){
var state_val_24773 = (state_24772[(1)]);
if((state_val_24773 === (7))){
var inst_24768 = (state_24772[(2)]);
var state_24772__$1 = state_24772;
var statearr_24774_24792 = state_24772__$1;
(statearr_24774_24792[(2)] = inst_24768);

(statearr_24774_24792[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (1))){
var state_24772__$1 = state_24772;
var statearr_24775_24793 = state_24772__$1;
(statearr_24775_24793[(2)] = null);

(statearr_24775_24793[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (4))){
var inst_24754 = (state_24772[(7)]);
var inst_24754__$1 = (state_24772[(2)]);
var inst_24755 = (inst_24754__$1 == null);
var state_24772__$1 = (function (){var statearr_24776 = state_24772;
(statearr_24776[(7)] = inst_24754__$1);

return statearr_24776;
})();
if(cljs.core.truth_(inst_24755)){
var statearr_24777_24794 = state_24772__$1;
(statearr_24777_24794[(1)] = (5));

} else {
var statearr_24778_24795 = state_24772__$1;
(statearr_24778_24795[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (6))){
var inst_24754 = (state_24772[(7)]);
var inst_24759 = p.call(null,inst_24754);
var state_24772__$1 = state_24772;
if(cljs.core.truth_(inst_24759)){
var statearr_24779_24796 = state_24772__$1;
(statearr_24779_24796[(1)] = (8));

} else {
var statearr_24780_24797 = state_24772__$1;
(statearr_24780_24797[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (3))){
var inst_24770 = (state_24772[(2)]);
var state_24772__$1 = state_24772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24772__$1,inst_24770);
} else {
if((state_val_24773 === (2))){
var state_24772__$1 = state_24772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24772__$1,(4),ch);
} else {
if((state_val_24773 === (11))){
var inst_24762 = (state_24772[(2)]);
var state_24772__$1 = state_24772;
var statearr_24781_24798 = state_24772__$1;
(statearr_24781_24798[(2)] = inst_24762);

(statearr_24781_24798[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (9))){
var state_24772__$1 = state_24772;
var statearr_24782_24799 = state_24772__$1;
(statearr_24782_24799[(2)] = null);

(statearr_24782_24799[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (5))){
var inst_24757 = cljs.core.async.close_BANG_.call(null,out);
var state_24772__$1 = state_24772;
var statearr_24783_24800 = state_24772__$1;
(statearr_24783_24800[(2)] = inst_24757);

(statearr_24783_24800[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (10))){
var inst_24765 = (state_24772[(2)]);
var state_24772__$1 = (function (){var statearr_24784 = state_24772;
(statearr_24784[(8)] = inst_24765);

return statearr_24784;
})();
var statearr_24785_24801 = state_24772__$1;
(statearr_24785_24801[(2)] = null);

(statearr_24785_24801[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (8))){
var inst_24754 = (state_24772[(7)]);
var state_24772__$1 = state_24772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24772__$1,(11),out,inst_24754);
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
});})(c__23252__auto___24791,out))
;
return ((function (switch__23157__auto__,c__23252__auto___24791,out){
return (function() {
var cljs$core$async$state_machine__23158__auto__ = null;
var cljs$core$async$state_machine__23158__auto____0 = (function (){
var statearr_24786 = [null,null,null,null,null,null,null,null,null];
(statearr_24786[(0)] = cljs$core$async$state_machine__23158__auto__);

(statearr_24786[(1)] = (1));

return statearr_24786;
});
var cljs$core$async$state_machine__23158__auto____1 = (function (state_24772){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_24772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e24787){if((e24787 instanceof Object)){
var ex__23161__auto__ = e24787;
var statearr_24788_24802 = state_24772;
(statearr_24788_24802[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24772);

return cljs.core.cst$kw$recur;
} else {
throw e24787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__24803 = state_24772;
state_24772 = G__24803;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
cljs$core$async$state_machine__23158__auto__ = function(state_24772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23158__auto____1.call(this,state_24772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23158__auto____0;
cljs$core$async$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23158__auto____1;
return cljs$core$async$state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto___24791,out))
})();
var state__23254__auto__ = (function (){var statearr_24789 = f__23253__auto__.call(null);
(statearr_24789[(6)] = c__23252__auto___24791);

return statearr_24789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto___24791,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24805 = arguments.length;
switch (G__24805) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto__){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto__){
return (function (state_24868){
var state_val_24869 = (state_24868[(1)]);
if((state_val_24869 === (7))){
var inst_24864 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
var statearr_24870_24908 = state_24868__$1;
(statearr_24870_24908[(2)] = inst_24864);

(statearr_24870_24908[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24869 === (20))){
var inst_24834 = (state_24868[(7)]);
var inst_24845 = (state_24868[(2)]);
var inst_24846 = cljs.core.next.call(null,inst_24834);
var inst_24820 = inst_24846;
var inst_24821 = null;
var inst_24822 = (0);
var inst_24823 = (0);
var state_24868__$1 = (function (){var statearr_24871 = state_24868;
(statearr_24871[(8)] = inst_24822);

(statearr_24871[(9)] = inst_24821);

(statearr_24871[(10)] = inst_24820);

(statearr_24871[(11)] = inst_24845);

(statearr_24871[(12)] = inst_24823);

return statearr_24871;
})();
var statearr_24872_24909 = state_24868__$1;
(statearr_24872_24909[(2)] = null);

(statearr_24872_24909[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24869 === (1))){
var state_24868__$1 = state_24868;
var statearr_24873_24910 = state_24868__$1;
(statearr_24873_24910[(2)] = null);

(statearr_24873_24910[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24869 === (4))){
var inst_24809 = (state_24868[(13)]);
var inst_24809__$1 = (state_24868[(2)]);
var inst_24810 = (inst_24809__$1 == null);
var state_24868__$1 = (function (){var statearr_24874 = state_24868;
(statearr_24874[(13)] = inst_24809__$1);

return statearr_24874;
})();
if(cljs.core.truth_(inst_24810)){
var statearr_24875_24911 = state_24868__$1;
(statearr_24875_24911[(1)] = (5));

} else {
var statearr_24876_24912 = state_24868__$1;
(statearr_24876_24912[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24869 === (15))){
var state_24868__$1 = state_24868;
var statearr_24880_24913 = state_24868__$1;
(statearr_24880_24913[(2)] = null);

(statearr_24880_24913[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24869 === (21))){
var state_24868__$1 = state_24868;
var statearr_24881_24914 = state_24868__$1;
(statearr_24881_24914[(2)] = null);

(statearr_24881_24914[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24869 === (13))){
var inst_24822 = (state_24868[(8)]);
var inst_24821 = (state_24868[(9)]);
var inst_24820 = (state_24868[(10)]);
var inst_24823 = (state_24868[(12)]);
var inst_24830 = (state_24868[(2)]);
var inst_24831 = (inst_24823 + (1));
var tmp24877 = inst_24822;
var tmp24878 = inst_24821;
var tmp24879 = inst_24820;
var inst_24820__$1 = tmp24879;
var inst_24821__$1 = tmp24878;
var inst_24822__$1 = tmp24877;
var inst_24823__$1 = inst_24831;
var state_24868__$1 = (function (){var statearr_24882 = state_24868;
(statearr_24882[(8)] = inst_24822__$1);

(statearr_24882[(9)] = inst_24821__$1);

(statearr_24882[(10)] = inst_24820__$1);

(statearr_24882[(12)] = inst_24823__$1);

(statearr_24882[(14)] = inst_24830);

return statearr_24882;
})();
var statearr_24883_24915 = state_24868__$1;
(statearr_24883_24915[(2)] = null);

(statearr_24883_24915[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24869 === (22))){
var state_24868__$1 = state_24868;
var statearr_24884_24916 = state_24868__$1;
(statearr_24884_24916[(2)] = null);

(statearr_24884_24916[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24869 === (6))){
var inst_24809 = (state_24868[(13)]);
var inst_24818 = f.call(null,inst_24809);
var inst_24819 = cljs.core.seq.call(null,inst_24818);
var inst_24820 = inst_24819;
var inst_24821 = null;
var inst_24822 = (0);
var inst_24823 = (0);
var state_24868__$1 = (function (){var statearr_24885 = state_24868;
(statearr_24885[(8)] = inst_24822);

(statearr_24885[(9)] = inst_24821);

(statearr_24885[(10)] = inst_24820);

(statearr_24885[(12)] = inst_24823);

return statearr_24885;
})();
var statearr_24886_24917 = state_24868__$1;
(statearr_24886_24917[(2)] = null);

(statearr_24886_24917[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24869 === (17))){
var inst_24834 = (state_24868[(7)]);
var inst_24838 = cljs.core.chunk_first.call(null,inst_24834);
var inst_24839 = cljs.core.chunk_rest.call(null,inst_24834);
var inst_24840 = cljs.core.count.call(null,inst_24838);
var inst_24820 = inst_24839;
var inst_24821 = inst_24838;
var inst_24822 = inst_24840;
var inst_24823 = (0);
var state_24868__$1 = (function (){var statearr_24887 = state_24868;
(statearr_24887[(8)] = inst_24822);

(statearr_24887[(9)] = inst_24821);

(statearr_24887[(10)] = inst_24820);

(statearr_24887[(12)] = inst_24823);

return statearr_24887;
})();
var statearr_24888_24918 = state_24868__$1;
(statearr_24888_24918[(2)] = null);

(statearr_24888_24918[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24869 === (3))){
var inst_24866 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24868__$1,inst_24866);
} else {
if((state_val_24869 === (12))){
var inst_24854 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
var statearr_24889_24919 = state_24868__$1;
(statearr_24889_24919[(2)] = inst_24854);

(statearr_24889_24919[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24869 === (2))){
var state_24868__$1 = state_24868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24868__$1,(4),in$);
} else {
if((state_val_24869 === (23))){
var inst_24862 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
var statearr_24890_24920 = state_24868__$1;
(statearr_24890_24920[(2)] = inst_24862);

(statearr_24890_24920[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24869 === (19))){
var inst_24849 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
var statearr_24891_24921 = state_24868__$1;
(statearr_24891_24921[(2)] = inst_24849);

(statearr_24891_24921[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24869 === (11))){
var inst_24820 = (state_24868[(10)]);
var inst_24834 = (state_24868[(7)]);
var inst_24834__$1 = cljs.core.seq.call(null,inst_24820);
var state_24868__$1 = (function (){var statearr_24892 = state_24868;
(statearr_24892[(7)] = inst_24834__$1);

return statearr_24892;
})();
if(inst_24834__$1){
var statearr_24893_24922 = state_24868__$1;
(statearr_24893_24922[(1)] = (14));

} else {
var statearr_24894_24923 = state_24868__$1;
(statearr_24894_24923[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24869 === (9))){
var inst_24856 = (state_24868[(2)]);
var inst_24857 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24868__$1 = (function (){var statearr_24895 = state_24868;
(statearr_24895[(15)] = inst_24856);

return statearr_24895;
})();
if(cljs.core.truth_(inst_24857)){
var statearr_24896_24924 = state_24868__$1;
(statearr_24896_24924[(1)] = (21));

} else {
var statearr_24897_24925 = state_24868__$1;
(statearr_24897_24925[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24869 === (5))){
var inst_24812 = cljs.core.async.close_BANG_.call(null,out);
var state_24868__$1 = state_24868;
var statearr_24898_24926 = state_24868__$1;
(statearr_24898_24926[(2)] = inst_24812);

(statearr_24898_24926[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24869 === (14))){
var inst_24834 = (state_24868[(7)]);
var inst_24836 = cljs.core.chunked_seq_QMARK_.call(null,inst_24834);
var state_24868__$1 = state_24868;
if(inst_24836){
var statearr_24899_24927 = state_24868__$1;
(statearr_24899_24927[(1)] = (17));

} else {
var statearr_24900_24928 = state_24868__$1;
(statearr_24900_24928[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24869 === (16))){
var inst_24852 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
var statearr_24901_24929 = state_24868__$1;
(statearr_24901_24929[(2)] = inst_24852);

(statearr_24901_24929[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24869 === (10))){
var inst_24821 = (state_24868[(9)]);
var inst_24823 = (state_24868[(12)]);
var inst_24828 = cljs.core._nth.call(null,inst_24821,inst_24823);
var state_24868__$1 = state_24868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24868__$1,(13),out,inst_24828);
} else {
if((state_val_24869 === (18))){
var inst_24834 = (state_24868[(7)]);
var inst_24843 = cljs.core.first.call(null,inst_24834);
var state_24868__$1 = state_24868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24868__$1,(20),out,inst_24843);
} else {
if((state_val_24869 === (8))){
var inst_24822 = (state_24868[(8)]);
var inst_24823 = (state_24868[(12)]);
var inst_24825 = (inst_24823 < inst_24822);
var inst_24826 = inst_24825;
var state_24868__$1 = state_24868;
if(cljs.core.truth_(inst_24826)){
var statearr_24902_24930 = state_24868__$1;
(statearr_24902_24930[(1)] = (10));

} else {
var statearr_24903_24931 = state_24868__$1;
(statearr_24903_24931[(1)] = (11));

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
});})(c__23252__auto__))
;
return ((function (switch__23157__auto__,c__23252__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23158__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23158__auto____0 = (function (){
var statearr_24904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24904[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23158__auto__);

(statearr_24904[(1)] = (1));

return statearr_24904;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23158__auto____1 = (function (state_24868){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_24868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e24905){if((e24905 instanceof Object)){
var ex__23161__auto__ = e24905;
var statearr_24906_24932 = state_24868;
(statearr_24906_24932[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24868);

return cljs.core.cst$kw$recur;
} else {
throw e24905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__24933 = state_24868;
state_24868 = G__24933;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23158__auto__ = function(state_24868){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23158__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23158__auto____1.call(this,state_24868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23158__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23158__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto__))
})();
var state__23254__auto__ = (function (){var statearr_24907 = f__23253__auto__.call(null);
(statearr_24907[(6)] = c__23252__auto__);

return statearr_24907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto__))
);

return c__23252__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24935 = arguments.length;
switch (G__24935) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__24938 = arguments.length;
switch (G__24938) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__24941 = arguments.length;
switch (G__24941) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23252__auto___24988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto___24988,out){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto___24988,out){
return (function (state_24965){
var state_val_24966 = (state_24965[(1)]);
if((state_val_24966 === (7))){
var inst_24960 = (state_24965[(2)]);
var state_24965__$1 = state_24965;
var statearr_24967_24989 = state_24965__$1;
(statearr_24967_24989[(2)] = inst_24960);

(statearr_24967_24989[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24966 === (1))){
var inst_24942 = null;
var state_24965__$1 = (function (){var statearr_24968 = state_24965;
(statearr_24968[(7)] = inst_24942);

return statearr_24968;
})();
var statearr_24969_24990 = state_24965__$1;
(statearr_24969_24990[(2)] = null);

(statearr_24969_24990[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24966 === (4))){
var inst_24945 = (state_24965[(8)]);
var inst_24945__$1 = (state_24965[(2)]);
var inst_24946 = (inst_24945__$1 == null);
var inst_24947 = cljs.core.not.call(null,inst_24946);
var state_24965__$1 = (function (){var statearr_24970 = state_24965;
(statearr_24970[(8)] = inst_24945__$1);

return statearr_24970;
})();
if(inst_24947){
var statearr_24971_24991 = state_24965__$1;
(statearr_24971_24991[(1)] = (5));

} else {
var statearr_24972_24992 = state_24965__$1;
(statearr_24972_24992[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24966 === (6))){
var state_24965__$1 = state_24965;
var statearr_24973_24993 = state_24965__$1;
(statearr_24973_24993[(2)] = null);

(statearr_24973_24993[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24966 === (3))){
var inst_24962 = (state_24965[(2)]);
var inst_24963 = cljs.core.async.close_BANG_.call(null,out);
var state_24965__$1 = (function (){var statearr_24974 = state_24965;
(statearr_24974[(9)] = inst_24962);

return statearr_24974;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24965__$1,inst_24963);
} else {
if((state_val_24966 === (2))){
var state_24965__$1 = state_24965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24965__$1,(4),ch);
} else {
if((state_val_24966 === (11))){
var inst_24945 = (state_24965[(8)]);
var inst_24954 = (state_24965[(2)]);
var inst_24942 = inst_24945;
var state_24965__$1 = (function (){var statearr_24975 = state_24965;
(statearr_24975[(10)] = inst_24954);

(statearr_24975[(7)] = inst_24942);

return statearr_24975;
})();
var statearr_24976_24994 = state_24965__$1;
(statearr_24976_24994[(2)] = null);

(statearr_24976_24994[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24966 === (9))){
var inst_24945 = (state_24965[(8)]);
var state_24965__$1 = state_24965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24965__$1,(11),out,inst_24945);
} else {
if((state_val_24966 === (5))){
var inst_24945 = (state_24965[(8)]);
var inst_24942 = (state_24965[(7)]);
var inst_24949 = cljs.core._EQ_.call(null,inst_24945,inst_24942);
var state_24965__$1 = state_24965;
if(inst_24949){
var statearr_24978_24995 = state_24965__$1;
(statearr_24978_24995[(1)] = (8));

} else {
var statearr_24979_24996 = state_24965__$1;
(statearr_24979_24996[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24966 === (10))){
var inst_24957 = (state_24965[(2)]);
var state_24965__$1 = state_24965;
var statearr_24980_24997 = state_24965__$1;
(statearr_24980_24997[(2)] = inst_24957);

(statearr_24980_24997[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24966 === (8))){
var inst_24942 = (state_24965[(7)]);
var tmp24977 = inst_24942;
var inst_24942__$1 = tmp24977;
var state_24965__$1 = (function (){var statearr_24981 = state_24965;
(statearr_24981[(7)] = inst_24942__$1);

return statearr_24981;
})();
var statearr_24982_24998 = state_24965__$1;
(statearr_24982_24998[(2)] = null);

(statearr_24982_24998[(1)] = (2));


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
});})(c__23252__auto___24988,out))
;
return ((function (switch__23157__auto__,c__23252__auto___24988,out){
return (function() {
var cljs$core$async$state_machine__23158__auto__ = null;
var cljs$core$async$state_machine__23158__auto____0 = (function (){
var statearr_24983 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24983[(0)] = cljs$core$async$state_machine__23158__auto__);

(statearr_24983[(1)] = (1));

return statearr_24983;
});
var cljs$core$async$state_machine__23158__auto____1 = (function (state_24965){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_24965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e24984){if((e24984 instanceof Object)){
var ex__23161__auto__ = e24984;
var statearr_24985_24999 = state_24965;
(statearr_24985_24999[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24965);

return cljs.core.cst$kw$recur;
} else {
throw e24984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__25000 = state_24965;
state_24965 = G__25000;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
cljs$core$async$state_machine__23158__auto__ = function(state_24965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23158__auto____1.call(this,state_24965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23158__auto____0;
cljs$core$async$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23158__auto____1;
return cljs$core$async$state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto___24988,out))
})();
var state__23254__auto__ = (function (){var statearr_24986 = f__23253__auto__.call(null);
(statearr_24986[(6)] = c__23252__auto___24988);

return statearr_24986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto___24988,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25002 = arguments.length;
switch (G__25002) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23252__auto___25068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto___25068,out){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto___25068,out){
return (function (state_25040){
var state_val_25041 = (state_25040[(1)]);
if((state_val_25041 === (7))){
var inst_25036 = (state_25040[(2)]);
var state_25040__$1 = state_25040;
var statearr_25042_25069 = state_25040__$1;
(statearr_25042_25069[(2)] = inst_25036);

(statearr_25042_25069[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25041 === (1))){
var inst_25003 = (new Array(n));
var inst_25004 = inst_25003;
var inst_25005 = (0);
var state_25040__$1 = (function (){var statearr_25043 = state_25040;
(statearr_25043[(7)] = inst_25004);

(statearr_25043[(8)] = inst_25005);

return statearr_25043;
})();
var statearr_25044_25070 = state_25040__$1;
(statearr_25044_25070[(2)] = null);

(statearr_25044_25070[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25041 === (4))){
var inst_25008 = (state_25040[(9)]);
var inst_25008__$1 = (state_25040[(2)]);
var inst_25009 = (inst_25008__$1 == null);
var inst_25010 = cljs.core.not.call(null,inst_25009);
var state_25040__$1 = (function (){var statearr_25045 = state_25040;
(statearr_25045[(9)] = inst_25008__$1);

return statearr_25045;
})();
if(inst_25010){
var statearr_25046_25071 = state_25040__$1;
(statearr_25046_25071[(1)] = (5));

} else {
var statearr_25047_25072 = state_25040__$1;
(statearr_25047_25072[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25041 === (15))){
var inst_25030 = (state_25040[(2)]);
var state_25040__$1 = state_25040;
var statearr_25048_25073 = state_25040__$1;
(statearr_25048_25073[(2)] = inst_25030);

(statearr_25048_25073[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25041 === (13))){
var state_25040__$1 = state_25040;
var statearr_25049_25074 = state_25040__$1;
(statearr_25049_25074[(2)] = null);

(statearr_25049_25074[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25041 === (6))){
var inst_25005 = (state_25040[(8)]);
var inst_25026 = (inst_25005 > (0));
var state_25040__$1 = state_25040;
if(cljs.core.truth_(inst_25026)){
var statearr_25050_25075 = state_25040__$1;
(statearr_25050_25075[(1)] = (12));

} else {
var statearr_25051_25076 = state_25040__$1;
(statearr_25051_25076[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25041 === (3))){
var inst_25038 = (state_25040[(2)]);
var state_25040__$1 = state_25040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25040__$1,inst_25038);
} else {
if((state_val_25041 === (12))){
var inst_25004 = (state_25040[(7)]);
var inst_25028 = cljs.core.vec.call(null,inst_25004);
var state_25040__$1 = state_25040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25040__$1,(15),out,inst_25028);
} else {
if((state_val_25041 === (2))){
var state_25040__$1 = state_25040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25040__$1,(4),ch);
} else {
if((state_val_25041 === (11))){
var inst_25020 = (state_25040[(2)]);
var inst_25021 = (new Array(n));
var inst_25004 = inst_25021;
var inst_25005 = (0);
var state_25040__$1 = (function (){var statearr_25052 = state_25040;
(statearr_25052[(10)] = inst_25020);

(statearr_25052[(7)] = inst_25004);

(statearr_25052[(8)] = inst_25005);

return statearr_25052;
})();
var statearr_25053_25077 = state_25040__$1;
(statearr_25053_25077[(2)] = null);

(statearr_25053_25077[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25041 === (9))){
var inst_25004 = (state_25040[(7)]);
var inst_25018 = cljs.core.vec.call(null,inst_25004);
var state_25040__$1 = state_25040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25040__$1,(11),out,inst_25018);
} else {
if((state_val_25041 === (5))){
var inst_25013 = (state_25040[(11)]);
var inst_25004 = (state_25040[(7)]);
var inst_25008 = (state_25040[(9)]);
var inst_25005 = (state_25040[(8)]);
var inst_25012 = (inst_25004[inst_25005] = inst_25008);
var inst_25013__$1 = (inst_25005 + (1));
var inst_25014 = (inst_25013__$1 < n);
var state_25040__$1 = (function (){var statearr_25054 = state_25040;
(statearr_25054[(11)] = inst_25013__$1);

(statearr_25054[(12)] = inst_25012);

return statearr_25054;
})();
if(cljs.core.truth_(inst_25014)){
var statearr_25055_25078 = state_25040__$1;
(statearr_25055_25078[(1)] = (8));

} else {
var statearr_25056_25079 = state_25040__$1;
(statearr_25056_25079[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25041 === (14))){
var inst_25033 = (state_25040[(2)]);
var inst_25034 = cljs.core.async.close_BANG_.call(null,out);
var state_25040__$1 = (function (){var statearr_25058 = state_25040;
(statearr_25058[(13)] = inst_25033);

return statearr_25058;
})();
var statearr_25059_25080 = state_25040__$1;
(statearr_25059_25080[(2)] = inst_25034);

(statearr_25059_25080[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25041 === (10))){
var inst_25024 = (state_25040[(2)]);
var state_25040__$1 = state_25040;
var statearr_25060_25081 = state_25040__$1;
(statearr_25060_25081[(2)] = inst_25024);

(statearr_25060_25081[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25041 === (8))){
var inst_25013 = (state_25040[(11)]);
var inst_25004 = (state_25040[(7)]);
var tmp25057 = inst_25004;
var inst_25004__$1 = tmp25057;
var inst_25005 = inst_25013;
var state_25040__$1 = (function (){var statearr_25061 = state_25040;
(statearr_25061[(7)] = inst_25004__$1);

(statearr_25061[(8)] = inst_25005);

return statearr_25061;
})();
var statearr_25062_25082 = state_25040__$1;
(statearr_25062_25082[(2)] = null);

(statearr_25062_25082[(1)] = (2));


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
});})(c__23252__auto___25068,out))
;
return ((function (switch__23157__auto__,c__23252__auto___25068,out){
return (function() {
var cljs$core$async$state_machine__23158__auto__ = null;
var cljs$core$async$state_machine__23158__auto____0 = (function (){
var statearr_25063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25063[(0)] = cljs$core$async$state_machine__23158__auto__);

(statearr_25063[(1)] = (1));

return statearr_25063;
});
var cljs$core$async$state_machine__23158__auto____1 = (function (state_25040){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_25040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e25064){if((e25064 instanceof Object)){
var ex__23161__auto__ = e25064;
var statearr_25065_25083 = state_25040;
(statearr_25065_25083[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25040);

return cljs.core.cst$kw$recur;
} else {
throw e25064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__25084 = state_25040;
state_25040 = G__25084;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
cljs$core$async$state_machine__23158__auto__ = function(state_25040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23158__auto____1.call(this,state_25040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23158__auto____0;
cljs$core$async$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23158__auto____1;
return cljs$core$async$state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto___25068,out))
})();
var state__23254__auto__ = (function (){var statearr_25066 = f__23253__auto__.call(null);
(statearr_25066[(6)] = c__23252__auto___25068);

return statearr_25066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto___25068,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25086 = arguments.length;
switch (G__25086) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23252__auto___25156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23252__auto___25156,out){
return (function (){
var f__23253__auto__ = (function (){var switch__23157__auto__ = ((function (c__23252__auto___25156,out){
return (function (state_25128){
var state_val_25129 = (state_25128[(1)]);
if((state_val_25129 === (7))){
var inst_25124 = (state_25128[(2)]);
var state_25128__$1 = state_25128;
var statearr_25130_25157 = state_25128__$1;
(statearr_25130_25157[(2)] = inst_25124);

(statearr_25130_25157[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25129 === (1))){
var inst_25087 = [];
var inst_25088 = inst_25087;
var inst_25089 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_25128__$1 = (function (){var statearr_25131 = state_25128;
(statearr_25131[(7)] = inst_25089);

(statearr_25131[(8)] = inst_25088);

return statearr_25131;
})();
var statearr_25132_25158 = state_25128__$1;
(statearr_25132_25158[(2)] = null);

(statearr_25132_25158[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25129 === (4))){
var inst_25092 = (state_25128[(9)]);
var inst_25092__$1 = (state_25128[(2)]);
var inst_25093 = (inst_25092__$1 == null);
var inst_25094 = cljs.core.not.call(null,inst_25093);
var state_25128__$1 = (function (){var statearr_25133 = state_25128;
(statearr_25133[(9)] = inst_25092__$1);

return statearr_25133;
})();
if(inst_25094){
var statearr_25134_25159 = state_25128__$1;
(statearr_25134_25159[(1)] = (5));

} else {
var statearr_25135_25160 = state_25128__$1;
(statearr_25135_25160[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25129 === (15))){
var inst_25118 = (state_25128[(2)]);
var state_25128__$1 = state_25128;
var statearr_25136_25161 = state_25128__$1;
(statearr_25136_25161[(2)] = inst_25118);

(statearr_25136_25161[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25129 === (13))){
var state_25128__$1 = state_25128;
var statearr_25137_25162 = state_25128__$1;
(statearr_25137_25162[(2)] = null);

(statearr_25137_25162[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25129 === (6))){
var inst_25088 = (state_25128[(8)]);
var inst_25113 = inst_25088.length;
var inst_25114 = (inst_25113 > (0));
var state_25128__$1 = state_25128;
if(cljs.core.truth_(inst_25114)){
var statearr_25138_25163 = state_25128__$1;
(statearr_25138_25163[(1)] = (12));

} else {
var statearr_25139_25164 = state_25128__$1;
(statearr_25139_25164[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25129 === (3))){
var inst_25126 = (state_25128[(2)]);
var state_25128__$1 = state_25128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25128__$1,inst_25126);
} else {
if((state_val_25129 === (12))){
var inst_25088 = (state_25128[(8)]);
var inst_25116 = cljs.core.vec.call(null,inst_25088);
var state_25128__$1 = state_25128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25128__$1,(15),out,inst_25116);
} else {
if((state_val_25129 === (2))){
var state_25128__$1 = state_25128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25128__$1,(4),ch);
} else {
if((state_val_25129 === (11))){
var inst_25092 = (state_25128[(9)]);
var inst_25096 = (state_25128[(10)]);
var inst_25106 = (state_25128[(2)]);
var inst_25107 = [];
var inst_25108 = inst_25107.push(inst_25092);
var inst_25088 = inst_25107;
var inst_25089 = inst_25096;
var state_25128__$1 = (function (){var statearr_25140 = state_25128;
(statearr_25140[(11)] = inst_25106);

(statearr_25140[(12)] = inst_25108);

(statearr_25140[(7)] = inst_25089);

(statearr_25140[(8)] = inst_25088);

return statearr_25140;
})();
var statearr_25141_25165 = state_25128__$1;
(statearr_25141_25165[(2)] = null);

(statearr_25141_25165[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25129 === (9))){
var inst_25088 = (state_25128[(8)]);
var inst_25104 = cljs.core.vec.call(null,inst_25088);
var state_25128__$1 = state_25128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25128__$1,(11),out,inst_25104);
} else {
if((state_val_25129 === (5))){
var inst_25092 = (state_25128[(9)]);
var inst_25089 = (state_25128[(7)]);
var inst_25096 = (state_25128[(10)]);
var inst_25096__$1 = f.call(null,inst_25092);
var inst_25097 = cljs.core._EQ_.call(null,inst_25096__$1,inst_25089);
var inst_25098 = cljs.core.keyword_identical_QMARK_.call(null,inst_25089,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_25099 = ((inst_25097) || (inst_25098));
var state_25128__$1 = (function (){var statearr_25142 = state_25128;
(statearr_25142[(10)] = inst_25096__$1);

return statearr_25142;
})();
if(cljs.core.truth_(inst_25099)){
var statearr_25143_25166 = state_25128__$1;
(statearr_25143_25166[(1)] = (8));

} else {
var statearr_25144_25167 = state_25128__$1;
(statearr_25144_25167[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25129 === (14))){
var inst_25121 = (state_25128[(2)]);
var inst_25122 = cljs.core.async.close_BANG_.call(null,out);
var state_25128__$1 = (function (){var statearr_25146 = state_25128;
(statearr_25146[(13)] = inst_25121);

return statearr_25146;
})();
var statearr_25147_25168 = state_25128__$1;
(statearr_25147_25168[(2)] = inst_25122);

(statearr_25147_25168[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25129 === (10))){
var inst_25111 = (state_25128[(2)]);
var state_25128__$1 = state_25128;
var statearr_25148_25169 = state_25128__$1;
(statearr_25148_25169[(2)] = inst_25111);

(statearr_25148_25169[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25129 === (8))){
var inst_25092 = (state_25128[(9)]);
var inst_25088 = (state_25128[(8)]);
var inst_25096 = (state_25128[(10)]);
var inst_25101 = inst_25088.push(inst_25092);
var tmp25145 = inst_25088;
var inst_25088__$1 = tmp25145;
var inst_25089 = inst_25096;
var state_25128__$1 = (function (){var statearr_25149 = state_25128;
(statearr_25149[(14)] = inst_25101);

(statearr_25149[(7)] = inst_25089);

(statearr_25149[(8)] = inst_25088__$1);

return statearr_25149;
})();
var statearr_25150_25170 = state_25128__$1;
(statearr_25150_25170[(2)] = null);

(statearr_25150_25170[(1)] = (2));


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
});})(c__23252__auto___25156,out))
;
return ((function (switch__23157__auto__,c__23252__auto___25156,out){
return (function() {
var cljs$core$async$state_machine__23158__auto__ = null;
var cljs$core$async$state_machine__23158__auto____0 = (function (){
var statearr_25151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25151[(0)] = cljs$core$async$state_machine__23158__auto__);

(statearr_25151[(1)] = (1));

return statearr_25151;
});
var cljs$core$async$state_machine__23158__auto____1 = (function (state_25128){
while(true){
var ret_value__23159__auto__ = (function (){try{while(true){
var result__23160__auto__ = switch__23157__auto__.call(null,state_25128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23160__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23160__auto__;
}
break;
}
}catch (e25152){if((e25152 instanceof Object)){
var ex__23161__auto__ = e25152;
var statearr_25153_25171 = state_25128;
(statearr_25153_25171[(5)] = ex__23161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25128);

return cljs.core.cst$kw$recur;
} else {
throw e25152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23159__auto__,cljs.core.cst$kw$recur)){
var G__25172 = state_25128;
state_25128 = G__25172;
continue;
} else {
return ret_value__23159__auto__;
}
break;
}
});
cljs$core$async$state_machine__23158__auto__ = function(state_25128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23158__auto____1.call(this,state_25128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23158__auto____0;
cljs$core$async$state_machine__23158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23158__auto____1;
return cljs$core$async$state_machine__23158__auto__;
})()
;})(switch__23157__auto__,c__23252__auto___25156,out))
})();
var state__23254__auto__ = (function (){var statearr_25154 = f__23253__auto__.call(null);
(statearr_25154[(6)] = c__23252__auto___25156);

return statearr_25154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23254__auto__);
});})(c__23252__auto___25156,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1545117975953
