// "use client";
// import React from 'react'
// import Svg from "../public/svg1.svg";
// import Image from 'next/image';
// const SvgPatterns = () => {
//     return (
//         <div>
//             <div className='relative isolate'>
//                 <div
//                     aria-hidden='true'
//                     className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
//                     <div
//                         className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
//                     >
//                         <Image src={Svg} alt={'svg pattern'} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default SvgPatterns

"use client";
import React from 'react'
import Svg from "../public/svg1.svg";
import Image from 'next/image';
const SvgPatterns = () => {
    return (
        <div className='absolute inset-0 -z-5'>
            <div className='relative '>
                <div
                    aria-hidden='true'
                    className='pointer-events-none absolute inset-x-0  -z-10 transform-gpu  '>
                    <div
                    >
                        <Image src={Svg} alt={'svg pattern'} className='opacity-40' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SvgPatterns
