import React from "react";
import { FAQdisc } from "@/public/FAQ/description";
import { Accordion } from "@mantine/core";

function thirdPage() {
  const items = FAQdisc.map((item) => (
    <div className=' w-full '>
      <Accordion.Item key={item.value} value={item.value}>
        <Accordion.Control icon={item.emoji} className='h-20'>
          {item.value}
        </Accordion.Control>
        <Accordion.Panel>{item.description}</Accordion.Panel>
      </Accordion.Item>
    </div>
  ));

  return (
    <main className=' w-full h-screen bg-darkColor'>
      <div className='w-full h-screen flex justify-center items-center'>
        <Accordion
          variant='contained'
          classNames={{
            root: "root",
            item: "item",
            label: "label",
            icon: "icon",
          }}
          className='w-1/2 '
          multiple
        >
          {items}
        </Accordion>
      </div>
    </main>
  );
}

export default thirdPage;
