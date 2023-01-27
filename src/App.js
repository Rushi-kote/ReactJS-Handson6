import { Route, Routes } from "react-router-dom";
import ContactUS from "./Componants/ContactUS";
import Edit from "./Componants/Edit";
import Home from "./Componants/Home";
import Navigation from "./Componants/Routing/Navigation";
import Students from "./Componants/Students";
import StudentContext from "./Componants/StudentContextapi";
import { useState } from "react";
import AddStudent from "./Componants/AddStudent";

function App() {
  const [Data, setData] = useState([
    {name:"Rushi",age:24,course:"FSE WEB",batch:"EA18"},
    {name:"fase",age:24,course:"FSE Java",batch:"EA10"},
    {name:"Ravi",age:24,course:"FSE Python",batch:"EA18"},
    {name:"Raju",age:30,course:"ITUS",batch:"2014"},
    {name:"shyam",age:29,course:"Mcom",batch:"2016"},
    {name:"Babu",age:50,course:"DopeherTak",batch:"2010"}
  ]);
  return (
    <div >
      <Navigation/>
      <StudentContext.Provider value={{entries: Data, UpdateFunction:setData}}>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Student" element={<Students/>}></Route>
          <Route path="/ContactUS" element={<ContactUS/>}></Route>
          <Route path="/Edit" element={<Edit/>}></Route>
          <Route path="/AddStudent" element={<AddStudent/>}></Route>
        </Routes>
      </StudentContext.Provider>
    </div>
  );
}

export default App;
