 import './App.css';
 import Welcome from './components/Welcome';
 import WelcomeDOs from './components/WelcomeDos';

function App() {
  return (
    <div className="App">
      <Welcome name="Rolando"/>
      <Welcome name="Rolando"/>
      <WelcomeDOs name="Rolando"/>
      <WelcomeDOs edad="cuarenta"/>
      <Welcome apellido="Cepeda"/>
    </div>
  );
}

export default App;
