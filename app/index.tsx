import { Button, ButtonText } from '@/components/ui/button';
import { Text, View } from 'react-native';

export default function Login() {
    return (
        <View className='flex-1 h-screen'>
            <Text>Teste!</Text>
            <Button size="md" variant="solid" action="primary">
                <ButtonText>Botão</ButtonText>
            </Button >
        </View >
    )
}