import Person from './Person/Person';
import styles from './Persons.module.css';

const persons = [
  {name: "Dmitry", id: '1'},
  {name: "Helga", id: '2'},
  {name: "Zlata", id: '3'},
  {name: "Sanya", id: '4'},
  {name: "Egor", id: '5'},
  {name: "Artem", id: '6'},
]

const personsJSX = persons.map(person => <Person name={person.name} id={person.id} />)

function Persons(props) {
  return (
    <div className={styles.container}>
      { personsJSX }
    </div>
  );
}

export default Persons;