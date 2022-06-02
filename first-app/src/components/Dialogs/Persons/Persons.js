import Person from './Person/Person';
import styles from './Persons.module.css';

function Persons(props) {
  console.log(props);
  const personsJSX = props.persons.map(person => <Person name={person.name} id={person.id} />)

  return (
    <div className={styles.container}>
      { personsJSX }
    </div>
  );
}

export default Persons;