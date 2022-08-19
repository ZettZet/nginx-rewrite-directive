#!/usr/bin/env sh

set -eu
envsubst '' < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.template.conf
exec "$@"
