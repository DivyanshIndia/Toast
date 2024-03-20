# Next.js Project with Storybook Toast Component

This repository contains a Next.js project integrated with Storybook to develop and test a Toast component.

## Overview

The Toast component is designed to provide feedback messages for user actions in the form of a brief notification. This project demonstrates how to set up Storybook in a Next.js environment to facilitate component-driven development and testing.

## Prerequisites

- Node.js
- npm (or yarn)

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/DivyanshIndia/Toast
cd your-nextjs-project
npm install
```

## Running the Next.js App
```
npm run dev
```
Visit http://localhost:3000 in your browser to view the app.

## Setting Up Storybook
```
npm run storybook
```
Storybook will be available at http://localhost:6006.

## Using the Toast Component
The Toast component can be used to display different types of messages, such as information, warnings, errors, and success notifications.

# Props
type: Specifies the type of toast (default, notification).
icon: The icon displayed (information, warning, error, success).
text: The message text.
actionText: Text for the action button (optional).
showCloseButton: Whether to show the close button (boolean).
showDivider: Whether to show a divider line (boolean).
onClick: Function to call when the action button is clicked (optional).

```
import Toast from './components/Toast';

<Toast
  toastType="default"
  iconType="information"
  text="This is an information toast"
  showCloseButton={true}
  showDivider={true}
/>
```





