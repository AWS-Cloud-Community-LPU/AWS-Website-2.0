import { Box, Container, Heading, SimpleGrid, Image, Text, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons';
import BackgroundImg from "../../Assets/Blogs/tour-bg.png";
import EventImg from "../../Assets/Home/EC2.jfif";
import React from "react";

const Blogs = () => {
    return (
        <Box mt="10" mb="20">
            <Container maxW="container.xl">

            <Box p="5" bgImage={BackgroundImg}
            w="100%"
            bgPosition="center">
            <Heading color="orange.400">
                Blogs
            </Heading>
            <Text fontSize="lg" my="4">
                Learn more about AWS by reading our blogs. These blogs are very carefully curated
                by our community members.
            </Text>
            </Box>

            <SimpleGrid mt="20" minChildWidth={["270px", "500px"]} spacing={10}>
            <Box height="auto">

                    <Box bg="teal">
                    <Image boxSize="100%" src={ EventImg } alt="Dan Abramov" />
                    </Box>
                    <Box mx="3">
                        <Heading mt="4" fontSize="3xl">AWS Certification</Heading>
                        <Text my="2" color="orange.400">Posted by</Text>
                        <Text fontSize="sm" my="4">
                        With the emergence of Cloud Technologies in the market, 
                        the most important step for learners is to get a 
                        clarification on the right way to begin their career. 
                        Amazon Web Services, being a leader in the globe in 
                        terms of providing cloud base solutions provides a 
                        clear description of skill validation through certifications 
                        (starting from Foundation level to Professional level).
                        </Text>
                        <Button mb="6" w="9rem" rightIcon={<ArrowForwardIcon />} colorScheme="orange">
                            Read more
                        </Button>
                    </Box>

            </Box>
            </SimpleGrid>

            </Container>
        </Box>
    );
}
 
export default Blogs;