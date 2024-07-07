

export function MemeCard({data}){

    const {url, title, author} = data;

    return (
        <div className='border border-gray-600 round-sm m-1'>
            <img className='w-56 h-56 m-1' src={url} alt={title}/>
            <p className="text-center">{author}</p>
        </div>
    )
}

export default MemeCard;