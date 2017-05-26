<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">

<h2 class="module__title">Twitch  <span id="twitch_count"></span></h2>

<table id="twitch_table">
	<tr>
		<td><?php echo _('twitch_loading_streams') ?></td>
	</tr>
</table>

<style>
	#twitch_table td {
		max-width: <?php echo getConfigValue('twitch_stream_name_length') ?>px;
	}
</style>
