const NavMenu = ({menuSelected, setCurrentMenu, menu,setMenu}) => {
    
    // modifica el state para ver que menu esta activo
    const selectMenu = async () =>{
        setCurrentMenu(menuSelected)
        // Adding active state 
        const newMenu = menu.map((nMenu) => {
            if(nMenu.id === menuSelected.id){
                return{
                    ...nMenu,
                    active: true,
                }
            }else{
                return{
                    ...nMenu,
                    active: false,
                }
            }
        })
        
        await setMenu(newMenu)

    }

    return(
        <button onClick={selectMenu}>
            {menuSelected.name}
        </button>
    )
}

export default NavMenu