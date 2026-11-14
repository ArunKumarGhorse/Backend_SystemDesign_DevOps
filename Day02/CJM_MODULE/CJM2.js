console.log("Hi this is CJM2 File Code Execution")

const add = function(a,b){
    console.log(a+b);
} 
function sub(a,b){
    console.log(a-b);
}

module.exports = {add,sub};

/*
module{
    exports{
        add:add,
        sub:sub
    }
}
*/