import './App.css'
import Square from './Square/Square';
import { useState } from 'react';

function getRandBlock(min,max){
  return Math.random() * (max-min) +min;
}

let random = [];
// to resolve the problem of getting same number in the array we have made this condition
while(random.length <3){
  let number = Math.trunc(getRandBlock(0,25))
  if(!random.includes(number))
    random.push(number);
}

console.log(random);

function App(){
    
  let [gameOver, setGameOver] = useState(false);
  let [score, setScore] = useState(100);
  let [comment , setComment] = useState("Enjoy the Game");

  const items = [];
  for (let index = 0; index < 25; index++) {
    if(random.includes(index)){
      items.push(<Square setComment={setComment} setScore={setScore} gameOver={gameOver} setGameOver={setGameOver} mine={true} key={index} />)
    }
    else{
      items.push(<Square setComment={setComment} setScore={setScore} gameOver={gameOver} setGameOver={setGameOver} key={index}/>)
    }
  }

  return(
    <>
    <div className="heding">
      <h1>Minesweeper</h1>
      <p>{comment}</p>
    </div>
    <div className="parent">
    <div className='Total_Score'>
      <p>Total Score</p>
      <p>{score} Points</p>
    </div>
    <div className="board">
      {items}
    </div>
    </div>
    </>
  )
}

export default App;