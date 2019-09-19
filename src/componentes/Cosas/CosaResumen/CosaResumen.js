import React from 'react'

import { Link } from 'react-router-dom';

import './CosaResumen.css';

const CosaResumen = (props) => (
    <div className="CosaResumen">
        <Link to={"/cosa/"+props.mi_super_id }>
            Cosa Resumen { props.mi_super_id }
        </Link>
    </div>
)

export default CosaResumen