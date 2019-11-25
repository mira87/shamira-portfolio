import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div className='contact container'>
                <h1 className='text-lg-center text-sm-center text-wrap'>Contact Me</h1>
                <div className='row' >
                    <div className='me col-lg-6'>
                    </div>

                    <div className='myForm col-lg-6'>

                        <form action="mailto:sjones.arise@gmail.com" method="post" enctype="text/plain">
                            <div className='row'>
                                <div className='col-lg-6 col-sm-12'>

                                    <input placeholder='Name' className="form-control" type="email" name="name"></input>

                                </div>

                                <div className='col-lg-6 col-sm-12'>

                                    <input placeholder='Email Address' className="form-control" type="text" name="mail"></input>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-12 col-sm-12'>

                                    {/* <textarea name="comment" rows="4" cols="65">
                                        Contact Me!
</textarea>
                                </div> */}

                                    <textarea class="form-control col-lg-12 col-sm-12" name="comment" rows="4">
                                        Contact Me!
</textarea>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-lg-6 col-sm-12'>
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
