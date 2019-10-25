# https://hub.docker.com/_/wordpress
FROM wordpress:5.2.4-fpm as builder

WORKDIR /usr/src/wp-cli/
RUN curl -Os https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && \
    chmod +x wp-cli.phar && \
    mv wp-cli.phar wp

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    unzip && \
    apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app/
COPY wordpress/ /usr/src/app/
RUN chmod +x install.sh && \
    sh install.sh && \
    rm -rf \
    install.sh \
    plugins.txt \
    themes.txt

###

FROM wordpress:5.2.4-fpm

RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
COPY php/custom.ini /usr/local/etc/php/conf.d/
COPY php-fpm/zz-docker.conf /usr/local/etc/php-fpm.d/

COPY --from=builder /usr/src/wp-cli/wp /usr/local/bin/
COPY --from=builder /usr/src/app/ /usr/src/wordpress/wp-content/
RUN cd /usr/src/wordpress/wp-content/ && \
    rm -rf \
    plugins/akismet/ \
    plugins/hello.php \
    themes/twentysixteen/ \
    themes/twentyseventeen/

# HACK: `101` is the user id of `nginx` user in `nginx:x.x.x-alpine` Docker image
# https://stackoverflow.com/questions/36824222/how-to-change-the-nginx-process-user-of-the-official-docker-image-nginx
RUN usermod -u 101 www-data && \
    groupmod -g 101 www-data

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["php-fpm"]
