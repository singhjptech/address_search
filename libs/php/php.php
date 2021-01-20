<?php

  if(isset($_REQUEST['zipcode']))
  {
  $string = str_replace(' ', '', $_REQUEST['zipcode']);
  $url="http://api.geonames.org/postalCodeLookupJSON?postalcode=".$string."&username=jsingh318";

  //  Initiate curl
  $ch = curl_init();
  // Will return the response, if false it print the response
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  // Set the url
  curl_setopt($ch, CURLOPT_URL,$url);
  // Execute
  $result=curl_exec($ch);
  // Closing
  curl_close($ch);
  $postalcodes=json_decode($result);
  $post=$postalcodes->postalcodes;
  
  echo json_encode($post);
  }
?>