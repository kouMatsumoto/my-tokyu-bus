export const busstopIdsHTMLMock = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="keywords" content="東急バス,バスロケ,路線バス,時刻表" />
<meta name="description" content="東急バスがご提供する、リアルタイムでバス位置情報・停留所別バス接近情報をご覧いただけるバスナビサイトです。" />

<script type="text/javascript" src="buslocation/pc/common/js/jquery.js" charset="utf-8"></script>
<script type="text/javascript" src="buslocation/pc/common/js/jquery.popupwindow.js" charset="utf-8"></script>

  <title>東急バスナビ｜乗車・降車停留所選択(停留所別バス接近情報)</title>

<script type="text/javascript" src="buslocation/pc/common/js/default.js"></script>

<link rel="stylesheet" href="buslocation/pc/css/set.css" type="text/css" media="all" />

<script language="JavaScript" type="text/javascript">
<!--
  /**
   * Back Forward Cacheがされた場合にリロード処理
   * @param eventID イベントID
   *
   *　（ブラウザの戻るボタン使用時に、Back Forward Cache(JavaScriptも含めて前回の最後の状態を復元する)によって、
   * ボタンが固まってしまう問題の対策（Firefox MobileSafari・Androidの標準ブラウザで発生））
   */
  window.onpageshow = function(event){
  if(event.persisted){
    //ページがキャッシュから表示された場合
    window.location.reload();
  }
}

/**
 * 遷移処理
 * @param eventID イベントID
 * @return false
 */
function linkProc(eventID) {
  // サブミット処理
  document.SubmitForm.DSN.value = "下馬一丁目";
  document.SubmitForm.ASN.value = "中目黒";
  return linkSubmit("lsc", eventID);
}

/**
 * 乗降入替え処理
 */
function ChangeStop(){
  // 現在の選択されているインデックスを一時保存
  var lstDep = document.SubmitForm.DSMK;
  var lstArr = document.SubmitForm.ASMK;
  var selectedDep = lstDep.selectedIndex;
  var selectedArr = lstArr.selectedIndex;

  // 乗車と降車の停留所一覧を入替え
  exchangeSelectBox(lstDep,lstArr);

  //選択項目を反映
  lstDep.selectedIndex =selectedArr;
  lstArr.selectedIndex =selectedDep;
}

/**
 * 乗車と降車の停留所一覧を入替え
 * @param lst1 Selectボックス1
 * @param lst2 Selectボックス2
 */
function exchangeSelectBox(lst1,lst2){
  // 項目一覧を一時保存
  ary1 = new Array(lst1.length);
  ary2 = new Array(lst2.length);

  for(var i=0;i<lst1.options.length ; i++)
  {
    ary1[i] = new Array(lst1.options[i].value,lst1.options[i].text);
  }
  for(var i=0;i<lst2.options.length ; i++)
  {
    ary2[i] = new Array(lst2.options[i].value,lst2.options[i].text);
  }
  // 一旦、クリアする
  while(lst1.lastChild)
  {
    lst1.removeChild(lst1.lastChild);
  }
  while(lst2.lastChild)
  {
    lst2.removeChild(lst2.lastChild);
  }

  // 各セレクトボックスに割り当てる
  for(var i=0;i<ary2.length;i++){
    var val = ary2[i][0];
    var label = ary2[i][1];
    lst1.options[i] = new Option(label,val);
  }
  for(var i=0;i<ary1.length;i++){
    var val = ary1[i][0];
    var label = ary1[i][1];
    lst2.options[i] = new Option(label,val);
  }
}

/**
 * 読み込み時処理
 */
function bodyOnLoad(){
  //start 停留所選択スキップのための実装　20130318 

  // リダイレクト
  // サブミットフォームへの値セット
  document.SubmitForm.DSMK.value = "2598";
  document.SubmitForm.ASMK.value = "2351";
  // 遷移処理
  return linkProc("nt");

}

-->
</script>
</head>


<body id="search02" onload="bodyOnLoad()">


<a id="top"></a>

<div id="wrapper">

  <noscript><p>ブラウザのJavaScript設定を有効にしてご覧ください。</p></noscript>
<p class="skip"><a href="#main" title="本文へ移動します">本文へ移動</a></p>

<!-- //==================== header ==================== -->








  <!-- //==================== header ==================== -->
    <div id="header">


<div id="headerInner" class="clearfix">

<h1 class="logo"><a href="javascript:void(0);" title="東急バスナビ" onclick="return linkProc('hm');"><img src="buslocation/pc/common/images/header/header_logo.gif" width="201" height="36" alt="東急バスナビ" /></a></h1>

  <!-- / outsideLink -->
  <ul class="outsideLink clearfix">
<li><a href="http://www.tokyubus.co.jp/top/index.shtml" title="東急バス" target="_blank"><img src="buslocation/pc/common/images/header/header_tokyubus.gif" alt="東急バス" width="118" height="26" /></a></li>
  </ul>
  <!-- outsideLink / -->

  </div><!-- headerInner / -->


  <!-- / addImg -->
  <p class="addImg"><img src="buslocation/pc/images/add/img_ptt01.gif" width="800" height="52" alt="" /></p>
<!-- addImg / -->


<div id="headerMenu">
<div id="headerMenuInner" class="clearfix">

  <!-- / globalNavi -->
  <ul class="globalNavi">
