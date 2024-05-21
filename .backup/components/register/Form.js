import { useState, useEffect } from 'react';
import Counter from './Counter';

const Form = () => {

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    phone: "",
    address: "",
    isMale: true
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value
    }))
  }


  const handleRegister = async (e) => {
    e.preventDefault()
    console.log(user)
  }

  return (
    <section className="section coming-soon" data-section="section3">
      <div className="container">
        <div className="row">
          <Counter />
          <div className="col-md-5">
            <div className="right-content">
              <div className="top-content">
                <h6>
                  Register your free account and <em>get immediate</em> access to
                  online courses
                </h6>
              </div>
              <form onSubmit={handleRegister}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="w-100 d-flex flex-row">
                      <fieldset>
                        <input
                          name="firstName"
                          type="text"
                          className="form-control"
                          placeholder="Your First Name"
                          onChange={handleInputChange}
                          required
                        />
                      </fieldset>
                      <fieldset className='ml-3'>
                        <input
                          name="lastName"
                          type="text"
                          className="form-control"
                          placeholder="Your Last Name"
                          onChange={handleInputChange}
                          required
                        />
                      </fieldset>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <input
                        name="email"
                        type="text"
                        onChange={handleInputChange}
                        pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <input
                        name="phone"
                        type="text"
                        onChange={handleInputChange}
                        pattern='^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'
                        className="form-control"
                        placeholder="Your Phone Number"
                        required
                      />
                    </fieldset>
                  </div>

                  <div className="col-md-12">
                    <fieldset>
                      <input
                        name="address"
                        type="text"
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Your Address"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <input
                        name="password"
                        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                        type="password"
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Password"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <input
                        name="passwordConfirmation"
                        type="password"
                        onChange={handleInputChange}
                        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                        className="form-control"
                        placeholder="Confirm Password"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <button type="submit" className="button">
                        Register
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Form;
