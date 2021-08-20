# Highlight bad characters

Highlight all non-ascii characters (fork from [Highlight Dodgy Characters](https://github.com/nachocab/vscode-highlight-dodgy-characters))

![Screenshot](./screenshot.png "Screenshot")

## Features

It highlights all the non-ascii characters, including dashes, fancy quotes and emojis.

### Whitelisting

You can override the whitelist of characters that will not be highlighted in your workspace or user settings:
```
"highlight-dodgy-characters.whitelist": "´€£¡¿äàáâãåǎąăæçćĉčđďðèéêëěęĝģğĥìíîïıĵķĺļłľñńňöòóôõőøœŕřẞßśŝşšșťţþțüùúûűũųůŵýÿŷźžż"
```

### Examples

An example file that contains dodgy characters can be found [here](./src/test/examples.txt)

## Previous authors

- [Highlight Dodgy Characters](https://github.com/nachocab/vscode-highlight-dodgy-characters)
- [Highlight Bad Chars](https://github.com/WengerK/vscode-highlight-bad-chars/)
- [Highlight Dodgy Characters for SublimeText 3](https://github.com/TuureKaunisto/highlight-dodgy-chars)
