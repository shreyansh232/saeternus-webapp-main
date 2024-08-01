import Image from 'next/image';
import React from 'react';

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, description }) => {
  return (
    <article className="flex flex-col grow items-center px-20 pt-20 w-full shadow-lg text-center bg-white rounded-[50px] max-md:px-5 max-md:mt-8">
      <Image loading="lazy" width={100} height={100} src={imageSrc} alt={`${title}`} className="mt-4 aspect-square w-[72px]" />
      <h3 className="mt-2 text-2xl tracking-tight text-primary max-md:text-xl max-md:leading-[53px]">{title}</h3>
      <p className="mt-2 mb-4 text-xl tracking-normal leading-8 text-foreground">{description}</p>
    </article>
  );
};

export default ServiceCard;