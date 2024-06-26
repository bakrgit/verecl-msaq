Assignment Blueprint for backend
===============================

You will be working on migrating a Next.js application from the `pages` directory to the new `app` router.

## Project features:
`NextAuth.js` to handle authentication in a `Next.js` app.

`i18next` to handle internationalization. 

`NProgress` to show a progress bar at the top when a page changes.

`redux` for state management.

`reduxjs/toolkit` for API caching and data fetching.

the application uses a fake API for login and registration: [DummyJSON Auth API](https://dummyjson.com/docs/auth#auth-login).

## Task Requirements
Your main task is to migrate the application from the `pages` dir to the new `app` router. While doing so, you are required to:

Implement authentication and localization without using any third-party libraries.
Enable i18n routing.
Improve the current code to follow best practices.

## Getting Started
Follow these steps to set up the project locally:

#### Clone the repository:
```base
git clone https://github.com/msaaqcom/assignment-frontend-blueprint/
cd assignment-frontend-blueprint
```

#### Install dependencies:

```base
npm install
```

#### Copy the .env.example file to .env and add the necessary values for the keys:
```base
cp .env.example .env
```
#### Start the development server:
```base
npm run dev
```

## Project Structure

- `contextes/`
  - `AppContext.tsx`
  - `AuthContext.tsx`
  - `ToastContext.tsx`
- `hooks/` - Custom hooks used in the application.
- `store/` - Redux store setup.
- `types/` - TypeScript types.
- `utils/` - Utility helpers.
- `pages/` - Contains app pages.
- `public/` - Contains public eg: (locales).
- `styles/` - Contains global styles.
- `next-i18next.config.js` - i18next config

## Your Task

### 1. Migrate to App Router
- Move the application from the `pages` directory to the new `app` router in Next.js.

### 2. Implement Authentication
- remove `NextAuth.js` and implement a Cookie-based session management

### 3. Implement Internationalization
- remove `i18next` and implement a solution using Next.js built-in support for internationalized

### 4. Enable multi-language support
- Implement i18n routing to support multiple languages.

### 5. Analyze and improve the code
- while migrating the app if you see any features that could be implemented better or improved by following best practices just apply what you think is right

### 6. Replace Redux/Reduxjs Toolkit with Built-In Solutions
- Remove Redux and Reduxjs Toolkit from the application and use built-in solutions

### 7. Use TailwindCSS to code Pixel Perfect Design
- Use Tailwind CSS to design [this page (with dark and light mode supported)](https://www.figma.com/design/SKLhZXkR26pi9VzR8R8hKC/SaaS-Landing-Page---Bento-UI-(Community)-(Copy)?m=dev&node-id=0-1) and apply a better design to the entire application UIs.

### 8. Apply responsive design to the previous page (bonus task)

### 9. SEO and MetaData
- Ensure the application works perfectly with SEO.
- Implement appropriate metadata for all pages to enhance SEO.

### 10. Comments
- in the comments page you should apply pagination to the comments to replace Reduxjs Toolkit with whatever you feel right

### 11. Unit/E2E testing for your application

### 12. Deployment (bonus task)
- deploy your project to Vercel
 
## Submission
Once you have completed the task, submit your changes by pushing to a new branch and creating a pull request in your cloned repository. Include a detailed description of the changes you made and any additional improvements or features you implemented.




## my edit
- if user not login will redirect to home page and register and login page will be hidden.
- I updated the project (nextjs 14) to use the new Next.js router. and update all the dependencies.
- I have created a new folder called `app` and moved all the pages to it.
- I have removed `NextAuth.js` and implemented a Cookie-based session management. and context API for authentication. in the `contextes` folder. AuthContext.tsx
- I use server action to handle the login and register. in the server action folder.
- if user authenticated the user will be redirected to the home page.
- i make every page server component. for SEO and performance.
- I make hook for every page to split the logic and the view.

[//]: # (- -------------)
- I have removed `i18next` and implemented a solution using Next.js built-in support for internationalized.
- I have implemented i18n routing to support multiple languages.
- I have created a new folder called `dictionaries` and added the translation files.
- I have created a new button to change the language. in home page
- I updated ar.json and en.json files.

[//]: # (- -------------)
- I make file for the SEO keywords and description. called `seo-keywords.util.ts` in the utils folder.
- every page server component for SEO and performance.

[//]: # (- --------------)
- in comments page i fetch (async/await) data with fetch api and i use the built-in nextjs 14 cache.
- i revalidate the data when add new comment only 
- i make pagination for the comments. with react-paginate library. and make shared component for the pagination. in components folder.
- when add new comment will appear in the top of the comments list.

[//]: # (----------- )
- I design the page with Tailwind CSS and make it responsive. only with tailwind css.
- I make dark light and switch button 
- I use swiper for the slider in the page.
- I Make hamburger menu for the mobile view.
- I make the page responsive for all devices.

[//]: # (----------- )

