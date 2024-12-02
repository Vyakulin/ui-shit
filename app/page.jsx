'use client';
import { Fragment } from 'react';
import { Txt, Cr } from './components/atoms';
import './style.css';

export default function Home() {
  return (
    <Fragment>
      <div className="naming">
        <Txt txt='h1'>Next.js UI library</Txt>
        <Txt txt='sm'>Made by Femni</Txt>
      </div>
      <div className="features">
        <Txt txt='h2'>It's</Txt>
        <div className="main">
          <Cr color='w' id='adaptive'>
            <Txt txt='h3'>Adaptive</Txt>
            <div className="example"></div>
            <div className="example"></div>
            <div className="example"></div>
          </Cr>
          <Cr color='w' id='custom'>
            <Txt txt='h3'>Customizable</Txt>
            <div className="example">
              <div className="bg-w2"></div>
              <div className="bg-b"></div>
              <div className="bg-b2"></div>
              <div className="bg-a"></div>
              <div className="bg-a2"></div>
            </div>
            <div className="example">
              <div className="ol-w2"></div>
              <div className="ol-b"></div>
              <div className="ol-b2"></div>
              <div className="ol-a"></div>
              <div className="ol-a2"></div>
            </div>
          </Cr>
          <Cr color='w' id='expand'>
            <Txt txt='h3'>Expandable</Txt>
            <div className="example">
              <div id="sircle-1"></div>
              <div id="sircle-2"></div>
              <div id="sircle-3"></div>
              <div id="sircle-4"></div>
              <div id="sircle-5"></div>
            </div>
          </Cr>
          <Cr color='w' id='easy'>
            <Txt txt='h3'>Easy to use</Txt>
            <div className="example">
              <div className="star"></div>
            </div>
          </Cr>
          <Cr color='w' id='simple'>
            <Txt txt='h3'>Simple</Txt>
            <div className="example">
              <div className="romb"></div>
              <div className="square"></div>
            </div>
          </Cr>
        </div>
      </div>
    </Fragment>
  );
}