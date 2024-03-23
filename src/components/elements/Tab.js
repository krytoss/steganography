const Tab = ({ value, active, setActive }) => {

    const handleClick = () => {
        setActive(value)
    }

    return (
        <li>
            <button
                href='#'
                aria-current='page'
                className={
                    'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                    + ( active && ' active text-blue-600 border-b-2 border-blue-600' )
                }
                onClick = { handleClick }
            >
                { value }
            </button>
        </li>
    )
}

export default Tab