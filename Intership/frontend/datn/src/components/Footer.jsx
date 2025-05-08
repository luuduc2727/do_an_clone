import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-200 py-4 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p>We are a team of passionate individuals dedicated to providing the best job opportunities.</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Jobs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fa fa-facebook-f"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fa fa-twitter"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fa fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}   
export default Footer;
