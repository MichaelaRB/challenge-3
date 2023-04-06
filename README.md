# password-generator
Applying what we've learned about javascript to create a password generator.

## Description
In the modern day, web security is more important than ever. Weak passwords that are easy to guess or commonly reused passwords leave people vulnerable. Some devices or browsers have built in automatic password generators, but those require no input from the user. This password generator allows the user to define the length of their password, as well as what characters they'd like to be included from lowercase letters, uppercase letters, integers, and special characters. The password generated should include at least one of every chosen character type.

## Usage
The webpage can be accessed at https://michaelarb.github.io/password-generator/

This is what the deployed website looks like:

![deployed-password-generator](https://user-images.githubusercontent.com/126620642/230426857-5dbd4b06-e201-429d-8799-d026ffedf8c6.png)


After pressing the "Generate Password" button, you will be prompted to enter a length for the password and select from four separate categories for characters to include: lowercase letters, uppercase letters, numbers, and special characters. 
The accepted range for the length of the password is 8 to 128 characters. Any value outside this range will end the generator and alert the user that the value they chose is out of the range. If a value is entered that is not a number, such as a word (ex. writing "ten" instead of 10), the page will alert the user that the value is not a number and that they need to try again.
The program will terminate if no character sets are chosen. At least one set of characters needs to be chosen in order for the program to function. An alert will pop up if none of the four categories are selected to inform the user that they need to choose at least one.
The program is set up to guarantee at least one character will be chosen from each selected category. In order to prevent these characters from being in a predictable pattern, ie. all at the start or at the end, the generated password will be randomly rearranged before being displayed to the user.
The generated password can be copied directly. If the user wants a new password, simply press the "Generate Password" button again and it will be replaced by the next generated password. They will be required to input the length and chosen character types again.
