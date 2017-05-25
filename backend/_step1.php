<h4><?php echo _('twitch_step1') ?></h4>

<?php echo _('twitch_step1_desc') ?><br /><br />

<a href="https://passport.twitch.tv/authentications/new?embed=1" class="button" target="_blank"><?php echo _('twitch_step1_button') ?></a><br /><br />


<h4><?php echo _('twitch_step2') ?></h4>

Name: <br />
<input type="text" disabled="true" value="Glancr mirrOS Twitch Module">

Redirect URI:<br />
<input type="text" disabled="true" id="twitch_redirect_uri" value="http://<?php echo $_SERVER["SERVER_NAME"]; ?>/modules/twitch/assets/oauth.php">

Application Category: <br />
<input type="text" disabled="true" value="Other">

Other Category:<br />
<input type="text" disabled="true" value="Smart Mirror">

<?php echo _('twitch_step2_desc') ?><br /><br />

<a href="https://www.twitch.tv/kraken/oauth2/clients/new" class="button" target="_blank"><?php echo _('twitch_step2_button') ?></a><br /><br />



<h4><?php echo _('twitch_step3') ?></h4>

<?php echo _('twitch_step3_desc') ?><br /><br />

<img src="/modules/twitch/assets/client_id.png" alt="client_id"><br /><br />

<input type="text" id="twitch_client_id" placeholder="<?php echo _('twitch_client_id');?>" value="<?php echo $twitch_client_id; ?>"/>

<?php echo _('twitch_step3_desc2') ?><br /><br />

<script>
	<?php include "_step1.js"; ?>
</script>
