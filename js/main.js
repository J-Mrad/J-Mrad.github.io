
//Hit counts:
globalFiles = 0;
globalData = 0;

readHits();

function readHits(){

	let req = new XMLHttpRequest();

	req.onreadystatechange = () => {
	  if (req.readyState == XMLHttpRequest.DONE) {
	  	text = req.responseText;
	    //console.log(req.responseText);
	    globalFiles = text.split('{')[1].split(':')[1].split(',')[0];
	    globalData = text.split('{')[1].split(':')[2].split('}')[0];
	    document.getElementById("files").innerHTML = globalFiles;
	    document.getElementById("data").innerHTML = globalData + "KB";

	  }
	};

	req.open("GET", "https://api.jsonbin.io/b/5c477cdf6dbfe317d4c21d36/3", true);
	req.setRequestHeader("secret-key","$2a$10$W0GxYj5sgyVtCb/tskrHK.idEE3UxlyQlUZGq71Wlz2HFYY9JEfre");
	req.setRequestHeader("version","3");
	req.send();

}


function updateHits(files, data){

	files = +files + +globalFiles;
	data = +data + +globalData;

	let req = new XMLHttpRequest();

	req.onreadystatechange = () => {
	  if (req.readyState == XMLHttpRequest.DONE) {
	    //console.log(req.responseText);
	  }
	};

	req.open("PUT", "https://api.jsonbin.io/b/5c477cdf6dbfe317d4c21d36", true);
	req.setRequestHeader("Content-type", "application/json");
	req.setRequestHeader("secret-key","$2a$10$W0GxYj5sgyVtCb/tskrHK.idEE3UxlyQlUZGq71Wlz2HFYY9JEfre");
	req.setRequestHeader("versioning","false");
	req.send('{"files":'+files+',"data":'+data+'}');
}




//Header:

var HeaderBG = 1; // 1 = not blinking image, 2 = blinking
function BGSwitcher(){

	if( HeaderBG == 1){

		document.getElementById("HeaderBG").src = "images/BGwideBlink.png";
		HeaderBG = 2;
	}
	else{
		document.getElementById("HeaderBG").src = "images/BGwide.png";
		HeaderBG = 1;
	}	
}

//Buttons:

function download(file, dataSize){
	window.open(file, "Download");
	updateHits(1,dataSize);
}


$().ready(function(){
   $('.standardHolder').hide();
});
slide = 0;
function toggleRows() {
	if(slide==1){
	    $(".zipHolder").toggle();
	    $('.standardHolder').toggle();
	    slide = 0;
	}
	else{
		slide++;
	}
}


function toggleAll(course,count){
	if(document.getElementById(course+"checkAll").checked){
		for(i = 1 ; i <= count ; i++){
		  	document.getElementById(course+'.'+i).checked = true;
		}
	}
	else{
		for(i = 1 ; i <= count ; i++){
	  		document.getElementById(course+'.'+i).checked = false;
		}
	}
	if(course ==='i3304LAB')refresh('i3304');
	else refresh(course);
}

