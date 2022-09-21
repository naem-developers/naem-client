import { THEME } from '@/theme';
import * as React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Text from '@/components/atoms/Text';
import { SvgProps } from 'react-native-svg';
import Cross from '@assets/icons/icn_cross_white.svg';

interface TextInputProps extends RNTextInputProps {
  validationMsg?: string;
  Icon?: React.FC<SvgProps>;
  buttonText?: string;
  containerStyle?: ViewStyle;
  inputContatinerStyle?: ViewStyle;
  buttonTextStyle?: ViewStyle;
  images?: Array<string>;
  buttonOnPress?: () => void;
  imageOnPress?: (image: string) => void;
}

const TextInput = ({
  Icon,
  buttonText,
  style,
  containerStyle,
  inputContatinerStyle,
  buttonTextStyle,
  validationMsg,
  images,
  buttonOnPress,
  imageOnPress,
  ...props
}: TextInputProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.inputContainer, inputContatinerStyle]}>
        <RNTextInput style={[styles.input, style]} placeholderTextColor="#aeaeae" {...props} />
        {images && (
          <FlatList
            data={images}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
            renderItem={({ item }: { item: string }) => {
              return (
                <View style={styles.imageView}>
                  <TouchableOpacity
                    style={styles.delete}
                    onPress={() => {
                      imageOnPress && imageOnPress(item);
                    }}
                  >
                    <Cross />
                  </TouchableOpacity>
                  <Image style={styles.image} source={{ uri: item }} />
                </View>
              );
            }}
          />
        )}
        {(Icon !== undefined || buttonText !== undefined) && (
          <TouchableOpacity style={styles.button} onPress={buttonOnPress}>
            {Icon ? (
              <Icon />
            ) : (
              <Text
                sizeStyle="f17"
                weightStyle="semiBold"
                colorStyle="main"
                style={buttonTextStyle}
              >
                {buttonText}
              </Text>
            )}
          </TouchableOpacity>
        )}
      </View>
      {!!validationMsg && (
        <Text sizeStyle="f13" weightStyle="semiBold" style={styles.validation}>
          {validationMsg}
        </Text>
      )}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  inputContainer: {
    borderColor: THEME.LIGHT_BOX,
    borderWidth: 1,
    borderRadius: 10,
  },
  input: {
    padding: 14,
    width: '100%',
    fontSize: 17,
  },
  validation: {
    marginTop: 9,
    color: THEME.POINT,
    alignSelf: 'flex-start',
  },
  button: {
    paddingHorizontal: 14,
    marginBottom: 20,
    justifyContent: 'center',
  },
  image: {
    height: 100,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  imageView: {
    height: 100,
    width: 100,
    marginHorizontal: 5,
    marginBottom: 20,
  },
  delete: {
    position: 'absolute',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(94, 94, 94, 0.3)',
    margin: 4,
    height: 20,
    width: 20,
    borderRadius: 20,
    zIndex: 2,
  },
});
