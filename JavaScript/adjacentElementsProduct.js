function adjacentElementsProduct(inputArray) {        
    let arrayResult2 = [];
    for(let i = 0 ; i < inputArray.length - 1; i++){ 
        arrayResult2.push(inputArray[i] * inputArray[i+1]);
    }
    return Math.max(...arrayResult2);
    
    //return Math.max(...arr.slice(1).map((x,i)=>[x*arr[i]]))
}