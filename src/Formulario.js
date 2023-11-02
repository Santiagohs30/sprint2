// src/Formulario.js
import React, { useState } from "react";
import "./Formulario.css";

const Formulario = () => {
  const [tarea, setTarea] = useState("");
  const [nombreConductor, setNombreConductor] = useState("");
  const [numeroPlaca, setNumeroPlaca] = useState("");
  const [confirmacion, setConfirmacion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar la solicitud aquí (puedes implementarla según tus necesidades).

    // Mostrar confirmación
    setConfirmacion(`Solicitud recibida para: ${tarea}. Conductor: ${nombreConductor}, Placa: ${numeroPlaca}`);
  };

  return (
    <div className="formulario-container">
      <form onSubmit={handleSubmit}>
        <label>Tarea:</label>
        <input type="text" value={tarea} onChange={(e) => setTarea(e.target.value)} required />

        <label>Nombre del Conductor:</label>
        <input type="text" value={nombreConductor} onChange={(e) => setNombreConductor(e.target.value)} required />

        <label>Número de Placa:</label>
        <input type="text" value={numeroPlaca} onChange={(e) => setNumeroPlaca(e.target.value)} required />

        <button type="submit">Solicitar Servicio</button>
      </form>

      {confirmacion && <div className="confirmacion">{confirmacion}</div>}
    </div>
  );
};

export default Formulario;
