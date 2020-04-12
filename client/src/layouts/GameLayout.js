import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { GameNavbar } from 'components';
import './GameLayout.css';

const GameLayout = (props) => {

    return (
        <div className="gamelayout vh-100">
            <header>
                <GameNavbar />
            </header>
            <main className="h-100">
                {props.children}
            </main>
        </div>
    );

}
export default GameLayout;