//your code here
/* General styles */
body {
    font-family: Arial, sans-serif;
    background-color: #f7f9fc;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Form container */
form {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

/* Label styling */
label {
    font-weight: bold;
    color: #333333;
    margin-bottom: 5px;
    display: inline-block;
}

/* Input fields */
input[type="text"],
select {
    width: 100%;
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    font-size: 14px;
    box-sizing: border-box;
}

/* Checkbox alignment */
input[type="checkbox"] {
    margin-right: 5px;
}

/* Multi-select */
select {
    height: 100px;
}

/* Button styling */
button {
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

/* Form spacing */
form > * {
    margin-bottom: 10px;
}

/* Responsive design */
@media (max-width: 400px) {
    form {
        width: 90%;
    }
}

