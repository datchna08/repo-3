// Reverse String
// method-1
// let str = "hello"
// const reverse = str.split('').reverse().join('')
// console.log(reverse)

// reverse string - method2
// function name(str){
//     let rev =''
//     for(let i= str.length-1;i>=0;i--){
//         rev += str[i]
//     }
//     return rev
// }
// console.log(name('hello'))

// Palindrome - module1
// let str = "madam"
// let reverse = str.split('').reverse().join('')
// if(str === reverse){
//     console.log('palindrome')
// }else{
//     console.log('not a palindrome')
// }

// palindrome module2
// function palindrome(str){
//     let rev = ''
//     for(let i=str.length-1;i>=0;i--){
//         rev += str[i]
//     }
//     return rev === str
// }
// console.log(palindrome('madam'))

// Anagram
// function isAnagram(str1,str2){
//     return str1.split('').sort().join('') === str2.split('').sort().join('')
// }
// console.log(isAnagram('listen', 'silent'));

// Character Count
// function charcount(str,char){
//     let count =0;
//     for(c of str){
//         if(c=== char){
//             count ++
//         }
//     }
//     return count
// }
// console.log(charcount('banana','a'))

// Count Vowels
function vowelCount(str){
    let count =0;
    for(char of str.toLowerCase()){
        if('aeiou'.includes(char)){
            count ++
        }
    }
    return count
}
console.log(vowelCount('bananaa'))