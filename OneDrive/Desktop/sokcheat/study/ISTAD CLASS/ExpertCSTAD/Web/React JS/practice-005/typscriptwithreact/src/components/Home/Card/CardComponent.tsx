
'use client';

import { Card } from 'flowbite-react';
import { Products } from '../HomeComponent';

export default function CardComponent (props: Products) {
  return (
    <>
       <Card
    className="h-[700px]"
         renderImage={
          ()=><img src={props.image} className="h-[500px] overflow-hidden object-contain" />}
        >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       {props.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       {props.description}
      </p>
    </Card>
    </>
   
  );
}
