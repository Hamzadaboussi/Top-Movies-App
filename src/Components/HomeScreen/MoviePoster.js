import {Image, Dimensions, StyleSheet} from 'react-native';


const MoviePoster = ({posterPath, itemWidth}) => {
  const basePosterUrl = 'https://image.tmdb.org/t/p/';
  // The posterSize format 
  const posterSize = 'w500';

  const posterUrl = `${basePosterUrl}${posterSize}${posterPath}`;
  return (
    <Image source={{uri: posterUrl}} style={[styles.img, {width: itemWidth}]} />
  );
};
const styles = StyleSheet.create({
  img: {
    borderRadius: 10,
    height: Dimensions.get('window').height / 5,
  },
});
export default MoviePoster;
