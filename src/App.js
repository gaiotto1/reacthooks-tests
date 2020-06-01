import React, { useState, useEffect } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd () {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  // componentDidMount
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }

    // componentWillMount
    /* return () => {
      document.removeEventListener()
    }; */
  }, []);

  // componentDidUpdate
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  return (
    <>
      <ul>
        { tech.map(t => <li key={t}>{t}</li>)}
      </ul>
      <input type="text" value={newTech} onChange={e => setNewTech(e.target.value)}/>
      <button onClick={handleAdd}>Adicionar</button>
    </>
  );
}

export default App;
