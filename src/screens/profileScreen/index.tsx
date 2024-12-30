import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from '../../assets'
import { useNavigation } from '@react-navigation/native'
import strings from '../../utils/strings'

const Profile = ({ route }: any) => {

  const navigation = useNavigation();

  const email = route?.params?.email || "neelesh@example.com";

  const accountData = [
    { id: 1, title: "My account", icon: Icon.profile },
    { id: 2, title: "My membership", icon: Icon.king },
    { id: 3, title: "Workspaces", icon: Icon.briefcase },
    { id: 4, title: "Tutorial video", icon: Icon.video },
    { id: 5, title: "App help", icon: Icon.question },
    { id: 6, title: "Sign out", icon: Icon.logout },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header1} onPress={() => navigation.goBack()}>
        <Image source={Icon.left_arrow} style={styles.leftarrow} />
      </TouchableOpacity>
      <View style={styles.profileData}>
        <Image
          source={{ uri: "https://lh3.googleusercontent.com/a/ACg8ocJNBuMQBS4T_K_Ivc2SvLGGHA0M4GHcdEYRrysgiwjnoEf1ww=s96-c" }}
          style={styles.profileImage}
        />
        <View style={styles.profileText}>
          <Text style={styles.emailText}>{email}</Text>
          <Text style={styles.freeText}>{strings.FreeMember}</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.details}>
          {accountData.map((item) => (
            <TouchableOpacity key={item.id} style={styles.detailsAccount} onPress={() => {
              switch (item.id) {
                case 1:
                  navigation.navigate('account');
                  break;
              }
            }}>
              <Image source={item.icon} style={styles.profileImage2} />
              <Text style={styles.myAccountText}>{item.title}</Text>
              <Image source={Icon.right_arrow} style={styles.rightarrow} />
            </TouchableOpacity>
          ))}

          <View style={styles.term}>
            <Text style={styles.serviceText}>{strings.termPolicy}</Text>
            <Text style={styles.versionText}>{strings.versinon}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Profile;