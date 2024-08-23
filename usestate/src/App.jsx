import './App.scss'
import { TaskSection } from './components/TaskSection/TaskSection'
import { Button } from './components/Button/Button'
import { Greeting } from './components/Greeting/Greeting'
import { Todo } from './components/Todo/Todo'

function App() {
  return (
    <>
    <TaskSection title = 'Opgave 3.1.1'>
    <Button></Button>
    </TaskSection>

    <TaskSection title = 'Opgave 3.1.2'>
    <Greeting></Greeting>
    </TaskSection>

    <TaskSection title = 'Opgave 3.1.3'>
    <Todo></Todo>
    </TaskSection>
    </>
  )
}

export default App
