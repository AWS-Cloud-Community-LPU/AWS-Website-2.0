import { Box, Container, Input, Textarea, Button, Heading, Text } from "@chakra-ui/react";
import BackgroundImg from "../../Assets/Blogs/tour-bg.png";
import React from "react";

const Recruitment = () => {
    return (
        <Box mt="10" mb="24">
            <Container maxW="container.xl">

            <Box p="5" bgImage={BackgroundImg}
            w="100%"
            bgPosition="center">
            <Heading fontSize="4xl" color="orange.400">How to Join the Community ?</Heading>
            <Text fontSize="xl" mt="3">Fill out the form given and we will contact you.</Text>
            </Box>

                <Box mt="20" w={["100%", "70%", "60%"]} mx="auto">
                <Heading>Recruitment form</Heading>
                    <form>
                    <Input justifyContent="center" mt="4" type="text" placeholder="Full name" />
                    <Input mt="4" type="email" placeholder="Email" />
                    <Input mt="4" type="number" placeholder="Phone number" />
                    <Input mt="4" type="text" placeholder="University name" />
                    <Input mt="4" type="number" placeholder="Current year" />
                    <Textarea h="8rem" mt="4" type="text" placeholder="Why you want to join the community" />
                    <Textarea h="4rem" mt="4" type="text" placeholder="Field of expertise" />
                    <Button mt="4" w="100%" type="submit" colorScheme="orange">Submit</Button>
                    </form>
                </Box>

            </Container>
        </Box>
    );
}
 
export default Recruitment;