import { useState, useEffect } from 'react';
import { FlatList, Icon, Popover, VStack, Text } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

type notificationsProps = {
    title: string;
    body: string;
    id: number;
    userId: number;
}

export function Notifications() {
    const [isOpen, setIsOpen] = useState(false);
    const [notifications, setNotifications] = useState<notificationsProps[]>([]);
    const [selectedId, setSelectedId] = useState<null|number>(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then((response) => response.json())
            .then((json) => setNotifications(json));
    }, [])

    return (
        <Popover
            placement="bottom left"
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            trigger={triggerProps => {
                return (
                    <TouchableOpacity {...triggerProps} onPress={() => setIsOpen(true)}>
                        <Icon 
                            as={Ionicons}
                            name="notifications-outline"
                            color="green.400"
                            size={6}
                        />
                    </TouchableOpacity>
                );
            }}
        >
            <Popover.Content w="80" h={500} borderColor="green.400">
                <Popover.Arrow bg="gray.600" borderColor="green.400" />
                <Popover.CloseButton onPress={() => setIsOpen(false)} />
                <Popover.Header bg="gray.600" borderColor="green.400" _text={{
                    color: 'gray.200',
                    fontSize: 'lg'
                }}>Notificações</Popover.Header>
                <Popover.Body bg="gray.600">
                    <FlatList 
                        data={notifications}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        _contentContainerStyle={{
                            pb: 24
                        }}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => setSelectedId(prevState => prevState === item.id ? null : item.id)}>
                                <VStack py={4} borderBottomWidth={1} borderBottomColor="gray.500">
                                    <Text color="gray.200">{item.title}</Text>
                                    <Text color="gray.300" numberOfLines={selectedId === item.id ? 0 : 2}>{item.body}</Text>
                                </VStack>
                            </TouchableOpacity>
                        )}
                    />
                </Popover.Body>
            </Popover.Content>
        </Popover>
    );
}