import { HomeHeader } from "@components/HomeHeader";
import { Center, Heading, Text, VStack} from "native-base";

export function Home() {
    return (
        <VStack flex={1}>
            <HomeHeader title="Home" />

            <Center flex={1}>
                <Heading color="green.500" fontFamily="heading">Logged</Heading>
                <Text color="gray.300" my={4} fontFamily="body" fontSize="sm" textAlign="center">
                    Clique no sino para visualizar suas notificações
                </Text>
            </Center>
        </VStack>
    );
}