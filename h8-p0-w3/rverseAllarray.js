function reverseAll(array) {
    var res = []
    for (let i = array.length-1; i >= 0; i--) {
        var str = ''
        for (let j = array[i].length-1; j >= 0; j--) {
           str += array[i][j];
            
        }
        res.push(str);
    }
    return res; 
}


console.log(reverseAll(['dimitri', 'sergei', 'alexei']));
// ['iexela', 'iegres', 'irtimid']