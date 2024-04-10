
// let regex =/apple/gi // pattern 1 // g for global // i for no case sensirive ness
// let newRegex = new RegExp('apple')// pattern 2

// let text = "i eat Apple every day & Apple";
// let replacetext = text.replace(regex, 'mango')
// console.log(regex.test(text))
// console.log(newRegex.test(text))
// console.log(text.match(newRegex))// gives info about the particuklar regex

// console.log(text.replace(regex, 'mango'))
// console.log(replacetext)
// console.log (text)

// Anchor and Character classes
// let pattern = /[aeiou]/gi
// let text1 = "i eat Apple every day & Apple";
// console.log(pattern.test(text1))
// console.log(text1.match(pattern))


// let pattern = /^i/ // startthe ing ma string check kare
//let text1 = "i eat Apple every day & Apple";
// console.log(pattern.test(text1))
// console.log(text1.match(pattern))

// let pattern1 = /Apple$/gi // end ma string check kare
// let text1 = "i eat Apple every day & Apple";
// console.log(pattern1.test(text1))
// console.log(text1.match(pattern1))

// let pattern1 = /\bApple\b/gi // between ma string check kare
// let text1 = "i eat Apple every day & Apple";
// console.log(pattern1.test(text1))
// console.log(text1.match(pattern1))


// let pattern1 = /[a-z]/gi // characters check
// let pattern1 = /[0-9]/gi 
let pattern1 = /[^0-9]/gi 
let text1 = "i eat Apple every day & Apple";
console.log(pattern1.test(text1))
console.log(text1.match(pattern1))

