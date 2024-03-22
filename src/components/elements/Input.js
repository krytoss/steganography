const Input = ({ type, loadImage }) => {

    const handleChange = (e) => {
        loadImage(e)
    }

    return <input type = {type} onChange={ handleChange }/>
}

export default Input