FROM node:9.4.0-alpine
MAINTAINER Tom Gornick <thomas.gornick@icg360.com>

CMD ["/usr/local/bin/catrisk-score_startup.sh"]

RUN apk update && \
    apk add \
    vim \
    curl \
    openssl \
    bash

# Install Sempl
RUN curl -o /usr/local/bin/sempl \
    https://raw.githubusercontent.com/nextrevision/sempl/master/sempl
RUN chmod +x /usr/local/bin/sempl

# Configure catrisk-score
RUN mkdir -p /opt/apps/catrisk-score
ADD deploy/catrisk-score_current.tar.gz /opt/apps/catrisk-score/
COPY files/catrisk-score_startup.sh /usr/local/bin/catrisk-score_startup.sh
COPY vars /opt/apps/catrisk-score/vars
RUN chmod -R +x /usr/local/bin/catrisk-score_startup.sh
