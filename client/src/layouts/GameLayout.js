import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import GameNavbar from '../components/GameNavbar';

const GameLayout = (props) => {

    return (
        <div>
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