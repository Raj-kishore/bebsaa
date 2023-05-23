import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import {
  Text
} from 'react-native';
import Paragraph from '../components/Paragraph'
//redux 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//actions
import { changeCount } from '../actions/counts';


function StartScreen({ navigation, ...props }) {

  React.useEffect(() => {
    console.log("next ", props);
  }, []);
  //redux state handlers test
  const decrementCount = () => {
    let { count, decreaseBy } = props;
    let c = count.count;
    c--;
    decreaseBy(c);
  }
  const incrementCount = () => {
    let { count, increaseBy } = props;
    let c = count.count;
    c++;
    increaseBy(c);
  }


  return (
    <Background>
      <Logo />
      <Header>Delivery App</Header>
      <Paragraph>
        Join India's best part time Delivery job
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => {

          console.log("test ..");
          navigation.navigate('LoginScreen')
        }}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>

      <Button
        mode="outlined"
        onPress={incrementCount}
      >Add</Button>

      <Text>{JSON.stringify(props.count)}</Text>
      <Button
        mode="outlined"
        onPress={decrementCount}
      >Subtract</Button>
      {/* <Button
        title="decrement"
        onPress={decrementCount}
      />  */}

    </Background>
  )
}


const mapStateToProps = (state) => ({
  count: state.count,
});

// const ActionCreators = Object.assign(
//   {},
//   changeCount,
// );

const mapDispatchToProps = (dispatch) => {
  return {
    increaseBy: (param) => {
      dispatch(changeCount(param))
    },
    decreaseBy: (param) => {
      dispatch(changeCount(param))
    }
  }
};


// export default StartScreen;
export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);
