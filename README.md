# Single Page React Native App

A mobile application showcasing interior design concepts with a clean, modern UI. Built with React Native and TypeScript.

![App Screenshot](screenshot.png) <!-- Add a screenshot of your app here -->

## Features

- **Interactive Carousel**: Browse through different design concepts with a smooth, responsive carousel
- **Clean UI**: Modern interface with header, carousel display, and footer components
- **Design Showcase**: View multiple bathroom design styles including Harvest, Modern, and Classic
- **Responsive Layout**: Optimized for different screen sizes

## Tech Stack

- React Native 0.78.2
- TypeScript
- react-native-snap-carousel for image carousel
- react-native-vector-icons for UI icons
- react-native-gesture-handler and react-native-reanimated for animations

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Carousel.tsx  # Main carousel component
│   ├── Footer.tsx    # Footer component
│   └── Header.tsx    # Header component
│
├── screens/          # App screens
│   └── DesignScreen.tsx  # Main screen of the app
│
└── assets/           # Images and other static assets
    └── images/       # Design concept images
```

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository

```sh
git clone https://github.com/yourusername/SinglePageApp.git
cd SinglePageApp
```

2. Install dependencies

```sh
# Using npm
npm install

# OR using Yarn
yarn install
```

3. For iOS, install CocoaPods dependencies

```sh
bundle install
bundle exec pod install --project-directory=ios
```

### Running the App

#### Start Metro server

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

#### Run on Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

#### Run on iOS

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

## Development

### Running Tests

```sh
# Using npm
npm test

# OR using Yarn
yarn test
```

### Linting

```sh
# Using npm
npm run lint

# OR using Yarn
yarn lint
```

## Troubleshooting

If you encounter issues:

1. Make sure all dependencies are installed correctly
2. Check that your environment is set up correctly by following the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup)
3. For iOS-specific issues, try cleaning the build folder:
   ```sh
   cd ios && pod install && cd ..
   ```
4. For Android-specific issues, try cleaning the Gradle cache:
   ```sh
   cd android && ./gradlew clean && cd ..
   ```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
