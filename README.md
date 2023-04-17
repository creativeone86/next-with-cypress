## Getting Started

Install packages

```bash
yarn
```

Run the development server:

```bash
yarn dev
```

## Run Cypress on WSL2

```bash
# just update wsl to latest
wsl --update
wsl --shutdown
```

then install at least Google Chrome

Change directories into the temp folder: cd /tmp

Use wget to download it: 
```bash
sudo wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
```

Get the current stable version: 

```bash
sudo dpkg -i google-chrome-stable_current_amd64.deb
```

Fix the package: 

```bash
sudo apt install --fix-broken -y
```

Configure the package: 

```bash
sudo dpkg -i google-chrome-stable_current_amd64.deb
```

Note the following command will run it in the cloud

```bash
npx cypress run --record --key xxx
```

Reference for setting up github actions for cypress 

https://github.com/cypress-io/github-action#end-to-end-testing