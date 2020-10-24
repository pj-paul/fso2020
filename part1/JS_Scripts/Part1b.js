const t = [1,2,3]

console.log(t.length)

t.push(5)

t.forEach(value =>{
    console.log(value)
    console.log('\n')
})

const t1 = t.map(p => p*3)

console.log(t1)

const t3 = [1,2,3,4,5]
const [first, second, ...rest] = t3

console.log(first)