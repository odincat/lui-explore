import { hook_dom, node_dom } from "lui";

export const ContactForm = () => {
    hook_dom('div[className=contact-form]');

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    // lui only runs this function, when the input is not focused and the content has changed. Keep that in mind!
    const handleChange = (e: any) => {
        // validateMyStuff(e.target.value);
        console.log("Form content changed!" + e.target.value);
    }

    return [
        node_dom('form', {
            id: 'cf',
        }, [
            node_dom('input[type=text][className=cf-input][placeholder=Name]', {
                oninput: handleChange
            }),
            node_dom('textarea[className=cf-textarea][placeholder=Deine Nachricht]'),
            node_dom('button[type=submit][className=cf-button][innerText=Submit]', {
                onclick: handleSubmit
            })
        ])
    ]
};
