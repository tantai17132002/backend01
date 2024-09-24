// 1 is bird 2 is dog
const animals = [
    { id: 1, name: 'Sparrow', type: 0, wingSpan: 25, isFly: true },
    { id: 2, name: 'Eagle', type: 0, wingSpan: 200, isFly: true },
    { id: 3, name: 'Parrot', type: 0, wingSpan: 30, isFly: true },
    { id: 4, name: 'Penguin', type: 0, wingSpan: 60, isFly: false },
    { id: 5, name: 'Owl', type: 0, wingSpan: 150, isFly: true },
    { id: 6, name: 'Bulldog', type: 1, isTrained: true },
    { id: 7, name: 'Beagle', type: 1, isTrained: false },
    { id: 8, name: 'Labrador', type: 1, isTrained: true },
    { id: 9, name: 'Poodle', type: 1}, 
    { id: 10, name: 'German Shepherd', type: 1, isTrained: true }
  ];
  
  const hello = (name) => new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve(`Hello ${name}`)
      }, Math.random()*1000);
  });
  
  const finalAnimals = [
    {
        id: 10,
        name: 'German Shepherd',
        type: 1,
        isTrained: true,
        tags: {
           test1: 'test1',
           test2: 2,
           test3: false,
        },
        children: [
            {
                id: 11,
                name: 'German Shepherd1',
            },
            {
                id: 12,
                name: 'German Shepherd1',
                isTrained: true
            },
        ]
    }
]

//1. Function returns array animals
// const lodashs = require('lodash');
// const getAnimals = () => lodashs.cloneDeep(a);
const getAnimals = () => JSON.parse(JSON.stringify(animals))
console.log("getAnimals:", getAnimals());
// let animalTest = getAnimals();
// animalTest[0].id = null;
// console.log(animals)


// 2. Function to filter animals by type and remove 'type' property
const getAnimal = (type) => {
    // Check if type is not a number
    if (typeof type !== 'number') {
        // throw: throws the error out of the current scope and moves it to where the error was caught, If there is no try-catch, the program will stop  
        throw new Error('Invalid type: type must be a number')
    }
    // Filter elements by type and remove 'type' attribute
    return animals
    .filter(animal => animal.type === type) 
    //Destructuring(separate type from object) and rest syntax (rest of the object into rest variable)
    .map(({type, ...rest}) => rest); //  Remove 'type' property
};
//0(bird); 1(dog)
try{
    console.log("Type=Bird:", getAnimal(0)); 
} catch (error){  
    console.error('Error:', error.message); 
}
try{
    console.log("Type=Dog:", getAnimal(1)); 
} catch (error){
    console.error('Error:', error.message)
}

// 3. async function takes name and returns string array
const getHelloName = async () => {

    //a) map
    //Go through the animals array to get the names
    const Promises = animals.map(animal => hello(animal.name));
    // //Use Promise.all to convert all completed promises and return the resulting array
    const results = await Promise.all(Promises);

    // //b) forEach
    // const results = []
    // const promises = []; 
    // animals.forEach(animal => {
    //     const promise = hello(animal.name).then(result => { //then: wait for promise completion
    //         results.push(result) //save results
    //     });
    //     promises.push(promise);
    // });
    // await Promise.all(promises);

    return results; 
};
(async () => {
    const helloName = await getHelloName();
    console.log(helloName)
})();


