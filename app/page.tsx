// // import MaxWidthWrapper from '@/components/MaxWidthWrapper'
// // import Link from 'next/link'
// // import { ArrowRight } from 'lucide-react'
// // import { buttonVariants } from '@/components/ui/button'
// // import Image from 'next/image'
// // import SvgPatterns from '@/components/svgPatterns'
// // import Svg from "../public/svg1.svg";

// // export default function Home() {

// //   return (
// //     <>
// //       <div className='absolute inset-0 -z-5'>
// //         <div className='relative h-full w-full'>
// //           <div
// //             aria-hidden='true'
// //             className='pointer-events-none absolute inset-0 -z-10 transform-gpu  '>
// //             <div className='h-full w-full'>
// //               <Image src={Svg} alt={'svg pattern'} className='opacity-40 object-cover h-full w-full' />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center dark:text-white'>
// //         <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 dark:bg-gray-800 dark:border-gray-600'>
// //           <p className='text-sm font-semibold text-gray-700 dark:text-yellow-300 animate-pulse'>
// //             Sporty-GPT is here to assist you!
// //           </p>
// //         </div>
// //         <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl dark:text-red-500'>
// //           Enhance your{' '}
// //           <span className='text-orange-500 animate-pulse'>sports betting</span>{' '}
// //           with AI.
// //         </h1>
// //         <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg dark:text-gray-300'>
// //           Sporty-GPT is an AI that helps you with sports-related queries and assists in predicting sports bets. Please note, Sporty-GPT does not make predictions but assists in making them.
// //         </p>

// //         <Link
// //           className={buttonVariants({
// //             size: 'lg',
// //             className: 'mt-5',
// //           })}
// //           href='/dashboard'
// //           target='_blank'>
// //           Get started{' '}
// //           <ArrowRight className='ml-2 h-5 w-5' />
// //         </Link>
// //       </MaxWidthWrapper>


// //     </>
// //   )
// // }

// import MaxWidthWrapper from '@/components/MaxWidthWrapper'
// import Link from 'next/link'
// import { ArrowRight } from 'lucide-react'
// import { buttonVariants } from '@/components/ui/button'
// import Image from 'next/image'

// import Svg from "../public/svg1.svg";
// import { TypeAnimation } from '@/components/cliented'

// export default function Home() {

//   return (
//     <>
//       <div className='absolute inset-0 -z-5'>
//         <div className='relative h-full w-full'>
//           <div
//             aria-hidden='true'
//             className='pointer-events-none absolute inset-0 -z-10 transform-gpu  '>
//             <div className='h-full w-full'>
//               <Image src={Svg} alt={'svg pattern'} className='opacity-40 object-cover h-full w-full' />
//             </div>
//           </div>
//         </div>
//       </div>
//       <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center dark:text-white'>
//         <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 dark:bg-gray-800 dark:border-gray-600'>
//           <TypeAnimation
//             cursor={true}
//             sequence={['Sporty-GPT is here to assist you!', 1000]}
//             wrapper="p"
//             className='text-sm font-semibold text-gray-700 dark:text-yellow-300 animate-pulse'
//           />
//         </div>
//         <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl dark:text-red-500'>
//           <TypeAnimation
//             cursor={true}
//             sequence={[
//               'Enhance your', 1000,
//               'Boost your', 1000,
//               'Improve your', 1000,
//               'Elevate your', 1000,
//               'Upgrade your', 1000,
//               'Optimize your', 1000
//             ]}
//             wrapper="span"
//             repeat={Infinity}
//           />
//           <span className='text-orange-500 animate-pulse'> sports betting </span>{' '}
//           with AI.
//         </h1>
//         <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg dark:text-gray-300'>
//           Sporty-GPT is an AI that helps you with sports-related queries and assists in predicting sports bets. Please note, Sporty-GPT does not make predictions but assists in making them.
//         </p>

//         <Link
//           className={buttonVariants({
//             size: 'lg',
//             className: 'mt-5',
//           })}
//           href='/dashboard'
//           target='_blank'>
//           Get started{' '}
//           <ArrowRight className='ml-2 h-5 w-5' />
//         </Link>
//       </MaxWidthWrapper>


//     </>
//   )
// }



import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Svg from "../public/svg1.svg";
import { TypeAnimation } from '@/components/cliented'

export default function Home() {
  const phrases = [
    'Enhance your', 1000,
    'Boost your', 1000,
    'Improve your', 1000,
    'Elevate your', 1000,
    'Upgrade your', 1000,
    'Optimize your', 1000
  ];
  return (
    <>
      <div className='absolute inset-0 -z-5'>
        <div className='relative h-full w-full'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-0 -z-10 transform-gpu  '>
            <div className='h-full w-full'>
              <Image src={Svg} alt={'svg pattern'} className='opacity-40 object-cover h-full w-full' />
            </div>
          </div>
        </div>
      </div>
      <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center dark:text-white'>
        <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 dark:bg-gray-800 dark:border-gray-600'>
          <TypeAnimation
            cursor={true}
            sequence={['Sporty-GPT is here to assist you!', 1000]}
            wrapper="p"
            className='text-sm font-semibold text-gray-700 dark:text-yellow-300 animate-pulse'
          />
        </div>
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl dark:text-red-500'>
          <div className='w-100'> {/* Set a fixed width using Tailwind CSS */}
            <TypeAnimation
              cursor={true}
              preRenderFirstString={true}
              sequence={phrases}
              wrapper="span"
            />
          </div>
          <span className='text-orange-500 animate-pulse'> sports betting </span>{' '}
          with AI.
        </h1>
        <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg dark:text-gray-300'>
          Sporty-GPT is an AI that helps you with sports-related queries and assists in predicting sports bets. Please note, Sporty-GPT does not make predictions but assists in making them.
        </p>

        <Link
          className={buttonVariants({
            size: 'lg',
            className: 'mt-5',
          })}
          href='/dashboard'
          target='_blank'>
          Get started{' '}
          <ArrowRight className='ml-2 h-5 w-5' />
        </Link>
      </MaxWidthWrapper>


    </>
  )
}
