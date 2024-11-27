'use client';
import { AlertManager, AlertsEventHandler } from 'react-alert-system';
import { Inpt, Slct, Accrdn, Txt, Btn, Cb, Rd, Swtch, Lnk, Crd, Alrt, Brdcrmb } from './components/atoms';
import './style.css';
import { HiCheck } from "react-icons/hi2";

export default function Home() {
  return (
    <div className='test'>
      <div className="el-1">
        <Txt txt='h1'>Header1</Txt>
        <Txt txt='h2'>Header2</Txt>
        <Txt txt='h3'>Header3</Txt>
        <Txt txt='p'>Paragraph</Txt>
        <Txt txt='sm'>Small</Txt>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Inputs</Txt>
        <div className='el-2'>
          <div className="el-3">
            <Txt txt='h2'>Text</Txt>
            <div className='el-3-2'>
              <div className='el-3'>
                <Inpt icon={<HiCheck />} bg='bg' color='w'>
                  Input
                </Inpt>
                <Inpt icon={<HiCheck />} bg='bg' color='w2'>
                  Input
                </Inpt>
                <Inpt icon={<HiCheck />} bg='bg' color='b'>
                  Input
                </Inpt>
                <Inpt icon={<HiCheck />} bg='bg' color='b2'>
                  Input
                </Inpt>
              </div>
              <div className='el-3'>
                <Inpt icon={<HiCheck />} bg='ol' color='w'>
                  Input
                </Inpt>
                <Inpt icon={<HiCheck />} bg='ol' color='w2'>
                  Input
                </Inpt>
                <Inpt icon={<HiCheck />} bg='ol' color='b'>
                  Input
                </Inpt>
                <Inpt icon={<HiCheck />} bg='ol' color='b2'>
                  Input
                </Inpt>
              </div>
            </div>
          </div>
          <div className="el-3">
            <Txt txt='h2'>Checkbox</Txt>
            <div className='el-3-2'>
              <div className='el-3'>
                <Cb bg='bg' color='w' />
                <Cb bg='bg' color='w2' />
                <Cb bg='bg' color='b' />
                <Cb bg='bg' color='b2' />
              </div>
              <div className='el-3'>
                <Cb bg='ol' color='w' />
                <Cb bg='ol' color='w2' />
                <Cb bg='ol' color='b' />
                <Cb bg='ol' color='b2' />
              </div>
            </div>
          </div>
          <div className="el-3">
            <Txt txt='h2'>Radio</Txt>
            <div className='el-3-2'>
              <div className='el-3'>
                <Rd bg='bg' color='w' name='radio'/>
                <Rd bg='bg' color='w2' name='radio'/>
                <Rd bg='bg' color='b' name='radio'/>
                <Rd bg='bg' color='b2' name='radio'/>
              </div>
              <div className='el-3'>
                <Rd bg='ol' color='w' name='radio'/>
                <Rd bg='ol' color='w2' name='radio'/>
                <Rd bg='ol' color='b' name='radio'/>
                <Rd bg='ol' color='b2' name='radio'/>
              </div>
            </div>
          </div>
          <div className="el-3">
            <Txt txt='h2'>Switch</Txt>
            <div className='el-3-2'>
              <div className='el-3'>
                <Swtch bg='bg' color='w'/>
                <Swtch bg='bg' color='w2'/>
                <Swtch bg='bg' color='b'/>
                <Swtch bg='bg' color='b2'/>
              </div>
              <div className='el-3'>
                <Swtch bg='ol' color='w'/>
                <Swtch bg='ol' color='w2'/>
                <Swtch bg='ol' color='b'/>
                <Swtch bg='ol' color='b2'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Buttons</Txt>
        <div className='el-3-2'>
          <div className='el-3'>
            <Btn bg='bg' color='w'>
              Button<HiCheck />
            </Btn>
            <Btn bg='bg' color='w2'>
              Button<HiCheck />
            </Btn>
            <Btn bg='bg' color='w3'>
              Button<HiCheck />
            </Btn>
            <Btn bg='bg' color='b'>
              Button<HiCheck />
            </Btn>
            <Btn bg='bg' color='b2'>
              Button<HiCheck />
            </Btn>
            <Btn bg='bg' color='b3'>
              Button<HiCheck />
            </Btn>
            <Btn bg='bg' color='a'>
              Button<HiCheck />
            </Btn>
          </div>
          <div className='el-3'>
            <Btn bg='ol' color='w'>
              Button<HiCheck />
            </Btn>
            <Btn bg='ol' color='w2'>
              Button<HiCheck />
            </Btn>
            <Btn bg='ol' color='w3'>
              Button<HiCheck />
            </Btn>
            <Btn bg='ol' color='b'>
              Button<HiCheck />
            </Btn>
            <Btn bg='ol' color='b2'>
              Button<HiCheck />
            </Btn>
            <Btn bg='ol' color='b3'>
              Button<HiCheck />
            </Btn>
            <Btn bg='ol' color='a'>
              Button<HiCheck />
            </Btn>
          </div>
        </div>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Link</Txt>
        <Lnk href='#' txt='h3' color='w'>
          Link<HiCheck />
        </Lnk>
        <Lnk href='#' txt='h3' color='w2'>
          Link<HiCheck />
        </Lnk>
        <Lnk href='#' txt='h3' color='w3'>
          Link<HiCheck />
        </Lnk>
        <Lnk href='#' txt='h3' color='b'>
          Link<HiCheck />
        </Lnk>
        <Lnk href='#' txt='h3' color='b2'>
          Link<HiCheck />
        </Lnk>
        <Lnk href='#' txt='h3' color='b3'>
          Link<HiCheck />
        </Lnk>
        <Lnk href='#' txt='h3' color='a'>
          Link<HiCheck />
        </Lnk>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Select</Txt>
        <div className='el-3-2'>
          <div className='el-3'>
            <Slct bg='bg' color='w' name='Select' >
              Item1;Item2;Item3
            </Slct>
            <Slct bg='bg' color='w2' name='Select' >
              Item1;Item2;Item3
            </Slct>
            <Slct bg='bg' color='w3' name='Select' >
              Item1;Item2;Item3
            </Slct>
            <Slct bg='bg' color='b' name='Select' >
              Item1;Item2;Item3
            </Slct>
            <Slct bg='bg' color='b2' name='Select' >
              Item1;Item2;Item3
            </Slct>
            <Slct bg='bg' color='b3' name='Select' >
              Item1;Item2;Item3
            </Slct>
            <Slct bg='bg' color='a' name='Select' >
              Item1;Item2;Item3
            </Slct>
          </div>
          <div className='el-3'>
            <Slct bg='ol' color='w' name='Select' >
              Item1;Item2;Item3
            </Slct>
            <Slct bg='ol' color='w2' name='Select' >
              Item1;Item2;Item3
            </Slct>
            <Slct bg='ol' color='w3' name='Select' >
              Item1;Item2;Item3
            </Slct>
            <Slct bg='ol' color='b' name='Select' >
              Item1;Item2;Item3
            </Slct>
            <Slct bg='ol' color='b2' name='Select' >
              Item1;Item2;Item3
            </Slct>
            <Slct bg='ol' color='b3' name='Select' >
              Item1;Item2;Item3
            </Slct>
            <Slct bg='ol' color='a' name='Select' >
              Item1;Item2;Item3
            </Slct>
          </div>
        </div>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Accordion</Txt>
        <div className='el-3-2'>
          <div className='el-3'>
            <Accrdn bg='bg' color='w' name='Accordion'>
              Some text for the accordion to test it
            </Accrdn>
            <Accrdn bg='bg' color='w2' name='Accordion'>
              Some text for the accordion to test it
            </Accrdn>
            <Accrdn bg='bg' color='w3' name='Accordion'>
              Some text for the accordion to test it
            </Accrdn>
            <Accrdn bg='bg' color='b' name='Accordion'>
              Some text for the accordion to test it
            </Accrdn>
            <Accrdn bg='bg' color='b2' name='Accordion'>
              Some text for the accordion to test it
            </Accrdn>
            <Accrdn bg='bg' color='b3' name='Accordion'>
              Some text for the accordion to test it
            </Accrdn>
            <Accrdn bg='bg' color='a' name='Accordion'>
              Some text for the accordion to test it
            </Accrdn>
          </div>
          <div className='el-3'>
            <Accrdn bg='ol' color='w' name='Accordion'>
              Some text for the accordion to test it
            </Accrdn>
            <Accrdn bg='ol' color='w2' name='Accordion'>
              Some text for the accordion to test it
            </Accrdn>
            <Accrdn bg='ol' color='w3' name='Accordion'>
              Some text for the accordion to test it
            </Accrdn>
            <Accrdn bg='ol' color='b' name='Accordion'>
              Some text for the accordion to test it
            </Accrdn>
            <Accrdn bg='ol' color='b2' name='Accordion'>
              Some text for the accordion to test it
            </Accrdn>
            <Accrdn bg='ol' color='b3' name='Accordion'>
              Some text for the accordion to test it
            </Accrdn>
            <Accrdn bg='ol' color='a' name='Accordion'>
              Some text for the accordion to test it
            </Accrdn>
          </div>
        </div>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Alert</Txt>
        <AlertManager
          portalId="alerts"
          AlertComponent={Alrt}
        />
        <div className='el-3-2'>
          <div className='el-3'>
            <Btn bg='bg' color='w' onClick={() => {
            AlertsEventHandler.add({
              id: "alrt-0",
              preventDuplicated: false,
              duration: 1234567890,
              payload: {
                children: [<Txt txt='h3'><HiCheck />Test alert message</Txt>],
                bg: 'bg',
                color: 'w'
              }
            })
          }}>
              Show alert
            </Btn>
            <Btn bg='bg' color='w2' onClick={() => {
            AlertsEventHandler.add({
              id: "alrt-0",
              preventDuplicated: false,
              duration: 1234567890,
              payload: {
                children: [<Txt txt='h3'><HiCheck />Test alert message</Txt>],
                bg: 'bg',
                color: 'w2'
              }
            })
          }}>
              Show alert
            </Btn>
            <Btn bg='bg' color='w3' onClick={() => {
            AlertsEventHandler.add({
              id: "alrt-0",
              preventDuplicated: false,
              duration: 1234567890,
              payload: {
                children: [<Txt txt='h3'><HiCheck />Test alert message</Txt>],
                bg: 'bg',
                color: 'w3'
              }
            })
          }}>
              Show alert
            </Btn>
            <Btn bg='bg' color='b' onClick={() => {
            AlertsEventHandler.add({
              id: "alrt-0",
              preventDuplicated: false,
              duration: 1234567890,
              payload: {
                children: [<Txt txt='h3'><HiCheck />Test alert message</Txt>],
                bg: 'bg',
                color: 'b'
              }
            })
          }}>
              Show alert
            </Btn>
            <Btn bg='bg' color='b2' onClick={() => {
            AlertsEventHandler.add({
              id: "alrt-0",
              preventDuplicated: false,
              duration: 1234567890,
              payload: {
                children: [<Txt txt='h3'><HiCheck />Test alert message</Txt>],
                bg: 'bg',
                color: 'b2'
              }
            })
          }}>
              Show alert
            </Btn>
            <Btn bg='bg' color='b3' onClick={() => {
            AlertsEventHandler.add({
              id: "alrt-0",
              preventDuplicated: false,
              duration: 1234567890,
              payload: {
                children: [<Txt txt='h3'><HiCheck />Test alert message</Txt>],
                bg: 'bg',
                color: 'b3'
              }
            })
          }}>
              Show alert
            </Btn>
            <Btn bg='bg' color='a' onClick={() => {
            AlertsEventHandler.add({
              id: "alrt-0",
              preventDuplicated: false,
              duration: 1234567890,
              payload: {
                children: [<Txt txt='h3'><HiCheck />Test alert message</Txt>],
                bg: 'bg',
                color: 'a'
              }
            })
          }}>
              Show alert
            </Btn>
          </div>
          <div className='el-3'>
            <Btn bg='ol' color='w' onClick={() => {
            AlertsEventHandler.add({
              id: "alrt-0",
              preventDuplicated: false,
              duration: 1234567890,
              payload: {
                children: [<Txt txt='h3'><HiCheck />Test alert message</Txt>],
                bg: 'ol',
                color: 'w'
              }
            })
          }}>
              Show alert
            </Btn>
            <Btn bg='ol' color='w2' onClick={() => {
            AlertsEventHandler.add({
              id: "alrt-0",
              preventDuplicated: false,
              duration: 1234567890,
              payload: {
                children: [<Txt txt='h3'><HiCheck />Test alert message</Txt>],
                bg: 'ol',
                color: 'w2'
              }
            })
          }}>
              Show alert
            </Btn>
            <Btn bg='ol' color='w3' onClick={() => {
            AlertsEventHandler.add({
              id: "alrt-0",
              preventDuplicated: false,
              duration: 1234567890,
              payload: {
                children: [<Txt txt='h3'><HiCheck />Test alert message</Txt>],
                bg: 'ol',
                color: 'w3'
              }
            })
          }}>
              Show alert
            </Btn>
            <Btn bg='ol' color='b' onClick={() => {
            AlertsEventHandler.add({
              id: "alrt-0",
              preventDuplicated: false,
              duration: 1234567890,
              payload: {
                children: [<Txt txt='h3'><HiCheck />Test alert message</Txt>],
                bg: 'ol',
                color: 'b'
              }
            })
          }}>
              Show alert
            </Btn>
            <Btn bg='ol' color='b2' onClick={() => {
            AlertsEventHandler.add({
              id: "alrt-0",
              preventDuplicated: false,
              duration: 1234567890,
              payload: {
                children: [<Txt txt='h3'><HiCheck />Test alert message</Txt>],
                bg: 'ol',
                color: 'b2'
              }
            })
          }}>
              Show alert
            </Btn>
            <Btn bg='ol' color='b3' onClick={() => {
            AlertsEventHandler.add({
              id: "alrt-0",
              preventDuplicated: false,
              duration: 1234567890,
              payload: {
                children: [<Txt txt='h3'><HiCheck />Test alert message</Txt>],
                bg: 'ol',
                color: 'b3'
              }
            })
          }}>
              Show alert
            </Btn>
            <Btn bg='ol' color='a' onClick={() => {
            AlertsEventHandler.add({
              id: "alrt-0",
              preventDuplicated: false,
              duration: 1234567890,
              payload: {
                children: [<Txt txt='h3'><HiCheck />Test alert message</Txt>],
                bg: 'ol',
                color: 'a'
              }
            })
          }}>
              Show alert
            </Btn>
          </div>
        </div>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Card</Txt>
        <div className='el-3-2'>
          <div className='el-3'>
            <Crd bg='bg' color='w'>
              <Txt txt='h2'>Card header</Txt>
              <Txt txt='p'>ui-Shit</Txt>
            </Crd>
            <Crd bg='bg' color='w2'>
              <Txt txt='h2'>Card header</Txt>
              <Txt txt='p'>ui-Shit</Txt>
            </Crd>
            <Crd bg='bg' color='b'>
              <Txt txt='h2'>Card header</Txt>
              <Txt txt='p'>ui-Shit</Txt>
            </Crd>
            <Crd bg='bg' color='b2'>
              <Txt txt='h2'>Card header</Txt>
              <Txt txt='p'>ui-Shit</Txt>
            </Crd>
            <Crd bg='bg' color='a'>
              <Txt txt='h2'>Card header</Txt>
              <Txt txt='p'>ui-Shit</Txt>
            </Crd>
          </div>
          <div className='el-3'>
            <Crd bg='ol' color='w'>
              <Txt txt='h2'>Card header</Txt>
              <Txt txt='p'>ui-Shit</Txt>
            </Crd>
            <Crd bg='ol' color='w2'>
              <Txt txt='h2'>Card header</Txt>
              <Txt txt='p'>ui-Shit</Txt>
            </Crd>
            <Crd bg='ol' color='b'>
              <Txt txt='h2'>Card header</Txt>
              <Txt txt='p'>ui-Shit</Txt>
            </Crd>
            <Crd bg='ol' color='b2'>
              <Txt txt='h2'>Card header</Txt>
              <Txt txt='p'>ui-Shit</Txt>
            </Crd>
            <Crd bg='ol' color='a'>
              <Txt txt='h2'>Card header</Txt>
              <Txt txt='p'>ui-Shit</Txt>
            </Crd>
          </div>
        </div>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Breadcrumb</Txt>
        <Lnk clr='white' txt='h3' href='/docs/breadcrumb/example'>Example here</Lnk>
      </div>
    </div>
  );
}