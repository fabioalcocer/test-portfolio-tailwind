import Footer from './components/Footer'
import PersonalInfo from './components/PersonalInfo'
import Projects from './components/Projects'

function App () {
  return (
    <div className='bg-slate-900 min-h-screen'>
      <main className='w-full container mx-auto px-4 md:px-10 pt-10'>
        <PersonalInfo />
        <Projects />
        <Footer />
      </main>
    </div>
  )
}

export default App
