function getData01() {
var url = "http://localhost/stock/csv2json.php";
var symbol = $("#symbol1").val();

$.getJSON(url, 's=' + symbol)
    .done(function (data) {
		 $(".tb tr:nth-child(1) th").text(data.ID + " " +data.Desp); //代號+名稱
		 $(".tb tr:nth-child(2) td").text(data.High + " / " + data.Low); //最高/最低價
		 $(".tb tr:nth-child(3) td").text(data.Open + " / " + data.PrevClose); //開市/前收市價
		 $(".tb tr:nth-child(4) td").text(data.Last); //現價
		 $(".tb tr:nth-child(5) td").text(data.PctChange); //升跌 (%)
		 $(".tb tr:nth-child(6) td").text(data.Volume); //成交量
		 $(".tb tr:nth-child(7) td").text(data.Turnover); //成交金額
		 $(".tb tr:nth-child(8) td").text(data.LotSize); //每手股數
		 $(".tb tr:nth-child(9) td").text(data.AskSpread + " / " + data.BidSpread); //差價
		 $(".tb tr:nth-child(10) td").text(data.YearHigh + " / " + data.YearLow); //52周最高/低
		 $(".tb tr:nth-child(11) td").text(data.PERatio); //市盈率
		 $(".tb tr:nth-child(12) td").text(data.Yield + "%"); //週息率
         if(data.Change >= 0){
            document.getElementById("backgroundColor").style.backgroundColor = "#D6EFAD";
			document.getElementById("backgroundColor").style.backgroundColor = "#D6EFAD";
			document.getElementById("color").style.color = "green";
        }
		else if(data.Change < 0){
            document.getElementById("backgroundColor").style.backgroundColor = "#F5BCBC";
			document.getElementById("backgroundColor").style.backgroundColor = "#F5BCBC";
			document.getElementById("color").style.color = "red";
		}
		
         $("#01\\.7").text(data.Volume); //成交量
//       $("#01\\.2").text(data.QuoteType); //?
//		 $("#01\\.3").text(data.LotSize); //每手股數.ul
//		 $("#01\\.3").text(data.PrevClose); //前收巿價
		 $("#01\\.2").text(data.Last); //現價
		 $("#01\\.10").text(data.Low); //最低價
		 $("#0").text("更新時間: " + data.LastUpdate); //最後更新.ul
//		 $("#01\\.3").text(data.ExpDate); //?
//		 $("#01\\.3").text(data.YearLow); //52周最高
//		 $("#01\\.3").text(data.YearHigh); //52周最低
//		 $("#01\\.3").text(data.ImpVol); //引伸波幅?
//		 $("#01\\.3").text(data.Gearing); //槓桿比率?
		 $("#01\\.4").text(data.PctChange); //升跌 (%)
//		 $("#01\\.3").text(data.EntitlementRatio); //換股比率?
//		 $("#01\\.3").text(data.TimeToMaturity); //到期時間?
		 $("#01\\.8").text(data.Turnover); //成交金額
		 $("#01\\.5").text(((+ data.Last) * 1000 + (+ data.BidSpread) * 1000) / 1000); //買入價
//		 $("#01\\.3").text(data.Suspension); //停股(Y/N)
		 $("#01\\.1").text(data.ID); //代號
		 $("#01\\.9").text(data.Open); //開巿價
//		 $("#01\\.3").text(data.Premium); //?
//		 $("#01\\.3").text(data.BullOrBear); //?
//		 $("#01\\.3").text(data.Moneyness); //?
//		 $("#01\\.3").text(data.CallLevel); //?
//		 $("#01\\.3").text(data.EffGearing); //?
//		 $("#01\\.3").text(data.A-Share); //?
//		 $("#01\\.3").text(data.Desp); //名稱.ul
//		 $("#01\\.3").text(data.LastTradingDate); //?
//		 $("#01\\.3").text(data.CallOrPut); //?
//		 $("#01\\.3").text(data.WarrantType); //?
		 $("#01\\.11").text(data.High); //最高價
//		 $("#01\\.3").text(data.LinkID); //?
//		 $("#01\\.3").text(data.Yield); //週息率
		 $("#01\\.3").text(data.Change); // 升跌 ($)
//		 $("#01\\.3").text(data.MarketCap); //巿值(千億)
		 $("#01\\.6").text(+ data.Last - + data.AskSpread); //賣出差價
//		 $("#01\\.3").text(data.ADR-Share); //?
//		 $("#01\\.3").text(data.lastmodify); //Timestamp?
//		 $("#01\\.3").text(data.PERatio); //巿盈率
//		 $("#01\\.3").text(data.OutstandingQty); //持貨量?
//		 $("#01\\.3").text(data.Strike); //?
//		 $("#01\\.3").text(data.Delta); //?
         if(data.Change >= 0){
            document.getElementById("01.3").style.color = "green";
			document.getElementById("01.4").style.color = "green";
        }
		else if(data.Change < 0){
            document.getElementById("01.3").style.color = "red";
			document.getElementById("01.4").style.color = "red";
		}
});
}
function getData02() {
var url = "http://localhost/stock/csv2json.php";
var symbol = $("#symbol2").val();

$.getJSON(url, 's=' + symbol)
    .done(function (data) {
         $("#02\\.7").text(data.Volume); //成交量
//       $("#02\\.2").text(data.QuoteType); //?
//		 $("#02\\.3").text(data.LotSize); //每手股數.ul
//		 $("#02\\.3").text(data.PrevClose); //前收巿價
		 $("#02\\.2").text(data.Last); //現價
		 $("#02\\.10").text(data.Low); //最低價
//		 $("#02\\.3").text(data.ExpDate); //?
//		 $("#02\\.3").text(data.YearLow); //52周最高
//		 $("#02\\.3").text(data.YearHigh); //52周最低
//		 $("#02\\.3").text(data.ImpVol); //引伸波幅?
//		 $("#02\\.3").text(data.Gearing); //槓桿比率?
		 $("#02\\.4").text(data.PctChange); //升跌 (%)
//		 $("#02\\.3").text(data.EntitlementRatio); //換股比率?
//		 $("#02\\.3").text(data.TimeToMaturity); //到期時間?
		 $("#02\\.8").text(data.Turnover); //成交金額
		 $("#02\\.5").text(((+ data.Last) * 1000 + (+ data.BidSpread) * 1000) / 1000); //買入價
//		 $("#02\\.3").text(data.Suspension); //停股(Y/N)
		 $("#02\\.1").text(data.ID); //代號
		 $("#02\\.9").text(data.Open); //開巿價
//		 $("#02\\.3").text(data.Premium); //?
//		 $("#02\\.3").text(data.BullOrBear); //?
//		 $("#02\\.3").text(data.Moneyness); //?
//		 $("#02\\.3").text(data.CallLevel); //?
//		 $("#02\\.3").text(data.EffGearing); //?
//		 $("#02\\.3").text(data.A-Share); //?
//		 $("#02\\.3").text(data.Desp); //名稱.ul
//		 $("#02\\.3").text(data.LastTradingDate); //?
//		 $("#02\\.3").text(data.CallOrPut); //?
//		 $("#02\\.3").text(data.WarrantType); //?
		 $("#02\\.11").text(data.High); //最高價
//		 $("#02\\.3").text(data.LinkID); //?
//		 $("#02\\.3").text(data.Yield); //週息率
		 $("#02\\.3").text(data.Change); // 升跌 ($)
//		 $("#02\\.3").text(data.MarketCap); //巿值(千億)
		 $("#02\\.6").text(((+ data.Last) * 1000 - (+ data.AskSpread) * 1000) / 1000); //賣出價
//		 $("#02\\.3").text(data.ADR-Share); //?
//		 $("#02\\.3").text(data.lastmodify); //Timestamp?
//		 $("#02\\.3").text(data.PERatio); //巿盈率
//		 $("#02\\.3").text(data.OutstandingQty); //持貨量?
//		 $("#02\\.3").text(data.Strike); //?
//		 $("#02\\.3").text(data.Delta); //?
         if(data.Change >= 0){
            document.getElementById("02.3").style.color = "green";
			document.getElementById("02.4").style.color = "green";
        }
		else if(data.Change < 0){
            document.getElementById("02.3").style.color = "red";
			document.getElementById("02.4").style.color = "red";
		}
});
}
function getData03() {
var url = "http://localhost/stock/csv2json.php";
var symbol = $("#symbol3").val();

$.getJSON(url, 's=' + symbol)
    .done(function (data) {
         $("#03\\.7").text(data.Volume); //成交量
//       $("#03\\.2").text(data.QuoteType); //?
//		 $("#03\\.3").text(data.LotSize); //每手股數.ul
//		 $("#03\\.3").text(data.PrevClose); //前收巿價
		 $("#03\\.2").text(data.Last); //現價
		 $("#03\\.10").text(data.Low); //最低價
//		 $("#03\\.3").text(data.ExpDate); //?
//		 $("#03\\.3").text(data.YearLow); //52周最高
//		 $("#03\\.3").text(data.YearHigh); //52周最低
//		 $("#03\\.3").text(data.ImpVol); //引伸波幅?
//		 $("#03\\.3").text(data.Gearing); //槓桿比率?
		 $("#03\\.4").text(data.PctChange); //升跌 (%)
//		 $("#03\\.3").text(data.EntitlementRatio); //換股比率?
//		 $("#03\\.3").text(data.TimeToMaturity); //到期時間?
		 $("#03\\.8").text(data.Turnover); //成交金額
		 $("#03\\.5").text(((+ data.Last) * 1000 + (+ data.BidSpread) * 1000) / 1000); //買入價
//		 $("#03\\.3").text(data.Suspension); //停股(Y/N)
		 $("#03\\.1").text(data.ID); //代號
		 $("#03\\.9").text(data.Open); //開巿價
//		 $("#03\\.3").text(data.Premium); //?
//		 $("#03\\.3").text(data.BullOrBear); //?
//		 $("#03\\.3").text(data.Moneyness); //?
//		 $("#03\\.3").text(data.CallLevel); //?
//		 $("#03\\.3").text(data.EffGearing); //?
//		 $("#03\\.3").text(data.A-Share); //?
//		 $("#03\\.3").text(data.Desp); //名稱.ul
//		 $("#03\\.3").text(data.LastTradingDate); //?
//		 $("#03\\.3").text(data.CallOrPut); //?
//		 $("#03\\.3").text(data.WarrantType); //?
		 $("#03\\.11").text(data.High); //最高價
//		 $("#03\\.3").text(data.LinkID); //?
//		 $("#03\\.3").text(data.Yield); //週息率
		 $("#03\\.3").text(data.Change); // 升跌 ($)
//		 $("#03\\.3").text(data.MarketCap); //巿值(千億)
		 $("#03\\.6").text(((+ data.Last) * 1000 - (+ data.AskSpread) * 1000) / 1000); //賣出價
//		 $("#03\\.3").text(data.ADR-Share); //?
//		 $("#03\\.3").text(data.lastmodify); //Timestamp?
//		 $("#03\\.3").text(data.PERatio); //巿盈率
//		 $("#03\\.3").text(data.OutstandingQty); //持貨量?
//		 $("#03\\.3").text(data.Strike); //?
//		 $("#03\\.3").text(data.Delta); //?
         if(data.Change >= 0){
            document.getElementById("03.3").style.color = "green";
			document.getElementById("03.4").style.color = "green";
        }
		else if(data.Change < 0){
            document.getElementById("03.3").style.color = "red";
			document.getElementById("03.4").style.color = "red";
		}
});
}
function getData04() {
var url = "http://localhost/stock/csv2json.php";
var symbol = $("#symbol4").val();

$.getJSON(url, 's=' + symbol)
    .done(function (data) {
         $("#04\\.7").text(data.Volume); //成交量
//       $("#04\\.2").text(data.QuoteType); //?
//		 $("#04\\.3").text(data.LotSize); //每手股數.ul
//		 $("#04\\.3").text(data.PrevClose); //前收巿價
		 $("#04\\.2").text(data.Last); //現價
		 $("#04\\.10").text(data.Low); //最低價
//		 $("#04\\.3").text(data.ExpDate); //?
//		 $("#04\\.3").text(data.YearLow); //52周最高
//		 $("#04\\.3").text(data.YearHigh); //52周最低
//		 $("#04\\.3").text(data.ImpVol); //引伸波幅?
//		 $("#04\\.3").text(data.Gearing); //槓桿比率?
		 $("#04\\.4").text(data.PctChange); //升跌 (%)
//		 $("#04\\.3").text(data.EntitlementRatio); //換股比率?
//		 $("#04\\.3").text(data.TimeToMaturity); //到期時間?
		 $("#04\\.8").text(data.Turnover); //成交金額
		 $("#04\\.5").text(((+ data.Last) * 1000 + (+ data.BidSpread) * 1000) / 1000); //買入價
//		 $("#04\\.3").text(data.Suspension); //停股(Y/N)
		 $("#04\\.1").text(data.ID); //代號
		 $("#04\\.9").text(data.Open); //開巿價
//		 $("#04\\.3").text(data.Premium); //?
//		 $("#04\\.3").text(data.BullOrBear); //?
//		 $("#04\\.3").text(data.Moneyness); //?
//		 $("#04\\.3").text(data.CallLevel); //?
//		 $("#04\\.3").text(data.EffGearing); //?
//		 $("#04\\.3").text(data.A-Share); //?
//		 $("#04\\.3").text(data.Desp); //名稱.ul
//		 $("#04\\.3").text(data.LastTradingDate); //?
//		 $("#04\\.3").text(data.CallOrPut); //?
//		 $("#04\\.3").text(data.WarrantType); //?
		 $("#04\\.11").text(data.High); //最高價
//		 $("#04\\.3").text(data.LinkID); //?
//		 $("#04\\.3").text(data.Yield); //週息率
		 $("#04\\.3").text(data.Change); // 升跌 ($)
//		 $("#04\\.3").text(data.MarketCap); //巿值(千億)
		 $("#04\\.6").text(((+ data.Last) * 1000 - (+ data.AskSpread) * 1000) / 1000); //賣出價
//		 $("#04\\.3").text(data.ADR-Share); //?
//		 $("#04\\.3").text(data.lastmodify); //Timestamp?
//		 $("#04\\.3").text(data.PERatio); //巿盈率
//		 $("#04\\.3").text(data.OutstandingQty); //持貨量?
//		 $("#04\\.3").text(data.Strike); //?
//		 $("#04\\.3").text(data.Delta); //?
         if(data.Change >= 0){
            document.getElementById("04.3").style.color = "green";
			document.getElementById("04.4").style.color = "green";
        }
		else if(data.Change < 0){
            document.getElementById("04.3").style.color = "red";
			document.getElementById("04.4").style.color = "red";
		}
});
}
function getData05() {
var url = "http://localhost/stock/csv2json.php";
var symbol = $("#symbol5").val();

$.getJSON(url, 's=' + symbol)
    .done(function (data) {
         $("#05\\.7").text(data.Volume); //成交量
//       $("#05\\.2").text(data.QuoteType); //?
//		 $("#05\\.3").text(data.LotSize); //每手股數.ul
//		 $("#05\\.3").text(data.PrevClose); //前收巿價
		 $("#05\\.2").text(data.Last); //現價
		 $("#05\\.10").text(data.Low); //最低價
//		 $("#05\\.3").text(data.ExpDate); //?
//		 $("#05\\.3").text(data.YearLow); //52周最高
//		 $("#05\\.3").text(data.YearHigh); //52周最低
//		 $("#05\\.3").text(data.ImpVol); //引伸波幅?
//		 $("#05\\.3").text(data.Gearing); //槓桿比率?
		 $("#05\\.4").text(data.PctChange); //升跌 (%)
//		 $("#05\\.3").text(data.EntitlementRatio); //換股比率?
//		 $("#05\\.3").text(data.TimeToMaturity); //到期時間?
		 $("#05\\.8").text(data.Turnover); //成交金額
		 $("#05\\.5").text(((+ data.Last) * 1000 + (+ data.BidSpread) * 1000) / 1000); //買入價
//		 $("#05\\.3").text(data.Suspension); //停股(Y/N)
		 $("#05\\.1").text(data.ID); //代號
		 $("#05\\.9").text(data.Open); //開巿價
//		 $("#05\\.3").text(data.Premium); //?
//		 $("#05\\.3").text(data.BullOrBear); //?
//		 $("#05\\.3").text(data.Moneyness); //?
//		 $("#05\\.3").text(data.CallLevel); //?
//		 $("#05\\.3").text(data.EffGearing); //?
//		 $("#05\\.3").text(data.A-Share); //?
//		 $("#05\\.3").text(data.Desp); //名稱.ul
//		 $("#05\\.3").text(data.LastTradingDate); //?
//		 $("#05\\.3").text(data.CallOrPut); //?
//		 $("#05\\.3").text(data.WarrantType); //?
		 $("#05\\.11").text(data.High); //最高價
//		 $("#05\\.3").text(data.LinkID); //?
//		 $("#05\\.3").text(data.Yield); //週息率
		 $("#05\\.3").text(data.Change); // 升跌 ($)
//		 $("#05\\.3").text(data.MarketCap); //巿值(千億)
		 $("#05\\.6").text(((+ data.Last) * 1000 - (+ data.AskSpread) * 1000) / 1000); //賣出價
//		 $("#05\\.3").text(data.ADR-Share); //?
//		 $("#05\\.3").text(data.lastmodify); //Timestamp?
//		 $("#05\\.3").text(data.PERatio); //巿盈率
//		 $("#05\\.3").text(data.OutstandingQty); //持貨量?
//		 $("#05\\.3").text(data.Strike); //?
//		 $("#05\\.3").text(data.Delta); //?
         if(data.Change >= 0){
            document.getElementById("05.3").style.color = "green";
			document.getElementById("05.4").style.color = "green";
        }
		else if(data.Change < 0){
            document.getElementById("05.3").style.color = "red";
			document.getElementById("05.4").style.color = "red";
		}
});
}
function getData06() {
var url = "http://localhost/stock/csv2json.php";
var symbol = $("#symbol6").val();

$.getJSON(url, 's=' + symbol)
    .done(function (data) {
         $("#06\\.7").text(data.Volume); //成交量
//       $("#06\\.2").text(data.QuoteType); //?
//		 $("#06\\.3").text(data.LotSize); //每手股數.ul
//		 $("#06\\.3").text(data.PrevClose); //前收巿價
		 $("#06\\.2").text(data.Last); //現價
		 $("#06\\.10").text(data.Low); //最低價
//		 $("#06\\.3").text(data.ExpDate); //?
//		 $("#06\\.3").text(data.YearLow); //52周最高
//		 $("#06\\.3").text(data.YearHigh); //52周最低
//		 $("#06\\.3").text(data.ImpVol); //引伸波幅?
//		 $("#06\\.3").text(data.Gearing); //槓桿比率?
		 $("#06\\.4").text(data.PctChange); //升跌 (%)
//		 $("#06\\.3").text(data.EntitlementRatio); //換股比率?
//		 $("#06\\.3").text(data.TimeToMaturity); //到期時間?
		 $("#06\\.8").text(data.Turnover); //成交金額
		 $("#06\\.5").text(((+ data.Last) * 1000 + (+ data.BidSpread) * 1000) / 1000); //買入價
//		 $("#06\\.3").text(data.Suspension); //停股(Y/N)
		 $("#06\\.1").text(data.ID); //代號
		 $("#06\\.9").text(data.Open); //開巿價
//		 $("#06\\.3").text(data.Premium); //?
//		 $("#06\\.3").text(data.BullOrBear); //?
//		 $("#06\\.3").text(data.Moneyness); //?
//		 $("#06\\.3").text(data.CallLevel); //?
//		 $("#06\\.3").text(data.EffGearing); //?
//		 $("#06\\.3").text(data.A-Share); //?
//		 $("#06\\.3").text(data.Desp); //名稱.ul
//		 $("#06\\.3").text(data.LastTradingDate); //?
//		 $("#06\\.3").text(data.CallOrPut); //?
//		 $("#06\\.3").text(data.WarrantType); //?
		 $("#06\\.11").text(data.High); //最高價
//		 $("#06\\.3").text(data.LinkID); //?
//		 $("#06\\.3").text(data.Yield); //週息率
		 $("#06\\.3").text(data.Change); // 升跌 ($)
//		 $("#06\\.3").text(data.MarketCap); //巿值(千億)
		 $("#06\\.6").text(((+ data.Last) * 1000 - (+ data.AskSpread) * 1000) / 1000); //賣出價
//		 $("#06\\.3").text(data.ADR-Share); //?
//		 $("#06\\.3").text(data.lastmodify); //Timestamp?
//		 $("#06\\.3").text(data.PERatio); //巿盈率
//		 $("#06\\.3").text(data.OutstandingQty); //持貨量?
//		 $("#06\\.3").text(data.Strike); //?
//		 $("#06\\.3").text(data.Delta); //?
         if(data.Change >= 0){
            document.getElementById("06.3").style.color = "green";
			document.getElementById("06.4").style.color = "green";
        }
		else if(data.Change < 0){
            document.getElementById("06.3").style.color = "red";
			document.getElementById("06.4").style.color = "red";
		}
});
}
function getData07() {
var url = "http://localhost/stock/csv2json.php";
var symbol = $("#symbol7").val();

$.getJSON(url, 's=' + symbol)
    .done(function (data) {
         $("#07\\.7").text(data.Volume); //成交量
//       $("#07\\.2").text(data.QuoteType); //?
//		 $("#07\\.3").text(data.LotSize); //每手股數.ul
//		 $("#07\\.3").text(data.PrevClose); //前收巿價
		 $("#07\\.2").text(data.Last); //現價
		 $("#07\\.10").text(data.Low); //最低價
//		 $("#07\\.3").text(data.ExpDate); //?
//		 $("#07\\.3").text(data.YearLow); //52周最高
//		 $("#07\\.3").text(data.YearHigh); //52周最低
//		 $("#07\\.3").text(data.ImpVol); //引伸波幅?
//		 $("#07\\.3").text(data.Gearing); //槓桿比率?
		 $("#07\\.4").text(data.PctChange); //升跌 (%)
//		 $("#07\\.3").text(data.EntitlementRatio); //換股比率?
//		 $("#07\\.3").text(data.TimeToMaturity); //到期時間?
		 $("#07\\.8").text(data.Turnover); //成交金額
		 $("#07\\.5").text(((+ data.Last) * 1000 + (+ data.BidSpread) * 1000) / 1000); //買入價
//		 $("#07\\.3").text(data.Suspension); //停股(Y/N)
		 $("#07\\.1").text(data.ID); //代號
		 $("#07\\.9").text(data.Open); //開巿價
//		 $("#07\\.3").text(data.Premium); //?
//		 $("#07\\.3").text(data.BullOrBear); //?
//		 $("#07\\.3").text(data.Moneyness); //?
//		 $("#07\\.3").text(data.CallLevel); //?
//		 $("#07\\.3").text(data.EffGearing); //?
//		 $("#07\\.3").text(data.A-Share); //?
//		 $("#07\\.3").text(data.Desp); //名稱.ul
//		 $("#07\\.3").text(data.LastTradingDate); //?
//		 $("#07\\.3").text(data.CallOrPut); //?
//		 $("#07\\.3").text(data.WarrantType); //?
		 $("#07\\.11").text(data.High); //最高價
//		 $("#07\\.3").text(data.LinkID); //?
//		 $("#07\\.3").text(data.Yield); //週息率
		 $("#07\\.3").text(data.Change); // 升跌 ($)
//		 $("#07\\.3").text(data.MarketCap); //巿值(千億)
		 $("#07\\.6").text(((+ data.Last) * 1000 - (+ data.AskSpread) * 1000) / 1000); //賣出價
//		 $("#07\\.3").text(data.ADR-Share); //?
//		 $("#07\\.3").text(data.lastmodify); //Timestamp?
//		 $("#07\\.3").text(data.PERatio); //巿盈率
//		 $("#07\\.3").text(data.OutstandingQty); //持貨量?
//		 $("#07\\.3").text(data.Strike); //?
//		 $("#07\\.3").text(data.Delta); //?
         if(data.Change >= 0){
            document.getElementById("07.3").style.color = "green";
			document.getElementById("07.4").style.color = "green";
        }
		else if(data.Change < 0){
            document.getElementById("07.3").style.color = "red";
			document.getElementById("07.4").style.color = "red";
		}
});
}
function getData08() {
var url = "http://localhost/stock/csv2json.php";
var symbol = $("#symbol8").val();

$.getJSON(url, 's=' + symbol)
    .done(function (data) {
         $("#08\\.7").text(data.Volume); //成交量
//       $("#08\\.2").text(data.QuoteType); //?
//		 $("#08\\.3").text(data.LotSize); //每手股數.ul
//		 $("#08\\.3").text(data.PrevClose); //前收巿價
		 $("#08\\.2").text(data.Last); //現價
		 $("#08\\.10").text(data.Low); //最低價
//		 $("#08\\.3").text(data.ExpDate); //?
//		 $("#08\\.3").text(data.YearLow); //52周最高
//		 $("#08\\.3").text(data.YearHigh); //52周最低
//		 $("#08\\.3").text(data.ImpVol); //引伸波幅?
//		 $("#08\\.3").text(data.Gearing); //槓桿比率?
		 $("#08\\.4").text(data.PctChange); //升跌 (%)
//		 $("#08\\.3").text(data.EntitlementRatio); //換股比率?
//		 $("#08\\.3").text(data.TimeToMaturity); //到期時間?
		 $("#08\\.8").text(data.Turnover); //成交金額
		 $("#08\\.5").text(((+ data.Last) * 1000 + (+ data.BidSpread) * 1000) / 1000); //買入價
//		 $("#08\\.3").text(data.Suspension); //停股(Y/N)
		 $("#08\\.1").text(data.ID); //代號
		 $("#08\\.9").text(data.Open); //開巿價
//		 $("#08\\.3").text(data.Premium); //?
//		 $("#08\\.3").text(data.BullOrBear); //?
//		 $("#08\\.3").text(data.Moneyness); //?
//		 $("#08\\.3").text(data.CallLevel); //?
//		 $("#08\\.3").text(data.EffGearing); //?
//		 $("#08\\.3").text(data.A-Share); //?
//		 $("#08\\.3").text(data.Desp); //名稱.ul
//		 $("#08\\.3").text(data.LastTradingDate); //?
//		 $("#08\\.3").text(data.CallOrPut); //?
//		 $("#08\\.3").text(data.WarrantType); //?
		 $("#08\\.11").text(data.High); //最高價
//		 $("#08\\.3").text(data.LinkID); //?
//		 $("#08\\.3").text(data.Yield); //週息率
		 $("#08\\.3").text(data.Change); // 升跌 ($)
//		 $("#08\\.3").text(data.MarketCap); //巿值(千億)
		 $("#08\\.6").text(((+ data.Last) * 1000 - (+ data.AskSpread) * 1000) / 1000); //賣出價
//		 $("#08\\.3").text(data.ADR-Share); //?
//		 $("#08\\.3").text(data.lastmodify); //Timestamp?
//		 $("#08\\.3").text(data.PERatio); //巿盈率
//		 $("#08\\.3").text(data.OutstandingQty); //持貨量?
//		 $("#08\\.3").text(data.Strike); //?
//		 $("#08\\.3").text(data.Delta); //?
         if(data.Change >= 0){
            document.getElementById("08.3").style.color = "green";
			document.getElementById("08.4").style.color = "green";
        }
		else if(data.Change < 0){
            document.getElementById("08.3").style.color = "red";
			document.getElementById("08.4").style.color = "red";
		}
});
}
function getData09() {
var url = "http://localhost/stock/csv2json.php";
var symbol = $("#symbol9").val();

$.getJSON(url, 's=' + symbol)
    .done(function (data) {
         $("#09\\.7").text(data.Volume); //成交量
//       $("#09\\.2").text(data.QuoteType); //?
//		 $("#09\\.3").text(data.LotSize); //每手股數.ul
//		 $("#09\\.3").text(data.PrevClose); //前收巿價
		 $("#09\\.2").text(data.Last); //現價
		 $("#09\\.10").text(data.Low); //最低價
//		 $("#09\\.3").text(data.ExpDate); //?
//		 $("#09\\.3").text(data.YearLow); //52周最高
//		 $("#09\\.3").text(data.YearHigh); //52周最低
//		 $("#09\\.3").text(data.ImpVol); //引伸波幅?
//		 $("#09\\.3").text(data.Gearing); //槓桿比率?
		 $("#09\\.4").text(data.PctChange); //升跌 (%)
//		 $("#09\\.3").text(data.EntitlementRatio); //換股比率?
//		 $("#09\\.3").text(data.TimeToMaturity); //到期時間?
		 $("#09\\.8").text(data.Turnover); //成交金額
		 $("#09\\.5").text(((+ data.Last) * 1000 + (+ data.BidSpread) * 1000) / 1000); //買入價
//		 $("#09\\.3").text(data.Suspension); //停股(Y/N)
		 $("#09\\.1").text(data.ID); //代號
		 $("#09\\.9").text(data.Open); //開巿價
//		 $("#09\\.3").text(data.Premium); //?
//		 $("#09\\.3").text(data.BullOrBear); //?
//		 $("#09\\.3").text(data.Moneyness); //?
//		 $("#09\\.3").text(data.CallLevel); //?
//		 $("#09\\.3").text(data.EffGearing); //?
//		 $("#09\\.3").text(data.A-Share); //?
//		 $("#09\\.3").text(data.Desp); //名稱.ul
//		 $("#09\\.3").text(data.LastTradingDate); //?
//		 $("#09\\.3").text(data.CallOrPut); //?
//		 $("#09\\.3").text(data.WarrantType); //?
		 $("#09\\.11").text(data.High); //最高價
//		 $("#09\\.3").text(data.LinkID); //?
//		 $("#09\\.3").text(data.Yield); //週息率
		 $("#09\\.3").text(data.Change); // 升跌 ($)
//		 $("#09\\.3").text(data.MarketCap); //巿值(千億)
		 $("#09\\.6").text(((+ data.Last) * 1000 - (+ data.AskSpread) * 1000) / 1000); //賣出價
//		 $("#09\\.3").text(data.ADR-Share); //?
//		 $("#09\\.3").text(data.lastmodify); //Timestamp?
//		 $("#09\\.3").text(data.PERatio); //巿盈率
//		 $("#09\\.3").text(data.OutstandingQty); //持貨量?
//		 $("#09\\.3").text(data.Strike); //?
//		 $("#09\\.3").text(data.Delta); //?
         if(data.Change >= 0){
            document.getElementById("09.3").style.color = "green";
			document.getElementById("09.4").style.color = "green";
        }
		else if(data.Change < 0){
            document.getElementById("09.3").style.color = "red";
			document.getElementById("09.4").style.color = "red";
		}
});
}
function getData010() {
var url = "http://localhost/stock/csv2json.php";
var symbol = $("#symbol10").val();

$.getJSON(url, 's=' + symbol)
    .done(function (data) {
         $("#10\\.7").text(data.Volume); //成交量
//       $("#10\\.2").text(data.QuoteType); //?
//		 $("#10\\.3").text(data.LotSize); //每手股數.ul
//		 $("#10\\.3").text(data.PrevClose); //前收巿價
		 $("#10\\.2").text(data.Last); //現價
		 $("#10\\.10").text(data.Low); //最低價
//		 $("#10\\.3").text(data.ExpDate); //?
//		 $("#10\\.3").text(data.YearLow); //52周最高
//		 $("#10\\.3").text(data.YearHigh); //52周最低
//		 $("#10\\.3").text(data.ImpVol); //引伸波幅?
//		 $("#10\\.3").text(data.Gearing); //槓桿比率?
		 $("#10\\.4").text(data.PctChange); //升跌 (%)
//		 $("#10\\.3").text(data.EntitlementRatio); //換股比率?
//		 $("#10\\.3").text(data.TimeToMaturity); //到期時間?
		 $("#10\\.8").text(data.Turnover); //成交金額
		 $("#10\\.5").text(((+ data.Last) * 1000 + (+ data.BidSpread) * 1000) / 1000); //買入價
//		 $("#10\\.3").text(data.Suspension); //停股(Y/N)
		 $("#10\\.1").text(data.ID); //代號
		 $("#10\\.9").text(data.Open); //開巿價
//		 $("#10\\.3").text(data.Premium); //?
//		 $("#10\\.3").text(data.BullOrBear); //?
//		 $("#10\\.3").text(data.Moneyness); //?
//		 $("#10\\.3").text(data.CallLevel); //?
//		 $("#10\\.3").text(data.EffGearing); //?
//		 $("#10\\.3").text(data.A-Share); //?
//		 $("#10\\.3").text(data.Desp); //名稱.ul
//		 $("#10\\.3").text(data.LastTradingDate); //?
//		 $("#10\\.3").text(data.CallOrPut); //?
//		 $("#10\\.3").text(data.WarrantType); //?
		 $("#10\\.11").text(data.High); //最高價
//		 $("#10\\.3").text(data.LinkID); //?
//		 $("#10\\.3").text(data.Yield); //週息率
		 $("#10\\.3").text(data.Change); // 升跌 ($)
//		 $("#10\\.3").text(data.MarketCap); //巿值(千億)
		 $("#10\\.6").text(((+ data.Last) * 1000 - (+ data.AskSpread) * 1000) / 1000); //賣出價
//		 $("#10\\.3").text(data.ADR-Share); //?
//		 $("#10\\.3").text(data.lastmodify); //Timestamp?
//		 $("#10\\.3").text(data.PERatio); //巿盈率
//		 $("#10\\.3").text(data.OutstandingQty); //持貨量?
//		 $("#10\\.3").text(data.Strike); //?
//		 $("#10\\.3").text(data.Delta); //?
         if(data.Change >= 0){
            document.getElementById("10.3").style.color = "green";
			document.getElementById("10.4").style.color = "green";
        }
		else if(data.Change < 0){
            document.getElementById("10.3").style.color = "red";
			document.getElementById("10.4").style.color = "red";
		}
});
}
function checkGetData_1() {
	if(document.getElementById("symbol1").value  !== "") {
		return getData01();
	}
}
function checkGetData_2() {
	if(document.getElementById("symbol2").value  !== "") {
		return getData02();
	}
}
function checkGetData_3() {
	if(document.getElementById("symbol3").value  !== "") {
		return getData03();
	}
}
function checkGetData_4() {
	if(document.getElementById("symbol4").value  !== "") {
		return getData04();
	}
}
function checkGetData_5() {
	if(document.getElementById("symbol5").value  !== "") {
		return getData05();
	}
}
function checkGetData_6() {
	if(document.getElementById("symbol6").value  !== "") {
		return getData06();
	}
}
function checkGetData_7() {
	if(document.getElementById("symbol7").value  !== "") {
		return getData07();
	}
}
function checkGetData_8() {
	if(document.getElementById("symbol8").value  !== "") {
		return getData08();
	}
}
function checkGetData_9() {
	if(document.getElementById("symbol9").value  !== "") {
		return getData09();
	}
}
function checkGetData_10() {
	if(document.getElementById("symbol10").value  !== "") {
		return getData010();
	}
}
function Reload(){
	location.reload();

}   
function Help() {
	$("#panel").slideToggle("slow");
}




function checkEnter(e){
    if ((e.keyCode && e.keyCode==13) || (e.which && e.which==13)) {
        return SendRequest();
    }
    return true;
}       
function start(){
	setInterval(function(){myFunction()}, 1500);

}   
function myFunction() {
    	checkGetData_1();
    checkGetData_2();
	checkGetData_3();
	checkGetData_4();
	checkGetData_5();
	checkGetData_6();
	checkGetData_7();
	checkGetData_8();
	checkGetData_9();
	checkGetData_10();
}
