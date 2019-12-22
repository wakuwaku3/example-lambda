resource "aws_cloudwatch_event_rule" "lambda" {
  name                = "lambda_rule_${var.lambda_function_name}"
  description         = "invoke lambda ${var.lambda_function_name}"
  schedule_expression = "${var.schedule_expression}"
}

resource "aws_cloudwatch_event_target" "lambda" {
  target_id = "lambda_target_${var.lambda_function_name}"
  rule      = "${aws_cloudwatch_event_rule.lambda.name}"
  arn       = "${var.lambda_function_arn}"
}

resource "aws_lambda_permission" "lambda" {
  statement_id  = "AllowExecutionFromCloudWatch_${var.lambda_function_name}"
  action        = "lambda:InvokeFunction"
  function_name = "${aws_cloudwatch_event_target.lambda.arn}"
  principal     = "events.amazonaws.com"
  source_arn    = "${aws_cloudwatch_event_rule.lambda.arn}"
}
