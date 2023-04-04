import React from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("customer");
    localStorage.removeItem("token");
    toast.info("Logout Successfully");
    navigate("/");
  }
  return (
    <>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2><Link className='text-white'>Dev Corner</Link></h2>
            </div>
            <div className="col-5">
              <div><Link to="/home/form" className='d-flex align-items-center gap-10 text-white'>
                <p className='btn bg-white text-primary mx-2'> Add Todo <br /> </p>
              </Link>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex gap-15 flex-row-reverse ">
                <div><Link to="/" className='d-flex align-items-center  text-white'>
                  <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>Logout</div>

                </Link>
                </div>

                <div><Link to="/" className='btn bg-white text-blue mx-2'>

                  <p className='mb-0'> Log in <br /> </p>
                </Link>
                </div>


              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default Header