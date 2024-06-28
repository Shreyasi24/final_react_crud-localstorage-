import './App.css';
// import Add from './Component/Add';
// import Edit from './Component/Edit';
// import List from "./Component/List";
import {
  BrowserRouter,
  Route, Routes
} from 'react-router-dom';
// import DynamicTable from './DynamicTable';
// import User from './AllinOne/User';
//import List from "./EditModal/List";
import Form from './FormSubmission/Form';

function App() {
  return (
    <div className="App">
      <Form />
      {/* <List /> */}
      {/* <User/> */}
      {/* <DynamicTable/> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
