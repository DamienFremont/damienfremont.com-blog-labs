import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import GameNavbar from '../components/GameNavbar';
import './GameLayout.css';

const GameLayout = (props) => {

    return (
        <div className="gamelayout vh-100">
            <header>
                <GameNavbar />
            </header>
            <main>
                {props.children}
            </main>
        </div>
    );

}
export default GameLayout;