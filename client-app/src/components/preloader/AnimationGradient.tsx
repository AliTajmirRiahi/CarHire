import React from 'react';

interface IProps {
  height: number;
}

const AnimationGradient: React.FC<IProps> = ({ height }) => {
  return <div className='art-animateGrad' style={{ height: height }}></div>;
};

export default AnimationGradient;
