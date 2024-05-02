import './movimientosStyle.scss'

export const Movimientos = ()=>{


    return(
        <form method="POST">
            {/* NOMBRE/DESCRIPCIÓN */}
            <label className='labelDescripcion' id="labelDescripcion"> Nombre </label>
            <input className='inpuntDescripcion' type="text" id="inpuntDescripcion" />
            {/* IMPORTE */}
            <label className="labelImporte" id="labelImporte"> Importe </label>
            <input className='inputImporte' type="number" id="inputImporte" />
            {/* TIPO DE MOVIMIENTO */}
            <label className="labelTipoMovimiento" id="labelTipoMovimiento"> Tipo de Movimiento </label>
            <select className='selectTipoMovimiento' name="selectTipoMovimiento" id="selectTipoMovimiento">
                <option value="optionBlanco"></option>
                <option value="optionIngreso"> Ingresos </option>
                <option value="optionEgreso"> Egresos </option>
            </select>
            {/* QUIEN PAGO? */}
            <label className="labelPersona" id="labelPersona"> ¿Quién? </label>
            <select className='selectPersona' name="selectPersona" id="selectPersona">
                <option value="optionBlanco"></option>
                <option value="optionBaso"> Baso </option>
                <option value="optionJu"> Ju </option>
            </select>
            {/* FORMA DE PAGO */}
            <label className="labelPago" id="labelPago"> Forma de Pago </label>
            <select className='selectPago' name="selectPago" id="selectPago">
                <option value="optionBlanco"></option>
                <option value="optionVisa"> Tarjeta Visa </option>
                <option value="optionMaster"> Tarjeta Master </option>
            </select>
            {/* FECHA DE PAGO */}
            <label className="labelFechaPago" id="labelFechaPago"> Fecha Pago </label>
            <input type="datetime-local" className='inputFechaPago' name="inputFechaPago" id="inputFechaPago" />
            {/* CATEGORIAS */}
            <label className="labelCategorias" id="labelCategorias"> Categorias </label>
            <select className='selectCategorias' name="selectCategorias" id="selectCategorias">
                <option value="optionBlanco"></option>
                <option value="optionCelulares"> Celulares </option>
                <option value="optionAutomotor"> Automotor </option>
                <option value="optionEdudacion"> Educacion </option>
                <option value="optionViaticos"> Viaticos </option>
                <option value="optionConstruccion"> Construccion </option>
            </select>
            {/* PAGADO */}
            <label className='labelPagado' id="labelPagado"> ¿Pagado? </label>
            <input type="checkbox" className='checkPagado' id="checkPagado" />
            {/* PROYECTADO */}
            <label className="labelProyectado" id="labelProyectado"> Proyectado </label>
            <input className='inputProyectado' type="number" id="inputProyectado" />
            {/* ARCHIVO */}
            <label className="labelAdjunto" id="labelAdjunto"> Adjunto </label>
            <input className='inputAdjunto' type="file" id="inputAdjunto" />
        </form>
    )
}