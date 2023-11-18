
// // import React, { useState } from "react";
// // import * as Components from './Components';
// // // import Header from "../../Componant/HeaderofLogin/headeroflogin";
// // import Header from "../../Componant/HeaderofLogin/headeroflogin";
// // import { useNavigate } from "react-router-dom";
// // import { TextField } from "@mui/material"; // Import TextField from Material-UI
// // import './startuppage.css';

// // const Startuppage = () => {
// //     const [signIn, toggle] = useState(true);
// //     const [signupName, setSignupName] = useState("");
// //     const [signupEmail, setSignupEmail] = useState("");
// //     const [signupPassword, setSignupPassword] = useState("");
// //     const [signinEmail, setSigninEmail] = useState("");
// //     const [signinPassword, setSigninPassword] = useState("");
// //     const [signupError, setSignupError] = useState("");
// //     const [signinError, setSigninError] = useState("");
// //     const navigate = useNavigate();

// //     const handleSignupNameChange = (e) => {
// //         setSignupName(e.target.value);
// //     };

// //     const handleSignupEmailChange = (e) => {
// //         setSignupEmail(e.target.value);
// //     };

// //     const handleSignupPasswordChange = (e) => {
// //         setSignupPassword(e.target.value);
// //     };

// //     const handleSigninEmailChange = (e) => {
// //         setSigninEmail(e.target.value);
// //     };

// //     const handleSigninPasswordChange = (e) => {
// //         setSigninPassword(e.target.value);
// //     };

// //     const handleSignupSubmit = (e) => {
// //         e.preventDefault();

// //         if (!signupName.trim() || !signupEmail.trim() || !signupPassword.trim()) {
// //             setSignupError("All fields are required.");
// //         } else {
// //             navigate("/");
// //         }
// //     };

// //     const handleSigninSubmit = (e) => {
// //         e.preventDefault();

// //         if (!signinEmail.trim() || !signinPassword.trim()) {
// //             setSigninError("Email and password are required.");
// //         } else {
// //             navigate("/");
// //         }
// //     };

// //     return (
// //         <div className="dev">
// //             <Header />
// //             <Components.Container>
// //                 <Components.SignUpContainer signinIn={signIn}>
// //                     <Components.Form onSubmit={handleSignupSubmit}>
// //                         <Components.Title>Create Account</Components.Title>
// //                         <TextField
// //                             type='text'
// //                             label='Name'
// //                             variant='outlined'
// //                             value={signupName}
// //                             onChange={handleSignupNameChange}
// //                             fullWidth
// //                             margin='normal'
// //                         />
// //                         <TextField
// //                             type='email'
// //                             label='Email'
// //                             variant='outlined'
// //                             value={signupEmail}
// //                             onChange={handleSignupEmailChange}
// //                             fullWidth
// //                             margin='normal'
// //                         />
// //                         <TextField
// //                             type='password'
// //                             label='Password'
// //                             variant='outlined'
// //                             value={signupPassword}
// //                             onChange={handleSignupPasswordChange}
// //                             fullWidth
// //                             margin='normal'
// //                         />
// //                         <p className="error-message">{signupError}</p>
// //                         <Components.Button type="submit">Sign Up</Components.Button>
// //                     </Components.Form>
// //                 </Components.SignUpContainer>

// //                 <Components.SignInContainer signinIn={signIn}>
// //                     <Components.Form onSubmit={handleSigninSubmit}>
// //                         <Components.Title>Sign In</Components.Title>
// //                         <TextField
// //                             type='email'
// //                             label='Email'
// //                             variant='outlined'
// //                             value={signinEmail}
// //                             onChange={handleSigninEmailChange}
// //                             fullWidth
// //                             margin='normal'
// //                             style={{ marginTop: '26px' }} 
// //                         />
// //                         <TextField
// //                             type='password'
// //                             label='Password'
// //                             variant='outlined'
// //                             value={signinPassword}
// //                             onChange={handleSigninPasswordChange}
// //                             fullWidth
// //                             margin='normal'
// //                         />
// //                         <p className="error-message">{signinError}</p>
// //                         <Components.Button type="submit">Sign In</Components.Button>
// //                     </Components.Form>
// //                 </Components.SignInContainer>

