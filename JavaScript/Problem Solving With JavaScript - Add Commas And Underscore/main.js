function addCommasAnderscore(num) {
    //convert to string
    //let result = num.toString();
    //let result = num.toLocaleString('ar-EG');
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
    let result = num.toLocaleString();

    //convert to array
    result = result.split("");

    //update the last comma value
    result[result.length - 4] = "_";

    //convert to string
    result = result.join("");

    return result;
}

console.log(addCommasAnderscore(120510650));

//try another solution with ReqExp