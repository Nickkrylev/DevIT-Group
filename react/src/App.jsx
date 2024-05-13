import React, { useState } from 'react';
import MyModal from './components/Task1MyModal/Task1MyModal';
import CensoredText from './components/Task2CensoredText/Task2CensoredText';

function App() {
  const [open, setOpen] = useState(false);

  const badWords = ['test', 'somebadword',"add"];
  const someText = 'Very long text who contains someBadWord and testWord and add add some add someBadWord';

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <MyModal open={open} disableGlobalScroll={true}>
        <div>
          <h1>Some content</h1>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      </MyModal>

      <CensoredText badWords={badWords}>{someText}</CensoredText>
    </div>
  );
}

export default App;
