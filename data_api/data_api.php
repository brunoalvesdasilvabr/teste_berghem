<?php
header('Content-Type: text/html; charset=UTF-8');

$clantag = "#P8PPLJ2";

$token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjhmYTUwODkxLTFkYmYtNDNjNi04MDMzLWU5MGUzYjZhNGU4YSIsImlhdCI6MTU3NDA2MTQ1Nywic3ViIjoiZGV2ZWxvcGVyLzYxZDZjMGIxLTA5MzgtZWI4Yi04ZGUwLTRjZTgyZWNiZmI0YiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4Ny4zNy43LjExNSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.v3vY3XMPlAfFDuP3Fl3iqE2ByeP3a7N5Wmh63WXhz3Dh70syQ6kTOKguTsKN0edYjmdE8U_AVICtcwamnZ93qg";

$url = "https://api.clashofclans.com/v1/locations/32000038/rankings/clans?limit=20";

$ch = curl_init($url);

$headr = array();
$headr[] = "Accept: application/json";
$headr[] = "Authorization: Bearer ".$token;

curl_setopt($ch, CURLOPT_HTTPHEADER, $headr);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 

$res = curl_exec($ch);
 $data = $res;
curl_close($ch);

// echo "<pre>";
print_r($data);
// echo "</pre>";
