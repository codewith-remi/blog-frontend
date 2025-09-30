import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import SideMenu from './SideMenu'
import Navbar from './Navbar'

const DashboardLayout = ({ children, activeMenu }) => {

  const { user } = useContext(UserContext)

  return (
    <div className="">
      <Navbar activeMenu={activeMenu} />  

      {user && (
        <div className="flex">
          <div className="w-[250px] max-[1080px]:hidden">
            <SideMenu activeMenu={activeMenu} setOpenSideMenu={()=>{}} />
          </div>

          <div className="flex-1 mx-5">{children}</div>
        </div>
      )}
    </div>
  )
}

export default DashboardLayout