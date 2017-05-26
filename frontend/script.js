var twitch_access_token;
var twitch_include_game;
var twitch_include_title;
var twitch_include_user_icon;
var twitch_include_profil_pic;
var twitch_include_viewer_count;
var twitch_stream_name_length;
var twitch_max_streams;
var twitch_counter;
var twitch_sort_by;

var twitch_data;

$(document).ready(function () {
	twitch_access_token = "<?php echo getConfigValue('twitch_access_token'); ?>";
	twitch_include_game = "<?php echo getConfigValue('twitch_include_game'); ?>";
	twitch_include_title = "<?php echo getConfigValue('twitch_include_title'); ?>";
	twitch_include_user_icon = "<?php echo getConfigValue('twitch_include_user_icon'); ?>";
	twitch_include_profil_pic = "<?php echo getConfigValue('twitch_include_profil_pic'); ?>";
	twitch_include_viewer_count = "<?php echo getConfigValue('twitch_include_viewer_count'); ?>";
	twitch_sort_by = "<?php echo getConfigValue('twitch_sort_by'); ?>";
	twitch_stream_name_length = parseInt("<?php echo getConfigValue('twitch_stream_name_length'); ?>");
	twitch_max_streams = parseInt("<?php echo getConfigValue('twitch_max_streams'); ?>");

	reloadTwitch();
});

function reloadTwitch() {

	if (twitch_access_token == "") {
		$("#twitch_table").find("td").text("<?php echo _('twitch_no_access_key') ?>");
	} else {
		$.getJSON("/modules/twitch/assets/streams.php").done(function(data){

			twitch_data = data;

			$("#twitch_table").empty();
			$("#twitch_count").text(data._total + " <?php echo _('twitch_active_streams') ?>")

			twitch_counter = 0;

			$.each(data.streams, function(index, stream) {
				stream.display_name = stream.channel.display_name;
			});


			if (twitch_sort_by == "name_desc"){ // Name absteigend
				data.streams.sort(sort_by('display_name', true, function(a){return a.toUpperCase()}));

			} else if (twitch_sort_by == "name_asc") { // Name Aufsteigend
				data.streams.sort(sort_by('display_name', false, function(a){return a.toUpperCase()}));

			} else if (twitch_sort_by == "game_desc") { // Game absteigend
				data.streams.sort(sort_by('game', true, function(a){return a.toUpperCase()}));

			} else if (twitch_sort_by == "game_asc") { // Game Aufsteigend
				data.streams.sort(sort_by('game', false, function(a){return a.toUpperCase()}));

			} else if (twitch_sort_by == "viewers_desc") { // Viewer absteigend
				data.streams.sort(sort_by('viewers', true, parseInt));

			} else if (twitch_sort_by == "viewers_asc") { // Viewer Aufsteigend
				data.streams.sort(sort_by('viewers', false, parseInt));
			}

			$.each(data.streams, function(index, stream) {

					if (twitch_counter < twitch_max_streams) {
					stream_name = "";

					title = stream.channel.status;
					game = stream.channel.game;

					if (twitch_include_game == "true" && twitch_include_title == "true"){
						stream_name = game + ": " + title;
					} else if (twitch_include_game == "true"){
						stream_name = game;
					} else if (twitch_include_title == "true"){
						stream_name = title;
					}

					if (stream_name.length > twitch_stream_name_length) {
						stream_name = stream_name.substring(0, twitch_stream_name_length) + "...";
					}

					$("#twitch_table").append("<tr></tr>");
					if (twitch_include_profil_pic == "true"){
						$("#twitch_table tr:last").append("<td style='padding-left: -10px'><img height='30px' src='" + stream.channel.logo + "'></td>");
					}
					$("#twitch_table tr:last").append("<td>" + stream.channel.display_name + "</td>");

					if (twitch_include_game || twitch_include_title){
						$("#twitch_table tr:last").append("<td width='100%'>" + stream_name + "</td>");
					}

					twitch_user_icon = ""
					if (twitch_include_user_icon == "true"){
						twitch_user_icon = "<i class='fa fa-users' aria-hidden='true'></i>";
					}

					if (twitch_include_viewer_count == "true"){
						$("#twitch_table tr:last").append("<td>" + twitch_user_icon + stream.viewers + "</td>");
					}
					twitch_counter++;
				}
			});

		});
	}

  // alle 5 Sekunden aktualiseren
  window.setTimeout(function() {
  	reloadTwitch();
  }, 5000);
}

// copied from http://stackoverflow.com/a/979325
var sort_by = function(field, reverse, primer){
   var key = primer ? function(x) {return primer(x[field])} : function(x) {return x[field]};
   reverse = !reverse ? 1 : -1;
   return function (a, b) { return a = key(a), b = key(b), reverse * ((a > b) - (b > a)); }
}
