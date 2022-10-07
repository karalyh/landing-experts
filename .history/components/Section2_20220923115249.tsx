import Image from 'next/image';


export default function Section2() {
    
    return (
        <>
            <section className='static'>
                <div className='absolute left-[265px] top-[2129px]'>
                <h1 className='font-roboto text-5xl font-black leading-[56.25px]'>Qu’est ce que Space Music ?</h1>

                </div>
                <div
                    className='
                    flex flex-row justify-center items-center p-[0px 15px] gap-5 absolute
                    w-[1728px] h-[742.7px] top-[2285px] left-px overflow-x-scroll border-black'
                >
                    {/* block du milieu */}
                    <div className="absolute w-[701.5px] h-[742.7px] left-[513.25px] top-0 bg-[url('/images/Rectangle-2.png')] rounded-[26.1767px]">
                        {/** on met le texte dans un bloc */}
                        <div className="w-[614.9px] h-[306.42px] top-[386.6px] left-[545.3px] gap-[31.76px] flex flex-col justify-center items-start">
                            <h1 className="w-[614.9px] h-[25px] font-serif-[roboto] font-black text-[25.4118px] leading-[98.69%] items-center flex text-white">Plus qu’une révolution ...</h1>
                        <p className="
                        w-[614.9px] h-[25px] font-[roboto] font-black text-[25.4118px]
                        leading-[98.69%] items-center flex text-white self-stretch grow-0 order-1 flex-none
                        ">Praesent finibus velit dui, ac aliquet arcu ultrices id. Vivamus ac varius risus. Nullam
                            vestibulum mauris a quam tincidunt, non lacinia erat auctor. Morbi nec placerat enim. Donec
                            id diam ut ligula maximus pharetra eget vel augue. Sed faucibus magna eget augue hendrerit,
                            et tincidunt enim mattis. Nunc venenatis massa vel enim condimentum, maximus fermentum augue
                            egestas.
                        </p></div>
                        
                    </div>
                </div>
           </section>
        </>
           )
}
