'use client';
import { Txt, Btn, Inpt, Cb, Rd, Swtch, Lnk, Slct, Accrdn } from './components/atoms';
import './style.css';
import { HiCheck } from "react-icons/hi2";

export default function Home() {
  return (
    <div className="all">
      <div className="el-1">
        <Txt txt='h1'>Header1</Txt>
        <Txt txt='h2'>Header2</Txt>
        <Txt txt='h3'>Header3</Txt>
        <Txt txt='p'>Paragraph</Txt>
        <Txt txt='sm'>Small</Txt>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Buttons</Txt>
        <Btn stl='fill'>
          Button<HiCheck />
        </Btn>
        <Btn stl='fill' disabled>
          Button<HiCheck />
        </Btn>
        <Btn stl='stroke'>
          Button<HiCheck />
        </Btn>
        <Btn stl='stroke' disabled>
          Button<HiCheck />
        </Btn>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Inputs</Txt>
        <div className='el-2'>
          <div className="el-3">
            <Txt txt='h2'>Text</Txt>
            <Inpt icon={<HiCheck />} stl='fill'>
              Input
            </Inpt>
            <Inpt icon={<HiCheck />} stl='fill' disabled>
              Input
            </Inpt>
            <Inpt icon={<HiCheck />} stl='stroke'>
              Input
            </Inpt>
            <Inpt icon={<HiCheck />} stl='stroke' disabled>
              Input
            </Inpt>
          </div>
          <div className="el-3">
            <Txt txt='h2'>Checkbox</Txt>
            <Cb stl='fill' id='cb1'/>
            <Cb stl='fill' id='cb2' disabled/>
            <Cb stl='stroke' id='cb3'/>
            <Cb stl='stroke' id='cb4' disabled/>
          </div>
          <div className="el-3">
            <Txt txt='h2'>Radio</Txt>
            <Rd stl='fill' id='rd1' name='test'/>
            <Rd stl='fill' id='rd2' disabled/>
            <Rd stl='stroke' id='rd3' name='test'/>
            <Rd stl='stroke' id='rd4' disabled/>
          </div>
          <div className="el-3">
            <Txt txt='h2'>Switch</Txt>
            <Swtch stl='fill' id='swtch1' name='test2'/>
            <Swtch stl='fill' id='swtch2' disabled/>
            <Swtch stl='stroke' id='swtch3' name='test2'/>
            <Swtch stl='stroke' id='swtch4' disabled/>
          </div>
        </div>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Link</Txt>
        <Lnk href='#' txt='h3' clr='white'>
          Link<HiCheck />
        </Lnk>
        <Lnk href='#' txt='h3' clr='black'>
          Link<HiCheck />
        </Lnk>
        <Lnk href='#' txt='h3' clr='grey'> 
          Link<HiCheck />
        </Lnk>
        <Lnk href='#' txt='h3' clr='grey2'>
          Link<HiCheck />
        </Lnk>
        <Lnk href='#' txt='h3' clr='accent'>
          Link<HiCheck />
        </Lnk>
        <Lnk href='#' txt='h3' disabled>
          Link<HiCheck />
        </Lnk>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Select</Txt>
        <Slct stl='fill' name='Select' id='slct1'>
          Item1;Item2;Item3
        </Slct>
        <Slct stl='fill' name='Select' id='slct2' disabled>
          Item1;Item2;Item3
        </Slct>
        <Slct stl='stroke' name='Select' id='slct3'>
          Item1;Item2;Item3
        </Slct>
        <Slct stl='stroke' name='Select' id='slct4' disabled>
          Item1;Item2;Item3
        </Slct>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Accordion</Txt>
        <Accrdn stl='fill' name='Accordion' id='accr1'>
          Some text for the accordion to test it
        </Accrdn>
        <Accrdn stl='fill' name='Accordion' id='accr2' disabled>
          Some text for the accordion to test it
        </Accrdn>
        <Accrdn stl='stroke' name='Accordion' id='accr3'>
          Some text for the accordion to test it
        </Accrdn>
        <Accrdn stl='stroke' name='Accordion' id='accr4' disabled>
          Some text for the accordion to test it
        </Accrdn>
      </div>
    </div>
  );
}