import React, { Component } from 'react'
import AjouterRecette from "./AjouterRecette"
import AdminForm from "./AdminForm"
import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp } from '../base'
import Login from "./Login"

class Admin extends Component {
    state = {
        uid: null,
        chef: null
    }

    handleAuth = (authData) => {
        console.log(authData)
    }

    authenticate = () => {
        firebaseApp
        .auth()
        .signInWithPopup('facebookAuthProvider')
        .then(this.handleAuth)
    }

    render() {
        const { recettes, ajouterRecette, majRecette, chargerExemple, supprimerRecette } = this.props
        
        //si l'utilisateur n'est pas connecté
        if(!this.state.uid){
            return <Login authenticate={this.authenticate}/>
        }

        return (
            <div className="cards">
                <AjouterRecette ajouterRecette={ajouterRecette} />
                {
                    Object.keys(recettes)
                        .map(key => <AdminForm
                            key={key}
                            id={key}
                            majRecette={majRecette}
                            supprimerRecette={supprimerRecette}
                            recettes={recettes} />
                        )
                }
                <footer>
                    <button onClick={chargerExemple}> Remplir </button>
                </footer>
            </div>
        )
    }
}
export default Admin