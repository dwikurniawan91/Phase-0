function pasanganTerbesar(num) {
    var result=[];
    var temp = '';
    var newStr= String(num);
    for (var i = 0; i <= newStr.length; i++) {
        if(temp.length === 2){
            result.push(Number(temp));
            temp = '';
            i -= 2;
        }else{
            temp = temp + newStr[i];
        }
    }
    result.sort(function(a,b){return b-a});
    return result[0];
}
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99