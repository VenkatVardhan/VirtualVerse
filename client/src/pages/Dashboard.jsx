import React from 'react'
import { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'
import { DashboardProfile } from '../components/DashboardProfile'
import { DashboardSidebar } from '../components/DashboardSidebar'

export const Dashboard = () => {
  const [tab,setTab]=useState('');
  const location=useLocation();
  useEffect(()=>{
    const UrlParams= new URLSearchParams(location.search);
    const tabURL=UrlParams.get('tab');
    if(tabURL){
      setTab(tabURL);
    }


  },[location.search])
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      {/* side div */}
      <div className='md:w-56'>

      <DashboardSidebar/>
      </div>
      {/* profile div  */}
      <div>

       {tab==='profile' &&<DashboardProfile/>}
      </div>
    </div>
  )
}
