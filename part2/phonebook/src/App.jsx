import { useState } from "react";
import Note from "./components/Note";

// const Note = ({ note }) => {
//   return <li>{note.content}</li>;
// };

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  console.log(persons);

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      id: Date.now(),
    };
    setPersons([...persons, newPerson]);
    setNewName("");
  };

  const handleDelete = (id) => {
    setPersons(persons.filter((person) => person.id !== id));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Note key={person.id} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;
