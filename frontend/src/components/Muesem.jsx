import React from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineBackground() {
  return (
    <div className="relative w-screen h-screen">
      <Spline scene="https://my.spline.design/themuseum-18f89401a9ab8247b46e8db4e4136968/" />
    </div>
  );
}
