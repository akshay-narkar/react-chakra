
// import './App.css';
// import { Switch } from '@chakra-ui/react'
// import { Stack, HStack, VStack } from '@chakra-ui/react'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { Box, Image, Flex, Badge, Text } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";

 import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'



export default function Example() {
  return (
    <Box p="5" maxW="320px" borderWidth="1px">
      <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
      <Flex align="baseline" mt={2}>
        <Badge colorScheme="pink">Plus</Badge>
        <Text
          ml={2}
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="bold"
          color="pink.800"
        >
          Verified &bull; Cape Town
        </Text>
      </Flex>
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        Modern, Chic Penthouse with Mountain, City & Sea Views
      </Text>
      <Text mt={2}>$119/night</Text>
      <Flex mt={2} align="center">
        <Box as={MdStar} color="orange.400" />
        <Text ml={1} fontSize="sm">
          <b>4.84</b> (190)
        </Text>
      </Flex>
    </Box>
  );
}


// function App() {
//   return (
//     <>
//     <PhoneIcon />

// // Use the `boxSize` prop to change the icon size
// <AddIcon w={6} h={6} />

// // Use the `color` prop to change the icon color
// <WarningIcon w={8} h={8} color="red.500" />
//   <BootstrapSwitchButton checked={true} size="lg" />

//       <PhoneIcon/>
//     <div className="App">
//       Akshay
       
//  </div>
//  </>
//   );
// }

// export default App;

// const initstate = {
//   teams: [],
//   teaminfo: [],
// };

// const store = createStore(rootReducer, {
//   teamupdatereducer: initstate,
//   teamdeetsReducer: initstate,
// }, applyMiddleware(thunk));

// store.dispatch(apicall);

// export default App;