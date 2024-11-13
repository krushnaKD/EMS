import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployesDashboard from "./Components/Dashboard/EmployesDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { getLocalStorage, SetLocalStorage } from "./Utils/LocalStorage";
import { AuthContext } from "./Context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [userdata,setuserData] = useContext(AuthContext);

  useEffect(() => {
    SetLocalStorage();
    const loggedInUser = localStorage.getItem("loggedInUser");
  
    if (loggedInUser) {
      try {
        const UserData = JSON.parse(loggedInUser);
        setUser(UserData.role);
        setloggedInUserData(UserData.Data);
      } catch (error) {
        console.error("Error parsing loggedInUser:", error);
        // Clear the invalid item to avoid repeated errors
        localStorage.removeItem("loggedInUser");
      }
    } 
  }, []);
  

  // useEffect(() => {
  //   if (Authdata) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [Authdata]);

  const HandleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userdata) {
      const employee = userdata.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employees");
        setloggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employees", Data: employee })
        );
      }
    } else {
      console.log("Invalid User");
    }
  };

  return (
    <>
      {!user ? <Login HandleLogin={HandleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard data={loggedInUserData} changeUser={setUser}/>
      ) : user === "employees" ? (
        <EmployesDashboard data={loggedInUserData} changeUser={setUser} />
      ) : null}
    </>
  );
}

export default App;
