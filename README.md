# NFL Uniforms Matchup Viewer

An interactive, responsive static web application that allows users to visualize and customize matchups between NFL teams. Users can select Home and Away teams, mix and match different uniform elements (helmets, jerseys, pants, and socks), and export high-resolution images of their custom matchups.

## Features

- **Interactive Uniform Mixer:** Select from all NFL teams to set up dynamic Away vs. Home matchups.
- **Deep Customization:** Toggle through alternate, throwback, and color rush options for individual uniform layers (helmets, jerseys, pants, socks).
- **Responsive Studio Design:** A sleek dark-mode UI with a studio-lit white stage that perfectly frames the mannequins.
- **High-Resolution Export:** A built-in "Save Image" feature that uses mathematically perfect cropping and scaling to generate a standardized 1920x1080 high-res PNG image of your matchup, regardless of your screen size or browser zoom.
- **Client-Side Rendering:** Completely static and runs purely in the browser with no backend requirements.

## Technologies Used

- **HTML5 & CSS3:** For structuring the application and styling the modern, responsive interface using Flexbox, Container Queries, and custom CSS variables.
- **Vanilla JavaScript:** Powers the state management, uniform layer rendering, and UI interactions.
- **html2canvas:** Used to cleanly capture and export the customized uniform stage into standardized PNG files.

## How to Run Locally

Since the application uses standard web technologies, it can be run using any local web server. Opening the `index.html` file directly in your browser (`file://`) will work for viewing the app, but a local server is required to use the "Save Image" functionality due to standard browser CORS security restrictions.

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/NFL-Uniforms.git
   cd NFL-Uniforms
   ```
2. Start a local web server. If you have Python installed, you can easily run:
   ```bash
   python3 -m http.server 8000
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## Image Assets

The application relies on transparent PNG assets located in the `assets/` directory. Each team folder contains the individual layers (helmets, jerseys, pants, socks) that the application's `UniformMixer` class dynamically stacks to build the full mannequins.

## License

This project is for educational and entertainment purposes. Team logos, names, and uniform designs are trademarks of the National Football League and its respective teams.
