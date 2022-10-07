import Image from 'next/image';


export default function Section6() {
    
    return (
        <div className='flex'>
          <div className=' w-2/12'></div>
           <div className=" mt-36 bg-[url('/images/banner3.png')] bg-cover bg-center  mb-28 rounded-3xl border-solid border-8 border-color " >
                    
                 <div className="py-5 text-center ">
                    <h1 className='font-black text-5xl leading-[56px] font-roboto'>Partenaires & Concours</h1>
                </div>
                 <div className="flex flex-row mx-5 ">
                   <div className="grid grid-flow-col auto-rows-max mix-blend-luminosity grayscale items-center">
                        <div className='left-[200px] mix-blend-luminosity grayscale '>
                             <Image
                             src="/images/logo-cic.png"
                             height={60} 
                             width={132}
                             alt="Your Name"
                             className=''
                               />
                        </div>
                        <div className='ml-6 mix-blend-luminosity inline-block'>
                            <Image
                             src="/images/logo-sb.png"
                             height={20} 
                             width={221}
                             alt="Your Name"
                             className=''
 
                               />
                       </div>
                       <div className='ml-6 mix-blend-luminosity'>
                            <Image
                             src="/images/logo-ho.png"
                             height={20} 
                             width={130}
                             alt="Your Name"
                             className=''
 
                               />
                       </div>
                        <div className='ml-6 mix-blend-luminosity'>
                            <Image
                             src="/images/logo-gb.png"
                             height={86} 
                             width={168}
                             alt="Your Name"
                             className=''
 
                               />
                       </div>
                        <div className='ml-6 mix-blend-luminosity'>
                            <Image
                             src="/images/logo-tech.png"
                             height={75} 
                             width={85}
                             alt="Your Name"
                             className=''
 
                               />
                       </div>
                       <div className='ml-6 mix-blend-luminosity'>
                            <Image
                             src="/images/logo-qo.png"
                             height={92} 
                             width={120}
                             alt="Your Name"
                             className=''
 
                               />
                       </div>
                  </div>
                </div>
                 <div className=" mx-5 py-5  ">
                   <div className="flex flex-row auto-rows-max mix-blend-luminosity grayscale items-center">
                              <div  className='ml-6  w-4/12'></div>

                              <div className='ml-6 '>
                                  <Image
                                  src="/images/logo-pa.png"
                                  height={51} 
                                  width={109}
                                  alt="Your Name"
                                  className=''
      
                                    />
                              </div>
                    
                              <div className='ml-6 '>
                                    <Image
                                    src="/images/logo-canafran.png"
                                    height={53} 
                                    width={148}
                                    alt="Your Name"
                                    className=''
        
                                      />
                              </div>

                             <div className='ml-6  w-4/12'></div>
                       
                     
                      
                       </div>
                 </div>
                
                           
            </div>
            <div className=' w-2/12'></div>
        </div>
           )
}
