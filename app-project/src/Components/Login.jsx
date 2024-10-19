import React from 'react'
import Footer from './Footer'

function Login() {
    return (
        <div>
            <div className='contact-page section'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className="col-lg-8">
                            <form id="contact-form" action method="post">
                                <div className="row">

                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label htmlFor="email">Email Address</label>
                                            <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label htmlFor="email">Password</label>
                                            <input type="text" name="password" id="password" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required />
                                        </fieldset>
                                    </div>


                                    <div className="col-lg-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="orange-button">Submit</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            {/* <Footer/> */}

        </div>
        
    )
}

export default Login