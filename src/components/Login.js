import { connect } from 'react-redux'
import { handleLogin } from '../actions/shared'


const Login = (props) => {
    const { users, userIds } = props

    let usersArr = []
    for (let i = 0; i < userIds.length; i++) {
        usersArr.push(users[userIds[i]])
    }

    const login = (e) => {
        props.dispatch(handleLogin(e.target.value))
    }

    return (
        <div className="lgncont">
            <h1 className="lgn-head ">EMPLOYEE POLLS</h1>
            <div className="login">
                <h1 className="login-f">Login</h1>
                <select
                    name="login"
                    onChange={(e) => login(e)}
                    className="custom-select"
                >
                    <option>Select user</option>
                    {usersArr.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

const mapStateToProps = ({ users }) => {
    const userIds = Object.keys(users)

    return { users, userIds }
}

export default connect(mapStateToProps)(Login)
