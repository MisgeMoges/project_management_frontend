// Function to fetch existing project data from the server based on project ID
export {};
interface ProjectData {
 _id:string,
  title: string;
  description: string;
  manager: string;
  employees: string[];
  startDate: string;
  endDate: string;
}



// Function to update project data
async function updateProject(
  projectId: string,
  projectData: ProjectData,
): Promise<void> {
  try {
    const response = await fetch(
      `http://localhost:3000/projects/${projectId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to update project: ${response.statusText}`);
    }

    console.log('Project updated successfully!');
  } catch (error) {
    console.error('Error updating project:', error);
  }
}

// Function to handle the update button click
function handleUpdateProject(event: MouseEvent): void {

const idInput = document.getElementById('id') as HTMLInputElement;
  const titleInput = document.getElementById('title') as HTMLInputElement;
  const descriptionInput = document.getElementById(
    'description',
  ) as HTMLInputElement;
  const managerInput = document.getElementById('manager') as HTMLInputElement;
  const employeesInput = document.getElementById(
    'Employees',
  ) as HTMLInputElement;
  const startDateInput = document.getElementById(
    'startdate',
  ) as HTMLInputElement;
  const endDateInput = document.getElementById('enddate') as HTMLInputElement;
  let employeesArray = employeesInput.value
    .split(',')
    .map((employee) => employee.trim());

  const projectData: ProjectData = {
    _id:idInput.value,
    title: titleInput.value,
    description: descriptionInput.value,
    manager: managerInput.value,
    employees: employeesArray,
    startDate: startDateInput.value,
    endDate: endDateInput.value,
  };

    updateProject((idInput.value), projectData);
  

  
}

// Attach the handleUpdateProject function to the update button click event
document.addEventListener('DOMContentLoaded', function () {
  const updateButton = document.getElementById(
    'updateButton',
  ) as HTMLButtonElement;

  if (updateButton) {
    updateButton.addEventListener('click', handleUpdateProject);
  } else {
    console.error('Update button not found.');
  }
});