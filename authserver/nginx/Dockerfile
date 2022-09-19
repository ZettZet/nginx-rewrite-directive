FROM registry.access.redhat.com/ubi8/nginx-118:1-46 as final
USER 0

COPY default.conf /etc/nginx/conf.d/default.template
COPY nginx.conf /etc/nginx/nginx.conf
COPY replace_placeholders.sh /

ENTRYPOINT [ "sh", "/replace_placeholders.sh" ]

RUN chown -R 1001:0 /etc/nginx && \
    chown -R 1001:0 /usr/share/nginx/html

USER 1001
CMD ["nginx",  "-g", "daemon off;"]