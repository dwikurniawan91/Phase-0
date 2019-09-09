function palindrome(num) {
    if(!num) return 0;
    num++;
    while (true) {
        let  cekPalindrome = num === Number(num.toString().split('').reverse().join(''));
        if(!cekPalindrome){
            num++;
        }else{
            return num;
        }
    }
}

console.log(palindrome(82));
console.log(palindrome(81002));
console.log(palindrome(102657786));
