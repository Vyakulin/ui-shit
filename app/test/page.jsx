'use client';
import { AlertManager, AlertsEventHandler } from 'react-alert-system';
import { Inpt, Slct, Accrdn, Txt, Btn, Cb, Rd, Swtch, Lnk, Crd, Alrt } from '../components/atoms';
import './style.css';
import { HiCheck } from "react-icons/hi2";

export default function Page() {
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
              <Crd color='b'>
                <Inpt icon={<HiCheck />} bg='bg' color='w'>
                  Input
                </Inpt>
                <Inpt icon={<HiCheck />} bg='bg' color='w2'>
                  Input
                </Inpt>
                <Inpt icon={<HiCheck />} bg='ol' color='w'>
                  Input
                </Inpt>
                <Inpt icon={<HiCheck />} bg='ol' color='w2'>
                  Input
                </Inpt>
              </Crd>
              <Crd color='w'>
                <Inpt icon={<HiCheck />} bg='bg' color='b'>
                  Input
                </Inpt>
                <Inpt icon={<HiCheck />} bg='bg' color='b2'>
                  Input
                </Inpt>
                <Inpt icon={<HiCheck />} bg='ol' color='b'>
                  Input
                </Inpt>
                <Inpt icon={<HiCheck />} bg='ol' color='b2'>
                  Input
                </Inpt>
              </Crd>
            </div>
          </div>
          <div className="el-3">
            <Txt txt='h2'>Checkbox</Txt>
            <div className='el-3-2'>
              <Crd color='b'>
                <Cb bg='bg' color='w' />
                <Cb bg='bg' color='w2' />
                <Cb bg='ol' color='w' />
                <Cb bg='ol' color='w2' />
              </Crd>
              <Crd color='w'>
                <Cb bg='bg' color='b' />
                <Cb bg='bg' color='b2' />
                <Cb bg='ol' color='b' />
                <Cb bg='ol' color='b2' />
              </Crd>
            </div>
          </div>
          <div className="el-3">
            <Txt txt='h2'>Radio</Txt>
            <div className='el-3-2'>
              <Crd color='b'>
                <Rd bg='bg' color='w' name='radio'/>
                <Rd bg='bg' color='w2' name='radio'/>
                <Rd bg='ol' color='w' name='radio'/>
                <Rd bg='ol' color='w2' name='radio'/>
              </Crd>
              <Crd color='w'>
                <Rd bg='bg' color='b' name='radio'/>
                <Rd bg='bg' color='b2' name='radio'/>
                <Rd bg='ol' color='b' name='radio'/>
                <Rd bg='ol' color='b2' name='radio'/>
              </Crd>
            </div>
          </div>
          <div className="el-3">
            <Txt txt='h2'>Switch</Txt>
            <div className='el-3-2'>
              <Crd color='b'>
                <Swtch bg='bg' color='w'/>
                <Swtch bg='bg' color='w2'/>
                <Swtch bg='ol' color='w'/>
                <Swtch bg='ol' color='w2'/>
              </Crd>
              <Crd color='w'>
                <Swtch bg='bg' color='b'/>
                <Swtch bg='bg' color='b2'/>
                <Swtch bg='ol' color='b'/>
                <Swtch bg='ol' color='b2'/>
              </Crd>
            </div>
          </div>
        </div>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Buttons</Txt>
        <div className='el-3-2'>
          <Crd color='b'>
            <Btn bg='bg' color='w'>
              Button<HiCheck />
            </Btn>
            <Btn bg='bg' color='w2'>
              Button<HiCheck />
            </Btn>
            <Btn bg='bg' color='w3'>
              Button<HiCheck />
            </Btn>
            <Btn bg='bg' color='a'>
              Button<HiCheck />
            </Btn>
            <Btn bg='ol' color='w'>
              Button<HiCheck />
            </Btn>
            <Btn bg='ol' color='w2'>
              Button<HiCheck />
            </Btn>
            <Btn bg='ol' color='w3'>
              Button<HiCheck />
            </Btn>
            <Btn bg='ol' color='a'>
              Button<HiCheck />
            </Btn>            
          </Crd>
          <Crd color='w'>
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
          </Crd>
        </div>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Link</Txt>
        <div className='el-3-2'>
          <Crd color='b'>
            <Lnk href='#' txt='h3' color='w'>
              Link<HiCheck />
            </Lnk>
            <Lnk href='#' txt='h3' color='w2'>
              Link<HiCheck />
            </Lnk>
            <Lnk href='#' txt='h3' color='w3'>
              Link<HiCheck />
            </Lnk>
            <Lnk href='#' txt='h3' color='a'>
              Link<HiCheck />
            </Lnk>
          </Crd>
          <Crd color='w'>
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
          </Crd>
        </div>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Select</Txt>
        <div className='el-3-2'>
          <Crd color='b'>
            <Slct bg='bg' color='w' name='Select' >
              Item1;Item2;Item3
            </Slct>
            <Slct bg='bg' color='w2' name='Select' >
              Item1;Item2;Item3
            </Slct>
            <Slct bg='bg' color='w3' name='Select' >
              Item1;Item2;Item3
            </Slct>
            <Slct bg='bg' color='a' name='Select' >
              Item1;Item2;Item3
            </Slct>
            <Slct bg='ol' color='w' name='Select' >
              Item1;Item2;Item3
            </Slct>
            <Slct bg='ol' color='w2' name='Select' >
              Item1;Item2;Item3
            </Slct>
            <Slct bg='ol' color='w3' name='Select' >
              Item1;Item2;Item3
            </Slct>
            <Slct bg='ol' color='a' name='Select' >
              Item1;Item2;Item3
            </Slct>
          </Crd>
          <Crd color='w'>
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
          </Crd>
        </div>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Accordion</Txt>
        <div className='el-3-2'>
          <Crd color='b'>
            <Accrdn bg='bg' color='w' name='Accordion'>
              Some text for the accordion to test it
            </Accrdn>
            <Accrdn bg='bg' color='w2' name='Accordion'>
              Some text for the accordion to test it
            </Accrdn>
            <Accrdn bg='bg' color='w3' name='Accordion'>
              Some text for the accordion to test it
            </Accrdn>
            <Accrdn bg='bg' color='a' name='Accordion'>
              Some text for the accordion to test it
            </Accrdn>
            <Accrdn bg='ol' color='w' name='Accordion'>
              Some text for the accordion to test it
            </Accrdn>
            <Accrdn bg='ol' color='w2' name='Accordion'>
              Some text for the accordion to test it
            </Accrdn>
            <Accrdn bg='ol' color='w3' name='Accordion'>
              Some text for the accordion to test it
            </Accrdn>
            <Accrdn bg='ol' color='a' name='Accordion'>
              Some text for the accordion to test it
            </Accrdn>
          </Crd>
          <Crd color = 'w'>
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
          </Crd>
        </div>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Alert</Txt>
        <AlertManager
          portalId="alerts"
          AlertComponent={Alrt}
        />
        <div className='el-3-2'>
          <Crd color='b'>
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
          </Crd>
          <Crd color='w'>
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
          </Crd>
        </div>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Breadcrumb</Txt>
        <Lnk clr='white' txt='h3' href='/docs/breadcrumb/example'>Example here</Lnk>
      </div>
    </div>
  );
}