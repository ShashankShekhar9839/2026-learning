// const tableData = {
//   columns: [
//     {
//       id: "name",
//       label: "Name",
//       accessor: "name",
//       width: 200,
//       align: "left",
//       sticky: true,
//       sortable: true,
//     },
//     {
//       id: "email",
//       label: "Email",
//       accessor: "email",
//       width: 260,
//       align: "left",
//       sortable: true,
//     },
//     {
//       id: "role",
//       label: "Role",
//       accessor: "role",
//       width: 160,
//       align: "center",
//       filterable: true,
//     },
//     {
//       id: "status",
//       label: "Status",
//       accessor: "status",
//       width: 140,
//       align: "center",
//       cellType: "badge",
//       meta: {
//         Active: "green",
//         Inactive: "red",
//         Pending: "orange",
//       },
//     },
//     {
//       id: "createdAt",
//       label: "Created At",
//       accessor: "createdAt",
//       width: 180,
//       align: "right",
//       sortable: true,
//     },
//   ],

//   rows: [
//     {
//       id: "row-1",
//       name: "Shashank Shekhar",
//       email: "shashank@example.com",
//       role: "Frontend Engineer",
//       status: "Active",
//       createdAt: "2024-10-12",
//     },
//     {
//       id: "row-2",
//       name: "Aarav Mehta",
//       email: "aarav@example.com",
//       role: "Backend Engineer",
//       status: "Inactive",
//       createdAt: "2024-08-19",
//     },
//     {
//       id: "row-3",
//       name: "Neha Sharma",
//       email: "neha@example.com",
//       role: "Product Designer",
//       status: "Active",
//       createdAt: "2024-11-02",
//     },
//     {
//       id: "row-4",
//       name: "Rohit Verma",
//       email: "rohit@example.com",
//       role: "QA Engineer",
//       status: "Pending",
//       createdAt: "2024-07-05",
//     },
//   ],

//   meta: {
//     totalCount: 4,
//     page: 1,
//     pageSize: 10,
//   },
// };

// export default tableData;

const tableData = {
  columns: [
    // Sticky columns (left)
    {
      id: "id",
      label: "ID",
      accessor: "id",
      width: 80,
      sticky: true,
    },
    {
      id: "name",
      label: "Name",
      accessor: "name",
      width: 200,
      sticky: true,
    },

    // Non-sticky columns (scrollable)
    {
      id: "email",
      label: "Email",
      accessor: "email",
      width: 260,
    },
    {
      id: "role",
      label: "Role",
      accessor: "role",
      width: 160,
    },
    {
      id: "team",
      label: "Team",
      accessor: "team",
      width: 160,
    },
    {
      id: "location",
      label: "Location",
      accessor: "location",
      width: 160,
    },
    {
      id: "experience",
      label: "Experience",
      accessor: "experience",
      width: 140,
    },
    {
      id: "salary",
      label: "Salary",
      accessor: "salary",
      width: 140,
    },
    {
      id: "joiningDate",
      label: "Joining Date",
      accessor: "joiningDate",
      width: 160,
    },
    {
      id: "manager",
      label: "Manager",
      accessor: "manager",
      width: 180,
    },
    {
      id: "status",
      label: "Status",
      accessor: "status",
      width: 140,
    },
  ],

  rows: Array.from({ length: 20 }).map((_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    email: `user${index + 1}@example.com`,
    role: "Frontend Engineer",
    team: "Platform",
    location: "Bangalore",
    experience: `${2 + (index % 5)} yrs`,
    salary: `₹${8 + index} LPA`,
    joiningDate: "2023-06-15",
    manager: "John Doe",
    status: index % 2 === 0 ? "Active" : "Inactive",
  })),
};

export default tableData;
