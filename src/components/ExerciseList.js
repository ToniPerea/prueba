const ExerciseList = (props) => {
    const DEBUG =false;
    const ejercicios = 
    [
            {'titulo': "push ups 1",
            'imagen': 'https://i.gifer.com/UHt5.gif'}, 
            {'titulo': "pull ups 1"},
            {'titulo': "otro ejerciico"},
            {'titulo': "andar"}
    ];

return (
  <>
    {DEBUG && JSON.stringify(ejercicios)}
    {ejercicios.map((i) => {
      return <CardComponet titulo={i.titulo} imagen={i.imagen} />;
    })}
  </>
);
}

export default ExerciseList;