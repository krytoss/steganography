import { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Encode from './components/Encode';
import Decode from './components/Decode';
import IntroAccordion from './components/elements/IntroAccordion';

function App() {
  const [ activeTab, setActiveTab ] = useState('Encode')

  const tabs = [ 'Encode', 'Decode' ]

  //TODO: dorobiť accordion na úvodné texty
  return (
    <div className="App">
      <main className="App-main">
        <h1 className='text-xxl'>Steganography example</h1>
        <IntroAccordion
          items={[
            {
              title: 'What is steganography?',
              content: <>
                <p>
                  Steganography is the practice of representing information within another message or physical object, in such a manner that the presence of the information is not evident to human inspection.
                </p>
                <p>
                  In this example app, we hide a message in a provided image. To do so, please upload an image in the "Encode" section, type your message in the text area and click on "Encode the message". After that, you can download the image with the hidden message. The difference between those 2 images is impossible to spot with a naked eye, which makes it a perfect mean to send hidden messages.
                </p>
                <p>
                  To decode a message within an image, upload an image in the "Decode" section, and click on "Decode the message".
                </p>
              </>
            },
            {
              title: 'How does it work?',
              content: <p>
                Every character has its numeral representation (check: <a href='https://en.wikipedia.org/wiki/ASCII'>ASCII</a>).
                In this app, this numeral representation is then converted to 8bit binary number, thus we can only use the first 256 characters of ASCII table (only base characters + latin).
                Every binary number is then hidden in 2 pixels - each pixel has 4 values - RGBA. These values are manipulated, so that we can store 0 or 1 in them (or in other words, changing the least significant bit).
                I changed each of these value to an even number (eg. if R channel in first pixel was 251, I changed it to 250, which is impossible to see by human eye).
                Then, if I want to store 0 in the channel I leave it even, and if I want to store 1, I make it odd again, therefore each channel can be then easily
                decoded by calling modulo 2 function (channel % 2).
                To make sure I decode the whole message, not less and not more, I store the length of the message in the first 2 pixels of the image.
              </p>
            }
          ]}
        />
        <Tabs tabs={ tabs } active = { activeTab } setActive = { setActiveTab }/>
        {
          activeTab === 'Encode' ? <Encode /> : <Decode />
        }
      </main>
    </div>
  );
}

export default App;
