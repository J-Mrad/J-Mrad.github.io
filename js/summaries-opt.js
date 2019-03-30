
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

	req.open("GET", "https://api.jsonbin.io/b/5c477cdf6dbfe317d4c21d36/10", true);
	req.setRequestHeader("secret-key","$2a$10$W0GxYj5sgyVtCb/tskrHK.idEE3UxlyQlUZGq71Wlz2HFYY9JEfre");
	req.setRequestHeader("version","10");
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



//Buttons:

function download(file, dataSize){
	window.open(file, "Download");
	updateHits(1,dataSize);
}
function forceDownload(file, dataSize) {
    window.location.href = file;
    updateHits(1,dataSize);
}

