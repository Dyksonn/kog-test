import { HStack, Text} from 'native-base';

import { Notifications } from '@components/Notifications';


type Props = {
    title: string;
}

export function HomeHeader({ title, ...rest }: Props) {
    
    return (
        <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center" justifyContent="space-between">
            <Text color="gray.100" fontSize="xl" fontFamily="heading" textAlign="center">{title}</Text>

            
            <Notifications />
        </HStack>
    );
}