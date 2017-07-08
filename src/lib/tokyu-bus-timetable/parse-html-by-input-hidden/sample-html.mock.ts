export const sampleHTMLMock = `<html><head>
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

  <input type="hidden" value="111213030405" name="disp_history">
  <input type="hidden" value="2" name="search_type">
  <input type="hidden" value="%89%ba%94n" name="search_str">
  <input type="hidden" value="1" name="page">
  <input type="hidden" value="" name="kasira1">
  <input type="hidden" value="" name="kasira2">
  <input type="hidden" value="" name="kasira3">
  <input type="hidden" value="" name="line_type">
  <input type="hidden" value="" name="station_cd">
  <input type="hidden" value="1710409" name="busstop_cd">
  <input type="hidden" value="612101" name="keito_cd">
  <input type="hidden" value="2" name="updown_cd">
  <input type="hidden" value="01" name="pole_cd">
  <input type="hidden" value="07/07" name="mmdd">
  <input type="hidden" value="7" name="folder">
▼時間指定<br>
  <select name="hh" colmn="2">
  <option value="04">4
  <option value="05">5
  <option value="06">6
  <option value="07">7
  <option value="08">8
  <option value="09">9
  <option value="10">10
  <option value="11">11
  <option value="12">12
  <option value="13">13
  <option value="14">14
  <option value="15">15
  <option value="16">16
  <option value="17">17
  <option value="18">18
  <option value="19">19
  <option value="20">20
  <option value="21">21
  <option value="22" selected>22
  <option value="23">23
  <option value="24">24
  <option value="25">25
  </select>
  時
  <select name="mm" colmn="2">
  <option value="00" selected>0
  <option value="10">10
  <option value="20">20
  <option value="30">30
  <option value="40">40
  <option value="50">50
  </select>
  分<br>
  <input type="submit" value="検索">
</form>

<hr>

<a href="./index.cgi?cd=11121303,07/07,7,2,%89%ba%94n,1,,,,,,1710409," accesskey="9">9. 戻る</a><br>
<a href="./index.cgi" accesskey="0">0. ﾄｯﾌﾟへ</a><br>

</body></html>
`;
