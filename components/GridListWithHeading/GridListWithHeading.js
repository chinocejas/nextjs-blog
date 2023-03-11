import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Text,
    Stack,
    HStack,
    Button,
  } from '@chakra-ui/react';
  import CardImage from '../GridListWithHeading/CardImage'
import {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

  export default function GridListWithHeading(params) {
    const [open, setOpen] = useState(true);

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
                        onClick={showImageViewer(product.imgSrc)}
                        >
                    </CardImage>
                </HStack>
                ))}
          </SimpleGrid>
        </Container>

        <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: "https://www.lg.com/ar/images/televisores/md06198536/gallery/DES_1_N.jpg" },
          { src: "https://www.lg.com/ar/images/televisores/md06198536/gallery/DES_1_N.jpg" },
          { src: "https://www.lg.com/ar/images/televisores/md06198536/gallery/DES_1_N.jpg" },
        ]}
        />
      </Box>
    );

    function showImageViewer(images){
        //setOpen(true);
        console.log('showImageViewer---')
    }
  }