function refresh(course){

	courseSize = 0;
	sumSize = 0;

	if(course==='i3301'){
		courseSet = [725,771,242,2330,720,159,690,1662,443,327,274,307,601];
		sumSet = [25,554,83,109,0,18,0,314,72,222,0,0,85];
		
		gitFlag = 0;
		uml3Flag=0;

		for(i = 1 ; i < 14 ; i++){	
		  	if (document.getElementById(course+'.'+i).checked){
		  		
		  		if(i==5 || i ==6){
		  			if(gitFlag==0){
		  				gitFlag = 1;
		  				sumSize += 18;
		  			}
		  		}
		  		else if(i==9 || i ==10 || i==11 || i==12){
		  			if(uml3Flag==0){
		  				uml3Flag = 1;
		  				sumSize += 222;
		  			}
		  		}
		  		else{sumSize += sumSet[i-1];}

		  		courseSize += courseSet[i-1];
		  		
	  		}
	  	}
  	}

  	else if(course==='i3302'){
		courseSet = [1194,667,1014,1068,1744,781];
		sumSet = [773,1384,1191,592,611,1427];

		for(i = 1 ; i < 7 ; i++){	
		  	if (document.getElementById(course+'.'+i).checked){
		  		
				sumSize += sumSet[i-1];
				courseSize += courseSet[i-1];
		  		
	  		}
	  	}
  	}

  	  	else if(course==='i3303'){
		sumSet = [3794,3791,1233];

		for(i = 1 ; i < 4 ; i++){	
		  	if (document.getElementById(course+'.'+i).checked){

				sumSize += sumSet[i-1];
		  		
	  		}
	  	}
  	}

  	else if(course==='i3304'){
		courseSet = [1576,1423,2755,2301,1252];

		sumFlag = 0;
		for(i = 1 ; i < 6 ; i++){	
		  	if (document.getElementById(course+'.'+i).checked){
		  		if(sumFlag == 0){
		  			sumFlag = 1;
		  			sumSize += 15847;
		  		}
		  		courseSize += courseSet[i-1];
	  		}
	  	}
		courseSet = [1429,798,1603,1349,1761];

		sumFlag = 0;
		for(i = 1 ; i < 6 ; i++){	
		  	if (document.getElementById(course+'LAB.'+i).checked){
		  		if(sumFlag == 0){
		  			sumFlag = 1;
		  			sumSize += 37;
		  		}
		  		courseSize += courseSet[i-1];
	  		}
	  	}
  	}

	else if(course==='i3305'){
		courseSet = [2518,3136,2401,4316,1321,1103];
		sumSet = [1459,1298,0,472,0,24];

		Flag23 = 0;
		Flag45 = 0;
		for(i = 1 ; i < 7 ; i++){	
			if (document.getElementById(course+'.'+i).checked){
		  		if(i==2 || i==3){
		  			if(Flag23 == 0){
		  				Flag23 = 1;
		  				sumSize += 1298;
		  			}
		  		}
		  		else if(i==4 || i==5){
		  			if(Flag45 == 0){
		  				Flag45 = 1;
		  				sumSize += 1298;
		  			}
		  		}
		  		else{
		  			sumSize += sumSet[i-1];
		  		}
		  		courseSize += courseSet[i-1];
	  		}
	  	}
	}

	if(course==='i3306'){
	  	if (document.getElementById('i3306.1').checked){
			document.getElementById('i3306summary').innerHTML = "Download course (1530 KB)";
		}
		else{
			document.getElementById('i3306summary').innerHTML = "Download course (0 KB)";
		}
	}
	else if(course==='i3350'){

		courseSet = [613,2571,2174,2725,963,900,682,910,551,1056,1760,208,305,887,322,76];
		for(i = 1 ; i < 17 ; i++){	
			if (document.getElementById(course+'.'+i).checked){	
		  		courseSize += courseSet[i-1];
	  		}
	  	}
		document.getElementById(course+'full').innerHTML = "Download ("+courseSize+"KB)";

	}
	else {
		document.getElementById(course+'course').innerHTML = "Download course ("+courseSize+"KB)";
		document.getElementById(course+'summary').innerHTML = "Download summary ("+sumSize+"KB)";
		both = courseSize + sumSize;
		document.getElementById(course+'both').innerHTML = "Download both ("+both+"KB)";
	}
}


var Promise = window.Promise;
if (!Promise) {
    Promise = JSZip.external.Promise;
}

/**
 * Fetch the content and return the associated promise.
 * @param {String} url the url of the content to fetch.
 * @return {Promise} the promise containing the data.
 */
