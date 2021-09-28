import { Box, Container, Heading, Text, SimpleGrid, Center, Image, Input, Textarea, Button } from "@chakra-ui/react";
import BackgroundImg from "../../Assets/Blogs/tour-bg.png";
import React from "react";

const Contact = () => {
    return (
        <Box>

            <Container maxW="container.xl">

            <Box mt="10" p="5" bgImage={BackgroundImg}
            w="100%"
            bgPosition="center">
            <Heading color="orange.400">
                Contact Us
            </Heading>
            <Text fontSize="lg" my="4">
            You can reach out to us either through social medial 
            or you can drop a message below and we will revert back to you.
            </Text>
            </Box>

            <SimpleGrid my="20" minChildWidth="120px" spacing={8}>

            <Box p="4" height="auto">
                <Center>
                <Image
                    objectFit="cover"
                    src="https://img.icons8.com/fluency/144/000000/linkedin-2.png"
                />
                </Center>
                <Text textAlign="center">Linkedin</Text>
            </Box>

            <Box p="4" height="auto">
                <Center>
                <Image
                    objectFit="cover"
                    src="https://img.icons8.com/color/144/000000/youtube-play.png"
                />
                </Center>
                <Text textAlign="center">Youtube</Text>
            </Box>

            <Box p="4" height="auto">
                <Center>
                <Image
                    objectFit="cover"
                    src="https://img.icons8.com/fluency/144/000000/instagram-new.png"
                />
                </Center>
                <Text textAlign="center">Instagram</Text>
            </Box>

            <Box p="4" height="auto">
                <Center>
                <Image
                    objectFit="cover"
                    src="https://img.icons8.com/fluency/144/000000/facebook-new.png"
                />
                </Center>
                <Text textAlign="center">Facebook</Text>
            </Box>

            <Box p="4" height="auto">
                <Center>
                <Image
                    objectFit="cover"
                    src="https://img.icons8.com/color/144/000000/twitter--v1.png"
                    alt="Dan Abramov"
                />
                </Center>
                <Text textAlign="center">Twitter</Text>
            </Box>

            <Box p="6" height="auto">
                <Center>
                <Image
                    objectFit="cover"
                    src="https://img.icons8.com/ios-filled/150/000000/medium-monogram--v1.png"
                    alt="Dan Abramov"
                />
                </Center>
                <Text mt="2" textAlign="center">Medium</Text>
            </Box>

            </SimpleGrid>

            <Heading color="orange.400" textAlign="center" fontSize="3xl">
                Drop Your Message
            </Heading>
            <Text fontSize="base" textAlign="center" mt="5">
                All users on AWS will know that there are millions of people out there. 
                Every day besides so many people joining this community.
            </Text>

            <Container my="10">
                <form action="">
                <Input w="100%" type="text" placeholder="Full name" required/>
                <Input mt="5" type="email" placeholder="Email" required/>
                <Textarea mt="5" placeholder="Your text here" required/>
                <Button mt="5" w="100%" colorScheme="teal">Submit</Button>
                </form>
            </Container>

            </Container>

        </Box>
    );
}
 
export default Contact;