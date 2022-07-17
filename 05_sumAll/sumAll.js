const sumAll = function(x, y) {
if (typeof x != "number" || typeof y != "number") {return "ERROR"}
if (x<0 || y<0) {return "ERROR"}
if (y<x){
    return x*(x+1)/2 - y*(y-1)/2
} else if (y>x) {
    return y*(y+1)/2 - x*(x-1)/2 
} else{
    return "ERROR"
}

};

// Do not edit below this line
module.exports = sumAll;
