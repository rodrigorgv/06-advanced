/**
 * 
 * @param {HTMLDivElement} element 
 */
export const aysncAwait2Component =  async(element)=>{

    console.time('start');

    // const value1 =await slowPromise();
    // const value2 =await mediumPromise();
    // const value3 =await fastPromise();

    const [value1, value2, value3] = await Promise.all([slowPromise(), mediumPromise(), fastPromise()]);

    element.innerHTML = `
        value1: ${value1} <br>
        value2: ${value2} <br>
        value3: ${value3} <br>
    `;

    console.timeEnd('start');

}

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