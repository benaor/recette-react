import React, { Component } from 'react'

class AjouterRecette extends Component {
    state = {
        nom: '',
        image: '',
        ingredients: '',
        instructions: ''
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="card">
                <form className='admin-form ajouter-recette'>
                    <input value={this.state.nom} onChange={this.handleChange} type="text" name="nom" placeholder="Nom de la recette" />
                    <input value={this.state.image} onChange={this.handleChange} type="text" name="image" placeholder="nom de l'image" />
                    <textarea value={this.state.ingredients} onChange={this.handleChange} rows="3" name="ingredients" placeholder="liste des ingrédients"></textarea>
                    <textarea value={this.state.instructions} onChange={this.handleChange} rows="15" name="instructions" placeholder="Liste des instructions"></textarea>
                </form>
            </div>
        )
    }
}

export default AjouterRecette
