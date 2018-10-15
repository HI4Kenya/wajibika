import { connect } from 'react-redux'

import { LoginComponent } from '../Components'
import { setCredentials } from '../Store/actions'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
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