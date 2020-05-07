import React from 'react'

const AdminForm = ({ id: key, majRecette, recettes }) => {
    const recette = recettes[key]

    const handleChange = (event, key) => {
        const { name, value } = event.target
        const recette = recettes[key]
        recette[name] = value
        majRecette(key, recette)
    }

    return (
        <div className="card">
            <form className='admin-form'>

                <input
                    value={recette.nom}
                    onChange={e => handleChange(e, key)}
                    type="text"
                    name="nom"
                    placeholder="Nom de la recette" />

                <input
                    value={recette.image}
                    onChange={e => handleChange(e, key)}
                    type="text"
                    name="image"
                    placeholder="nom de l'image" />

                <textarea
                    value={recette.ingredients}
                    onChange={e => handleChange(e, key)}
                    rows="3"
                    name="ingredients"
                    placeholder="liste des ingrédients"></textarea>

                <textarea
                    value={recette.instruction}
                    onChange={e => handleChange(e, key)}
                    rows="15" name="instructions"
                    placeholder="Liste des instructions"></textarea>

                <button type="submit"> Mettre a jour </button>
            </form>
        </div>
    )
}


export default AdminForm
