import { hook_dom, node_dom } from "lui";
import "@styles/footer.css";

export const Footer = () => {
    hook_dom('div[className=footer]');

    return [
        node_dom('div[className=about]', null, [
            node_dom(`div[innerText=built with lui & vite]`)
        ])
    ];
}