import React from 'react'
import {FlatList} from 'react-native'
import propertiesDB from '../Data/data.json'
import { Card } from './Card'

export function CardList() {
    const renderPropertyCard = ({item}: {item: any}) => (
        <>
            <Card property={item}/>
        </>
    );

    return (
        <FlatList
            data = { propertiesDB }
            renderItem = {renderPropertyCard}
            keyExtractor= {(item: any) => item.Id.toString()}
            horizontal = {false}
        />
    )
}
