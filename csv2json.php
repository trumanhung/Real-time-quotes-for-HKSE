<?php

$set = http_build_query(
	array(
    	'action' => 'stock',
        's' => (int)$_GET['s']
    )
);

$opts = array('http' =>
	array(
		'method' => 'POST',
		'header' => 'Content-type: application/x-www-form-urlencoded',
		'content' => $set
	)
);
$url = "http://finance.sina.com.hk/cgi-bin/api/stock.cgi";

$context = stream_context_create($opts);

$result = file_get_contents($url, false, $context);

echo $result;

?>