
// JQ



// JS

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

function download(file){
	window.open(file, "Download");
}




function refresh(course){

		courseSize = 0;
		sumSize = 0;
	
		if(course==='i3301'){
			courseSet = [725,771,242,2330,720,159,690,1662,443,327,274,307,601];
			sumSet = [25,554,83,109,18,0,314,72,222,0,0,0,85];
			
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
	  	else if(course==='i3304'){
			courseSet = [1576,1423,2755,2301,1252];

			sumFlag = 0;
			for(i = 1 ; i < 6 ; i++){	
			  	if (document.getElementById(course+'.'+i).checked){
			  		if(sumFlag == 0){
			  			sumFlag = 1;
			  			sumSize = 15847;
			  		}
			  		courseSize += courseSet[i-1];
		  		}
		  	}
	  	}

		document.getElementById(course+'course').innerHTML = "Download course ("+courseSize+"KB)";
		document.getElementById(course+'summary').innerHTML = "Download summary ("+sumSize+"KB)";
		both = courseSize + sumSize;
		document.getElementById(course+'both').innerHTML = "Download both ("+both+"KB)";
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
			'data/I3301/Summaries/ch4.docx',
			'data/I3301/Summaries/git.docx',null,
			'data/I3301/Summaries/uml1.docx',
			'data/I3301/Summaries/uml2.docx',
			'data/I3301/Summaries/uml3.docx',null,null,null,
			'data/I3301/Summaries/ch7.docx'];
			
			gitFlag = 0;
			uml3Flag=0;
    	for(i = 1 ; i < 14 ; i++){	
		  	if (document.getElementById(course+'.'+i).checked){
		  		
		  		if(i==5 || i ==6){
		  			if(gitFlag==0){
		  				gitFlag = 1;
						zip.folder("Summaries").file(sumSet[4].split("/")[3], urlToPromise('data/I3301/Summaries/git.docx'), {binary:true});
	 	 			}
		  		}
		  		else if(i==9 || i ==10 || i==11 || i==12){
		  			if(uml3Flag==0){
		  				uml3Flag = 1;
						zip.folder("Summaries").file(sumSet[8].split("/")[3], urlToPromise('data/I3301/Summaries/uml3.pptx'), {binary:true});
		  			}
		  		}
		  		else{
			  		zip.folder("Summaries").file(sumSet[i-1].split("/")[3], urlToPromise(sumSet[i-1]), {binary:true});
		  		}

				zip.folder("Courses").file(courseSet[i-1].split("/")[3], urlToPromise(courseSet[i-1]), {binary:true});

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
			}
		}
		for(i=1 ; i < 9 ; i++){
			zip.folder("Summaries").file("i3304_"+i+".jpg", urlToPromise("data/I3304/Summaries/p"+i+".jpg"), {binary:true});
		}
	}



  	if(status == 0){
  		zip.remove("Summaries");
  	}
  	else if(status == 1){
  		zip.remove("Courses");
  	}

  	zip.generateAsync({type:"blob"})
	.then(function(content) {
		// see FileSaver.js
 		saveAs(content, course+".zip");
	});
 	


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

