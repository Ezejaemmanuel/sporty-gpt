// 'use client'

// import { ArrowRight, Menu } from 'lucide-react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useEffect, useState } from 'react'

// const MobileNav = ({ isAuth }: { isAuth: boolean }) => {
//     const [isOpen, setOpen] = useState<boolean>(false)

//     const toggleOpen = () => setOpen((prev) => !prev)

//     const pathname = usePathname()

//     useEffect(() => {
//         if (isOpen) toggleOpen()
//     }, [pathname])

//     const closeOnCurrent = (href: string) => {
//         if (pathname === href) {
//             toggleOpen()
//         }
//     }

//     return (
//         <div className='sm:hidden'>
//             <Menu
//                 onClick={toggleOpen}
//                 className='relative z-50 h-5 w-5 text-zinc-700'
//             />

//             {isOpen ? (
//                 <div className='fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full'>
//                     <ul className='absolute bg-white border-b border-zinc-200 shadow-xl grid w-full gap-3 px-10 pt-20 pb-8'>
//                         {!isAuth ? (
//                             <>
//                                 <li>
//                                     <Link
//                                         onClick={() =>
//                                             closeOnCurrent('/sign-up')
//                                         }
//                                         className='flex items-center w-full font-semibold text-green-600'
//                                         href='/sign-up'>
//                                         Get started
//                                         <ArrowRight className='ml-2 h-5 w-5' />
//                                     </Link>
//                                 </li>
//                                 <li className='my-3 h-px w-full bg-gray-300' />
//                                 <li>
//                                     <Link
//                                         onClick={() =>
//                                             closeOnCurrent('/sign-in')
//                                         }
//                                         className='flex items-center w-full font-semibold'
//                                         href='/sign-in'>
//                                         Sign in
//                                     </Link>
//                                 </li>
//                                 <li className='my-3 h-px w-full bg-gray-300' />
//                                 <li>
//                                     <Link
//                                         onClick={() =>
//                                             closeOnCurrent('/pricing')
//                                         }
//                                         className='flex items-center w-full font-semibold'
//                                         href='/pricing'>
//                                         Pricing
//                                     </Link>
//                                 </li>
//                             </>
//                         ) : (
//                             <>
//                                 <li>
//                                     <Link
//                                         onClick={() =>
//                                             closeOnCurrent('/dashboard')
//                                         }
//                                         className='flex items-center w-full font-semibold'
//                                         href='/dashboard'>
//                                         Dashboard
//                                     </Link>
//                                 </li>
//                                 <li className='my-3 h-px w-full bg-gray-300' />
//                                 <li>
//                                     <Link
//                                         className='flex items-center w-full font-semibold'
//                                         href='/sign-out'>
//                                         Sign out
//                                     </Link>
//                                 </li>
//                             </>
//                         )}
//                     </ul>
//                 </div>
//             ) : null}
//         </div>
//     )
// }

// export default MobileNav

// MobileNav component
'use client'

import { ArrowRight, Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const MobileNav = ({ isAuth }: { isAuth: boolean }) => {
    const [isOpen, setOpen] = useState<boolean>(false)

    const toggleOpen = () => setOpen((prev) => !prev)

    const pathname = usePathname()

    useEffect(() => {
        if (isOpen) toggleOpen()
    }, [pathname, isOpen])

    const closeOnCurrent = (href: string) => {
        if (pathname === href) {
            toggleOpen()
        }
    }

    return (
        <div className='sm:hidden'>
            <Menu
                onClick={toggleOpen}
                className='relative z-50 h-5 w-5 text-white'
            />

            {isOpen ? (
                <div className='fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full'>
                    <ul className='absolute bg-orange-500 text-white rounded-lg shadow-md grid w-full gap-3 px-10 pt-20 pb-8 transition-all ease-in-out duration-500'>
                        {!isAuth ? (
                            <>
                                <li>
                                    <Link
                                        onClick={() =>
                                            closeOnCurrent('/sign-up')
                                        }
                                        className='flex items-center w-full font-semibold text-white'
                                        href='/sign-up'>
                                        Get started
                                        <ArrowRight className='ml-2 h-5 w-5' />
                                    </Link>
                                </li>
                                <li className='my-3 h-px w-full bg-gray-300' />
                                <li>
                                    <Link
                                        onClick={() =>
                                            closeOnCurrent('/sign-in')
                                        }
                                        className='flex items-center w-full font-semibold text-white'
                                        href='/sign-in'>
                                        Sign in
                                    </Link>
                                </li>
                                <li className='my-3 h-px w-full bg-gray-300' />
                                <li>
                                    <Link
                                        onClick={() =>
                                            closeOnCurrent('/pricing')
                                        }
                                        className='flex items-center w-full font-semibold text-white'
                                        href='/pricing'>
                                        Pricing
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        onClick={() =>
                                            closeOnCurrent('/dashboard')
                                        }
                                        className='flex items-center w-full font-semibold text-white'
                                        href='/dashboard'>
                                        Dashboard
                                    </Link>
                                </li>
                                <li className='my-3 h-px w-full bg-gray-300' />
                                <li>
                                    <Link
                                        className='flex items-center w-full font-semibold text-white'
                                        href='/sign-out'>
                                        Sign out
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            ) : null}
        </div>
    )
}

export default MobileNav
