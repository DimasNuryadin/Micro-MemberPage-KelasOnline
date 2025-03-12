const { useState } = require("react");

export default (initialValues) => {
  const [state, setState] = useState(initialValues);

  return [
    state,
    (e) => {
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
    },
    (newState) => {
      setState({
        ...state,
        ...newState
      })
    }
  ]
}