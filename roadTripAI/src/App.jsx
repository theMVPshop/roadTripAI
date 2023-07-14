import "./styles/App.css"

import MenuBar from './components/MenuBar.jsx'
import LeafletMap from './components/LeafletMap.jsx'
import MainMenu from './components/MainMenu.jsx'

function App() {
  return (
    <div className="app">
    <MenuBar />
    <MainMenu className="menu"/>
    <LeafletMap/>
    </div>
  )
}

export default App;
