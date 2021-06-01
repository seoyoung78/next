import PropTypes from "prop-types"

function FunTypeProps(props) {
  const {name, version, children} = props;

  return (
    <div className="card">
      <div className="card-header">
        FunTypeProps
      </div>
      <div className="card-body">
        <div>name: {name}</div>
        <div>version: {version}</div>
        {children}
      </div>
    </div>
  );
}

FunTypeProps.defaultProps = {
  version: 17
};

FunTypeProps.propTypes = {
  name: PropTypes.string.isRequired,
  version: PropTypes.number
}

export default FunTypeProps;