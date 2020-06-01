import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

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

  const techSize = useMemo(() => {
    return tech.length
  }, [tech])

  return (
    <>
      <ul>
        { tech.map(t => <li key={t}>{t}</li>)}
      </ul>
      <strong>Você tem {techSize} técnologia(s).</strong>
      <input type="text" value={newTech} onChange={e => setNewTech(e.target.value)}/>
      <button onClick={handleAdd}>Adicionar</button>
    </>
  );
}

export default App;
