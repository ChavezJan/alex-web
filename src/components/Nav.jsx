// Components
import NavMenu from './NavMenu'

const Nav = ({ menu, setMenu, currentMenu, setCurrentMenu}) => {
    return (
        <nav>
            {
                menu.map(menuSelected => (
                    <NavMenu 
                        menu={menu}
                        setMenu={setMenu}
                        menuSelected={menuSelected}
                        key={menuSelected.id}
                        setCurrentMenu={setCurrentMenu}
                    />
                    ))
            }
        </nav>
    )
}

export default Nav