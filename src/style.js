import { Dimensions } from 'react-native'
export default styles = {
    // CATEGORY PAGE
    swipperStyle : {
        width : Dimensions.get("window").width, 
        height: Dimensions.get("window").height * 0.4 
      },
      imageStyle : {
        flex: 1,
        width : Dimensions.get("window").width, 
        height: Dimensions.get("window").height * 0.4,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row'
      },
      loadningView : { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      activityStyle : {
        alignSelf: 'center',
        marginTop: 20 
      },
      loadingText : { 
        marginTop: 25 ,
        color: 'white',
        fontSize: 50,
        fontFamily: 'sans-serif-thin'
       },

    // FOOD PAGE
    foodStyle : {
        flex : 1,
        flexWrap : 'wrap',
        flexDirection : 'row',
        paddingTop : 10
    },
    loadingText : { 
        marginTop: 25 ,
        color: 'white',
        fontSize: 50,
        fontFamily: 'sans-serif-thin'
    },

    // DETAIL PAGE
    textStyle: {
        fontFamily: 'sans-serif-thin',
        fontSize : 25,
        fontWeight: 'bold',
        color: 'white',
    },
    header: {
        alignItems: 'flex-start',
        margin: 25,
    },



    // HEADER
    headertextStyle: {
        color: 'white',
        fontSize: 27,
        fontFamily: 'shadowsIntoLight',
    },
    viewStyle: {
        flexDirection: 'row',
        height: 45,
        backgroundColor: '#03a9f4',
        justifyContent: 'space-around',
        alignItems: 'center',
        elevation: 10,
    },
    // SUBHEADER
    subviewStyle: {
        flexDirection: 'column',
        height: 50,
        backgroundColor: '#0288d1',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10
    },
    subtextStyle: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'sans-serif-thin'
    },
    // DETAIL HEADER
    detailviewStyle: {
        flexDirection: 'column',
        height: 50,
        backgroundColor: '#0288d1',
        justifyContent: 'center',
        alignItems: 'flex-start',
        elevation: 10
        
    },
    detailtextStyle: {
        color: 'white',
        fontSize: 35,
        fontFamily: 'sans-serif-thin',
        fontWeight: 'bold',
        paddingLeft: 10 
    },



    // CATEGORY CARD
    categoryimageStyle : {
        height: 190
    },
    categoryviewStyle : {
       borderTopWidth: 3,
       borderColor: '#03a9f4'
    },
    categorynameStyle : {
        color: 'white',
        fontSize: 30,
        fontFamily: 'sans-serif-thin'
    },
    categorydetailStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.5)'
    },

    // FOOD CARD
    foodviewStyle : {
        margin : 10
    },
    foodimageStyle : {
        height: 190,
        width: Dimensions.get('window').width * 0.46,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    foodnameStyle : {
        color: 'white'
    },
    foodpriceStyle : {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    fooddetailStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
}