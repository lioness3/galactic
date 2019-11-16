# _Code Review 5_
#### _Galactic Age Calculator_
****************
## _November 15, 2019_
****************
#### _By: Joann Carter_
***************
# _Description_
##### This is an example of how I use Webpack and Test Driven Development. The TDD was done starting with writing a test to fail, then writing a code to work and finally adjusting the output to pass the test. There is no UI for this project, only business Logic.I have set a pre-determined life expectancy of Earth Years to 169 years old.
#  _Specification Chart_
| Behavior  | Input  | Output  |
|--------------|-----------|-----------|
|takes a users age |  30 |  userAge = 30|
|converts age to (xplanet) age| 30 on Earth |125 years old on Mercury |
| rounds age to nearest whole number |7.2 | 7|
|calculates life remaining on each planet|169(xplanet years) - age(xplanet years)| 12 years remaining|
******************
# _Technology Used_
* Jest
* Javascript
* Webpack
* MDN
*******
###### _Licensing_
MIT public
