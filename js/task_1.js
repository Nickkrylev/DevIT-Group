
const { JSDOM } = require('jsdom');
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const document = dom.window.document;

function nodeChildCount(node, depth = Infinity) {
    let count = 0;
  
    
    function countChildren(currentNode, currentDepth) {
      if (currentDepth > depth) {
        return;
      }

      currentNode.childNodes.forEach(child => {
        count++;
        countChildren(child, currentDepth + 1);
      });
    }
  
  
    countChildren(node, 1);

    return count;
  }
  

  const div = document.createElement('div');
  const div2 = document.createElement('div');
  const p = document.createElement('p');
  const span = document.createElement('span');
  const span2 = document.createElement('span');
  p.appendChild(span);
  span.appendChild(span2);
  div.appendChild(p);
  div.appendChild(div2);
  
  console.log(nodeChildCount(div));  
  console.log(nodeChildCount(div, 1)); 
  console.log(nodeChildCount(div, 2));
  console.log(nodeChildCount(div, 3)); 
 
  
  