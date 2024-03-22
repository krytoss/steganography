import { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Encode from './components/Encode';
import Decode from './components/Decode';

function App() {
  const [ activeTab, setActiveTab ] = useState('Encode')

  const tabs = [ 'Encode', 'Decode' ]

  return (
    <div className="App">
      <header className="App-header">
        <Tabs tabs={ tabs } active = { activeTab } setActive = { setActiveTab }/>
        {
          activeTab === 'Encode' ? <Encode /> : <Decode />
        }
      </header>
    </div>
  );
}

export default App;
