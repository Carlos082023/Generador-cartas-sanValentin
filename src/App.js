import React, { useState } from "react";
import fondo from "./assets/fondo.jpg";
import "./App.css";

const LoveLetterGenerator = () => {
  const [recipient, setRecipient] = useState("");
  const [letter, setLetter] = useState(null);

  const lovePhotos = [
    "luli1.jpg",
    "luli2.jpg",
    "luli3.jpg",
    "luli4.jpg",
    "luli5.jpg",
    "luli6.jpg",
    "luli7.jpg",
    "luli8.jpg",
    "luli9.jpg",
    "luli10.JPG",
    "luli11.jpg",
    "luli12.jpg"
  ];

  const messages = [
    `Mi querido/a ${recipient}, mi corazón late solo por vos. Eres la razón por la que cada día es especial.`,
    `Amor mío, ${recipient}, no hay palabras suficientes para describir lo que siento por vos. Sos mi todo.`,
    `${recipient}, tu presencia ilumina mi vida y me haces sentir completo/a. Te amo más de lo que puedo expresar.`,
    `Mi amor, ${recipient}, cada día a tu lado es un regalo que atesoro profundamente. Gracias por ser mi todo.`,
    `${recipient}, tus ojos son mi refugio y tu voz mi melodía. Estoy agradecido/a de tenerte en mi vida.`,
    `Cuando te miro, ${recipient}, siento que todo lo que he vivido hasta ahora tiene sentido. Tú eres mi destino.`,
    `Tu amor es la fuerza que me mantiene en pie, ${recipient}. No hay nada que desee más que estar a tu lado para siempre.`,
    `Desde que llegaste a mi vida, ${recipient}, todo ha cambiado para mejor. Gracias por enseñarme lo que es el verdadero amor.`,
    `Mi querido/a ${recipient}, cada momento contigo es como un sueño hecho realidad. Te amo más de lo que las palabras pueden expresar.`,
    `Cada día que paso a tu lado, ${recipient}, me siento más afortunado/a. Vos eres la razón de mi felicidad.`,
    `Mi amor por ti, ${recipient}, es tan inmenso como el universo. No hay nada que pueda separarnos.`,
    `${recipient}, mi vida sin ti no tendría sentido. Eres el sol que ilumina mi cielo y el latido de mi corazón.`,
    `Solo Vos, ${recipient}, puedes hacer que mi alma se sienta en paz. Te amo con todo mi ser.`,
    `Hoy y siempre, ${recipient}, quiero ser la razón por la que sonríes. Mi amor por vos no tiene fin.`,
    `Eres mi razón de ser, ${recipient}. No importa lo que pase, siempre estaré a tu lado.`
  ];

  const generateLetter = () => {
    if (!recipient.trim()) {
      alert("Por favor, ingresa tu nombre amor.");
      return;
    }

    const randomPhoto = lovePhotos[Math.floor(Math.random() * lovePhotos.length)];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    setLetter({ recipient, message: randomMessage, photo: randomPhoto });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
       
      }}
    >
      <div className="container">
        <h1 className="title">💌 Generador de Cartas de Amor 💌</h1>

        <div className="card">
          <label>Para:</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Escribe tu nombre mi amor"
          />
          <button onClick={generateLetter}>💖 Crear Carta 💖</button>
        </div>

        {letter && (
          <div className="letter-display">
            <div className="letter-content">
              <h2>Para: {letter.recipient}</h2>
              <h2>De: Carlitos Tony</h2>
              <p>{letter.message}</p>
              <span className="heart">❤️</span>
            </div>

            <div className="photo-display">
              <img
                src={require(`./assets/${letter.photo}`)}
                alt="Momento especial"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/300x200?text=Imagen+no+encontrada";
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoveLetterGenerator;


