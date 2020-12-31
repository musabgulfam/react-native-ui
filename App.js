import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const App = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.profileView}>
        <View style={styles.image}> 
          <Image source={require('./assets/avatar.png')} style={styles.profilePic} />
        </View>
        <Text style={styles.profileName}>Elena Grande</Text>
        <Text style={styles.accountName}>@Elena Grande</Text>
        <View style={styles.accountStatus}>
          <View style={styles.post}>
            <View style={styles.postImage}>
              <Image source={require('./assets/posts.png')} />
            </View>
            <Text style={styles.postText}>600 posts</Text>
          </View>
          <View style={styles.friend}>
            <View style={styles.postImage}>
              <Image source={require('./assets/friends.png')} />
            </View>
            <Text style={styles.postText}>905 friends</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonView}>
        <View style={styles.parent}>
          <View style={styles.addFriend}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Add friend</Text>
          </View>
          <View style={styles.msg}>
            <Image source={require('./assets/messages.png')} />
          </View>
          <View style={styles.dots}>
            <Image source={require('./assets/more.png')} />
          </View>
        </View>
      </View>
      <View style={styles.tabView}>
        <View>
          <View style={styles.parentV}>
            <View style={styles.child1}>
              <Text style={{color: '#0EBAFF'}}>Posts</Text>
            </View>
            <View style={styles.child2}>
              <View style={styles.postImage}>
                <Image source={require('./assets/photos.png')} />
              </View>
              <Text style={{marginLeft: 10}}>Photos</Text>
            </View>
          </View>
          <View style={{height: '100%', borderRadius: 20, backgroundColor: '#b6edfa'}}>
            <View style={{flexDirection: 'row', marginTop: 20, paddingHorizontal: 20}}>
              <Image source={require('./assets/avatar.png')} style={{width: 50, height: 50}} />
              <View style={{flexDirection: 'column', paddingHorizontal: 10, justifyContent: 'center'}}>
                <Text style={{fontWeight: 'bold'}}>Elene Grande</Text>
                <Text style={{color: '#B3C1CE', fontSize: 11}}>5 mins ago</Text>
              </View>
              <View style={{position: 'absolute', right: 20, marginTop: 5}}>
                <Image source={require('./assets/more.png')} />
              </View>
            </View>
            <View style={{paddingHorizontal: 20, marginTop: 10}}>
              <Text style={{paddingVertical: 5}}>I love my baby</Text>
              <View>
                <Image source={require('./assets/dog.png')}/>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginTop: 4}}>
                    <Image source={require('./assets/likes.png')} />
                  </View>
                  <Text style={{paddingHorizontal: 5, marginTop: 2}}> 99 Likes</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginTop: 4}}>
                    <Image source={require('./assets/comments.png')} />
                  </View>
                  <Text style={{paddingHorizontal: 5, marginTop: 2}}> 90 comments</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginTop: 4}}>
                    <Image source={require('./assets/share.png')} />
                  </View>
                  <Text style={{paddingHorizontal: 5, marginTop: 2}}>Share</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#E9F9FF'
  },
  profileView: {
    flex: 2.5,
    flexDirection: 'column'
  },
  buttonView: {
    flex: 0.8,
    flexDirection: 'row',
    //padding: 5,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  tabView: {
    flex: 4.3,
  },
  image: {
    alignItems: 'center',
    marginTop: 20,
    padding: 10
  },
  profilePic: {
    borderRadius: 6
  },
  profileName: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  accountName: {
    color: 'grey',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 2
  },
  accountStatus: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    justifyContent: 'space-around',
  },
  post: {
    width: '40%',
    height: 35,
    backgroundColor: '#F4F5F7',
    flexDirection: 'row',
    borderRadius: 6,
  },
  friend: {
    width: '40%',
    height: 35,
    backgroundColor: '#F4F5F7',
    flexDirection: 'row',
    borderRadius: 6
  },
  postImage: {
    justifyContent: 'center',
    marginLeft: 20
  },
  postText: {
    color: '#8993A5',
    marginLeft: 7,
    marginTop: 5
  },
  addFriend: {
    width: '60%',
    height: 50,
    backgroundColor: '#0EBAFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  msg: {
    width: '15%',
    height: 50,
    backgroundColor: '#F4F5F7',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dots: {
    width: '15%',
    height: 50,
    backgroundColor: '#F4F5F7',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  parent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  parentV: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    paddingHorizontal: 25
  },
  child1: {
    width: '45%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderLeftColor: '#E9F9FF',
    borderTopColor: '#E9F9FF',
    borderRightColor: '#E9F9FF',
    borderBottomColor: '#0EBAFF'
  },
  child2: {
    width: '45%',
    height: 60,
    borderBottomColor: '#0EBAFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});