import { useNavigate } from "react-router-dom"

export default function Footer(){
  const nav=useNavigate();
  return(
  <>
      <div className="full-footer">
      <br/>
      <div className="contact">
        <h6>Contact Us</h6>
      </div>
      <div>
      <i onClick={()=>nav('/register')} class="far fa-envelope"></i>
      </div>
      <div className="foot-phn">
      <h6>&nbsp;<a className="like" href="https://fontawesome.com/v5/icons/twitter?f=brands&s=solid">Osriram@gmail.com</a></h6>
      </div>
      <div >
      <i class="fas fa-phone-alt"></i>
      </div>
      <div>
      <h6>&nbsp;9600399818</h6>
      </div>
      <div className="foot-in">
      <i class="fab fa-linkedin-in"></i>
      </div>
      <div>
      <h6>&nbsp;<a className="like" href="https://www.linkedin.com/in/raghul-s-a64816256">www.linkedin.com/in/raghul-s-a64816256</a></h6>
      </div>
      <div className="foot-twet">
      <i class="fab fa-twitter"></i>
      </div>
      <div>
      <h6>&nbsp;ts.twitter.com</h6>
      </div>
    </div>
    <div className="foot-copyright">
    <hr></hr>
    <div></div>
    <h6>Copyright &copy; 2023 All Rights Reserved </h6>
    
    </div>
    </>

  )
}



























// import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

// export default function StickyFooter() {
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//         }}
//       >
//         <CssBaseline />
        
//         <Box
//           component="footer"
//           sx={{
//             py: 3,
//             px: 2,
//             mt: 'auto',
//             backgroundColor: (theme) =>
//               theme.palette.mode === 'light'
//                 ? theme.palette.grey[200]
//                 : theme.palette.grey[800],
//           }}
//         >
//           <Container maxWidth="sm">
//             <Typography variant="body1">
//               My sticky footer can be found here.
//             </Typography>
//             <Copyright />
//           </Container>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// }