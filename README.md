## Setup

```bash
git clone git@github.com:syedatifgd/kadmos-test.git

# Install dependencies
npm install

```

## Run

To build and install the app in the iOS Simulator run:

```bash
npm run ios
```

## Atomic Design

Our components follow atomic design principles. It means we have a component folder strucutre as follows:

- **atoms** are the smallest unit: They're always small components with a single purpose. Examples: page, usercard
- **molecules** we don't have any currently but these are composed by `atoms` and react-native components.
- **organisms** complex elements composed by `molecules`, `atoms` and react-native components, they can have business logic and mutations in it, but they don't execute queries (it should be initiated by the `screen`).

`screens` are registered into `react-navigation` and should always initiate API queries, with some few exceptions. They should always have the smallest amount of components possible, usually `organisms`.

## Testing

Basic snapshot tests were added but more detailed unit tests can be written for react query to test apis and for screens.

## File structure

```
  "components": {
    ...
    "screens": {
      ...
      "HomeScreen": {
        ...
      }
    }
  }
```
