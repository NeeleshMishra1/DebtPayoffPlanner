import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '../../assets';
import styles from './style';
import DisplayOption from '../../components/displayOptions';
import strings from '../../utils/strings';

type SwitchStates = {
  didYouKnow: boolean;
  paymentFundsBalance: boolean;
  debtBalance: boolean;
  totalDebtBalance: boolean;
  notesInCards: boolean;
};

const Account = ({ route }: any) => {
  const navigation = useNavigation();

  const name = route?.params?.name || "Neelesh";

  const [switchStates, setSwitchStates] = useState<SwitchStates>({
    didYouKnow: false,
    paymentFundsBalance: false,
    debtBalance: false,
    totalDebtBalance: false,
    notesInCards: false,
  });

  const handleToggle = (key: keyof SwitchStates) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header1}
        onPress={() => navigation.goBack()}
      >
        <Image source={Icon.left_arrow} style={styles.leftarrow} />
        <Text style={styles.account}>{strings.my_account}</Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.personal}>
          <Text style={styles.personalText}>{strings.personal_info}</Text>
          <TouchableOpacity style={styles.profilePic}>
            <Text style={styles.profileText}>{strings.profile}</Text>
            <View style={styles.profilePic1}>
              <Image source={Icon.profile} style={styles.profileImage} />
              <Image source={Icon.right_arrow} style={styles.rightarrow} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.nickname}>
            <Text style={styles.nickText}>{strings.nick_name}</Text>
            <Image source={Icon.right_arrow} style={styles.rightarrow} />
          </TouchableOpacity>
        </View>

        <View style={styles.personal1}>
          <Text style={styles.personalText}>{strings.account}</Text>
          <TouchableOpacity style={styles.profilePic}>
            <Text style={styles.profileText}>{strings.username}</Text>
            <View style={styles.profilePic1}>
              <Text style={styles.profileText}>{name}</Text>
              <Image source={Icon.right_arrow} style={styles.rightarrow} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.nickname}>
            <Text style={styles.nickText}>{strings.password}</Text>
            <Image source={Icon.right_arrow} style={styles.rightarrow} />
          </TouchableOpacity>
        </View>

        <View style={styles.display}>
          <Text style={styles.personalText}>{strings.display_options}</Text>
          <TouchableOpacity style={styles.profilePic}>
            <Text style={styles.profileText}>{strings.Currency}</Text>
            <Image source={Icon.right_arrow} style={styles.rightarrow} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.profilePic}>
            <Text style={styles.profileText}>{strings.Customize_Colors}</Text>
            <Image source={Icon.right_arrow} style={styles.rightarrow} />
          </TouchableOpacity>

          <DisplayOption
            label={strings.showdid}
            isEnabled={switchStates.didYouKnow}
            onToggle={() => handleToggle('didYouKnow')}
          />
          <DisplayOption
            label={strings.showPayment}
            isEnabled={switchStates.paymentFundsBalance}
            onToggle={() => handleToggle('paymentFundsBalance')}
          />
          <DisplayOption
            label={strings.showdebt}
            isEnabled={switchStates.debtBalance}
            onToggle={() => handleToggle('debtBalance')}
          />
          <DisplayOption
            label={strings.showtotal}
            isEnabled={switchStates.totalDebtBalance}
            onToggle={() => handleToggle('totalDebtBalance')}
          />
          <DisplayOption
            label={strings.showcard}
            isEnabled={switchStates.notesInCards}
            onToggle={() => handleToggle('notesInCards')}
          />
        </View>

        <View style={styles.view}>
          <TouchableOpacity>
            <Text style={styles.resetText}>{strings.reset}</Text>
          </TouchableOpacity>
          <Text style={styles.allText}>{strings.allUSer}</Text>
          <Text style={styles.allText}> {strings.willRemain}</Text>
          <TouchableOpacity>
            <Text style={styles.resetText1}>{strings.delete}</Text>
          </TouchableOpacity>
          <Text style={styles.allText}>{strings.allData}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Account;