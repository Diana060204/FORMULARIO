import React, { useState } from "react";
import "./formulario.css";

const FormularioLibros = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    genero: "",
    suscripcion: false,
    comentarios: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="aesthetic-form">
        <div className="form-group">
          <label>Nombre del libro:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Género:</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="genero"
                value="ficcion"
                checked={formData.genero === "ficcion"}
                onChange={handleChange}
                className="form-radio"
              />{" "}
              Ficción
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="genero"
                value="no-ficcion"
                checked={formData.genero === "no-ficcion"}
                onChange={handleChange}
                className="form-radio"
              />{" "}
              No ficción
            </label>
          </div>
        </div>
        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="suscripcion"
              checked={formData.suscripcion}
              onChange={handleChange}
              className="form-checkbox"
            />{" "}
            Suscribirse al boletín
          </label>
        </div>
        <div className="form-group">
          <label>Comentarios:</label>
          <textarea
            name="comentarios"
            value={formData.comentarios}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="form-button">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioLibros;