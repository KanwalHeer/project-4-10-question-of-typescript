//10 Question of typescript::
//Question # 01::::::::::::::
//write a typescript function to fine intersection of two arrays .

function findIntersection<T>(arr1:T[],arr2:T[]):T[] {
    const intersection :T[]=[]
    for(const item1 of arr1){
        for(const item2 of arr2){
            if (item1 ===item2) {
                intersection.push(item1)
            }
        }
    }
    return intersection
}
let array1 = [1,4,6,3,7]
let array2 = [6,8,2,5,4,3]
let result = findIntersection(array1,array2)
console.log(result)

//other example:
function findIntersection2<T>(ar1:T[],ar2: T[]):T[] {
    const set1 = new Set(ar1)
    const intersection :T[]=[]
    for(const item of ar2){
        if(set1.has(item)) {
            intersection.push(item)
            set1.delete(item)
        }
    }
   return intersection 
}
let ar1 = [1,4,6,3,7]
let ar2 = [6,8,2,5,4,3]
const Result = findIntersection2(ar1,ar2)
console.log(Result)

//Question # 02::::::::
//write a typescript function to check if two strings are anagrams of each other.
//SOLUTION:::::
function anagrams(str1:string,str2:string):boolean {
   const cleanSring1= str1.replace(/\s/g,'').toLowerCase()
   const cleanSring2= str2.replace(/\s/g,'').toLowerCase()

   if (cleanSring1.length !==cleanSring2.length) {
    return false
   }

   const makestring1 = cleanSring1.split('').sort().join('')
   const makestring2 = cleanSring2.split('').sort().join('')
return makestring1 == makestring2
}
 let string1 = "litsen"
 let string2 = "silent"
 console.log(anagrams(string1,string2))

 //QUESTION # 03:
 //write a typescript function to flatten a nasted array.
 //SOLUTION ::::::::::
 function flattenNasted<T>(arrays:(T | T[])[]){
   const flattenArray:T[]= []

   function flaten(arrays:(T|T[])[]):void {
    for (const items of arrays){
        if (Array.isArray(items)) {
            flaten(items)
        }else {
            flattenArray.push(items)
        }
    }
   }
  flaten(arrays)
  return flattenArray
    
 }
 let nastedArray = [1,[2,3],[4,[5,6]]]
 let flattenArrays = flattenNasted(nastedArray)
 console.log(flattenArrays)
//other example:
function fna<T>(str1:(T|T[])[]) {
    const flaatenArray1:T[]=[]

    function anf(str1:(T | T[])[]) {
        for(const item of str1){
           if (Array.isArray(item)) {
              anf(item)
           } else {
            flaatenArray1.push(item)
           } 
        }
    }
    anf(str1)
    return flaatenArray1
}
let nastedArray1 = ["heer",["kanwal","abiha"],["fiza",["rabia","mahnoor"]]]
 let flattenArrays1 = fna(nastedArray1)
 console.log(flattenArrays1)

 //Question # 04:::::::::
 //write typescript function to generate a random number within a given range.
 function findRandomNumber(max:number,min:number):number {
    if (min >= max) {
        throw new Error("ERROR")
 }
 return Math.floor(Math.random() * (max - min +1)) +min
}
let max = 10
let min = 0
const randomNumber = findRandomNumber(max,min)
console.log(` random number is ${randomNumber}`)

//QUESTION # 05::::
//write a typescript function to find the median of an array of numbers.
function findMedian(num:number[]):number | null{
    num.sort((a,b)=>a-b)
     let length = num.length
    if (length === 0) {
        return null
    }
    if (length % 2 !==0) {
        return num[Math.floor(length/2)]
    }else{
        const midleIndex = length/2
        return (num[midleIndex-1]+num[midleIndex])/2
    }

}
let num1:number[] = [2,3,5,6,1]
const median1 = findMedian(num1)
console.log(median1)
let num2:number[] = [20,30,50,60,]
const median2 = findMedian(num2)
console.log(median2)

//QUESTION # 06::::::::
//Write typescript function toperform binary search on asorted array.
//SOLUTION:::::::::::::::
function findMid(numbers:number[],target:number):number {
    let left = 0
    let right = numbers.length -1

    while (left <= right) {
        const mid = Math.floor((left+right)/ 2)
        if (numbers[mid]=== target) {
            return mid
        }else if (numbers[mid]< target) {
            left = mid + 1
        }else{
            right = mid -1
        }
    }
    return -1
}
const numb:number[] = [1,2,3,4,5,6,7,8,9]
const targets = 8
const midOfArray =findMid(numb,targets)
console.log(midOfArray)

//other example:
function findIndex(sortedArray:number[],target1:number):number {
    let left = 0
    let right = sortedArray.length -1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (sortedArray[mid] === target1) {
            return mid
        }else if (sortedArray[mid] < target1 ) {
            left  = mid + 1
        }else{
            right = mid -1
        }
    }
    return -1
}
let numbers:number[]= [1,2,3,4,5,6,7,8,9,10]
let target1 = 5
let index = findIndex(numbers,target1)
console.log(index)

//QUESTION # 07:::::::::
//creat typescript class representing a stack with method like push , pop ,and peek.
class stock<T> {
   private item:T[]
   constructor(){
    this.item = []
   }
   push(element:T){
    this.item.push(element)
   }
   pop():T | undefined{
    return this.item.pop()
   }
   peek():T|undefined{
    return this.item[this.item.length -1]
   }
}
let stockIs = new stock<number>()
stockIs.push(1)
stockIs.push(2)
stockIs.push(3)
console.log("stocks are these")
console.log(stockIs.peek())
console.log(stockIs.pop())
console.log(stockIs.pop())
console.log(stockIs.peek())

//QUESTION # 08::::
//write a typescript function to find the largest prime factor of a given string.
function largestPrimNumber(num:number):number {
    let largestNumber = 1
    for (let factor = 2; factor <= num; factor++) {
        while (num % factor === 0) {
            largestNumber = factor
            num /=factor 
        }
        
    }
   return largestNumber
}
let num = 30
console.log("the largest prime number is")
console.log(largestPrimNumber(num))

//QUESTION # 9::::::::
//Write a typescript function to generate all permutation of a given string.
//SOLUTION::::::
function pstring(input:string):string[] {
    const result :string[]=[]
    if (input.length ===1) {
        result.push(input)
        return result
    }
    for (let index = 0; index < input.length; index++) {
        const currentChar = input[index];

        const remainingString =input.slice(0,index)+ input.slice(index +1)
        const perString =pstring(remainingString)
        for(const permutation of perString){
            result.push(currentChar + permutation)
        }
        
    }
    return result
}
 let inputString = "abc"
 let permutation = pstring(inputString)
 console.log(permutation)
 
 //QUESTION # 10::::
 //Implement a typescript function to calculate the nth fibonacci number.
 //SOLUTION::::::::
 function fibonacci(n:number):number {
    if (n <= 1) {
        return n
    }else{
        return fibonacci(n-1)+fibonacci(n-2)
    }
 }
 const n = 10
 const fibonacciNumber = fibonacci(n)
 console.log(fibonacciNumber)
 //                *********************************