// EJERCICIOS FUNCIONES FLECHA

    // 1️⃣ DESTRUCTURING // 
    // EJERCICIO 1// Dado el siguiente objeto: 
    const empleados = [
        { name: "Luis", email: "Luis@gmail.com" },
        { name: "Ana", email: "Ana@gmail.com" },
        { name: "Andrea", email: "Andrea@gmail.com" },
    ];
        // 1.1 // Extrae la empleada Ana con todos sus datos personales:
        const [persona1,persona2,persona3] = empleados
            console.log(persona2)
        // 1.2 // Extrae el email del empleado Luis --> Luis@gmail.com
            console.log(persona1.email)

    // EJERCICIO 2// Dado el siguiente objeto: 
    const pokemon = {
        name: "Bulbasaur",
        type: "grass",
        ability: {
            "primary": "Overgrow",
            "hidden": "Chlorophyll"
        },
        stats: {
            hp: 45,
            attack: 49,
            deffense: 59,
            speed: 45
        },
        moves: [
            "Growl", "Tackle", "Vine Whip", "Razor Leaf"
        ]
    }
        // 2.1 // Cambia el nombre de la propiedad “name” por “nombre”.
        const {name:nombre, type, ability, stats, moves} = pokemon

        // 2.2 // Extrae el nombre del pokémon.
        console.log(nombre)

        // 2.3 // Extrae el tipo de pokémon que es.
        console.log(type)

        // 2.4 // Extrae el movimiento “Tackle”.
        const [move1, move2, move3, move4] = moves
        console.log(move2)
    
    // 2️⃣ SPREAD/REST // 
    // EJERCICIO 3 // Dado el siguiente objeto:
    const pikachu = {
        name: "Pikachu",
        type: "electric",
        ability: {
            "primary": "Static",
            "hidden": "Lightning rod"
        },
        stats: {
            hp: 35,
            attack: 55,
            deffense: 40,
            speed: 90
        },
        moves: [
            "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
        ],
    }
        // 3.1 // Mergea este 👆🏽 pokémon con el pokémon del ejercicio anterior
        const mergePokemon = {...pokemon,...pikachu}
        console.log(mergePokemon)
        
        // 3.2 ❌ //Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
        function sumEveryOther(...everyOther) {
            let sum = 0
            for (let i = 0; i < everyOther.length; i++) {
                const element = everyOther[i];
                sum += element;
                console.log(element);
            }
            return sum;
        };
        console.log(sumEveryOther(6, 8, 2, 3, 1))
        console.log(sumEveryOther(11, 3, 12))



        
        // 3.3 // Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings) y retorne la suma solo de los números.
        function addOnlyNums(...everyArguments) {
            let sum = 0;
            for (let i = 0; i < everyArguments.length; i++) {
                const element = everyArguments[i];
                if (typeof element === 'number') {
                    sum += element;
                }
            }
            return sum;
        }
        
        console.log(addOnlyNums(1, 'perro', 2, 4)); // 7

            // ARROW FUNCTION //
            const addOnlyNums = (...everyArguments) => {
                let sum = 0;
                for (let i = 0; i < everyArguments.length; i++) {
                  const element = everyArguments[i];
                  if (typeof element === 'number') {
                    sum += element;
                  }
                }
                return sum;
              };
                  
        // 3.4 // Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
        function countTheArgs(...everyArgs) { 
            return everyArgs.length;
        }
        console.log(countTheArgs('gato', 'perro'));
        console.log(countTheArgs('gato', 'perro', 'pollo', 'oso'));
            
            // ARROW FUNCTION //
            const countTheArgs = (...everyArgs) => {
                return everyArgs.length;
            }
            console.log(countTheArgs('gato', 'perro'));
            console.log(countTheArgs('gato', 'perro', 'pollo', 'oso'));


        // 3.5 // Escribe una función llamada combineTwoArrays que reciba dos array como argumentos y devuelva solo un array que combine los dos (usando Spread Operator).
        function combineTwoArrays (array1, array2) {
            const combine = [...array1, ...array2];
            return combine
        }
        const result = combineTwoArrays ([1, 2, 3],[4, 5, 6]);
        console.log(result);

            // ARROW FUNCTION //
            const combineTwoArrays = (array1, array2) => {
                const combine = [...array1, ...array2];
                return combine;
              }
              
              const result = combineTwoArrays([1, 2, 3], [4, 5, 6]);
              console.log(result);
              

    // ⭐️ EXTRAS // 
    // EJERCICIO 1// Dado el siguiente objeto: 
    const HIGH_TEMPERATURES = {
        yesterday: 30,
        today: 35,
        tomorrow: 32,
      };
           
        // 3.5 // Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana.
          const { yesterday: maximaAyer, today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;
          
          console.log(maximaHoy);
          console.log(maximaManana);
          
        // 3.6 // Escribe una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
        function onlyUniques (...args){
           const uniqueArray = args
           .filter((value, index) => {
            return args
           .indexOf(value) === index;
           });
           return uniqueArray;
        }
          
        console.log(onlyUniques('gato', 'pollo', 'cerdo', 'cerdo')); //['gato', 'pollo', 'cerdo']
        console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8));  //[1, 2, 3, 6, 7, 8]
        
        // 3.7 // Escribe una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
        combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1]) // [3, 6, 7, 8, 2, 7, 3, 1]
        combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

        // 3.8 // Escribe una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.


