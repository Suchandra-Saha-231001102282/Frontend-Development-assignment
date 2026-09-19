import EmployeeCard from "./EmployeeCard";

function EmployeeList({
  employees,
  onEdit,
  onDelete
}) {
  if (employees.length === 0) {
    return (
      <div className="empty-message">
        <h3>No employees found</h3>
        <p>
          Try changing your search or department filter.
        </p>
      </div>
    );
  }

  return (
    <div className="employee-list">

      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}

    </div>
  );
}

export default EmployeeList;