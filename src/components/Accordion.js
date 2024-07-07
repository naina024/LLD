import { useState } from 'react';
import AccordionItem from './AccordionItem';

const data = [
    {
        title: 'Accordion Item #1',
        body: `This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.`
    },
    {
        title: 'Accordion Item #2',
        body: `TThis is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.`
    },
    {
        title: 'Accordion Item #3',
        body: `This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.`
    }
]

const Accordion = () => {

    const [expandedIndex, setExpandedIndex] = useState(0);

    const handleToggle = (i) => {
        if (expandedIndex === i){
            setExpandedIndex(null);
        } else {
            setExpandedIndex(i);
        }
    }

    return (
        <div className='absolute inset-x-1/4'>
            <h1>Accordion</h1>
            {data.map((item, i) => {
                return <AccordionItem item={item} index={i} expandedIndex={expandedIndex} setIsOpen={()=>{handleToggle(i)}} />
            })}
        </div>
    )
}

export default Accordion;