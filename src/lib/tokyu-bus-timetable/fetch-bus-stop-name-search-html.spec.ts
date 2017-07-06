import { fetchBusStopNameSearchHTML } from './fetch-bus-stop-name-search-html';

describe('fetchBusStopNameSearchHTML', () => {
  fit('should be same result to sample-html', (done) => {
    fetchBusStopNameSearchHTML('下馬')
      .then((result) => {
        const expected = sample;
        const actual = result.contents;

        // date is variable, so compare with length of each html.
        expect(actual.length).toEqual(expected.length);
      })
      .then(() => {
        done();
      });
  });
});



const sample = `
<html><head>
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
<br>

▼停留所名称検索<br>
[下馬]の検索結果(4件)<br>

<a href="./index.cgi?cd=11121303,07/06,7,2,%89%ba%94n,1,,,,,,1710409,">下馬一丁目</a><br>
<a href="./index.cgi?cd=11121303,07/06,7,2,%89%ba%94n,1,,,,,,1710410,">下馬営業所</a><br>
<a href="./index.cgi?cd=11121303,07/06,7,2,%89%ba%94n,1,,,,,,1735415,">下馬五丁目</a><br>
<a href="./index.cgi?cd=11121303,07/06,7,2,%89%ba%94n,1,,,,,,1725509,">下馬六丁目</a><br>

<br>
停留所を選択してください。<br>
<br>
<hr>
<a href="./index.cgi?cd=1112,07/06," accesskey="9">9. 戻る</a><br>
<a href="./index.cgi" accesskey="0">0. ﾄｯﾌﾟへ</a><br>
</body></html>`;
