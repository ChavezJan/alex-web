// Use State
import {useState} from 'react'
// Styles
import './styles/app.scss'
// Components
import Title from './components/Title'
import Nav from './components/Nav'
import Body from './components/Body'
import data from './data'

function App() {
  // State
  const [menu,setMenu] = useState(data())
  const [currentMenu,setCurrentMenu] = useState(menu[0])

  return (
    <div className="App">
      <Title />
      <Nav 
        menu={menu} 
        setMenu={setMenu} 
        currentMenu={currentMenu} 
        setCurrentMenu={setCurrentMenu}
      />
      <Body currentMenu={currentMenu}/>
    </div>
  );
}

export default App;
