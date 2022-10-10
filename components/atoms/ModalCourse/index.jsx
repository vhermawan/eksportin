import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Flex,
  Image,
  Text,
  Button,
  Center,
} from '@chakra-ui/react'
import router from 'next/router'

export default function ModalBegining(props) {

  const redirectCourse = () => {
    props.onClose()
    router.push('/materi')
  }

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex wrap="nowrap" mt="2">
              <Image
                src="/assets/img/modal.webp"
                alt="modal-image"
                loading="lazy"
                objectFit="cover"
                boxSize="full"
                w="full"
              />
            </Flex>
            <Text align="center">
              Mulai untuk belajar edukasi ekspor bersama kami, tekan tombol di
              bawah dan mulai langkahmu !
            </Text>
            <Center>
              <Button
                bgColor="#10214B"
                size="sm"
                color="white"
                p="5"
                onClick={redirectCourse}
                aria-label="login"
                my="4"
              >
                Mulai Sekarang!
              </Button>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
