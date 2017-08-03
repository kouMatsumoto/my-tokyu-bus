export const busLocationHTMLMock = `





























<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>


<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="keywords" content="東急バス,バスロケ,路線バス,時刻表" />
<meta name="description" content="東急バスがご提供する、リアルタイムでバス位置情報・停留所別バス接近情報をご覧いただけるバスナビサイトです。" />

<script type="text/javascript" src="buslocation/pc/common/js/jquery.js" charset="utf-8"></script>
<script type="text/javascript" src="buslocation/pc/common/js/jquery.popupwindow.js" charset="utf-8"></script>
 
<title>東急バスナビ｜バス接近情報｜下馬一丁目→渋谷駅</title>


<script type="text/javascript" src="buslocation/pc/common/js/default.js"></script>

<link rel="stylesheet" href="buslocation/pc/css/set.css" type="text/css" media="all" />

<script language="JavaScript">
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
	
	// 地図で位置確認画面
	var confirmMapWin;
	// 凡例画面
	var announceWin;

	/**
	 * 遷移処理
	 * @param eventID イベントID
	 * @return false
	 */
	function linkProc(eventID) {
		// サブミット処理
		return linkSubmit('rsc', eventID);
	}

	/**
	 * 遷移処理（自動更新時間設定）
	 * @param eventID イベントID
	 * @return false
	 */
	function autoReloadLinkProc(eventID) {
		// 自動更新残回数をリセット
		document.SubmitForm.ARC.value = 20;
		// サブミット処理
		return linkSubmit('rsc', eventID);
	}

	/**
	 * 遷移処理(リロード)
	 * @param eventID イベントID
	 * @param autoReloadTime 自動更新時間
	 * @return false
	 */
	function reloadLinkProc(eventID, autoReloadTime) {
		// サブミットフォームへの値セット
		document.SubmitForm.ART.value = autoReloadTime;
		// 自動更新残回数はそのまま
		document.SubmitForm.ARC.value = 0;
		// サブミット処理
		return linkSubmit('rsc', eventID);
	}

	/**
	 * 遷移処理(路線選択)
	 * @param eventID イベントID
	 * @param routeAreaMasterKey 路線方面マスタキー
	 * @return false
	 */
	function routeAreaLinkProc(eventID, routeAreaMasterKey) {
		// サブミットフォームへの値セット
		document.SubmitForm.RAMK.value = routeAreaMasterKey;
		// 自動更新残回数をリセット
		document.SubmitForm.ARC.value = 20;
		// サブミット処理
		return linkSubmit('rsc', eventID);
	}

	/**
	 * 地図で位置確認画面の表示処理
	 * @param stopMasterKey 停留所マスタキー
	 * @param resultStopOrder 停留所順序
	 * @param selectStopDiv 選択停留所区分(0：乗車停留所より前の停留所、1:乗車停留所、2:降車停留所)
	　*（今のところ、降車停留所が区別できればいいが、拡張しやすいように３つの区分を設けた）
	 * @return false
	 */
	function showConfirmMapWin( stopMasterKey, resultStopOrder, selectStopDiv)
	{
		// 各プロパティセット
		var wwidth = 500;
		var wheight = 530;
		var wx = (screen.width  - wwidth) - 10;
		var wy = 0;

		// 地図で位置確認画面を表示
		confirmMapWin = window.open("navi?VID=rsc&EID=cfm&DSMK=2598&ASMK=2336&SMK=" + stopMasterKey +
					"&RSO=" + resultStopOrder + "&SSD=" + selectStopDiv + "",
	 				"confirmMap",
	 				"scrollbars=yes,location=yes,status=yes,menubar=yes,width=" + wwidth + ",height=" + wheight + ",top=" + wy + "left=" + wx);

		// 地図で位置確認画面の右上端に表示
		confirmMapWin.moveTo(wx,wy);
		confirmMapWin.focus();
		return false;
	}

	/**
	 * 凡例画面の表示処理
	 * @return false
	 */
	function showAnnounceWin()
	{
		// 各プロパティセット
		var wwidth = 560;
		var wheight = 530;
		var wx = (screen.width  - wwidth) - 10;
		var wy = 0;

		// 凡例画面を表示
		announceWin = window.open("navi?VID=rsc&EID=an&RAMK=0&DSMK=2598&DPMK=0&ASMK=2336",
	 				"announce",
	 				"scrollbars=yes,location=yes,status=yes,menubar=yes,width=" + wwidth + ",height=" + wheight + ",top=" + wy + "left=" + wx);

		// 凡例画面の右上端に表示
		announceWin.moveTo(wx,wy);
		announceWin.focus();
		return false;
	}

	/**
	 * サブウィンドウのクローズ処理
	 */
	function closeSubWin()
	{
		if( (typeof(confirmMapWin) != "undefined") ){
			// 地図で位置確認画面クローズ
			confirmMapWin.close();
		}
		if( (typeof(announceWin) != "undefined") ){
			// 凡例画面クローズ
			announceWin.close();
		}
	}

	/**
	 * ページロード時の処理
	 */
	window.onload=function() {
		// 自動更新時間ドロップダウンリストの設定
		autoReloadTimeSelect();
	}

	/**
	 * 自動更新時間ドロップダウンリストの設定
	 */
	function autoReloadTimeSelect() {
		var obj = document.SubmitForm.ART;
		if (obj != null) {
			for (var i = 0, len = obj.length; i < len; i++) {
				if (obj[i].value == 0) {
					// 選択された時間を選択状態にする
					obj[i].selected = true;
					return;
				}
			}
		}
	}
//-->
</script>
</head>
<body id="search02" onunload="closeSubWin()">

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
<h2>バス接近情報</h2>
</div>
<!-- contentsTitle / -->


<!-- / contentsLead -->
<div id="contentsLead">
<p>乗車バス停での待ち時間をお知らせします。

</p>
</div>
<!-- contentsLead / -->


<!-- //==================== main ==================== -->
<div id="main">

<form id="SubmitForm" name="SubmitForm" action="navi" method="get" onsubmit="return false;">
	<input type="hidden" name="VID" value="" />
	<input type="hidden" name="EID" value="" />
	<input type="hidden" name="FID" value="" />
	<input type="hidden" name="SID" value="" />
	<input type="hidden" name="PRM" value="" />
	<input type="hidden" name="SCT" value="2" />
	<input type="hidden" name="DSMK" value="2598" />
	<input type="hidden" name="DSN" value="下馬一丁目" />
	<input type="hidden" name="ASMK" value="2336" />
	<input type="hidden" name="ASN" value="渋谷駅" />
	<input type="hidden" name="FDSN" value="0" />
	<input type="hidden" name="FASN" value="0" />
	<input type="hidden" name="CTYP" value="0" />
	<input type="hidden" name="RAMK" value="" />
	<input type="hidden" name="PGL" value="3" />
	<input type="hidden" name="ARC" value="" />


	<!-- 全系統お知らせ -->
	<ul class="searchInfo">
		
	</ul>





	<!-- 乗車・降車停留所表示 -->
	<div class="searchBox01 clearfix">
		<h3 class="ds-none">乗車・降車停留所</h3>
		<dl class="leftBox clearfix">
			<dt>【乗車停留所】
			
			<a href="javascript:void(0);" onclick="return showConfirmMapWin(2598, 0 , 1);">地図表示</a>
			
			</dt>
			<dd class="labelJosha"><div class="textSingleL" style="width: 272px;">下馬一丁目</div></dd>
		</dl>
		<p class="centerImg"><img src="buslocation/pc/images/search/ill_arrow_green.gif" alt="→" width="76" height="50" /></p>
		<dl class="rightBox clearfix">
			<dt>【降車停留所】
			
			<a href="javascript:void(0);" onclick="return showConfirmMapWin(2336, 0 , 2);">地図表示</a>
			
			</dt>
			<dd class="labelKosha"><div class="textSingleL" style="width: 272px;">渋谷駅</div></dd>
		</dl>
	</div><!-- searchBox01 / -->

	
	<p class="mt-25">※停留所マークをクリックすると、のりば周辺の地図を表示します。</p>
	
	<div class="boxGreen autoUpdate clearfix">
		<!-- 自動更新指定 -->
		<div class="leftBox">
			<span class="mr-10">自動更新</span>
			<select name="ART">
				<option value="0">なし</option>
				<option value="30">30秒</option>
				<option value="60"> 1分</option>
				<option value="300"> 5分</option>
			</select><span class="ml-7 mr-7">に</span>
			<input type="button" value="設定" onclick="return autoReloadLinkProc('rd');" />
		</div>
		<!-- 検索時刻・情報更新 -->
		<div class="rightBox">
			22:57
			<span class="ml-10 mr-10">時点の情報</span>
			<input type="button" value="最新の情報に更新" onclick="return reloadLinkProc('rd', 0);" />
		</div>
	</div><!-- boxGreen autoUpdate / -->

	
	
	<table class="sekkinListTbl" summary="接近情報詳細">
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
			
		
		
		
			<tr class="trOdd">
				
				
					
					
					<td class="ta-c"><a href="javascript:void(0);" onclick="return showConfirmMapWin(2598, 0 , 0);"><img src="buslocation/pc/images/search/i_busstop_green.gif" width="10" height="33" alt="停留所" class="roll" /></a></td>
				
				
					
					
					
					
						<td><a href="http://www.tokyubus.co.jp/jikoku/dia/cgi/search_route.cgi?stcode=1710409" target="_blank"><img src="buslocation/pc/common/images/btn/btn_timetbl_gr.gif" width="53" height="22" alt="時刻表" class="roll" /></a></td>
					
				
				<td colspan="3" class="width157">下馬一丁目</td>
			</tr>
			
			
		
		
			
		
		
		
		
		
		
		
		
		
		

		
		
		
		
		
			<tr class="trEven">

				<td class="width30">&nbsp;</td>

				
				<td class="width80">&nbsp;</td>
				
				<td class="width157 arrowUp">&nbsp;</td>
				<td class="width55 va-b"><img src="buslocation/images/PC_00.png" style="max-width:40px; max-height:30px;" alt="バス" /></td>
				<td class="businfo">
					渋３２&nbsp;渋谷駅行【<em>00分待ち</em>】
					
					
				</td>
			</tr>
			
			
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
			
		
		
		
			<tr class="trOdd">
				
				
					<td class="ta-c"><img src="buslocation/pc/images/search/i_busstop_green.gif" width="10" height="33" alt="停留所" class="roll" /></td>
				
				
					<td>&nbsp;</td>
				
				<td colspan="3" class="width157">１つ前の停留所</td>
			</tr>
			
			
		
		
			
		
		
		
		
		
		
		
		
		
			<tr class="trEven">

				<td class="width30">&nbsp;</td>

				
				<td class="width80">&nbsp;</td>
				
				<td class="width157 arrowUp">&nbsp;</td>
				<td class="width55 va-b">&nbsp;</td>
				<td class="businfo">&nbsp;</td>
			</tr>
			
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
			
		
		
		
			<tr class="trOdd">
				
				
					<td class="ta-c"><img src="buslocation/pc/images/search/i_busstop_green.gif" width="10" height="33" alt="停留所" class="roll" /></td>
				
				
					<td>&nbsp;</td>
				
				<td colspan="3" class="width157">２つ前の停留所</td>
			</tr>
			
			
		
		
			
		
		
		
		
		
		
		
		
		
			<tr class="trEven">

				<td class="width30">&nbsp;</td>

				
				<td class="width80">&nbsp;</td>
				
				<td class="width157 arrowUp">&nbsp;</td>
				<td class="width55 va-b">&nbsp;</td>
				<td class="businfo">&nbsp;</td>
			</tr>
			
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
			
		
		
		
			<tr class="trOdd">
				
				
					<td class="ta-c"><img src="buslocation/pc/images/search/i_busstop_green.gif" width="10" height="33" alt="停留所" class="roll" /></td>
				
				
					<td>&nbsp;</td>
				
				<td colspan="3" class="width157">３つ前の停留所</td>
			</tr>
			
			
		
		
			
		
		
		
		
		
		
		
		
		
			<tr class="trEven">

				<td class="width30">&nbsp;</td>

				
				<td class="width80">&nbsp;</td>
				
				<td class="width157 arrowUp">&nbsp;</td>
				<td class="width55 va-b">&nbsp;</td>
				<td class="businfo">&nbsp;</td>
			</tr>
			
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
			
		
		
		
			<tr class="trOdd">
				
				
					<td class="ta-c"><img src="buslocation/pc/images/search/i_busstop_green.gif" width="10" height="33" alt="停留所" class="roll" /></td>
				
				
					<td>&nbsp;</td>
				
				<td colspan="3" class="width157">４つ前の停留所</td>
			</tr>
			
			
		
		
			
		
		
		
		
		
		
		
		
		
		

		
		
		
		
		
			<tr class="trEven">

				<td class="width30">&nbsp;</td>

				
				<td class="width80">&nbsp;</td>
				
				<td class="width157 arrowUp">&nbsp;</td>
				<td class="width55 va-b"><img src="buslocation/images/PC_00.png" style="max-width:40px; max-height:30px;" alt="バス" /></td>
				<td class="businfo">
					渋３２&nbsp;渋谷駅行【<em>06分待ち</em>】
					
					
				</td>
			</tr>
			
			
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
			
		
		
		
			<tr class="trOdd">
				
				
					<td class="ta-c"><img src="buslocation/pc/images/search/i_busstop_green.gif" width="10" height="33" alt="停留所" class="roll" /></td>
				
				
					<td>&nbsp;</td>
				
				<td colspan="3" class="width157">５つ前の停留所</td>
			</tr>
			
			
		
		
			
		
		
		
		
		
		
		
		
		
			<tr class="trEven">

				<td class="width30">&nbsp;</td>

				
				<td class="width80">&nbsp;</td>
				
				<td class="width157 arrowUp">&nbsp;</td>
				<td class="width55 va-b">&nbsp;</td>
				<td class="businfo">&nbsp;</td>
			</tr>
			
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
			
		
		
		
			<tr class="trOdd">
				
				
					<td class="ta-c"><img src="buslocation/pc/images/search/i_busstop_green.gif" width="10" height="33" alt="停留所" class="roll" /></td>
				
				
					<td>&nbsp;</td>
				
				<td colspan="3" class="width157">６つ前の停留所</td>
			</tr>
			
			
		
		
			
		
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
		
		
		
		
		
		
		
		
		

		
		
		
		

		
		
		
		
		

		
		
 		
		
	
	
	
	
	
	
		
	
		<tr class="trEven">
			<td class="width30">&nbsp;</td>
			
			<td class="width80">&nbsp;</td>
			
			<td class="width157 arrowUp">&nbsp;</td>
			<td class="width55 va-b">&nbsp;</td>
			<td class="businfo">&nbsp;</td>
		</tr>
	
	</table>
	

	

	<!-- 系統一覧 -->
	<table width="750" border="1" summary="系統一覧" class="baseTable mt-15">
		<caption>
		【系統一覧】
		</caption>
		<tr>
			<th width="44%" scope="col">系統</th>
			<th width="44%" scope="col">のりば</th>
			<th width="12%" scope="col">路線別<br />運行情報</th>
		</tr>
		
					<tr>
						<td>渋31</td>
						<td>下馬一丁目 </td>
						<td class="ta-c"><a href="javascript:void(0);" onclick="return routeAreaLinkProc('nt','6');">表示</a></td>
					</tr>
					
					<tr>
						<td>渋32</td>
						<td>下馬一丁目 </td>
						<td class="ta-c"><a href="javascript:void(0);" onclick="return routeAreaLinkProc('nt','7');">表示</a></td>
					</tr>
					
					<tr>
						<td>渋33</td>
						<td>下馬一丁目 </td>
						<td class="ta-c"><a href="javascript:void(0);" onclick="return routeAreaLinkProc('nt','8');">表示</a></td>
					</tr>
					
					<tr>
						<td>渋34</td>
						<td>下馬一丁目 </td>
						<td class="ta-c"><a href="javascript:void(0);" onclick="return routeAreaLinkProc('nt','9');">表示</a></td>
					</tr>
					
	</table>

	<!-- 凡例 -->
	<h3 class="titleHanrei mt-25">
		<div class="leftBox">
			【凡例】<a href="javascript:void(0);" onclick="return showAnnounceWin();">その他の凡例はこちら</a>
		</div>
		<div class="rightBox">
			22:57時点の情報
			<input type="button" value="最新の情報に更新" onclick="return reloadLinkProc('rd', 0);" />
		</div>
	</h3>
	
	<table summary="凡例一覧" class="hanreiTbl">
		<tr>
			<th scope="row"><img src="buslocation/pc/images/search/i_hanrei_busstop1.gif" alt="停留所アイコン" width="54" height="37" /></th>
			<td>停留所
			
			<br/>（クリックで乗り場地図表示）
			
			</td>
			<th scope="row"><img src="buslocation/pc/images/search/i_hanrei_updown.gif" alt="進行方向アイコン" width="54" height="37" /></th>
			<td>進行方向</td>
		</tr>
		<tr>
			<th scope="row"><img src="buslocation/pc/images/search/i_hanrei_bus1.gif" alt="バスアイコン" width="54" height="37" /></th>
			<td>バス</td>
			
			<th scope="row"><img src="buslocation/pc/images/search/i_hanrei_btn.gif" alt="時刻表ボタンアイコン" width="54" height="37" /></th>
			<td>時刻表ボタン<br />
			（クリックで時刻表を表示）</td>
			
		</tr>
		
		
			
			
		
	</table>

	<!-- 注意 -->
	<ul class="noteAtt">
	<li>バス位置・所要時間表示は目安ですのでお早めに乗り場へお越しください。

<br>自動更新設定は、３０秒間隔で１０分、１分間隔で２０分、５分間隔では約１．５時間で終了します。

<br>時刻表は、イベント等で臨時ダイヤとなる場合がありますので、東急バスホームページの「お知らせ」も併せてご確認ください。<a href=http://www.tokyubus.co.jp>http://www.tokyubus.co.jp</a></li>
	</ul>




</form>
</div>
<!-- ==================== main ====================// -->

<!-- / pagetop -->
<p class="pagetop"><a href="#top">↑ページ先頭へ</a></p>
<!-- pagetop / -->

</div>
<!-- ==================== container ====================// -->

<!-- //==================== footer ==================== -->




<div id="footer">


	
<div align=center><a href="http://tokyu.bus-location.jp/blsys/navis?&VID=lsc&EID=nt&SCT=2&DSMK=2598&ASMK=2336" rel="external">スマホ版で見る</a></div>
	

<p class="footerCopy">Copyright&copy;2013 TOKYU BUS CORPORATION. All Rights Reserved.</p>

</div>

<!-- ==================== footer ====================// -->

</div>

</body>
</html>
`;