export default function SettingsForm() {
  return (
    <form className="settings-form">
      <div className="form-row">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" defaultValue="Juan" />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input type="text" defaultValue="Yanza" />
        </div>
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input type="text" defaultValue="(347) 000-0000" />
      </div>

      <div className="form-group">
        <label>Email Address</label>
        <input type="email" defaultValue="jyanza63@gmail.com" />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>City</label>
          <input type="text" defaultValue="Queens" />
        </div>

        <div className="form-group">
          <label>Country</label>
          <input type="text" defaultValue="United States" />
        </div>
      </div>

      <button className="update-btn">Update</button>
    </form>
  );
}
