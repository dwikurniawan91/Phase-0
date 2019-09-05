function tentukanDeretAritmatika(arr) {
    var selisihAngka = arr[1] - arr[0];
    isDeretAritmatika = true;
    for (let i = 0; i < arr.length-1; i++) {
        var deretAritmatika = arr[i + 1] - arr[i];
        if(deretAritmatika != selisihAngka){
            isDeretAritmatika = false;
        }
    }
    return isDeretAritmatika;
}
  
 // TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false