import React, { useState } from 'react';
import data from './data';

const maxLength=data.length;

function App() {
  const [count, setCount] = useState(0);
  const [text,setText]=useState([]);
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    let amount=parseInt(count);
    if(amount<0) amount=0;
    if(amount>50) amount=50;

    let fullData = Math.floor(amount/maxLength);
    let restData = amount%maxLength;

    let newData=[]
    while(fullData--){
      newData=[...newData,...data]
    }
    newData=[...newData,...data.slice(0,restData)]
    setText(newData);
  }

  return (
  <section className="section-center">
    <h3>Tired of Boring Lorem Ipsum ?</h3>
    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount">Paragraphs :</label>
    <input type="number" max="50" min="0" name="amount" id="amount" value={count} onChange={(e)=>setCount(e.target.value)}/>
    <button type="submit" className="btn">Generate</button>
    </form>
    <article className="lorem-text">
      {text.map((item,index)=>{
        return <p key={index}>{item}</p>
      })}
    </article>
  </section>
    )
}

export default App;
