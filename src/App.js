// import Navbar from './navbar';
// import './App.css';
// import { BrowserRouter,Route, Routes } from 'react-router-dom';
// import Home from './Home';
// import UserAdd from './user/UserAdd';
// import Userlist from './user/Userlist';
// import Addcollege from './college/Addcollege'
// import Addstudent from './Student/Addstudent';
//  import Collegelist from './college/Collegelist' 
// import Studentlist from './Student/Student';
// import Addmark from './marksheet/Addmark'
// import Marklist from './marksheet/Marklist'
// import Addrole from './Role/Addrole'
// import Rolelist from './Role/Rolelist'
// import Login from './Login';
// import { createContext, useState } from 'react';


// export const authContext = createContext();
// function App() { 
//   const[auth, setAuth] = useState("");


//     function ContextApp () {
//       const auth1 = useContext(authContext)
//       let [auths, setAuths] =auth1;
//       setAuths(auth ? element : <Navigate to="/login" />)
//     }
//   return (
//     <>
//         <BrowserRouter>
//        <Navbar />
//        <authContext.Provider value={[auth, setAuth]}>
//         <Routes>
//           <Route path='home/' element={<Home />} />
//           <Route path='/login'  element={<Login/>} />
//           <Route path='/user' element={<UserAdd />} />
//           <Route path='/user/:pid' element={<UserAdd />} />
//           <Route path='/userlist' element={<Protect element={<Userlist />} />} />
//           <Route path='/addcollege' element={<Addcollege />} />
//           <Route path='/addcollege/:pid' element={<Addcollege />} />

//           <Route path='/clglist' element={<Collegelist />} />
//           <Route path='/addstudent' element={<Addstudent />} />
//           <Route path='/studentlist' element={<Studentlist />} />
//           <Route path='/addmark' element={<Addmark />} />
//           <Route path='/marklist' element={<Marklist />} />
//           <Route path='/addrole' element={<Addrole />} />
//           <Route path='/rolelist' element={<Rolelist />} />
   

 
//         </Routes>
//         </authContext.Provider>
//       </BrowserRouter>

//     </>
//   );
// };

// export default App;

import Navbar from './navbar';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import UserAdd from './user/UserAdd';
import Userlist from './user/Userlist';
import Addcollege from './college/Addcollege';
import Addstudent from './Student/Addstudent';
import Collegelist from './college/Collegelist';
import Studentlist from './Student/Student';
import Addmark from './marksheet/Addmark';
import Marklist from './marksheet/Marklist';
import Addrole from './Role/Addrole';
import Rolelist from './Role/Rolelist';
import Login from './Login';
import { createContext, useState } from 'react';

export const authContext = createContext();

function App() {
  const [auth, setAuth] = useState(() => {
    const stored = localStorage.getItem("token");
    return stored ? JSON.parse(stored) : "";
  });

  const isLoggedIn = !!auth;
  console.log(isLoggedIn)

  return (
    <authContext.Provider value={[auth, setAuth]}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={isLoggedIn ? <UserAdd /> : <Navigate to="/login" />} />
          <Route path="/user/:pid" element={isLoggedIn ? <UserAdd /> : <Navigate to="/login" />} />
          <Route path="/userlist" element={isLoggedIn ? <Userlist /> : <Navigate to="/login" />} />
          <Route path="/addcollege" element={isLoggedIn ? <Addcollege /> : <Navigate to="/login" />} />
          <Route path="/addcollege/:pid" element={isLoggedIn ? <Addcollege /> : <Navigate to="/login" />} />
          <Route path="/clglist" element={isLoggedIn ? <Collegelist /> : <Navigate to="/login" />} />
          <Route path="/addstudent" element={isLoggedIn ? <Addstudent /> : <Navigate to="/login" />} />
          <Route path="/studentlist" element={isLoggedIn ? <Studentlist /> : <Navigate to="/login" />} />
          <Route path="/addmark" element={isLoggedIn ? <Addmark /> : <Navigate to="/login" />} />
          <Route path="/marklist" element={isLoggedIn ? <Marklist /> : <Navigate to="/login" />} />
          <Route path="/addrole" element={isLoggedIn ? <Addrole /> : <Navigate to="/login" />} />
          <Route path="/rolelist" element={isLoggedIn ? <Rolelist /> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </authContext.Provider>
  );
}

export default App;
