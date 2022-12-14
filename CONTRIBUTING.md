# Contributing to Impler

Thank you for showing an interest in contributing to `Impler`! All kinds of contributions are valuable to us. In this guide, we will cover how you can quickly onboard and make your first contribution.

## Submitting an issue

Before submitting a new issue, please search the [issues](https://github.com/knovator/impler.io/issues) and [discussion](https://github.com/knovator/impler.io/discussions) tabs. Maybe an issue or discussion already exists and might inform you of workarounds. Otherwise, you can give new information.

While we want to fix all the [issues](https://github.com/knovator/impler.io/issues), before fixing a bug we need to be able to reproduce and confirm it. Please provide us with a minimal reproduction scenario using a repository or [Gist](https://gist.github.com/). Having a live, reproducible scenario gives us the information without asking questions back & forth with additional questions like:

- What is failing or not working?
- Idea about context like `Self-Hosted`/`React`/`Iframe-embed` environment
- Steps to reproduce

You can open a new issue from [here](https://github.com/knovator/impler.io/issues/new).

## Projects setup and Architecture

### Requirements

- Node.js version v14.19.3
- MongoDB
- localstack or AWS S3 credentials (for storing files)
- **(Optional)** pnpm - Needed if you want to install new packages

### Setup the project

The project is a monorepo, meaning that it is a collection of multiple packages managed in the same repository.

Follow these steps to setup the project locally,

1. Clone the repo, git clone https://github.com/knovator/impler.io.
2. After cloning your fork,
   1. Install the dependencies by running, `pnpm install`.
   2. Do setup for projects by running, `pnpm setup:project`.
   3. Start the application, `pnpm start:dev`.
   4. Start interacting with API by visiting http://localhost:3000/api or see demo on http://localhost:5173.

## Missing a Feature or Facing an issue?

If a feature is missing or you're experiencing issue, you can create issue [here](https://github.com/knovator/impler.io/issues/new). 

## Coding guidelines

To ensure consistency throughout the source code, please keep these rules in mind as you are working:

- All features or bug fixes must be tested by one or more specs (unit-tests).
- We use [Eslint default rule guide](https://eslint.org/docs/rules/), with minor changes. An automated formatter is available using prettier.

## Need help? Questions and suggestions

Questions, suggestions, and thoughts are most welcome. Feel free to open a [GitHub Discussion](https://github.com/knovator/impler.io/discussions). 
We can also be reached in our [Discord Server](https://discord.impler.io).

## Ways to contribute

- Try Importing file and platform and give feedback
- Help with open [issues](https://github.com/knovator/impler.io/issues) or [create your own](https://github.com/knovator/impler.io/issues/new)
- Share your thoughts and suggestions with us
- Help create tutorials and blog posts
- Request a feature by submitting a proposal
- Report a bug
- **Improve documentation** - fix incomplete or missing [docs](https://docs.impler.io/), bad wording, examples or explanations.
