import React, { Component } from 'react'

export class Resume extends Component {
    state = {
        resume: true
    }
    toggleResume = () => {

        console.log(this.state.resume);
        if (!this.state.resume) {
            this.setState({
                resume: true
            })
            this.resumeStyle()

        }
        else {
            this.setState({
                resume: false
            })
            console.log(this.state.resume);

        }

    }





    resumeStyle = () => {
        console.log(this.state.resume)
        if (this.state.resume === false) {
            return {
                display: 'none'
            }
        }

        else {
            return {
                display: 'block'
            }
        }

    }




    render() {
        return (
            <div className='container resume'>
                <button onClick={this.toggleResume} >Toggle Resume</button>
                <div style={this.resumeStyle()}>

                    <div className='resumeIntro'>
                        <h1 className='text-lg-center text-sm-center text-wrap'>Shamira Jones</h1>
                        <h2 className='text-lg-center text-sm-center text-wrap'>Full Stack Developer</h2>
                        <h4 className='text-lg-center text-sm-center text-wrap' >sjones.arise@gmail.com</h4>
                        <h4 className='text-lg-center text-sm-center text-wrap'>https://github.com/mira87/</h4>
                        {/* <h4 className='text-sm-center text-wrap'>https://www.linkedin.com/in/shamira-jones/</h4>
                        <h4 className='text-sm-center text-wrap'> https://www.behance.net/shamirajones1/</h4> */}
                    </div>

                    <hr></hr>
                    <h1 className='text-lg-center text-sm-center text-wrap'>PROFILE</h1>

                    <p>Full Stack Developer who loves to build code that remains semantic, functional, scalable, and responsive. Constantly holding myself to a high standard, I find it invigorating to develop code that uses best practices and sets new standards in User Experience. With a background in Graphic Design, I am familiar with the creative process and always aim to  build exceptional code that remains visually appealing.</p>
                    <hr></hr>

                    <h1 className=' text-lg-center text-sm-center text-wrap'>SKILLS</h1>
                    {/* <ul> */}
                    <li>LANGUAGES: JavaScript, Ruby, SQL, HTML, CSS, Python</li>
                    <li>SERVER-SIDE: Node.js, Express Framework, Django</li>
                    <li>CLIENT-SIDE: React JS, Bootstrap, jQuery, AJAX, Responsive Design</li>
                    <li>DATABASES: MongoDB, Mongoose,</li>
                    <li>OTHER: Git, Github, Heroku, UXPin, Balsamiq, Adobe Lightroom, Adobe Indesign, Adobe Illustrator, Adobe Photoshop, Creative Process</li>

                    {/* </ul> */}

                    <hr></hr>

                    <h1 className='text-lg-center text-sm-center text-wrap'>DEVELOPMENT EXPERIENCE</h1>

                    <h6>Adulting Task</h6><a target='_blank' href='http://adultingtasks.herokuapp.com'> <p className='text-lg-left text-sm-left'>http://adultingtasks.herokuapp.com</p></a>
                    <p>App for allowing those who are becoming adults to learn tasks that every adult should learn how to complete.</p>

                    <h6>Japan’s Memory Duel</h6> <a href='https://github.com/mira87/memory-game'><p className='text-lg-left text-sm-left'>https://github.com/mira87/memory-game</p> </a>
                    <p>Designed and developed an interactive game using HTML, JavaScript, and CSS to scale content and elements for mobile deployment.</p>

                    <h6>Cheer Ups</h6><a target='_blank' href='https://cheerups2019.herokuapp.com/cheer'><p className='text-lg-left text-sm-left text-wrap'>https://cheerups2019.herokuapp.com/cheer</p></a>
                    <p>Created a full - stack application that encourages users.Frameworks used include MongoDB, Heroku, Mongoose, Express, JavaScript, HTML, and CSS.</p>

                    <h6> Trailer Tracker</h6><a target='_blank' href='https://dctalk1234.github.io/trailer-tracker-frontend/'> <p className='text-lg-left text-sm-left'>https://dctalk1234.github.io/trailer-tracker-frontend</p></a>
                    <p> App that allows users to search Movie trailers in our database and OMBD’s database for the purpose of finding trailers for movies they may want to add to a playlist or category.Utilize frameworks including React, CSS, Express, MongoDB, Heroku, and Mongoose, and BootStrap.</p>
                    < hr ></hr >

                    <h1 className='text-lg-center text-sm-center'>EDUCATION</h1>

                    <strong>Full Sail University, Bachelors of Graphic Design	</strong>			02 / 2019 - 07 / 2021
<br />
                    <strong>General Assembly, Software Engineering Immersive Remote </strong>			08 / 2019 - 11 / 2019
               <p> 500 full - time hours in a full - stack program conducted in a remote setting, providing experience with the latest front - and back - end programming languages, tools, and methodologies including: HTML, CSS, SASS, Javascript, jQuery, PostgreSQL, MongoDB, Ruby, Ruby on Rails, AngularJS, NodeJS, ReactJS, Wordpress, Git, Github, and Agile / Scrum.</p>
                    < hr ></hr >

                    <h1 className='text-lg-center text-sm-center text-wrap'>WORK EXPERIENCE</h1>
                    <strong>Customer Service Contractor, Arise	</strong>					01 / 2019 - Present
                < p > Yielded increased Customer Satisfaction, Sales and reduced Average Handling Times by maintaining great oral communications with customers.</p >
                    <p>Troubleshot /debugged equipment and software such as Avaya, CSG, and Citrix applications in order to maintain a working environment.</p>
                    <strong>Photographer, Lifetouch	</strong>					       	05 / 2018 - 11 / 2018
               <p> Maintained effective oral communications with teachers and school officials in order to maintain a functional and safe environment for over 500 students.</p>
                    <p>  Lead a team of 10 photographers through motivation, delegation of tasks, coordination of daily plans and remaining a strong team player.</p>
                    < hr ></hr >
                </div>

                <a target='_blank' href='https://www.slideshare.net/ShamiraJones1/shamira-jones-resume'>Download Resume</a>
            </div >
        )
    }
}

export default Resume
