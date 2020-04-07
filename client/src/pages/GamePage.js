import React from 'react';
import GameLayout from '../layouts/GameLayout';
import GameMap from '../components/GameMap';

const GamePage = (props) => {

    return (
        <GameLayout>
            <GameMap />
        </GameLayout>
    );
}

export default GamePage;
