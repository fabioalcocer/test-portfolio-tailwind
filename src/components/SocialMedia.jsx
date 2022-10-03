import EmailSvg from '../assets/email.svg'
import GithubSvg from '../assets/github.svg'
import LinkedinSvg from '../assets/linkedin.svg'
import TwitterSvg from '../assets/twitter.svg'

function SocialMedia () {
  return (
    <>
      <p className='text-black font-bold text-base md:text-xl'>
        <a href='mailto:samarjaffalh@gmail.com'>
          <img
            src={EmailSvg}
            alt=''
          />
        </a>
      </p>
      <p className='text-black font-bold text-base md:text-xl'>
        <a
          href='https://github.com/fabioAlcocer'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={GithubSvg}
            alt=''
          />
        </a>
      </p>
      <p className='text-black font-bold text-base md:text-xl'>
        <a
          href='https://www.linkedin.com/in/fabio-alcocer/'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={LinkedinSvg}
            alt=''
          />
        </a>
      </p>
      <p className='text-black font-bold text-base md:text-xl'>
        <a
          href='https://twitter.com/fabioalcocer17'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={TwitterSvg}
            alt=''
          />
        </a>
      </p>
    </>
  )
}

export default SocialMedia
