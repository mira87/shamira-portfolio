import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bounce, TweenMax, TimelineMax } from 'gsap'
import '../App.css'

export class Footer extends Component {
    constructor(props) {
        super(props)
        this.tl = new TimelineMax({})
        this.car1 = null;
        this.tire1 = null;
        this.tire2 = null;
        this.carpart1 = null

        this.car2 = null;
        this.tire3 = null;
        this.tire4 = null;
        this.carpart2 = null

        this.car3 = null;
        this.tire5 = null;
        this.tire6 = null;
        this.carpart3 = null

    }

    componentDidMount() {
        this.tl = TweenMax.to(this.car1, 15, { x: 2500, ease: Bounce.easeOut, repeat: (Infinity) })
        TweenMax.to(this.tire1, 15, { x: 2500, ease: Bounce.easeOut, repeat: (Infinity) })
        TweenMax.to(this.tire2, 15, { x: 2500, ease: Bounce.easeOut, repeat: (Infinity) })
        TweenMax.to(this.carpart1, 15, { x: 2500, ease: Bounce.easeOut, repeat: (Infinity) })

        TweenMax.to(this.car2, 15, { x: -2500, ease: Bounce.easeOut, repeat: (Infinity) })
        TweenMax.to(this.tire3, 15, { x: -2500, ease: Bounce.easeOut, repeat: (Infinity) })
        TweenMax.to(this.tire4, 15, { x: -2500, ease: Bounce.easeOut, repeat: (Infinity) })
        TweenMax.to(this.carpart2, 15, { x: -2500, ease: Bounce.easeOut, repeat: (Infinity) })

        TweenMax.to(this.car3, 15, { x: -2500, ease: Bounce.easeOut, repeat: (Infinity) })
        TweenMax.to(this.tire5, 15, { x: -2500, ease: Bounce.easeOut, repeat: (Infinity) })
        TweenMax.to(this.tire6, 15, { x: -2500, ease: Bounce.easeOut, repeat: (Infinity) })
        TweenMax.to(this.carpart3, 15, { x: -2500, ease: Bounce.easeOut, repeat: (Infinity) })
    }

    render() {





        return (
            <div>
                <svg viewBox="0 0 1366 613"><defs></defs><title>Asset 6</title><g id="Layer_2" data-name="Layer 2"><g id="GROUND"><rect class="foot-1" y="302" width="1366" height="105" /><rect class="foot-2" y="407" width="1366" height="87" /><rect class="foot-1" y="494" width="1366" height="119" /><rect class="foot-3" x="50" y="447" width="112" height="18" /><rect class="foot-3" x="284" y="447" width="112" height="18" /><rect class="foot-3" x="518" y="447" width="112" height="18" /><rect class="foot-3" x="752" y="447" width="112" height="18" /><rect class="foot-3" x="986" y="447" width="112" height="18" /><rect class="foot-3" x="1220" y="447" width="112" height="18" /><rect class="foot-2" y="80" width="134" height="222" /><rect class="foot-2" x="1144" y="80" width="222" height="222" /><rect class="foot-2" x="134" y="132" width="170" height="170" /><rect class="foot-2" x="976" y="132" width="170" height="170" /><rect class="foot-2" x="296" y="80" width="170" height="222" /><rect class="foot-2" x="466" width="170" height="302" /><rect class="foot-2" x="636" y="40" width="170" height="262" /><rect class="foot-2" x="806" width="170" height="302" /></g><g id="car1"><path ref={path => this.car1 = path} class="foot-3" d="M259,419H65a97.06,97.06,0,0,1,125-92.89V370h55.73A96.6,96.6,0,0,1,259,419Z" /><circle ref={circle => this.tire1 = circle} class="foot-4" cx="106" cy="416" r="19" /><circle ref={circle => this.tire2 = circle} class="foot-4" cx="207" cy="416" r="19" /><path ref={path => this.carpart1 = path} class="foot-3" d="M191,327.46A95.83,95.83,0,0,1,244,369H191V327.46m-1-1.35V370h55.73A97.24,97.24,0,0,0,190,326.11Z" /></g><g id="car2"><path ref={path => this.car2 = path} class="foot-5" d="M285,469H479a97.06,97.06,0,0,0-125-92.89V420H298.27A96.6,96.6,0,0,0,285,469Z" /><circle ref={circle => this.tire3 = circle} class="foot-4" cx="438" cy="466" r="19" /><circle ref={circle => this.tire4 = circle} class="foot-4" cx="337" cy="466" r="19" /><path ref={path => this.carpart2 = path} class="foot-5" d="M353,377.46V419H300a95.83,95.83,0,0,1,53-41.54m1-1.35A97.24,97.24,0,0,0,298.27,420H354V376.11Z" /></g><g id="car3"><path ref={path => this.car3 = path} class="foot-6" d="M914,468h194a97.06,97.06,0,0,0-125-92.89V419H927.27A96.6,96.6,0,0,0,914,468Z" /><circle ref={circle => this.tire5 = circle} class="foot-4" cx="1067" cy="465" r="19" /><circle ref={circle => this.tire6 = circle} class="foot-4" cx="966" cy="465" r="19" /><path ref={path => this.carpart3 = path} class="foot-6" d="M982,376.46V418H929a95.83,95.83,0,0,1,53-41.54m1-1.35A97.24,97.24,0,0,0,927.27,419H983V375.11Z" /></g></g></svg>
            </div>
        )
    }
}

export default Footer
