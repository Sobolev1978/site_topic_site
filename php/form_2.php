<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<META HTTP-EQUIV="Refresh" CONTENT="2; URL=http://alfa1978.hhos.ru/TLS/">
</head>
<body>
<?php
$myaddr = "dneprovscki@yandex.ru";


if (isset($_POST['call-control']) && $_POST['call-control'] == 0){

  $site = $_POST['Site Topic'];
	$name = $_POST['name'];
	$telefon = $_POST['telefon'];


	$headers = "MIME-Version: 1.0\r\n";
	$headers = "Content-Type: text/plain;charset=utf-8";
  	$headers = "From: info@vash_domen.ru $from";
	$subj = "=?utf-8?b?".base64_encode('Бесплатная консультация')."?=";
	$text = " \nSite Topic".$site. " \nИмя: ".$name. " \nТелефон: " .$telefon;
	mail($myaddr, $subj, $text, $headers, $from);
	echo "<div style=\"background-image:url();background-position:top;margin-top:40px;\"></div><div style=\"width:auto; height: 240px; color: #111111; text-align:center; font-family: 'Arial';
 font-size: 18px; line-height: 18px;\"><div style=\"margin: 40; text-align:center;font-weight:bold;padding:10px;margin-left:0px;background:#fff;color:#000;line-height:26px;\"><p><span style='display:block; font-size:48px; margin-top:50px; line-height:48px;'>Спасибо!</span>
<p style='margin-top:-20px;'>Ваша заявка отправлена!</p>
<p style='margin-top:-20px;'>Мы свяжемся с Вами в кратчайшие сроки!</p></div></div></section>";

	} else {echo "Нет ПОСТА";}
	?>
	</body></html>
