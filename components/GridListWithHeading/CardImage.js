import { 
    Card,
    Heading,
    Image,
    CardBody,
    Text,
    Stack, 
    Link,
    Button } from "@chakra-ui/react"
import BadgeCustom from "../BadgeCustom/BadgeCustom"

export default function CardImage(params)
{
    let badgeCustomPrefix = 'AR$: '
    let firstImg = params.imgSrc[0];
    return (
    <>
    
    <Card maxW='sm'>
        <CardBody>
            <Link >
                <Image
                src= {firstImg.src}
                borderRadius='lg'
                 />
            </Link>
        
        <Stack mt='2' spacing='2'>
            <Heading 
                spacing='20'
                size='md'
                color={'gray.400'}>
                    {params.title}
            </Heading>
            <Text color={'gray.500'} fontSize={'15'}>
                {params.description}
            </Text>
            <BadgeCustom 
                prefix= {badgeCustomPrefix} 
                name={params.price}></BadgeCustom> 

        </Stack>
        </CardBody>
        <Button 
            variant='ghost' 
            colorScheme='blue'
            onClick={params.onClick}>
                Fotos
        </Button>
    </Card>
    </>
    );
}