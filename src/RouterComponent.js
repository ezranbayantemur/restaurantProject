import React from 'react'
import { Scene, Router } from 'react-native-router-flux';
import { CategoryPage, DetailPage, FoodPage} from './pages'

const RouterComponent = () => {
    return(
        <Router>
            <Scene key='scene'>
                <Scene key='categories' component={CategoryPage} hideNavBar={true} initial /> 
                <Scene key='foods' component={FoodPage} hideNavBar={true}  />
                <Scene key='details' component={DetailPage} hideNavBar={true}   />
            </Scene>
        </Router>
    );
}

export default RouterComponent;