// //                 <Components.OverlayContainer signinIn={signIn}>
// //                     <Components.Overlay signinIn={signIn}>
// //                         <Components.LeftOverlayPanel signinIn={signIn}>
// //                             <Components.Title>Welcome Back!</Components.Title>
// //                             <Components.Paragraph>
// //                                 To keep connected with us please login with your personal info
// //                             </Components.Paragraph>
// //                             <Components.GhostButton onClick={() => toggle(true)}>
// //                                 Sign In
// //                             </Components.GhostButton>
// //                         </Components.LeftOverlayPanel>

// //                         <Components.RightOverlayPanel signinIn={signIn}>
// //                             <Components.Title>Hello, Friend!</Components.Title>
// //                             <Components.Paragraph>
// //                                 Enter Your personal details and start the journey with us
// //                             </Components.Paragraph>
// //                             <Components.GhostButton onClick={() => toggle(false)}>
// //                                 Sign Up
// //                             </Components.GhostButton>
// //                         </Components.RightOverlayPanel>
// //                     </Components.Overlay>
// //                 </Components.OverlayContainer>
// //             </Components.Container>
// //         </div>
// //     );
// // }

// // export default Startuppage;
// import React, { useState } from "react";
// import * as Components from './Components';
// import Header from "../../Componant/HeaderofLogin/headeroflogin";
// import { useNavigate } from "react-router-dom";
// import { TextField } from "@mui/material";
// import './startuppage.css';

// const Startuppage = () => {
//     const [signIn, toggle] = useState(true);
//     const [signupName, setSignupName] = useState("");
//     const [signupEmail, setSignupEmail] = useState("");
//     const [signupPassword, setSignupPassword] = useState("");
//     const [signinEmail, setSigninEmail] = useState("");
//     const [signinPassword, setSigninPassword] = useState("");
//     const [signupError, setSignupError] = useState("");
//     const [signinError, setSigninError] = useState("");
//     const [showSuccessPopup, setShowSuccessPopup] = useState(false); // Added state for success popup
//     const navigate = useNavigate();

//     const handleSignupNameChange = (e) => {
//         setSignupName(e.target.value);
//     };

//     const handleSignupEmailChange = (e) => {
//         setSignupEmail(e.target.value);
//     };

//     const handleSignupPasswordChange = (e) => {
//         setSignupPassword(e.target.value);
//     };

//     const handleSigninEmailChange = (e) => {
//         setSigninEmail(e.target.value);
//     };

//     const handleSigninPasswordChange = (e) => {
//         setSigninPassword(e.target.value);
//     };

//     const handleSignupSubmit = (e) => {
//         e.preventDefault();

//         if (!signupName.trim() || !signupEmail.trim() || !signupPassword.trim()) {
//             setSignupError("All fields are required.");
//         } else {
//             navigate("/");
//             setShowSuccessPopup(true); // Show success popup on successful signup
//         }
//     };

//     const handleSigninSubmit = (e) => {
//         e.preventDefault();

//         if (!signinEmail.trim() || !signinPassword.trim()) {
//             setSigninError("Email and password are required.");
//         } else {
//             navigate("/");
//             setShowSuccessPopup(true); // Show success popup on successful login
//         }
//     };

//     return (
//         <div className="dev">
//             <Header />
//             <Components.Container>
//                 <Components.SignUpContainer signinIn={signIn}>
//                     <Components.Form onSubmit={handleSignupSubmit}>
//                         <Components.Title>Create Account</Components.Title>
//                         <TextField
//                             type='text'
//                             label='Name'
//                             variant='outlined'
//                             value={signupName}
//                             onChange={handleSignupNameChange}
//                             fullWidth
//                             margin='normal'
//                         />
//                         <TextField
//                             type='email'
//                             label='Email'
//                             variant='outlined'
//                             value={signupEmail}
//                             onChange={handleSignupEmailChange}
//                             fullWidth
//                             margin='normal'
//                         />
//                         <TextField
//                             type='password'
//                             label='Password'
//                             variant='outlined'
//                             value={signupPassword}
//                             onChange={handleSignupPasswordChange}
//                             fullWidth
//                             margin='normal'
//                         />
//                         <p className="error-message">{signupError}</p>
//                         <Components.Button type="submit">Sign Up</Components.Button>
//                     </Components.Form>
//                 </Components.SignUpContainer>

