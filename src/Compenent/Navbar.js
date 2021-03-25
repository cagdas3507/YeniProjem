import React from 'react'
import PropTypes from 'prop-types'


 function navbar() {
     const {title}=this.props;
    return (
        <div>
        <ul>
            <li><h1>{title}</h1></li>
            <li><h1>dasdsa</h1></li>
        </ul>
            
        </div>
    )
}

navbar.defaultProps={
    title:"Bilgi yok"
}
navbar.prototype ={
    title:PropTypes.string.isRequired
}
export default navbar;

