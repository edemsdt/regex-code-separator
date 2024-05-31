import { SeparateText }  from "./helpers/SeparateText.js";
import { DisplayTemplate } from "./helpers/DisplayTemplate.js";
import { HasProps } from "./interfaces/HasProps.js";

const form = document.querySelector('#text-form') as HTMLFormElement;

const div = document.querySelector('.footer-content') as HTMLDivElement;
const display = new DisplayTemplate(div);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    // get text from webpage
    const textBlock = document.querySelector('#text-block') as HTMLTextAreaElement;
    let textInput: string;
    textInput = textBlock.value;

    // use separator() method on separateText class to sort through
    let separatedText: HasProps[];
    separatedText = new SeparateText(textInput).separator();
    console.log(separatedText);

    // render results on webpage
    display.render(separatedText);
})