function fact(n) {
  if(n <= 1) return 1
  else {
     ans = n * fact(n - 1)
    return ans
  }

  let revserse 
  while(ans > 0) {
  
    rem = ans % 10
    div = ans / 10
    reverse = rem + reverse * 10
    ans = ans / 10
  }
   
}

console.log(fact(4))