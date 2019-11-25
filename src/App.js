import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Works from './components/Works'
import Contact from './components/Contact'
import Resume from './components/Resume'
import About from './components/About'


const img = '../public/images/trailertracker.png';


export class App extends Component {

  render() {
    return (
      <div>
        <div className="icon-bar">

          <a href="https://github.com/mira87" className="github">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/onebellabrand" className="twitter"><i className="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/in/shamira-jones/" className="linkedin"><i className="fab fa-linkedin-in"></i></a>


        </div>
        <Header />
        <Works />
        <div className='break'></div>
        <Resume />
        <div className='break'></div>
        <About />
        <Contact />
        <Footer />

      </div>
    )
  }
}

export default App


{/* <div className='row'>

                        <button className='btn btn-primary'>
                            <i className="fab fa-github"> Github</i>

                        </button>
                    </div>
                    <div className='row'>

                        <button className='btn btn-primary'>
                            <i class="fab fa-twitter"> Twitter</i>


                        </button>
                    </div> */}