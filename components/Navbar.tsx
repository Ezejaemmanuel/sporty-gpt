// import Link from 'next/link'
// import MaxWidthWrapper from './MaxWidthWrapper'
// import { buttonVariants } from './ui/button'

// import { ArrowRight } from 'lucide-react'
// import UserAccountNav from './UserAccountNav'
// import MobileNav from './MobileNav'
// import { getUserAuth } from '@/lib/auth/utils'

// const Navbar = async () => {
//     const { session: user } = await getUserAuth();
//     return (
//         <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
//             <MaxWidthWrapper>
//                 <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
//                     <Link
//                         href='/'
//                         className='flex z-40 font-semibold'>
//                         <span>quill.</span>
//                     </Link>

//                     <MobileNav isAuth={!!user} />

//                     <div className='hidden items-center space-x-4 sm:flex'>
//                         {!user ? (
//                             <>
//                                 <Link
//                                     href='/pricing'
//                                     className={buttonVariants({
//                                         variant: 'ghost',
//                                         size: 'sm',
//                                     })}>
//                                     Pricing
//                                 </Link>
//                                 <div
//                                     className={buttonVariants({
//                                         variant: 'ghost',
//                                         size: 'sm',
//                                     })}>
//                                     Sign in
//                                 </div>
//                                 <div
//                                     className={buttonVariants({
//                                         size: 'sm',
//                                     })}>
//                                     Get started{' '}
//                                     <ArrowRight className='ml-1.5 h-5 w-5' />
//                                 </div>
//                             </>
//                         ) : (
//                             <>
//                                 <Link
//                                     href='/dashboard'
//                                     className={buttonVariants({
//                                         variant: 'ghost',
//                                         size: 'sm',
//                                     })}>
//                                     Dashboard
//                                 </Link>

//                                 <UserAccountNav
//                                     name={
//                                         !user.user.name
//                                             ? 'Your Account'
//                                             : `${user.user.name}`
//                                     }
//                                     email={user.user.email ?? ''}
//                                     imageUrl={user.user.image ?? ''}
//                                 />
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </MaxWidthWrapper>
//         </nav>
//     )
// }

// export default Navbar

import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'

import { ArrowRight } from 'lucide-react'
import UserAccountNav from './UserAccountNav'
import MobileNav from './MobileNav'
import { getUserAuth } from '@/lib/auth/utils'

const Navbar = async () => {
    const { session: user } = await getUserAuth();
    return (
        <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-orange-500 text-white transition-all'>
            <MaxWidthWrapper>
                <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
                    <Link
                        href='/'
                        className='flex z-40 font-semibold text-white'>
                        <span>Sporty-GPT</span>
                    </Link>

                    <MobileNav isAuth={!!user} />

                    <div className='hidden items-center space-x-4 sm:flex'>
                        {!user ? (
                            <>
                                <Link
                                    href='/pricing'
                                    className={buttonVariants({
                                        variant: 'ghost',
                                        size: 'sm',
                                    }) + ' text-white'}>
                                    Pricing
                                </Link>
                                <div
                                    className={buttonVariants({
                                        variant: 'ghost',
                                        size: 'sm',
                                    }) + ' text-white'}>
                                    Sign in
                                </div>
                                <div
                                    className={buttonVariants({
                                        size: 'sm',
                                    }) + ' text-white'}>
                                    Get started{' '}
                                    <ArrowRight className='ml-1.5 h-5 w-5' />
                                </div>
                            </>
                        ) : (
                            <>
                                <Link
                                    href='/dashboard'
                                    className={buttonVariants({
                                        variant: 'ghost',
                                        size: 'sm',
                                    }) + ' text-white'}>
                                    Dashboard
                                </Link>

                                <UserAccountNav
                                    name={
                                        !user.user.name
                                            ? 'Your Account'
                                            : `${user.user.name}`
                                    }
                                    email={user.user.email ?? ''}
                                    imageUrl={user.user.image ?? ''}
                                />
                            </>
                        )}
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar
