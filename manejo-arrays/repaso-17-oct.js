
/**
 * Task
You are given a array of objetos containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)
 */
function myLanguages(results) {
    // Hay usar 3 metodos de array (hay que combinarlos)
    // 1. Uno para filtrar
    // 2. Otro para ordenar
    // 3. Otro para transformar un array de objetos en un array de strings
    const maxSixtyScores = results.filter(object => object.score >= 60)
    const orderedScores = maxSixtyScores.sort((a,b) => ( b.score - a.score ))
    const languagesArray = orderedScores.map(object => object.language)
    return languagesArray

    // Shortest way
    // return results.filter(object => object.score >= 60).sort((a,b) => ( b.score - a.score )).map(object => object.language)
}

// Llamadas a la función con un array de objetos
console.log(myLanguages([
    { language: "Java", score: 10 },
    { language: "Ruby", score: 80 },
    { language: "Python", score: 65 }
]));
// Resultado esperado: ["Ruby", "Python"]

console.log(myLanguages([
    { language: "Hindi", score: 60 },
    { language: "Greek", score: 71 },
    { language: "Dutch", score: 93 }
]));
// Resultado esperado: ["Dutch", "Greek", "Hindi"]

console.log(myLanguages([
    { language: "C++", score: 50 },
    { language: "ASM", score: 10 },
    { language: "Haskell", score: 20 }
]));
// Resultado esperado: []