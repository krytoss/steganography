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
      <main className="App-main">
        <Tabs tabs={ tabs } active = { activeTab } setActive = { setActiveTab }/>
        {
          activeTab === 'Encode' ? <Encode /> : <Decode />
        }
      </main>
    </div>
  );
}

export default App;
