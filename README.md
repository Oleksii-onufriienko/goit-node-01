# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
https://monosnap.com/file/O9l6kcaKvGfsTEyE7rPPsWC9kiixax

# Получаем контакт по id

node index.js --action get --id 5
https://monosnap.com/file/UfiGsUayMkv2wS2h7Wm3jQZdYKYAu3

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/OD4AaWTXuGDZ7leiF4ugeaRpO4ReFz

# Удаляем контакт

node index.js --action remove --id=3
https://monosnap.com/file/qNEZsIAw9fBZCd0gAPTIp1xBR5e3cm
