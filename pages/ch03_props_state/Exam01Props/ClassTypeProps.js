import React from "react";
import PropTypes from "prop-types";

class ClassTypeProps extends React.Component {
  /* constructor(props) {
    super(props);
  } */

  render() {
    const {name, version, children} = this.props;
    return (
      <div className="card">
        <div className="card-header">
          ClassTypeProps
        </div>
        <div className="card-body">
          <div>name: {name}</div>
          <div>version: {version}</div>
          {children}
        </div>
      </div>
    );
  }
}

//디폴트 속성값 설정
ClassTypeProps.defaultProps = {
  version: 17
};

//타입과 필수 설정
ClassTypeProps.propTypes = {
  name: PropTypes.string.isRequired,
  version: PropTypes.number
}

export default ClassTypeProps;