<?php

include('../../../config/glancrConfig.php');
$twitch_access_token = getConfigValue("twitch_access_token");

$opts = array(
  'http' => array(
    'method' => "GET",
    'header' => "Authorization: OAuth $twitch_access_token\r\n" .
                "Accept: application/vnd.twitchtv.v5+json\r\n"
  )
);

$context = stream_context_create($opts);
$file = file_get_contents('https://api.twitch.tv/kraken/streams/followed?stream_type=live&offset=0', false, $context);

header("Conent-Type: application/json");
echo $file;

?>
