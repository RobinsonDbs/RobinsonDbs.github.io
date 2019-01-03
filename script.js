function displayPopup(){
	var question = prompt("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please");
	if(question.toLowerCase() === "oui"){
		window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
	} else {
		console.log('dommage');
	}
}

// setTimeout(function(){
// 	displayPopup();
// }, 10000);

function changeStyle(){
	//Je récupère tous les paragraphe de la page html
	var paragraphe = document.querySelectorAll("p");
	console.log(paragraphe)
	//Je bouble sur tous les paragraphe
	//La variable est décomposée en plein de p et j'assigne la couleur blue à chaque p
	paragraphe.forEach(function(p){
		console.log(p)
		p.style.color = "blue";
		p.style.fontFamily = "papyrus";
	});

	var title1 = document.querySelectorAll("h1");
	title1.forEach(function(t){
		t.style.color = "green";
		t.style.fontFamily = "Comic Sans MS";
	});

	var title2 = document.querySelectorAll("h2");
	title2.forEach(function(t){
		t.style.color = "green";
		t.style.fontFamily = "Comic Sans MS";
	});

	var title3 = document.querySelectorAll("h3");
	title3.forEach(function(t){
		t.style.color = "green";
		t.style.fontFamily = "Comic Sans MS";
	});

}


