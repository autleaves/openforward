<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>PHP基礎</title>
</head>
<body>

<?php
$shu=$_POST['shu'];
$memo = $_POST['memo'];

$shu=htmlspecialchars($shu);
$memo=htmlspecialchars($memo);

if($memo==''){
    print'にゅうりょくしてね<br>';
} else {
   print '種別:';
   if($shu == 1) {
    print '冊子';
   } elseif ($shu == 2) {
    print 'チラシ';
   }
   print '<br>お名前・ご連絡先・数量:';
   print $memo;
   print '<br>';
}

?>

</body>
</html>