import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {AnimatePresence, motion, px} from 'framer-motion'
import { FaChevronLeft, FaCog } from 'react-icons/fa'

function SidebarDropdown({route, isOpen, isDrop}) {

  const [drop, setDrop] = useState(false);

  if(route.paths){
    isDrop = true;
  } else {
    isDrop = false;
  }

  const open = () =>{
    setDrop(!drop);
  }

  return (
    <>
      {isDrop ?
        // If route has multiple paths
        <>
          {/* Dropdown Button*/}
          <div className="link" onClick={open}>
            <div className="link_name">
              <div className="icon">{route.icon}</div>
              <AnimatePresence>
                {isOpen?
                  <motion.div
                    key={route.name + "Link"} 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                  >
                    {route.name}
                  </motion.div>:
                  <></>
                }
              </AnimatePresence>
            </div>
            <AnimatePresence>
              {isOpen?
                <motion.div
                  key={route.name+"Chevron"}
                  initial={{opacity:0}}
                  animate={{opacity:1, rotate: drop?-90:0}}
                  exit={{opacity:0, rotate: 0}}
                  className='icon'
                >
                  <FaChevronLeft/>
                </motion.div>:
                <></>
              }
            </AnimatePresence>
          </div>

          {/* Show items if dropdown is open */}
          {drop && isOpen?
            <NestedLinks paths={route.paths} drop={drop}/>:
            <></>
          }

        </>:

        // If route has single path
        <NavLink
          className={({isActive}) =>
            isActive ? "active" : "link"
            }
            to={route.path}
            key={route.name}  
        >
        
          <div className="link_name">
            {/* Link Icon */}
            <div className="icon">{route.icon}</div>
            {/* Link Name */}
            <AnimatePresence>
              {isOpen ? 
                <motion.div
                  key={route.name + "Link"} 
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  exit={{opacity:0}}
                >
                  {route.name}
                </motion.div>
                :<></>
              }
            </AnimatePresence>
          </div>
        </NavLink>
      }
    </>
  )
}

function NestedLinks({paths, drop}) {
  return (
    <>
      {paths.map((route) => (
        <AnimatePresence key={route.name+"_sublink"}>
          <motion.div
            style={{width:'100%'}}
            initial={{opacity:0, x:-50}}
            animate={{opacity:1, x:0}}
            exit={{x:-50, opacity:0}}
            transition={{
              duration:0.1,
              damping:13,
              type:'spring'
            }}
          >
            <NavLink
              className={({isActive}) =>
                isActive ? "subactive" : "sublink"
                }
                to={route.path}
                key={route.name}
            >
          
              <div className="link_name">
                {/* Link Icon */}
                <div className="icon">{route.icon}</div>
                {/* Link Name */}
                {drop ? 
                  <div>
                    {route.name}
                  </div>
                  :<></>
                }
              </div>
            </NavLink>
          </motion.div>
        </AnimatePresence>
      ))}
    </>
  );
}

export default SidebarDropdown