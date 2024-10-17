import React from 'react'
import TopPage from './components/TopPage'
import Login from './components/Login'
import CodePosting from './components/CodePosting'
import Profile from './components/Profile'
import CodeDetails from './components/CodeDetails'
import ServicesCategory from './components/ServicesCategory'
import FixedCode from './components/FixedCode'
import Review from './components/Review'
import Forum from './components/Forum'

const App = () => {
  return (
    <div className="p-[8px] bg-gradient-to-r from-[#E386A6] via-[#737AFF] to-[#737AFF] ">
      {/*<TopPage />*/}
      {/*<Login/>*/}
      {/*<CodePosting/>*/}
      {/*<Profile/>*/}
    {/*  <CodeDetails/> */}
    {/*<ServicesCategory/>*/}
    {/*<FixedCode/>*/}
    {/*<Review/>*/}
    <Forum/>
    </div>
  )
}

export default App