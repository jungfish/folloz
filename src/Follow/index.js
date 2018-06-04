import React, { Component } from 'react';

import heart from '../heart.svg';
import email from '../email.svg';
import './style.css';

export default class Follow extends Component {

    render() {
        return (
            <div className="Panel">
                <div className="Header">
                    <img src="http://recommander.atelier-unes.com/atelier-unes-logo.png"
                         alt="follow"/>
                </div>
                <div className="page-wrapper">
                  <div className="Action">
                      <img src={heart} className="heart" alt="logo" />
                      <h1>Montre-nous ton soutien !</h1>
                  </div>
                  <h2 className="Description main">
                      <i>
                          Chaque soutien compte :
                          Cela montre à tes amis que tu approuves ce que nous faisons.
                          Cela permet aussi de voir que les gens nous font confiance !
                          Il n'y a pas de secret c'est uniquement grâce à ton aide que nous pouvons toucher d'autres personnes.
                      </i>
                  </h2>
                  <p className="Description secondary">
                      <i>Clique sur tous les boutons ci-dessous pour nous aider à promouvoir notre marque</i>
                  </p>
                  <div className="like">
                    <div className="Buttons">
                        <Facebook />
                        <span>+</span>
                        <Twitter />
                        <span>+</span>
                        <LinkedIn />
                    </div>
                  </div>
                  <div className="share">
                    <div className="Buttons">
                        <FacebookShare />
                        <span>+</span>
                        <TwitterShare />
                        <span>+</span>
                        <LinkedInShare />
                        <span>+</span>
                        <Gmail />
                    </div>
                  </div>
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

const FacebookShare = () => {
    return (
        <div
            className="fb-share-button"
            data-href="http://bit.ly/Prendre-son-envol"
            data-layout="button_count"
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

const TwitterShare = () => {
    return (
        <div>
            <a className="twitter-share-button"
              data-text="Mes amis d'Atelier Unes lancent une nouvelle marque de prêt-à-porter féminin, éco-friendly et collaborative toute belle ! 💃
                        Après 6 mois de travail, la collection Prendre son Envol se compose d'une Robe et d'une Blouse, disponible en précommande sur Ulule à prix réduits:
                        Je vous assure, ça vaut le coup d'oeil ;)"
              data-url="http://bit.ly/Prendre-son-envol"
              data-hashtags="mode,social,ethique,ulule"
               href="http://bit.ly/Prendre-son-envol"
               lang="fr">
               Tweet
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
                <script type="IN/FollowCompany" data-id="28138093" data-counter="right"></script>
            </div>
        );
    }

}
class LinkedInShare extends Component {

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
                <script type="IN/Share" data-url="http://bit.ly/Prendre-son-envol" data-id="777" data-counter="right"></script>
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

const Gmail = () => {
    return (
      <a href="mailto:violette@atelier-unes.com?&subject=Soutien%20Atelier%20Unes%20avec%20moi%20%F0%9F%92%96%20!
      &body=Mes%20amis%20d%27Atelier%20Unes%20lancent%20une%20nouvelle%20marque%20de%20pr%C3%AAt-%C3%A0-porter%20f%C3%A9minin%2C%20%C3%A9co-friendly%20et%20collaborative%20toute%20belle%20!%20%F0%9F%92%83%0A%0A%0AApr%C3%A8s%206%20mois%20de%20travail%2C%20la%20collection%20%22Prendre%20son%20Envol%22%20se%20compose%20d%27une%20Robe%20et%20d%27une%20Blouse%2C%20disponible%20en%20pr%C3%A9commande%20sur%20Ulule%20%C3%A0%20prix%20r%C3%A9duits%3A%20%0A%0Ahttp%3A%2F%2Fbit.ly%2Fprendre-son-envol-ulule%0A%0A%0AJe%20vous%20assure%2C%20%C3%A7a%20vaut%20le%20coup%20d%27oeil%20%3B)" rel="EMAIL">
      <img src={email} className="email" alt="logo" />
      </a>
    )
}
