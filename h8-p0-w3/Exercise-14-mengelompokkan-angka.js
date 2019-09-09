function mengelompokkanAngka(array) {
    var temp = [];
    var genap = [];
    var ganjil = [];
    var kelipatan3 = [];
    
    for (var index = 0; index < temp.length ; index++) {
        tampung.push([]);
    }  
    for (let j = 0; j < array.length; j++) {
        if (array[j] % 3 === 0) {
            kelipatan3.push(array[j]);
        }else if(array[j] % 2 === 0){
            genap.push(array[j]);
        }else if (array[j] % 2 === 1){
            ganjil.push(array[j]);
        }
    }
    var result = [];
    result.push(genap, ganjil, kelipatan3);
    return result;
}
// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6]));      // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]));   // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); 
console.log(mengelompokkanAngka([]));      // [ [], [], [] ] 