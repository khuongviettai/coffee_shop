import React from 'react';
import {ScrollView, View} from 'react-native';
import ProductDetailImage from '../components/ProductDetail/ProductDetailImage';
import ProductDetailInfo from '../components/ProductDetail/ProductDetailInfo';
import {colors} from '../constants/theme';
import ProductDetailButton from '../components/ProductDetail/ProductDetailButton';

const ProductDetailScreen = ({route}) => {
  return (
    <View style={{backgroundColor: colors.bodyColor, flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={200}>
        <ProductDetailImage route={route} />
        <ProductDetailInfo route={route} />
      </ScrollView>
      <ProductDetailButton />
    </View>
  );
};

export default ProductDetailScreen;
