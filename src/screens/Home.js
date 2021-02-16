import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Card from '../components/Card';
import Icon from 'react-native-vector-icons/FontAwesome';

import picture from '../assets/egg.jpg';

class Home extends React.Component {
  state = {
    styling: {
      width: Dimensions.get('screen').width / 2 - 45,
      height: Dimensions.get('screen').width / 2 - 45,
    },
  };
  componentDidMount() {
    Dimensions.addEventListener('change', ({screen}) => {
      const deviceWidth = Dimensions.get('screen').width / 2 - 45;
      this.setState({
        styling: {
          width: deviceWidth,
          height: deviceWidth,
        },
      });
    });
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.info}>
          {/*<View style={styles.profilePicture} />*/}
          <Image source={picture} style={styles.profilePicture} />
          <View style={styles.profileText}>
            <Text style={styles.profileName}>Kanye West</Text>
          </View>
        </View>
        <View style={styles.grid}>
          <View style={styles.row}>
            {/* <View style={[styles.phoneNumber, styles.card]}>
              <Text style={styles.cardTitle}>Your phone number</Text>
              <Text style={styles.cardText}>+1 234 567 89</Text>
            </View>*/}
            <Card style={styles.phoneNumber}>
              <Text style={styles.cardTitle}>Your phone number</Text>
              <Text style={styles.cardText}>+1 234 567 89</Text>
            </Card>
            <View style={[styles.points, styles.card]}>
              <Text style={styles.cardTitle}>Points</Text>
              <Text style={styles.cardText}>316</Text>
            </View>
          </View>
          <View>
            <View style={[styles.row, styles.spaceBetween]}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Balance')}>
                <View
                  style={[
                    styles.card,
                    styles.contentGrid,
                    this.state.styling,
                    styles.selected,
                  ]}>
                  <Text style={[styles.cardTitle, styles.whiteText]}>
                    Balance
                  </Text>
                  <Text style={[styles.cardText, styles.whiteText]}>$ 60</Text>
                  <View style={styles.row}>
                    <Text style={[styles.cardInfo, styles.whiteText]}>
                      Updated at 15.37
                    </Text>
                    <View style={styles.cardIcon}>
                      <Icon name="refresh" size={25} color="red" />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View
                style={[styles.card, styles.contentGrid, this.state.styling]}>
                <Text style={styles.cardTitle}>Calls</Text>
                <Text style={styles.cardText}>
                  168 <Text style={styles.smallText}>minutes</Text>
                </Text>
              </View>
            </View>
            <View style={[styles.row, styles.spaceBetween]}>
              <View
                style={[styles.card, styles.contentGrid, this.state.styling]}>
                <Text style={styles.cardTitle}>Internet</Text>
                <Text style={styles.cardText}>
                  16 <Text style={styles.smallText}>GB</Text>
                </Text>
              </View>
              <View
                style={[styles.card, styles.contentGrid, this.state.styling]}>
                <Text style={styles.cardTitle}>Messages</Text>
                <Text style={[styles.cardText, styles.bigText]}>∞</Text>
              </View>
            </View>
            {[...Array(20)].map(() => {
              return (
                <View style={[styles.card, {marginVertical: 10}]}>
                  <View style={styles.row}>
                    <View style={styles.cardLogo} />
                    <View style={styles.cardContent}>
                      <Text style={styles.cardTitle}>Discount up to</Text>
                      <Text style={styles.cardText}>20%</Text>
                      <Text style={styles.cardTextRed}>4 days remaining</Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  centerize: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  card: {
    elevation: 3,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 15,
    justifyContent: 'space-between',
  },
  cardLogo: {
    width: 100,
    backgroundColor: 'purple',
    marginRight: 20,
  },
  cardContent: {
    flex: 1,
  },
  cardTextRed: {
    color: 'red',
  },
  smallText: {
    color: '#888',
    fontSize: 12,
  },
  bigText: {
    fontSize: 20,
  },
  selected: {
    backgroundColor: 'red',
  },
  whiteText: {
    color: 'white',
  },
  cardTitle: {
    color: '#888',
  },
  cardText: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  cardInfo: {
    color: '#888',
    fontSize: 13,
    flex: 1,
  },
  cardIcon: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstCard: {
    marginRight: 40,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  spaceBetween: {
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    flex: 1,
  },
  phoneNumber: {
    flex: 1,
    justifyContent: 'space-between',
  },
  points: {
    marginLeft: 20,
    width: 80,
    height: 80,
    justifyContent: 'space-between',
  },
  contentGrid: {
    width: Dimensions.get('screen').width / 2 - 60,
    height: Dimensions.get('screen').width / 2 - 60,
  },
  info: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  profileText: {
    marginLeft: 10,
    // backgroundColor: 'green',
    flex: 1,
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
});

export default Home;
