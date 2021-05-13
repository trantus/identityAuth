import React, {Dispatch, useEffect} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {Action} from 'redux';
import {getData as getDataAction} from './actions/actionCreators/dataActions';

interface DisptachProps {
  getData: () => void;
}

type Props = DisptachProps;

const ListOfData = (props: Props) => {
  const {getData} = props;

  useEffect(() => {
    getData();
  }, []);

  return <View />;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DisptachProps => ({
  getData: () => dispatch(getDataAction()),
});

export default connect(null, mapDispatchToProps)(ListOfData);
