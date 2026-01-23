# Feedback Form

A modern, responsive feedback form application built with React and Vite. This project demonstrates form handling, state management, and responsive UI design using contemporary web technologies.

## 📋 Features

- **Interactive Feedback Form**: Easy-to-use form for collecting user feedback
- **Form Validation**: Email input validation with native HTML5 features
- **Confirmation Dialog**: User confirmation before submission
- **Responsive Design**: Fully responsive layout that works on desktop and mobile devices
- **Modern Styling**: Gradient buttons, smooth transitions, and hover effects
- **State Management**: React hooks (useState) for managing form data
- **Clean Architecture**: Modular component structure with separated concerns

## 🛠️ Technologies Used

- **React 19.2.0** - JavaScript library for building user interfaces
- **Vite 7.2.4** - Next-generation frontend build tool
- **CSS3** - Modern styling with gradients and animations
- **JavaScript ES6+** - Modern JavaScript syntax

## 📦 Project Structure

```
Feedback-Form/
├── public/                 # Static assets
├── src/
│   ├── assets/
│   │   ├── feedbackform.jsx   # Main feedback form component
│   │   └── style.css          # Component-specific styles
│   ├── App.jsx            # Root component
│   ├── App.css            # App-level styles
│   ├── index.css          # Global styles
│   └── main.jsx           # Application entry point
├── index.html             # HTML template
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14.0 or higher)
- npm or yarn package manager

### Installation

1. Clone or download the project:

```bash
git clone <repository-url>
cd Feedback-Form
```

2. Install dependencies:

```bash
npm install
```

### Running the Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another available port).

### Building for Production

Build the project for production:

```bash
npm run build
```

The optimized build will be created in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

## 📝 How to Use

1. **Enter Your Name**: Fill in the "Your Name" field
2. **Enter Your Email**: Provide a valid email address
3. **Write Your Feedback**: Share your thoughts in the feedback textarea
4. **Submit**: Click the "Submit Button" to proceed
5. **Confirm**: Review your information in the confirmation dialog and click OK to submit
6. **Success**: Receive a thank you message and the form resets

## 🎨 Styling Features

- **Navigation Bar**: Gradient blue background with custom styling
- **Form Container**: White card with shadow effect and hover animation
- **Input Fields**: Styled with focus states and smooth transitions
- **Buttons**: Gradient background with hover scale effects
- **Mobile Responsive**: Optimized layout for screens under 600px width

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Component Details

### FeedbackForm Component

The main form component manages:

- **State**: Form data (name, email, feedback)
- **Event Handlers**: Change and submit handlers
- **Validation**: Email input type validation
- **User Feedback**: Confirmation dialog and success alert

### Key Functions

- `handleChange()`: Updates form state when inputs change
- `handleSubmit()`: Processes form submission with confirmation
- Form reset after successful submission

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created as a learning project for web development.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve the project.

## 💡 Future Enhancements

- Backend integration for storing feedback
- Form field validation improvements
- File upload support
- Multiple feedback categories
- User authentication
- Feedback history and analytics
