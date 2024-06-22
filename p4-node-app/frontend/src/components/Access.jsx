import Login from './Login';
import Register from './Register';

function Access() {
  return (
    <div className="container">
      <div className="Login">
        <Login />
      </div>
      <div className="Register">
        <Register />
      </div>
      <div className="Find-Friends"></div>
      <div className="Popular-Members"></div>
      <div className="New-Members"></div>
    </div>
  );
}

export default Access;
