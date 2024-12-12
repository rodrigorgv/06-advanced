import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element)=>{

    const renderHero = ( hero ) =>{
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = (hero1, hero2) =>{
        element.innerHTML = `
        <h3>${hero1.name}</h3>
        <h3>${hero2.name}</h3>
        `
    }

    const renderError = ( error ) =>{
        element.innerHTML = `
        <h1>ERROR:</h1>
        <h3>${ error }</h3>`;
    }

    const id1 = "5d86371fd55e2e2a30fe1ccb";
    const id2 = "5d86371f25a058e5b1c8a65e";
    //--OPCION A
    //findHero(id1).then( argumento => renderHero(argumento));
    //--OPCION B //Por defecto se manda el primer argumento que existe 

//// METODO 1 PARA HACERLO ////
/*    let hero1,hero2;
    findHero(id1)
        .then( (hero1)=>{
            findHero(id2)
                .then(hero2 =>{
                    renderTwoHeroes(hero1,hero2);
                })
                .catch(renderError);
        } )
        .catch( renderError )
                
  */

//// METODO 2 PARA HACERLO ////        
//se hace como una cadena de promesas 
/*let hero1;
findHero(id1)
        .then(hero =>{
            hero1 = hero
            //hacemos esto ya que la promesa nos retorna otra promesa. y podemos hacer que se ejecute la busqueda
            return findHero(id2)            
        }).then(hero2 =>{
            renderTwoHeroes(hero1,hero2);
        })
        .catch(renderError);
*/


/////////// HACIENDO USO DE PROMISE.ALL ///////////
//ojo, solo sirve para ejecutar promesas independientes
//si necesitamos algo consecutivo es mejor trabajarlo con los otros metodos
Promise.all([
    findHero(id1),
    findHero(id2)
])
    .then( ([hero1,hero2]) => renderTwoHeroes(hero1,hero2))
    .catch(renderError)        
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