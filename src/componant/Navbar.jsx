 import React from 'react'
 import "../componant/Portfolia.css"
 
 function Navbar() {

    const scrollWin=(data)=>{
        window.scroll({
            top: 300,
            left: 1,
            behavior: 'smooth'
          });
          
    }
   return (
     <div style={{display:'flex',
     justifyContent:"flex-end",gap:'20px',
     backgroundColor:'wheat',cursor:"pointer",
     fontSize:"20px",padding:"15px",
     position:'sticky',
     boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
     }}>
         <button className='button' onClick={scrollWin(0)}>Home</button>
         <button className='button' onClick={scrollWin(20)}>About</button>
         <button className='button' onClick={scrollWin(50)}>Skills</button>
         <button className='button' onClick={scrollWin(290)}>Contact</button>
        
     </div>
   )
 }
 
 export default Navbar