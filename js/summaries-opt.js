
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
	    document.getElementById("data").innerHTML = Math.floor(globalData/1024) + "MB (" + globalData + "KB)";

	  }
	};

	req.open("GET", "https://api.jsonbin.io/b/5ca0586c1c56bb1ec392c75c", true);
	req.setRequestHeader("secret-key","$2a$10$W0GxYj5sgyVtCb/tskrHK.idEE3UxlyQlUZGq71Wlz2HFYY9JEfre");
	//req.setRequestHeader("version","1");
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

	if(globalData != 0 && globalFiles != 0){
		req.open("PUT", "https://api.jsonbin.io/b/5ca0586c1c56bb1ec392c75c", true);
		req.setRequestHeader("Content-type", "application/json");
		req.setRequestHeader("secret-key","$2a$10$W0GxYj5sgyVtCb/tskrHK.idEE3UxlyQlUZGq71Wlz2HFYY9JEfre");
		req.setRequestHeader("versioning","false");
		req.send('{"files":'+files+',"data":'+data+'}');
	}

	let req2 = new XMLHttpRequest();

	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	var dateTime = date+' '+time;

	req2.open("PUT", "https://api.jsonbin.io/b/5ca05bb957e7bb33d8a8542c", true);
	req2.setRequestHeader("Content-type", "application/json");
	req2.setRequestHeader("secret-key","$2a$10$W0GxYj5sgyVtCb/tskrHK.idEE3UxlyQlUZGq71Wlz2HFYY9JEfre");
	req2.setRequestHeader("versioning","true");
	req2.send('{"dt":"'+dateTime+'","files":'+files+'}');

}



//Buttons:

function download(file, dataSize){
	window.open(file, "Download");
	updateHits(1,dataSize);
}
function forceDownload(file, dataSize) {
    window.location.href = file;
    updateHits(1,dataSize);
}

