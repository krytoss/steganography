const Input = ({ type, onChange }) => {

    const handleChange = (e) => {
        onChange(e)
    }

    return <input type = {type} onChange={ handleChange }/>
}

export default Input