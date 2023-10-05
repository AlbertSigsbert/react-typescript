import { Button, ButtonWithEvent } from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
    { first: "Princes", last: "Diana" },
  ];

  const handleClick = () => {
    console.log("Btn Clicked");
  };
  const handleClickTwo = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Btn Two Clicked", e);
  };
  return (
    <div className="mx-[6%] my-16">
      <Greet name="Albert" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Oscar>
        <Heading />
      </Oscar>
      <Button handleClick={handleClick} />
      <ButtonWithEvent handleClick={handleClickTwo} />
      <Input
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log("Changes", e);
        }}
      />
      <Container styles={{padding:'1em', textAlign:'center', marginTop:'0.5em'}}/> 
    </div>
  );
}

export default App;
