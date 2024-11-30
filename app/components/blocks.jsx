'use client';
import { HiCube, HiCurrencyDollar } from "react-icons/hi2";
import { Ln, Bt } from "./atoms";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { SiBehance, SiGithub, SiTelegram, SiTwitch, SiYoutube } from 'react-icons/si'

function defaults(p) {
  let txt = p.txt;
  txt ? null : txt = 'h3';

  let style = p.bg;
  style ? null : style = 'bg';

  let color = p.color;
  color ? null : color = 'w';

  return [txt, style, color];
}

function Logo(p) {
  let [txt, style, color] = defaults(p);

  return (
    <Ln color={color} txt={txt} href='/'>
      UI-shit
      <HiCube />
    </Ln>
  )
}

function Links(p) {
  function createLink(name) {
    return {
      name: name
    }
  }

  let links = [createLink('Docs'), createLink('Contacts'), createLink('Donate')];

  links.forEach((link, index) => {
    link.href = `/${link.name.toLowerCase()}`;
  })

  return(
    <div className={p.className}>
      {links.map((item) => 
        <Ln color='b' href={item.href} key={item.name}>{item.name}</Ln>
      )}
    </div>
  )
}

function Contacts(p) {
  let [txt, style, color] = defaults(p);

  function createContact(icon, href) {
    return {
      href: href,
      icon: icon,
    }
  }

  let contacts = [
    createContact(<SiBehance />, 'https://www.behance.net/AxaxaDanil'),
    createContact(<SiGithub />, 'https://github.com/Vyakulin'),
    createContact(<SiTelegram />, 'https://t.me/Femniboy'),
    createContact(<SiTwitch />, 'https://www.twitch.tv/femni'),
    createContact(<SiYoutube />, 'https://www.youtube.com/channel/UCuoktMiHAMycE-IbnCbThlg/')
  ]

  return (
    <div className={p.className}>
      {contacts.map((item) => {
        return(
          <Ln key={item.href} color={color} href={item.href} target='_blank'>
            {item.icon}
          </Ln>
        )
      })}
    </div>
  )
}

function Burger(p) {
  let [txt, style, color] = defaults(p);

  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="burger">
      <div className={clsx({
          [`burger-bt l-${color}`]: true,
          [`burger-bt-open`]: isOpen
        })} onClick={() => setIsOpen(!isOpen)}>
        <div id="burger-bt-1"></div>
        <div id="burger-bt-2"></div>
        <div id="burger-bt-3"></div>
      </div>
        <Links className={clsx({
          [`burger-links`]: true,
          [`burger-links-open`]: isOpen
        })} />
    </div>
  )
}

export function Header() {
  return (
    <header>
      <Logo color='b'/>
      <Links className='hd-links' />
      <Link href='/donate'><Bt bg='ol' color='b' >Donate<HiCurrencyDollar /></Bt></Link>
      <Burger color='b'/>
    </header>
  )
}

export function Footer() {
  return (
    <footer>
      <Links className='ft-links' />
      <Logo color='b' txt='h2'/>
      <Contacts color='b' className='ft-contacts' />
    </footer>
  )
}