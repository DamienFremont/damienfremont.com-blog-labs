# SCENARIO: Calculator - Do an addition
#   GIVEN   a running calculator app
type(Key.WIN + "calculator" + Key.ENTER)
wait("screen-home.png")
#     AND '5' is displayed
click("button-5.png")
wait("1471901563200.png")
#   WHEN I click on '+', '1', '='
click("1471902303880.png")
click("button-1.png")
click("button-equal.png")
#   THEN result should be '6'
wait("1471902151627.png")