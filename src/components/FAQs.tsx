import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function Faqs() {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <h1 className='mb-10 text-center text-5xl font-black'>FAQs</h1>
      <AccordionItem value='item-1'>
        <AccordionTrigger className='font-bold'>
          What is Saeternus?
        </AccordionTrigger>
        <AccordionContent>
          Saeternus is a platform that offers exclusive, industry-relevant
          courses aimed at elevating your career. We provide a unique
          educational experience that equips you with essential skills to stay
          ahead in your field. Our approach includes alumni support and
          networking opportunities with like-minded professionals.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger className='font-bold'>
          What kind of courses does Saeternus offer?
        </AccordionTrigger>
        <AccordionContent>
          Saeternus offers a range of courses that are designed to be relevant
          to various industries. Our courses are aimed at providing essential
          skills and knowledge to help you advance in your career and stay
          updated with the latest trends in your niche.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger className='text-left font-bold'>
          What is the educational philosophy of Saeternus?
        </AccordionTrigger>
        <AccordionContent>
          Our mission is to transform the traditional approach to education by
          providing a unique, industry-relevant learning experience. We focus on
          equipping our learners with practical skills and knowledge that are
          directly applicable to their careers.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-4'>
        <AccordionTrigger className='text-left font-bold'>
          How does Saeternus ensure that its courses stay industry-relevant?
        </AccordionTrigger>
        <AccordionContent>
          Saeternus continuously updates its courses to reflect the latest
          trends and developments in various industries. We collaborate with
          industry leaders and educational institutions to ensure that our
          content remains current and relevant.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
