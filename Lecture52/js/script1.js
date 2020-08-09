(function(){
  var ShreyaGreater={};
  ShreyaGreater.name ="Shreya";
  var greetings="Hello ";
  ShreyaGreater.sayHello = function(){
	console.log(greetings + ShreyaGreater.name);
 }
 window.ShreyaGreater = ShreyaGreater;
 

})(window);