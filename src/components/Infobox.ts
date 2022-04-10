import { hook_dom, node_dom } from "lui";

interface InfoboxArgs {
    content: string;
    title: string;
};

export const Infobox = ({ content, title }: InfoboxArgs) => {
    hook_dom('div[className=infobox]');

    return [
        node_dom('h3[className=infobox-title]', {
            innerText: title
        }),
        node_dom('p[className=infobox-content]', {
            innerText: content
        })
    ];
};