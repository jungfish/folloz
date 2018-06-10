import React, { Component } from 'react';

import PrevNext from '../components/PrevNext/index';
import heart from '../heart.svg';
import './style.css';

export default class Share extends Component {
    render() {
        return (
            <div className="Panel">
                <div className="Header">
                    <img src="//cdn.shopify.com/s/files/1/2378/9469/files/Atelier_unes_1_-_black_-_big_x60.png?v=1511190463"
                         alt="share" />
                </div>
                <div className="Action">
                    <img src={heart} className="heart" alt="logo" />
                    <div>Share your love</div>
                </div>
                <p className="Description main">
                    <i>
                        L'hémorragie de tes désirs s'est éclipsée sous l'azur bleu dérisoire
                        Du temps qui se passe Contre duquel on ne peut rien
                        [Refrain]:
                        Mais tu dis (Mais tu dis)
                        Que le bonheur est irréductible
                    </i>
                </p>
                <p className="Description secondary">
                    <i>Que le bonheur est irréductible</i>
                </p>
                <div className="Buttons">
                    {/* here goes the share buttons */}
                </div>
                <PrevNext pathname="share" />
            </div>
        )
    }
}
