import React from 'react'
import CosaResumen from '../CosaResumen/CosaResumen';

import './CosasLista.css'

const CosasLista = () => (
    <div className="CosasLista">
        <h1>
            Lista
        </h1> 
        <ul> 
            <CosaResumen mi_super_id={0}/>
            <CosaResumen mi_super_id={1}/>
            <CosaResumen mi_super_id={2}/>
            <CosaResumen mi_super_id={3}/>
            <CosaResumen mi_super_id={4}/>
            <CosaResumen mi_super_id={5}/>
        </ul>
    </div>
)

export default CosasLista