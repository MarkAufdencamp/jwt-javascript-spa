# Product Guidelines

## Prose Style
- **Concise and Professional:** All user-facing text, including labels, instructions, and messages, must be direct and efficient. Avoid unnecessary jargon or wordiness while maintaining a professional tone suitable for administrative and utility tasks.

## Visual Identity
- **Standard Professional UI:** Leverage established UI patterns and components, primarily using Bootstrap 5. The goal is to provide a familiar, clean, and professional interface that requires minimal custom CSS and allows users to navigate intuitively.

## Design Principles
- **Consistency First:** All elements (buttons, forms, navigation) must behave predictably and look consistent across all HTML pages. This is critical for maintaining a cohesive experience in this multi-page application structure.
- **Mobile-First Responsiveness:** All layouts and features must be designed to work seamlessly on mobile devices first, scaling up to larger screens using Bootstrap's responsive grid system.
- **Fail-Fast & Feedback:** The application must provide immediate, clear feedback for every user interaction. This includes loading indicators for API calls, success confirmations, and clear error states.

## Accessibility (A11y)
- **WCAG 2.1 AA Compliance:** The application will aim for AA compliance. This includes:
    - Using semantic HTML elements.
    - Ensuring all form inputs have associated labels.
    - Maintaining sufficient color contrast for readability.
    - Supporting full keyboard navigation throughout the interface.

## Error Handling & Notifications
- **Contextual Clarity:** Validation errors should be displayed inline, close to the affected input, to help users resolve issues quickly.
- **Global Awareness:** Use consistent global notification patterns (like top banners or toasts) for high-level feedback such as "Login Successful" or "Network Error".
- **Developer Support:** Continue to log detailed technical information to the browser console to assist with debugging and API integration testing.
