var keypress = require('keypress'),
  tty = require('tty');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// import code blocks
codeBank = [
	"jQuery.extend = jQuery.fn.extend = function() {"+"\r\n"+
	"	var src, copyIsArray, copy, name, options, clone,"+"\r\n"+
	"		target = arguments[0] || {},"+"\r\n"+
	"		i = 1,"+"\r\n"+
	"		length = arguments.length,"+"\r\n"+
	"		deep = false;"+"\r\n"+
	"	if ( typeof target === 'boolean' ) {"+"\r\n"+
	"		deep = target;"+"\r\n"+
	"		target = arguments[1] || {};"+"\r\n"+
	"		i = 2;"+"\r\n"+
	"	}"+"\r\n"+
	"	if ( typeof target !== 'object' && !jQuery.isFunction(target) ) {"+"\r\n"+
	"		target = {};"+"\r\n"+
	"	}"+"\r\n"+
	"	if ( length === i ) {"+"\r\n"+
	"		target = this;"+"\r\n"+
	"		--i;"+"\r\n"+
	"	}"+"\r\n"+
	"	for ( ; i < length; i++ ) {"+"\r\n"+
	"		if ( (options = arguments[ i ]) != null ) {"+"\r\n"+
	"			for ( name in options ) {"+"\r\n"+
	"				src = target[ name ];"+"\r\n"+
	"				copy = options[ name ];"+"\r\n"+
	"				if ( target === copy ) {"+"\r\n"+
	"					continue;"+"\r\n"+
	"				}"+"\r\n"+
	"				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {"+"\r\n"+
	"					if ( copyIsArray ) {"+"\r\n"+
	"						copyIsArray = false;"+"\r\n"+
	"						clone = src && jQuery.isArray(src) ? src : [];"+"\r\n"+
	"					} else {"+"\r\n"+
	"						clone = src && jQuery.isPlainObject(src) ? src : {};"+"\r\n"+
	"					}"+"\r\n"+
	"					target[ name ] = jQuery.extend( deep, clone, copy );"+"\r\n"+
	"				} else if ( copy !== undefined ) {"+"\r\n"+
	"					target[ name ] = copy;"+"\r\n"+
	"				}"+"\r\n"+
	"			}"+"\r\n"+
	"		}"+"\r\n"+
	"	}"+"\r\n"+
	"	return target;"+"\r\n"+
	"};",
	"jQuery.ready.promise = function( obj ) {"+"\r\n"+
	"if ( !readyList ) {"+"\r\n"+
	"	readyList = jQuery.Deferred();"+"\r\n"+
	"	if ( document.readyState === 'complete' ) {"+"\r\n"+
	"		setTimeout( jQuery.ready );"+"\r\n"+
	"	} else if ( document.addEventListener ) {"+"\r\n"+
	"		document.addEventListener( 'DOMContentLoaded', completed, false );"+"\r\n"+
	"		window.addEventListener( 'load', completed, false );"+"\r\n"+
	"	} else {"+"\r\n"+
	"		document.attachEvent( 'onreadystatechange', completed );"+"\r\n"+
	"		window.attachEvent( 'onload', completed );"+"\r\n"+
	"		var top = false;"+"\r\n"+
	"		try {"+"\r\n"+
	"			top = window.frameElement == null && document.documentElement;"+"\r\n"+
	"		} catch(e) {}"+"\r\n"+
	"		if ( top && top.doScroll ) {"+"\r\n"+
	"			(function doScrollCheck() {"+"\r\n"+
	"				if ( !jQuery.isReady ) {"+"\r\n"+
	"					try {"+"\r\n"+
	"						top.doScroll('left');"+"\r\n"+
	"					} catch(e) {"+"\r\n"+
	"						return setTimeout( doScrollCheck, 50 );"+"\r\n"+
	"					}"+"\r\n"+
	"					detach();"+"\r\n"+
	"					jQuery.ready();"+"\r\n"+
	"				}"+"\r\n"+
	"			})();"+"\r\n"+
	"		}"+"\r\n"+
	"	}"+"\r\n"+
	"}"+"\r\n"+
	"return readyList.promise( obj );",
	"jQuery.extend({"+"\r\n"+
	"	cache: {},"+"\r\n"+
	"	expando: 'jQuery' + ( core_version + Math.random() ).replace( /D/g, '' ),"+"\r\n"+
	"	noData: {"+"\r\n"+
	"		'embed': true,"+"\r\n"+
	"		'object': 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',"+"\r\n"+
	"		'applet': true"+"\r\n"+
	"	},"+"\r\n"+
	"	hasData: function( elem ) {"+"\r\n"+
	"		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];"+"\r\n"+
	"		return !!elem && !isEmptyDataObject( elem );"+"\r\n"+
	"	},"+"\r\n"+
	"	data: function( elem, name, data ) {"+"\r\n"+
	"		return internalData( elem, name, data );"+"\r\n"+
	"	},"+"\r\n"+
	"	removeData: function( elem, name ) {"+"\r\n"+
	"		return internalRemoveData( elem, name );"+"\r\n"+
	"	},"+"\r\n"+
	"	_data: function( elem, name, data ) {"+"\r\n"+
	"		return internalData( elem, name, data, true );"+"\r\n"+
	"	},"+"\r\n"+
	"	_removeData: function( elem, name ) {"+"\r\n"+
	"		return internalRemoveData( elem, name, true );"+"\r\n"+
	"	},"+"\r\n"+
	"	acceptData: function( elem ) {"+"\r\n"+
	"		if ( elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9 ) {"+"\r\n"+
	"			return false;"+"\r\n"+
	"		}"+"\r\n"+
	"		var noData = elem.nodeName && jQuery.noData[ elem.nodeName.toLowerCase() ];"+"\r\n"+
	"		return !noData || noData !== true && elem.getAttribute('classid') === noData;"+"\r\n"+
	"	}"+"\r\n"+
	"});",
	"function dataAttr( elem, key, data ) {"+"\r\n"+
	"	if ( data === undefined && elem.nodeType === 1 ) {"+"\r\n"+
	"		var name = 'data-'' + key.replace( rmultiDash, '-$1' ).toLowerCase();"+"\r\n"+
	"		data = elem.getAttribute( name );"+"\r\n"+
	"		if ( typeof data === 'string' ) {"+"\r\n"+
	"			try {"+"\r\n"+
	"				data = data === 'true' ? true :"+"\r\n"+
	"					data === 'false' ? false :"+"\r\n"+
	"					data === 'null' ? null :"+"\r\n"+
	"					+data + '' === data ? +data :"+"\r\n"+
	"					rbrace.test( data ) ? jQuery.parseJSON( data ) :"+"\r\n"+
	"						data;"+"\r\n"+
	"			} catch( e ) {}"+"\r\n"+
	"			jQuery.data( elem, key, data );"+"\r\n"+
	"		} else {"+"\r\n"+
	"			data = undefined;"+"\r\n"+
	"		}"+"\r\n"+
	"	}"+"\r\n"+
	"	return data;"+"\r\n"+
	"}",
	"String.prototype.trim = function(){"+"\r\n"+
	"	this.replace( /^s+|s+$/g,'');"+"\r\n"+
	"};",
	"function sign(x) {"+"\r\n"+
	"	return (x > 0) - (x < 0);"+"\r\n"+
	"};",
	"function isIE() {"+"\r\n"+
	"	return 'v' == 'v';"+"\r\n"+
	"};",
	"function chain(fn) {"+"\r\n"+
	"	return function() {"+"\r\n"+
	"		return fn.apply(this, arguments) || this;"+"\r\n"+
	"	};"+"\r\n"+
	"};",
	"readableNumberLimiter = function (number,limiter) {"+"\r\n"+
	"	return number.toString().replace("+"\r\n"+
	"	new RegExp("+"\r\n"+
	"		(=d{+(number.toString().length%3||-1)+})(?=d{3})),"+"\r\n"+
	"		$1+limiter"+"\r\n"+
	"	).replace(/(d{3})(?=d)/g,$1+limiter);"+"\r\n"+
	"};",
	"function clone(obj) {"+"\r\n"+
	"	return typeof obj === 'undefined' ?"+"\r\n"+
	"		this : (clone.prototype = Object(obj), new clone);"+"\r\n"+
	"};",
	"function addCallback(oldFunc, newFunc) {"+"\r\n"+
	"	oldFunc = oldFunc || function () {};"+"\r\n"+
	"		return function () {oldFunc(); newFunc();};"+"\r\n"+
	"};",
	"function chunk(a, s){"+"\r\n"+
	"	for(var x, i = 0, c = -1, l = a.length, n = []; i < l; i++)"+"\r\n"+
	"		(x = i % s) ? n[c][x] = a[i] : n[++c] = [a[i]];"+"\r\n"+
	"	return n;"+"\r\n"+
	"};"
];


// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
	if(key.name == 'enter') {
		var ranNum = Math.floor((Math.random()*11)); //between 0-11
		console.log(codeBank[ranNum]);
	};

	// to exit app
	if (key && key.ctrl && key.name == 'c') {
		process.stdin.pause();
	};
});

if (typeof process.stdin.setRawMode == 'function') {
	process.stdin.setRawMode(true);
} else {
	tty.setRawMode(true);
};

process.stdin.resume();
