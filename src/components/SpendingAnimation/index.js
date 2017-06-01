import React from 'react'
import normalizeColor from '../../lib/normalizeColor'
import Interpolation from '../../lib/Interpolation'
import Easing from '../../lib/Easing'

const a1Interpolation = Interpolation.create({
  inputRange: [0, 1],
  outputRange: [0, 1]
});

const a1RotationInterpolation = Interpolation.create({
  inputRange: [0, 0.25],
  outputRange: [-13, 0],
  easing: Easing.inOut(Easing.cubic),
  extrapolate: 'clamp'
});

const a1RadiusInterpolation = Interpolation.create({
  inputRange: [0, 0.25],
  outputRange: [0, 5],
  easing: Easing.inOut(Easing.cubic),
  extrapolate: 'clamp'
});

const a1OpacityInterpolation = Interpolation.create({
  inputRange: [0, 0.25],
  outputRange: [1, 0],
  // easing: Easing.inOut(Easing.cubic),
  extrapolate: 'clamp'
});

const a1WidthInterpolation = Interpolation.create({
  inputRange: [0.1, 0.3],
  outputRange: [166, 10],
  easing: Easing.inOut(Easing.cubic),
  extrapolate: 'clamp'
});

const a1CoordInterpolations = [
  {x1: 22, y1: 50, x2: -30, y2: -60},
  {x1: 22, y1: 70, x2: 180, y2: 230},
  {x1: 22, y1: 90, x2: -90, y2: 30},
  {x1: 22, y1: 110, x2: 10, y2: 280}
].map((dot, index, array) => {
  return {
    x: Interpolation.create({
      inputRange: [0.1, 0.3].map(v => v + 0.05 * index),
      outputRange: [dot.x1, dot.x2],
      easing: Easing.inOut(Easing.cubic),
      extrapolate: 'clamp'
    }),
    y: Interpolation.create({
      inputRange: [0.1, 0.3].map(v => v + 0.05 * index),
      outputRange: [dot.y1, dot.y2],
      easing: Easing.inOut(Easing.cubic),
      extrapolate: 'clamp'
    })
  };
});

function coords(progress) {
  return a1CoordInterpolations.map((dot) => ({
    x: dot.x(progress),
    y: dot.y(progress)
  }));
}

export default class SpendingAnimation extends React.Component {
  state = {
    progress: 0
  }

  render() {
    const progress1 = a1Interpolation(this.state.progress);
    const a1 = {
      rotation: a1RotationInterpolation(progress1),
      radius: a1RadiusInterpolation(progress1),
      opacity: a1OpacityInterpolation(progress1),
      width1: a1WidthInterpolation(progress1),
      width2: a1WidthInterpolation(progress1 - 0.05),
      width3: a1WidthInterpolation(progress1 - 0.10),
      width4: a1WidthInterpolation(progress1 - 0.15),
      coords: coords(progress1)
    };

    return (
      <div style={{position: 'fixed'}}>
        <div style={{position: 'absolute', zIndex: -1}}>
          <svg
            width="500"
            height="500"
            style={{outline: '1px solid red'}}
          >
            <g transform={`translate(150 100) rotate(${a1.rotation} 105 148.5)`}>
              <g opacity={a1.opacity}>
                <rect
                  fill="#39d9d9"
                  width="210"
                  height="297"
                />
                <text
                  letterSpacing="1.2"
                  fill="#fff"
                  fontFamily="monospace"
                  fontSize="12"
                  x="22"
                  y="30"
                >
                  TRANSACTIONS
                </text>
              </g>
              <g fill="#242430">
                <rect
                  width={a1.width1}
                  height="10"
                  x={a1.coords[0].x}
                  y={a1.coords[0].y}
                  rx={a1.radius}
                />
                <rect
                  width={a1.width2}
                  height="10"
                  x={a1.coords[1].x}
                  y={a1.coords[1].y}
                  rx={a1.radius}
                />
                <rect
                  width={a1.width3}
                  height="10"
                  x={a1.coords[2].x}
                  y={a1.coords[2].y}
                  rx={a1.radius}
                />
                <rect
                  width={a1.width4}
                  height="10"
                  x={a1.coords[3].x}
                  y={a1.coords[3].y}
                  rx={a1.radius}
                />
              </g>
            </g>
          </svg>
          <input
            max="1"
            min="0"
            onChange={this.handleChange}
            step="0.001"
            style={{display: 'block', width: '400px'}}
            type="range"
            value={this.state.progress}
          />
          <div>
            <div>Input: <code>{this.state.progress}</code></div>
            <div>Output: <code>{progress1}</code></div>
          </div>
        </div>
      </div>
    )
  }

  handleChange = (event) => {
    if (event.target.value !== this.state.progress)
      this.setState({progress: Number(event.target.value)});
  }
}
