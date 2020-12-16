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
console.log(rest)

const object3 = {
    name: {
        first: 'Paul',
        last: 'PJ'
    },
    grades: ['A', 'B', 'C', 'D'],
    age: 27
}

console.log([object3.name.first + object3.name.last])
console.log(object3['name']['first'])