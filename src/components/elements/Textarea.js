const Textarea = ({ placeholder, value, maxLength, onChange }) => {

    const handleChange = (e) => {
        const text = e.target.value.split("").filter((c) => c.charCodeAt() <= 266)
        onChange( text.join("") )
    }

    return <textarea
                className='block my-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                onChange={ handleChange }
                placeholder = { placeholder }
                value={ value }
                rows='5'
                maxLength={maxLength}
            ></textarea>
}

export default Textarea