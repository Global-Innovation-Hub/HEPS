import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes,useLocation  } from "react-router-dom";

import Tasks from "./pages/Tasks";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Stepperr from "./pages/Setting";
import TaskDetails from "./pages/TaskDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";
function App() {
 
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      </Routes>
      <SideBar>
        <Routes>
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/users" element={<Users />} />
          
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/Stepperr" element={<Stepperr />} />
          <Route path="/tasks/:id" element={<TaskDetails/>} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;

// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import SideBar from "./components/Sidebar/SideBar";
// import Tasks from "./pages/Tasks";
// import Users from "./pages/Users";
// import Messages from "./pages/Messages";
// import FileManager from "./pages/FileManager";
// import Analytics from "./pages/Analytics";
// import Order from "./pages/Order";
// import Saved from "./pages/Saved";
// import Stepperr from "./pages/Setting";
// import TaskDetails from "./pages/TaskDetails";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Login from "./pages/Login";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <Router>
//       {isLoggedIn ? (
//         <SideBar onLogout={handleLogout}>
//           <Routes>
//             <Route path="/tasks" element={<Tasks />} />
//             <Route path="/users" element={<Users />} />
//             <Route path="/messages" element={<Messages />} />
//             <Route path="/analytics" element={<Analytics />} />
//             <Route path="/file-manager" element={<FileManager />} />
//             <Route path="/order" element={<Order />} />
//             <Route path="/saved" element={<Saved />} />
//             <Route path="/Stepperr" element={<Stepperr />} />
//             <Route path="/tasks/:id" element={<TaskDetails />} />
//             <Route path="*" element={<>not found</>} />
//           </Routes>
//         </SideBar>
//       ) : (
//         <Login onLogin={handleLogin} />
//       )}
//     </Router>
//   );
// }

// export default App;
