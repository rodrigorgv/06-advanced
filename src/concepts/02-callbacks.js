import {heroes} from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element)=>{
    const id = '5d86371fd55e2e2a30fe1cc4x';
    console.log('callbacksComponent');
    findHero(id,(error, heroe) =>{
        //--MANEJO DE ERRORES EN CALLBACKS #1
        //element.innerHTML = heroe?.name || 'No hay heroe';
        if (error){
            element.innerHTML = error;    
        }

        element.innerHTML = heroe.name;
    });
}
/**
 * 
 * @param {String} id 
 * @param { (error: String|null, hero:Object)=>void } callback 
 */
const findHero = (id, callback) =>{
    const hero= heroes.find(hero => hero.id === id);

    if (!hero){
        callback(`Hero with id ${id} not found`);
        return; //undefined
    }
//añadimos null porque segun nuestra docu, el primer valor será un error, el segundo es el objeto
    callback( null,hero );
}