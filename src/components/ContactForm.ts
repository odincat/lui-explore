import { hook_dom, hook_effect, hook_state, node_dom } from "lui";

export const ContactForm = () => {
    hook_dom('div[className=contact-form]');

    const [formName, setFormName] = hook_state('');
    const [formMessage, setFormMessage] = hook_state('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(formName.length < 5 || formMessage.length < 10) {
            alert('Form invalid! Name needs to have at least 5 characters and message at least 10.')
            return;
        }
        console.log(`Name: ${formName} + Message: ${formMessage}`);
    }

    const handleChange = (setter: (value: string) => void, value: string) => {
        setter(value);
    }

    return [
        node_dom('form', {
            id: 'cf',
        }, [
            node_dom('input[type=text][className=cf-input][placeholder=Name]', {
                oninput: (e: any) => handleChange(setFormName, e.target.value)
            }),
            node_dom('textarea[className=cf-textarea][placeholder=Deine Nachricht]', {
                oninput: (e: any) => handleChange(setFormMessage, e.target.value)
            }),
            node_dom(`button[type=submit][className=cf-button][innerText=Submit]`, {
                onclick: handleSubmit
            }),
            node_dom('p', {
                innerText: `Name: ${formName}`
            }),
            node_dom('p', {
                innerText: `Message: ${formMessage}`
            })
        ])
    ];
};