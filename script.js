(function () {

  var quoteLink = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?",
    tweetBtn = document.getElementById("tweet"),
    newQuote = document.getElementById("newQuote"),
    display = document.getElementById("quoteDisplay"),
    quote = '',
    author = '',
    link = 'https://twitter.com/intent/tweet?text=',
    input = document.getElementById("input"),
    login = document.getElementById("login"),
    newUser = document.getElementById('newUser');

  getQuote();

  function getQuote() {

    $.getJSON(quoteLink, function (entry) {

      quote = entry.quoteText;

      if (entry.quoteAuthor == "") {
        author = "unknown";
      } else {
        author = entry.quoteAuthor;
      }

      display.textContent = '"' + quote + '" - ' + author;

    });

  }

  newQuote.addEventListener("click", function () {
    return getQuote();
  });

})();