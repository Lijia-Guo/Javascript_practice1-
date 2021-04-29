let myvariable = "Monkey"
document.getElementById("test").innerHTML = myvariable;

let myvariable1 = "elephant"
document.getElementById("test5").innerHTML = myvariable1;

let myvariable2 = "rabbit"
document.getElementById("test6").innerHTML = myvariable2;

let myvariable3 = "lion"
document.getElementById("test7").innerHTML = myvariable3;

let myvariable4 = "tiger"
document.getElementById("test8").innerHTML = myvariable4;




document.getElementById("test1").innerHTML = (49 + 20 - 19);

document.getElementById("test2").innerHTML = (30 + 20 * 10);


var z = myFunction(40 ,20);
document.getElementById("test3").innerHTML = z;

function myFunction (a ,b) {
	return a + b - 10;
}



function myFunction1(){

	var hour = new Date().getHours();
	var greeting;
	if (hour < 10) {
		greeting = "Have a good day!"
	} else {
		greeting = "Enjoy your day!"
	}
document.getElementById("test4").innerHTML = greeting;
}




