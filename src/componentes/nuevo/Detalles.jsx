import { useEffect } from "react";
import { useState } from "react";


function Detalles() {

    const[form,setForm] = useState({
        detalles:'',
        eventos: 1,
        periodo: 'semana',
        completado:1,
        icono:'🏃',
        meta:52,
        plazo:'2024-03-01'
    });

    const {detalles,eventos,periodo,icono,completado,meta,plazo} = form;

    const onChange = (event,prop) => {
        setForm(estado => ({...estado,[prop]:event.target.value}));
        
    }

    useEffect(()=>{
        //console.log(form);
    },[form])

    const crear = async () => {
        console.log(form);
    }
    const frecuencia = ['dia','semana','mes','año']
    const iconos = ['🖥️','🏃','📚','✈️','💸']
    return ( 
        <div className="tarjeta">
            <form className="p-4">
                <label className="label">
                    Describe tu meta
                    <input className="input"
                    value={detalles}
                    onChange={e =>onChange(e,'detalles')}
                    placeholder="ej. 52 caminatas"></input>
                </label>
                <label className="label">
                    ¿Con que frecuencia deseas cumplir tu meta?<span>ej. 1 vez a la semana</span>
                    <div className="flex mb-6">
                        <input type="number"
                        value={eventos}
                        onChange={e =>onChange(e,'eventos')}
                        className="input mr-6"></input>
                        <select className="input" 
                        value={periodo}
                        onChange={e =>onChange(e,'periodo')}>
                            {frecuencia.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label className="label">
                ¿Cuantas veces deseas completar esta meta?
                    <input className="input"
                    value={meta}
                    onChange={e =>onChange(e,'meta')}
                    type="number"></input>
                </label>
                <label className="label">
                    ¿Tienes una fecha limita?
                    <input className="input"
                    value={plazo}
                    onChange={e =>onChange(e,'plazo')}
                    type="date"></input>
                </label>
                <label className="label">
                ¿Cuantas veces has completado ya esta meta?
                <input className="input"
                value={completado}
                onChange={e =>onChange(e,'completado')}
                type="number"></input>
                </label>
                <label className="label">
                    Escoge el icono para la meta 
                    <select value={icono}
                    onChange={e =>onChange(e,'icono')}
                     className="input">{iconos.map(opcion => <option value={opcion}>{opcion}</option>)}</select>
                </label>
            </form>
            <div className="flex px-4 py-3 justify-between">
                <button className="boton boton--green" onClick={crear}>Crear</button>
                <button className="boton boton--red">Cancelar</button>
            </div>
        </div>
     );
}

export default Detalles;