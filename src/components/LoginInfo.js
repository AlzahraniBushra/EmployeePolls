//this one for display the user info when login 

import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleLogin } from '../actions/shared'

const LoginInfo = (props) => {
    const { name } = props
    const navigate = useNavigate()


    const logout = () => {
        props.dispatch(handleLogin(null))
        navigate('/')
    }

    return (
        <div className="lgnInfo">
            <div className="lgnInfoNm">{name}</div>
            <button className="lgnInfoBtn"
                data-testid="lgnTest"
                onClick={logout}>Logout</button>
        </div>
    )
}

const mapStateToProps = ({ authedUser, users }) => {
    const user = users[authedUser]
    const { name } = user
    return {
        name,
    }
}

export default connect(mapStateToProps)(LoginInfo)
