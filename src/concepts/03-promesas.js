import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element)=>{

    const renderHero = ( hero ) =>{
        element.innerHTML = hero.name;
    }

    const renderError = ( error ) =>{
        element.innerHTML = `
        <h1>ERROR:</h1>
        <h3>${ error }</h3>`;
    }

    const id1 = "5d86371fd55e2e2a30fe1ccb";
    //--OPCION A
    //findHero(id1).then( argumento => renderHero(argumento));
    //--OPCION B //Por defecto se manda el primer argumento que existe 
    findHero(id1)
        .then( renderHero )
        .catch( renderError )
                
    

}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) =>{
    //las promesas reciben un callback y dos argumentos
    //--resolve tendra el resultado exitoso de nuestra promesa
    //--reject tendrá el resultado de una promesa fallida 
    return new Promise((resolve, reject) =>{
        
        const hero = heroes.find(hero => hero.id === id);
        if ( hero ){
            resolve( hero );
            return
        }

        reject(`hero with id ${id} not found`)

    });
}