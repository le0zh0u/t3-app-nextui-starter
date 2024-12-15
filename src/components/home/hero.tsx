'use client';

/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal';
import { useDisclosure } from '@nextui-org/use-disclosure';
import { motion } from 'framer-motion';

export default function Hero() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className='relative items-center justify-center'>
      <section
        id='hero'
        className='mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-12 px-4 py-28 md:px-8'
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0 }}
          className='mx-auto flex max-w-4xl flex-col items-center justify-center space-y-5 text-center'
        >
          <span className='h-full w-fit rounded-full border border-border bg-card px-2 py-1 text-sm'>
            NextUI template its here!
          </span>
          <h1 className='mx-auto text-pretty text-4xl font-medium tracking-tighter md:text-6xl'>
            Use Nextjs and NextUI to build your website
          </h1>
          <p className='mx-auto max-w-2xl text-balance text-lg text-muted-foreground'>
            Create your website with NextUI and Nextjs, the best UI Framework.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0'
          >
            <Button onPress={onOpen} color='primary' variant='shadow'>
              Get Started
            </Button>
            <Modal isOpen={isOpen} placement='center' onOpenChange={onOpenChange}>
              <ModalContent>
                <ModalHeader>Gonzalo Chalé</ModalHeader>
                <ModalBody>
                  I&apos;m Systems Engineer from Cancún, México, always building things for the web.
                </ModalBody>
                <ModalFooter>
                  <Button
                    as={Link}
                    href='https://x.com/gonzalochale'
                    color='primary'
                    variant='solid'
                    size='sm'
                  >
                    Connect on{' '}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='12'
                      height='12'
                      fill='none'
                      viewBox='0 0 1200 1227'
                    >
                      <path
                        fill='currentColor'
                        d='M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z'
                      />
                    </svg>
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </motion.div>
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, type: 'spring', bounce: 0 }}
        className='pointer-events-none absolute -top-32 flex h-full w-full items-center justify-end'
      >
        <div className='flex w-3/4 items-center justify-center'>
          <div className='bg-light h-[600px] w-12 rounded-3xl blur-[70px] [will-change:transform] max-sm:rotate-[15deg] sm:rotate-[35deg]'></div>
        </div>
      </motion.div>
    </div>
  );
}
