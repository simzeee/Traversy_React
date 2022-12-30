import PropTypes from 'prop-types'
import Card from './shared/Card';

const FeedbackItem = ({ item }) => {
  // const handleClick = () => {
  //   setRating((prev) => {
  //     return prev + 1;
  //   });
  // };

  // const handleClick = () => {
  //   setRating((prev) => {
  //     console.log(prev);
  //     return prev + 1;
  //   });
  // };

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem;