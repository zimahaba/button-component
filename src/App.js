import './App.css';
import Button from './components/Button';

function App() {

  const handler = () => {
    console.log('clicou')
  }

  return (
    <div>
      <Button size="xs">Button</Button>
      <Button size="s">Button</Button>
      <Button disableShadow>Button</Button>
      <Button variant="text" size="l">Button</Button>
      <Button variant="outlined" size="xl" onClick={handler}>Button</Button>
    </div>
  );
}

export default App;
