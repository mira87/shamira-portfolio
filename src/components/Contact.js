import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div className='contact container'>
                <div className='row' >
                    <div className='me'>
                    </div>

                    <div>

                        <form action="mailto:sjones.arise@gmail.com" method="post" enctype="text/plain">
                            <div className='row'>
                                <div className='col-6'>

                                    <input placeholder='Name' className="form-control" type="email" name="name"></input>

                                </div>

                                <div className='col-6'>

                                    <input placeholder='Email Address' className="form-control" type="text" name="mail"></input>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>

                                    <textarea name="comment" rows="4" cols="50">
                                        Contact Me!
</textarea>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <button className='send btn btn-primary' type="submit" value="Send">Send</button>
                                    <button className='reset btn btn-primary' type="reset" value="Reset">Reset</button>
                                </div>



                            </div>

                        </form>



                    </div>
                </div>












            </div >
        )
    }
}

export default Contact
