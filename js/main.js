
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
    if(course==='i3301'){

			courseSet = ['data/I3301/Courses/ch1.pptx',
			'data/I3301/Courses/ch2.pptx',
			'data/I3301/Courses/ch3.pptx',
			'data/I3301/Courses/ch4a.pptx','data/I3301/Courses/ch4b.pptx',
			'data/I3301/Courses/ch5a.pdf','data/I3301/Courses/ch5b.pdf',
			'data/I3301/Courses/ch6a.pptx','data/I3301/Courses/ch6b.pptx','data/I3301/Courses/ch6c.pptx','data/I3301/Courses/ch6d.pdf','data/I3301/Courses/ch6e.pdf',
			'data/I3301/Courses/ch7.pptx'];
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

