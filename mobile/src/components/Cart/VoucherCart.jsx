import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from '../../utils/Icon';
import {sizes, spacing} from '../../constants/theme';

const VoucherCart = () => {
  return (
    <View
      style={{
        marginLeft: spacing.l,
        marginRight: spacing.l,
        marginTop: spacing.m,
        marginBottom: spacing.l,
        borderRadius: sizes.radius,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        alignItems: 'center',
      }}>
      <Icon icon="Voucher" style={{marginLeft: spacing.l + spacing.s}} />
      <TouchableOpacity
        style={{
          backgroundColor: 'aqua',
          borderRadius: 20,
          width: 78,
          height: 35,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: spacing.l,
        }}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>Voucher</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VoucherCart;
