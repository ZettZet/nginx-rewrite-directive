#!/usr/bin/env sh

set -eu
envsubst '$REALM_LABEL $CLIENT_ID_LABEL' < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.template.conf
exec "$@"
