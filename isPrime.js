function prime() {
  var x = document.getElementById("number").value;
  function isPrime(input) {
    var txt = ["Not prime", "Prime"];
    if (input == 1) {
      return txt[0];
    } else if (input == 2) {
      return txt[1];
    } else if (input % 2 == 0) {
      return txt[0];
    }
    for (var i = 3; i <= Math.sqrt(input); i += 2) {
      if (input % i == 0) {
        return txt[0];
      }
    }
    return txt[1];
  }
  document.getElementById("demo").innerHTML = isPrime(x);
};
