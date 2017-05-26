<?php

	include('../../../config/glancrConfig.php');

	setConfigValue("twitch_access_token", "");
	setConfigValue("twitch_client_id", "");
	setConfigValue("twitch_include_game", "true");
	setConfigValue("twitch_include_title", "false");
	setConfigValue("twitch_include_user_icon", "true");
	setConfigValue("twitch_include_profil_pic", "true");
	setConfigValue("twitch_include_viewer_count", "true");
	setConfigValue("twitch_stream_name_length", "230");
	setConfigValue("twitch_sort_by", "viewers_desc");

	setConfigValue("reload", "1");

	header("location: /config/");

?>
