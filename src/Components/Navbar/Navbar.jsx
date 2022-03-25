import React, { useState, useEffect } from "react";
//import React, { Component }  from 'react';
import "./Navbar.css";
import { Container, Box, Text, Image, IconButton, Center } from "@chakra-ui/react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";
import AWSImage from "../../Assets/Navbar/aws.png";

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [home, setHome] = useState("");
    const [blogs, setBlogs] = useState("");
    const [events, setEvents] = useState("");
    const [quiz, setQuiz] = useState("");
    const [about, setAbout] = useState("");
    const [contact, setContact] = useState("");
    const [recruitment, setRecruitment] = useState("");

    const [sideHome, setSideHome] = useState("");
    const [sideBlogs, setSideBlogs] = useState("");
    const [sideEvents, setSideEvents] = useState("");
    const [sideQuiz, setSideQuiz] = useState("");
    const [sideAbout, setSideAbout] = useState("");
    const [sideContact, setSideContact] = useState("");
    const [sideRecruitment, setSideRecruitment] = useState("");


    useEffect(() => {
        console.log(window.location.pathname);
        switch(window.location.pathname){

            case "/" :
                setHome("home");
                setSideHome("side-home");
            break;

            case "/blogs" :
                setBlogs("blogs");
                setSideBlogs("side-blogs");
            break;

            case "/events" :
                setEvents("events");
                setSideEvents("side-events");
            break;

            case "/quiz" :
                setQuiz("quiz");
                setSideQuiz("side-quiz");
            break;

            case "/about" :
                setAbout("about");
                setSideAbout("side-about");
            break;

            case "/contact" :
                setContact("contact");
                setSideContact("side-contact");
            break;

            case "/recruitment" :
                setRecruitment("recruitment");
                setSideRecruitment("side-recruitment");
            break;

            default: setHome("home");
        }
    },[]);

    function switchIndicator(){
        setTimeout(
            function(){
                window.location.reload();
            },10);
    }

    return (
        <Box>
        <Container display="flex" maxW="container.xl">
            <Link to="/">
            <Image
            mt="1"
                boxSize="70px"
                objectFit="cover"
                src={ AWSImage }
                alt="aws.png"
            /> 
            </Link>

            <Box ml="auto" display={["none", "none", "block"]}>
            <Box mt="4" display="flex">
                <Link onClick={switchIndicator} className={home} to="/">
                <Text mx="3">Home</Text>
                </Link>

                <Link onClick={switchIndicator} className={blogs} to="/blogs">
                <Text mx="3">Blogs</Text>
                </Link>

                <Link onClick={switchIndicator} className={events} to="/events">
                <Text mx="3">Events</Text>
                </Link>

                <Link onClick={switchIndicator} className={quiz} to="/quiz">
                <Text mx="3">Quiz</Text>
                </Link>

                <Link onClick={switchIndicator} className={about} to="/about">
                <Text mx="3">About Us</Text>
                </Link>

                <Link onClick={switchIndicator} className={contact} to="/contact">
                <Text mx="3">Contact Us</Text>
                </Link>

                <Link onClick={switchIndicator} className={recruitment} to="/recruitment">
                <Text mx="3">Recruitment</Text>
                </Link>
            </Box>
            </Box>
            
            <Box ml="auto" mt="3" display={["block", "block", "none"]}>
            <IconButton onClick={onOpen} aria-label="Search database" icon={<HamburgerIcon w={6} h={6} />} />
            </Box>

            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />

                <DrawerBody>
                    <Center>
                    <Image
                    mt="10"
                    boxSize="100px"
                    objectFit="cover"
                    src={ AWSImage }
                    alt="aws.png"
                    /> 
                    </Center>
                    
                    <Box fontSize="xl">
                    <Center>
                        <Link onClick={switchIndicator} to="/">
                        <Text className={sideHome} my="3">Home</Text>
                        </Link>
                    </Center>
                    <Center>
                        <Link onClick={switchIndicator} to="/blogs">
                        <Text className={sideBlogs} my="3">Blogs</Text>
                        </Link>
                    </Center>
                    <Center>
                        <Link onClick={switchIndicator} to="/events">
                        <Text className={sideEvents} my="3">Events</Text>
                        </Link>
                    </Center>
                    <Center>
                        <Link onClick={switchIndicator} to="/quiz">
                        <Text className={sideQuiz} my="3">Quiz</Text>
                        </Link>
                    </Center>
                    <Center>
                        <Link onClick={switchIndicator} to="/about">
                        <Text className={sideAbout} my="3">About Us</Text>
                        </Link>
                    </Center>
                    <Center>
                        <Link onClick={switchIndicator} to="/contact">
                        <Text className={sideContact} my="3">Contact Us</Text>
                        </Link>
                    </Center>
                    <Center>
                        <Link onClick={switchIndicator} to="/recruitment">
                        <Text className={sideRecruitment} my="3">Recruitment</Text>
                        </Link>
                    </Center>
                    </Box>

                </DrawerBody>

                <DrawerFooter>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>


            </Container>
        </Box>
    );
}
 
export default Navbar;