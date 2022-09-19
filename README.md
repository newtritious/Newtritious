# Newtritious (README Under Construction)

![GitHub Repo stars](https://img.shields.io/github/stars/ichbindev/alumni-collab?logo=GitHub&color=informational&style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/ichbindev/alumni-collab?color=informational&style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/ichbindev/alumni-collab?color=informational&style=for-the-badge)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/ichbindev/alumni-collab/main?color=informational&style=for-the-badge)

## Table of Contents

- [About The Project](#about-the-project)

- [Deployed Link](#deployed-link)

- [Built With](#built-with)

- [Installation](#installation)

- [Get Spoonacular API Key](#get-spoonacular-api-key)

- [Super Secret String](#super-secret-string)

- [Running](#running-the-project)

- [Troubleshooting](#troubleshooting)

- [Usage](#usage)

- [License](#license)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

## About The Project

Nutrition app built by Trilogy bootcamp alumni to let a user find their caloric needs (using a calculator) and set a calorie goal. A user can search for specific food nutrition and recipes. Recipes will show ingredients and steps to make a meal, show the nutrition details of the recipe and save the recipe, and log the recipe as a meal. A user can add meals for the day to show the total amount of calories consumed and view any past meals they have logged.

## Deployed Link

<http://www.newtritio.us/>

### Built With

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [spoonacular](https://spoonacular.com/food-api)
- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Tailwind](https://tailwindui.com/)

## Installation

To get a local copy up and running follow these simple steps.

1. Clone the repo in your terminal

   ```sh
   git clone git@github.com:newtritious/Newtritious.git
   ```

2. After installation and in the same terminal, type ```cd Newtritious``` and hit enter before proceeding onto the next step

3. Run the following command to install necessary dependencies:

   ```sh
   yarn install
   ```

- **_Note: If you are using npm, delete all `node_modules` folders in the root of the project folder and client folder - then reinstall packages with yarn_**

## Get Spoonacular API Key

Signup for your own Spoonacular API key @ `https://spoonacular.com/food-api`.

1. Click the `Start Now` button in the navigation
2. From the `Dashboard` - Navigate to `Profile`
3. You will see your API key hidden `API Key: *****************************`
4. Click the `Show / Hide API Key` button
5. Create a local `.env` file in the root directory (i.e., the same directory where the ```CODE_OF_CONDUCT.md``` lives)
6. In the `.env.EXAMPLE` file, you will see an example on how your Spoonacular API key should look in your `.env` file. `SPOONACULAR_API_KEY=your_api_key`

## Super Secret String

In the ```.env.EXAMPLE``` file, you will notice a key/value that looks like this:

```sh
SECRET_STRING=Super_Secret_String
```

Add this to your ```.env``` file in order for authentication and, consequently, the application to work as intended

## MongoDB

This project uses MongoDB as a database. If you have not yet installed Mongo, [you can find installation instructions here](https://www.mongodb.com/docs/manual/installation/). After installation, make sure you are running Mongo with:

```
mongod
```

You may also consult [the mongod documentation] for more flags and settings.

## Running the project

To run the project locally, use the command `yarn start` in the root project folder

## Troubleshooting

Check your node version if you are experiencing issues. This project is running on `Node v15.14.x`. To run correctly, make sure you have at least `Node v15.14.x` installed. You may be running the long-term support version (LTS) `Node v14.16.x (LTS)`

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

## License

![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen)

This project is licensed under the MIT license.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Clone the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Rebase your commits (`git rebase -i origin/main`)
5. Push to the Branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

Make sure to follow our [code of conduct](https://github.com/newtritious/Newtritious/blob/main/CODE_OF_CONDUCT.md)!

## Tests (Coming Soon)

To run tests, cd into the client folder and run the following command:

```sh
yarn test
```

## Questions

If you have any questions about the repo, open an issue or contact the repo owner or one of the contributors.
