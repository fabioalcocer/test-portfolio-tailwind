import logo from '../assets/logo.jpg'

function AboutMe () {
  return (
    <div className='flex flex-col items-center gap-5'>
      <img
        src={logo}
        alt='logo'
        className='w-40 rounded-full mx-auto'
      />
      <div>
        <div className='pt-2 border-b-2 border-gray-400/20'>
          <h1 className='text-slate-100 font-bold text-4xl text-center mb-2'>
            Fabio Alcocer
          </h1>
          <h3 className='text-slate-100 font-semibold text-xl text-center mb-3'>
            <span className='text-sky-300'>React</span> Developer
          </h3>
        </div>
        <p className='text-center text-slate-100 mt-5'>
          👋 I'm an experienced developer with more than 1 years
          working on web technologies. I enjoy creating cool stuff
          consider myself an etern
          that can help people to solve a specific problem. Also, Ial student, because I believe that
          the only way to be successful in life is by using your
          knowledge as a tool.
        </p>
      </div>
    </div>
  )
}

export default AboutMe
