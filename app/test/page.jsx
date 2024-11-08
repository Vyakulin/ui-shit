'use client'
import './style.css';
import {
   Text, Button
} from '../components';
import { IconCheck } from '../icons';

export default function Test() {
  return (
    <div className='all'>
      <div className='elements'>
        <Text style='h1'>Header1</Text>
        <Text style='h2'>Header2</Text>
        <Text style='h3'>Header3</Text>
        <Text style='p'>Paragraph</Text>
        <Text style='sm'>Small</Text>
      </div>
      <div className='elements'>
        <Button 
          style='fill' 
          color='white'>Button<IconCheck /></Button>
      </div>
    </div>
  );
}
