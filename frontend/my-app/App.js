import logo from './logo.svg';
import './App.css';

function App() {
  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement(
      'header',
      { className: 'App-header' },
      React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
      React.createElement(
        'p',
        null,
        'Edit ',
        React.createElement(
          'code',
          null,
          'src/App.js'
        ),
        ' and save to reload.'
      ),
      React.createElement(
        'a',
        {
          className: 'App-link',
          href: 'https://reactjs.org',
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        'Learn React'
      )
    ),
    React.createElement(
      'body',
      null,
      React.createElement('script', { crossorigin: true, src: 'https://unpkg.com/react@18/umd/react.production.min.js' }),
      React.createElement('script', { crossorigin: true, src: 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js' })
    )
  );
}

export default App;