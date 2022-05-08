import React, { useEffect } from 'react'
import Logo from '../../../assets/logo.jsx'
import Dropdown from '../../Dropdown/Dropdown'

import Time from './Time'

const settingsObject = {
    icon: [],
    about: [],
    projects: [],
    thoughts: []
}
const settingsArray = Object.keys(settingsObject)

const navigationItems = [
    {Item: () => <Logo />, name: 'Icon'}, {Item: () => <b>About Me</b>, name: 'About'},
    {Item: () => <>Projects</>, name: 'Projects'}, {Item: () => <>Thoughts</>, name: 'Thoughts'}
]

const TopSettings = () => {
    const [toggled, setToggled] = React.useState(false)
    const [setting, setSetting] = React.useState('')
    const settingsRef = React.useRef(null)
    const navItemClicked = (index) => {
        let setting = settingsArray[index].substring(0, 1).toUpperCase() + settingsArray[index].substring(1)
        setSetting(setting)
    }
    useEffect(() => {
        // capture the event of a user presses outside of the settings bar
        function anonymous(e) {
            if (!settingsRef.current.contains(e.target)) 
                setToggled(false)
        }
        document.addEventListener('click', anonymous)
        return () => document.removeEventListener('click', anonymous)
    })
    console.log("toggled",toggled)
    console.log("setting",setting)
  return (
    <div ref={settingsRef} className='top-settings'>
        <div onClick={() => setToggled(!toggled)} className='settings-left settings-item'>
            {navigationItems.map(({Item, name}, i) => {
                return <div onClick={() => navItemClicked(i)} className={`settings-wrapper ${toggled && "settings-wrapper--active"}`}>
                    {i === 0 && <Item />}
                    {i !== 0 && <span>{<Item />}</span>}
                </div> 
            })}
        </div>
        <div className='settings-right settings-item'>
            <Time />
        </div>
    </div>
  )
}

export default TopSettings