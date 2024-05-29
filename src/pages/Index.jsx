import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";
import { FaHome, FaUserAlt, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} mb={8} borderRadius="md">
        <HStack spacing={8}>
          <Link href="/" _hover={{ textDecoration: "none" }}>
            <HStack>
              <FaHome />
              <Text>Home</Text>
            </HStack>
          </Link>
          <Link href="#about" _hover={{ textDecoration: "none" }}>
            <HStack>
              <FaUserAlt />
              <Text>About</Text>
            </HStack>
          </Link>
          <Link href="#contact" _hover={{ textDecoration: "none" }}>
            <HStack>
              <FaEnvelope />
              <Text>Contact</Text>
            </HStack>
          </Link>
        </HStack>
        <Spacer />
        <Heading size="md">My Blog</Heading>
      </Flex>

      {/* Main Content Area */}
      <Flex direction={{ base: "column", md: "row" }} align="start">
        {/* Blog Posts */}
        <Box flex="3" p={4}>
          <VStack spacing={8} align="start">
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" w="full">
              <Heading fontSize="xl">First Blog Post</Heading>
              <Text mt={4}>This is the content of the first blog post.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" w="full">
              <Heading fontSize="xl">Second Blog Post</Heading>
              <Text mt={4}>This is the content of the second blog post.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" p={4} bg="gray.50" borderRadius="md" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading size="md" mb={4}>About Me</Heading>
          <Text mb={4}>This is a brief description about the blog author.</Text>
          <Heading size="md" mb={4}>Categories</Heading>
          <VStack align="start">
            <Link href="#category1" _hover={{ textDecoration: "none" }}>Category 1</Link>
            <Link href="#category2" _hover={{ textDecoration: "none" }}>Category 2</Link>
            <Link href="#category3" _hover={{ textDecoration: "none" }}>Category 3</Link>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;