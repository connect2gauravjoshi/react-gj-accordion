import React, { useRef, useState, Children, cloneElement, isValidElement, useEffect } from 'react';
import AccordionHeader from './AccordionHeader';
import AccordionBody from './AccordionBody';

const AccordionItem = ({ children, isOpen, setIsOpen, itemIndex }) => {

    const [maxHeight, setMaxHeight] = useState(0);

    const accordionBodyRef = useRef(null);

    useEffect(() => setMaxHeight(!isOpen ? 0 : accordionBodyRef.current.scrollHeight), [isOpen]);

    const handleIconClick = (index) => {
        setIsOpen(index, !isOpen);
    }

    return (
        <div className='gj-accordion-item'>
            {
                Children.map(children, child => {
                    if (!isValidElement(child)) return null;
                    else if (child.type === AccordionHeader) return cloneElement(child, { handleIconClick, isOpen, itemIndex });
                    else if (child.type === AccordionBody) return cloneElement(child, { maxHeight, ref: accordionBodyRef });
                    else return null;
                })
            }
        </div>
    );
}

export default AccordionItem;

