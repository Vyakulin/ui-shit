'use client';
import { useState, useRef } from "react";
import clsx from "clsx";
import { HiCheck, HiChevronDown, HiXMark } from "react-icons/hi2";
import Link from "next/link";
import { useOnClickOutside } from 'usehooks-ts';

export function Inpt(p) {
  let txt = p.txt;
  let tp = p.tp;
  txt ? null : txt = 'h3';
  tp ? null : tp = 'text';

  let [isValid, setIsValid] = useState(false);
  const change = event => {
    event.target.value == '' ? setIsValid(false) : setIsValid(true);
  }

  return (
    <div className={`${txt} ${p.className} ${clsx({
      ['inpt-valid']: isValid,
      [`inpt-${p.stl}-disabled`]: p.disabled,
      [`inpt-${p.stl}`]: !p.disabled,
    })}`}
    {...p}>
      <span>{p.children}</span>
      {p.icon}
      <input className={txt} name={p.name} type={tp} onChange={change} />
    </div>
  )
}

export function Slct(p) {
  let txt = p.txt;
  txt ? null : txt = 'h3';

  let [isOpen, setIsOpen] = useState(false);
  function changeOpen() {
    setIsOpen(!isOpen);
  }

  let [name, setName] = useState(p.name);
  const changeName = event => {
    setName(event.target.innerHTML);
  }

  const ref = useRef(null);
  const handleClickOutside = () => {
    setIsOpen(false)
  }
  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className={`${p.className}
    ${clsx({
      [`slct-${p.stl}-disabled`]: p.disabled,
      [`slct-${p.stl}`]: !p.disabled,
      [`slct-open`]: isOpen,
    })}`}
      ref={ref} {...p}>
      <div className={`slct-name ${txt}`} onClick={changeOpen}>
        <span>{name}</span>
        <HiChevronDown />
      </div>
      <ul>
        {p.children.split(';').map((item) => <li onClick={changeName} className="p" id={item} key={item}>
          {item}
        </li>)}
      </ul>
    </div>
  )
}

export function Accrdn(p) {
  let txt = p.txt;
  txt ? null : txt = 'h3';

  let [isOpen, setIsOpen] = useState(false);
  function changeOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`${p.className}
    ${clsx({
      [`accr-${p.stl}-disabled`]: p.disabled,
      [`accr-${p.stl}`]: !p.disabled,
      [`accr-open`]: isOpen,
    })}`}
    {...p}>
      <div className={`accr-name ${txt}`} onClick={changeOpen}>
        <span>{p.name}</span>
        <HiChevronDown />
      </div>
      <p className="p">{p.children}</p>
    </div>
  )
}

export function Txt(p) {
  return (
    <div className={`${p.txt} ${p.className}`} {...p}>
      {p.children}
    </div>
  )
}

export function Lnk(p) {
  return (
    <Link className={`${p.txt} ${p.className}
    ${clsx({
      [`lnk-disabled`]: p.disabled,
      [`lnk-${p.clr}`]: !p.disabled,
    })}`}
    {...p}>
      {p.children}
    </Link>
  )
}

export function Btn(p) {
  let txt = p.txt;
  txt ? null : txt = 'h3';

  return (
    <div className={`${txt} ${p.className}
    ${clsx({
      [`btn-${p.stl}-disabled`]: p.disabled,
      [`btn-${p.stl}`]: !p.disabled,
    })}`}
    {...p}>
      {p.children}
    </div>
  )
}

export function Cb(p) {
  let ch = p.children;
  ch ? null : ch = <HiCheck />;

  return (
    <label htmlFor={p.id} className={`${p.className}
    ${clsx({
      [`cb-${p.stl}-disabled`]: p.disabled,
      [`cb-${p.stl}`]: !p.disabled,
    })}`} >
      {ch}
      <input type="checkbox" id={p.id} {...p} />
    </label>
  )
}

export function Rd(p) {
  return (
    <label htmlFor={p.id} className={`${p.className}
    ${clsx({
      [`rd-${p.stl}-disabled`]: p.disabled,
      [`rd-${p.stl}`]: !p.disabled,
    })}`} >
      <input type="radio" id={p.id} {...p}/>
    </label>
  )
}

export function Swtch(p) {
  let tp = p.tp;
  tp ? null : tp = 'checkbox';

  return (
    <label htmlFor={p.id} className={`${p.className}
    ${clsx({
      [`swtch-${p.stl}-disabled`]: p.disabled,
      [`swtch-${p.stl}`]: !p.disabled,
    })}`} >
      <span></span>
      <input type={tp} {...p} />
    </label>
  )
}

export function Crd(p) {
  return (
    <div className={`crd-${p.stl} ${p.className}`} {...p}>
      {p.children}
    </div>
  )
}

export function Alrt(p) {
  let clr;
  switch (p.payload.stl) {
    case 'bg':
      clr = 'grey2';
      break;

    case 'ol':
      clr = 'grey';
      break;
  }

  let [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`${p.payload.className} ${
      clsx({
        [`alrt-${p.payload.stl}`]: isOpen,
        [`alrt-disabled`]: !isOpen,
      })
    }`} {...p.payload}>
      {p.payload.children}
      <HiXMark className={`x-mark h2 lnk-${clr}`} onClick={() => setIsOpen(false)}/>
    </div>
  )
}