import React, { forwardRef } from "react";

const AccordionBody = (props, ref) => {
    const { maxHeight, children } = props;
    return (
        <div className='gj-accordion-item-body' ref={ref} style={{ maxHeight }}>
            <div className='gj-accordion-item-body-content'>
                {children}
            </div>
        </div>
    );
}

export default forwardRef(AccordionBody);