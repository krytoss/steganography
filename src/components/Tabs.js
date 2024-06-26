import Tab from './elements/Tab'

const Tabs = ({ tabs, active, setActive}) => {
    return (
        <div className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
            <ul className='flex flex-wrap -mb-px'>
                {
                    tabs.map((e, i) => {
                        return <Tab
                                    value={e}
                                    key={i}
                                    active={ active === e }
                                    setActive={ setActive }
                                />
                    })
                }</ul>
        </div>
    )
}

export default Tabs