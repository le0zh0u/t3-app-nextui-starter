'use client';

import React from 'react';

import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { motion } from 'framer-motion';

/* eslint-disable sonarjs/no-duplicate-string */
export default function Pricing() {
  const plans = [
    {
      name: 'Hobby Plan',
      desc: 'Enjoy limited access to all our features',
      price: 0,
      isMostPop: false,
      features: ['Make the best schedule', 'Support your team']
    },
    {
      name: 'Basic Plan',
      desc: 'Make the best schedule for your team',
      price: 10,
      isMostPop: true,
      features: ['Make the best schedule', 'Support your team', 'Build your website', 'Video calls']
    },
    {
      name: 'Enterprise Plan',
      desc: 'Make the best schedule for your team and more',
      price: 20,
      isMostPop: false,
      features: [
        'Make the best schedule',
        'Support your team',
        'Build your website',
        'Video calls',
        'Audio calls'
      ]
    }
  ];

  return (
    <motion.section
      id='pricing'
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5, type: 'spring', bounce: 0 }}
      className='mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center gap-5 px-4 py-28 md:px-8'
    >
      <div className='flex flex-col gap-3'>
        <h3 className='bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-xl font-semibold text-transparent sm:text-2xl'>
          Pricing Plans for your business
        </h3>
        <p className='max-w-xl text-center text-muted-foreground'>
          Select the plan that best suits your needs.
        </p>
      </div>
      <div className='mt-16 grid place-content-center gap-10 lg:grid-cols-3'>
        {plans.map((item, index) => (
          <Card
            key={index}
            shadow='none'
            className={`relative rounded-[20px] p-[2px] will-change-transform ${
              item.isMostPop ? 'sm:scale-110' : ''
            }`}
          >
            {item.isMostPop ? (
              <span className='absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#016FEE_70%,#C7DBFB_100%)]' />
            ) : (
              <span className='absolute inset-[-1000%] bg-border' />
            )}
            <div className='z-[2] flex h-full w-full flex-col justify-between rounded-[18px] bg-card p-5'>
              <CardBody className='flex w-full items-start gap-3'>
                <div className='flex flex-col'>
                  <h4 className='text-xl font-light'>{item.name}</h4>
                  <span className='text-sm font-light text-muted-foreground'>{item.desc}</span>
                </div>
                <span className='text-2xl font-light'>${item.price}</span>

                <Divider />

                <div className='flex flex-col gap-5 pb-5'>
                  <span className='text-sm font-light text-muted-foreground'>Includes</span>
                  <ul className='flex flex-col gap-2'>
                    {item.features.map((feature, index) => (
                      <li key={index} className='text-sm font-light'>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardBody>
              <CardFooter className='p-0'>
                <Button
                  className='w-full'
                  variant='solid'
                  color={item.isMostPop ? 'primary' : 'default'}
                >
                  Get Started
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
