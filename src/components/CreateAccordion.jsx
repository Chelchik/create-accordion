import { useState } from 'react';
import Accordion from './Accordion';

let hello = []

function AccordionCreate() {
    const [isCreate, setIsCreate] = useState(hello)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    
    const titleFunc = (e) => {
        setTitle(e.target.value);
    }

    const textFunc = (e) => {
        setText(e.target.value);
    }

    let i = 0;

    const createAccordion = (e) => {
        e.preventDefault();
        hello.forEach(elem => {
            i++;
        });
        hello.push(<Accordion title={title} description={text} key={i}/>) 
        setIsCreate([...hello]);
        console.log(hello);
        console.log(isCreate);
    }

    return (
        <div>
            <form>
                <input type="text" placeholder='Title' onChange={titleFunc} id='titleInput' />
                <textarea name="" id="textarea" rows={7} onChange={textFunc} placeholder='Description'></textarea>
                <input type="submit" value="Add" onClick={createAccordion} id='submit' />
            </form>


            <div>
                {isCreate}     
            </div>
        </div>
    );
}

export default AccordionCreate;
