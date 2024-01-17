
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import CustomerRouters from './Routers/CustomerRouters';
import AdminPannel from './Admin/AdminPannel';





function App() {
  return (

    <Routes>
      <Route path='/*' element={<CustomerRouters/>}></Route>
      <Route path="/admin/*" element={<AdminPannel />} />
    </Routes>
  
    


   
  );
}

export default App;