//                 <Components.SignInContainer signinIn={signIn}>
//                     <Components.Form onSubmit={handleSigninSubmit}>
//                         <Components.Title>Sign In</Components.Title>
//                         <TextField
//                             type='email'
//                             label='Email'
//                             variant='outlined'
//                             value={signinEmail}
//                             onChange={handleSigninEmailChange}
//                             fullWidth
//                             margin='normal'
//                             style={{ marginTop: '26px' }}
//                         />
//                         <TextField
//                             type='password'
//                             label='Password'
//                             variant='outlined'
//                             value={signinPassword}
//                             onChange={handleSigninPasswordChange}
//                             fullWidth
//                             margin='normal'
//                         />
//                         <p className="error-message">{signinError}</p>
//                         <Components.Button type="submit">Sign In</Components.Button>
//                     </Components.Form>
//                 </Components.SignInContainer>

//                 <Components.OverlayContainer signinIn={signIn}>
//                     <Components.Overlay signinIn={signIn}>
//                         <Components.LeftOverlayPanel signinIn={signIn}>
//                             <Components.Title>Welcome Back!</Components.Title>
//                             <Components.Paragraph>
//                                 To keep connected with us, please login with your personal info
//                             </Components.Paragraph>
//                             <Components.GhostButton onClick={() => toggle(true)}>
//                                 Sign In
//                             </Components.GhostButton>
//                         </Components.LeftOverlayPanel>

//                         <Components.RightOverlayPanel signinIn={signIn}>
//                             <Components.Title>Hello, Friend!</Components.Title>
//                             <Components.Paragraph>
//                                 Enter Your personal details and start the journey with us
//                             </Components.Paragraph>
//                             <Components.GhostButton onClick={() => toggle(false)}>
//                                 Sign Up
//                             </Components.GhostButton>
//                         </Components.RightOverlayPanel>
//                     </Components.Overlay>
//                 </Components.OverlayContainer>

//                 {showSuccessPopup && ( 
//                     <div className="success-popup">
//                         <p>Loginned successfully!</p>
//                     </div>
//                 )}
//             </Components.Container>
//         </div>
//     );
// }

// export default Startuppage;




// import React, { useState } from "react";
// import SuccessModal from "./SuccessModal"; // Import the SuccessModal component
// import * as Components from './Components';
// import Header from "../../Componant/HeaderofLogin/headeroflogin";
// import { useNavigate } from "react-router-dom";
// import { TextField } from "@mui/material"; // Import TextField from Material-UI
// import './startuppage.css';

// const Startuppage = () => {
//   const [signIn, toggle] = useState(true);
//   const [signupName, setSignupName] = useState("");
//   const [signupEmail, setSignupEmail] = useState("");
//   const [signupPassword, setSignupPassword] = useState("");
//   const [signinEmail, setSigninEmail] = useState("");
//   const [signinPassword, setSigninPassword] = useState("");
//   const [signupError, setSignupError] = useState("");
//   const [signinError, setSigninError] = useState("");
//   const [showSuccessModal, setShowSuccessModal] = useState(false); // State for the modal
//   const navigate = useNavigate();

//   // ...

//   const handleSignupSubmit = (e) => {
//     e.preventDefault();

//     if (!signupName.trim() || !signupEmail.trim() || !signupPassword.trim()) {
//       setSignupError("All fields are required.");
//     } else {
//       // Show the success modal
//       setShowSuccessModal(true);

//       // Reset the form and errors
//       setSignupName("");
//       setSignupEmail("");
//       setSignupPassword("");
//       setSignupError("");
//     }
//   };

//   // ...

