;(function() {

	var timer = null,
		publisher = new Publisher();

	function ObserverList() {
		this.observerList = [];
	}

	ObserverList.prototype.add = function( obj ) {
		return this.observerList.push( obj );
	};

	ObserverList.prototype.count = function() {
		return this.observerList.length;
	};

	ObserverList.prototype.get = function( index ) {
		if( index > -1 && index < this.observerList.length ) {
			return this.observerList[ index ];
		}
	};

	ObserverList.prototype.animate = function() {
		clearInterval(timer);
		var inc = [], 
			dec = [],
			safe = false,
			self = this,
			len = self.count(),
			i, item, id, el, wide, show, open; 
		timer = setInterval( function() { 
			for ( i = 0; i < len; i++ ) { 
				item = self.get(i);
				wide = parseInt(item.wide);
				if ( !safe ) {
					dec[i] = wide;
					inc[i] = 0;
					safe = dec.length === len ? true : false; 
				}
				show = item.show;
				open = item.open;
				if ( !show && open && dec[i] >= 0 ) {  
					item.style.width = dec[i] + 'px';
					item.style.marginRight = '0px';
					item.style.marginBottom = '0px';
					dec[i] = dec[i] - 5;
				}
				if ( show && !open && inc[i] <= wide ) {
					item.style.width = inc[i] + 'px';
					item.style.marginRight = '10px';
					item.style.marginBottom = '10px';
					inc[i] = inc[i] + 5;
				}
			}
		}, 1);
	};

	function Publisher() { 
		this.observers = new ObserverList(); 
	}

	Publisher.prototype.addObserver = function( observer ){
		this.observers.add( observer );
	};

	Publisher.prototype.notify = function( context ){
		var i, observerCount = this.observers.count(); 
		for( i = 0; i < observerCount; i++ ) { 
			this.observers.get(i).update( context );
		}
		this.observers.animate();
	};

	function Observer() {}

	Observer.prototype.update = function( context ) {
		var i, contextLen = context.length,
			j, thisContextLen = this.context.length;
		this.open = this.show ? true : false;
		if ( contextLen === 0 ) {
			this.show = true; 
			return;
		}
		this.show = false;
		for ( i = 0; i < contextLen; i++ ) {
			for ( j = 0; j < thisContextLen; j++ ) {
				if ( context[i] === this.context[j] ) {
					this.show = true; 
					return;
				}
			}
		}
	};

	Observer.prototype.setProps = function( settings ) {
		var key;
		for ( key in settings ) { 
		    this[key] = settings[key]; 
		}
	};

	function extend( extension, obj ) { 
		var key;
		for ( key in extension ){ 
			obj[key] = extension[key]; 
		} 
	}

	function getChildren(parent){ 
		var children = [];
		var child = parent.firstChild;
	    while (child) {
	    	if ( child.nodeType === 1 ) {
	    		children.push( child ); 
	    	}
	    	child = child.nextSibling;
	    }
	    return children;
	}

	function strToArr(str) {
		var str = str.replace(/\s/g, '').toLowerCase(),
			arr = str.length === 0 ? [] : str.split(',');
		return arr; 
	}
	 
	function addObservers() {
		var slidesWrapper = document.getElementById( 'slides-wrapper' ),
			items = getChildren(slidesWrapper),
			i, len = items.length, str,
	  		settings = {};
		for ( i = 0; i < len; i++ ) {
			extend( new Observer(), items[i] );
			str = items[i].getAttribute('data-context'); 
			settings.context = strToArr(str); 
			settings.wide = items[i].getAttribute('data-width');
			settings.open = true;
			settings.show = true;
			items[i].setProps(settings); 
			publisher.addObserver( items[i] );
		}
	}

	function init() {
		var buttonsWrapper = document.getElementById( 'buttons-wrapper' ),
			buttons = getChildren(buttonsWrapper),
			i, len = buttons.length, str;
		for ( i = 0; i < len; i++ ) {
			str = buttons[i].getAttribute('data-context');
			buttons[i].context = strToArr(str);
			buttons[i].addEventListener('click', function () {
				publisher.notify(this.context); 
			}, false);
		}
		addObservers();
	}

	window.addEventListener('load', init, false);

}());
