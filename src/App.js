import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer";
import Appointment from "./Pages/Appointment/Appointment";
import SignUp from "./Pages/Login/SignUp";
import Required from "./Pages/Shared/Required";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import Review from "./Pages/Dashboard/Review";
import AllUsers from "./Pages/Dashboard/AllUsers";
import RequiredAdmin from "./Pages/Shared/RequiredAdmin";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="appointment" element={<Appointment></Appointment>}></Route>
        <Route
          path="about"
          element={
            <Required>
              <About></About>
            </Required>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <Required>
              <Dashboard></Dashboard>
            </Required>
          }
        >
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route
            path="users"
            element={
              <RequiredAdmin>
                <AllUsers></AllUsers>
              </RequiredAdmin>
            }
          ></Route>
          <Route
            path="addDoctor"
            element={
              <RequiredAdmin>
                <AddDoctor></AddDoctor>
              </RequiredAdmin>
            }
          ></Route>
          <Route
            path="manageDoctor"
            element={
              <RequiredAdmin>
                <ManageDoctors></ManageDoctors>
              </RequiredAdmin>
            }
          ></Route>
        </Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
