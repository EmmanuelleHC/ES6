
//no 1
let golden=()=>{console.log("this is golden!!");};
 
golden();
//no 2
let newFunction={
	literal(firstName, lastName){
		firstName,
	    lastName,
	    fullName=` ${this.firstName}   ${this.lastName}`
	}

}
newFunction[fullName]("William", "Imoh");
 
//no 3

function newObject() {
   return ['Harry','Potter Holt','Hogwarts React Conf','Deve-wizard Avocado','Vimulus Renderus!!!'];
}

let [firstName,lastName,destination,occupation,spell] = newObject();

console.log(firstName, lastName, destination, occupation);


//n0 4


let west = ["Will", "Chris", "Sam", "Holly"];
let east = ["Gill", "Brian", "Noel", "Maggie"];
let combined = [...west,...east];
//Driver Code
console.log(combined);

//no 5


let planet = "earth"; 
let view = "glass"; 
let before =` Lorem  ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam` ;   
console.log(before) 
