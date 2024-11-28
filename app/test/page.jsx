'use client';
import { AlertManager, AlertsEventHandler } from 'react-alert-system';
import { In, Sl, Ac, Txt, Bt, Cb, Rd, Sw, Ln, Cr, Al } from '../components/atoms';
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
        <div className='el-3-2'>
          <div className="el-3">
            <Txt txt='h2'>Text</Txt>
            <div className='el-3-2'>
              <Cr color='b'>
                <In icon={<HiCheck />} bg='bg' color='w'>
                  Input
                </In>
                <In icon={<HiCheck />} bg='bg' color='w2'>
                  Input
                </In>
                <In icon={<HiCheck />} bg='ol' color='w'>
                  Input
                </In>
                <In icon={<HiCheck />} bg='ol' color='w2'>
                  Input
                </In>
              </Cr>
              <Cr color='w'>
                <In icon={<HiCheck />} bg='bg' color='b'>
                  Input
                </In>
                <In icon={<HiCheck />} bg='bg' color='b2'>
                  Input
                </In>
                <In icon={<HiCheck />} bg='ol' color='b'>
                  Input
                </In>
                <In icon={<HiCheck />} bg='ol' color='b2'>
                  Input
                </In>
              </Cr>
            </div>
          </div>
          <div className="el-3">
            <Txt txt='h2'>Checkbox</Txt>
            <div className='el-3-2'>
              <Cr color='b'>
                <Cb bg='bg' color='w' />
                <Cb bg='bg' color='w2' />
                <Cb bg='ol' color='w' />
                <Cb bg='ol' color='w2' />
              </Cr>
              <Cr color='w'>
                <Cb bg='bg' color='b' />
                <Cb bg='bg' color='b2' />
                <Cb bg='ol' color='b' />
                <Cb bg='ol' color='b2' />
              </Cr>
            </div>
          </div>
          <div className="el-3">
            <Txt txt='h2'>Radio</Txt>
            <div className='el-3-2'>
              <Cr color='b'>
                <Rd bg='bg' color='w' name='radio'/>
                <Rd bg='bg' color='w2' name='radio'/>
                <Rd bg='ol' color='w' name='radio'/>
                <Rd bg='ol' color='w2' name='radio'/>
              </Cr>
              <Cr color='w'>
                <Rd bg='bg' color='b' name='radio'/>
                <Rd bg='bg' color='b2' name='radio'/>
                <Rd bg='ol' color='b' name='radio'/>
                <Rd bg='ol' color='b2' name='radio'/>
              </Cr>
            </div>
          </div>
          <div className="el-3">
            <Txt txt='h2'>Switch</Txt>
            <div className='el-3-2'>
              <Cr color='b'>
                <Sw bg='bg' color='w'/>
                <Sw bg='bg' color='w2'/>
                <Sw bg='ol' color='w'/>
                <Sw bg='ol' color='w2'/>
              </Cr>
              <Cr color='w'>
                <Sw bg='bg' color='b'/>
                <Sw bg='bg' color='b2'/>
                <Sw bg='ol' color='b'/>
                <Sw bg='ol' color='b2'/>
              </Cr>
            </div>
          </div>
        </div>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Link</Txt>
        <div className='el-3-2'>
          <Cr color='b'>
            <Ln href='#' txt='h3' color='w'>
              Link<HiCheck />
            </Ln>
            <Ln href='#' txt='h3' color='w2'>
              Link<HiCheck />
            </Ln>
            <Ln href='#' txt='h3' color='w3'>
              Link<HiCheck />
            </Ln>
            <Ln href='#' txt='h3' color='a'>
              Link<HiCheck />
            </Ln>
          </Cr>
          <Cr color='w'>
            <Ln href='#' txt='h3' color='b'>
              Link<HiCheck />
            </Ln>
            <Ln href='#' txt='h3' color='b2'>
              Link<HiCheck />
            </Ln>
            <Ln href='#' txt='h3' color='b3'>
              Link<HiCheck />
            </Ln>
            <Ln href='#' txt='h3' color='a'>
              Link<HiCheck />
            </Ln>
          </Cr>
        </div>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Buttons</Txt>
        <div className='el-3-2'>
          <Cr color='b'>
            <Bt bg='bg' color='w'>
              Button<HiCheck />
            </Bt>
            <Bt bg='bg' color='w2'>
              Button<HiCheck />
            </Bt>
            <Bt bg='bg' color='w3'>
              Button<HiCheck />
            </Bt>
            <Bt bg='bg' color='a'>
              Button<HiCheck />
            </Bt>
            <Bt bg='ol' color='w'>
              Button<HiCheck />
            </Bt>
            <Bt bg='ol' color='w2'>
              Button<HiCheck />
            </Bt>
            <Bt bg='ol' color='w3'>
              Button<HiCheck />
            </Bt>
            <Bt bg='ol' color='a'>
              Button<HiCheck />
            </Bt>            
          </Cr>
          <Cr color='w'>
            <Bt bg='bg' color='b'>
              Button<HiCheck />
            </Bt>
            <Bt bg='bg' color='b2'>
              Button<HiCheck />
            </Bt>
            <Bt bg='bg' color='b3'>
              Button<HiCheck />
            </Bt>
            <Bt bg='bg' color='a'>
              Button<HiCheck />
            </Bt>
            <Bt bg='ol' color='b'>
              Button<HiCheck />
            </Bt>
            <Bt bg='ol' color='b2'>
              Button<HiCheck />
            </Bt>
            <Bt bg='ol' color='b3'>
              Button<HiCheck />
            </Bt>
            <Bt bg='ol' color='a'>
              Button<HiCheck />
            </Bt>
          </Cr>
        </div>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Select</Txt>
        <div className='el-3-2'>
          <Cr color='b'>
            <Sl bg='bg' color='w' name='Select' >
              Item1;Item2;Item3
            </Sl>
            <Sl bg='bg' color='w2' name='Select' >
              Item1;Item2;Item3
            </Sl>
            <Sl bg='bg' color='w3' name='Select' >
              Item1;Item2;Item3
            </Sl>
            <Sl bg='bg' color='a' name='Select' >
              Item1;Item2;Item3
            </Sl>
            <Sl bg='ol' color='w' name='Select' >
              Item1;Item2;Item3
            </Sl>
            <Sl bg='ol' color='w2' name='Select' >
              Item1;Item2;Item3
            </Sl>
            <Sl bg='ol' color='w3' name='Select' >
              Item1;Item2;Item3
            </Sl>
            <Sl bg='ol' color='a' name='Select' >
              Item1;Item2;Item3
            </Sl>
          </Cr>
          <Cr color='w'>
            <Sl bg='bg' color='b' name='Select' >
              Item1;Item2;Item3
            </Sl>
            <Sl bg='bg' color='b2' name='Select' >
              Item1;Item2;Item3
            </Sl>
            <Sl bg='bg' color='b3' name='Select' >
              Item1;Item2;Item3
            </Sl>
            <Sl bg='bg' color='a' name='Select' >
              Item1;Item2;Item3
            </Sl>
            <Sl bg='ol' color='b' name='Select' >
              Item1;Item2;Item3
            </Sl>
            <Sl bg='ol' color='b2' name='Select' >
              Item1;Item2;Item3
            </Sl>
            <Sl bg='ol' color='b3' name='Select' >
              Item1;Item2;Item3
            </Sl>
            <Sl bg='ol' color='a' name='Select' >
              Item1;Item2;Item3
            </Sl>
          </Cr>
        </div>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Accordion</Txt>
        <div className='el-3-2'>
          <Cr color='b'>
            <Ac bg='bg' color='w' name='Accordion'>
              Some text for the accordion to test it
            </Ac>
            <Ac bg='bg' color='w2' name='Accordion'>
              Some text for the accordion to test it
            </Ac>
            <Ac bg='bg' color='w3' name='Accordion'>
              Some text for the accordion to test it
            </Ac>
            <Ac bg='bg' color='a' name='Accordion'>
              Some text for the accordion to test it
            </Ac>
            <Ac bg='ol' color='w' name='Accordion'>
              Some text for the accordion to test it
            </Ac>
            <Ac bg='ol' color='w2' name='Accordion'>
              Some text for the accordion to test it
            </Ac>
            <Ac bg='ol' color='w3' name='Accordion'>
              Some text for the accordion to test it
            </Ac>
            <Ac bg='ol' color='a' name='Accordion'>
              Some text for the accordion to test it
            </Ac>
          </Cr>
          <Cr color = 'w'>
            <Ac bg='bg' color='b' name='Accordion'>
              Some text for the accordion to test it
            </Ac>
            <Ac bg='bg' color='b2' name='Accordion'>
              Some text for the accordion to test it
            </Ac>
            <Ac bg='bg' color='b3' name='Accordion'>
              Some text for the accordion to test it
            </Ac>
            <Ac bg='bg' color='a' name='Accordion'>
              Some text for the accordion to test it
            </Ac>
            <Ac bg='ol' color='b' name='Accordion'>
              Some text for the accordion to test it
            </Ac>
            <Ac bg='ol' color='b2' name='Accordion'>
              Some text for the accordion to test it
            </Ac>
            <Ac bg='ol' color='b3' name='Accordion'>
              Some text for the accordion to test it
            </Ac>
            <Ac bg='ol' color='a' name='Accordion'>
              Some text for the accordion to test it
            </Ac>
          </Cr>
        </div>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Alert</Txt>
        <AlertManager
          portalId="alerts"
          AlertComponent={Al}
        />
        <div className='el-3-2'>
          <Cr color='b'>
            <Bt bg='bg' color='w' onClick={() => {
            AlertsEventHandler.add({
              id: "Al-0",
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
            </Bt>
            <Bt bg='bg' color='w2' onClick={() => {
            AlertsEventHandler.add({
              id: "Al-0",
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
            </Bt>
            <Bt bg='bg' color='w3' onClick={() => {
            AlertsEventHandler.add({
              id: "Al-0",
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
            </Bt>
            <Bt bg='bg' color='a' onClick={() => {
            AlertsEventHandler.add({
              id: "Al-0",
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
            </Bt>
            <Bt bg='ol' color='w' onClick={() => {
            AlertsEventHandler.add({
              id: "Al-0",
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
            </Bt>
            <Bt bg='ol' color='w2' onClick={() => {
            AlertsEventHandler.add({
              id: "Al-0",
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
            </Bt>
            <Bt bg='ol' color='w3' onClick={() => {
            AlertsEventHandler.add({
              id: "Al-0",
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
            </Bt>
            <Bt bg='ol' color='a' onClick={() => {
            AlertsEventHandler.add({
              id: "Al-0",
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
            </Bt>
          </Cr>
          <Cr color='w'>
            <Bt bg='bg' color='b' onClick={() => {
            AlertsEventHandler.add({
              id: "Al-0",
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
            </Bt>
            <Bt bg='bg' color='b2' onClick={() => {
            AlertsEventHandler.add({
              id: "Al-0",
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
            </Bt>
            <Bt bg='bg' color='b3' onClick={() => {
            AlertsEventHandler.add({
              id: "Al-0",
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
            </Bt>
            <Bt bg='bg' color='a' onClick={() => {
            AlertsEventHandler.add({
              id: "Al-0",
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
            </Bt>
            <Bt bg='ol' color='b' onClick={() => {
            AlertsEventHandler.add({
              id: "Al-0",
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
            </Bt>
            <Bt bg='ol' color='b2' onClick={() => {
            AlertsEventHandler.add({
              id: "Al-0",
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
            </Bt>
            <Bt bg='ol' color='b3' onClick={() => {
            AlertsEventHandler.add({
              id: "Al-0",
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
            </Bt>
            <Bt bg='ol' color='a' onClick={() => {
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
            </Bt>
          </Cr>
        </div>
      </div>
      <div className="el-1">
        <Txt txt='h1'>Breadcrumb</Txt>
        <Ln clr='white' txt='h3' href='/docs/breadcrumb/example'>Example here</Ln>
      </div>
    </div>
  );
}