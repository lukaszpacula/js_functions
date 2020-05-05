/* HTML CODE:
<!DOCTYPE html>
<html>
  <head>
    <body>
      <input id="number" type="number" pattern="[0-9]"> 
      <button onclick="prime()">Check</button>
      <p id="demo"></p>
      <script src="isPrime.js"></script>
    </body>
  </head>
</html>
*/

function prime() {
  var x = document.getElementById("number").value;
  document.getElementById("number").value = Math.floor(x);
  function isPrime(input) {
    var txt = ["Not prime", "Prime"];
    if (input == 1 || input == 0) {
      return txt[0];
    } else if (input < 0) {
      return "Wrong number"
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
  document.getElementById("demo").innerHTML = isPrime(Math.floor(x));
};
