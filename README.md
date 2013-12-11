script-media-query
==================

An @media (script) polyfill experiment
[c]Scott Jehl, Filament Group, Inc
MIT Licence


Rather than adding a `.js` class to qualify js-only styles, there's a new emerging standard for `@media (script)`. This is an experiment for enabling its use.

To use, add some styles like...

```css
@media (script), script {
	body:before {
		content: "JavaScript is enabled!";
		color: green;
	}
}
```

NOTE: the second media type, `, script` is not a real thing, but it is needed because the `(script)` query will be changed to `not all` when the browser looks it up. Fortunately, that second media type stays as-is, so the script recognizes the media.

Anyway, once you attach the scriptmq.js script, just call `enableScriptMQs();` and the script will overwrite the query directly in the stylesheet to the following, enabling it:

 ```css
@media all {
	body:before {
		content: "JavaScript is enabled!";
		color: green;
	}
}
```