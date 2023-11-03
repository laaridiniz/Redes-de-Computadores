import './App.css';
import { Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import ListagemAlunos from "./pages/Listagem";
import EditarAluno from './pages/Editar';
import Header from './components/Header';

function App() {

  return (
    <>
      <div className="bg-div">

        <Header/>

        <div className='d-flex flex-center flex-column flex-column-fluid hf-spacing px-2 div-crud'>
          
          <div className='container bg-light-opacity rounded mx-auto' style={{padding:"2rem"}}>
            <Routes>
                <Route path="/" element={<Cadastro />} />
                <Route path="/listagem" element={<ListagemAlunos />} />
                <Route path="editar/:id" element={<EditarAluno />} />
            </Routes>
          </div>
              
        </div>
        
      </div> 
    

    </>  
  );
}

export default App;