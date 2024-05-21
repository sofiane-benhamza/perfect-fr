import { useState, useEffect } from 'react';
import Counter from './Counter';
import axios from 'axios';
import { useRouter } from 'next/router';

const Form = ({setWarning}) => {
 
  const router = useRouter()

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    phone: "",
    address: "",
    bachelor: "",
    level: "",
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
    try {

      const response = axios({
        method: 'post',
        url: `${process.env.NEXT_PUBLIC_BACKEND_ADDR}users/`,
        data: user
      }).then((resp) => {
        if (resp.statusText =="OK") {
          setWarning({
            message:"Account created succesfully, please sign in using your credentials",
            type:"success"
          })
          router.push("../login")
        }
      }).catch((error) => {
        setWarning({
          message:"Something went wrong, please try again later.",
          type:"danger"
        })      });

    }
    catch (e) {
      console.error(e)
    }
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
                          pattern='^[a-zA-Z]{3,16}$'
                          className="form-control"
                          placeholder="Your First Name"
                          onChange={handleInputChange}
                          required
                        />
                      </fieldset>
                      <br className='mx-1' />
                      <fieldset>
                        <input
                          name="lastName"
                          type="text"
                          pattern='^[a-zA-Z]{3,16}$'
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
                        minLength={8}
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
                        minLength={8}
                        className="form-control"
                        placeholder="Confirm Password"
                        required
                      />
                    </fieldset>
                  </div>

                  <div className="col-md-12">
                    <fieldset>
                      <input
                        name="level"
                        type="text"
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Your level (ex : bachelor degree in computer science)"
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
