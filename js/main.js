
// JQ

$(document).ready(function(){
    $('.SendEmail').on('click',function(){
       window.location.href = "mailto:J_Mrad@outlook.com?subject=Subject&body=Hello%20World"; 
    });
});

$(document).ready(function(){
    $(".EduDropDown").click(function(){
		if( $(".Educationslider2").is(":visible") ){
			$(".Educationslider2").slideToggle("slow");
		}
        $(".Educationslider").slideToggle("slow");
    });
});

$(document).ready(function(){
    $(".EduDropDown2").click(function(){
		if( $(".Educationslider").is(":visible") ){
			$(".Educationslider").slideToggle("slow");
		}
        $(".Educationslider2").slideToggle("slow");
    });
});



//Contact me:


$(function()
{
    function after_form_submitted(data) 
    {
        if(data.result == 'success')
        {
            $('form#reused_form').hide();
            $('#success_message').show();
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' ); 
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });
            
        }//else
    }

	$('#reused_form').submit(function(e){
	
        e.preventDefault();
		
        $form = $(this);
		$('button[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' ); 
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
        });
        
		//submitting should go here, PHP needed
                    
    });        
        
});



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

