<h5><?php echo _("twitch_step2_title"); ?></h5><br />

<input type="checkbox" name="twitch_include_game" id="twitch_include_game" <?php if ($twitch_include_game == "true") { echo "checked"; } ?>>
<label for="twitch_include_game"><?php echo _("twitch_include_game") ?></label><br />

<input type="checkbox" name="twitch_include_title" id="twitch_include_title" <?php if ($twitch_include_title == "true") { echo "checked"; } ?>>
<label for="twitch_include_title"><?php echo _("twitch_include_title") ?></label><br />

<input type="checkbox" name="twitch_include_profil_pic" id="twitch_include_profil_pic" <?php if ($twitch_include_profil_pic == "true") { echo "checked"; } ?>>
<label for="twitch_include_profil_pic"><?php echo _("twitch_include_profil_pic") ?></label><br />

<input type="checkbox" name="twitch_include_user_icon" id="twitch_include_user_icon" <?php if ($twitch_include_user_icon == "true") { echo "checked"; } ?>>
<label for="twitch_include_user_icon"><?php echo _("twitch_include_user_icon") ?></label><br />

<input type="checkbox" name="twitch_include_viewer_count" id="twitch_include_viewer_count" <?php if ($twitch_include_viewer_count == "true") { echo "checked"; } ?>>
<label for="twitch_include_viewer_count"><?php echo _("twitch_include_viewer_count") ?></label><br /><br />

<label for="twitch_stream_name_length"><?php echo _("twitch_stream_name_length") ?></label>
<input type="number" name="twitch_stream_name_length" id="twitch_stream_name_length" value="<?php echo $twitch_stream_name_length ?>">

<a href="/modules/twitch/assets/resetConfig.php"><?php echo _("twitch_reset_config") ?></a><br /><br />

<script>
	<?php include "_step2.js"; ?>
</script>
