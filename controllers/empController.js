const emp=[
  {
    "id":1,
    "name": "Aarav Sharma",
    "email": "aarav.sharma@example.com",
    "address": "123 MG Road, Pune, Maharashtra",
    "contactNumber": "9876543210",
    "dateOfBirth": "1998-05-14",
    "joiningDate": "2023-01-10",
    "department": "Software Development"
  },
  {
    "id":2,
    "name": "Priya Patil",
    "email": "priya.patil@example.com",
    "address": "45 FC Road, Pune, Maharashtra",
    "contactNumber": "9123456780",
    "dateOfBirth": "1999-08-22",
    "joiningDate": "2022-11-05",
    "department": "Human Resources"
  },
  {
    "id":3,
    "name": "Rohan Deshmukh",
    "email": "rohan.deshmukh@example.com",
    "address": "78 JM Road, Pune, Maharashtra",
    "contactNumber": "9988776655",
    "dateOfBirth": "1997-12-03",
    "joiningDate": "2021-06-15",
    "department": "Finance"
  },
  {
    "id":4,
    "name": "Sneha Kulkarni",
    "email": "sneha.kulkarni@example.com",
    "address": "12 Baner Road, Pune, Maharashtra",
    "contactNumber": "9012345678",
    "dateOfBirth": "2000-03-18",
    "joiningDate": "2024-02-20",
    "department": "Marketing"
  },
  {
    "id":5,
    "name": "Aditya Joshi",
    "email": "aditya.joshi@example.com",
    "address": "89 Kothrud, Pune, Maharashtra",
    "contactNumber": "9090909090",
    "dateOfBirth": "1996-09-27",
    "joiningDate": "2020-09-01",
    "department": "Operations"
  }
]


const getAllEmp=(req,res)=>{
    try{
        res.status(200).send({employees:emp})
    }
    catch(error){
    res.status(500).send({msg:"Server error"})
    }
}

function createEmp (req,res){


    try{
        const{name,email,address,contactNumber,dateOfBirth,joiningDate,department}=req.body

        const newEmp={
            id:Date.now(),
            name:name,
            address:address,
            contactNumber:contactNumber,
            dateOfBirth:dateOfBirth,
            joiningDate:joiningDate,
            department:department



        }
        emp.push(newEmp)
        res.status(200).send({msg:"Emp added successfully"})
    }
    catch(error){

        res.status(500).send({msg:"server error"})

    }

}

