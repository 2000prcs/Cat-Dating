import React, { Component } from 'react';
import { View, ImageBackground, AppRegistry } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import { Root } from 'native-base';
import Home from './src/components/Home';
import Login from './src/components/Login';
import Question from './src/components/Question';
import Type from './src/components/Type';
import Cat from './src/components/Cat';
import Action from './src/components/Action';
import EndingIntro from './src/components/EndingIntro';
import Ending from './src/components/Ending';


export default class App extends Component {

  render() {
    return (
      <Root>
        <NativeRouter>
          <ImageBackground
            style={{
              // position: 'absolute',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
            }}
            source={require('./src/images/intro.jpg')}
          >
          <View
            style={{ flex: 1, justifyContent: 'center' }}>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/question' component={Question} />
                <Route exact path='/type' component={Type} />
                <Route exact path='/cat' component={Cat} />
                <Route exact path='/action' component={Action} />
                <Route exact path='/endingintro' component={EndingIntro} />
                <Route exact path='/ending' component={Ending} />
              </Switch>
          </View>
          </ImageBackground>
        </NativeRouter>
      </Root>

    );
  }
}

AppRegistry.registerComponent('CatDatingGame', () => App);