<li class="navi01"><a href="javascript:void(0);" title="東急バスナビホーム" onclick="return linkProc('hm');">ホーム</a></li>
<li class="navi02"><a href="javascript:void(0);" title="路線別バス位置情報">路線別バス位置情報</a>
<ul>
  <li class="navi02-01"><a href="javascript:void(0);" title="路線一覧から検索" onclick="return linkProc('rtl');">路線一覧から検索</a></li>
<li class="navi02-02"><a href="javascript:void(0);" title="バス停名称から検索" onclick="return linkProc('spr');">バス停名称から検索</a></li>

<li class="navi02-03"><a href="javascript:void(0);" title="地図から検索" onclick="return linkProc('rmp');">地図から検索</a></li>

</ul>
</li>
<li class="navi03"><a href="javascript:void(0);" title="停留所別バス接近情報">停留所別バス接近情報</a>
<ul>
  <li class="navi03-01"><a href="javascript:void(0);" title="バス停名称から検索" onclick="return linkProc('spn');">バス停名称から検索</a></li>

  </ul>
  </li>
  </ul><!-- globalNavi / -->

  <!-- / assistNavi -->
  <ul class="assistNavi">
<li><a href="https://ssl.tokyubus.co.jp/bus_form/bus_form.html" title="お問い合わせ" target="_blank">お問い合わせ</a></li>
<li><a href="navi?VID=top&EID=nc" title="免責事項・対象外路線" target="_blank">免責事項・対象外路線</a></li>
<li><a href="http://www.tokyubus.co.jp/top/jikoku/index.html" title="時刻表検索" target="_blank">時刻表検索</a></li>
</ul><!-- assistNavi / -->

</div></div><!-- headerMenu / -->

</div>
<!-- ==================== header ====================// -->
<!-- ==================== header ====================// -->

<!-- //==================== container ==================== -->
  <div id="container" class="clearfix">

  <!-- / topicpath -->









  <!-- / topicpath -->

  <div id="topicpath">

  </div>

  <!-- topicpath / -->

  <!-- topicpath / -->

  <!-- / contentsTitle -->
  <div id="contentsTitle">
  <h2>乗車・降車停留所選択(停留所別バス接近情報)</h2>
</div>
<!-- contentsTitle / -->

<!-- / contentsLead -->
<div id="contentsLead">
  <p>一覧から乗車・降車する停留所を選択してください。</p>
</div>
<!-- contentsLead / -->

<!-- //==================== main ==================== -->
  <div id="main">

<form id="DepArrSelForm" name="SubmitForm" action="navi" method="get" onsubmit="return false;">
<input type="hidden" name="VID" value="" />
<input type="hidden" name="EID" value="" />
<input type="hidden" name="FID" value="" />
<input type="hidden" name="SID" value="" />
<input type="hidden" name="PRM" value="" />
<input type="hidden" name="SCT" value="2" />
<input type="hidden" name="DSN" value="" />
<input type="hidden" name="ASN" value="" />
<input type="hidden" name="FDSN" value="0" />
<input type="hidden" name="FASN" value="0" />



<div style="text-align:center">
  <div>&nbsp;</div>

<div style="display: inline-block;">
<div id="contentsLead2">乗車停留所</div>
  <div>&nbsp;</div>
<select name="DSMK" size="10" style="width: 240px;">


<option value="2598" selected />下馬一丁目

</select>
</div>
<div style="display: inline-block;">
<a href="javaScript:ChangeStop();"><img src="buslocation/pc/common/images/btn/btn_replace.gif" alt="入れ替え" width="76" height="50" class="roll" /></a>
</div>
<div style="display: inline-block;">
<div id="contentsLead2">降車停留所</div>
  <div>&nbsp;</div>
<select name="ASMK" size="10" style="width: 240px;">
  <!-- 発停留所コードをリストにセットする（先頭がデフォルト選択） -->

<option value="2351" selected />中目黒駅

</select>
</div>
<div>&nbsp;</div>

<div>&nbsp;</div>
<div>
  <a href="javascript:void(0);" onclick="return linkProc('nt');"><img src="buslocation/pc/common/images/btn/btn_search_l.gif" alt="検索" width="200" height="43" class="roll" /></a>
<a href="javascript:void(0);" onclick="return linkProc('bk');"><img src="buslocation/pc/common/images/btn/btn_back_m.gif" alt="戻る" width="100" height="43" class="roll" /></a>
  </div>
  <div>&nbsp;</div>
</div>

</form>

<!-- 注意 -->
<ul class="noteAtt">
  <li>乗車・降車する停留所名を選択し、検索ボタンを押して下さい。

<br>【乗降入替】をクリックすると、乗車停留所と降車停留所を入れ替えることができます。

<br></li>
</ul>

</div>
<!-- ==================== main ====================// -->

<!-- / pagetop -->
<p class="pagetop"><a href="#top">↑ページ先頭へ</a></p>
<!-- pagetop / -->

</div>
<!-- ==================== container ====================// -->

<!-- //==================== footer ==================== -->




  <div id="footer">



<div align=center><a href="http://tokyu.bus-location.jp/blsys/navis?&VID=ssp&EID=nt&SCT=2&DSN=%E4%B8%8B%E9%A6%AC%E4%B8%80%E4%B8%81%E7%9B%AE&ASN=%E4%B8%AD%E7%9B%AE%E9%BB%92" rel="external">スマホ版で見る</a></div>


<p class="footerCopy">Copyright&copy;2013 TOKYU BUS CORPORATION. All Rights Reserved.</p>

</div>

<!-- ==================== footer ====================// -->

</div>

</body>
</html>
`;