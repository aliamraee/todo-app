import TodoList from "./components/TodoList"

function App() {

  return (
    <div className="flex items-center flex-col">
      <h1 className="p-8">Todo App</h1>

      <div className="w-full max-w-lg">
        <TodoList />
      </div>
    </div>
  )
}

export default App
