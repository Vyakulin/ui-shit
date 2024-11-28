import { HiCube, HiCurrencyDollar } from "react-icons/hi2";
import { Ln, Bt } from "./atoms";
import Link from "next/link";

function defaults(p) {
  let txt = p.txt;
  txt ? null : txt = 'h3';

  let style = p.bg;
  style ? null : style = 'bg';

  let color = p.color;
  color ? null : color = 'w';

  return [txt, style, color];
}

export function Logo(p) {
  let [txt, style, color] = defaults(p);

  return (
    <Ln color={color} txt={txt} href='/'>
      UI-shit
      <HiCube />
    </Ln>
  )
}

export function Header() {
  function createLink(name) {
    return {
      name: name
    }
  }

  let links = [createLink('Docs'), createLink('Contacts')];

  links.forEach((link, index) => {
    link.href = `/${link.name.toLowerCase()}`;
  })

  return (
    <header>
      <Logo color='b'/>
      <div className="hd-links">
        {links.map((item) => 
          <Ln color='b' href={item.href} key={item.name}>{item.name}</Ln>
        )}
      </div>
      <Link href='/donate'><Bt bg='ol' color='b' >Donate<HiCurrencyDollar /></Bt></Link>
    </header>
  )
}