import lui, { node, node_dom } from './etc/lui';
import './styles/main.css';

const Hero = () => {
  return [
    node_dom('div', {
      F: {
        "hero-section": true
      },
      C: [
        node_dom('h1', {
          innerText: 'lui Explore'
        }),
        node_dom('h2', {
          innerText: 'Get to know lui'
        })
      ]
    })
  ]
}

lui.init(() => {
  return [
    null,
    [
      node(Hero)
    ]
  ]
});