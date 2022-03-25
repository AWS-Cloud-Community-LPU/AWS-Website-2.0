import "./Quiz.css";
import { Container, 
    Heading, 
    Text, 
    Center, 
    Box, 
    Button, 
    Wrap, 
    WrapItem,
    RadioGroup,
    Radio,
    Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Quiz = () => {
    return ( 
       <Container maxW="container.xl">
           <Heading mt="14" color="orange.400">
                AWSCCLPU Monthly Quiz
            </Heading>

            <Box bg="orange.400" px="3" borderRadius="md">
                <Text mt="8" fontSize="2xl" py="2" 
                color='#ffffff' fontWeight="600">
                    There are a total of 30 questions
                </Text>
            </Box>

            <Box my="14">
                <Box className="shadow" p="6">
                    <Text fontSize="xl" my="4" 
                    color="orange.400" fontweight="600">
                        1. What will be the usecase of AWS Lambda and AWS S3 ?
                    </Text>
                    <Divider />
                    <Wrap>
                        <WrapItem>
                            <RadioGroup display="flex" flexWrap="wrap">

                                <Box display="flex" flexWrap="wrap">
                                    <Radio mx="2" value='1' size='md' 
                                    colorScheme='green' py="4">
                                        Lorem ipsum dolor sit amet consectetur
                                    </Radio>

                                    <Radio mx="2" value='1' size='md' 
                                    colorScheme='green' py="4">
                                        Lorem ipsum dolor sit amet consectetur
                                    </Radio>
                                </Box>

                                <Box display="flex" flexWrap="wrap">
                                    <Radio mx="2" value='1' size='md' 
                                    colorScheme='green' py="4">
                                        Lorem ipsum dolor sit amet consectetur
                                    </Radio>

                                    <Radio mx="2" value='1' size='md' 
                                    colorScheme='green' py="4">
                                        Lorem ipsum dolor sit amet consectetur
                                    </Radio>
                                </Box>

                            </RadioGroup>
                        </WrapItem>
                    </Wrap>
                    <Divider />
                </Box>
            </Box>

            <Center mt="10" mb="20">
                <Button w="9rem" mr="4" size='lg'
                colorScheme="orange" variant="solid">
                    Participate
                </Button>
            </Center>
       </Container> 
    );
}
 
export default Quiz;