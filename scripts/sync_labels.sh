#!/usr/bin/env bash
# https://gist.github.com/PurpleBooth/8c974332e16f5f03aa82949c9e4f930d

set -xeuo pipefail

# Set the source repository
SOURCE_REPO=equinor/design-system

# Set the target repository
TARGET_REPO=equinor/design-system-mobile

# Get a list of labels from the source repo
LABELS=$(curl -H "Authorization: token $GITHUB_TOKEN" -s https://api.github.com/repos/$SOURCE_REPO/labels)

# Iterate over each label
echo "$LABELS" | jq -r --compact-output '.[]' | while read LABEL; do 
	# Extract the label name and color
	NAME=$(echo "$LABEL" | jq -r ".name")
	COLOR=$(echo "$LABEL" | jq -r ".color")

	# Create the label on the target repo
	curl -s -XPOST -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/repos/$TARGET_REPO/labels -d "{\"name\":\"$NAME\",\"color\":\"$COLOR\"}"
done
