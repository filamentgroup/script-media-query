/*! An @media (script) polyfill. Use @media (script){ ... }. [c]Scott Jehl, Filament Group, Inc. MIT License */
(function( w ){

	w.enableScriptMQs = function(){
		// if script mqs already work natively, leave now.
		if( w.matchMedia && w.matchMedia( "(script)" ).matches ){
			return;
		}
		var ss = document.styleSheets,
			// notes on this match:
			// "not all": When a (script) media query is parsed in a browser that doesn't recognize it, it'll change it to "not all"
			// "script|unknown": In IE9, 10, 11 the script media type returns as "unknown", but other browsers keep it as "script"
			match = /\s*not all\,\s*(script|unknown)/gmi,
			// replace (script) with "all" to enable the media query
			replace = "all";

		// loop through stylesheets
		for( var i = 0; i < ss.length; i++ ){
			// loop through style rules.
			// note: IE needs .rules instead of .cssRules
			var rulez = ss[ i ].cssRules || ss[ i ].rules;
			for( var j = 0; j < rulez.length; j++ ){
				// if it's a media rule, it's a media query. It'll have a "media" property
				var media = rulez[ j ].media;
				// if there's a media property and it contains our match, let's replace it!
				if( media && media.mediaText.match( match ) ){
					media.mediaText = replace;
				}
			}
		}
	};

}( this ));