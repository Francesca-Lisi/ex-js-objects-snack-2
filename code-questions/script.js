// 🏆 Code Question 1
// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = 'Double Cheese Burger';
// secondBurger.weight = 500;
//
// console.log(hamburger.name); // ?
// console.log(secondBurger.name ); // ?
// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?


//********* RISPOSTA
//In console verranno stampati rispettivamente 'Double Cheese Burger' e 'Double Cheese Burger'.
//L'oggetto all'interno di questo codice è solo 1, in quanto le variabili dichiarate non contengono l'oggetto stesso ma solo il suo riferimento.






// 🏆 Code Question 2
// const hamburger = {
//     name: "Cheese Burger",
//     weight: 250,
//     ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
// };
//
// const secondBurger = {...hamburger};
// secondBurger.ingredients[0] = "Salad";
//
// console.log(hamburger.ingredients[0]); // ?
// console.log(secondBurger.ingredients[0]); // ?
// P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!
// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?


//********* RISPOSTA
//In console verranno stampati rispettivamente "Salad" e "Salad".
//L'oggetto all'interno di questo codice sono 3, in quanto con l'operatore spread a riga 29 del codice abbiamo creato una copia dell'oggetto 'hamburger' e l'array degli ingrdients figura come terzo oggetto .



// 🏆 Code Question 3
// const hamburger = {
//     name: "Cheese Burger",
//     weight: 250,
//     maker: {
//         name: "Anonymous Chef",
//         restaurant: {
//             name: "Hyur's Burgers",
//             address: "Main Street, 123",
//             isOpen: true,
//         },
//         age: 29
//     }
// };
//
// const secondBurger = structuredClone(hamburger);
// const thirdBurger = structuredClone(hamburger);
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

//********* RISPOSTA
// durante l'esecuzione di questo codice otterremo 9 oggetti (rispettivamente hamburger, secondBurger e thirdBurger con i loro oggetti annidati) .


// 🏆 Code Question 4
// const chef = {
//     name: "Chef Hyur",
//     age: 29,
//     makeBurger: (num = 1) => {
//         console.log(`Ecco ${num} hamburger per te!`);
//     },
// }
//
// const restaurant = {
//     name: "Hyur's Burgers",
//     address: {
//         street: 'Main Street',
//         number: 123,
//     },
//     openingDate: new Date(2025, 3, 11),
//     isOpen: false,
// };
// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?


//********* RISPOSTA
// Il metodo migliore per clonare l’oggetto chef è attraverso l'uso dell'operatore Spread(...), perchè ci permette di copiare la funzione contenuta all'interno.
// Il metodo migliore per clonare l’oggetto restaurant è attraverso l'utilizzo di structuredClone() che permette di copiare oggetti complessi restituendoli in maniera corretta (es: new Date)



// 🎯 Code Question 5 (Bonus)
// const hamburger = {
//     name: "Cheese Burger",
//     weight: 250,
//     maker: {
//         name: "Anonymous Chef",
//         restaurant: {
//             name: "Hyur's Burgers",
//             address: "Main Street, 123",
//             isOpen: true,
//         },
//         age: 29
//     }
// };
//
// const newRestaurant = {...hamburger.maker.restaurant};
// newRestaurant.name = "Hyur's II";
// newRestaurant.address = "Second Street, 12";
// const secondBurger = {...hamburger};
// secondBurger.maker.restaurant = newRestaurant;
// secondBurger.maker.name = "Chef Hyur";
//
// console.log(hamburger.maker.name); // ?             "Chef Hyur"
// console.log(secondBurger.maker.name); // ?          "Chef Hyur"
// console.log(hamburger.maker.restaurant.name); // ?   "Hyur's II"
// console.log(secondBurger.maker.restaurant.name); // ?  "Hyur's II"
// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
//********* RISPOSTA
// Durante l'esecuzione di questo codice otterremo 5 oggetti, rispettivamente hamburger, maker, restaurant, newRestaurant e secondBurger.




// 🎯 Code Question 6 (Bonus)
const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            list: [1, 2, 3],
            showAddress: () => {
                console.log("Main Street 123");
                isOpen: true
            }
        },
    }
}
// Qual è il metodo migliore per clonare l’oggetto chef, e perché?

//********* RISPOSTA
// Dal momento che non esiste un metodo diretto che mi permette di copiare un oggetto che presenta oggetti annidati con funzioni al loro interno bisogna utilizzare più operatori Spread annidati tra loro:

// const chefCopy ={
//     ...chef,
//     restaurant: {
//         ...chef.restaurant,
//         address: {
//             ...chef.restaurant.address
//         }
//     }
// }





// 🎯 Snack  (Bonus)
// Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.

function deepCopy(oggetto) {
    if (typeof oggetto !== 'object') {
        return oggetto
    }
    const copia = {}
    for (const key in oggetto) {
        const valore = oggetto[key]
        if (typeof valore !== 'object') {
            copia[key] = valore
        } else if (typeof valore === 'object' && Array.isArray(valore)) {
            copia[key] = valore
        }
        else {
            copia[key] = deepCopy(valore)
        }
    }
    return copia
}

const chefCopia = deepCopy(chef)
console.log(chefCopia)