import { Box, Container, Center, Heading, Text, Button, Image, SimpleGrid } from "@chakra-ui/react";
import EventImg from "../../Assets/Home/EC2.jfif";
import BackgroundImg from "../../Assets/Blogs/tour-bg.png";
import React from "react";

const Events = () => {
    return (
        <Box mt="10" mb="20">
            <Container maxW="container.xl">

            <Box p="5" bgImage={BackgroundImg}
            w="100%"
            bgPosition="center">
            <Heading color="orange.400">
                Events
            </Heading>
            <Text fontSize="lg" my="4">
            We conduct frequent learning sessions for our 
            community to help, share and expand our knowledge 
            on various topics, all videos are shared on our 
            Youtube Channel
            </Text>
            </Box>


            <Box my="28">
            <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize={["5xl","6xl"]}
            fontWeight="extrabold"
            ml={["auto", "24"]}
            mb="8"
            >
                Our Upcoming Event
            </Text>

            <Center>
            <Image src={ EventImg } fallbackSrc="https://via.placeholder.com/300" />
            </Center>

            <Box mt="10">
                <Heading ml={["auto", "28"]} my="5" color='orange.400' fontSize="3xl">AWS Engage</Heading>
                <Text justifyContent="justify" mx={["auto", "28"]}>
                We, at AWS Cloud Community LPU, believe that knowledge shared 
                is knowledge earned. Accepting and giving is the way of living. 
                It keeps you updated in today's dynamic industry and can make you 
                tomorrow's leader.
                </Text>
                <Center mt="8">
                <Button w="9rem" mr="4" colorScheme="orange" variant="solid">
                    Attend event
                </Button>
                <Button w="9rem" colorScheme="orange" variant="outline">
                    View all events
                </Button>
                    </Center>  
            </Box>
            </Box>

            <Heading fontSize="4xl" mb="8" color="orange.400">
                Our Past Events
            </Heading>

            <SimpleGrid mb="10" minChildWidth="18rem" spacing="40px">

            <Box height="auto" boxShadow="base">
                <Center>
                <iframe width="100%" height="160" src="https://www.youtube.com/embed/3ajPXlZJszM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Center>

                <Box p="4">
                    <Text mb="2">28 May 2021</Text>
                    <Heading fontSize="2xl">
                    Serverless in Full Stack Development
                    </Heading>
                    <Text my="3" fontSize="sm">
                    AWS Cloud Community of LPU in collaboration with AWS User Group 
                    Jaipur - Rajasthan is hosting a webinar on “Serverless in Full 
                    Stack Development.Our guest speaker for this session is Suman 
                    Debnath, Sr developer advocate, Amazon Web Services (AWS).
                    </Text>
                    <Button w="9rem" colorScheme="orange">View event</Button>
                </Box>
            </Box>

            </SimpleGrid>

            

            </Container>
        </Box>
    );
}
 
export default Events;