import Meta from "./Metas";

const listaMock = [{
    'id':'1',
    'detalles':'Correr por 30 minutos',
    'periodo':'dia',
    'eventos':1,
    'icono':'🏃',
    'meta':365,
    'plazo':'2025-03-01',
    'completado':5
},
{
    'id':'2',
    'detalles':'Correr por 30 minutos',
    'periodo':'dia',
    'eventos':1,
    'icono':'🏃',
    'meta':365,
    'plazo':'2025-03-01',
    'completado':100
},
{
    'id':'3',
    'detalles':'Correr por 30 minutos',
    'periodo':'dia',
    'eventos':1,
    'icono':'🏃',
    'meta':365,
    'plazo':'2025-03-01',
    'completado':265
}];

function Lista() {
    return ( 
        listaMock.map(meta => <Meta {...meta}></Meta>)
     );
}

export default Lista;