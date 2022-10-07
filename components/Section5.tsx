import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 


export default function Section5() {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value): any => {
    setOpen(open === value ? 0 : value);
  };
    
    return (

    
         <div className="bg-[url('/images/banner1.png')] bg-cover bg-center">

          <div className="pt-24 text-center flex flex-col ">

            <div className="  justify-center">
              <h1 className='font-black text-5xl font-roboto text-center'>F.A.Q</h1>

            </div>


            <div className="  justify-center items-center">
              <h1 className='text-2xl font-roboto'>Foire aux questions</h1>
            </div>
          </div>

          <div className="pb-24 pt-10 text-center flex  ">

            <div className=' w-4/12'></div>

            <div className=' w-6/12  flex flex-col text-left space-y-8'>

            <Fragment>
              <Accordion open={open === 1} >
                <AccordionHeader onClick={() => handleOpen(1)}  className="font-black text-3xl font-roboto"><span className="justify-between px-4 py-3 "> </span>
                <span className="justify-between px-4 py-3  ] " >Comment gagner des Kords </span> 
                </AccordionHeader>
                <AccordionBody>
                   <p className="px-4 py-3">
                        Nunc posuere dapibus urna quis cursus. Mauris malesuada tincidunt diam vel placerat mi tincidunt ac. Nullam augue urna, venenatis ut blandit eget, auctor vel eros. In ut dolor ante
                  </p> 
                  </AccordionBody>
                </Accordion>
                
                <Accordion  open={open === 2} >
                  <AccordionHeader onClick={() => handleOpen(2)} className="font-black text-3xl font-roboto"><span className="justify-between px-4 py-3 "> </span>
                  <span className="justify-between px-4 py-3  ] " >Comment retirer mes gains </span> 
                  </AccordionHeader>
                  <AccordionBody>
                   <p className="px-4 py-3">
                       Nunc posuere dapibus urna quis cursus. Mauris malesuada tincidunt diam vel placerat mi tincidunt ac. Nullam augue urna, venenatis ut blandit eget, auctor vel eros. In ut dolor ante
                   </p> 
                  </AccordionBody>
                </Accordion>
                <Accordion  open={open === 3}>
                  <AccordionHeader onClick={() => handleOpen(3)} className="font-black text-3xl font-roboto"><span className="justify-between px-4 py-3 "> </span>
                 <span className="justify-between px-4 py-3  ] " >Quand est-il de mes données </span> 

                  </AccordionHeader>
                    <AccordionBody>
                      <p className="px-4 py-3">
                        Nunc posuere dapibus urna quis cursus. Mauris malesuada tincidunt diam vel placerat mi tincidunt ac. Nullam augue urna, venenatis ut blandit eget, auctor vel eros. In ut dolor ante
                      </p>
                    </AccordionBody>
                  </Accordion>
                  <Accordion open={open === 4} >
                <AccordionHeader onClick={() => handleOpen(4)}  className="font-black text-3xl font-roboto"><span className="justify-between px-4 py-3 "> </span>
                     <span className="justify-between px-4 py-3  ] " >Comment gagner des Kords </span>   
                </AccordionHeader>
                <AccordionBody>
                   <p className="px-4 py-3">
                        Nunc posuere dapibus urna quis cursus. Mauris malesuada tincidunt diam vel placerat mi tincidunt ac. Nullam augue urna, venenatis ut blandit eget, auctor vel eros. In ut dolor ante
                  </p> 
                  </AccordionBody>
                </Accordion>
                
                <Accordion  open={open === 5} >
                  <AccordionHeader onClick={() => handleOpen(5)} className="font-black text-3xl font-roboto"><span className="justify-between px-4 py-3 "> </span>
                  <span className="justify-between px-4 py-3  ] " >Comment retirer mes gains </span> 
                  </AccordionHeader>
                  <AccordionBody>
                   <p className="px-4 py-3">
                       Nunc posuere dapibus urna quis cursus. Mauris malesuada tincidunt diam vel placerat mi tincidunt ac. Nullam augue urna, venenatis ut blandit eget, auctor vel eros. In ut dolor ante
                   </p> 
                  </AccordionBody>
                </Accordion>
                <Accordion  open={open === 6}>
                  <AccordionHeader onClick={() => handleOpen(6)} className="font-black text-3xl font-roboto"><span className="justify-between px-4 py-3 "> </span>
                <span className="justify-between px-4 py-3  ] " >Quand est-il de mes données </span>  

                  </AccordionHeader>
                    <AccordionBody>
                      <p className="px-4 py-3">
                        Nunc posuere dapibus urna quis cursus. Mauris malesuada tincidunt diam vel placerat mi tincidunt ac. Nullam augue urna, venenatis ut blandit eget, auctor vel eros. In ut dolor ante
                      </p>
                    </AccordionBody>
                  </Accordion>
              
              </Fragment>
          

              

             

            </div>


            <div className=' w-4/12'></div>


          </div>
        </div>
      
           )


           
}
