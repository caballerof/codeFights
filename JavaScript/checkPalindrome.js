function checkPalindrome(inputString) {
    var reverseString = inputString.split("").reverse().join("");
    return inputString == reverseString ? true : false;
    // return [...inputString].reverse().join('') === inputString
}