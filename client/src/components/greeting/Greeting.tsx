import './Greeting.css';

export const Greeting = ({name}: { name: string}) => {

  return (
    <div>
      <h1 className="title">Hello {name}!</h1>
    </div>
  )
}

