# node-aws-serverless-typescript
Basic node aws serverless typescript apps.

# REQUIREMENTS:
1. node 12.x
2. npm
3. webpack cli (`npm install webpack -g && npm install webpack-cli -g`)
4. serverless cli (`npm install -g serverless`)

The serverless-ts-test has a webpack config which pulls DB and Model from serverless-test app.
To invoke/test locally cd into `serverless-ts-test` and run `sls invoke local -f hello -l`
