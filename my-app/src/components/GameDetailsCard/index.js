import { useEffect,useState } from 'react';
import './index.css';

const GameDetails = ({ selectedCard, defusesLeft, cardsRemaining }) => {
  const [drawStatus,setDrawStatus] = useState('success')

  useEffect(()=>{
    setDrawStatus('progress')
    const id = setInterval(() => {
      setDrawStatus('success')
    }, 300);
    return ()=>clearInterval(id)
  },[cardsRemaining])


  const cardDetails = () => (
    <div className='img-details-container'>
        <img src={selectedCard.imageUrl} alt={selectedCard.name} className="card-image" />
          <div className="count-container">
            <p>Defuser Count</p>
            <h2>{defusesLeft}</h2>
            <p>Remaining Cards</p>
            <h2>{cardsRemaining}</h2>
        </div>
    </div>
  )

  const progress = () => (
    <p>Drawing......</p>
  )

  const card = () => {
    switch(drawStatus){
      case 'progress':
        return progress()
      case 'success':
        return cardDetails()
      default:
        return null;
    }
  }
  

  return (
    <div className="game-details-container">    
          {selectedCard === null ? (
            <p>Draw a card to display details.</p>
          ) : card()
          }
         
    </div>
  );
};

export default GameDetails;
