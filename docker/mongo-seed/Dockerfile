FROM mongo

COPY members.json /members.json
COPY users.json /users.json

CMD mongoimport --host mongodb --db data --type json --file /members.json --jsonArray && mongoimport --host mongodb --db data --type json --file /users.json --jsonArray
