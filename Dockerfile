FROM php:8.1-fpm

ARG UNAME=khoatran
ARG UID=1000
ARG GID=1000


# Copy composer.lock and composer.json into the working directory
COPY composer.json /var/www/html/

# Set working directory
WORKDIR /var/www/html/

# Install dependencies for the operating system software
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    libzip-dev \
    unzip \
    git \
    libonig-dev \
    curl

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install extensions for php
RUN docker-php-ext-install pdo_mysql zip exif pcntl sockets bcmath
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install gd



# Install composer (php package manager)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash
RUN apt-get install --yes nodejs

# Copy existing application directory contents to the working directory
COPY . /var/www/html
#Copy existing application directory permissions
# COPY --chown=khoatran:khoatran . /var/www/html

# Assign permissions of the working directory to the www-data user
RUN chown -R www-data:www-data \
        /var/www/html/storage \
        /var/www/html/bootstrap/cache


# Expose port 9000 and start php-fpm server (for FastCGI Process Manager)
EXPOSE 9000

# Create a group and user
RUN groupadd -g $GID -o $UNAME

RUN useradd -m -u $UID -g $GID -o -s /bin/bash $UNAME

RUN addgroup $UNAME root
RUN addgroup $UNAME adm
RUN addgroup $UNAME sudo

RUN chown -R $UNAME:$UNAME /var/www/html

USER $UNAME


CMD ["php-fpm"]

