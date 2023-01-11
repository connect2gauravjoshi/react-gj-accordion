import React from 'react';

const AccordionHeader = (props) => {
    const {isOpen, handleIconClick, children} = props;
    return (
        <div className='gj-accordion-item-header-body' onClick={handleIconClick}>
            <p className='gj-accordion-item-header-content'>{children}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                stroke="currentColor" className={`w-6 h-6 gj-accordion-item-header-icon ${!isOpen ? '' : 'invert'}`}>
                <path strokeLinecap="round" strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        </div>
    );
}

export default AccordionHeader;