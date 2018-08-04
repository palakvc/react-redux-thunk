import React from 'react';
import { connect } from "react-redux";
import { incrementBy, incrementByAsync} from "./redux/actions/commonActions"
import "./App.css"

const App = props => (
    <div>
      <h1>
        {props.common.no}
      </h1>
      <button onClick={props.increment}>increment</button>
      <button onClick={props.incrementAsync}>incrementAsync</button>
    </div>
  );

const mapStateToProps = state => ({
    common: state.common
  })

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementBy(1)),
  incrementAsync: () => dispatch(incrementByAsync(1))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
