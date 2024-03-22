import { useEffect, useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Encode from './components/Encode';
import Decode from './components/Decode';

function App() {
  const [ activeTab, setActiveTab ] = useState('Encode')
  const [ imageData, setImageData ] = useState(null)

  const tabs = [ 'Encode', 'Decode' ]

  const loadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    console.log(file)

    reader.addEventListener(
      "load",
      () => {
        // convert image file to base64 string
        setImageData(reader.result)
      },
      false,
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="App">
      <main className="App-main">
        <Tabs tabs={ tabs } active = { activeTab } setActive = { setActiveTab }/>
        {
          activeTab === 'Encode' ? <Encode imageData={ imageData } loadImage={ loadImage } /> : <Decode />
        }
      </main>
    </div>
  );
}

export default App;
