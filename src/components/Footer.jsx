import React from 'react'
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='bg-stone-600 p-8 mt-8 text-white'>
      <div className='flex flex-col md:flex-row md:justify-between md:items-start items-center gap-8'>
        <div className='w-full md:w-1/3 text-center md:text-left'>
          <h3 className='text-2xl'>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className='w-full md:w-1/3 text-center md:text-left'>
          <h3 className='text-2xl'>Services</h3>
          <ul>
            <li><a href="/burger">Burger</a></li>
            <li><a href="/pizza">Pizza</a></li>
            <li><a href="/salad">Salad</a></li>
            <li><a href="/dessert">Dessert</a></li>
          </ul>
        </div>
        <div className='w-full md:w-1/3 text-center md:text-left flex flex-col'>
          <h3 className='text-2xl'>Contact Us</h3>
          <input type="email" name="email" placeholder="Your email" className='border border-white p-2 rounded w-full md:w-auto' />
          <input type="phone" name="phone" placeholder="+91 (123) 456-7890" className='mt-3 border border-white p-2 rounded w-full md:w-auto' />
          <button type="button" className='bg-blue-500 text-white px-4 py-2 rounded cursor-pointer mt-3 w-full md:w-auto'>Connect</button>
        </div>
      </div>
     <div className="flex flex-col items-center mt-8 gap-4">
       <div className=''>
        <h3>Follow Us</h3>
        <ul className='flex gap-3'>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
        </ul>
      </div>
      <div>
        &copy; 2024 My Company. All rights reserved.
      </div>
     </div>

    </footer>
  )
}