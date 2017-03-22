$.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: 'GET',
      success: function(data) {
    	$.each(data, function() {
        	$('#p').append('<div class="main"><a href="javascript:showMsg('+this.id+','+this.userId+')" class="msg__title">'+this.title+'</a>\
        		<div class="msg__body" id="p'+this.id+'">\
        		<div class="msg__userinfo"></div>\
        		<div>'+this.body+'</div>\
        		<hr></div></div>');
    	});
	  }
    });

function showMsg(postId,userId){
	if ($('#p'+postId).is(":visible")){//just hide block

		$('#p'+postId).hide();

	}else{//get user data and show block

	    $.ajax({
	      url: "https://jsonplaceholder.typicode.com/users/"+userId,
	      method: 'GET',
	      success: function(data) {
      	$('#p'+postId+'>.msg__userinfo').html(renderJSON(data));
      	$('#p'+postId).show();
		  }
	    });
	}
}

function renderJSON(arr,tmp){
	var html = '';
	tmp = (tmp == undefined) ? "<b>{{k}}:</b> {{v}}<br/>" : tmp;
	$.each(arr, function(k,v) {
		if  (typeof v === 'object')
			html += renderJSON (v)
		else
			html += tmp.replace('{{k}}',k).replace('{{v}}',v);
	});
	return html;
}

   
   
   
   