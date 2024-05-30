import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import './Square.css'
import hoverSong from '../assets/sound/hover.mp3'
import showSound from '../assets/sound/flipcard.mp3'
import blast from '../assets/sound/endgame.mp3'
import point from '../assets/sound/points.mp3'
import bomb from '../assets/bomb.png';
import diamond from '../assets/diamond3.png'


const Square = ({mine,setGameOver,gameOver,setScore,setComment}) => {

    let [image , setImage] = useState(false);
    const hover = hoverSong;
    const [play] = useSound(hover);

    useEffect(()=>{
        if(gameOver){
            if(mine){
                setImage(bomb)
                const boom = new Audio(blast);
                boom.play();
                setComment((newComment)=>{
                    return "Game Over";
                })
            }
            else{
                setImage(diamond)
            }
        }
    },[gameOver,mine])

    function onMouseEnterHandeler(){
        if(!image){
            const sound = new Audio(hover);
            sound.play();
        }
    }

    function clickHandeler(){
        if(gameOver) return;

        if(!mine){
            setScore((prevValue) =>{
                return Math.trunc(prevValue*1.25);
            });
            setImage(diamond);
            const show = new Audio(point);
            const show1 = new Audio(showSound);
            show.play();
            show1.play();
        }
        else{
            setGameOver(true);
            alert("Game Over");
        }
    }

  return (
    <div className='squrare_box'
     onMouseEnter={onMouseEnterHandeler}
     onClick={clickHandeler}>
        {image && <img height={90} width={90} src={image} />}
     </div>
  )
}

export default Square