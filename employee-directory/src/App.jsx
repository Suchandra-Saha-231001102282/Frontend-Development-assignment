import { useMemo, useState } from "react";

import Header from "./components/Header";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeFilters from "./components/EmployeeFilters";
import Footer from "./components/Footer";

const initialEmployees = [
  {
    id: 1,
    name: "Soham Shyamal",
    employeeId: "EMP001",
    department: "IT",
    gender: "Male",
    phone: "9876543210",
    localAddress: "Kolkata, West Bengal",
    permanentAddress: "West Bengal, India"
  },
  {
    id: 2,
    name: "Rahul Sharma",
    employeeId: "EMP002",
    department: "HR",
    gender: "Male",
    phone: "9876543211",
    localAddress: "Salt Lake, Kolkata",
    permanentAddress: "Howrah, West Bengal"
  },
  {
    id: 3,
    name: "Priya Das",
    employeeId: "EMP003",
    department: "Finance",
    gender: "Female",
    phone: "9876543212",
    localAddress: "New Town, Kolkata",
    permanentAddress: "Durgapur, West Bengal"
  },
  {
    id: 4,
    name: "Arjun Roy",
    employeeId: "EMP004",
    department: "IT",
    gender: "Male",
    phone: "9876543213",
    localAddress: "Ballygunge, Kolkata",
    permanentAddress: "Midnapore, West Bengal"
  }
];

const emptyForm = {
  name: "",
  employeeId: "",
  department: "",
  gender: "",
  phone: "",
  localAddress: "",
  permanentAddress: ""
};

function App() {

  const [employees, setEmployees] =
    useState(initialEmployees);

  const [formData, setFormData] =
    useState(emptyForm);

  const [editingId, setEditingId] =
    useState(null);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [departmentFilter, setDepartmentFilter] =
    useState("All");

  const addEmployee = () => {

    const newEmployee = {
      id: Date.now(),
      ...formData
    };

    setEmployees([
      ...employees,
      newEmployee
    ]);

    setFormData(emptyForm);
  };

  const deleteEmployee = (id) => {

    setEmployees(
      employees.filter(
        (employee) => employee.id !== id
      )
    );
  };

  const editEmployee = (employee) => {

    setEditingId(employee.id);

    setFormData({
      name: employee.name,
      employeeId: employee.employeeId,
      department: employee.department,
      gender: employee.gender,
      phone: employee.phone,
      localAddress: employee.localAddress,
      permanentAddress: employee.permanentAddress
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const updateEmployee = () => {

    setEmployees(
      employees.map((employee) =>
        employee.id === editingId
          ? {
              ...employee,
              ...formData
            }
          : employee
      )
    );

    setEditingId(null);
    setFormData(emptyForm);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData(emptyForm);
  };

  const departments = useMemo(() => {

    return [
      ...new Set(
        employees.map(
          (employee) => employee.department
        )
      )
    ];

  }, [employees]);

  const filteredEmployees =
    employees.filter((employee) => {

      const matchesSearch =
        employee.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        employee.employeeId
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesDepartment =
        departmentFilter === "All" ||
        employee.department === departmentFilter;

      return (
        matchesSearch &&
        matchesDepartment
      );
    });

  return (
    <div>

      <Header />

      <main className="main-content">

        <EmployeeForm
          formData={formData}
          setFormData={setFormData}
          onAddEmployee={addEmployee}
          editingId={editingId}
          onUpdateEmployee={updateEmployee}
          onCancelEdit={cancelEdit}
        />

        <section className="directory-section">

          <div className="directory-heading">

            <div>
              <h2>Employee Directory</h2>

              <p>
                Total Employees:{" "}
                <strong>
                  {employees.length}
                </strong>
              </p>
            </div>

          </div>

          <EmployeeFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            departmentFilter={departmentFilter}
            setDepartmentFilter={setDepartmentFilter}
            departments={departments}
          />

          <EmployeeList
            employees={filteredEmployees}
            onEdit={editEmployee}
            onDelete={deleteEmployee}
          />

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default App;