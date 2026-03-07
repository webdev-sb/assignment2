import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* Navbar  */}
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Home</a></li>
              <li><a>FAQ</a></li>
              <li><a>ChangeLog</a></li>
              <li><a>Blog</a></li>
              <li><a>Download</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">CS - Ticket System</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Home</a></li>
              <li><a>FAQ</a></li>
              <li><a>ChangeLog</a></li>
              <li><a>Blog</a></li>
              <li><a>Download</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <a className="btn text-white h-14 bg-linear-to-bl from-violet-500 to-fuchsia-500">+  New Ticket</a>
        </div>
      </div>










      {/* Banner  */}

      <div className='p-5 m-5 flex items-center justify-center'>
        <div className="card bg-base-100 w-96 shadow-sm m-5 flex items-center justify-center p-5  ">
          <div className="card-body">
            <h2 className="card-title">In-Progess</h2>
          </div>
          <div>
            <span className=''>0</span>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm m-5 flex items-center justify-center p-5">
          <div className="card-body">
            <h2 className="card-title">Resolved</h2>
          </div>
          <div>
            <span className=''>0</span>
          </div>
        </div>
      </div>


      {/* Customer Ticket Section */}
      <div>
        <h1>Customer Tickets</h1>

      </div>















      {/* Footer  */}
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">CS - Ticket System</h6>
          <div>CS - Ticket System is a multi....</div>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact salad</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover"> @CS - Ticket System</a>
          <a className="link link-hover">@CS - Ticket System</a>
          <a className="link link-hover"> support@cst.com</a>
        </nav>
        
      </footer>
      <div className='bg-neutral text-neutral-content flex items-center justify-center'>2025 CS - Ticket System. All rights reserved</div>

    </>
  )
}

export default App
