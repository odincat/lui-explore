import { hook_dom, init, node, node_dom } from 'lui';

import '@styles/main.css';
import { Infobox } from '@components/Infobox';
import { ContactForm } from '@components/ContactForm';
import { Navbar } from '@components/Navbar';
import { Footer } from '@components/Footer';

const Hero = () => {
  hook_dom('div[className=hero-section]');

  return [
    node_dom('h1', {
      innerText: 'lui Explore'
    }),
    node_dom('h2', {
      innerText: 'Get to know lui'
    })
  ];
}

init(() => {
  return [
    null,
    [
      node_dom('div[id=pageroot]', {}, [
        node(Navbar),
        node(Hero),
        node(Infobox, {
          content: 'Inhalt ...',
          title: 'Titel'
        }),
        node_dom('h3', {
          innerText: 'Form example'
        }),
        node(ContactForm),
        node(Footer)
      ])
    ]
  ]
});