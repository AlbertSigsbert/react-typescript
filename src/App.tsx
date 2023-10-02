import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {first:'Bruce', last:'Wayne'},
    {first:'Clark', last:'Kent'},
    {first:'Princes', last:'Diana'},
  ]
  return (
    <div className="mx-[6%] my-16">
      <Greet name='Albert' messageCount={20} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
