import { useNavigation } from "@react-navigation/native";
import { VStack, Center, Text, Heading, ScrollView } from 'native-base';
import { useForm, Controller } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { AuthNavigationRoutesProps } from "@routes/app.routes";

import { Input } from '@components/Input';
import { Button } from '@components/Button';

type FormDataProps = {
    email: string;
    password: string;
}

const schemaSignIn = yup.object({
    email: yup.string().required("Informe e-mail").email("Informe um e-mail válido"),
    password: yup.string().required("Informe senha").min(6, 'A senha deve ter pelo menos 6 digitos'),
});

export function SignIn() {
    const { 
        control, 
        handleSubmit,
        formState: { errors }
    } = useForm<FormDataProps>({
        resolver: yupResolver(schemaSignIn)
    });

    const navigation = useNavigation<AuthNavigationRoutesProps>();

    function handleAccessHome(data: FormDataProps) {
        navigation.navigate('Home');
    }

    return (
        <ScrollView 
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}
        >
            <VStack flex={1} px={10} pb={16}>
                <Center my={24}>
                    <Text color="gray.100" fontSize="lg">Kognit</Text>
                </Center>

                <Center>
                    <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
                        Acesse sua conta
                    </Heading>

                    <Controller 
                        control={control}
                        name="email"
                        render={({field: { onChange, value}}) => (
                            <Input 
                                placeholder='E-mail' 
                                keyboardType='email-address'
                                autoCapitalize='none'
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.email?.message}
                            />
                        )}
                    />

                    <Controller 
                        control={control}
                        name="password"
                        render={({field: { onChange, value}}) => (
                            <Input 
                                placeholder='Senha' 
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.password?.message}
                            />
                        )}
                    />

                    <Button 
                        title="Acessar" 
                        onPress={handleSubmit(handleAccessHome)}
                    />
                </Center>

                <Center mt={24}>
                    <Text
                        color="gray.100"
                        fontSize="sm"
                        mb={3}
                        fontFamily="body"
                    >
                        Ainda não tem acesso?
                    </Text>
                    <Button 
                        title="Criar conta" 
                        variant="outline" 
                    />
                </Center>
            </VStack>
        </ScrollView>
    );
}