"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//no 1
var golden = function golden() {
	console.log("this is golden!!");
};

golden();
//no 2
var newFunction = {
	literal: function literal(firstName, lastName) {
		firstName, lastName, fullName = " " + this.firstName + "   " + this.lastName;
	}
};
newFunction[fullName]("William", "Imoh");

//no 3

function newObject() {
	return ['Harry', 'Potter Holt', 'Hogwarts React Conf', 'Deve-wizard Avocado', 'Vimulus Renderus!!!'];
}

var _newObject = newObject(),
    _newObject2 = _slicedToArray(_newObject, 5),
    firstName = _newObject2[0],
    lastName = _newObject2[1],
    destination = _newObject2[2],
    occupation = _newObject2[3],
    spell = _newObject2[4];

console.log(firstName, lastName, destination, occupation);

//n0 4


var west = ["Will", "Chris", "Sam", "Holly"];
var east = ["Gill", "Brian", "Noel", "Maggie"];
var combined = [].concat(west, east);
//Driver Code
console.log(combined);

//no 5


var planet = "earth";
var view = "glass";
var before = " Lorem  " + view + " dolor sit amet, consectetur adipiscing elit, " + planet + " do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";
console.log(before);