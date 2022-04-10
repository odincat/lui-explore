import { hook_dom, init, node, node_dom } from 'lui';
import { Infobox } from './components/Infobox';
import './styles/main.css';

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
        node(Hero),
        node(Infobox, {
          content: 'Inhalt ...',
          title: 'Titel'
        })
      ])
    ]
  ]
});