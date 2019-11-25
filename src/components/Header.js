import React, { useRef,Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Power1,Bounce, TweenMax, TimelineMax } from 'gsap'
import '../App.css'
import gsap from 'gsap'
const yoyo=new TimelineMax({}).yoyo

gsap.registerPlugin(Power1)

export default class App extends Component {
    constructor(props) {
        super(props)
        this.tl = new TimelineMax({})
   


    }

    componentDidMount() {
        this.tl = TweenMax.from(this.cloud1, 1, { x: 200, ease: Bounce.easeOut })
        TweenMax.from(this.cloud2, 1, { x: 200, ease: Power1.easeOut })
        TweenMax.from(this.shadowofballon, 1, {yoyo: true, y: 15, ease: Power1.easeOut,repeat: (Infinity) })
        TweenMax.from(this.rectofballon, 1, {yoyo: true, y: 15, ease: Power1.easeOut,repeat: (Infinity) })
        TweenMax.from(this.ballonshadow, 1, { yoyo: true,y: 15, ease: Power1.easeOut,repeat: (Infinity) })
        TweenMax.from(this.sun, 1, { x: -200, ease: Power1.easeOut })
        TweenMax.from(this.balloncenter, 1, { yoyo: true,y: 15, ease: Power1.easeOut,repeat: (Infinity) })
        TweenMax.from(this.ballonstring2, 1, { yoyo: true,y: 15, ease: Power1.easeOut,repeat: (Infinity) ,yoyo: true})
        TweenMax.from(this.ballonstring1, 1, { y: 15, ease: Power1.easeOut,repeat: (Infinity),yoyo: true })
        

    }

