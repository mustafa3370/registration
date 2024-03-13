import { disable } from 'debug';
import{useFormik} from 'formik'
import stylecss from './Registration.module.css';
function Registration() {

let user ={
    name:"",
    email:"",
    password:"",
    Repassword:"",
    phone:""

}
function sendData(Values) {
  console.log(Values)
}
//Formik



const formikobj = useFormik({
  initialValues:user,
  onSubmit:sendData,
  validate: function(values){
    const errors = {};

    if(values.name.length < 4 || values.name.length > 10 ){
      errors.name ="Name Must be be from 4 characters to 10 characters"
    }
    if(values.email.includes("@")=== false || values.email.includes(".")=== false){
      errors.email="your mail must have @ and ."
    }
    if(!values.phone.match(/^01[0125][0-9]{8}$/)){
      errors.phone="this phone is valid"
    }
    if(values.password.length < 4 || values.password.length > 12){
      errors.password ="Name Must be be from 4 characters to 12 characters"
    }
    if(values.Repassword !== values.password){
      errors.Repassword = "the password is not match"
    }




    return errors;
  }
})










    return <>
  <div className="bg-light py-3 py-md-5">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
          <div className="bg-white p-4 p-md-5 rounded shadow-sm">
            <div className="row">
              <div className="col-12">
                <div className="text-center mb-5">
                  <a href="#!">
                    <img src={require("../../photos/vecteezy_monogram-letter-initial-h-m-hm-mh-logo-design-template_.png")}alt="BootstrapBrain Logo" width={100}/>
                  </a>
                </div>
              </div>
            </div>
            <form onSubmit={formikobj.handleSubmit}>
              <div className="row gy-3 gy-md-4 overflow-hidden">
                <div className="col-12">
                  <label htmlFor="firstName" className="form-label">
                    First Name <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-person-vcard"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
                        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12z" />
                      </svg>
                    </span>
                    <input type="text"className="form-control"name="name"id="firstName"  value={formikobj.values.name} onChange={formikobj.handleChange} onBlur={formikobj.handleBlur}/>
                  </div>
                </div>
                {/*alert*/}
                {formikobj.errors.name && formikobj.touched.name ? <div className="col-12"><p className={stylecss.alert}>{formikobj.errors.name}</p></div> :""}
                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      required=""
                      value={formikobj.values.email}
                      onChange={formikobj.handleChange}
                      onBlur={formikobj.handleBlur}
                    />
                  </div>
                </div>
                {formikobj.errors.email && formikobj.touched.email ? <div className="col-12"><p className={stylecss.alert}>{formikobj.errors.email}</p></div> :""}

                <div className="col-12">
                  <label htmlFor="phone" className="form-label">
                    phone <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                    </svg>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      id="phone"
                      value={formikobj.values.phone}
                      onChange={formikobj.handleChange}
                      onBlur={formikobj.handleBlur}
                    />
                  </div>
                </div>
                {formikobj.errors.phone && formikobj.touched.phone ? <div className="col-12"><p className={stylecss.alert}>{formikobj.errors.phone}</p></div> :""}

                <div className="col-12">
                  <label htmlFor="password" className="form-label">
                    Password <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-key"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={formikobj.values.password}
                      onChange={formikobj.handleChange}
                      onBlur={formikobj.handleBlur}
                    />
                  </div>
                </div>
                {formikobj.errors.password && formikobj.touched.password ? <div className="col-12"><p className={stylecss.alert}>{formikobj.errors.password}</p></div> :""}

                <div className="col-12">
                  <label htmlFor="Repassword" className="form-label">
                    Re-Password <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-key"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      name="Repassword"
                      value={formikobj.values.Repassword}
                      onChange={formikobj.handleChange}
                      onBlur={formikobj.handleBlur}
                      />
                  </div>
                </div>
                {formikobj.errors.Repassword && formikobj.touched.Repassword ? <div className="col-12"><p className={stylecss.alert}>{formikobj.errors.Repassword}</p></div> :""}

                <div className="col-12">
                  <div className="d-grid">
                    <button className="btn btn-primary btn-lg" type="submit" disabled={formikobj.isValid === false || formikobj.dirty === false}>
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col-12">
                <hr className="mt-5 mb-4 border-secondary-subtle" />
                <p className="m-0 text-secondary text-center">
                  Already have an account?{" "}
                  <a href="#!" className="link-primary text-decoration-none">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
}

export default Registration
