import "./style.css";

const PersonalInformation = () => {
  return (
    <div className="personal-information">
      <div className="title">
        <h1 className="page-title">Personal Information</h1>
      </div>
      <div className="info-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Phone Number</label>
            <input type="text" id="phone" name="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input type="text" id="email" name="email" />
          </div>
        </form>
        <button>Save</button>
      </div>
    </div>
  );
};

export default PersonalInformation;
