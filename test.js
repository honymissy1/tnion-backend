const median = (arr) =>{
  let halfIndex = Math.floor(arr.length / 2);

  if(arr.length % 2===0){
    return (arr[halfIndex - 1] + arr[halfIndex])/2.0;
  }
  return arr[halfIndex]
}

// median([1,8,10,12,13,14]);
console.log(median([1,8,10,12,13,14,15,16])); 