#!/bin/bash

# folder where the repo is in
local_dir=$1

# repo name
repo_name=$2

###################################################
echo "##### Updating. $(date) #####"
cd "$local_dir/${repo_name}" && git pull && jekyll build && cd ..

rm -rf "${local_dir}/html"

cp -R "${repo_name}/_site" "${local_dir}/html"
echo "### Done. ###"
##################################################





