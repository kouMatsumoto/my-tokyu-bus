export const folderNumberHTMLMock = `<html><head>
<meta http-equiv="Content-Type" content="text/html; charset=shift_jis">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="Expires" content="-1">
<title></title>
</head><body>

<center>
＝バス時刻表＝
</center>

<hr>

<form method="GET" action="./index.cgi">

  <input type="hidden" value="111213" name="disp_history">
  <input type="hidden" value="07/08" name="mmdd">
  <input type="hidden" value="8" name="folder">
▼検索文字列入力<br>
  <input type="radio" value="1" name="search_type">前方一致<br>
  <input type="radio" value="2" name="search_type" checked>部分一致<br>
  <input type="radio" value="3" name="search_type">後方一致<br>
  <br>
  <input type="text" name="search_str" value=""><br>
  <input type="submit" value="検索">
</form>

停留所の一部の漢字、またはひらがなを入力して検索ボタンを押してください。

<hr>

<a href="./index.cgi?cd=11,07/08," accesskey="9">9. 戻る</a><br>
<a href="./index.cgi" accesskey="0">0. ﾄｯﾌﾟへ</a><br>

</body></html>
`;
