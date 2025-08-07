 import '../Style/Signup.css';

const Signup = () => {
    return (
        <div className="container">

            <div className='leftone'>
                <img src="https://ui-practise.vercel.app/static/images/landingView/logo.png" alt="Logo" className='logo'/>
                <p className='left-text'>Say hello to global food and beverage <br />producers and suppliers, all in one place</p>
            </div>

            <div className='rightone'>

                <p className='right-text'>Lets get started <br /> with a few simple steps</p>
                <form className='form'>
                    <label>Email</label>
                    <input type="email" placeholder="" />

                    <label>FullName</label>
                    <input type="text" placeholder="" />

                    <label>Password</label>
                    <input type="password" placeholder="" />

                    <button type="submit" className='btn'>Sign up</button>
                </form>

                <p className='content'>
                    By signing up, you agree to our Terms of Service. <br />Already have an account? <a href="">Log in.</a>
                </p>

            </div>
        </div>
    )
}

export default Signup
