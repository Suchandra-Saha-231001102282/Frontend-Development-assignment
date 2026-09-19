function EmployeeFilters({
  searchTerm,
  setSearchTerm,
  departmentFilter,
  setDepartmentFilter,
  departments
}) {
  return (
    <section className="filters">

      <input
        type="text"
        placeholder="Search employee..."
        value={searchTerm}
        onChange={(event) =>
          setSearchTerm(event.target.value)
        }
      />

      <select
        value={departmentFilter}
        onChange={(event) =>
          setDepartmentFilter(event.target.value)
        }
      >
        <option value="All">All Departments</option>

        {departments.map((department) => (
          <option
            key={department}
            value={department}
          >
            {department}
          </option>
        ))}

      </select>

    </section>
  );
}

export default EmployeeFilters;