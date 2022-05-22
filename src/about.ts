import { init, node, node_dom } from 'lui';

import '@styles/main.css';
import { Infobox } from '@components/Infobox';
import { Navbar } from '@components/Navbar';
import { Footer } from '@components/Footer';

init(() => {
  return [
    null,
    [
      node_dom('div[id=pageroot]', {}, [
        node(Navbar),
        node(Infobox, {
          content: 'Small example app made with lui ...',
          title: 'About'
        }),
        node(Footer)
      ])
    ]
  ]
});