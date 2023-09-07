function Sum (a,b){
    console.log(a+b);
}
function Substract (a,b){
    console.log(a-b);
}

// For exporting single function
module.exports = Sum;

// For exporting multiple functions
module.exports = {
    Sum,
    Substract   
}