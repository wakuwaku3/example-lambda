# example-lambda

## required

- Terraform v0.12.7
- provider.aws v2.25.0
- Apex 1.0.0

## command

### scripts

#### build

`npx webpack`

#### watch

`npx webpack --watch`

### lambda

#### deploy

`apex deploy`

### infrastructure

#### init

`apex infra init`

#### dry run

`apex infra plan`

#### apply

`apex infra apply`

### Release

```sh
git tag 1.0.0
git push origin --tags
```

## environment variables

- AWS_ACCESS_KEY_ID
- AWS_REGION
- AWS_SECRET_ACCESS_KEY
