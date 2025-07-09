const Header =(props)=>{
console.log(props)
  return(
  <>
  <h1>{props.course.name}</h1>
  </>
  );
};

const Content =(props)=>{
  console.log("estas son las partes del curso",props);
  console.log("este es el curso 0 ", props.parts[0].name)

  return(
  <div>
    <h2>{props.parts[0].name}</h2>
    <h2>{props.parts[1].name}</h2>
    <h2>{props.parts[2].name}</h2>
  </div>
  );
};

const Total =(props)=>{
  console.log("estas son los ejercicios del curso",props)

  return(
  <>
    <h2>{props.parts[0].exercises}</h2>
    <h2>{props.parts[1].exercises}</h2>
    <h2>{props.parts[2].exercises}</h2>

  </>
  );
};


const App = () => {
  const course = {name:'Half Stack application development',
    parts:[
      {
        name:'Fundamentals of React',
        exercises:10
      },
      {
        name:'Using props to pass data',
        exercises:7
      },{
        name:'State of a component',
        exercises:14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App