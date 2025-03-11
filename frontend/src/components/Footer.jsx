import React from 'react'
import { Copyright } from "lucide-react";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content h-[4vh]">
        <aside className='flex flex-row'>
            <Copyright />
            <p>{new Date().getFullYear()} - All right reserved by Smart Programming</p>
        </aside>
    </footer>
  )
}

export default Footer