import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Form = ({setWarning, setToken}) => {

   const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value
    }))
  }


    const handleConnect = async (e) => {
      e.preventDefault()
      try {
        const response = await axios({
          method: 'patch',
          url: `${process.env.NEXT_PUBLIC_BACKEND_ADDR}users/`,
          data: user,
        });
    
        if (response.status === 200) {
          setWarning({
            message: "Welcome back!",
            type: "success",
          });
    
          const data = response.data; // Axios response data
          setToken(data.token);
          console.warn(data.token);
          router.push("../home");
        }
      } catch (error) {
        setWarning({
          message: "Please check your email and password. " + error.message,
          type: "danger",
        });
        console.error(error);
      }
    }

  return (
    <section className="section coming-soon" data-section="section3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="right-content">
              <div className="top-content">
                <h6>
                  Welcome back, Your courses missed you.
                </h6>
              </div>
              <form onSubmit={handleConnect}>
                <div className="row">
                  
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
