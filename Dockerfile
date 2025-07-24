FROM nginxinc/nginx-unprivileged:1-alpine

# Use root to install
# switch to nonroot user after building
# the container
USER root
RUN apk update
RUN apk upgrade
RUN apk add python3
RUN apk add py-pip

WORKDIR /docs
COPY . .

RUN python3 -m venv /path/to/venv && \
. /path/to/venv/bin/activate && \
pip install mkdocs && \
mkdocs build
# Install mkdocs
# RUN pip install mkdocs

# # ... and mkdocs extensions
# RUN pip install mkdocs-readthedocs mkdocs-redirects mkdocs-awesome-pages-plugin

# # WORKDIR /.
# RUN mkdocs build
# # Default mkdocs directory
# # Copy content to this dir
# RUN mkdir /mkdocs/
# RUN mkdir /mkdocs/docs/
# RUN mkdir /mkdocs/docs/mkdocs
# RUN mkdir /mkdocs/docs/mkdocs/stylesheets
# RUN mkdir /mkdocs/docs/mkdocs/images
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# # mkDocs build - pushes files to this directory
# # frontend-nginx.conf - refers to this directory when serving
# RUN mkdir /mkdocs/site/

# WORKDIR /mkdocs/docs/
USER 101