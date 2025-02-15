import './Metas.css'


function Meta({icono,eventos,periodo,detalles,completado,meta}) {

    return (  
    <div className="meta tarjeta">
        <div className="flex items-center">
            <div className="icono">{icono}</div>
            <p className='text-xl ml-10 mr-15'>{eventos}<sub className='text-xs text-gray-500 ml-1'>/ {periodo}</sub></p>
            <p>{detalles}</p>
        </div>
        <div className="flex">
            <div className='relative m-2 mx-5'>
                <p className='text-center'>{completado} de {meta}</p>
                <div className='barra1'>
                    <div style={{width:`${Math.round((completado/meta)*100)}%`}}
                    className='barra2'></div>
                </div>
            </div>
            <button className='boton boton--aqua ml-10'>Completado</button>
        </div>
    </div>
    );
}

export default Meta;