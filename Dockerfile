FROM nginxinc/nginx-unprivileged:1-alpine

# Switch to root user for package installation
USER root

# Update and install latest packages
RUN apk update
RUN apk upgrade

# Install Python 3 and pip for building MkDocs documentation
RUN apk add python3
RUN apk add py-pip

# Set working directory and copy files to the container
WORKDIR /docs
COPY . .

# Create a virtual environment, activate it, and install MkDocs
# Then build the MkDocs site
RUN python3 -m venv /path/to/venv && \
. /path/to/venv/bin/activate && \
pip install mkdocs && \
mkdocs build

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# switch to nonroot user after building
USER 101