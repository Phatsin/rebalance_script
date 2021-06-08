var audio=new Audio('https://res.cloudinary.com/hhlcjffe8/video/upload/v1569937618/morflask/beep_noewij.mp3');
function beep(bl,clr){if($('#alert_val').prop('checked'))audio.play();
if(bl)$(bl).css('background-color',clr);
setTimeout(function(){if(bl)$(bl).css('background-color','');},1000);};
var t1=Date.now();
var t2=Date.now();
var dom1='<div id="s_tools" style="position:fixed;z-index:2457;bottom:1em;left:1em;background-color:#FF7400;color:#000;padding:5px"></div>';
var dom2='<div id="s_head" style="text-align:center;"></div>'
var dom3='<input id="test" type="button" value="Rebalance Alert." style="width:150px;"/><hr style="margin:3px;border-top:0px;"/>';
var dom4='<div id="alert"></div>';
var dom5='<span id="span_alert" style="float:left;width:50px;">Sound</span>';
var dom6='<input type="checkbox" id="alert_val" style="float:left;vertical-align:top;" checked/><span><span style="width:40px;float:left;">';
dom6=dom6+'<span id="arrow" style="float:right;"></span></span></span><span id="c_diff" style="float:right">?</span></br>'
var dom5_='<span id="span_auto" style="float:left;width:50px;">Auto</span>';
var dom6_='<input type="checkbox" id="auto_val" style="float:left;vertical-align:top;"/><span id="m_diff" style="float:right">?</span></br>';
var dom5__='<span id="span_diff" style="float:left;width:50px;">Diff</span>';
var dom6__='<input type="text" id="val_diff" size=8"/>';
var dom7='<div id="over"></div><hr style="margin:3px;border-top:0px;"/>';
var dom8='<span id="span_last" style="float:left;width:60px;">Last: </span>';
var dom9='<span id="side_">?</span><span id="price_" style="float:right;">?</span>';
var dom10='<div id="bid_ask"></div><hr style="margin:3px;border-top:0px;"/>';
var dom12='<span id="watch_bid" style="width:80px;text-align:right;">?</span>';
var dom13='<span id="watch_ask" style="float:right;width:80px;text-align:right;">?</span>';
var dom14='<div id="d_watch" style="position:fixed;z-index:2457;bottom:203px;left:1em;"></div>';
$(dom1).appendTo('body');
$(dom2).appendTo('#s_tools');
$(dom3).appendTo('#s_head');
$(dom5).appendTo('#s_tools');
$(dom6).appendTo('#s_tools');
$(dom5_).appendTo('#s_tools');
$(dom6_).appendTo('#s_tools');
$(dom5__).appendTo('#s_tools');
$(dom6__).appendTo('#s_tools');
$(dom7).appendTo('#s_tools');
$(dom4).appendTo('#s_tools');
$(dom8).appendTo('#over');
$(dom9).appendTo('#over');
$(dom10).appendTo('#alert');
$(dom12).appendTo('#bid_ask')
$(dom13).appendTo('#bid_ask');
$(dom14).appendTo('body');
var bid_,ask_,side_,datetime_,price_,size_,cost_,c_diff,m_diff,mbr=1;
var log_='<div style="margin-bottom:4px;padding:0px 2px 0px 12px;background-color:#FFC28F;">';
log_=log_+'<span style="float:left;cursor:pointer" onmouseover="this.style.color=\'#F00\';" ';
log_=log_+'onmouseout="this.style.color=\'#000\';" onclick="$(this).parent(\'div\').remove()">&#x2716;</span><span>';
$('#alert_val').change(function(){
if($('#alert_val').prop('checked')){
$('#s_tools').css('background-color','#FF7400');
}else{$('#s_tools').css('background-color','#555')}});
$("#test").click(function(){beep(0,0);});
datetime_=$('#datetime').text().replace(/\s/g, '');
side_=$('#side').text().replace(/\s/g, '');
$("#side_").html(side_);
price_=parseFloat($('#price').text()).toFixed(1);
$("#price_").html(price_);
size_=parseFloat($('#size').text()).toFixed(4);
cost_=parseFloat($('#cost').text()).toFixed(4);
$(log_+';'+datetime_+';'+side_+';'+price_+';'+size_+';'+cost_+'</span></div>').appendTo('#d_watch');
//$('#datetime').bind("DOMSubtreeModified",function(){});
(function(){var alert_=window.alert;
window.alert=function(msg){
datetime_=$('#datetime').text().replace(/\s/g, '');
if(datetime_!=""){side_=$('#side').text().replace(/\s/g, '');
$("#side_").html(side_);
price_=parseFloat($('#price').text()).toFixed(1);
$("#price_").html(price_);
size_=parseFloat($('#size').text()).toFixed(4);
cost_=parseFloat($('#cost').text()).toFixed(4);
$(log_+';'+datetime_+';'+side_+';'+price_+';'+size_+';'+cost_+'</span></div>').appendTo('#d_watch');}
console.log(msg);};})();
$('#current_price').bind("DOMSubtreeModified",function(){
bid_=parseFloat($(this).children('tbody').children('tr:nth-child(1)').children('td:nth-child(2)').text().replace(/,/,''));
ask_=parseFloat($(this).children('tbody').children('tr:nth-child(1)').children('td:nth-child(3)').text().replace(/,/,''));
$("#watch_bid").html(bid_);
$("#watch_ask").html(ask_);
if(((bid_+ask_)/2)<price_){
c_diff=Math.abs(parseFloat(price_-ask_).toFixed(1));
$("#arrow").html('&#8600;');
}else{c_diff=Math.abs(parseFloat(price_-bid_).toFixed(1));
$("#arrow").html('&#8599;');}
$("#c_diff").html(c_diff);
t1=Date.now();});
$("#val_diff").keyup(function(event){
if(/\D/g.test(this.value))this.value=this.value.replace(/\D/g,'');
var keycode=(event.keyCode?event.keyCode:event.which);
if(keycode=="13"){m_diff=$("#val_diff").val();
$("#m_diff").html(m_diff);}});
function runIt(){
if(c_diff>m_diff)beep("#c_diff","#F00");
if(!mbr)beep("#bid_ask","#F00");
t2=Date.now();
if((t2-t1)>180000)beep("#bid_ask","#F00");
setTimeout(runIt,2000);}
var to_=2000;
function clickIt(){
if($('#auto_val').prop('checked')&&(c_diff>m_diff)){
document.getElementById("btnRebalance").click();
to_=20000;}else{to_=2000;}
setTimeout(clickIt,to_);}
function chkIt(){
$.get("https://www.tradingesport.com/member/rebalance/clubreward",function(data){mbr=1}).fail(function(){mbr=0});
setTimeout(chkIt,60000);}
runIt();
clickIt();
chkIt();
const getCellValue=(tr,idx)=>
{if(typeof(tr.children[idx].getElementsByTagName('input')[0])!='undefined'&&tr.children[idx].getElementsByTagName('input')[0]!=null){
return tr.children[idx].getElementsByTagName('input')[0].value;}else{
var pf=parseFloat(tr.children[idx].textContent.replace(/,/,''));
if(isNaN(pf)){
return tr.children[idx].innerText||tr.children[idx].textContent;
}else{return pf;}}}
