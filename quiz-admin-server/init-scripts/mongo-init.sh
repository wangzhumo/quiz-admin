#!/bin/bash
echo ">========================Creating mongo users==============================="
mongosh --authenticationDatabase admin --host localhost -u ${MONGODB_INITDB_ROOT_USERNAME} -p ${MONGODB_INITDB_ROOT_PASSWORD} ${MONGODB_INITDB_DATABASE} <<EOF
use ${MONGO_DATABASE};
db.createUser({
    user: '${MONGO_USERNAME}',
    pwd: '${MONGO_PASSWORD}',
    roles: [{role: 'readWrite',db: '${MONGO_DATABASE}'}],
    mechanisms: [ 'SCRAM-SHA-1', 'SCRAM-SHA-256' ]
});
EOF
echo ">========================Mongo users created.==============================="