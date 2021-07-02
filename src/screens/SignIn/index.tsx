import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Image
} from 'react-native';

import { styles } from './styles';

import IllustrationImg from '../../assets/illustration.png';

import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background'


export function SignIn() {
    // const [text, setText] = useState('');
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('Home')
    }

    return (
        <Background>
            <View style={styles.container} >           

                <Image
                    source={IllustrationImg}
                    style={styles.image}
                    resizeMode="stretch"
                />

                <View style={styles.content} >
                    <Text style={styles.title}>
                        Organize {`\n`}
                        e organize suas {`\n`}
                        jogatinas
                    </Text>

                    <Text style={styles.subtitle} >
                        Crie grupos para jpgar seus games {`\n`}
                        favoritos com seus amigos
                    </Text>

                    <ButtonIcon
                        title="Entrar com Discord"
                        activeOpacity={0.7}
                        onPress={handleSignIn}
                    />
                </View>
            </View>
        </Background>
        
    );
}