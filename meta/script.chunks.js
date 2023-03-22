


/* Set Global Variable */ /* Determine What Browser The Client Running */ var ns6 = (!document.all && document.getElementById); var ie4 = (document.all); var ns4 = (document.layers); var browser = new Object(); browser.version = parseFloat(navigator.appVersion); browser.isNetscape = false; browser.isIE = false; if (navigator.appName.indexOf("Netscape") != -1) browser.isNetscape = true; else if (navigator.appName.indexOf("Microsoft") != -1) browser.isIE = true; function PopPromoWin(aUrl, width, height ) { winName = "PopPromoWin"; if(width <= 0) { width = 400; } if(height <= 0) { height = 300; } newWin = window.open("about:blank", winName, "width=" + width + ",height=" + height +",scrollbars=0,resizable=no"); newWin.location.href = aUrl; } 




function changeColor(idd, bgg, txxt) {
	document.getElementById(idd).style.background=bgg;
	document.getElementById(idd).style.color=txxt;
	}

function parentFile(thefilename){
	parent.file = thefilename;
	}


function setCat (cat){
	switchClass(cat,'rootSelect_on');
 	switchClass(cat+'+link','sectionTitle_on');
}


function clearCat(){
	if( root == 1 ){
		for(x=0;x < categories.length; x++ ){				
			thisCat = categories[x];
			switchClass(thisCat,'rootSelect');
		 	switchClass(thisCat+'+link','sectionTitle');
		}
	}
}


function clearFiles(){
	for(x=0;x < categories.length; x++ ){				
		thisCat = categories[x];
		changeColor ( thisCat, '#323232', '#000000' );
	}
}








function switchTo(idd) {
	fileOnPage = 0;

	for(x=0; x < parent.sections.chunks.length; x++ ){				
		var thisChunk = parent.sections.chunks[x];
		var thisChunkLink = parent.sections.chunks[x] + '+link';

		if(parent.file == thisChunk )
			fileOnPage = 1;

		//thisChunkLink.document.setAttribute('class','titleActive');
		
//		thisChunkLink.className=newClass;

//		parent.sections.document.getElementById(thisChunk).style.display='none';

		switchClass ( thisChunk, 'articleDiv' );
		switchClass ( thisChunk+'+link' , 'title' );
		

//		parent.sections.document.getElementById(thisChunkLink).style.setAttribute('color', 'grey', 0);
		
		}
		

	if (fileOnPage == 1 ){
		
		switchClass ( idd , 'articleDiv_on' );
		switchClass ( idd+'+link' , 'title_on' );
		
//		parent.sections.document.getElementById(idd).style.display='block';
//		parent.sections.document.getElementById(idd+'+link').style.setAttribute('color', 'white', 0);
	}
	

	
}


function mSelect( itm, state ){ // state = On/Off

	if( state == 'On' ){
		parent.randomImg.document.getElementById(itm+'On').style.display='block';
		parent.randomImg.document.getElementById(itm+'Off').style.display='none';
		}
		else{
		parent.randomImg.document.getElementById(itm+'On').style.display='none';
		parent.randomImg.document.getElementById(itm+'Off').style.display='block';
		}
}


function switchClass(idd, newClass) {

	identity=document.getElementById(idd);

if ( browser.isIE == false )
	identity.setAttribute('class',newClass);
else
	identity.className=newClass;

}


function toggleClass(idd) {
	var el = document.getElementById(idd);
	
	if ( el.className != 'rootTitle' ) {
		el.className = 'rootTitle';
	}
	else {
		el.className = 'activeTitle';
	}

}



function toggle(idd) {
	var el = document.getElementById(idd);
	
	if ( el.style.display != 'none' ) {
		el.style.display = 'none';
	}
	else {
		el.style.display = '';
	}

}


	
function mSwitch(itm, state){
		if( parent.lilMenu == 1 ){
			parent.mItm = itm;
			parent.mState = state;
			mSelect(parent.mItm, parent.mState);
		}
	}
	
function gotoChunk (){
	if(root != 1 && init == 1 )
		parent.articles.location = 'chunkshow-single.php?chunk='+initChunk ;

}

function setRootMenu(cat){

	if(root != 1){
		// clear classes
		for(x=0; x < parent.categories.length; x++ ){				
			thisCat = parent.categories[x];
			parent.switchClass ( thisCat+'+link', 'rootTitle' );
		}
		
		// set classes
		parent.switchClass(cat+'+link', 'activeTitle');
	}
	
}

function gotoName(name){
	self.location.href = name ;
}