//   return (
//     <div className="dev">
//       <Header />
//       <Components.Container>
//         <Components.SignUpContainer signinIn={signIn}>
//           <Components.Form onSubmit={handleSignupSubmit}>
//             <Components.Title>Create Account</Components.Title>
//             <TextField
//               type='text'
//               label='Name'
//               variant='outlined'
//               value={signupName}
//               onChange={handleSignupNameChange}
//               fullWidth
//               margin='normal'
//             />
//             <TextField
//               type='email'
//               label='Email'
//               variant='outlined'
//               value={signupEmail}
//               onChange={handleSignupEmailChange}
//               fullWidth
//               margin='normal'
//             />
//             <TextField
//               type='password'
//               label='Password'
//               variant='outlined'
//               value={signupPassword}
//               onChange={handleSignupPasswordChange}
//               fullWidth
//               margin='normal'
//             />
//             <p className="error-message">{signupError}</p>
//             <Components.Button type="submit">Sign Up</Components.Button>
//           </Components.Form>
//         </Components.SignUpContainer>

//         {/* Your other components... */}
//       </Components.Container>
//       <SuccessModal
//         isOpen={showSuccessModal}
//         onClose={() => setShowSuccessModal(false)}
//       />
//     </div>
//   );
// }

// export default Startuppage;

import React, { useState } from "react";
import SuccessModal from "./SuccessModal"; // Import the SuccessModal component
import * as Components from './Components';
import Header from "../../Componant/HeaderofLogin/headeroflogin";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material"; // Import TextField from Material-UI
import './startuppage.css';

const Startuppage = () => {
  const [signIn, toggle] = useState(true);
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");
  const [signupError, setSignupError] = useState("");
  const [signinError, setSigninError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State for the modal
  const navigate = useNavigate();

  const handleSignupNameChange = (e) => {
    setSignupName(e.target.value);
  };

  const handleSignupEmailChange = (e) => {
    setSignupEmail(e.target.value);
  };

  const handleSignupPasswordChange = (e) => {
    setSignupPassword(e.target.value);
  };

  const handleSigninEmailChange = (e) => {
    setSigninEmail(e.target.value);
  };

  const handleSigninPasswordChange = (e) => {
    setSigninPassword(e.target.value);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    if (!signupName.trim() || !signupEmail.trim() || !signupPassword.trim()) {
      setSignupError("All fields are required.");
    } else {
      // Show the success modal
      setShowSuccessModal(true);

      // Reset the form and errors
      setSignupName("");
      setSignupEmail("");
      setSignupPassword("");
      setSignupError("");

      // Navigate to "/"
      navigate("/");
    }
  };

  const handleSigninSubmit = (e) => {
    e.preventDefault();

    if (!signinEmail.trim() || !signinPassword.trim()) {
      setSigninError("Email and password are required.");
    } else {
      // Show the success modal
      setShowSuccessModal(true);

      // Reset the form and errors
      setSigninEmail("");
      setSigninPassword("");
      setSigninError("");

      // Navigate to "/"
      navigate("/");
    }
  };

  return (
    <div className="dev">
      <Header />
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form onSubmit={handleSignupSubmit}>
            <Components.Title>Create Account</Components.Title>
            <TextField
              type='text'
              label='Name'
              variant='outlined'
              value={signupName}
              onChange={handleSignupNameChange}
              fullWidth
              margin='normal'
            />
            <TextField
              type='email'
              label='Email'
              variant='outlined'
              value={signupEmail}
              onChange={handleSignupEmailChange}
              fullWidth
              margin='normal'
            />
            <TextField
              type='password'
              label='Password'
              variant='outlined'
              value={signupPassword}
              onChange={handleSignupPasswordChange}
              fullWidth
              margin='normal'
            />
            <p className="error-message">{signupError}</p>
            <Components.Button type="submit">Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form onSubmit={handleSigninSubmit}>
            <Components.Title>Sign In</Components.Title>
            <TextField
              type='email'
              label='Email'
              variant='outlined'
              value={signinEmail}
              onChange={handleSigninEmailChange}
              fullWidth
              margin='normal'
              style={{ marginTop: '26px' }}
            />
            <TextField
              type='password'
              label='Password'
              variant='outlined'
              value={signinPassword}
              onChange={handleSigninPasswordChange}
              fullWidth
              margin='normal'
            />
            <p className="error-message">{signinError}</p>
            <Components.Button type="submit">Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start the journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us, please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>

        {showSuccessModal && (
          <div className="success-popup">
            <p>Loginned successfully!</p>
          </div>
        )}
      </Components.Container>
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </div>
  );
}

export default Startuppage;

