

function Detalles() {

    const opcionesDeFrecuencia = ['dia','semana','mes','año']
    const iconos = ['🖥️','🏃','📚','✈️','💸']
    return ( 
        <div className="tarjeta">
            <form className="p-4">
                <label className="label">
                    Describe tu meta
                    <input className="input"
                    placeholder="ej. 52 caminatas"></input>
                </label>
                <label className="label">
                    ¿Con que frecuencia deseas cumplir tu meta?<span>ej. 1 vez a la semana</span>
                    <div className="flex mb-6">
                        <input type="number"
                        className="input mr-6"></input>
                        <select className="input">
                            {opcionesDeFrecuencia.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label className="label">
                ¿Cuantas veces deseas completar esta meta?
                    <input className="input"
                    type="number"></input>
                </label>
                <label className="label">
                    ¿Tienes una fecha limita?
                    <input className="input"
                    type="date"></input>
                </label>
                <label className="label">
                ¿Cuantas veces has completado ya esta meta?
                <input className="input"
                type="number"></input>
                </label>
                <label className="label">
                    Escoge el icono para la meta 
                    <select className="input">{iconos.map(opcion => <option value={opcion}>{opcion}</option>)}</select>
                </label>
            </form>
            <div className="flex px-4 py-3 justify-between">
                <button className="boton boton--green">Crear</button>
                <button className="boton boton--red">Cancelar</button>
            </div>
        </div>
     );
}

export default Detalles;