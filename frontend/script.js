var twitch_access_token;
var twitch_include_game;
var twitch_include_title;
var twitch_include_user_icon;
var twitch_include_profil_pic;
var twitch_include_viewer_count;
var twitch_stream_name_length;

$(document).ready(function () {
	twitch_access_token = "<?php echo getConfigValue('twitch_access_token'); ?>";
	twitch_include_game = "<?php echo getConfigValue('twitch_include_game'); ?>";
	twitch_include_title = "<?php echo getConfigValue('twitch_include_title'); ?>";
	twitch_include_user_icon = "<?php echo getConfigValue('twitch_include_user_icon'); ?>";
	twitch_include_profil_pic = "<?php echo getConfigValue('twitch_include_profil_pic'); ?>";
	twitch_include_viewer_count = "<?php echo getConfigValue('twitch_include_viewer_count'); ?>";
	twitch_stream_name_length = parseInt("<?php echo getConfigValue('twitch_stream_name_length'); ?>");

	reloadTwitch();
});

function reloadTwitch() {

	if (twitch_access_token == "") {
		$("#twitch_table").find("td").text("<?php echo _('twitch_no_access_key') ?>");
	} else {
		$.getJSON("/modules/twitch/assets/streams.php").done(function(data){

			$("#twitch_table").empty();
			$("#twitch_count").text(data._total + " <?php echo _('twitch_active_streams') ?>")

			$.each(data.streams, function(index, stream) {
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
			});

		});
	}

  // alle 5 Sekunden aktualiseren
  window.setTimeout(function() {
  	reloadTwitch();
  }, 5000);
}
