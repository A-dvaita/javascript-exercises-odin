const reverseString = (string) => {
    let newString = "";
    let myString = string;
    let length = myString.length;
    let lastChar = myString.charAt(length - 1);
    while(length>=0){
        newString += lastChar;
        length = length - 1;
        lastChar = myString.charAt(length-1);
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
