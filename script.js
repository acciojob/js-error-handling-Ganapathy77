class OutOfRangeError extends Error {
	constructor(args){
		super();
		this.name = "OutOfBoundError";
		this.message = `Expression should only consist of integers and +,-,*,/ characters and not "${args}" `
	}
}

class InvalidExprError extends Error {
    constructor(args){
        super();
        this.name = "InvalidExprError"
        this.message = `Expression should not have an invalid combination of expression " ${args} "`
    }
}

class NoInputError extends Error {
    constructor(args){
        super();
        this.name = "NoInputError"
        this.message = `No input was entered `
    }
}


function evalString(){
	let str = document.getElementById("input").value;
	let strArr = str.split("");
	try{
        if(str.trim() == ""){
            throw new NoInputError()
        }
		strArr.forEach((element)=>{
			let numRegex = /([0-9]+)/
			let operatorRegex = /([\+\-\*\/]+)/
			let spaceRegex = /([0-9]+)/
			if(!(numRegex.test(element) || spaceRegex.test(element) || operatorRegex.test(element))){
				throw new OutOfRangeError(element);
			}
		})
        let mainRegex = /([\-]*[0-9]+[\s]*[\+\_\*\/][\s]*[\-]*[0-9]+$)/

        if(!mainRegex.test(str)){
            throw new InvalidExprError(str)
        }
        alert(`Passed ans is : ${eval(str)}`);
	}
	catch(e){
		alert(e)
	}
}

const button = document.querySelector('button')

button.addEventListener('click' , evalString)