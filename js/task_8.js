String.prototype.removeDuplicate = function() {
    
    const words = this.split(" ");
    const uniqueWords = [...new Set(words)];
    return uniqueWords.join(" ");
  };
  
  // Использование нового метода
  let x = "Int32 Int32 Int32 Int32 Int32 Int32 In67 Int32 Int32 Double Double Double";
  console.log(x.removeDuplicate()); 
  