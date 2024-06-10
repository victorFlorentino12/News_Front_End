"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import './style.css'

const Menu = ()=>{
  const [menuState, setMenuState] = useState(false)
  const router = useRouter()

    const MenuOpen = ()=> {
       setMenuState(true)
    }
    const MenuClose = ()=> {
        setMenuState(false)
    }
    return(
        <>
            <nav className='menu'>
                <button onClick={() => MenuOpen()}>Menu buger</button>
                <div>Logo</div>
                <button onClick={() => router.push('/login')}>Login</button>
            </nav>       
            { menuState &&
                <div className="menu_lateral">
                    <ul>
                        <button onClick={() => MenuClose()}>close</button>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                    </ul>
                </div> 
            }


        </>
    )
}
export default Menu