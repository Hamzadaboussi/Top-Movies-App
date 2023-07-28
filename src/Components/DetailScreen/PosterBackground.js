import {Image, Dimensions, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const PosterBackgroud = ({posterPath}) => {
  const basePosterUrl = 'https://image.tmdb.org/t/p/';

   // The posterSize format 
  const posterSize = 'w500';

  const imagehight = Dimensions.get('window').height / 2.07;
  const posterUrl = `${basePosterUrl}${posterSize}${posterPath}`;
  return (
    <>
      <Image source={{uri: posterUrl}} style={styles.img} />
      {/* Desplay inner shadow at the bottom */}
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(16, 24, 32,1)']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: imagehight / 3.5,
          height: imagehight - imagehight / 3.5,
        }}
      />
    </>
  );
};
const styles = StyleSheet.create({
  img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2.07,
  },
});

export default PosterBackgroud;
