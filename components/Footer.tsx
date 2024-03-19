import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer p-10 bg-base-200 text-base-content"> 
  <nav>
    <h6 className="footer-title">Shop and Learn</h6> 
    <a className="link link-hover">Store</a>
    <a className="link link-hover">Maac</a>
    <a className="link link-hover">Ipad</a>
    <a className="link link-hover">Iphone</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Account</h6> 
    <a className="link link-hover">Manage Your Apple ID</a>
    <a className="link link-hover">Apple Store Account</a>
    <a className="link link-hover">iCloud.com</a>
  </nav> 
  <nav>


    <h6 className="footer-title">Apple Store</h6> 
    <a className="link link-hover">Today at Apple</a>
    <a className="link link-hover">Apple Camp</a>
  </nav>
</footer>
    </div>
  )
}

export default Footer