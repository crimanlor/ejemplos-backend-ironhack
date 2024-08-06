class Animal {
    constructor(name, lifeExpectancy) {
        this.name = name;
        this.lifeExpectancy = lifeExpectancy;
        this.isDead = false;
    }

    // todos los animales pueden morir
    setDead() {
        this.isDead = true;
    }

    emitSound() {
        return "Generic sound";
    }

    // Comparar la esperanza de vida de dos Animal.
    // Si animal1 tiene más esperanza de vida: devolver un 1
    // Si animal2 tiene más esperanza de vida: devolver un -1
    // Si ambos animales tienen la misma esperanza de vida: dovolver un 0
    static compareLifeExpectancy(animal1, animal2) {
        if (animal1.lifeExpectancy > animal2.lifeExpectancy) {
            return 1;
        }
        if (animal1.lifeExpectancy < animal2.lifeExpectancy) {
            return -1
        }

        return 0;
    }
}

// Definir tres subclases

// La primera subclase que defino es la clase Humano
// Los humanos heredan de la clase Animal (porque un Humano también es un animal)
// Sin embargo, vamos a poner propiedades específicas de los humanos en su clase y métodos específicos

class Human extends Animal {
    constructor(name, isWorking) {
        // Método especial para inicializar nuestra superclase. La superclase es la clase de quien heredamos
        super(name, 84);
        this.isWorking = isWorking;
        this.numFeet = 2;
    }

    // overwrite method (sobreescrir un método)
    emitSound() {
        return "Hablar: bla bla bla";
    }
}

const alejandro = new Human('Alejandro Sanz', true);
console.log(alejandro)

class Cat extends Animal {
    constructor(name, furColour) {
        // el método super deberías pasarle a la super clase el valor de todas las propiedades de la clase Animal
        super(name, 15);
        this.furColour = furColour;
        this.numFeet = 4;
    }

    emitSound() {
        return "Meoowww !!"
    }
}

const loki = new Cat('Loki', 'Black and white');
console.log(loki.emitSound())
console.log(loki);

const hitler = new Human('Hitler', true);
hitler.setDead();
console.log(hitler);

// Usar el método estático para comparar dos animales
const compare_1 = Animal.compareLifeExpectancy(alejandro, loki);
console.log("Alejandor sanz y loki" , compare_1); // 1

// Comparar a Alejandro sanz y a Hitler
const compare_2 = Animal.compareLifeExpectancy(alejandro, hitler);
console.log("Alejandor sanz y Hitler" , compare_2); // 0
