import { Box, Container, SimpleGrid, Heading, Text, Input, Textarea, Button, Image, Center, Link } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import UnderImg from "../../Assets/Footer/under.png";
import React from "react";

const Footer = () => {
    return (
        <Box> 
            <Container maxW="container.xl">
            
            <Center>
                <Image
                    boxSize="100%"
                    objectFit="cover"
                    src={ UnderImg }
                    alt="Segun Adebayo"
                />
            </Center>  

            <SimpleGrid minChildWidth="300px" spacing="40px">

            <Box height="350px">
                <Heading pl="3" pt="4" pb="3" color="gray.500" fontSize="2xl">
                    Words by AWS
                </Heading>
                <VStack
                spacing={4}
                align="stretch"
                >
                    <Box display="flex" pt="4" pl="3" h="120px">
                    <Image
                        boxSize="80px"
                        objectFit="cover"
                        src="https://bit.ly/sage-adebayo"
                        alt="Segun Adebayo"
                    />
                    <Text px="6" fontSize="14px">
                    One of the only ways to get out of a tight box is to invent your way out.
                    - Jeff Bezos
                    </Text>
                    </Box>
                    <Box display="flex" pt="4" pl="3" h="120px">
                    <Image
                        boxSize="80px"
                        objectFit="cover"
                        src="https://bit.ly/sage-adebayo"
                        alt="Segun Adebayo"
                    />
                    <Text px="6" fontSize="14px">
                    If you double the number of expirements you do per year you're going to double your inventiveness.
                    - Andy Jassy
                    </Text>
                    </Box>
                </VStack>
            </Box>

            <Box height="320px">
                <VStack
                spacing={4}
                align="stretch"
                >
                    <Box pt="3" pl="3" h="160px">
                        <Heading mb="5" color="gray.500" fontSize="2xl">
                        Contact
                        </Heading>
                        <Text>
                        E-mail:
                        <br /> 
                        <Link href="mailto:awscloudcommunity@email.com">
                        awscloudcommunity.lpu@gmail.com
                        </Link>
                        </Text>
                        <Text>
                        Phone: 
                        <Link ml="3" href="tel:8017874250">
                        8017874250
                        </Link>
                        </Text>
                    </Box>
                    <Box pt="4" pl="3" h="160px">
                       <Heading mb="5" color="gray.500" fontSize="2xl">
                        Address
                        </Heading>
                        <Text>
                        Jalandhar - Delhi, Grand Trunk Rd,
                        </Text>
                        <Text>
                        Phagwara, Punjab 144001
                        </Text>
                    </Box>
                </VStack>
            </Box>

            <Box height="320px">
                <Heading pt="2" pl="3" mb="5" color="gray.500" fontSize="2xl">
                    Send a message
                </Heading>
                <Box mx="3">
                    <form action="">
                    <Input w="100%" type="text" placeholder="Full name" required/>
                    <Input mt="5" type="email" placeholder="Email" required/>
                    <Textarea mt="5" placeholder="Your text here" required/>
                    <Button mt="5" w="100%" colorScheme="teal">Submit</Button>
                    </form>
                </Box>
            </Box>
            </SimpleGrid>

            <Center mt="24" fontSize="24px">
                <Link href="www.linkedin.com" color="#0077b5" mx="3" bg="gray.100" px="3.5" py="1.5" borderRadius="50%">
                <i className="fab fa-linkedin-in"></i>
                </Link>

                <Link color="#FF0000" mx="3" bg="gray.100" px="2.5" py="1.5" borderRadius="50%">
                <i className="fab fa-youtube"></i>
                </Link>

                <Link color="#E1306C;" mx="3" bg="gray.100" px="3.5" py="1.5" borderRadius="50%">
                <i className="fab fa-instagram"></i>
                </Link>

                <Link color="#4294ff" mx="3" bg="gray.100" px="4" py="1.5" borderRadius="50%">
                <i className="fab fa-facebook-f"></i>
                </Link>   
            </Center>

            </Container>


            <Text w="100%" textAlign="center" bg="#000000" mt="5" color="#ffffff" py="4">
                &copy; AWS Cloud LPU
            </Text>


        </Box>
    );
}
 
export default Footer;