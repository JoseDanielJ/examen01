import React,{FC} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';
import useRepositories from '@/hooks/useRepositories';

interface repository{
  repos:string[]
}
const MyCarousel: FC<repository> = ({repos}) => {
  return (
    <Carousel className='h-75 '>
       {repos.map((item) => {
        return (
          <Carousel.Item key={item}>
            <div className='d-block w-100'>
            <Image src={"/facebook.svg"} alt='facebook' width={40} height={40} className='py-5 my-5'></Image>
            </div>
            <Carousel.Caption>
            <h3 className='text-danger'>{item.toUpperCase()}</h3>
            </Carousel.Caption>

          </Carousel.Item>
        );
      })}
     
    </Carousel>
  );
};

export default MyCarousel