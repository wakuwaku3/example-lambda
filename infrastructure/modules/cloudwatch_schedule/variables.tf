variable "lambda_function_name" {}
variable "lambda_function_arn" {}
variable "schedule_expression" {
  description = "cloudwatch schedule expression e.g. \"cron(0/5 * * * ? *)\""
}

