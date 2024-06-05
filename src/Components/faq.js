import React from "react";
import './faq.css';

const Faq = () => {
  const Questions = [
    {
      id: 1,
      title: 'hello world',
      Content: 'here are the best thing in this world i am the one guy on this planet'
    },
    {
      id: 2,
      title: 'hello world title 2',
      Content: 'i am the best in this world i have the knowldedge'
    },
    {
      id: 3,
      title: 'hello',
      Content: 'j hos ramro garna lagis khusi lagyo'
    }
  ];

  return (
    <div className="faq-container">
      {Questions.map((question) => (
        <div key={question.id} className="faq-item">
          <h3>{question.title}</h3>
          <p>{question.Content}</p>
        </div>
      ))}
    </div>
  );
}

export default Faq;
