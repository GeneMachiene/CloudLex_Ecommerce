import React, { useContext, useState } from 'react'
import {AnimatePresence, motion, px} from 'framer-motion'
import {
  FaHome,
  FaUsers,
  FaEnvelopeOpenText,
  FaChartLine,
  FaGamepad,
  FaBars,
  FaSearch,
  FaTable,
  FaCog,
  FaUser,
  FaTrash,
  FaMailBulk,
  FaWindowClose,
  FaLock,
  FaSignOutAlt,
  FaSignInAlt,
  FaUnlockAlt
} from 'react-icons/fa'
import '../components/Sidebar.css'
import SidebarDropdown from './SidebarDropdown'
import { UserContext } from '../UserContext'
import {logout} from '../api/user';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const routes = [
  {
    path: '/',
    name: "Home",
    icon: <FaHome/>
  },
  {
    path: '/users',
    name: "Users",
    icon: <FaUsers/>
  },
  {
    name: "Messages",
    icon: <FaEnvelopeOpenText/>,
    paths: [
      {
        path: '/inbox',
        name: 'Inbox',
        icon: <FaMailBulk/>
      },
      {
        path: '/spam',
        name: 'Spam',
        icon: <FaTrash/>
      },
    ]
  },
  {
    path: '/analytics',
    name: "Analytics",
    icon: <FaChartLine/>
  },
  {
    path: '/demo',
    name: "Demo",
    icon: <FaGamepad/>
  },
  {
    path: '/rmt',
    name: "React Material Table",
    icon: <FaTable/>
  },
  {
    name: "Settings",
    icon: <FaCog/>,
    paths: [
      {
        path: '/profile',
        name: 'Profile',
        icon: <FaUser/>,
      },
      {
        path: '/passwords',
        name: 'Passwords',
        icon: <FaLock/>,
      },
      {
        path: '/privacy',
        name: 'Privacy',
        icon: <FaWindowClose/>,
      }
    ]
  },
]

function Sidebar({children}) {

  const [isOpen, setIsOpen] = useState(true);
  const {user, setUser} = useContext(UserContext);
  const history = useNavigate();

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const handleLogout = (e) => {
    e.preventDefault();
    console.log("logging out")

    logout().then((res) => {
      toast.success(res.message);
      //set user to null
      setUser(null);
      console.log(user);  
      //redirect to login
      history("/login")
    }).catch((err) => {console.error(err)});
  }

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
    },
    show: {
      opacity: 1,
      padding: "6px",
      transition:{
        duration: 0.2,
      }
    }
  }

  const fadeAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition:{
        duration: 0.5,
        type: 'spring',
        damping: 14
      }
    }
  }

  return (
    <div className='container'>
      <motion.div
        className='sidebar'
        animate={{width: isOpen ? "250px" : "40px"}}
        transition={{
          duration: 0.5,
          type: 'spring',
          damping: 14
        }}
      >
        {/* Title Container */}
        <div className="title">
          <AnimatePresence>
            {isOpen ? 
              <motion.div
                key="Title"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={fadeAnimation}
              >
                Framer-Motion
              </motion.div>
              : ""}
          </AnimatePresence>
          <div ><FaBars className='icon burger' size={20} onClick={toggle}/></div>
        </div>

        {/* Container for search icon and search bar */}
        <div className="search">
          
          <div className="icon"><FaSearch size={20}/></div>

          <AnimatePresence>
            {isOpen ?
              <motion.input
                key="Search-Bar"
                className='search-bar'
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={inputAnimation}
                type="text" placeholder='Search...'
              /> :
              <></>
            }
          </AnimatePresence>
          
        </div>
        <section>
          {user?
          <span className='link' onClick={handleLogout} style={{cursor:'pointer'}}>✖ Log out</span>:
          <><SidebarDropdown route={{path: '/login', name: "Login", icon: <FaUnlockAlt/>}} isOpen={isOpen} key={"login_link"}/>
          <SidebarDropdown route={{path: '/signup', name: "Sign Up", icon: <FaSignInAlt/>}} isOpen={isOpen} key={"signup_link"}/></>}
        </section>

        {/* Container for Links */}
        <section className='links'>
          
          {/* Individual Links */}
          {user ? routes.map((route) => (
            <SidebarDropdown route={route} isOpen={isOpen} key={route.name + "_link"}/>
          )):<></>}

        </section>
      </motion.div>
      

      {/* This is where pages go */}
      <div className='content'>{children}</div>
    </div>
  )
}

export default Sidebar