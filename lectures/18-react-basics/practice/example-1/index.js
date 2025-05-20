const element = React.createElement('h1', {
  id: 'element-id',
  children: 'Heloo guys!',
});
const domContainer = document.querySelector('#root_container');
const root = ReactDOM.createRoot(domContainer);
root.render(element);
