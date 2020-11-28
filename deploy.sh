npm run build
aws s3 cp build s3://todos.sheaclose.com --recursive --profile=personal
aws cloudfront create-invalidation --distribution-id E1NZITFE38QJGH --paths '/*' --profile=personal
