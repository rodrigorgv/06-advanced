import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async(element)=>{

    console.log('asyncAwaitComponent');
    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f9f80b591f499df32';
    try{
        const hero1  = await findHero(id1);
        const hero2  = await findHero(id2);
        element.innerHTML = `${hero1} / ${hero2}`;
    }catch(error){
        element.innerHTML = error;
    }
}

/**
 * 
 * @param {String} id 
 */
const findHero = async(id) =>{

    const hero = heroes.find(hero => hero.id === id)
    if (!hero)
        throw 'Hero not found';

    return hero.name;
}