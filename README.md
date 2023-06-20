# Project Manhattan

Named in reference to the famous `Manhattan Project` which focused on learning to harness nuclear fusion, this project seeks to harness the power of AI. The goal is to revolutionize the way we use the web. The way graphical user interfaces with mouse and keyboard leapfrogged command line interfaces perhaps AI can assist us in leapfrogging the current norms of web surfing and use and allow us to use the web with more speed and precision than ever before. This is a project submission as part of Egen's 2023 GPTJam competition.

---

## Project Overview

### Problem & Use Case

This project seeks to change the way we interact with the web. The same way a GUI and a mouse changed the way we interacted with computers, AI can help us take the next lead in web interaction. Using websites takes time, mental energy, and pre-existing knowledge. A lack of any of those means app interaction either take forever or doesn't happen at all. The problem or use case we are attempting to solve is to beg the question: 'what if you just told the app what you want it to do?' This project is at attempt to use current AI technology to make that question a reality.

### Solution (General)

The solution is to let AI use your site with and for you. Want to navigate to a different page, simply ask the AI to show you that page. A second later, the site navigates to your desired location. Refining the current user list and need to delete a stale user? Simply tell the website helper 'delete user named peter piper" - a second or two later the site data is reloaded, and \*snap 🫰\* the user is removed from the page. Using either text (for this POC) or voice, simply tell the application what you want to happen, wait a matter of seconds, and the action is done for you -- far faster than you ever could. With additional error checking and refinement in the middle of the process this not only allows users to use the application with faster speeds than they ever have before, but allows for greater precision as well.

### Solution (Technical)

Technically, the solution works as follows.

We receive user input (currently that is in the form of text, but voice is readily available as well) and send that via a Node/Express backend to an openAI model equipped for function calling/mapping. The AI parses the user's intention and selects the function/action along with all relevant parameters needed to accomplish that action and returns that information to us. Based on the function the AI recommends, we take that action upon reception of the AI's choice.

---

## Directory Structure

This project was built using Qwik with [QwikCity](https://qwik.builder.io/qwikcity/overview/).

It has the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Provides the directory based routing, which includes a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints.

- `src/components`: Directory to house components.

## Preview

To preview the project locally, run this command which will create a production build and run a local server.

```shell
npm run preview # or `yarn preview`
```
