terraform {
  backend "s3" {
    bucket = "example-terraform-backend"
    key    = "dev/terraform.tfstate"
    region = "ap-northeast-1"
  }
}

module "hello_trigger" {
  source               = "./modules/cloudwatch_schedule"
  lambda_function_name = "${var.apex_function_names["hello"]}"
  lambda_function_arn  = "${var.apex_function_hello}"
  schedule_expression  = "cron(0 7 * * ? *)"
}
