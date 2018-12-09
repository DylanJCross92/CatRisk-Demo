#!/bin/sh -ex

cd /opt/apps/catrisk-score && npm install && npm run ${ENVIRONMENT}
npm install -g pushstate-server

pushstate-server /opt/apps/catrisk-score/build/ 8911