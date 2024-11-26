'use client';
import { AlertManager, AlertsEventHandler } from 'react-alert-system';
import { Inpt, Slct, Accrdn, Txt, Btn, Cb, Rd, Swtch, Lnk, Crd, Alrt } from './components/atoms';
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
        <Btn stl='bg'>
          Button<HiCheck />
        </Btn>
        <Btn stl='bg' disabled>
          Button<HiCheck />
        </Btn>
        <Btn stl='ol'>
          Button<HiCheck />
        </Btn>
        <Btn stl='ol' disabled>
          Button<HiCheck />
        </Btn>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Inputs</Txt>
        <div className='el-2'>
          <div className="el-3">
            <Txt txt='h2'>Text</Txt>
            <Inpt icon={<HiCheck />} stl='bg'>
              Input
            </Inpt>
            <Inpt icon={<HiCheck />} stl='bg' disabled>
              Input
            </Inpt>
            <Inpt icon={<HiCheck />} stl='ol'>
              Input
            </Inpt>
            <Inpt icon={<HiCheck />} stl='ol' disabled>
              Input
            </Inpt>
          </div>
          <div className="el-3">
            <Txt txt='h2'>Checkbox</Txt>
            <Cb stl='bg' id='cb1'/>
            <Cb stl='bg' id='cb2' disabled/>
            <Cb stl='ol' id='cb3'/>
            <Cb stl='ol' id='cb4' disabled/>
          </div>
          <div className="el-3">
            <Txt txt='h2'>Radio</Txt>
            <Rd stl='bg' id='rd1' name='test'/>
            <Rd stl='bg' id='rd2' disabled/>
            <Rd stl='ol' id='rd3' name='test'/>
            <Rd stl='ol' id='rd4' disabled/>
          </div>
          <div className="el-3">
            <Txt txt='h2'>Switch</Txt>
            <Swtch stl='bg' id='swtch1' name='test2'/>
            <Swtch stl='bg' id='swtch2' disabled/>
            <Swtch stl='ol' id='swtch3' name='test2'/>
            <Swtch stl='ol' id='swtch4' disabled/>
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
        <Slct stl='bg' name='Select' id='slct1'>
          Item1;Item2;Item3
        </Slct>
        <Slct stl='bg' name='Select' id='slct2' disabled>
          Item1;Item2;Item3
        </Slct>
        <Slct stl='ol' name='Select' id='slct3'>
          Item1;Item2;Item3
        </Slct>
        <Slct stl='ol' name='Select' id='slct4' disabled>
          Item1;Item2;Item3
        </Slct>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Accordion</Txt>
        <Accrdn stl='bg' name='Accordion' id='accr1'>
          Some text for the accordion to test it
        </Accrdn>
        <Accrdn stl='bg' name='Accordion' id='accr2' disabled>
          Some text for the accordion to test it
        </Accrdn>
        <Accrdn stl='ol' name='Accordion' id='accr3'>
          Some text for the accordion to test it
        </Accrdn>
        <Accrdn stl='ol' name='Accordion' id='accr4' disabled>
          Some text for the accordion to test it
        </Accrdn>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Alert</Txt>
        <AlertManager
          portalId="alerts"
          AlertComponent={Alrt}
        />
        <Btn stl='bg' 
        onClick={() => {
          AlertsEventHandler.add({
            id: "alrt-0",
            preventDuplicated: false,
            duration: 10000,
            payload: {
              children: [<Txt txt='h3'><HiCheck/>Test alert message</Txt>],
              stl: 'bg',
            }
          })
        }}>
          Click to show alert
        </Btn>
        <Btn stl='ol' 
        onClick={() => {
          AlertsEventHandler.add({
            id: "alrt-0",
            preventDuplicated: false,
            duration: 10000,
            payload: {
              children: [<Txt txt='h3'><HiCheck/>Test alert message</Txt>],
              stl: 'ol',
            }
          })
        }}>
          Click to show alert
        </Btn>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Card</Txt>
        <Crd stl='bg'>
          <Txt txt='h2'>Card header</Txt>
          <Txt txt='p'>ui-Shit</Txt>
        </Crd>
        <Crd stl='ol'>
          <Txt txt='h2'>Card header</Txt>
          <Txt txt='p'>ui-Shit</Txt>
        </Crd>
      </div>
      <div id="alerts"></div>
    </div>
  );
}