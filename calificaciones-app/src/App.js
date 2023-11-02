import React, { useState } from 'react';
import './App.css';
import './styles.css';


function App() {
  const [calificacion, setCalificacion] = useState('');
  const [comentario, setComentario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del comentario y la calificación a tu servidor backend.
    console.log('Calificación:', calificacion);
    console.log('Comentario:', comentario);
  };

  return (
    <div className="App">
      <h1>Calificaciones y Comentarios</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Calificación:
          <input type="number" value={calificacion} onChange={(e) => setCalificacion(e.target.value)} />
        </label>
        <label>
          Comentario:
          <textarea value={comentario} onChange={(e) => setComentario(e.target.value)} />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
