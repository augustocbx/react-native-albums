import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import Card from './card';
import CardSection from './card_section';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;
  const {
    headerContentStyle,
    headerTextStyle,
    imageStyle,
    thumbnailContainerStyle,
    imageCoverStyle,
  } = styles;

  return (

    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={imageStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageCoverStyle} source={{ uri: image }} />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
  imageCoverStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  }
};

export default AlbumDetail;
