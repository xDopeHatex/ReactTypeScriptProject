function App() {
  const yeah = async () => {
    setTimeout(() => console.log(1), 0);
    await Promise.resolve(2)
      .then(console.log)
      .catch((err) => console.log(err));
  };

  yeah();

  return <div className="app"></div>;
}

export default App;
