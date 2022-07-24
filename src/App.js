import React from 'react';
import './App.css';
import { Accessibility } from 'accessibility/src/main';
function App() {  
  window.addEventListener('load', function() { new Accessibility(); }, false);

  var labels = {
    resetTitle: 'reset (in my language)',
    closeTitle: 'close (in my language)',
    menuTitle: 'title (in my language)',
    increaseText: 'increase text size (in my language)',
    decreaseText: 'decrease text size (in my language)',
    increaseTextSpacing: 'increase text spacing (in my language)',
    decreaseTextSpacing: 'decrease text spacing (in my language)',
    invertColors: 'invert colors (in my language)',
    grayHues: 'gray hues (in my language)',
    underlineLinks: 'underline links (in my language)',
    bigCursor: 'big cursor (in my language)',
    readingGuide: 'reading guide (in my language)',
    textToSpeech: 'text to speech (in my language)',
    speechToText: 'speech to text (in my language)'
};

var options = { labels: labels };
options.textToSpeechLang = 'en-US'; // or any other language
options.speechToTextLang = 'en-US'; // or any other language

var options = {
  hotkeys: {
    enabled: [true/false]
  }
};

options.modules = {
  increaseText: [true/false],
  decreaseText: [true/false],
  invertColors: [true/false],
  increaseTextSpacing: [true/false],
  decreaseTextSpacing: [true/false],
  grayHues: [true/false],
  underlineLinks: [true/false],
  bigCursor: [true/false],
  readingGuide: [true/false],
  textToSpeech: [true/false],
  speechToText: [true/false]
};
new Accessibility(options);

return (
     <div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
     </div>
  );
}
export default App;