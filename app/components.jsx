import Link from 'next/link';
import { IconCheck } from './icons';

export function Text(props) {
    let style = props.style;
    let children = props.children;

    switch (style) {
        case 'h1':
            return (
                <h1 className='h1'>{children}</h1>
            )
        case 'h2':
            return (
                <h2 className='h2'>{children}</h2>
            )
        case 'h3':
            return (
                <h3 className='h3'>{children}</h3>
            )
        case 'p':
            return (
                <p className='p'>{children}</p>
            )
        case 'sm':
            return (
                <span className='sm'>{children}</span>
            )
    }
}

export function Button(props) {
    let style = props.style;
    let color = props.color;
    let children = props.children;

    return (
        <button className={'bt-' + style + '-' + color}>{children}</button>
    )
}