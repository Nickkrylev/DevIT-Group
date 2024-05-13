import React, { useState } from 'react';
import MyModal from './Task1MyModal';
import CensoredText from './Task2CensoredText';

function App() {
  const [open, setOpen] = useState(false);

  const badWords = ['test', 'somebadword'];
  const someText = 'Very long text who contains someBadWord and testWord';

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
