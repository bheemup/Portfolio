import React from 'react'
import photo from "../Photos/dev (2).png";
import "../componant/Portfolia.css";
import modesense from "../Photos/modesense.jpg";
import sugar from "../Photos/sugar.jpg";


function Body() {
  return (
    <>
    <div className='port'>
      <div className='folio'>
      <img className='photo' src={photo} alt="" />
      </div>
      <div className='hii'>
         <h1>Hii Stranger</h1>
         <h2>I m Bheem Ratan</h2>
         <h1> I am a Full Stack Web Developer,
               <p className='ptag'> Hey I am a software developer ,
                 I work at some Project like Modesense Clone , Sugar Cosmetic Clone etc
                   you can see my project.
               </p>
         </h1>
                        
       </div>

    </div>


    <h1 className='h1tag'>Projects</h1>
    <div className='projects'>
     
     <br />
   <div className='modesense'>
    <img src={modesense} alt="" />
     <h2>Tech Stack</h2>
       <ul>
       <li>React</li>
        <li>Java Script</li>
        <li>Chakra UI</li>
        <li>Google Authentication</li>
        <li>CSS</li>
       </ul> 
    
   </div>

   <div className='cosmetic'>
    <img src={sugar} alt="" />
    <h2>Tech Stack</h2>
       <ul>
       <li>React</li>
        <li>Java Script</li>
        <li>Chakra UI</li>
        <li>CSS</li>
       </ul> 
  </div>

</div>

   <div className="footer">
 

  
  <h2>Contacts</h2>

  <div style={{display:"flex"}}>
        <img className='con' src="data:image/png;base64,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" alt="" />
        <a>Gmail</a>

     </div>

     <div style={{display:'flex'}}>
        <img className='con' src="data:image/png;base64,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" alt="" />
        <a>Facebook</a>

     </div>
     <div style={{display:'flex'}}>
        <img className='con' src="data:image/png;base64,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" alt="" />
         <a>Git</a>
     </div>

     <div>
        <img className='con' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAYFBMVEUAe7b///8Aaq7o7/UAdbMAcLHc6PJ6rNC6zuMAd7QAcrIAbbB3pcv7/P2gwtsAebWEsNJblcOoxd3z+PvS4u5insgYgblFj8Gyy+E0iL2/1edOlMNQkMHG2ulCir2MttWEt+JlAAADDUlEQVR4nO2c23KrIBSGQdEUlKDxbGp8/7esJmlrZWUXmRHsnvXPZHIhiV84rBMSQmeFl6pWxK3q6hLeb06ml8yUUK4JiFKCZPKBUDSR8/s/KcS1mBFkw/wAzGKNnBBOwh8BIeJEScw9jcJDSsXk7LUTpm44kyv3i8Cvfu+PQqH+mpRy78KX4oxxojhnvqynCvL2HtPEbZd4IRBNTL/U1x4CCpHSpcLcOcOKYAouG8cTgl/pWgVxuzSSUEOgvdPAhq2H4T4U7y67gQ0AAnUa3zGIgIaBOwLVgQguJySvQATZ+Ue4uUN4NRC1M4LJOXqfjoSXEEIbOURgGYSQO/USUaETDG4zTw5YaIfr4a7ovCao3AcM40+C1OVc/GSoFg679FMJYuQUz7NSFmXqK4ZWLKjzNL2qxGsJhE/ymsug/gd5zoi5ELMhUWx6t11Oiuv69+WvXzzftzr3QxmX5dC32S0SNnaNV6mm/Ltb1U2//LmZIVS2jjaGjGwv9Acx1fT27SXY6VU0IWrNv80q2m6rq9+OIO8I4gRkgg+IcaOJs0NQAZiFPVWyTQxWCLx+1QXPjqi3LA4bBPYLwRSCb9l/s0FIgM+sNGxYnRYI75dfCSgdzdfFdoQCjPs1UPOEzMIuAGE/oItxN1ggGEqYzsj9EIxnw34Ipalt2A/BOCnbESE1tA07IvSGaZk9QlGOVdM11eWVrYz3RjjPMZJSnAmewi6j6HZFkIvHIJQgIIM0rJTYIRS3H1ONMwm1SvdESFdmh41Qq8xsSVghlNp3C8hxGJayrRD0OoyAHHi7H4LUVxvPgXaD2aq0Qej1MVY3qHJntt1ng3AGEAjwPfF+CJDxj4AybmxWR7ZBgJ6ISYDEwrCUbYMA7VZEby4RJJSwidYpArTcIcOwIwI00QWQZyMCIiACIiACIiACIiACIiACIiACIiCCA4RkCDUtdrZYWujXoVoeG/V2peED9kmgaVnCYPpl+LcJvZ2fR/xRKBTqT+oAB1sPcLz3AIecD3DU+wgH3g9w7P8If35APf8FxAcJcjx2adB7kgAAAABJRU5ErkJggg==" alt="" />
        <a>LinkedIn</a>
     </div>

     


   </div>
    </>
  )
}

export default Body