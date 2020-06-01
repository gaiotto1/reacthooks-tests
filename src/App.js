import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState(['ReactJS','ReactNative']);
  const [newTech, setNewTech] = useState('');

  function handleAdd () {
    setTech([...tech, newTech]);
  }

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
