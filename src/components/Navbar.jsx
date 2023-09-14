import { ImArrowUpRight, ImArrowDownLeft } from 'react-icons/im'
import { BsFillMoonFill } from 'react-icons/bs'
import { IoMdNotifications } from 'react-icons/io'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMood } from '../redux/mood'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [notif] = useState(true)
    const { mood } = useSelector(state => state.mood)
    const dispatch = useDispatch()

    useEffect(() => {
        const storedMood = localStorage.getItem('mood');
        if (storedMood) {
            dispatch(setMood(storedMood));
        }
    }, []);
    const toggleMood = () => {
        const newMood = mood === 'dark' ? 'light' : 'dark';
        dispatch(setMood(newMood));
        localStorage.setItem('mood', newMood);
    };

    const icons = [
        {
            icon: < IoMdNotifications />,
            id: 1,
            name: "notification",
        },
        {
            icon: <BsFillMoonFill />,
            id: 2,
            name: "mood",
        },
        {
            icon: <ImArrowUpRight />,
            id: 3,
            name: "Depart",
        },
        {
            icon: <ImArrowDownLeft />,
            id: 4,
            name: "Arrivee",
        }
    ]

    return (
        <div className={`${mood === "dark" ? "dark_nav" : "navbar"} p dontprint`}>
            <div className="icons">
                {
                    icons.map(icon => icon.name === "notification" ?
                        (<Link to='/notifications' key={icon.id} className={`${mood === "dark" ? "dark_icon" : "icon"}  pointer a`}>{icon.icon} {icon.name === "notification" && notif === true && <div className='notif'></div>} </Link>) :
                        icon.name === "Depart" ?
                            (<Link to='/depart' key={icon.id} className={`${mood === "dark" ? "dark_icon" : "icon"}  pointer a`}>{icon.icon} Depart </Link>) :
                            icon.name === "Arrivee" ?
                                (<Link to='/arrivee' key={icon.id} className={`${mood === "dark" ? "dark_icon" : "icon"}  pointer a`}>{icon.icon} Arrivee </Link>) :
                                icon.name === "mood" ?
                                    (<div onClick={toggleMood} key={icon.id} className={`${mood === "dark" ? "dark_icon" : "icon"}  pointer a`}>{icon.icon}</div>) : null
                    )
                }
            </div>
        </div>
    )
}

export default Navbar