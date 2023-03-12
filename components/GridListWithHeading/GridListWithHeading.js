import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Text,
    Stack,
    HStack
  } from '@chakra-ui/react';
import CardImage from '../GridListWithHeading/CardImage'
import {useState} from "react";
import ImgViewer from "../../components/ImgViewer/ImgViewer";

  export default function GridListWithHeading(params) {
    const [open, setOpen] = useState(false);
    const [slides, setSlides] = useState([]);

    const productsToSell = params.items;

    return (
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>{params.title}</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            {params.description}
          </Text>
        </Stack>

        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {
                productsToSell && 
                productsToSell.map((product) => (
                <HStack key={product.id} align={'top'}>
                    <CardImage 
                        title={product.title}
                        description={product.text}
                        price = {product.price}
                        imgSrc = {product.imgSrc}
                        onClick={() => showImageViewer(product.imgSrc)}
                        >
                    </CardImage>
                </HStack>
                ))}
          </SimpleGrid>
        </Container>

       <ImgViewer
       open={open}
       close={() => setOpen(false)}
       slides={slides}>
       </ImgViewer>                
      </Box>
    );

    function showImageViewer(images){
        setSlides(images);
        setOpen(true);
    }
  }