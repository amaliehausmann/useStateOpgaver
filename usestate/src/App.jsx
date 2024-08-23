import './App.scss'
import { TaskSection } from './components/TaskSection/TaskSection'
import { Button } from './components/Button/Button'
import { Greeting } from './components/Greeting/Greeting'

function App() {
  return (
    <>
    <TaskSection title = 'Opgave 3.1.1'>
    <Button></Button>
    </TaskSection>

    <TaskSection title = 'Opgave 3.1.2'>
    <Greeting></Greeting>
    </TaskSection>
    </>
  )
}

export default App
