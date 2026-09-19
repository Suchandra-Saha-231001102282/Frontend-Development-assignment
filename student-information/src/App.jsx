import { useState } from "react";

import Header from "./components/Header";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";

function App() {

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Soham Shyamal",
      rollNumber: "231001102319",
      department: "BCA",
      semester: "8th",
      cgpa: 7.69,
      photo: "https://i.pravatar.cc/150?img=12"
    },

    {
      id: 2,
      name: "Rahul Sharma",
      rollNumber: "231001102318",
      department: "BCA",
      semester: "6th",
      cgpa: 9.2,
      photo: "https://i.pravatar.cc/150?img=11"
    },

    {
      id: 3,
      name: "Priya Das",
      rollNumber: "231001102122",
      department: "BCA",
      semester: "6th",
      cgpa: 8.1,
      photo: "https://i.pravatar.cc/150?img=47"
    },

    {
      id: 4,
      name: "Arjun Roy",
      rollNumber: "23100112312",
      department: "BCA",
      semester: "6th",
      cgpa: 9.5,
      photo: "https://i.pravatar.cc/150?img=13"
    }
  ]);

  const [sortOrder, setSortOrder] = useState("none");

  const sortStudents = () => {

    if (sortOrder === "none" || sortOrder === "low") {

      const sorted = [...students].sort(
        (a, b) => b.cgpa - a.cgpa
      );

      setStudents(sorted);
      setSortOrder("high");

    } else {

      const sorted = [...students].sort(
        (a, b) => a.cgpa - b.cgpa
      );

      setStudents(sorted);
      setSortOrder("low");
    }
  };

  return (
    <div>

      <Header />

      <main className="main-content">

        <div className="page-heading">

          <h2>Student List</h2>

          <button
            className="sort-button"
            onClick={sortStudents}
          >
            {sortOrder === "high"
              ? "Sort: Low to High"
              : "Sort: High to Low"}
          </button>

        </div>

        <StudentList students={students} />

      </main>

      <Footer />

    </div>
  );
}

export default App;