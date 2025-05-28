# How to Update Your Academic Webpage

This document provides instructions on how to update and maintain your academic webpage.

## File Structure

Your academic webpage consists of the following key files:

- `index.html`: The main HTML file containing the structure of your webpage
- `styles.css`: Contains all styling for your webpage
- `script.js`: Contains JavaScript functionality for animations and interactivity

## Making Basic Updates

### Updating Content

To update content on your webpage, you'll need to edit the `index.html` file. Here's how to update different sections:

1. **About Me**: Find the section with `id="about"` and modify the text within the paragraph tags.
2. **Research Interests**: Find the section with `id="research"` and update the content within each `research-item` div.
3. **Projects**: Find the section with `id="projects"` and modify the content within each `project-card` div.
4. **Education & Publications**: Find the section with `id="education"` and update the timeline items and publication details.
5. **Experience**: Find the section with `id="experience"` and modify the timeline items.
6. **Skills & Courses**: Find the section with `id="skills"` and update the skill tags and course listings.
7. **Contact Information**: Find the section with `id="contact"` and update your contact details.

### Adding New Content

To add new content (e.g., a new project or publication):

1. Find the appropriate section in the HTML file
2. Copy an existing item (e.g., a project card or publication item)
3. Paste it where you want the new item to appear
4. Update the content with your new information

### Updating Styling

If you want to change the appearance of your webpage:

1. Open the `styles.css` file
2. To change colors, modify the CSS variables at the top of the file:
   - `--primary-color`: Currently dark purple
   - `--secondary-color`: Currently navy
   - `--accent-color`: Currently blue
   - `--dark-color`: Currently black

## Adding Your CV for Download

To enable the CV download functionality:

1. Add your CV file (PDF format recommended) to the website directory
2. In the `script.js` file, find the event listener for the CV download button
3. Replace the alert with code to download your CV file:
   ```javascript
   cvButton.addEventListener('click', function(e) {
       e.preventDefault();
       window.location.href = 'your-cv-filename.pdf';
   });
   ```

## Deploying Your Website

To deploy your website to a hosting service:

1. **GitHub Pages**: Create a GitHub repository named `yourusername.github.io`, upload these files, and your site will be available at `https://yourusername.github.io`
2. **Netlify/Vercel**: Create an account, connect to your GitHub repository, and follow their deployment instructions
3. **University Hosting**: Contact your university's IT department to inquire about hosting options for academic webpages

## Adding Profile Picture

To add your profile picture:

1. Add your image file to the website directory
2. In the `index.html` file, find the hero section or about section
3. Add an image tag with the path to your image:
   ```html
   <img src="your-image-filename.jpg" alt="Pegah Motaharinezhad" class="profile-image">
   ```
4. In the `styles.css` file, add styling for the profile image:
   ```css
   .profile-image {
       width: 200px;
       height: 200px;
       border-radius: 50%;
       object-fit: cover;
       border: 4px solid var(--primary-color);
   }
   ```

## Need Further Help?

If you need assistance with more complex updates or have questions about your webpage, feel free to reach out for support.
