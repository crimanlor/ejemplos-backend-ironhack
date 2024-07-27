function concatenateStrings(s1, s2) {
    console.log(typeof s2);
    if (!(typeof s1 == 'string') || !(typeof s2 == 'string')) {
        // el uso de 'throw' termina inmediatamente la ejecución de la función
        
        throw new Error("Both arguments must be strings.")
    }

    return `${s1} ${s2}`
}

const person = {
    fistName: "John",
    lastName: "Walker",
    age: 24,
    hobbies: ['walk', 'hunt', 'drink alcohol']
}

console.log(concatenateStrings(person.fistName, person.hobbies));