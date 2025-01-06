/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = (element)=>{

    element.innerHTML = 'Loading...'
    const renderValue = (value) =>{
        element.innerHTML = value;
    }

    Promise.race([slowPromise(),
                  mediumPromise(),
                  fastPromise(),
                ]).then( renderValue )

    
}

//esta es una funcion que devuelve una promesa
const slowPromise = () => new Promise(resolve =>{
    setTimeout(() => {
        resolve('Slow promise');
    }, 2000);
})

const mediumPromise = () => new Promise(resolve =>{
    setTimeout(() => {
        resolve('Medium promise');
    }, 1500);
})

const fastPromise = () => new Promise(resolve =>{
    setTimeout(() => {
        resolve('Fast promise');
    }, 1000);
})