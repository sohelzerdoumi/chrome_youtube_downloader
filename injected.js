String.prototype.format = function()
{
   var content = this;
   for (var i=0; i < arguments.length; i++)
   {
        var replacement = '{' + i + '}';
        content = content.replace(replacement, arguments[i]);  
   }
   return content;
};

/**
 * Add buttonTab 
 */
var downloadButtonTab = ' \
<span> \
    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-text action-panel-trigger yt-uix-tooltip" \
    type="button" title="" onclick=";return false;" data-trigger-for="action-panel-download" data-button-toggle="true">\
    	<span class="yt-uix-button-content">Download </span>\
    </button> \
</span>';
document.getElementById("watch7-secondary-actions").innerHTML = document.getElementById("watch7-secondary-actions").innerHTML + downloadButtonTab;



/**
 * Extract videos and create view
 */
var videos = ytplayer.config.args.url_encoded_fmt_stream_map.split(",");
var outputText  = "";
// loop videos
for (var i = 0 ; i < videos.length; i++) {
	var datas = videos[i].split("\u0026");

	// loop data
	for (var j = datas.length - 1; j >= 0; j--) {
		if( datas[j].indexOf('quality') == 0 )
			var quality = datas[j].substring(8);
		else if( datas[j].indexOf('url') == 0 )
			var url = decodeURIComponent(datas[j].substring(4));
	};
	outputText += '<p>{0} <a href="{1}" download="videos.mp4">Download</a></p>'.format(quality,url) ;
};



/**
 * Affichage
 */
var downloadPanel = '<div id="action-panel-download" class="action-panel-content hid" data-panel-loaded="true"> \
	<div id="watch-download" class="yt-uix-expander yt-uix-expander-collapsed yt-uix-button-panel"> \
		<div id="watch-download-content"> \
				' + outputText  + ' \
		</div> \
	</div> \
</div>'; 
document.getElementById("watch7-action-panels").innerHTML = document.getElementById("watch7-action-panels").innerHTML + downloadPanel;
