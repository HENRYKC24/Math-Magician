import React from 'react';
import propTypes from 'prop-types';
import styles from './tableData.module.css';

const TableData = (props) => {
  const { td } = styles;
  const { data, handleClick, otherProps } = props;
  const { next, operation, total } = otherProps;
  return data === 0 ? (
    <td className={td}>
      <div>
        <span>{total}</span>
        <span>{operation}</span>
        <span>{next}</span>
      </div>
    </td>
  ) : (
    <td className={td}>
      <div aria-hidden onClick={() => handleClick(data)}>
        {data}
      </div>
    </td>
  );
};

TableData.propTypes = {
  data: propTypes.oneOfType([propTypes.string, propTypes.number]),
  handleClick: propTypes.func.isRequired,
  otherProps: propTypes.instanceOf(Object).isRequired,
};

TableData.defaultProps = {
  data: '0',
};

export default TableData;
