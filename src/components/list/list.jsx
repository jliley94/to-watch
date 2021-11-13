import React from 'react';
import PropTypes from 'prop-types';
import { CONTENT_TYPE } from '../../constants/types';

const List = ({ type, content }) => {
  return (
    <div>
      {type}
      {content.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

List.defaultProps = {
  content: [],
};

List.propTypes = {
  type: PropTypes.oneOf(Object.values(CONTENT_TYPE)).isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};

export default List;
