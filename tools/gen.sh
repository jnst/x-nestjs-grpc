#! /bin/bash

cd $(dirname $0)/../

#PROTOC=./node_modules/grpc-tools/bin/protoc
SRC_DIR=./protos
DEST_DIR=./codegen

# generate js codes via grpc-tools
#./node_modules/.bin/grpc_tools_node_protoc \
#  --proto_path=${SRC_DIR} \
#  --js_out=import_style=commonjs,binary:${DEST_DIR} \
#  --grpc_out=${DEST_DIR} \
#  --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
#  ${SRC_DIR}/**/*.proto

## generate d.ts codes
#${PROTOC} \
#  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
#  --ts_out=${DEST_DIR} \
#  -I ${SRC_DIR} \
#  ${SRC_DIR}/**/*.proto

# protobuf.js
node_modules/.bin/pbjs \
--target static-module \
--wrap commonjs \
--keep-case \
--path ${SRC_DIR} \
--out ${DEST_DIR}/rpc.js \
${SRC_DIR}/**/*.proto

node_modules/.bin/pbts \
--out ${DEST_DIR}/rpc.d.ts \
${DEST_DIR}/rpc.js
