import React, { Component } from 'react'

export class Logout extends Component {
    render() {


        const logout=()=>{    
           localStorage.clear();
           window.location.href ='/';
        }
        return (
         <div>

<button type="button" onClick={logout} className="btn btn-info btn-block btn-round">Log OUT</button>

         </div>
        )
    }
}

export default Logout
