function openSubWindow(){
    //alert("the subwindow will only be visible inside a game");
    overwolf.windows.obtainDeclaredWindow("ChatWindow", function(result){
        if (result.status == "success"){
            overwolf.windows.restore(result.window.id, function(result){
                console.log(result);
				return true;
            });
			return true;
        }
		return true;
    });
	return false;
};

function closeChildWindow(){
    overwolf.windows.obtainDeclaredWindow("ChatWindow", function(result){
        if (result.status=="success"){
            overwolf.windows.close(result.window.id);
        }
    });
};

$("#streamer-name-form").submit(function(){
	var streamerName = $('#streamer-name').val();
    window.localStorage.setItem("streamerName", streamerName);
    
    openSubWindow();
    window.location.reload();
	return true;
});

