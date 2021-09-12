import NavbarComponent from "../components/Navbar";
import ExerciseList from "../components/ExerciseList";

const Pepe = (props) => {
    return (
      <>
        <NavbarComponent></NavbarComponent>
        <h1>Estas en la lista de ejercicios</h1>
        <ExerciseList/>
      </>
    );
}

export default Pepe;