import React, { Component } from 'react'


class User extends Component {

 

    constructor(props) {
        super(props);
        this.state = { username: '' };
        this.state={sonuc:false};
      }

    myChangeHandler = (event) => {
        this.setState({username: event.target.value});
      
         
       
      }

    render() {
     
        const {name,departmant,salary}=this.props;
        return (
        
            <div className="container">
                 
                 <ul>
                 <li>İsim:{name}</li>
                 <li>Departman:{departmant}</li>
                 <li>Maaş:{salary}</li>

                 </ul>
                
            </div>
        )
    }
}

export default User;