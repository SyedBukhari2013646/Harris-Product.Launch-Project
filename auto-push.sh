#!/bin/bash
while true; do
  git add .
  git commit -m "Auto update: $(date)"
  git push origin main
  sleep 60  # Checks for changes every 60 seconds
done





#!/bin/bash
while true; do
  git add .
  git commit -m "Auto update: $(date)"
  git push origin main
  sleep 60  # Checks for changes every 60 seconds
done


