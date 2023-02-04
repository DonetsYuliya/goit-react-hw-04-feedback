import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <>
      <p style={{ color: 'green', fontWeight: 'bold' }}>{message}</p>
    </>
  );
};

export default Notification;

Notification.propTypes = { message: PropTypes.string };
