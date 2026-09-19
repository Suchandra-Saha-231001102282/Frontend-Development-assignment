function EmployeeCard({
  employee,
  onEdit,
  onDelete
}) {
  return (
    <div className="employee-card">

      <div className="employee-header">

        <div>
          <h3>{employee.name}</h3>

          <p className="employee-id">
            ID: {employee.employeeId}
          </p>
        </div>

        <span className="department-badge">
          {employee.department}
        </span>

      </div>

      <div className="employee-details">

        <p>
          <strong>Gender:</strong> {employee.gender}
        </p>

        <p>
          <strong>Phone:</strong> {employee.phone}
        </p>

        <p>
          <strong>Local Address:</strong>{" "}
          {employee.localAddress}
        </p>

        <p>
          <strong>Permanent Address:</strong>{" "}
          {employee.permanentAddress}
        </p>

      </div>

      <div className="card-buttons">

        <button
          className="edit-btn"
          onClick={() => onEdit(employee)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(employee.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default EmployeeCard;