import React, { Component } from 'react'
import './Addl.css'
import { a } from 'react-router-dom'

export class Works extends Component {
    render() {
        return (



            <div className='works container'>
                <h1>My Previous Works</h1>
                <div className='row'>
                    <div className='col-lg-4 col-sm-12'>
                        <a href='http://cheerups2019.herokuapp.com'>
                            <div className='card'>
                                <div className='cheerups'></div>
                                <h4 className='works_description'>Cheer Ups</h4>
                            </div>
                        </a>
                    </div>

                    <div className='col-lg-4 col-sm-12'>
                        <a href='https://dctalk1234.github.io/trailer-tracker-frontend/'>
                            <div className='card'>

                                <div className='trailer'></div>
                                <h4 className='works_description'>Trailer Tracker</h4>
                            </div>
                        </a>
                    </div>
                    <div className='col-lg-4 col-sm-12'>
                        <a href='http://adultingtasks.herokuapp.com/'> <div className='card'>

                            <div className='adulting'></div>
                            <h4 className='works_description'>Adulting App</h4>
                        </div></a>
                    </div>
                </div>


                <div className='row'>
                    <div className='col-lg-4 col-sm-12'>
                        <a href='https://mira87.github.io/memory-game/'>
                            <div className='card'>
                                <div className='japan'></div>
                                <h4 className='works_description'> Card Game</h4>
                            </div>
                        </a>
                    </div>

                    <div className='col-lg-4 col-sm-12'>
                        <a href='http://mysuperheros.herokuapp.com/'>
                            <div className='card'>
                                <div className='comics'></div>
                                <h4 className='works_description'>Comic Book Afro Sheros</h4>
                            </div>
                        </a>
                    </div>
                    <div className='col-lg-4 col-sm-12'>
                        <a href='https://react-shoesre.netlify.com//'> <div className='card'>

                            <div className='ecommerce'></div>
                            <h4 className='works_description'>Ecommerce </h4>
                        </div></a>
                    </div>
                </div>


            </div >

        )
    }
}

export default Works
