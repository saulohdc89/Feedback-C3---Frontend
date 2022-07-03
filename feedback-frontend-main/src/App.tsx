import PessoasTabela from './pages/MainPage/PessoasTabela'
import SetoresTabela from './pages/MainPage/SetoresTabela'
import FeedbackTabela from './pages/MainPage/FeedbackTabela'

function App(){
  return (
    <>
    <h1>Sistema de feedback</h1>
    <h2>Registro de pessoas</h2>
    <PessoasTabela></PessoasTabela>
    <h2>Setores Registrados</h2>
    <SetoresTabela></SetoresTabela>
    <h2>Feedbacks Registrados</h2>
    <FeedbackTabela></FeedbackTabela>
    </>
  )
}

export default App