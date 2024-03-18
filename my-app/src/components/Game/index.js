import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import LeaderBoard from '../Leaderboard'
import GameDetails from '../GameDetailsCard';
import CreateDeckWithRandomCards from '../Deck';
import ReactPopUp from '../Rules';

import 'reactjs-popup/dist/index.css'
import './index.css'

const Game = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [deck, setDeck] = useState([]);
  const [defusesLeft, setDefusesLeft] = useState(0);
  const [remainingCards, setRemainingCards] = useState(5);
  const [gameStatus, setGameStatus] = useState('progress');
  const [played,setPlayed] = useState(0)
  const [wins,setWins] = useState(0)
  const [username,setName] = useState('')
  const [leaderBoardData,setLeaderBoardData] = useState([])
  const location = useLocation();
  const history = useHistory()


  const getUserBoardData = async(name) => {
    const options = {
      method:'GET',
      headers:{
        "content-type":"application/json",
        "accept":"application/json"
      }
    }
    const response = await fetch(`https://exploding-kitten-backend-production.up.railway.app/details/?name=${name}`,options)
    const data = await response.json();
    if(response.ok){
      setPlayed(data.played)
      setWins(data.wins)
    }else{
      console.log("some error with the backend")
    }
  }

  const getLeaderBoardData = async() => {
    const options = {
      mathod:'GET',
      headers:{
        "content-type":"application/json",
        "accept":"application/json"
      }
    }
    const response = await fetch(`https://exploding-kitten-backend-production.up.railway.app/leardboard/`,options)
    const data = await response.json();
    if (response.ok){
      setLeaderBoardData(data)
    }
  }

  const updateUserDetails = async () => {
    const options = {
      method: 'PUT',
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({
        username,
        played: played + 1,
        wins: gameStatus === 'win' ? wins + 1 : wins
      })
    };

    const response = await fetch(`https://exploding-kitten-backend-production.up.railway.app/update`, options);

    if (response.ok) {
      getUserBoardData(username)
      getLeaderBoardData()
    }
};


useEffect(() => {
  if (gameStatus === 'win' || gameStatus === 'lose') {
    updateUserDetails();  
  }
}, [gameStatus]);


  useEffect(() => {
    const name = location.state?.username;
    if (!name){
      history.replace('/');
    }else{
      setName(name)
      getUserBoardData(name)
      const newDeck = CreateDeckWithRandomCards();
      setDeck(newDeck);
      getLeaderBoardData()
    }
  }, []);

  const exitGame = () => {
    setName("")
    history.replace('/');
  }

  const startNewGame = () => {
    const newDeck = CreateDeckWithRandomCards();
    setDeck(newDeck);
    setGameStatus('progress')
    setDefusesLeft(0)
    setRemainingCards(5)
    setSelectedCard(null)
  }

  const drawCardFromDeck = () => {
    if (remainingCards > 0) {
      const drawnCard = deck.pop();
      setSelectedCard(drawnCard);
      setRemainingCards(remainingCards - 1);

      switch (drawnCard.name) {
        case 'Cat Card':
          break;
        case 'Exploding kitten card':
          if (defusesLeft === 0) {
            setGameStatus('lose');
          } else {
            setDefusesLeft(defusesLeft-1)
          }
          break;
        case 'Defuse card':
          setDefusesLeft(prevDefuses => prevDefuses + 1);
          break;
        case 'Shuffle Card':
          setDeck([...CreateDeckWithRandomCards()]);
          setRemainingCards(5);
          break;
        default:
          console.log('unknown');
      }
      if (remainingCards===1 && drawnCard.name!=='Shuffle Card'){
        if (drawnCard.name!=='Exploding kitten card'){
            setGameStatus('win')
        }else{
            if (defusesLeft>0){
                setGameStatus('win')
            }
        }
      }
    } else {
      setGameStatus('win');
    }
  };

  return (
    <div className='game-container'>
      <h1 className='game-heading'>😸Exploding Kitten </h1>
      <h1 className='player-name'>Hello, {username}</h1>
      <ReactPopUp />
      <button type="button" className='exit-btn' onClick={exitGame}>Exit Game</button>
      <div className='player-history'>
        <p>Played : {played}</p>
        <p>Wins : {wins}</p>
      </div>
      <div className='game'>
        <div className='game-card-details-container'>
        <div>
        {gameStatus === 'lose' && <p className="lost-para">You Lose! Exploding Kitten got you!</p>}
        {gameStatus === 'win' && <p className="win-para">Congratulations! You won!</p>}
          <GameDetails selectedCard={selectedCard} defusesLeft={defusesLeft} cardsRemaining={remainingCards} />
          {selectedCard!==null && <p className='drawn-card-details'>You have drawn the {selectedCard.name}</p>}
        </div>
        {gameStatus==='progress'?<button onClick={drawCardFromDeck} className='draw-btn'>Click To Draw The Card</button>: <button type="button" className='start-btn' onClick={startNewGame}>Start New Game</button>}
        </div>
        <LeaderBoard leaderBoardData={leaderBoardData} />
      </div>
    </div>
  );
};

export default Game;
