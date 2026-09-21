# Vignesh A - Portfolio Website

Personal portfolio of **Vignesh A**, a Java Full Stack Developer from Chennai, Tamil Nadu.
It introduces me, lists my skills and projects, and makes it easy for recruiters to contact me.

## Features

- Responsive layout built with Bootstrap 5, works on mobile, tablet and desktop
- Light and dark mode, and the choice is remembered in the browser
- Sections for About, Skills, Projects, Education and Contact
- Navbar that highlights the section you are reading
- Contact form that opens the visitor's email app with the message filled in
- Download button for my resume
- Keyboard friendly, with a skip link, visible focus and reduced motion respected

## Built with

- HTML5
- CSS3 (custom styles on top of Bootstrap)
- JavaScript (vanilla)
- Bootstrap 5.3
- Google Fonts: Bricolage Grotesque and Source Serif 4

## Project structure

```
portfolio/
├── index.html                  # page structure and content
├── css/
│   └── style.css               # all custom styling, colours at the top
├── js/
│   └── script.js               # theme toggle, navbar, contact form
├── assets/
│   ├── images/
│   │   └── profile.jpg         # my photo
│   └── resume/
│       └── Vignesh_A_Resume.pdf
└── README.md
```

## Run it locally

1. Clone or download this repository.
2. Open `index.html` in any browser.

If you use VS Code, install the **Live Server** extension, right-click `index.html` and choose **Open with Live Server**. The page refreshes every time you save.

An internet connection is needed because Bootstrap and the fonts load from a CDN.

## Customise it

- **Colours:** change the values in the `:root` block at the top of `css/style.css` (dark mode colours are right below it).
- **Content:** edit the text, skills and projects in `index.html`.
- **Photo:** replace `assets/images/profile.jpg` with your own picture.
- **Resume:** replace `assets/resume/Vignesh_A_Resume.pdf`, keeping the same file name.
- **Contact form email:** change `MY_EMAIL` at the top of `js/script.js`.

## Deploy on GitHub Pages

1. Push the project to a GitHub repository.
2. Open the repository, then go to **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then click **Save**.
5. After a minute or two the site is live at `https://vignes016-prog.github.io/<repository-name>/`.

## Contact

- Email: [vignes016@gmail.com](mailto:vignes016@gmail.com)
- GitHub: [github.com/vignes016-prog](https://github.com/vignes016-prog)
- LinkedIn: [linkedin.com/in/vignesh016](https://linkedin.com/in/vignesh016)