const deleteEmp = (req, res) => {
  const { id } = req.params;

  try {
    const index = emp.findIndex((e) => e.id == id);

    if (index == -1) {
      return res.status(400).send({ msg: "Employee not found" });
    }

    emp.splice(index, 1);

    res.status(200).send({ msg: "Employee deleted successfully" });

  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
};


const updateEmp = (req, res) => {
  const { id } = req.params;   
  const { address } = req.body;

  try {
    const index = emp.findIndex((e) => e.id == id);

    console.log(index);

    if (index == -1) {
      return res.status(400).send({ msg: "Employee not found" });
    }

    emp[index].address = address;

    res.status(200).send({
      msg: "Employee updated successfully",
      data: emp[index]
    });

  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
};

const getEmployeeById = (req, res) => {
  const { id } = req.params;

  try {
    const employee = emp.find((e) => e.id == id);

    if (!employee) {
      return res.status(404).send({
        msg: "Employee not found"
      });
    }

    res.status(200).json(employee);

  } catch (error) {
    res.status(500).send({
      msg: "Server error"
    });
  }
};


const getDepartmentWiseEmp = (req, res) => {
  const { department } = req.params;

  try {
    const employees = emp.filter(
      (e) => e.department.toLowerCase() === department.toLowerCase()
    );

    if (employees.length === 0) {
      return res.status(404).send({
        msg: "No employees found in this department"
      });
    }

    res.status(200).send({
      employees: employees
    });

  } catch (error) {
    res.status(500).send({
      msg: "Server error"
    });
  }
};

const getJoiningMonthWiseEmployee = (req, res) => {
  const { month } = req.params;

  try {
    const employees = emp.filter((e) => {
      const joiningMonth = new Date(e.joiningDate).getMonth() + 1;
      return joiningMonth == month;
    });

    if (employees.length === 0) {
      return res.status(404).send({
        msg: "No employees found for this joining month"
      });
    }

    res.status(200).send({
      employees: employees
    });

  } catch (error) {
    res.status(500).send({
      msg: "Server error"
    });
  }
};

const getThisMonthBirthdayEmployee = (req, res) => {
  try {
    const currentMonth = new Date().getMonth() + 1;

    const employees = emp.filter((e) => {
      const birthMonth = new Date(e.dateOfBirth).getMonth() + 1;
      return birthMonth === currentMonth;
    });

    if (employees.length === 0) {
      return res.status(404).send({
        msg: "No employees have birthdays this month"
      });
    }

    res.status(200).send({
      employees: employees
    });

  } catch (error) {
    res.status(500).send({
      msg: "Server error"
    });
  }
};

const searchEmployeeByName = (req, res) => {
  const { name } = req.params;

  try {
    const employees = emp.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );

    if (employees.length === 0) {
      return res.status(404).send({
        msg: "Employee not found"
      });
    }

    res.status(200).send({
      employees: employees
    });

  } catch (error) {
    res.status(500).send({
      msg: "Server error"
    });
  }
};

const getEmployeeCityWise = (req, res) => {
  const { city } = req.params;

  try {
    const employees = emp.filter((e) =>
      e.address.toLowerCase().includes(city.toLowerCase())
    );

    if (employees.length === 0) {
      return res.status(404).send({
        msg: "No employees found in this city"
      });
    }

    res.status(200).send({
      employees: employees
    });

  } catch (error) {
    res.status(500).send({
      msg: "Server error"
    });
  }
};

const sortEmployeeByJoiningDate = (req, res) => {
  try {
    const sortedEmployees = [...emp].sort(
      (a, b) => new Date(a.joiningDate) - new Date(b.joiningDate)
    );

    res.status(200).send({
      employees: sortedEmployees
    });

  } catch (error) {
    res.status(500).send({
      msg: "Server error"
    });
  }
};
const sortEmployeeByName = (req, res) => {
  try {
    const sortedEmployees = [...emp].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    res.status(200).send({
      employees: sortedEmployees
    });

  } catch (error) {
    res.status(500).send({
      msg: "Server error"
    });
  }
};

const getTotalEmployeeCount = (req, res) => {
  try {
    const totalEmployees = emp.length;

    res.status(200).send({
      totalEmployees: totalEmployees
    });

  } catch (error) {
    res.status(500).send({
      msg: "Server error"
    });
  }
};

const getTotalEmployeeDepartmentWise = (req, res) => {
  try {
    const departmentCount = emp.reduce((acc, employee) => {
      const dept = employee.department;

      if (acc[dept]) {
        acc[dept]++;
      } else {
        acc[dept] = 1;
      }

      return acc;
    }, {});

    res.status(200).send({
      departmentCount: departmentCount
    });

  } catch (error) {
    res.status(500).send({
      msg: "Server error"
    });
  }
};

const getOldestEmployee = (req, res) => {
  try {
    const oldestEmployee = emp.reduce((oldest, current) => {
      return new Date(current.dateOfBirth) < new Date(oldest.dateOfBirth)
        ? current
        : oldest;
    });

    res.status(200).send({
      oldestEmployee: oldestEmployee
    });

  } catch (error) {
    res.status(500).send({
      msg: "Server error"
    });
  }
};

const getNewestJoinedEmployee = (req, res) => {
  try {
    const newestEmployee = emp.reduce((newest, current) => {
      return new Date(current.joiningDate) > new Date(newest.joiningDate)
        ? current
        : newest;
    });

    res.status(200).send({
      newestEmployee: newestEmployee
    });

  } catch (error) {
    res.status(500).send({
      msg: "Server error"
    });
  }
};

const filterEmployeeByJoiningDate = (req, res) => {
  const { startDate, endDate } = req.query;

  try {
    const employees = emp.filter((e) => {
      const joiningDate = new Date(e.joiningDate);

      return (
        joiningDate >= new Date(startDate) &&
        joiningDate <= new Date(endDate)
      );
    });

    if (employees.length === 0) {
      return res.status(404).send({
        msg: "No employees found in this date range"
      });
    }

    res.status(200).send({
      employees: employees
    });

  } catch (error) {
    res.status(500).send({
      msg: "Server error"
    });
  }
};
const updateAllEmployeeDetails = (req, res) => {
  const { id } = req.params;
  const {
    name,
    email,
    address,
    contactNumber,
    dateOfBirth,
    joiningDate,
    department
  } = req.body;

  try {
    const index = emp.findIndex((e) => e.id == id);

    if (index === -1) {
      return res.status(404).send({
        msg: "Employee not found"
      });
    }

    emp[index] = {
      ...emp[index],   // keeps same id
      name,
      email,
      address,
      contactNumber,
      dateOfBirth,
      joiningDate,
      department
    };

    res.status(200).send({
      msg: "Employee updated successfully",
      employee: emp[index]
    });

  } catch (error) {
    res.status(500).send({
      msg: "Server error"
    });
  }
};
module.exports = {
  getAllEmp,
  createEmp,
  deleteEmp,
  updateEmp,
  getEmployeeById,
  getDepartmentWiseEmp,
  getJoiningMonthWiseEmployee,
  getThisMonthBirthdayEmployee,
  searchEmployeeByName,
  getEmployeeCityWise,
  sortEmployeeByJoiningDate,
  sortEmployeeByName,
  getTotalEmployeeCount,
  getTotalEmployeeDepartmentWise,
  getOldestEmployee,
  getNewestJoinedEmployee,
  filterEmployeeByJoiningDate,
  updateAllEmployeeDetails
}