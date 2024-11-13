// localStorage.clear()

const employees = [
  {
    id: 1,
    name: "Raj",
    email: "e@e.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 2,
      completed: 3,
      failed: 0
    },
    tasks: [
      {
        active: true,
        completed: true,
        failed: false,
        title: "Complete onboarding",
        description: "Finish all onboarding procedures and training.",
        date: "2024-10-28",
        category: "Onboarding"
      },
      {
        active: false,
        completed: true,
        failed: false,
        title: "Team meeting preparation",
        description: "Prepare agenda for team meeting.",
        date: "2024-10-29",
        category: "Meetings"
      },
      {
        active: false,
        completed: true,
        failed: false,
        title: "Update profile",
        description: "Fill out all profile information.",
        date: "2024-10-27",
        category: "Profile Update"
      }
    ]
  },
  {
    id: 2,
    name: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 3,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        title: "Client follow-up",
        description: "Contact clients and update records.",
        date: "2024-10-28",
        category: "Client Management"
      },
      {
        active: false,
        completed: false,
        failed: false,
        title: "Prepare presentation",
        description: "Draft presentation for client meeting.",
        date: "2024-10-29",
        category: "Presentation"
      },
      {
        active: false,
        completed: false,
        failed: true,
        title: "Submit project report",
        description: "Complete and submit the quarterly report.",
        date: "2024-10-26",
        category: "Reporting"
      }
    ]
  },
  {
    id: 3,
    name: "Amit",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 3,
      newTask: 1,
      completed: 3,
      failed: 1
    },
    tasks: [
      {
        active: false,
        completed: true,
        failed: false,
        title: "System training",
        description: "Complete the training for the new system update.",
        date: "2024-10-25",
        category: "Training"
      },
      {
        active: true,
        completed: true,
        failed: false,
        title: "Draft email communication",
        description: "Write a follow-up email for clients.",
        date: "2024-10-28",
        category: "Email Communication"
      },
      {
        active: false,
        completed: true,
        failed: false,
        title: "Data entry",
        description: "Update customer data in system.",
        date: "2024-10-29",
        category: "Data Management"
      }
    ]
  },
  {
    id: 4,
    name: "Sita",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 4,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        title: "Inventory check",
        description: "Perform weekly inventory review.",
        date: "2024-10-28",
        category: "Inventory"
      },
      {
        active: false,
        completed: false,
        failed: false,
        title: "Client documentation",
        description: "Compile necessary client documents.",
        date: "2024-10-29",
        category: "Documentation"
      },
      {
        active: false,
        completed: true,
        failed: false,
        title: "Safety training",
        description: "Complete the required safety training.",
        date: "2024-10-25",
        category: "Training"
      }
    ]
  },
  {
    id: 5,
    name: "Ravi",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 3,
      completed: 4,
      failed: 2
    },
    tasks: [
      {
        active: false,
        completed: false,
        failed: true,
        title: "Budget planning",
        description: "Plan budget for upcoming project.",
        date: "2024-10-26",
        category: "Finance"
      },
      {
        active: true,
        completed: false,
        failed: false,
        title: "Client outreach",
        description: "Reach out to potential clients.",
        date: "2024-10-28",
        category: "Client Management"
      },
      {
        active: false,
        completed: false,
        failed: false,
        title: "Project brainstorming",
        description: "Discuss ideas for new project.",
        date: "2024-10-29",
        category: "Project Planning"
      }
    ]
  }
];


const admin = {
  "id": 1,
  "name": "Admin User",
  "email": "admin@exampl.com",
  "password": "123"
};

export const SetLocalStorage = ()=>{
  localStorage.setItem("employees",JSON.stringify(employees))
  localStorage.setItem("admin",JSON.stringify(admin))
}

export const getLocalStorage = () =>{
 const employees=  JSON.parse(localStorage.getItem("employees"))
 const admin=  JSON.parse(localStorage.getItem("admin"))
   
 return {employees,admin};
}