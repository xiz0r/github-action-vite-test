
import { createRoot } from 'react-dom/client'
import Popup from '@/popup/Popup'

const container = document.getElementById('popup-root')
const root = createRoot(container!)
root.render(<Popup />)
