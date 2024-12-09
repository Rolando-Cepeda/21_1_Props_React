 import './App.css';
 import Welcome from './components/Welcome';
 import WelcomeDOs from './components/WelcomeDos';

function App() {
  return (
    <div className="App">
      <Welcome name="Rolando" apellido="Cepeda" status='single'/>
      <Welcome name="Sandra" status='single'/>
      <Welcome name="Eva" status='single'/>
      <Welcome name="Ricardo" status='single'/>
      <Welcome name="Pilar" status='single'/>
      <WelcomeDOs name="Rolando" edad ="18"/>
    </div>
  );
}

export default App;
