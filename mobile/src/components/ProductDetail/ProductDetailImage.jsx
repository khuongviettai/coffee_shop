import React, {useRef, useState} from 'react';
import {Dimensions, FlatList, Image, Text, View} from 'react-native';
import {colors, spacing} from '../../constants/theme';
import FavoriteButton from '../../utils/FavoriteButton';

const windowWidth = Dimensions.get('window').width;
const ProductDetailImage = ({route}) => {
  const {product} = route.params;
  const [currentSate, setCurrentState] = useState(0);
  const ref = useRef();
  const updateCurrentState = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentSate = Math.round(contentOffsetX / windowWidth);
    setCurrentState(currentSate);
  };
  return (
    <View style={{backgroundColor: colors.white}}>
      <FlatList
        horizontal={true}
        ref={ref}
        onMomentumScrollEnd={updateCurrentState}
        pagingEnabled={true}
        scrollEventThrottle={200}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        data={product.image}
        renderItem={({item, index}) => {
          return (
            <View key={index}>
              <Image source={item} style={{width: windowWidth, height: 400}} />
            </View>
          );
        }}
      />
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 5,
          }}>
          {product.image.map((item, index) => {
            return (
              <View
                style={[
                  {
                    height: 3.5,
                    width: 10,
                    backgroundColor: 'gray',
                    marginHorizontal: 3,
                    borderRadius: 2,
                  },
                  currentSate == index && {
                    backgroundColor: colors.mainColor,
                    width: 25,
                  },
                ]}
                key={index}></View>
            );
          })}
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: spacing.l,
        }}>
        <View style={{marginLeft: spacing.l, marginTop: spacing.l}}>
          <Text style={{fontSize: 23, fontWeight: 'bold'}}>
            {product.title}
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: colors.gray,
              marginTop: spacing.s,
              fontWeight: '500',
            }}>
            {product.price.toLocaleString('vi', {
              style: 'currency',
              currency: 'VND',
            })}
          </Text>
        </View>
        <View style={{marginRight: spacing.l, marginTop: spacing.l}}>
          <FavoriteButton style={{width: 28, height: 28}} />
        </View>
      </View>
    </View>
  );
};

export default ProductDetailImage;