function urlToPromise(url) {
    return new Promise(function(resolve, reject) {
        JSZipUtils.getBinaryContent(url, function (err, data) {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}



function downloadnew(course, status){

    var zip = new JSZip();

    fileCount = 0;

    if(course==='i3301'){ //Software Engineering

			courseSet = ['data/I3301/Courses/Ch1_Introduction.pptx',
			'data/I3301/Courses/Ch2_Software_Processes.pptx',
			'data/I3301/Courses/Ch3_Agile.pptx',
			'data/I3301/Courses/Ch4A_Requirements_Gathering.ppt',
			'data/I3301/Courses/Ch4B_Requirements_Engineering.pptx',
			'data/I3301/Courses/Ch5A_Git_Basic_Commands.pdf',
			'data/I3301/Courses/Ch5B_Git_Cheat_Sheet.pdf',
			'data/I3301/Courses/Ch6A_UML_Use_Case.pptx',
			'data/I3301/Courses/Ch6B_UML_Class.ppt',
			'data/I3301/Courses/Ch6C_UML_Sequence_State.ppt',
			'data/I3301/Courses/Ch6D_UML_Sequence.pdf',
			'data/I3301/Courses/Ch6E_UML_State.pdf',
			'data/I3301/Courses/Ch7_Testing.pptx'];
			sumSet = ['data/I3301/Summaries/ch1.docx',
			'data/I3301/Summaries/ch2.docx',
			'data/I3301/Summaries/ch3.docx',
			'data/I3301/Summaries/ch4.docx',null,
			'data/I3301/Summaries/git.docx',null,
			'data/I3301/Summaries/uml1.docx',
			'data/I3301/Summaries/uml2.docx',
			'data/I3301/Summaries/uml3.docx',null,null,
			'data/I3301/Summaries/ch7.docx'];
			
			ch4flag = 0;
			gitFlag = 0;
			uml3Flag=0;
    	for(i = 1 ; i < 14 ; i++){	
		  	if (document.getElementById(course+'.'+i).checked){
		  		
		  		if(i==4 || i ==5){
		  			if(ch4flag==0){
		  				ch4flag = 1;
						zip.folder("Summaries").file(sumSet[3].split("/")[3], urlToPromise('data/I3301/Summaries/ch4.docx'), {binary:true});
						fileCount++;
	 	 			}
		  		}
		  		if(i==5 || i ==6){
		  			if(gitFlag==0){
		  				gitFlag = 1;
						zip.folder("Summaries").file(sumSet[5].split("/")[3], urlToPromise('data/I3301/Summaries/git.docx'), {binary:true});
						fileCount++;
	 	 			}
		  		}
		  		else if(i==9 || i ==10 || i==11){
		  			if(uml3Flag==0){
		  				uml3Flag = 1;
						zip.folder("Summaries").file(sumSet[9].split("/")[3], urlToPromise('data/I3301/Summaries/uml3.pptx'), {binary:true});
						fileCount++;
		  			}
		  		}
		  		else{
			  		zip.folder("Summaries").file(sumSet[i-1].split("/")[3], urlToPromise(sumSet[i-1]), {binary:true});
			  		fileCount++;
		  		}

				zip.folder("Courses").file(courseSet[i-1].split("/")[3], urlToPromise(courseSet[i-1]), {binary:true});
				fileCount++;

	  		}
	  	}
	}

	else if(course==='i3302'){ //PHP

			courseSet = ['data/I3302/Courses/Ch1_Introduction.pdf',
			'data/I3302/Courses/Ch2_PHP_Syntax.pdf',
			'data/I3302/Courses/Ch3_Forms_Files.pdf',
			'data/I3302/Courses/Ch4_Sessions_Cookies.pdf',
			'data/I3302/Courses/Ch5_MySQL.pdf',
			'data/I3302/Courses/Ch6_REGEX.pdf'];
			sumSet = ['data/I3302/Summaries/Ch1_Introduction_Summary.pdf',
			'data/I3302/Summaries/Ch2_PHP_Syntax_Summary.pdf',
			'data/I3302/Summaries/Ch3_Forms_Files_Summary.pdf',
			'data/I3302/Summaries/Ch4_Sessions_Cookies_Summary.pdf',
			'data/I3302/Summaries/Ch5_MySQL_Summary.pdf',
			'data/I3302/Summaries/Ch6_REGEX_Summary.pdf'];
			

    	for(i = 1 ; i < 7 ; i++){	
		  	if (document.getElementById(course+'.'+i).checked){
		  		
			  	zip.folder("Summaries").file(sumSet[i-1].split("/")[3], urlToPromise(sumSet[i-1]), {binary:true});
			  	fileCount++;
				zip.folder("Courses").file(courseSet[i-1].split("/")[3], urlToPromise(courseSet[i-1]), {binary:true});
				fileCount++;

	  		}
	  	}
	}

	else if(course==='i3303'){ //OS2

			sumSet = ['data/I3303/Summaries/Ch1_Processes.pdf',
			'data/I3303/Summaries/Ch2_Memory_Management.pdf',
			'data/I3303/Summaries/Ch3_File_Systems.pdf'];

    	for(i = 1 ; i < 4 ; i++){	
		  	if (document.getElementById(course+'.'+i).checked){
		  		
			  	zip.folder("Summaries").file(sumSet[i-1].split("/")[3], urlToPromise(sumSet[i-1]), {binary:true});
			  	fileCount++;

	  		}
	  	}
	}

	else if(course==='i3304'){ //Networking

			courseSet = ['data/I3304/Courses/Ch1_Transport_Layer.pdf',
			'data/I3304/Courses/Ch2_Routing_Algorithms.pdf',
			'data/I3304/Courses/Ch3_HTTP_FTP_TELNET.pdf',
			'data/I3304/Courses/Ch4_Mail_DNS.pdf',
			'data/I3304/Courses/Ch5_Security.pdf'];
			
    	for(i = 1 ; i < 6 ; i++){
		  	if (document.getElementById(course+'.'+i).checked){
		  		zip.folder("Courses").file(courseSet[i-1].split("/")[3], urlToPromise(courseSet[i-1]), {binary:true});
		  		fileCount++;
			}
		}
		for(i=1 ; i < 10 ; i++){
			zip.folder("Summaries").file("i3304_"+i+".jpg", urlToPromise("data/I3304/Summaries/p"+i+".jpg"), {binary:true});
			fileCount++;
		}

		courseSet = ['data/I3304LAB/Courses/Ch1_Static_Routing.pdf',
			'data/I3304LAB/Courses/Ch2_Dynamic_Routing.pdf',
			'data/I3304LAB/Courses/Ch3_RIP.pdf',
			'data/I3304LAB/Courses/Ch4_OSPF.pdf',
			'data/I3304LAB/Courses/Ch5_VLAN.pdf'];
			
    	for(i = 1 ; i < 6 ; i++){
		  	if (document.getElementById(course+'.'+i).checked){
		  		zip.folder("Courses").file(courseSet[i-1].split("/")[3], urlToPromise(courseSet[i-1]), {binary:true});
		  		fileCount++;
			}
		}
		for(i=1 ; i < 10 ; i++){
			zip.folder("Summaries").file("i3304_LAB.jpg", urlToPromise("data/I3304LAB/Summaries/I3304_LAB_Summary.docx"), {binary:true});
			fileCount++;
		}
	}

	else if(course==='i3305'){ //GUI

		courseSet = ['data/I3305/Courses/Ch1_Creational.pdf',
		'data/I3305/Courses/Ch2_Structural.pdf',
		'data/I3305/Courses/Ch3_Behavioral.pdf',
		'data/I3305/Courses/Ch4A_JavaFx.pdf',
		'data/I3305/Courses/Ch4B_SceneBuilder.pdf',
		'data/I3305/Courses/Ch5_JDBC.pdf'];
		sumSet=[
		'data/I3305/Summaries/Ch1.jpg',
		'data/I3305/Summaries/Ch2&3.jpg',
		null,
		'data/I3305/Summaries/Ch4_JavaFx.docx',
		null,
		'data/I3305/Summaries/Ch5_JDBC.docx'];

		sumFlag1 = 0;
		sumFlag2 = 0;	
    	for(i = 1 ; i < 7 ; i++){
		  	if (document.getElementById(course+'.'+i).checked){
		  		if(i==2 || i==3){
		  			if(sumFlag1 == 0){
		  				sumFlag1 = 1;
		  				zip.folder("Summaries").file(sumSet[1].split("/")[3], urlToPromise(sumSet[1]), {binary:true});
		  				fileCount++;
	  				}
		  		}
		  		else if(i==4 || i==5){
		  			if(sumFlag2 == 0){
		  				sumFlag2 = 1;
		  				zip.folder("Summaries").file(sumSet[3].split("/")[3], urlToPromise(sumSet[3]), {binary:true});
		  				fileCount++;
	  				}
		  		}
				else{zip.folder("Summaries").file(sumSet[i-1].split("/")[3], urlToPromise(sumSet[i-1]), {binary:true});}
				fileCount++;
		  		zip.folder("Courses").file(courseSet[i-1].split("/")[3], urlToPromise(courseSet[i-1]), {binary:true});
		  		fileCount++;
			}
		}
	}

	else if(course==='i3306'){ //DB2

	  	if (document.getElementById('i3306.1').checked){
			zip.file("i3306_1.jpg", urlToPromise('data/I3306/p1.jpg'), {binary:true});
			fileCount++;
			zip.file("i3306_2.jpg", urlToPromise('data/I3306/p2.jpg'), {binary:true});
			fileCount++;
		}
	}

	else if(course==='i3350'){//Mobile

		courseSet = ['data/I3350/Courses/Chapter0_Java_Revision.pdf',
		'data/I3350/Courses/Chapter1_Introduction.pdf',
		'data/I3350/Courses/Chapter2_Gui_Widgets_list.pdf',
		'data/I3350/Courses/Chapter3_Layout.pdf',
		'data/I3350/Courses/Chapter4_Intents.pdf',
		'data/I3350/Courses/Chapter5_Activity_LifeCycle.pdf',
		'data/I3350/Courses/Chapter6_Shared_Preferences.pdf',
		'data/I3350/Courses/Chapter7_Files_Storage.pdf',
		'data/I3350/Courses/Chapter8_Notifications.pdf',
		'data/I3350/Courses/Chapter9_SQLITE.pdf',
		'data/I3350/Courses/Chapter10_Fragments.pdf',
		'data/I3350/Courses/Chapter10ex_FragmentManager.pdf',
		'data/I3350/Courses/Chapter11_AsyncTask.pdf',
		'data/I3350/Courses/Chapter12_Broadcast_Receiver.pdf',
		'data/I3350/Courses/Chapter12ex_Broadcast_Receiver_Wifi.pdf',
		'data/I3350/Summaries/I3350_Summary.docx'];

		for(i = 1 ; i < 17 ; i++){
		  	if (document.getElementById(course+'.'+i).checked){
		  		zip.folder("Courses").file(courseSet[i-1].split("/")[3], urlToPromise(courseSet[i-1]), {binary:true});
		  		fileCount++;
			}
		}

	}

  	if(status == 0){
  		zip.remove("Summaries");
		updateHits(fileCount,document.getElementById(course+'course').innerHTML.split('(')[1].split('K')[0]);
  	}
  	else if(status == 1){
  		zip.remove("Courses");
  		updateHits(fileCount,document.getElementById(course+'summary').innerHTML.split('(')[1].split('K')[0]);
  	}
  	else{
  		updateHits(fileCount,document.getElementById(course+'both').innerHTML.split('(')[1].split('K')[0]);
  	}

  	zip.generateAsync({type:"blob"})
	.then(function(content) {
		// see FileSaver.js
 		saveAs(content, course+".zip");
	});

	alert("Selected file(s) will be zipped and downloaded. Bad internet connection might cause delays.");

}

//Comment section

var curComment = 1; //1 = light gray, 2 = mid gray

function postComment(){
	if(document.getElementById("CommentName").value.length < 1){
		alert("Please enter a name");
		return;
	}
	if(document.getElementById("CommentIn").value.length < 1){
		alert("Please enter a comment");
		return;
	}
	
	var name = document.getElementById("CommentName").value;
	var com = document.getElementById("CommentIn").value;
	
	var element = document.createElement("div");
	if(curComment == 1){
		element.className = "comment2";
		curComment = 2;
	}
	else{
		element.className = "comment1";
		curComment = 1;
	}
	var spanName = document.createElement("span");
	spanName.className = "commenterName";
	spanName.innerHTML = name;
	element.appendChild(spanName);
	element.appendChild(document.createTextNode(" Said:"));
	element.appendChild(document.createElement("br"));
	element.appendChild(document.createTextNode(com));
	element.appendChild(document.createElement("hr"));
	document.getElementById("putCommentsHere").appendChild(element);
}

