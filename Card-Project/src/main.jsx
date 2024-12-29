import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './Components/card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card username={'Deepak'} cta={'Read more'} details={'The lorem tag inserts a specified amount of random text. The "random" text is the famous "Lorum ipsum" text, in lower case letters.'} />
    <Card username={'Rahul'} cta={'Visit me'} details={'To insert non-localized, pseudo-Latin sample text in Word, type =lorem() in the document where you want the text to appear, and then press ENTER.'}/>

  </StrictMode>,
)
