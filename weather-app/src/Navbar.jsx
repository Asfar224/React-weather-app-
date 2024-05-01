import React from 'react'

function Navbar(props) {
    return (
        <>
            <nav style={{height: '47px' , backgroundColor: 'rgba(0, 0, 0, 0.4)'}} class="navbar navbar-expand-lg " >
                <div className="container-fluid">
                    <a className="navbar-brand" style={{color : 'white'}} href="#">Weather App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" style={{color: 'white'}}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{color: 'white'}}>About</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                                <button className="btn btn-outline-success" type="submit"  onClick={props.temperature_converion()}>{props.currentstate === 'fahrenheit' ? 'Convert to Celcius' : 'Convert to fahrenheit' }</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

