import React, { Component } from 'react';

import heart from '../heart.svg';
import email from '../email.svg';
import './style.css';

export default class Follow extends Component {

    render() {
        return (
            <div className="Panel">
                <div className="Header">
                    <img src="//cdn.shopify.com/s/files/1/2378/9469/files/Atelier_unes_1_-_black_-_big_x60.png?v=1511190463"
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
              data-text="custom share text"
              data-url="http://bit.ly/Prendre-son-envol"
              data-hashtags="example,demo"
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
      <a href="mailto:Eryka.Adams@Clickdimensions.com?bcc=julie.patrick@clickdimensions.com&subject=RSVP%20for%20New%20Year's%20Eve%20Party%20&body=Hi%20Bob,%0d%0dI%20would%20like%20to%20RSVP%20to%20your%20party%20invitation.%20Here%20are%20my%20details:%0d%0dName:%20Eryka%20Adams%0dNumber%20of%20Guest:%0d" rel="EMAIL">
      <img src={email} className="email" alt="logo" />
      </a>
    )
}
