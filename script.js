function displayPopup(){
	var question = prompt("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please");
	if(question.toLowerCase() === "oui"){
		window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
	} else {
		console.log('dommage');
	}
}

setTimeout(function(){
	displayPopup();
}, 10000);
