function mengelompokkanAngka(array) {
    var temp = [10, 11, 12];
    var tampung = [];
    
    for (var index = 0; index < temp.length ; index++) {
        tampung.push([]);
    }  
    for (let j = 0; j < array.length; j++) {
        if (array[j] % 3 === 0) {
            tampung[2].push(array[j]);
        }else if(array[j] % 2 === 0){
            tampung[0].push(array[j]);
        }else if (array[j] % 2 === 1){
            tampung[1].push(array[j]);
        }
    }
    return tampung;
}
// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6]));
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); 
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); 
console.log(mengelompokkanAngka([])); 