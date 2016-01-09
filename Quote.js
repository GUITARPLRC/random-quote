var quotes = ['"The best way to cheer yourself up is to try to cheer somebody else up." - Mark Twain', 
	'"Confusion is the beginning of wisdom." - Socrates', 
	'"The difference between a mountain and a molehill is your perspective." - Al Neuharth', 
	'"Act the part and you will become the part." - William James', 
	'"You always pass failure on the way to success." - Mickey Rooney', 
	'"When you have to make a choice and you don\'t make it, that itself is a choice." - William James', 
	'"How we spend our days is, of course, how we spend our lives." - Annie Dillard', 
	'"Life moves pretty fast. If you don\'t stop and look around once in a while, you could miss it." - Ferris Bueller', 
	'"The important thing is not to stop questioning" - Albert Einstein', 
	'"Enjoy the little things, for one day you may look back and realize they were the big things." - Robert Brault'];
var prevNumber = 0;
	
function chooseQuote() {
	var myEl = document.getElementById("quote_display");
	var randomNumber = Math.floor(Math.random() * quotes.length);
	
	if (randomNumber !== prevNumber) {
		myEl.textContent = quotes[randomNumber];
		prevNumber = randomNumber;
	}
	else {
		return chooseQuote();
	}
}

window.onload = chooseQuote();

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));