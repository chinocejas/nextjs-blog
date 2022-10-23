import { Badge,useColorModeValue } from "@chakra-ui/react"

export default function BadgeCustom(params)
{
    var nameToShow = '#' + params.name;
    return (
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              {nameToShow}
            </Badge>
    );

}
