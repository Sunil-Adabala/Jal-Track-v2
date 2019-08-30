var database = firebase.database();
var ref = database.ref('jaltrack');

var data = {
  name : "Linus",
  val: 21
};

ref.push(data);
