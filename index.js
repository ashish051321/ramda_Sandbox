const R = require("ramda");
// Maps all R methods onto the global object.
R.map(([k, v]) => (global[k] = v), R.toPairs(R));
console.clear();
var l = console.log;
const objs = require("./data.js").objs;

var isMale = x => x.gender === "Male";
var getAllMales = filter(isMale, __);
l("Male Count:", getAllMales(objs).length);

var getAllMaleNames = compose(
  map(x => x.name, __),
  getAllMales
);
l("All Males:", getAllMaleNames(objs));

var getMessage = compose(
  concat("Hello ", __),
  join(", ", __),
  getAllMaleNames
);
l(getMessage(objs));

// assoc -- makinga copy of an object and doing a shallow put/replace.
var x = {
  name: "Ashish",
  address: {
    town: "Pune",
    pin: 411015
  },
  age: 32
};

var updateName = compose(assoc("name", "Bhawna", __));
l("Name Updated using assoc", updateName(x));

// assocPath -- making a copy of an object and doing a shallow put/replace.
var updatePin = compose(assocPath(["address", "pin"], "841301", __));
l("Pin Updated using assocPath", updatePin(x));
