import React, { useState } from 'react'
import {View, Text, StyleSheet, Image, useColorScheme, TouchableOpacity} from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Property } from '../Interfaces/Properties';

interface Props {
    property: Property
}

export const Card = ({property } : Props) => {
    const isDarkMode = useColorScheme() === 'dark';

    const darkMode = {
        backgroundColor: isDarkMode ? styles.bgDark : styles.bgWhite,
        color: isDarkMode ? styles.titleWhite : styles.textDark,
    }

    const textGrayMode = {
        color: isDarkMode ? '#FFF' : '#000'
    }

    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
    };
    
    const uri = property.ImgURL;

 return (
   <View style={[styles.container, darkMode.backgroundColor]}>
     <View style={[styles.imageContainer]}>
        <Image style={styles.image} source={{uri}}/>
        <View style={styles.ratingContainer}>
            <Icon name="star" size={13} color= '#EEBA00' />
            <Text style={[styles.textRating]}>{property.Rating}</Text>
        </View>
     </View>
     <View style={styles.infoContainer}>
        <Text style={[styles.title, darkMode.color]}>{property.Name}</Text>
        <View style={styles.firstSectionInfo}>
            <Icon name="map-marker" size={20} color= '#808181' style={styles.right} />
            <Text style={[styles.textAddress, {color:'#808181'}]}>{property.Address}</Text>
        </View>
        <View style={styles.secondSectionInfo}>
            <Icon name="bed" size={20} color= '#808181' />
            <Text style={[styles.textQuantity, styles.left, textGrayMode]}>{property.Rooms}</Text>
            <Icon name="bath" size={20} color= '#808181' />
            <Text style={[styles.textQuantity, styles.left, textGrayMode]}>{property.Bathrooms}</Text>
            <Icon name="building-o" size={20} color= '#808181' />
            <Text style={[styles.textQuantity, styles.left, textGrayMode]}>{property.Area} ft&sup2;</Text>
        </View>
        <View style={styles.thirdSectionInfo}>
            <Text style={[styles.title, darkMode.color]}>${property.MontlyRental}/m</Text>
                <TouchableOpacity onPress={handlePress}>
                    <View style={styles.cirle}>
                            <Icon name="heart" size={15} color= {isPressed ? '#FF1493' :'#FFF'}/> 
                    </View>
                </TouchableOpacity>
        </View>
     </View>
   </View>
 )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,  
        flexDirection: 'row',  
        padding: 16,
        marginVertical: wp('2%'),
        borderRadius: 10,
        justifyContent: 'space-evenly',
        marginHorizontal: wp('5%'),
    },
    imageContainer: {
        flex: 1,
        borderRadius: 10,
        borderWidth: 0.1,
        marginRight: wp('3%')
    },
    image : {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 10
    },
    infoContainer: {
        flex: 2,
        justifyContent: 'space-between',
    },
    firstSectionInfo: {
        flexDirection: 'row'
    },
    secondSectionInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    thirdSectionInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        width: 20,
        height: 20
    },
    cirle: {
        backgroundColor: '#00B074',
        width: 30,
        height: 30,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        top: 5
    },
    title: {
        fontSize: 20,
        fontWeight: '500'
    },
    textAddress: {
        fontSize: 15,
        fontWeight: '400'
    },
    textQuantity: {
        fontSize: 15, 
        fontWeight: '800',
    },
    right: {
        marginRight: wp('2%')
    },
    left: {
        left: wp('-2%')
    },
    titleWhite: {
        color: '#FFF'
    },
    textWhite: {
        color: '#808181'
    },
    textRating: {
        color: '#927C44',
        fontWeight: '900'
    },
    textDark: {
        color: 'black'
    },
    bgWhite: {
        backgroundColor: '#F5FDFF',
        borderColor: '#8fa3a8',
        borderWidth: 0.1,
    },
    bgDark: {
        backgroundColor: '#20232A'
    },
    ratingContainer: {
        width: wp('12%'), 
        height: wp('6%'),
        backgroundColor: '#FBEDB7',
        position: 'absolute',
        bottom: wp('1.5%'),
        left: wp('7%'),
        borderRadius: 15,
        borderWidth: 0.1,
        borderColor: '#8A743B',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center'
    }
})