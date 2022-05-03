function exercise (x){
    return `Today's exercise ${x}`;
}

console.log(exercise('running'));
console.log(exercise('swimming'));

function pizza (y){
    return `Each person gets ${y} amount of pizza`;
}
console.log(pizza(4));
console.log(pizza(3));

const whatever = arrowmyFunction => {
    const x = num1 - num2
    return (x);
};
console.log(whatever(num1=2, num2=4));



//CLASS EXPRESSION
const PersonC1 = class {
constructor (firstname,ssn){
this.firstname=firstname;
this.ssn=ssn;
}
getName(){
    return this.firstname;
}
}

const governor = new PersonC1(`Governor`,`2000`);
const governor2 = new PersonC1(`Governor`,`2000`);
console.log(governor.getName());

// CLASS DECLARATION
//class PersonC2 {

//}
   
class Person2 {
    constructor (name,job,age){
        this.name=name;
        this.job=job;
        this.age=age;
    
    }
    exercise(){
        console.log(`Let's Workout`);
    }
    fetchJob(){
        console.log(`This person's name is ${this.name} and they work for ${this.job}`);
    }
}

class Programmer extends Person2{
        
    constructor(name,job,age,givenLanguages){
        this.name=super.name;
        this.job=super.job;
        this.age=super.age;
        this.busy=true;
        this.languages=givenLanguages;
    }
    completeTask(){
    this.busy=false;
    }
    acceptNewTask(){
    this.busy=true;
    }
    offerNewTask(){
        if(this.busy==true){
            console.log(`We can't take any additional requests right now`);
        } else {
            console.log(`How can we help?`);
        }
    } 
    learnLanguage(newlanguage){
        this.languages.push(newlanguage);
    }
    listLanguage(){
        this.languages.list();
    }
}

const governorB =  new Person2(`Governor`, `Tech`, 22);
console.log(governorB.exercise());
