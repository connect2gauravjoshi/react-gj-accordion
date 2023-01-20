import React, { Children, cloneElement, isValidElement, useState } from 'react';
import './Accordion.css';

const Accordion = ({ children, allowMultipleExpanded, preExpanded, expandAll }) => {
    const getInitialItemExpandStatusList = () => {
        let list = [];
        for (let index = 0; index < children.length; index++) {
            let flag = false;
            if (expandAll) flag = true;
            else if(preExpanded && Array.isArray(preExpanded)) flag = preExpanded.includes(index) ? true : false
            list.push(flag)
        }
        return list;
    }
    const [itemExpandStatusList, setItemExpandStatusList] = useState(getInitialItemExpandStatusList());

    const handleItemExpandStatusListChange = (index, status) => {
        setItemExpandStatusList(itemExpandStatusList.map((x, i) => i === index ? status : allowMultipleExpanded ? x : false));
    }

    return (
        <div className='gj-accordion'>
            {Children.map(children, (child, index) => {
                if (!isValidElement(child)) return null;
                else return cloneElement(child, { isOpen: itemExpandStatusList[index], setIsOpen: handleItemExpandStatusListChange, itemIndex: index });
            })
            }
        </div>
    );
}
export default Accordion;

