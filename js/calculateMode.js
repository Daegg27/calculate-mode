exports.calculateMode = (originalList) => {

    let newObject = {};
    let finalMode = [];

    // Creates an object
    for (let i = 0; i < originalList.length; i++){
       if (newObject.hasOwnProperty(originalList[i])){
           newObject[originalList[i]]++
       }else{
        newObject[originalList[i]] = 1
       }
    }
    let finalValues = Object.values(newObject);
    // console.log(newObject);

    // Checks if the props value is also the highest value in the array
    for (let prop in newObject){
        if (newObject[prop] == Math.max.apply(0, finalValues)){
            finalMode.push(prop);
        } 
    }
    for (let k = 0; k < finalMode.length; k++){
        if (isNaN(finalMode[k]) == true) continue;
        finalMode[k] = parseInt(finalMode[k]);
    }
    console.log(finalMode);
}
// calculateMode([1,3,4,4,2,1]);
// calculateMode([2,2,1,7,10,12,13]);
// calculateMode([1,10,4,5,3,15,1,8,7,15]);
// calculateMode(["Who", "Hello", "Who"]);