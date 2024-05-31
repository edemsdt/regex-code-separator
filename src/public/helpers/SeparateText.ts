import { HasProps } from '../interfaces/HasProps.js'

export class SeparateText {
    constructor(private textBlock: string) {}

    separator() {
        const regex: RegExp = /<([a-z0-9]+)([^<]+)*(?:>([\s\S]*?)<\/\1>|\s+\/>)/g;
        let dataArr: HasProps[] = [];

        let foundMatch;
        let continueSearchIndex: number = 0;
        while ((foundMatch = regex.exec(this.textBlock)) !== null) {
            // Add text preceded found codeblock to array
            if (foundMatch.index > continueSearchIndex) {
                dataArr.push({type: 'text', content: this.textBlock.slice(continueSearchIndex, foundMatch.index)});
            }

            // Add codeblock to array
            dataArr.push({type: 'code', content: foundMatch[0]});

            // Removing any empty spaces or non alphabets that appear before the next text block in the separation process
            while(((/[A-Z]/.test(this.textBlock[regex.lastIndex])) || (/[a-z]/.test(this.textBlock[regex.lastIndex])) || (/</.test(this.textBlock[regex.lastIndex]))) !== true) {
                regex.lastIndex++;
            }

            // setting continueSearchIndex to inbuilt regex property 'lastIndex'. 
            // It continues the search for new matches from the lastIndex onwards.
            continueSearchIndex = regex.lastIndex;
            
        }

        if (continueSearchIndex < this.textBlock.length) {
            dataArr.push({type: 'text', content: this.textBlock.slice(continueSearchIndex)})
        }

        return dataArr;
    }
}