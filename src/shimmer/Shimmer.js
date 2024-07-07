

function Shimmer(){
    return (
        Array(20).fill(0).map(() => {
            return <div className='border border-gray-600 round-sm m-1'>
                <div className='w-56 h-56 m-1 bg-gray-200'></div>
                <div className='w-56 h-4 m-1 bg-gray-200'></div>
            </div>
        })
    )
}

export default Shimmer;