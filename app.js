function user(name) {
  console.log(name + " is active now");
}

user("Vusal");
user("Murad");
user("Nihad");


function big(a, b, c) {
  if (a > b && a > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
}

big(5, 15, 10); 
