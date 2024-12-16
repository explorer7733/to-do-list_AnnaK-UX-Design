# To-Do List App

A simple and intuitive web application for managing your daily tasks. Users can add, check, and remove tasks, with data saved locally for persistence.

## Features

	•	Add Tasks: Quickly add tasks to your to-do list.
	•	View Tasks: See all tasks displayed instantly.
	•	Check Tasks: Mark tasks as completed.
	•	Remove Tasks: Delete tasks you no longer need.
	•	Local Storage Support: Tasks are saved in your browser’s local storage, so they persist even after a page refresh.

## Technologies Used

	•	HTML: Structure of the application.
	•	CSS: Styling for a clean and user-friendly design.
	•	JavaScript: Functionality for task management and interaction with local storage.

## Getting Started
### Installation
1. Clone the repository:
```
git clone git@github.com:swe-thinhnguyen1701/to-do-list.git
```

2.	Navigate to the project directory:
```
cd to-do-list
```

3. Run app on local machine:
```
npm run dev
```

## Usage
1. Adding a Task:
* Enter a task description in the input field.
* Click the “Add” button (green) to add it to the list.

2. Marking a Task as Complete:
* Click the “Check” button (green or blue) to mark a task as completed.
3.	Removing a Task:
* Click the “Remove” button (red) to delete a task.

4.	Persistent Data:
* Your tasks are saved in local storage, so they’ll reappear when you refresh the page.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

### CHANGELOG (AK comments)

Hi, Thinh!
I’ve made a few updates to the interface of the "To-Do List" app and wanted to share the changes with you:

1. Added a linear-gradient background to the body for a more dynamic look (changes made in index.css).
2. Updated the font-family to enhance readability. I’ve commented out the original font-family in case you’d like to switch back (changes made in index.css).
3. Centered the buttons for better visual alignment (changes made in index.css).
4. Added a fade effect for completed tasks:
	* When a task is marked as complete, the background transitions to green, the font changes to blue, and after one second, the task moves to the "Completed" list (changes made in List.jsx and index.css).
5. Introduced an "empty message" feature:
	* If the to-do list is empty, a message pops up saying, "Your to-do list is empty! What's next?"
	* The changes were made in List.jsx and index.css, but the message doesn’t appear as expected. I’ve tried debugging but couldn’t resolve the issue.

If you think the empty message isn’t necessary, we can remove it altogether. Otherwise, I’m happy to debug it together or adjust any other aspect (e.g., colors, fonts, animations) based on your feedback. Let me know your thoughts!
