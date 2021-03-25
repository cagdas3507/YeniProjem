import React from 'react'
import PropTypes from 'prop-types'


 function footerr() {
     const {Downtitle}=this.props;
    return (
        <div>
            <h1>footer</h1>
        <ul>
            <li><h1>{Downtitle}</h1></li>
            <li><h1>{Downtitle}</h1></li>
        </ul>
            
        </div>
    )
}

footerr.defaultProps={
    Downtitle:"Bilgi yok"
}
footerr.prototype ={
    Downtitle:PropTypes.string.isRequired
}
export default footerr;
