import { connect } from "react-redux";
import Link from "./Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});
export default connect(mapStateToProps)(Link);
