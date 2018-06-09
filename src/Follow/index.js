import React, { Component } from 'react';
import { connect } from 'react-redux';

import PrevNext from '../components/PrevNext/index';
import heart from '../heart.svg';
import './style.css';

export default class Follow extends Component {

    render() {
        return (
            <div className="Follow">
                <div className="Header">
                    <img src="//cdn.shopify.com/s/files/1/2378/9469/files/Atelier_unes_1_-_black_-_big_x120.png?v=1511190463" />
                </div>
                <div className="Action">
                    <img src={heart} className="heart" alt="logo" />
                    <div>Show your love</div>
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
                    <Facebook />
                    <Twitter />
                    <LinkedIn />
                    <Pinterest />
                </div>
            </div>
        );
    }
}

const Facebook = () => {
    return (
        <div
            className="fb-like"
            data-href="https://www.facebook.com/atelier.unes"
            data-layout="button_count"
            data-action="like"
            data-show-faces="true"
        />
    );
};

const Twitter = () => {
    return (
        <div>
            <a className="twitter-follow-button"
               href="https://twitter.com/atelier_unes"
               lang="fr">
               Follow @TwitterDev
            </a>
        </div>
    )
}

class LinkedIn extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount () {
        const firstScript = document.createElement("script");
        firstScript.src = "https:///platform.linkedin.com/in.js";
        firstScript.async = true;
        firstScript.append('lang: fr_FR');
        this.myRef.current.appendChild(firstScript);
    }

    render() {
        return (
            <div ref={this.myRef}>
                <script type="IN/FollowCompany" data-id="777" data-counter="right"></script>
            </div>
        );
    }

}

const Pinterest = () => {
    return (
        <a href="https://www.pinterest.com/atelier_unes/"
           data-pin-do="buttonFollow">
           Suivre
        </a>
    )
}
