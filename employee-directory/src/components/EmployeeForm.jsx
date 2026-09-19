function EmployeeForm({
  formData,
  setFormData,
  onAddEmployee,
  editingId,
  onUpdateEmployee,
  onCancelEdit
}) {
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingId) {
      onUpdateEmployee();
    } else {
      onAddEmployee();
    }
  };

  return (
    <section className="form-section">

      <h2>
        {editingId ? "Edit Employee" : "Add Employee"}
      </h2>

      <form onSubmit={handleSubmit}>

        <div className="form-grid">

          <input
            type="text"
            name="name"
            placeholder="Employee Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="employeeId"
            placeholder="Employee ID"
            value={formData.employeeId}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            required
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="localAddress"
            placeholder="Local Address"
            value={formData.localAddress}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="permanentAddress"
            placeholder="Permanent Address"
            value={formData.permanentAddress}
            onChange={handleChange}
            required
          />

        </div>

        <div className="form-buttons">

          <button type="submit" className="primary-btn">
            {editingId ? "Update Employee" : "Add Employee"}
          </button>

          {editingId && (
            <button
              type="button"
              className="cancel-btn"
              onClick={onCancelEdit}
            >
              Cancel
            </button>
          )}

        </div>

      </form>

    </section>
  );
}

export default EmployeeForm;