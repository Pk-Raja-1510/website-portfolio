#!/bin/bash
pm2 describe website-portfolio > dev/null
RUNNING=$?

if [ "${RUNNING}" -ne 0 ]; then
  pm2 start yarn --name "website-portfolio" -- start
else
  
  pm2 restart website-portfolio
fi;

pm2 save

#pipeline check