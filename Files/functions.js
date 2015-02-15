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


$("#streamer-name-form").submit(function(){
	var streamerName = $('#streamer-name').val();
    openSubWindow();
	window.localStorage.setItem("streamerName", streamerName);
	return true;
});