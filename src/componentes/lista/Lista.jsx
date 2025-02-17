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
    "id": 2,
    "detalles": "Leer por 20 minutos",
    "periodo": "dia",
    "eventos": "1",
    "icono": "📚",
    "objetivo": "100",
    "plazo": "fecha",
    "completado": "60"
},
{
    "id": 3,
    "detalles": "Resolver retos por 60 minutos",
    "periodo": "dia",
    "eventos": "1",
    "icono": "🖥️",
    "objetivo": "100",
    "plazo": "fecha",
    "completado": "20"
}];

function Lista() {
    return ( 
        listaMock.map(meta => <Meta {...meta}></Meta>)
     );
}

export default Lista;