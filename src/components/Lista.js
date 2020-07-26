import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card, Button } from 'react-native-elements';
import Formulario from './Formulario';

const Lista = (props) => {

    const [screen, setScreen] = useState(props.screenName)
    const [list, setList] = useState([])
    const [id, setId] = useState('')
    const [taskEdit, setTaskEdit] = useState('')
    const [editionMode, setEditionMode] = useState(false)

    const setSwitch = (screenName) => {
        setScreen(screenName)

    }

    const setListReceived = (list) => {
        setList(list)
        console.log('Final List: ' + list)
    }

    const setEditionModeF = (value) => {
        setEditionMode(value)
    }   

    const deleteTask = (id) => {
        const filterList = list.filter(item => item.id !== id)
        filterList.forEach(item => console.log('Array Filtrado: ', item.taskName))
        setList(filterList)
    }
    

    return (

        <View style={style.listContainer}>
            <ScrollView>
                {
                    screen == 'Lista' ? (
                        list.length > 0 ?
                            list.map((item) => (
                                <Card key={item.id}>
                                    <Text style={style.cards}>{item.taskName}</Text>
                                    <View style={style.deleteButton}>
                                        <Button title="Edit" buttonStyle={{backgroundColor: 'gold', marginRight: 5, width: 70}}  onPress={() => {setId(item.id), setTaskEdit(item.taskName),setEditionMode(true), setSwitch('Formulario')}}/>
                                        <Button title="Delete" buttonStyle={{backgroundColor: 'red', width: 70}}  onPress={() => {deleteTask(item.id)}}/>
                                    </View>
                                </Card>
                            ))
                            :
                            <Card>
                                <Text style={style.cardOne}>There are not tasks :)</Text>
                            </Card>
                    ) :

                        (<Formulario listState={list} switchScreen={setSwitch} receiveList={setListReceived}  id={id} taskEdit={taskEdit} editionModeParameter= {editionMode}  receiveEditionMode= {setEditionModeF}/>)
                }
            </ScrollView>

            {
                screen == 'Lista' ? (
                    <View style={style.buttonContainer}>
                        <Button title="Create a new task" onPress={() => { setSwitch('Formulario') }} />
                    </View>
                ) : null
            }

        </View>


    )
}

export default Lista;

const style = {
    listContainer: {
        flex: 1
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
        alignSelf: 'flex-end',
        padding: 5
    },
    deleteButton: {
        width: 65,    
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginRight: 80
    }
}
