FROM mongo

COPY members.json /members.json
COPY users.json /users.json

CMD mongoimport --host mongodb --db data --type json --file /members.json --maintainInsertionOrder --jsonArray && mongoimport --host mongodb --db data --type json --file /users.json --maintainInsertionOrder --jsonArray
