
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}




defaultStatus=""
var netscape = 0;
var goodIE = 0;
browserName = navigator.appName.substring(0,8);
browserVer = parseFloat(navigator.appVersion);
if (browserName == "Netscape" && browserVer >= 3)
{ netscape = 1; }
if (browserName == "Microsof" && browserVer == 4)
{ tameIE = 1; }



function seqIMG( idd, img01, img02, img03, img04 ) { // Phongular Multi-imageSwapper

if (netscape || tameIE) {

	var iddd = idd;

	IMGs = new Array();
	
	IMGs[0] = new Image();
	IMGs[0].src = img01;
	IMGs[1] = new Image();
	IMGs[1].src = img02;
	IMGs[2] = new Image();
	IMGs[2].src = img03;
	IMGs[3] = new Image();
	IMGs[3].src = img04;
	
	theIMG = document.getElementById(idd);

	setTimeout('theIMG.src = IMGs[0].src',0);
	setTimeout('theIMG.src = IMGs[1].src',50);
	setTimeout('theIMG.src = IMGs[2].src',100);
	setTimeout('theIMG.src = IMGs[3].src',150);

}}




function seqIMGstore( idd, img01, img02, img03, img04 ) { // Phongular Multi-imageSwapper

if (netscape || tameIE) {

	var iddd = idd;

	IMGss = new Array();
	
	IMGss[0] = new Image();
	IMGss[0].src = img01;
	IMGss[1] = new Image();
	IMGss[1].src = img02;
	IMGss[2] = new Image();
	IMGss[2].src = img03;
	IMGss[3] = new Image();
	IMGss[3].src = img04;
	
	theIMG = document.getElementById(idd);

	setTimeout('theIMG.src = IMGss[0].src',0);
	setTimeout('theIMG.src = IMGss[1].src',50);
	setTimeout('theIMG.src = IMGss[2].src',100);
	setTimeout('theIMG.src = IMGss[3].src',150);

}}




function seqIMGwatch( idd, img01, img02, img03, img04 ) { // Phongular Multi-imageSwapper

if (netscape || tameIE) {

	var iddd = idd;

	IMGsw = new Array();
	
	IMGsw[0] = new Image();
	IMGsw[0].src = img01;
	IMGsw[1] = new Image();
	IMGsw[1].src = img02;
	IMGsw[2] = new Image();
	IMGsw[2].src = img03;
	IMGsw[3] = new Image();
	IMGsw[3].src = img04;
	
	theIMG = document.getElementById(idd);

	setTimeout('theIMG.src = IMGsw[0].src',0);
	setTimeout('theIMG.src = IMGsw[1].src',50);
	setTimeout('theIMG.src = IMGsw[2].src',100);
	setTimeout('theIMG.src = IMGsw[3].src',150);

}}


<!---
defaultStatus=""
var netscape = 0;
var goodIE = 0;
browserName = navigator.appName.substring(0,8);
browserVer = parseFloat(navigator.appVersion);
if (browserName == "Netscape" && browserVer >= 3)
{ netscape = 1; }
if (browserName == "Microsof" && browserVer == 4)
{ tameIE = 1; }

if (netscape || tameIE) {
shiny = new Array(18);
    for (m=0; m<=17; m++) { 
    shiny[m] = new Image(); }

shiny[0].src = "../imgz/header/head_store_0.gif";
shiny[1].src = "../imgz/header/head_store_1.gif";
shiny[2].src = "../imgz/header/head_store_2.gif";
shiny[3].src = "../imgz/header/head_store_3.gif";
shiny[4].src = "../imgz/header/head_store_4.gif";


shiny[5].src = "../imgz/header/head_watch_0.gif";
shiny[6].src = "../imgz/header/head_watch_1.gif";
shiny[7].src = "../imgz/header/head_watch_2.gif";
shiny[8].src = "../imgz/header/head_watch_3.gif";
shiny[9].src = "../imgz/header/head_watch_4.gif";



}


//STORE
function roll_store_on() {
if (netscape || tameIE) {
setTimeout('document.store.src = shiny[1].src',0);
setTimeout('document.store.src = shiny[2].src',50);
setTimeout('document.store.src = shiny[3].src',100);
setTimeout('document.store.src = shiny[4].src',150);

}}

function roll_store_off() {
if (netscape || tameIE) {
setTimeout('document.store.src = shiny[3].src',0);
setTimeout('document.store.src = shiny[2].src',50);
setTimeout('document.store.src = shiny[1].src',100);
setTimeout('document.store.src = shiny[0].src',150);


}}


//WATCH
function roll_watch_on() {
if (netscape || tameIE) {
setTimeout('document.watch.src = shiny[6].src',0);
setTimeout('document.watch.src = shiny[7].src',50);
setTimeout('document.watch.src = shiny[8].src',100);
setTimeout('document.watch.src = shiny[9].src',150);

}}

function roll_watch_off() {
if (netscape || tameIE) {
setTimeout('document.watch.src = shiny[8].src',0);
setTimeout('document.watch.src = shiny[7].src',50);
setTimeout('document.watch.src = shiny[6].src',100);
setTimeout('document.watch.src = shiny[5].src',150);


}}