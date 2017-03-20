$(document).ready(function() {
  // function upper_case(str) {
  //    regexp = /^[A-Z]/;
  //    if (regexp.test(str))
  //     {
  //       console.log("String's first character is uppercase");
  //     }
  //     else
  //     {
  //       console.log("String's first character is not uppercase");
  //     }
  // }
  // upper_case('Abcd');
  // upper_case('abcd');
  function removeSpaces(str) {
    var regexp = /\s/;
    while (regexp.test(str)) {
      var str = str.replace(regexp, '');
    }
    return str;
  }

  function creditCard(str) {
    var str = removeSpaces(str);
    regexp = /[^\d]/;
    if (regexp.test(str) || str.length !== 16)
      {
        console.log("This is not a credit card");
      }
      else {
        console.log("this is a credit card")
      }
  }

  creditCard("6666 x7777 8888 9999");
  // creditCard(zeroesRemoved);
});





  // sentence = prompt("Enter a sentence");
  // console.log(sentence);
  // var firstAndLast = function (sentence) {
  //   return sentence.split(/\w{1}/);
  // }
  // console.log(firstAndLast(sentence));