    render() {
        const Loader=()=>{
            const ballon = useRef(null);
            const cloud1 =useRef(null);
            const cloud2 =useRef(null);
            const shadowofballon =useRef(null);
            const rectofballon =useRef(null);
            const ballonshadow =useRef(null);
            const sun =useRef(null);
            const balloncenter =useRef(null);
            const ballonstring2 =useRef(null);
            const ballonstring1 = useRef(null);
        }
        return (
            <div>
                <div className= 'container-fluid'>
                <nav className='nav 
                justify-content-end'>
                    <li className='nav-item' >
                        About Me
                    </li>
                    <li className='nav-item' >
                        My Work
                    </li>
                    <li className='nav-item' >
                        Resume
                    </li>
                  
                </nav>
                </div>
                <svg className='sky' viewBox="0 0 1366 833"> <defs></defs><title>newestheader</title><g id="Layer_2" data-name="Layer 2"><g id="bgsky"><path ref={path => this.sky = path} class="cls-1" d="M1366,0V581.51c0,78.62-48.58,142.35-108.5,142.35-45.89,0-85.13-37.39-101-90.21-1.32.07-2.66.1-4,.1-21.41,0-41.36-8.13-58.18-22.17C1080.81,670,1039.44,712.5,990.5,712.5c-51.26,0-94.22-46.64-105.56-109.34-18.88,41.87-53.66,70-93.44,70-24,0-46.14-10.21-64.09-27.49C712.18,700.12,672.3,739,625.5,739c-53.66,0-98.22-51.1-106.94-118.23-19.7,35.84-51.81,59.17-88.06,59.17-39.48,0-74-27.67-93-69-17,14.46-37.23,22.85-59,22.85-29.25,0-55.8-15.19-75.31-39.88-16.63,50.63-55,86.07-99.69,86.07-48.24,0-89.13-41.31-103.23-98.43-.1-.37-.19-.73-.27-1.1V0Z" /><ellipse ref={ellipse => this.sun = ellipse} class="cls-2" cx="170" cy="158.45" rx="127" ry="108.39" /></g><g ref={g => this.ballon = g} id="BALLON"><line ref={line => this.ballonstring1 = line} class="cls-3" x1="512" y1="435.84" x2="512" y2="491.31" /><line ref={line => this.ballonstring2 = line} class="cls-3" x1="472" y1="435.84" x2="472" y2="491.31" /><path ref={path => this.balloncenter = path} class="cls-4" d="M625,259.17c0-62.7-59.55-113.52-133-113.52S359,196.47,359,259.17c0,22.57,7.72,43.6,21,61.28l55.46,82,13.71,20.27c19,28.11,66.58,28.11,85.6,0l13.71-20.27,55.46-82C617.28,302.77,625,281.74,625,259.17Z" /><path ref={path => this.ballonshadow = path} class="cls-5" d="M502,442.93c-19.65,3.41-41.37-3.33-52.8-20.22l-13.71-20.27-55.46-82c-13.31-17.68-21-38.71-21-61.28,0-62.69,59.55-113.52,133-113.52,3.36,0,6.7.11,10,.32-68.78,4.37-123,53.38-123,113.2,0,22.57,7.72,43.6,21,61.28l55.46,82,13.71,20.27C476.79,433.93,488.94,440.68,502,442.93Z" /><rect ref={rect => this.rectofballon = rect} class="cls-6" x="450.5" y="479.79" width="83" height="61.88" rx="19.52" /><path ref={path => this.shadowofballon = path} class="cls-7" d="M480,541.67H470c-10.78,0-19.52-9.57-19.52-21.38V501.17c0-11.81,8.74-21.38,19.52-21.38h10c-10.78,0-19.52,9.57-19.52,21.38v19.12C460.5,532.1,469.24,541.67,480,541.67Z" /></g><g ref={path => this.cloud1 = path} id="CLOUD1"><path class="cls-8" d="M1252.57,147.74c0-.3,0-.59,0-.89,0-22.89-21.74-41.44-48.56-41.44a55.25,55.25,0,0,0-21.93,4.47c-10.33-18.52-32.45-31.32-58.08-31.32-35.51,0-64.29,24.56-64.29,54.86a47.53,47.53,0,0,0,3.46,17.79c-11.47,5.65-19.19,16.22-19.19,28.33h0c0,18.05,17.15,32.68,38.3,32.68h161.4c21.15,0,38.3-14.63,38.3-32.68h0C1282,164.09,1269.44,151.15,1252.57,147.74Z" /></g><g id="CLOUD2"><path ref={path => this.cloud2 = path} class="cls-8" d="M924.64,177.8c0-.37,0-.73,0-1.1,0-28.27-26.85-51.19-60-51.19a68.29,68.29,0,0,0-27.1,5.52c-12.75-22.87-40.08-38.69-71.75-38.69-43.85,0-79.41,30.34-79.41,67.78a58.87,58.87,0,0,0,4.27,22c-14.16,7-23.7,20-23.7,35h0c0,22.3,21.18,40.38,47.31,40.38H913.69c26.13,0,47.31-18.08,47.31-40.38h0C961,198,945.49,182,924.64,177.8Z" /></g><g id="SUN"><text class="cls-9" transform="translate(403.96 243.06)"><tspan class="cls-10">I</tspan><tspan class="cls-11" x="10.87" y="0">’</tspan><tspan x="18.68" y="0">m</tspan><tspan x="0" y="55.76">Shami</tspan><tspan class="cls-12" x="120.72" y="55.76">r</tspan><tspan class="cls-13" x="135.68" y="55.76">a,</tspan></text><text class="cls-14" transform="translate(1072.66 162.72)"><tspan class="cls-15">D</tspan><tspan x="25.2" y="0">e</tspan><tspan class="cls-16" x="44.05" y="0">v</tspan><tspan x="61.76" y="0">eloper</tspan></text><text class="cls-9" transform="translate(714 202.06)"><tspan class="cls-17">F</tspan><tspan x="21" y="0">ull </tspan><tspan class="cls-18" x="78.39" y="0">S</tspan><tspan x="101.15" y="0">tack</tspan></text><text class="cls-9" transform="translate(106.24 162.64)">Hello!</text></g></g></svg>
            </div >
        )
    }}


