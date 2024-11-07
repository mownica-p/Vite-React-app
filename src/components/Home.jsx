function Home({ person }) {
  return (
    <>
      <h1>
        {person.name} {person.age} {person.city}
        {person.arrNumbers}
      </h1>
      ;
    </>
  );
}

export default Home;
