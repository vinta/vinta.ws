#!/bin/bash
set -ex

# install plugins
mkdir -p plugins

for download_url in $(cat plugins.txt)
do
    curl -Ls $download_url -o plugin.zip
    unzip -oq plugin.zip -d plugins/
    rm -f plugin.zip
done

# install themes
mkdir -p themes

for download_url in $(cat themes.txt)
do
    curl -Ls $download_url -o theme.zip
    unzip -oq theme.zip -d themes/
    rm -f theme.zip
done
