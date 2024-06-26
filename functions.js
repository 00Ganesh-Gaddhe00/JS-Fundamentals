//Q. calculate the area, diameter, circumference of the circle of the radius of the given array

const radius = [2, 5, 8, 3, 8, 7, 1]


function areacal(arr) {
    let res = []

    for (let i = 0; i < arr.length; i++) {
        const area = 3.14 * arr[i] * arr[i]
        res.push(area);
    }
    return res
}

function diameter(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        const area = 2 * arr[i]
        res.push(area);
    }
    return res
}

function circumference(arr) {
    let res = []

    for (let i = 0; i < arr.length; i++) {
        const area = 2 * 3.14 * arr[i]
        res.push(area);
    }
    return res
}

const area = areacal(radius)
const dia = diameter(radius)
const circum = circumference(radius)

// console.log(area)
// console.log(dia)
// console.log(circum)

/////betterway of writing the same question using callbacks and Higherorderfunctions


function circleCalculations(arr, CB) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(CB(arr[i]))
    }
    return res
}

function areaCal(r) {
    return 3.14 * r * r
}

function diaCal(r) {
    return 2 * r
}

function circumCal(r) {
    return 2 * 3.14 * r
}

// console.log(circleCalculations(radius, areaCal))
// console.log(circleCalculations(radius, diaCal))
// console.log(circleCalculations(radius, circumCal))

/////using Map method: prewitten function/////////////////////////////////////////////////////////////

// console.log(radius.map(areaCal))
// console.log(radius.map(diaCal))
// console.log(radius.map(circumCal))

//OR



let ar = radius.map(function areaCal(r) {
    return 3.14 * r * r
}
)

// console.log(ar)


//////////////// Filter Method //////////////////

let numbers = [ 2, 3, 8, 9, 7, 4, 5, 1, 92];

let even = numbers.filter(function(num){
    return num%2==1
})

// console.log(even)

/////////////////// Reduce Method /////////////

let Numbers = [ 2, 2, 4, 2]

function Calsum(arr){
    let res = 0

    for(let i=0; i<arr.length; i++){
        res = res+arr[i]
    }
    return res
}

// let sum = Calsum(Numbers)
// console.log(sum)
function product(acc, num){
    return acc*num
}


let sum = Numbers.reduce(function(acc,num){
    return acc+num
}, 0)

console.log(sum)

let mult = Numbers.reduce(product,1)

console.log(mult)




