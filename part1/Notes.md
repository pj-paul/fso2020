During this course the use of var is ill-advised and you should stick with using const and let! 

# JS Objects
- Declared like this
    ```
    const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    }

    const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
    }

    const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
    }
    ```
- Object attributes are accessed via the dot notation or the brackets notation
    ```
    console.log(object3.name.first)
    console.log(object3['name]['first])
    ```
- Object attributes can be added via the dot notation or the brackets notation. 
    - Brackets notation to be used when attributes have spaces in their names. 
        - Eg: `object3.name['secret name']`


# Arrow function
- Defined like this.
    ```
    const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
    }
    ```