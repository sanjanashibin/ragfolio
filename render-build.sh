#!/usr/bin/env bash

# install python deps
pip install -r requirements.txt

# build frontend
cd frontend
npm install
npm run build
cd ..

# create embeddings
python rag/create-embeddings.py
