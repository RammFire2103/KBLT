import { useState } from "react";

import staffData from "../../../../data/getStaffData";
import Employee from "./Employee";
import Pagination from "./Pagination";

import Button from "../../../ui/Button";

import "./Table.scss";

const Table = () => {
  const [employees, setEmployees] = useState(staffData);
  const [currentPage, setCurrentPage] = useState(1);
  const [sorted, setSorted] = useState(false);

  const lastEmployeeIndex = currentPage * 7; //id последнего работника на странице
  const firstEmployeeIndex = lastEmployeeIndex - 7; //id перовго работника на странице
  const currentEmployees = employees.slice(
    firstEmployeeIndex,
    lastEmployeeIndex
  ); //Получаем массив работников на странице

  //Изменение текущей страницы
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //Сортировка по имени (Или вернуть исходный порядок)
  function sortByFullName(arr) {
    if (!sorted) {
      const sorted = [...arr].sort((a, b) =>
        a.fullName.localeCompare(b.fullName, "ru", { sensitivity: "base" })
      );
      setSorted(true);
      setEmployees(sorted);
    } else {
      setSorted(false);
      setEmployees(staffData);
    }
  }

  return (
    <>
      <div className="tableWrapper">
        <table className="table printable">
          <thead>
            <tr>
              <th></th>
              <th>Телефон</th>
              <th className="name-head">
                <span>ФИО</span>{" "}
                <Button
                  className="no-printable"
                  onClick={() => sortByFullName(employees)}
                >
                  {sorted ? "unsort" : "sort"}
                </Button>
              </th>
              <th>Почта</th>
              <th>Адрес</th>
            </tr>
          </thead>
          <tbody>
            {/* Заполняем таблицу работников */}
            {currentEmployees.map((item) => (
              <Employee key={item.id} employee={item} />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        employeesPerPage={7}
        totalEmployees={employees.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
};

export default Table;
