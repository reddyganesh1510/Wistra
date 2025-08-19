# Wistra Backend

Wistra Backend is a Node.js application that provides audio transcription, chat response generation, and chat history management functionalities. This project utilizes Express.js for routing and middleware, and integrates with OpenAI's APIs for audio processing and chat interactions.

## Features

- **Audio Transcription**: Upload audio files and receive transcriptions using OpenAI's Whisper API.
- **Chat Response Generation**: Interact with a chat interface that generates responses based on user input using OpenAI's ChatCompletion API.
- **Chat History Management**: Save and load chat messages, with the ability to clear history.

## Project Structure

```
wistra-backend
├── src
│   ├── app.js                  # Entry point of the application
│   ├── controllers             # Contains controller files for handling requests
│   │   ├── audioController.js   # Audio processing functions
│   │   ├── chatController.js    # Chat response generation functions
│   │   └── historyController.js  # Chat history management functions
│   ├── routes                  # Contains route definitions
│   │   ├── audioRoutes.js       # Routes for audio processing
│   │   ├── chatRoutes.js        # Routes for chat interactions
│   │   └── historyRoutes.js     # Routes for managing chat history
│   └── utils                   # Utility functions
│       ├── transcription.js      # Audio transcription utility
│       ├── chatResponse.js       # Chat response utility
│       └── historyManager.js     # Chat history management utility
├── package.json                # NPM configuration file
└── README.md                   # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd wistra-backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run the following command:

```
npm start
```

The server will start on the specified port, and you can access the API endpoints for audio transcription, chat responses, and chat history management.

## API Endpoints

- **Audio Processing**
  - `POST /api/audio/upload`: Upload an audio file for transcription.

- **Chat Interactions**
  - `POST /api/chat/respond`: Send a message and receive a chat response.

- **Chat History Management**
  - `GET /api/history`: Retrieve chat history.
  - `DELETE /api/history`: Clear chat history.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the ISC License.