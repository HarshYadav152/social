# Contributing to Social Media Redirect

Thank you for considering contributing to Social Media Redirect! This document outlines the process for contributing to the project.

## ⚠️ Important Note for Contributors

**Current Test Status:** The test suite is currently being updated. Some tests may fail when you first clone the repository. We are actively working on fixing this.

While tests are being fixed:

1. You can focus on linting which is working correctly
2. Run `npm run lint` to check for code style issues
3. If you want to contribute to test fixes, please see the open issues related to testing

We welcome contributions to improve our test infrastructure!

## How to Contribute

### Reporting Bugs

Before submitting a bug report:
- Check the existing issues to see if your bug has already been reported
- Try to reproduce the issue with the latest version

When submitting a bug report, include:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior vs actual behavior
- Screenshots if applicable
- Any relevant error messages

### Suggesting Features

Feature suggestions are welcome! Please include:
- A clear, descriptive title
- Detailed explanation of the feature
- Examples of how the feature would work
- Any references or examples from other projects

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Development Setup

1. Clone the repository
```bash
   git clone https://github.com/HarshYadav152/social.git
   cd social
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash 
npm run dev
```

Code Style Guidelines
- Use consistent indentation (2 spaces)
- Follow the existing naming conventions
- Add comments for complex logic
- Write meaningful commit messages

Testing
- Test your changes locally before submitting
- Make sure all existing functionality continues to work
- Consider adding unit tests for new features

Code Review Process
- Maintainers will review your PR
- Address any requested changes
- Once approved, your PR will be merged

### Thanks for contributing