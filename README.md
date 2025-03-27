# Project-H

Project-H is a React-based application designed for both doctors and patients to manage scanned medical documents efficiently.

## Features

### Common Features
- **User Authentication**: Sign up and log in with email, phone number, and password.
- **Theme Toggle**: Switch between light and dark mode.
- **Sidebar Navigation**: Access settings, profile, and theme options.

### Patient Portal
- **Scan Documents**: Upload PDFs, photos, or capture images using the camera.
- **View Scanned Documents**: Access previously scanned records.

### Doctor Portal
- **Patient Management**: View a list of registered patients.
- **Access Patient Scans**: View documents uploaded by assigned patients.

## Project Structure

```
/src
|-- components
|   |-- LandingPage.js
|   |-- AuthPage.js
|   |-- PatientDashboard.js
|   |-- DoctorDashboard.js
|   |-- ViewScans.js
|   |-- ScanPage.js
|-- assets
|-- styles
|-- App.js
|-- index.js
```

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/project-h.git
   cd project-h
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Usage
- On the landing page, select **Doctor** or **Patient**.
- Sign up or log in.
- Patients can scan and view documents.
- Doctors can access patient records.

## Contributing
Contributions are welcome! Feel free to fork the repo and submit a pull request.

## License
This project is licensed under the MIT License.

