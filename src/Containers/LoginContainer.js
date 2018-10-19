import { connect } from 'react-redux'

import { LoginComponent } from '../Components'
import { setCredentials } from '../Store/actions'

const mapStateToProps = (state, ownProps) => {
  return {
    option: ownProps.options
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    navigateTo: ownProps.navigate,
    onLoginClick: user => {
      dispatch(setCredentials(user))
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent)

export default LoginContainer