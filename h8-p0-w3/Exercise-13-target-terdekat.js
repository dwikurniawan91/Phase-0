function targetTerdekat(arr) {
    var o = [];
    var x = [];
    // o = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 'o'){
            o.push(i);
        }else if(arr[i] === 'x'){
            x.push(i);
        }
    }
    var hasil = 0;
    if (o[0] > x[x.length-1]) {
        hasil +=  o[0] - x[x.length-1];
    }else if(x[x.length-1] > o[0]){
        hasil += x[0] - o[0];
    }
    return hasil;
}
 
   // TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); //3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
