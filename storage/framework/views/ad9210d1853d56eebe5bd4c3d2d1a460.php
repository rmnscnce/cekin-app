
#!/usr/bin/env bash

/usr/bin/php /var/www/html/artisan config:cache --no-ansi -q
/usr/bin/php /var/www/html/artisan route:cache --no-ansi -q
/usr/bin/php /var/www/html/artisan view:cache --no-ansi -q<?php /**PATH phar:///var/home/user/devel/rmnscnce/seal/CekIn-App/vendor/fly-apps/dockerfile-laravel/builds/dockerfile-laravel/resources/views/fly/scripts/caches.blade.php ENDPATH**/ ?>