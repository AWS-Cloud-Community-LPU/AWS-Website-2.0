import { Box, Container, Tab, Tabs, TabList,TabPanels, TabPanel, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
import BackgroundImg from "../../Assets/Blogs/tour-bg.png";
import CommunityImg from "../../Assets/About/community.jpg";
import AllMembers from "../../Components/Members/All";
import Anchoring from "../../Components/Members/Anchors";
import WebDevelopers from "../../Components/Members/WebDev";
import ContentDevelopers from "../../Components/Members/ContentDev";
import Graphics from "../../Components/Members/Graphics";
import Technical from "../../Components/Members/Technical";
import Marketing from "../../Components/Members/Marketing";

const About = () => {
    return (
        <Box>
            <Container maxW="container.lg">

            <Box p="5" bgImage={BackgroundImg}
            w="100%"
            bgPosition="center">
            <Heading color="orange.400">
                About Us - AWS Cloud Community
            </Heading>
            </Box>

            <Box mt="20" display="flex" flexWrap="wrap" justifyContent="space-evenly">
                <Box>
                <Image w="400px" height="auto" src={ CommunityImg }/>
                </Box>
                <Box>
                    <Text mt="14" maxWidth="auto">
                    The AWS Community LPU offers technical resources, 
                    mentorship, and networking opportunities to AWS 
                    enthusiasts and emerging thought leaders who are 
                    passionate about sharing knowledge and connecting 
                    with the technical community.
                    </Text>
                </Box>
            </Box>

            <Tabs mt="20" colorScheme="orange">
            <TabList>
                <Box display="flex" flexWrap="wrap">
                <Tab fontWeight="600">All Members</Tab>
                <Tab fontWeight="600">Anchoring</Tab>
                <Tab fontWeight="600">Web Developers</Tab>
                <Tab fontWeight="600">Content Developers</Tab>
                <Tab fontWeight="600">Graphics</Tab>
                <Tab fontWeight="600">Technical</Tab>
                <Tab fontWeight="600">Marketing</Tab>
                </Box>
            
            </TabList>
            <TabPanels>

                <TabPanel>
                <AllMembers/>
                </TabPanel>

                <TabPanel>
                <Anchoring/>
                </TabPanel>

                <TabPanel>
                <WebDevelopers/>
                </TabPanel>

                <TabPanel>
                <ContentDevelopers/>
                </TabPanel>

                <TabPanel>
                <Graphics/>
                </TabPanel>

                <TabPanel>
                <Technical/>
                </TabPanel>

                <TabPanel>
                <Marketing/>
                </TabPanel>

            </TabPanels>
            </Tabs>

            </Container>
        </Box>
    );
}
 
export default About;