$('.twitch__edit--button').click(function() {
	$.post('/config/setConfigValueAjax.php', {'key' : 'twitch_client_id', 'value' : $("#twitch_client_id").is(':checked')});
	$.post('/config/setConfigValueAjax.php', {'key' : 'twitch_include_game', 'value' : $("#twitch_include_game").is(':checked')});
	$.post('/config/setConfigValueAjax.php', {'key' : 'twitch_include_title', 'value' : $("#twitch_include_title").is(':checked')});
	$.post('/config/setConfigValueAjax.php', {'key' : 'twitch_include_user_icon', 'value' : $("#twitch_include_user_icon").is(':checked')});
	$.post('/config/setConfigValueAjax.php', {'key' : 'twitch_include_profil_pic', 'value' : $("#twitch_include_profil_pic").is(':checked')});
	$.post('/config/setConfigValueAjax.php', {'key' : 'twitch_include_viewer_count', 'value' : $("#twitch_include_viewer_count").is(':checked')});
	$.post('/config/setConfigValueAjax.php', {'key' : 'twitch_max_streams', 'value' : $("#twitch_max_streams").val()});
	$.post('/config/setConfigValueAjax.php', {'key' : 'twitch_sort_by', 'value' : $("#twitch_sort_by").val()});
	$.post('/config/setConfigValueAjax.php', {'key' : 'twitch_stream_name_length', 'value' : $("#twitch_stream_name_length").val()}).done(function() {
		$('#ok').show(30, function() {
			$(this).hide('slow');
		})
	});
});
