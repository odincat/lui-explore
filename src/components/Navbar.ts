import { hook_dom, node, node_dom, node_map } from "lui";
import '@styles/navbar.css';

interface MenuItem {
    displayName: string;
    route: string;
    hidden: boolean;
}

type MenuItems =  MenuItem[];

export const Navbar = () => {
    hook_dom('div[className=navigation]');

    const NavLinks = () => {
        hook_dom('div[className=nav-items]');

        const menuItems: MenuItems = [{
            displayName: 'Home',
            route: '/',
            hidden: false,
        },
        {
            displayName: 'About this page',
            route: '/about/',
            hidden: false
        }];

        const NavLink = ({ displayName, route, hidden }: MenuItem) => {
            const currentPathName = window.location.pathname;
    
            if(hidden) return null;
    
            return[
                node_dom(`a[href=${route}][className=nav-item${route == currentPathName ? ' active' : ''}][innerText=${displayName}]`)
            ];
        }

        return menuItems.map((item) => node(NavLink, { displayName: item.displayName, route: item.route, hidden: item.hidden }));
    }

    return [
        node_dom('div[innerText=lui-explore][className=branding]'),
        node(NavLinks)
    ]
}