# Portfolio App
A portfolio platform to showcase various skills in different projects. This app is built with the MESN stack: Mongo, Express, Sveltekit and Node. The app is developed with docker.

## Installation Instruction
- If you have bash/zsh:
  - Run `chmod +x pre-docker.sh` in root.
  - Run `./pre-docker.sh`
- For `cmd` or `powershell`:
  - Go to the folder `client` and rename `.env.example` to `.env`
  - Go to the folder `server` and rename `.env.example` to `.env`
- Run `docker-compose up` in the project root.
- The app will be available on http://localhost:5173