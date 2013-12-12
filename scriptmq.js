/*
An @media (script) polyfill experiment
use @media (script){ ... } in any browser
[c]Scott Jehl, Filament Group, Inc
MIT Licence
*/

(function( w ){

	w.enableScriptMQs = function(){
		// if script mqs already work natively, leave now.
		if( w.matchMedia && w.matchMedia( "(script)" ).matches ){
			return;
		}
		var ss = document.styleSheets,
			match = /\s*not all\,\s*(script|unknown)/gmi,
			replace = "all";

		for( var i = 0; i < ss.length; i++ ){
			for( var j=0; j<ss[ i ].cssRules.length; j++ ){
				var media = ss[ i ].cssRules[ j ].media;
				if( media && media.mediaText.match( match ) ){
					media.mediaText = replace;
				}
			}
		}
	};

}( this ));