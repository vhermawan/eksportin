import { useCallback,useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Center, useColorModeValue, Icon,createStandaloneToast } from '@chakra-ui/react';
import { AiFillFileAdd } from 'react-icons/ai';


export default function Dropzone(props) {
  const toast = createStandaloneToast()
  const onDrop = useCallback(files => props.setFile(files[0]), [props.setFile]);

  const { getRootProps, getInputProps, fileRejections, isDragActive } = useDropzone({
    onDrop, accept: {
      'image/png': []
    }, 
    maxFiles: 1, maxSize:2000000, multiple: false
  });

  const dropText = isDragActive ? 'Drop the files here max size 2 mb...' : 'Drag \'n\' drop .png file here max size 2 mb, or click to select files';

  const activeBg = useColorModeValue('gray.100', 'gray.600');
  const borderColor = useColorModeValue(
    isDragActive ? 'teal.300' : 'gray.300',
    isDragActive ? 'teal.500' : 'gray.500',
  );

  useEffect(() => {
    if(fileRejections.length>0){
      toast({
        title: 'Ukuran file melebihi 2 mb',
        position: `top-right`,
        isClosable: true,
        variant: `left-accent`,
        status: `error`,
      })
    }
  }, [fileRejections]);

  return (
    <Center
      p={10}
      cursor="pointer"
      bg={isDragActive ? activeBg : 'transparent'}
      _hover={{ bg: activeBg }}
      transition="background-color 0.2s ease"
      borderRadius={4}
      border="3px dashed"
      borderColor={borderColor}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <Icon as={AiFillFileAdd} mr={2} />
      <p>{props.file === null || props.file === undefined ? dropText : props.file.name}</p>
    </Center>
  );
}