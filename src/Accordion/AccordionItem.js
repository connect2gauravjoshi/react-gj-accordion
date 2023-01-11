import React, { useRef, useState, Children, cloneElement, isValidElement } from 'react';
import AccordionHeader from './AccordionHeader';
import AccordionBody from './AccordionBody';

const AccordionItem = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [maxHeight, setMaxHeight] = useState(0);

    const accordionBodyRef = useRef(null);

    const handleIconClick = () => {
        setMaxHeight(isOpen ? 0 : accordionBodyRef.current.scrollHeight);
        setIsOpen(open => !open);
    }

    return (
        <div className='gj-accordion-item'>
            {
                Children.map(children, child => {
                    if (!isValidElement(child)) return null;
                    else if (child.type === AccordionHeader) return cloneElement(child, { handleIconClick, isOpen });
                    else if (child.type === AccordionBody) return cloneElement(child, { maxHeight, ref: accordionBodyRef });
                    else return null;
                })
            }
        </div>
    );
}

export default AccordionItem;

