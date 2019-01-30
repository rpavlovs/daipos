import SignUp from '..'
import * as ReactRedux from 'react-redux'

const mapDispatchToProps = dispatch => ({
  signUp: data => {
    console.log('data', data)
    return dispatch
  },
})

export default ReactRedux.connect(
  null,
  mapDispatchToProps
)(SignUp)