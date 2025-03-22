import "./style.css";
const ChangePassword = () => {
  return (
    <div className="change-password">
      <div className="title">
        <h1 className="page-title">Change Password</h1>
      </div>
      <div className="info-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Old Password</label>
            <input type="password" id="old" name="old" />
          </div>
          <div className="form-group">
            <label htmlFor="name">New Password</label>
            <input type="password" id="new" name="new" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Repeat New Password</label>
            <input type="password" id="repeat" name="repeat" />
          </div>
        </form>
        <button>Save</button>
      </div>
    </div>
  );
};

export default ChangePassword;
