import React, { useState } from "react";
import "./App.css";

const LoveLetterGenerator = () => {
  const [recipient, setRecipient] = useState("");
  const [letter, setLetter] = useState(null);

  const lovePhotos = [
    "foto1.jpg", 
    "foto2.jpg" ,
    "foto3.jpg" ,
    "foto4.jpg"
  ];

  const generateLetter = () => {
    if (!recipient.trim()) {
      alert("Por favor, ingresa tu nombre amor.");
      return;
    }

    const randomPhoto = lovePhotos[Math.floor(Math.random() * lovePhotos.length)];
    
    const messages = [
      `Mi querido/a ${recipient}, mi corazón late solo por ti. Eres la razón por la que cada día es especial.`,
      `Amor mío, ${recipient}, no hay palabras suficientes para describir lo que siento por ti. Eres mi todo.`,
      `${recipient}, tu presencia ilumina mi vida y me haces sentir completo/a. Te amo más de lo que puedo expresar.`,
      `Mi amor, ${recipient}, cada día a tu lado es un regalo que atesoro profundamente. Gracias por ser mi todo.`,
      `${recipient}, tus ojos son mi refugio y tu voz mi melodía. Estoy agradecido/a de tenerte en mi vida.`,
      `Cuando te miro, ${recipient}, siento que todo lo que he vivido hasta ahora tiene sentido. Tú eres mi destino.`,
      `Tu amor es la fuerza que me mantiene en pie, ${recipient}. No hay nada que desee más que estar a tu lado para siempre.`,
      `Desde que llegaste a mi vida, ${recipient}, todo ha cambiado para mejor. Gracias por enseñarme lo que es el verdadero amor.`,
      `Mi querido/a ${recipient}, cada momento contigo es como un sueño hecho realidad. Te amo más de lo que las palabras pueden expresar.`,
      `Cada día que paso a tu lado, ${recipient}, me siento más afortunado/a. Tú eres la razón de mi felicidad.`,
      `Mi amor por ti, ${recipient}, es tan inmenso como el universo. No hay nada que pueda separarnos.`,
      `${recipient}, mi vida sin ti no tendría sentido. Eres el sol que ilumina mi cielo y el latido de mi corazón.`,
      `Solo tú, ${recipient}, puedes hacer que mi alma se sienta en paz. Te amo con todo mi ser.`,
      `Hoy y siempre, ${recipient}, quiero ser la razón por la que sonríes. Mi amor por ti no tiene fin.`,
      `Eres mi razón de ser, ${recipient}. No importa lo que pase, siempre estaré a tu lado.`
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    setLetter({ recipient, message: randomMessage, photo: randomPhoto });
  };

  return (
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
            <p>{letter.message}</p>
            <span className="heart">❤️</span>
          </div>
          <div className="photo-display">
            <img src={require(`./assets/${letter.photo}`)} alt="Momento especial" />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoveLetterGenerator;


