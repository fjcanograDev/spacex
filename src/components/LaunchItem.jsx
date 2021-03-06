import { HiCalendar } from "react-icons/hi";
import dayjs from "dayjs";
import { Box, Button, Tag, Text, Spacer, Flex, Icon } from '@chakra-ui/react';
import "dayjs/locale/es";

export function LaunchItem(launch){
    return(
            <Box  bg="gray.100" p={4} m={4} borderRadius="lg"
            >
                <Flex fontSize="2x1">
                    <Text fontSize="2x1"> 
                    Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                    </Text>
                    <Spacer/>
                    <Tag p={2} colorScheme={launch.launch_success ? "green":"red"}>
                        {launch.launch_success ? "Success" :"Failure"}
                    </Tag>
                </Flex>
                <Flex align="center">
                    <Icon as={HiCalendar} color="gray.500" />
                    <Text fontSize="sm" ml={1} color="gray.500">
                    {dayjs(launch.launch_date_local).locale("es").format("D MMMM, YYYY")}
                    </Text>
                </Flex>
                <Button mt={2} colorScheme="blue"> More details...</Button>
            </Box>        
    );
}