import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {
    const id = '5d86371f25a058e5b1c8a65e';
    const heroIds = heroes.map(hero => hero.id);
    
    const heroPromises = getHeroesAsync ( heroIds );

    //ejecuta todas las promesas pero espera a que todas terminen
    for await( const hero of heroPromises){
        element.innerHTML += `${hero.name} <br>`;
    }
    


}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}