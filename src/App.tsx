import './App.css'
import AnswerInput from './components/AnswerInput'

function App() {
  return (
    <div className="bg-blue-500 text-black p-4 rounded-md">
      <h1>Luyện đề Toeic</h1>
        <div className="bg-amber-100 min-h-screen p-4">
          <AnswerInput />
        </div>
    </div>
  )
}

export default App
