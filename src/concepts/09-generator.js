/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = (element)=>{

    // const myGenerator = myFirstGeneratorFunction();
    // console.log(myGenerator.next());    
    const genId = idGeneretor();
    console.log(genId.next());
    
    const button = document.createElement('button');
    button.innerText = 'Click Me';
    element.append(button);

    const renderButton = () =>{
        const{value} = genId.next();
        button.innerText = `Click ${value}`;    
    }

    button.addEventListener('click', renderButton )


}


function* idGeneretor(){
    let currentId = 0;
    while(true){
        yield ++currentId;
    }
}

//pueden haber asincronas también

function* myFirstGeneratorFunction(){

    yield 'primer valor';
    yield 'segundo valor';
    yield 'tercero valor';
    yield 'cuarto valor';
    yield 'quinto valor';

    return 'Ya no hay valores';

}