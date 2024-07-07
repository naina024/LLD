import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const images = [
    `https://images.unsplash.com/photo-1554941071-8ec75d5379b5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    `https://images.unsplash.com/photo-1554941426-a965fb2b9258?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    `https://images.unsplash.com/photo-1524591431555-cc7876d14adf?q=80&w=2914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    `https://images.unsplash.com/photo-1452457750107-cd084dce177d?q=80&w=2901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    `https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
]

const ImageSlider = () => {

    const [active, setActive] = useState(2);

    useEffect(() => {
        const st = setTimeout(() => {
            loadNextImage();
        }, 2500);

       return () => clearTimeout(st);
    }, [active])

    const loadPreviousImage = () => {
        setActive((active) => active > 0 ? active - 1 : images.length-1);
    }

    const loadNextImage = () => {
        setActive((active) => (active + 1) % images.length);
    }

    return (
        <>
            <div className='flex content-center justify-between'>
                <FontAwesomeIcon icon={faChevronLeft} className='cursor-pointer w-6 h-[inherit] relative left-6 z-10' onClick={loadPreviousImage} />
                <img className='h-96 w-full opacity-80' src={images[active]} alt='img' />
                <FontAwesomeIcon icon={faChevronRight} className='cursor-pointer w-6 h-[inherit] relative right-6 z-10' onClick={loadNextImage} />
            </div>
        </>
    )
}

export default ImageSlider;