console.log("ES2 Start");
export default function main(){ // only one export default fun can be exist in a single file
    console.log("Main fun.");
}
function add(a,b){
    console.log(a+b);
}

function sub(a,b){
    console.log(a-b);
}

export function fib(){
    console.log("Im Fib Fun");
}
console.log("ES2 End");
export {add,sub};
