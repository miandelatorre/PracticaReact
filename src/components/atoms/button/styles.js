import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
  button: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: colors.grey,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  label: {color: colors.black, fontSize: 18},
  activityIndicator: {marginLeft: 8},
});
