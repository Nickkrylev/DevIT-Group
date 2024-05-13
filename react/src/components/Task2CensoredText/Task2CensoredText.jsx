import React, { useState } from 'react';

function CensoredText({ badWords, children }) {
  const [visibleWords, setVisibleWords] = useState(new Set());

  const toggleWordVisibility = (word) => {
    setVisibleWords(prev => {
      const newSet = new Set(prev);
      if (newSet.has(word)) {
        newSet.delete(word);
      } else {
        newSet.add(word);
      }
      return newSet;
    });
  };

  const regex = new RegExp(`\\b(${badWords.join('|')})\\b`, 'gi');
  const parts = children.split(regex);

  return (
    <div>
      {parts.map((part, index) => {
        if (badWords.includes(part.toLowerCase())) {
          if (visibleWords.has(part)) {
            return <span key={index} onClick={() => toggleWordVisibility(part)} style={{ cursor: 'pointer' }}>{part}</span>;
          }
          return <span key={index} onClick={() => toggleWordVisibility(part)} style={{ cursor: 'pointer' }}>{'*'.repeat(part.length)}</span>;
        }
        return <span key={index}>{part}</span>;
      })}
    </div>
  );
}

export default CensoredText;
