ARG RUBY_VERSION
FROM ruby:${RUBY_VERSION}

ARG NODE_MAJOR
RUN apt-get update -qq \
  && mkdir -p /etc/apt/keyrings \
  && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg \
  && echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_${NODE_MAJOR}.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list

# Application dependencies
RUN apt-get update -qq \
  && DEBIAN_FRONTEND=noninteractive apt-get install -yq --no-install-recommends \
    nodejs \
    libpq-dev \
    pkg-config \
    git \
    vim \
  && apt-get clean \
  && rm -rf /var/cache/apt/archives/* \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \
  && truncate -s 0 /var/log/*log

RUN npm install -g yarn

# Configure bundler
ENV LANG=C.UTF-8 \
  BUNDLE_JOBS=4 \
  BUNDLE_RETRY=3 \
  BUNDLE_BUNDLE_PATH="/usr/local/bundle" \
  BUNDLE_APP_CONFIG="/usr/local/bundle" \
  BUNDLE_BUNDLER_INJECT__ENABLE_PRISTINE="yes"

RUN mkdir -p /app
WORKDIR /app

EXPOSE 3000

CMD /app/.dockerdev/entrypoint.sh
