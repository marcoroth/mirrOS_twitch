$(document).ready(function() {
	
	$('.twitch__edit--button').click(function() {
		window.location = "https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&scope=user_read&client_id=" + $("#twitch_client_id").val() + "&redirect_uri=" + $("#twitch_redirect_uri").val();
	});

});
