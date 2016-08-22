# SCENARIO: Calculator - Do a substraction
#   GIVEN   a running calculator app
type(Key.WIN + "calculator" + Key.ENTER)
wait("1471901583292.png")
#     AND '5' is displayed
click("1471901439420.png")
wait("1471901563200.png")
#   WHEN I click on '-', '1', '='
click("1471901612968.png")
click("1471901595751.png")
click("1471901627768.png")
#   THEN result should be '4'
wait("1471901656932.png")