function groupAnimals(animals) {
  animals.sort()
  var result = [];
  var temp = [];
  for (let i = 0; i < animals.length; i++) {
      temp.push(animals[i]);
      if (animals[i+1]) {
          if (animals[i+1][0] !== animals[i][0]) {
              result.push(temp);
              temp =[];
          }
      }
}
  result.push(temp);
return result;      
}

  
  // TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
