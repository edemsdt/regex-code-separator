import { HasProps } from '../interfaces/HasProps.js';

export class DisplayTemplate {
    constructor(private container: HTMLDivElement) {};

    render(sortedText: HasProps[]) {
        
        

        for (let textObj of sortedText) {
            if (textObj.type === 'code') {
                const div = document.createElement('div') as HTMLDivElement;
                div.className = 'nested-div code-container';
                const p = document.createElement('p') as HTMLParagraphElement;
                p.className = 'text';

                p.innerHTML = textObj.content;
                div.appendChild(p);
                this.container.appendChild(div);
            } else {
                const div = document.createElement('div') as HTMLDivElement;
                div.className = 'nested-div';
                const p = document.createElement('p') as HTMLParagraphElement;

                p.innerText = textObj.content;
                div.appendChild(p);
                this.container.appendChild(div);
            }
        }
    }
}
