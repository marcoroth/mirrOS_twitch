<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>

<script>
	$( document ).ready(function() {
		var hash = $(location).attr('hash');

		hash = hash.substr(1);
		hashes = hash.split("&")

		$.each(hashes, function(index, el) {
			split = el.split("=")
			param = split[0];
			value = split[1];

			if (param == "access_token") {
				$.post('/config/setConfigValueAjax.php', {'key' : 'twitch_access_token', 'value' : value}).done(function(){
					window.location = "/config";
				});
			}
		});
	});
</script>
