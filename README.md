# 🔐 Password Generator

A simple yet powerful web application built with **HTML**, **CSS**, and **JavaScript** that allows users to generate secure and customizable passwords. Users can set the password length and choose the character types—uppercase, lowercase, numbers, and symbols. Includes a password strength indicator and clipboard functionality.

---

## 🚀 Features

- **Customizable Password Length**  
  Use a slider to set the desired length.

- **Selectable Character Types**  
  Choose to include/exclude:
  - Uppercase Letters  
  - Lowercase Letters  
  - Numbers  
  - Symbols

- **Random Password Generation**  
  Generate a strong password based on your selected criteria.

- **Copy to Clipboard**  
  Instantly copy the generated password.

- **Password Strength Indicator**  
  Visual indicator shows password strength based on criteria.

- **Responsive Design**  
  Works seamlessly on desktop, tablet, and mobile.

---

## 📘 How to Use

1. **Open the App**  
   Navigate to the hosted Password Generator webpage.

2. **Set Password Length**  
   Adjust the slider to select your preferred length.

3. **Select Character Types**  
   Toggle the checkboxes to include:
   - Uppercase Letters  
   - Lowercase Letters  
   - Numbers  
   - Symbols

4. **Generate Password**  
   Click the **"Generate Password"** button to get your password.

5. **Copy Password**  
   Click the **"Copy"** button to copy it to your clipboard.

6. **Repeat as Needed**  
   Change settings and generate again for new passwords.

---

## ⚙️ JavaScript Details

### 📌 Functions

- `generateRandomInteger(min, max)`  
  Generates a random number in a range.

- `generateLowerCase()`  
  Returns a random lowercase character.

- `generateUpperCase()`  
  Returns a random uppercase character.

- `generateSymbols()`  
  Selects a random symbol from a predefined list.

- `calculateStrength()`  
  Calculates and visually displays password strength.

- `copyContent()`  
  Uses the Clipboard API to copy the password and show feedback.

- `handleSlider()`  
  Updates the length display and slider background.

- `handleCheckBoxChange()`  
  Updates count of selected options and validates settings.

- `shufflePassword(array)`  
  Shuffles password characters for better randomness.

### 📌 Properties

- `password` — Stores the final generated password  
- `passwordLength` — Holds the slider-selected length  
- `checkCountor` — Number of active checkboxes  
- `symbols` — Predefined special characters used

---

## 🛠️ Tech Stack

- HTML 
- CSS
- JavaScript 

---


