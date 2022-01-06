function productSort(arr){
  let m = new Map();
  
  for(let i = 0; i < arr.length; i++){
    m.set(arr[i], m.get(arr[i]) + 1 || 1);
  }
  
  m = Array.from(m.entries());
  m.sort((a, b) => {
    if(a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  
  let result = [];
  for(let [nums, freq] of m){
    for(let i = 0; i < freq; i++){
      result.push(num);
    }
  }
  return result;
}
