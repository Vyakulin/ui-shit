'use client';
import { useState, useRef, Fragment } from "react";
import clsx from "clsx";
import { HiCheck, HiChevronDown, HiXMark } from "react-icons/hi2";
import Link from "next/link";
import { useOnClickOutside } from 'usehooks-ts';
import { usePathname } from "next/navigation";

function defaults(p) {
  let txt = p.txt;
  txt ? null : txt = 'h3';

  let style = p.bg;
  style ? null : style = 'bg';

  let color = p.color;
  color ? null : color = 'w';

  return [txt, style, color];
}

export function Txt(p) {
  let [txt, style, color] = defaults(p);

  return (
    <div className={clsx({
      [`${txt}`]: true,
    })} {...p}>
      {p.children}
    </div>
  )
}

export function Ln(p) {
  let [txt, style, color] = defaults(p);

  return (
    <Link className={clsx({
      [`l-${color} ${txt}`]: true,
    })}
    {...p}>
      {p.children}
    </Link>
  )
}

export function Bt(p) {
  let [txt, style, color] = defaults(p);

  return (
    <div className={clsx({
      [`bt ${style}-${color} ${txt}`]: true,
    })}
    {...p}>
      {p.children}
    </div>
  )
}

export function In(p) {
  let [txt, style, color] = defaults(p);

  let [isValid, setIsValid] = useState(false);
  const change = event => {
    event.target.value == '' ? setIsValid(false) : setIsValid(true);
  }

  return (
    <div className={clsx({
      [`in-${style}-${color} ${txt}`]: true,
      [`in-valid`]: isValid,
    })}
    {...p}>
      <span>{p.children}</span>
      {p.icon}
      <input type={p.type} onChange={change} name={p.name}/>
    </div>
  )
}

export function Cb(p) {
  let [txt, style, color] = defaults(p);

  let ch = p.children;
  ch ? null : ch = <HiCheck />;

  return (
    <label className={clsx({
      [`cb-${style}-${color}`]: true,
    })} 
    {...p}>
      {ch}
      <input type="checkbox" name={p.name} value={p.value}/>
    </label>
  )
}

export function Rd(p) {
  let [txt, style, color] = defaults(p);

  return (
    <label className={clsx({
      [`rd-${style}-${color}`]: true,
    })} 
    {...p}>
      <input type="radio" name={p.name} value={p.value}/>
    </label>
  )
}

export function Sw(p) {
  let [txt, style, color] = defaults(p);

  let tp = p.tp;
  tp ? null : tp = 'checkbox';

  return (
    <label className={clsx({
      [`sw-${style}-${color}`]: true,
    })} 
    {...p}>
      <span></span>
      <input type={tp} name={p.name} value={p.value}/>
    </label>
  )
}

export function Sl(p) {
  let [txt, style, color] = defaults(p);

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
    <div className={clsx({
      [`sl-${style}-${color}`]: true,
      [`sl-open`]: isOpen
    })}
      ref={ref} {...p}>
      <div className={`sl-name h3`} onClick={changeOpen}>
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

export function Ac(p) {
  let [txt, style, color] = defaults(p);

  let [isOpen, setIsOpen] = useState(false);
  function changeOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={clsx({
      [`ac-${style}-${color}`]: true,
      [`ac-open`]: isOpen
    })}
    {...p}>
      <div className={`ac-name h3`} onClick={changeOpen}>
        <span>{p.name}</span>
        <HiChevronDown />
      </div>
      <p className="p">{p.children}</p>
    </div>
  )
}

export function Al(p) {
  let style = p.payload.bg;
    style ? null : style = 'bg';
  
    let color = p.payload.color;
    color ? null : color = 'w';
  
    let [isOpen, setIsOpen] = useState(true);
  
    return (
      <div className={clsx({
        [`al-${style}-${color}`]: isOpen,
        [`al-close`]: !isOpen,
      })} 
      onClick={() => setIsOpen(false)} {...p.payload}>
        {p.payload.children}
      </div>
    )
}

export function Cr(p) {
  let [txt, style, color] = defaults(p);

  return (
    <div className={clsx({
      [`cr-${style}-${color}`]: true,
    })} {...p}>
      {p.children}
    </div>
  )
}

export function Brcr(p) {
  let [txt, style, color] = defaults(p);

  let pl = usePathname();
  let pn = pl.split('/').filter((p) => p);

  return (
    <div className={clsx({
      [`brcr ${txt}`]: true,
    })} {...p}>
      <ul>
        <li>
          <Ln href='/' color={color}>
            Home
          </Ln>
        </li>
        {pn.length > 0 && '/'}
        {pn.map((link, index) => {
          let href = `/${pn.slice(0, index + 1).join('/')}`;
          let itemLink = link[0].toUpperCase() + link.slice(1, link.length);

          return (
            <Fragment key={Math.random().toString(10).slice(2)}>
              <li>
                {pn.length !== index + 1 ? <Ln href={href} color={color}>
                  {itemLink}
                </Ln> :
                ((style === 'bg' || style === 'ol') && <Ln href={href} className={clsx({
                  [`bt ${style}-${color} ${txt}`]: true,
                })}>
                  {itemLink}
                </Ln>) || 
                (style === 'txt' && <Ln href={href} color='a'>
                  {itemLink}
                </Ln>)}
              </li>
              {pn.length !== index + 1 && '/'}
            </Fragment>
          )
        })}
      </ul>
    </div>
  )
}