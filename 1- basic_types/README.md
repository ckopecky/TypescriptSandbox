# Type

- a type is an easy way to refer to the different properties and functions that a value has

example:

"red": string: 
- It's a string.
- It is a value that has all the properties and methods that we assume a string has (i.e. `charAt(), charCodeAt(), concat(), includes(), endsWith(), indexOf(), lastIndexOf()`, etc). 
- types are shortcuts that describe the properties and methods available to us. 


| Type | Values that have this type |
| ---| ---|
| string | `'hi there'`, <br>`""`,<br> `"Today is Monday"` |
| number | `.000025`, <br>`-20`,<br> `40000000000` |
| boolean | `true`, <br>`false` |
| Date | `new Date()` |
| Todo | `{id: 1, completed: true, title: "Todo Title"}` |

*Every value has some sort of type that is not limited to this table*

#### Two main types of values: 

- primitive (types that are already available to us) 

- object (types we create)

|Primitive types  | Object Types  |
| ---| ---|
|number | functions |
| boolean | arrays|
string | classes |
| symbol| objects|
| void |  |
| null |  | 
| undefined | 

##### Why do we care about types? 

- Types are used by the Transcript Compiler to analyze our code for errors
- Types allow other engineers to understand what values we are passing around in our codebase. 

##### When to use?

- EVERYWHERE!







