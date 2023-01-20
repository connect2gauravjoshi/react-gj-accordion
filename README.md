## react-gj-accordion

A simple accordion component for react with smooth animation and having no external dependencies.

## Demo

https://codesandbox.io/s/fervent-tom-dkz91t


## Installation

Install the package with npm:

```bash
  npm install react-gj-accordion
```

## Usage/Examples

```javascript
import React from 'react';
import { Accordion, AccordionHeader, AccordionBody, AccordionItem } from "react-gj-accordion";

const App = () => {
    return (
        <Accordion>
            <AccordionItem>
                <AccordionHeader><strong>What is HTML</strong></AccordionHeader>
                <AccordionBody>
                    HTML is the standard markup language for Web pages.
                    With HTML you can create your own Website.                   
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader><strong>What is CSS</strong></AccordionHeader>
                <AccordionBody>
                    CSS is the language we use to style an HTML document.
                    CSS describes how HTML elements should be displayed.                   
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    );
}

export default App;

```
## API Summary

#### Accordion

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `allowMultipleExpanded` | `boolean` | don't autocollapse items when expanding other items. |
| `preExpanded` | `number[]` | array of number based on which items will be expanded on mount. (0 for the first item & so on). |
| `expandAll` | `boolean` | all items will be expanded on mount. |


