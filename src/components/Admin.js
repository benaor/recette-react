import React, { Component } from 'react'
import AjouterRecette from "./AjouterRecette"
class Admin extends Component {
    render() {
        const { recettes, ajouterRecette, majRecette, chargerExemple } = this.props
        return (
            <div className="cards">
                <AjouterRecette ajouterRecette={this.ajouterRecette} />
                {
                    Object.keys(recette)
                        .map(key => <AdminForm
                            key={key}
                            id={key}
                            majRecette={majRecette}
                            recettes={recettes} />
                        )
                }
                <footer>
                    <button onClick={this.chargerExemple}> Remplir </button>
                </footer>
            </div>
        )
    }
}
export default Admin