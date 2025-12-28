
import { Outlet } from 'react-router'
import './App.css'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'

function App() {


  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className=" flex-1 bg-base-200">
          <div className="mx-auto w-full">
            <Outlet>
              
            </Outlet>
          </div>
        </div>
        <div className="bg-[#001931]">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App
