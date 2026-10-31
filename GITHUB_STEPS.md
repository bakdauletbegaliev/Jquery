# Upload to GitHub (PowerShell)

Repository: https://github.com/bakdauletbegaliev/Jquery

1. Extract the ZIP archive to a normal folder on your computer.
2. Open that folder in VS Code.
3. Open **Terminal → New Terminal** (PowerShell).
4. Run the following commands **one line at a time**.

```powershell
git init
git branch -M main

git add index.html styles.css
git commit -m "Create website layout and navigation"

git add js/basics.js
git commit -m "Implement jQuery setup and selectors"

git add effects.html js/effects.js assets/sunrise.svg
git commit -m "Add visibility fade and slide effects"

git add dom.html js/dom.js assets/ocean.svg
git commit -m "Build DOM manipulation and form examples"

git add animations.html js/animations.js
git commit -m "Implement three animation tasks"

git add project.html js/project.js
git commit -m "Create interactive accordion mini project"

git add README.md DEFENSE_GUIDE.md TEST_CHECKLIST.md GITHUB_STEPS.md
git commit -m "Add instructions testing and defense guide"

git remote add origin https://github.com/bakdauletbegaliev/Jquery.git
git push -u origin main
```

This creates **7 meaningful commits** in a logical order.

## Deploy the website

Open **GitHub → Jquery → Settings → Pages**. Choose **Deploy from a branch**, then **main** and **/(root)**. Save and open the link GitHub shows after publication.

**Submit to Moodle:** the GitHub repository link above. The assignment also requires GitHub Pages or Netlify publishing and an in-person defense.

## If `remote origin already exists`

The remote is already configured. Skip `git remote add origin ...` and use `git push -u origin main`.
