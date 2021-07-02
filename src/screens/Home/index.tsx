import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background'

import { styles } from './styles';


export function Home() {
    const [category, setCategory] = useState('');

    const navigation = useNavigation();

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'Hoje é o dia de fazer grandes coisa para todos'
        },
        {
            id: '2',
            guild: {
                id: '2',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'Hoje é o dia de fazer grandes coisa para todos'
        },
        {
            id: '3',
            guild: {
                id: '3',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'Hoje é o dia de fazer grandes coisa para todos'
        },
        {
            id: '4',
            guild: {
                id: '3',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'Hoje é o dia de fazer grandes coisa para todos'
        },
        {
            id: '5',
            guild: {
                id: '3',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'Hoje é o dia de fazer grandes coisa para todos'
        },
        {
            id: '6',
            guild: {
                id: '3',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'Hoje é o dia de fazer grandes coisa para todos'
        },
        {
            id: '7',
            guild: {
                id: '3',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'Hoje é o dia de fazer grandes coisa para todos'
        }
    ];

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails');
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate');
    }

    return (
        <Background>
            <View style={styles.header} >
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>

            <CategorySelect 
                CategorySelected={category}
                setCategory={handleCategorySelect}
                
            />


            <ListHeader
                title="Partidas Agendadas"
                subtitle="Total 6"
            />

            <FlatList 
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Appointment 
                        data={item}
                        onPress={handleAppointmentDetails}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                contentContainerStyle={{paddingBottom: 69}}
                style={styles.matches}
                showsVerticalScrollIndicator={false}

            />

        </Background>
    );
}