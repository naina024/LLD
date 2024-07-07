const AccordionItem = ({item, index, expandedIndex, setIsOpen}) => {

    return (
        <>
            <h2 className='border border-gray-700 py-3 px-1 flex justify-between w-[600px] font-bold bg-slate-100'>
                {item.title}
                <button onClick={(e) => {setIsOpen(index)}}>icon</button>
            </h2>
            {expandedIndex === index && <div className='border border-gray-700 py-3 px-1 w-[600px]'>{item.body}</div>}
        </>
    )
}

export default AccordionItem;