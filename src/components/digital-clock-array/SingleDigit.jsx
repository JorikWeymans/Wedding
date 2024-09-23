import React from 'react';
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.css";

export default class SingleDigit extends React.Component
{
    constructor(props)
    {
        super(props);
        this._tickRef = React.createRef();
        this.max = 9;
        this.isAnimating = false;
        this.animationFrame = 0;
        this.animationLoops = 0;
        this.updateAnimationFrame = this.updateAnimationFrame.bind(this);
        this.lastUpdateTime = null;
    }

    componentDidMount()
    {
        this.lastUpdateTime = Date.now();
        this._tickInstance = Tick.DOM.create(this._tickRef.current, {
            value: this.props.value
        });
        this.isAnimating = this.props.wantIntroAnimation;

        this.initialTimeout = setTimeout(() =>
        {
            this.isAnimating && this.updateAnimationFrame();
        }, this.props.animationDelay);
    }

    componentWillUnmount()
    {
        if (this._tickInstance) {
            Tick.DOM.destroy(this._tickRef.current);
            cancelAnimationFrame(this.animationFrameRequest);
            clearTimeout(this.initialTimeout);
        }
    }

    componentDidUpdate()
    {
        if (!this._tickInstance) return;


    }


    updateAnimationFrame()
    {
        // Define the interval in milliseconds (e.g., 1000ms = 1s, 2000ms = 2s, 10000ms = 10s)
        const updateInterval = this.props.updateInterval || 10
        // Get the current time
        const now = Date.now();

        // Check if enough time has passed since the last update
        if (now - this.lastUpdateTime >= updateInterval) {
            if (this.isAnimating) {
                // Update the tick instance value
                this._tickInstance.value = this.animationFrame;

                if (this.animationLoops > 2) {
                    this.isAnimating = this._tickInstance.value !== this.props.value;
                }

                this.animationFrame += 1;
                if (this.animationFrame > 9) {
                    this.animationLoops += 1;
                    this.animationFrame = 0;
                }

                this._tickInstance.value = this.animationFrame;

                // Schedule the next animation frame
                this.animationFrameRequest = requestAnimationFrame(() => this.updateAnimationFrame());
            } else {
                // Handle non-animating state
                const clampedMax = this.props.max !== undefined ?
                    this.props.max % 10 : // ensuring max is only one digit
                    this.max;

                if (this.props.value <= clampedMax) {
                    this._tickInstance.value = this.props.value;
                } else {
                    this._tickInstance.value = clampedMax;
                }

                // Stop the animation frame loop when animation is not running
                cancelAnimationFrame(this.animationFrameRequest);
            }

            // Update the last update time
            this.lastUpdateTime = now;
        } else {
            // Schedule the next animation frame to keep checking
            this.animationFrameRequest = requestAnimationFrame(() => this.updateAnimationFrame());
        }
    }




    render()
    {
        return (
            <div ref={this._tickRef} className="text-[8em] overflow-hidden  w-[99px]
                                                max-xl:text-[7em] max-xl:w-[85px]
                                                max-lg:text-[6em] max-lg:w-[75px]
                                                max-md:text-[8em] max-md:w-auto">
                <div data-repeat="true" aria-hidden="true">
                    <span data-view="flip">Tick</span>
                </div>
            </div>
        );
    }
}
