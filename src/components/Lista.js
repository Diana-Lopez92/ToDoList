import React, { useState } from 'react'
import { View, FlatList, Text } from 'react-native'
import { Card, Button } from 'react-native-elements';
import Formulario from './Formulario';

const Lista = (props) => {

    const [screen, setScreen] = useState(props.screenName)

    const renderScreen = () => {
        return screen == 'Lista' ? (<Lista />) : <Formulario switchScreen={setSwitch} />;
    }

    const setSwitch = (screenName) => {
        setScreen(screenName)

    }

    const setListReceived = (list) => {
        setList(list)
        console.log('Final List: ' + list)
    }

    const [list, setList] = useState([])
    const [newTask, setNewTask] = useState(false)
    const [mainScreen, setMainScreen] = useState(true)

    console.log('Task: ' + newTask);
    console.log('Screen: ' + mainScreen);


    return (

        <View style={style.listContainer}>
            {
                screen == 'Lista' ? (
                    list.length > 0 ?
                        <FlatList
                            data={list} renderItem={({ item }) => (
                                <Card>
                                    <Text style={style.cards}>{item}</Text>
                                </Card>
                            )}
                            keyExtractor={(item, index) => {
                                return index.toString();
                            }}>
                        </FlatList>
                        :
                        <Card>
                            <Text style={style.cardOne}>There are not tasks :)</Text>
                        </Card>
                ) :

                    (<Formulario listState={list} switchScreen={setSwitch} receiveList={setListReceived} />)


            }

            {
                screen == 'Lista' ? (
                    <View style={style.buttonContainer}>
                        <Button title="Create a new task" onPress={() => { setNewTask(true), setMainScreen(false), setSwitch('Formulario') }} />
                    </View>
                ) : null
            }





        </View>



    )
}

export default Lista;

const style = {
    listContainer: {
        marginTop: 30,
        alignSelf: 'stretch'
    },
    cards: {
        fontSize: 20,
        width: 1000
    },
    cardOne: {
        fontSize: 20,
        width: 300
    },
    buttonContainer: {
        marginTop: 150
    },
}
