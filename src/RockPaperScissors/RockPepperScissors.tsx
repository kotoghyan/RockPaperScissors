import React, {useEffect, useState} from 'react';
import classes from './RockPepperScissors.module.css'
import {SELECTIONS} from "./rockPapperScissorsHelper";

const RockPepperScissors = () => {
    const [playerId, setPlayerId] = useState(0)
    const [playerScore, setPlayerScore] = useState(0)

    const [dialog, setDialog] = useState(false)

    const [aiId, setAiId] = useState(0)
    const [aiScore, setAiScore] = useState(0)

    useEffect(() => {
        chekWin();
    }, [aiScore, playerScore])

    const playerSelection = SELECTIONS.find((el) => el?.id === playerId)
    const aiSelection = SELECTIONS.find((el) => el?.id === aiId)

    const aiSteps = () => Math.round(Math.random() * 2)

    const gamePlay = (id: number) => {
        aiSteps()
        setPlayerId(id)
        setAiId(aiSteps())
        score();
    }

    const score = () => {
        if (playerSelection?.beats === aiSelection?.name) {
            setPlayerScore(prev => prev + 1)
        }
        if (aiSelection?.beats === playerSelection?.name) {
            setAiScore(prev => prev + 1)
        }
    }


    const chekWin = () => {
        if (playerScore === 3) {
            setDialog(true)
        } else if (aiScore === 3) {
            setDialog(true)
        }
    }
    const restartGame = () => {
        setDialog(false);
        setAiScore(0);
        setPlayerScore(0);
    }

    return (
        <div>
            <div className="selections">
                    <dialog open={dialog}>

                        <div>
                            {playerScore === 3 ? <span>You Win</span> : <span>Computer Win</span>}
                        </div>
                        <button onClick={restartGame}>Restart Game</button>

                    </dialog>

                {SELECTIONS.map(el => (
                    <button className={classes.selection} key={el.id} onClick={() => gamePlay(el.id)}
                            data-selection={el.name}>
                        {el.emoji}
                    </button>
                ))}
            </div>
            <div className={classes.results}>
                <div>
                    You
                    <span className={classes.resultScore}>: {playerScore}</span>
                </div>
                <div>
                    Computer
                    <span className={classes.resultScore}>: {aiScore}</span>
                </div>
                <div className="result-selection winner">{playerSelection?.emoji}</div>
                <div className="result-selection">{aiSelection?.emoji}</div>
            </div>
        </div>
    );
}

export default RockPepperScissors;