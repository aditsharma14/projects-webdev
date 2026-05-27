# 🎣 Custom Hook - useFetch

A modern React project demonstrating the creation and implementation of a custom `useFetch` hook for API data fetching with beautiful, stylish UI components.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Custom Hook](#custom-hook)
- [Styling](#styling)
- [Technologies](#technologies)
- [Development](#development)

## ✨ Features

- **Custom useFetch Hook**: A reusable React hook for fetching data from APIs
- **Automatic Data Loading**: Handle loading states effortlessly
- **Clean API Integration**: Fetch data from external APIs with a single hook
- **Modern UI Design**: Beautiful cards with gradient backgrounds and smooth animations
- **Responsive Layout**: Works seamlessly on mobile, tablet, and desktop
- **Animated Interactions**: Hover effects, transitions, and entrance animations
- **Glass-morphism Cards**: Elegant card design with depth and visual hierarchy

## 📁 Project Structure

```
custom_hook/
├── src/
│   ├── Components/
│   │   ├── FetchData.jsx          # Main component displaying fetched data
│   │   ├── FetchData.css          # Component styling with animations
│   │   └── UseFetch.jsx           # Custom useFetch hook
│   ├── App.jsx                    # Root component
│   ├── App.css                    # App-level styling with background effects
│   ├── main.jsx                   # Entry point
│   ├── index.css                  # Global styles and animations
│   └── assets/
├── public/
├── index.html                     # HTML template
├── package.json                   # Project dependencies
├── vite.config.js                 # Vite configuration
└── README.md                      # This file
```

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone or navigate to the project**

```bash
cd custom_hook
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open in browser**
   Navigate to `http://localhost:5173` (Vite default port)

## 💡 Usage

### Using the useFetch Hook

```jsx
import useFetch from "./Components/UseFetch";

function MyComponent() {
  const data = useFetch("https://api.example.com/data");

  return (
    <div>
      {data && data.map((item, index) => <div key={index}>{item.name}</div>)}
    </div>
  );
}
```

### API Response Format

The hook expects an API that returns an array of objects:

```json
[
  {
    "name": "Item Name",
    "importance": "High",
    "benefits": "Benefits description",
    "best_time_to_intake": "Morning"
  }
]
```

## 🎨 Components

### FetchData Component

- **File**: `src/Components/FetchData.jsx`
- **Purpose**: Displays fetched data in a beautiful grid layout
- **Features**:
  - Uses the `useFetch` custom hook
  - Renders data as styled cards
  - Responsive grid layout
  - Smooth animations and transitions

### UseFetch Custom Hook

- **File**: `src/Components/UseFetch.jsx`
- **Purpose**: Handles API data fetching
- **Returns**: Array of data or null
- **Features**:
  - Automatic fetch on component mount
  - Simple, reusable interface

## 🎯 Custom Hook Deep Dive

The `useFetch` hook simplifies data fetching:

```javascript
const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return data;
};
```

### Hook Benefits:

- ✅ Reusable across components
- ✅ Encapsulates fetch logic
- ✅ Clean and readable code
- ✅ Easy to test and maintain

## 🎨 Styling Highlights

### Modern Design Features

**Card Design**

- Glass-morphism effect with semi-transparent backgrounds
- Gradient top border with animation
- Smooth shadow transitions
- Hover lift effect with 3D perspective

**Background**

- Animated multi-color gradient (red, pink, teal, green)
- Moving radial gradients
- Continuous 15-second animation cycle
- Overlapping pattern animations

**Animations**

- Fade-in entrance animations
- Staggered card animations
- Hover scale and color transitions
- Floating orb effects
- Gradient text glow
- Smooth underline reveals

**Responsive Design**

- Mobile-first approach
- Tablet optimizations
- Desktop enhancements
- Touch-friendly interactions

## 🛠 Technologies

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with animations
- **JavaScript (ES6+)** - Modern JavaScript
- **Fetch API** - HTTP requests

## 📦 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# ESLint
npm run lint
```

## 🎓 Learning Outcomes

This project demonstrates:

- ✅ Creating custom React hooks
- ✅ Using the `useEffect` hook for side effects
- ✅ State management with `useState`
- ✅ API integration and data fetching
- ✅ Modern CSS animations and transitions
- ✅ Responsive design techniques
- ✅ Component composition
- ✅ Reusable code patterns

## 🌟 Future Enhancements

- Add loading and error states
- Implement error handling with try-catch
- Add pagination for large datasets
- Add filtering and search functionality
- Implement caching to avoid duplicate requests
- Add TypeScript support
- Unit tests with Jest/React Testing Library

## 📝 License

Licensed under the MIT License - see LICENSE file for details

## 👨‍💻 Author

Created as a React learning project demonstrating custom hooks and modern UI design.

---

**Happy Coding!** 🚀 Feel free to explore, modify, and learn from this project!
