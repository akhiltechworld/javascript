<script>

/*This is an example for named function expressions.*/
let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // use func to re-call itself
  }
};

sayHi('Dude'); // Hello, Guest

// But this won't work:
func(); // Error, func is not defined (not visible outside of the function)

</script>
