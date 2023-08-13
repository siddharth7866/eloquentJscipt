const a = "siddharth";
a;
console.log("siddharth" || 0);

var m = "mood";
m = "fooddddddwwf";
console.log(m);

let sid = Number(34);
console.log(Number.isNaN(sid));
if (!Number.isNaN(sid)) {
  console.log("sid is number");
  console.log(sid + 4);
} else {
  console.log("sid is not a number");
}

//Printing the pattern programming

function pattern(number) {
  let sid = "";
  for (var i = 0; i < number; i++) {
    sid = sid + "#";
    console.log(sid);
  }
}

pattern(2);
