import SocialMedia from './SocialMedia'
import logo from '../assets/logo.jpg'

function Home () {
  return (
    <div className='block lg:flex gap-x-8 lg:justify-center lg:items-stretch mx-auto text-slate-100'>
      <div className='block lg:flex lg:items-center gap-x-10'>
        <img
          src={logo}
          alt='My avatar'
          className='rounded-full w-32 h-32 md:w-48 md:h-48 mx-auto lg:mx-0'
        />
        <div className='space-y-4 w-full text-center lg:text-left relative'>
          <div>
            <h1 className='font-bold text-4xl md:text-6xl mt-4 lg:mt-0 text-slate-100'>
              Fabio Alcocer
            </h1>
            <h3 className='font-bold text-xl md:text-3xl'>
              <span className='text-sky-400'>Javascript</span>{' '}
              Developer
            </h3>
          </div>
          <div className='hidden lg:flex gap-x-4 justify-end absolute right-0 top-14'>
            <SocialMedia />
          </div>
          <hr />
          <div>
            <p className='font-light text-base md:text-lg'>
              👋 Hi, in my current position I use my
              knowledge in software development and my experience
              creating content to build and manage the online
              community and manage the identity and brand image of
              companies. Obtaining knowledge that will allow me to
              train professionally as a professionally as a software
              developer..
            </p>
          </div>
        </div>
      </div>
      <div className='flex lg:hidden gap-x-4 mt-6 lg:mt-0 justify-center lg:justify-between flex-row lg:flex-col'>
        <SocialMedia />
      </div>
    </div>
  )
}

export default Home
