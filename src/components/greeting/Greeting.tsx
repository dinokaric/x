import './Greeting.css';

export const Greeting = ({name, color}: { name: string, color: string }) => {

  return (
    <div>
      <h1 className="title">Hello World!</h1>
      {name}
      {color}
    </div>
  )
}

