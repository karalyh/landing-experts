import React from "react";
import Image from 'next/image';

const Tabs = ({ color }:any) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className=" ">
        <div className="w-full">
            <div className="flex" role="tablist">
            <div className="w-2/12"></div>
            <div className="w-5/12">
                    <div className="justify-center items-center">
                        <h1 className='text-[#1fa6a3] text-5xl font-roboto'>
                        
                                <a
                                className={
                                "text-[#1fa6a3] text-5xl font-roboto " +
                                (openTab === 1
                                    ? "text-[#1fa6a3] text-5xl font-roboto"
                                    : "text-[#d8d8d8] text-5xl font-roboto")
                                }
                                onClick={e => {
                                e.preventDefault();
                                setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                    Créateurs & Professionnels
                            </a> 
                        </h1>
                </div>
            </div>
            <div className="w-1/12"></div>
            <div className="w-2/12 ">
                <div className="justify-center items-center">
                <h1 className='text-[#F48F1F] font-black text-5xl font-roboto'>
                <a
                    className={
                    " font-black text-5xl font-roboto " +
                    (openTab === 2
                        ? "text-[#F48F1F] font-black text-5xl font-roboto"
                        : "text-[#d8d8d8] ")
                    }
                    onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                >
                    Auditeurs
                
                </a></h1>
                </div>
            </div>
            <div className="w-2/12"></div>

            </div>
            
            <div className="border flex-1 w-2/12 ">
            </div>

            <div className="flex w-4/12 ">
                    {/* <div className={openTab === 1 ? "block" : "hidden"} id="link1"  > 
                            <div className="border"> bhjsdbjhbasjhb</div>
                            <div className="border"> ndjfnjdnhjsndh</div>
                            <div className=" border"> dknwqjkndjknj</div>
                            <div className="border">njefnjnwejnfjk</div>
                   </div> */}
                   <div className={openTab === 1 ? "block" : "hidden"} id="link1"  >
                  
                   
                   
                   <div className="border w-2/6">rfvfsvsdvs</div>
                   <div className="border w-4/12">csdcsdcs</div>
                    <div className="border w-4/12">dfdsfsdfsdf</div>
                    <div className="border w-2/12">fsdfsdf</div>
                 
                    </div>
                   {/*  */}
                    
                  {/* <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                            <div className="border ">asdasdfsdfsdfsd</div>
                            <div className="border ">asdasdfsdfsdfsd</div>
                            <div className="border ">asdasdfsdfsdfsd</div>
                  </div> */}
                   


            </div>
                
            <div className="flex w-4/12 ">
                    {/* <div className={openTab === 1 ? "block" : "hidden"} id="link1"  > 
                            <div className="border"> bhjsdbjhbasjhb</div>
                            <div className="border"> ndjfnjdnhjsndh</div>
                            <div className=" border"> dknwqjkndjknj</div>
                            <div className="border">njefnjnwejnfjk</div>
                   </div> */}
                   <div className={openTab === 2 ? "block" : "hidden"} id="link2"  >
                  
                   <div className="border flex-1 w-/6"> 
                   
                   <div className="border w-full">sssssssssss</div>
                   <div className="border ">oooooooooooooo</div>
                    <div className="border ">dddddddddddddd</div>
                    <div className="border">vvvvvvvvvv</div>
                   </div>
                    </div>
                   {/*  */}
                    
                  {/* <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                            <div className="border ">asdasdfsdfsdfsd</div>
                            <div className="border ">asdasdfsdfsdfsd</div>
                            <div className="border ">asdasdfsdfsdfsd</div>
                  </div> */}
                   


            </div>
            <div className="border flex w-2/12 ">
            </div>
          
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs />
    </>
  );
}