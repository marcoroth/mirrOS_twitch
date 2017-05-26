<?php

	$twitch_access_token = getConfigValue('twitch_access_token');
	$twitch_include_game = getConfigValue('twitch_include_game');
	$twitch_include_title = getConfigValue('twitch_include_title');
	$twitch_include_user_icon = getConfigValue('twitch_include_user_icon');
	$twitch_include_profil_pic = getConfigValue('twitch_include_profil_pic');
	$twitch_include_viewer_count = getConfigValue('twitch_include_viewer_count');
	$twitch_stream_name_length = getConfigValue('twitch_stream_name_length');
	$twitch_max_streams = getConfigValue('twitch_max_streams');
	$twitch_sort_by = getConfigValue('twitch_sort_by');

	if($twitch_access_token == 'GLANCR_DEFAULT') {$twitch_access_token = ''; }
	if($twitch_include_game == 'GLANCR_DEFAULT') {$twitch_include_game = 'true'; }
	if($twitch_include_title == 'GLANCR_DEFAULT') {$twitch_include_title = 'false'; }
	if($twitch_include_user_icon == 'GLANCR_DEFAULT') {$twitch_include_user_icon = 'true'; }
	if($twitch_include_profil_pic == 'GLANCR_DEFAULT') {$twitch_include_profil_pic = 'true'; }
	if($twitch_include_viewer_count == 'GLANCR_DEFAULT') {$twitch_include_viewer_count = 'true'; }
	if($twitch_stream_name_length == 'GLANCR_DEFAULT') {$twitch_stream_name_length = '230'; }
	if($twitch_max_streams == 'GLANCR_DEFAULT') {$twitch_max_streams = '7'; }
	if($twitch_sort_by == 'GLANCR_DEFAULT') {$twitch_sort_by = 'viewers_desc'; }

	if ($twitch_access_token == ""){
		include "_step1.php";
	} else {
		include "_step2.php";
	}

 ?>

<div class="block__add" id="twitch__edit">
	<button class="twitch__edit--button" href="#">
		<span><?php echo _('twitch_save'); ?></span>
	</button>
</div>
