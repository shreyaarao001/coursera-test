(function () {
	

  var SoukhyaGreater = {};
  SoukhyaGreater.name ="Soukhya";
  var greetings="Hi ";
  SoukhyaGreater.sayHi=function () {
	console.log(greetings +SoukhyaGreater.name);
 }
 window.SoukhyaGreater=SoukhyaGreater;

})(window);